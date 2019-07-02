# How do I use the iostat command?

### Useful arguments

These are the standard options that should always be used when gathering statistics:

**Options**

```
* \-d – Show the device report
* \-x – Show extended statistics if available
* \-t – Print the time of each report for reference purposes when referring back to captured output
* \-k or \-m – Print the stats in kb/sec (or mb/sec) rather than blocks/second. 
```

After the options, there are two optional arguments.  The first specifies how frequently samples should be taken, and the second is how many samples to take.  Usually taking samples every 5 seconds is about right, so that should be the first value unless you have a compelling reason to use a different value.  So if you want to take 5 samples, you would use a value like this:

```
# iostat -dxtk 5 5
```

> *IOStat reports on data based on all that has transpired since the last time it was run.  So the first value reported by iostat will always be skewed, and should be discarded!*
> 

### Understanding the output

#### The Devices

```
03/03/2014 06:41:35 PM
Device:         rrqm/s   wrqm/s     r/s     w/s    rkB/s    wkB/s avgrq-sz avgqu-sz   await  svctm  %util
sda               0.01     4.97    0.04    4.80     1.14    39.09    16.62     0.00    0.22   0.09   0.04
sdb               0.00     0.24    0.31    3.57    18.67   356.34   193.55     0.00    0.58   0.14   0.05
sdc               0.00     0.62    8.37   67.78    66.00   372.47    11.51     0.02    0.30   0.03   0.20
dm-0              0.00     0.00    0.01    0.02     0.04     0.08     8.00     0.00    2.84   0.23   0.00
dm-1              0.00     0.00    0.04    9.75     1.09    39.01     8.19     0.00    0.20   0.05   0.04
```

Obviously dm-1 is not a useful datapoint, because if you use the mount command, it looks like this:

```
/dev/mapper/VolGroup00-LogVol00 on / type ext3 (rw)
```

However, you can lookup how those map by looking at the symlink for that path like so:

```
$ ls -l /dev/mapper/VolGroup00-LogVol00
lrwxrwxrwx 1 root root 7 Nov 15 16:34 /dev/mapper/VolGroup00-LogVol00 -> ../dm-1
```

Or you can look at the major/minor numbers for dm-1, and look for their matching values in /sys/block/dm*/dev:

```
$ ls -l /dev/dm-1
brw-rw---- 1 root disk 253, 1 Nov 15 16:34 /dev/dm-1

$ cd /sys/block
$ for i in dm-*; do echo -n ${i}: ; cat $i/dev; done | grep 253:1
dm-1:253:1
```

This is going to be it. 

### Understanding the key metrics

#### Reads (r/s) and Writes (w/s) per second

On Momentum these give us our greatest perspective on throughput.  This is the average number of operations of each type being done per second (obviously).  Where you're not streaming large amounts of data, this is a key performance metric, which is most of the workloads we deal with.  For tuning the databse loads, sometimes it can be key to look at values like the volume read/written per second (rkB/s and wkB/s) as well as merged request values for tuning relevant system values.  However that is beyond the scope of this article.  At peak periods, seeing where you get with r/s and w/s and comparing that as you go into and come out of peak activity times can help you see whether you are exceeding system capacity.

#### Average Queue Size - avgqu-sz

Typically we want to see this in the single digits per drive, preferably down around 2/drive.  Now, this can be tricky, because how many spindles you're using is going to vary based on the RAID level.  Since we only support RAID1 and RAID10 for filesystems connected to our software that makes things a little easier.  RAID1 is really just a single device - because the other drive is just mirroring the writes.  There is no performance gain, only reliability.  That means we want to see the numbers stay under ~2 for any RAID1 device.

For RAID10, half the devices are used for mirroring, and the other half are used for striping.  That means we want to divide the total number of disks by 2 in order to get the number of spindles in play.  For any array of disks, for each of those spindles in play we can handle up to 2 items in the queue.  So if you have an 8-disk RAID10, that means you're looking for a queue size of less than eight.  (8/2 = 4 spindles, 4 * 2 (max queue length) = 8).

This number is important for spinning disks, because each new item that goes into the queue has to wait for all of the other items in the queue to process for it to be processed.  That means that if your storage is being sluggish about responding to requests, the performance impact begins to multiply as the queue grows.  However, for SSD drives, or other flash-based storage this becomes a lot less meaningful.  Further, a high queue count should not - on its own - be considered a problem.  If you have a larger than normal queue, but your svctime is really small, and r/s, w/s are high then this metric should be discarded.  The nature of RAID performance, the IO schedulers in Linux, the speed of the disks, and profile of IO operations all are factors here.

#### Host Wait (await)

This can be a somewhat misleading function, but still has merit to review.  The easiest way to understand this is in terms of the math used to calculate it, which looks like this:

```
avgqu-sz * svctm / (%util/100)
```

So this fuction gives you an aggregate picture of where the system is at performance-wise.  This measures the time it takes for an IO request to complete from the time it is put into the queue until it is complete.  This is where the average queue size importance comes into play.  If you have 10 items in the queue on average, and each one takes ~5ms to complete (svctm) then each IO request will have a latency of roughly 50 ms from request to completion.  However, there are a number of factors outside of the storage system that can impact this metric.

#### Tip

> *Generally speaking, you want this value to be as close to the svctm as possible.  Typically, the wider the disparity between await and svctm, the worse the system is performing.*
> 

#### Storage Wait (svctm)

This value reports the average time it takes for an IO request to complete from the time it is popped off the queue, until the time the request is completed.  That makes this a critically important metric for understanding the performance of your underlying IO subsystem.  Unfortunately - it also cannot be trustd, because the Linux kernel doesn't actually measure this.  This value is a calculated metric instead, and is not particularly reliable as a result (especially in multi-disk systems.)

Still - it's all we have right now.  So just keep that in mind, and remember that if the data you see looks weird and inconsistant (especially a high load) in that kind of environment don't trust this value.  Better an educated guess than no guess at all though, so roughly speaking, the longer these requests take, the more sluggish your system is going to feel – especially if you have a lot of requests, and they are queuing up as a result.

So what are good numbers here?  This is a tough call to absolutize, but generally we want to see values less than 1.  Up to 10ms might be acceptable, but over that is concerning.  Over 20 is really bad.

#### Utilization (%util)

This value is an expression of the amount of time a device spent processing requests vs being idle, and is calculated like so:

```
utilization = ( (read requests + write requests) * service time in ms / 1000 ms ) * 100%
```

As a result, it is not always 100% accurate for multi-device setups like RAID or SAN storage.  However, taken together with the svctm and avgqu-sz columns it can give a reasonably accurate picture of the IO performance of a system.
