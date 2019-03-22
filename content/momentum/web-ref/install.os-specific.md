| [Prev](install.prepare)  | Chapter 1. Installation |  [Next](install.linux.php) |

## 1.5. Operating System Specific Preparation

Additionally you may want to tune your operating system as well, especially if you are running Momentum in a high-throughput environment.

### 1.5.1. Linux

While many of the tuning options in Linux can be affected at run-time, we highly recommend rebooting the system after making changes to ensure that the changes take effect automatically upon reboot.

**1.5.1.1. Kernel Memory Options**

Momentum uses system memory aggressively to reduce the amount of disk I/O it must perform while transmitting messages. This means that Momentum can consume large amounts of memory, especially if it has many messages enqueued. The Momentum memory manager makes heavy use of the mmap() system call. The default Linux limit for the maximum number of mmap segments is controlled by `vm.max_map_count` and is typically very low. `vm.max_map_count` is the maximum number of memory map areas a process may have. The hardware Memory Management Unit (MMU) allocates memory pages to the Virtual Memory Manger through a set of aliased lookup tables. This setting allows 768,000 addressable map areas to be available to the processes—about seven times the amount normally configured, but the intention is for Momentum to make maximum use of all available memory. This value needs to be raised in the `/etc/sysctl.conf` file.

`vm.max_map_count = 768000`

Once `vm.max_map_count` has been changed to this value, it need not be altered again.

To make this setting take effect without rebooting, the following command needs to be executed:

`**/sbin/sysctl -w "vm.max_map_count=768000"**`**1.5.1.2. Required RPMs**

When installing Momentum for Receiving on Red Hat 6 the complete list of required packages (beyond those installed with a stock installation) is as follows:

*   bzip2

*   cyrus-sasl (version 2.1 or higher)

*   expat

*   freetype

*   gmp

*   jre

*   libcap-devel

*   libjpeg

*   libpcap

*   libpng

*   openssl

*   zlib

### Note

Depending upon the options that you choose during installtion, all packages may not be required.

**1.5.1.3. PostgreSQL and Shared Memory**

You may need to change the default Linux kernel settings, if, on start up, you see a message such as the following:

```
2011-09-14 17:43:39 CST::@:[2877]: FATAL: could not create shared memory
segment: Invalid argument

2011-09-14 17:43:39 CST::@:[2877]: DETAIL: Failed system call was shmget(key=1,
size=219725824, 03600).

2011-09-14 17:43:39 CST::@:[2877]: HINT: This error usually means that
PostgreSQL's request for a shared memory segment exceeded your kernel's SHMMAX
parameter. You can either reduce the request size or reconfigure the kernel
with larger SHMMAX. To reduce the request size (currently 219725824 bytes),
reduce PostgreSQL's shared_buffers parameter (currently 25088) and/or its
max_connections parameter (currently 103).
```

According to the PostgreSQL site:

"The most important shared memory parameter is SHMMAX, the maximum size, in bytes, of a shared memory segment. If you get an error message from shmget like "Invalid argument", it is likely that this limit has been exceeded. The size of the required shared memory segment varies depending on several PostgreSQL configuration parameters, as shown in Table 17-2. (Any error message you might get will include the exact size of the failed allocation request.) You can, as a temporary solution, lower some of those settings to avoid the failure. While it is possible to get PostgreSQL to run with SHMMAX as small as 2 MB, you need considerably more for acceptable performance. Desirable settings are in the hundreds of megabytes to a few gigabytes."

### Note

For more information about configuring kernel resources for PostgreSQL see [Managing Kernel Resources](http://developer.postgresql.org/pgdocs/postgres/kernel-resources.html).

On Red Hat type systems adjust the shared memory settings by changing `/etc/sysctl.conf` file. Find the `kernel.shmmax` setting as shown below:

```
...
# Controls the maximum shared segment size, in bytes
kernel.shmmax = 1073741824
...
```

The PostgreSQL URL referenced above says, "For SHMMAX, the minimum required on x86 systems would be 268435456 (256 MB) and for 64-bit systems, it would be 1073741824 (1 GB)." SHMMAX needs to be a bit bigger than shared_buffers in bytes. You can determine the value of shared_buffers by executing the SQL statement: `SELECT setting,unit,current_setting(name) FROM pg_settings WHERE name='shared_buffers';`

After changing `sysctl.conf,` load your changes by running the command **`sysctl -p`**    .

**1.5.1.4. TCP Buffer Sizes**

Momentum performs automatic tcp buffer scaling to ensure that messages it sends can be fit into a single tcp packet whenever possible. To make sure that your buffers can be grown correctly, you should set the following parameters in `/etc/sysctl.conf`

```
net.core.rmem_default = 32768
net.core.wmem_default = 32768
net.core.rmem_max = 262144
net.core.wmem_max = 262144
```

These options are described below:

*   `net.core.rmem_default` – the default OS receive buffer size for all types of connections

*   `net.core.wmem_default` – the default OS send buffer size for all types of connections

*   `net.core.rmem_max` – the maximum OS receive buffer size for all types of connections. This is a typical tweak for high bandwidth applications particularly if using Gbit NICs.

*   `net.core.wmem_max` – the maximum OS send buffer size for all types of connections. This is a typical tweak for high bandwidth applications particularly if using Gbit NICs.

If your messages are larger than 32 kilobytes, the numeric setting should be adjusted to a multiple of 4096 that is larger than your message size.

**1.5.1.5. File Limits**

Momentum will automatically attempt to ensure that it can open enough file descriptors to handle all the socket connections and mail traffic it needs, but this ability is capped by an overall kernel parameter. Recommended settings in `/etc/sysctl.conf` are to allocate 4 to 5 times as many file descriptors as you will allow Momentum to have open connections, and to raise the system wide file descriptor limit to twice that. So, if you have Momentum's `Server_Max_Outbound_Connections` set to 50000, you would want the following tunings:

`fs.file-max = 250000`

This option sets the maximum number of file handles the kernel will allocate. With a setting of `250000` you can work with more simultaneous files.

**1.5.1.6. Local Port Reuse**

Momentum uses a very large number of connections, and is able to establish them very quickly. This can overwhelm the operating system's local set of ports if special parameters are not used. These issues can be addressed by placing the following lines in `/etc/sysctl.conf`:

```
net.ipv4.ip_local_port_range = 5000 63000
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_tw_recycle = 1
```

These options are described below:

*   `net.ipv4.ip_local_port_range` – moves the local port range up to 5000-63000\. This pushes the public usable IP range above the normal internal ports to avoid conflicts.

*   `net.ipv4.tcp_tw_reuse` – reuse sockets in the TIME_WAIT state for new connections when it is safe from a protocol viewpoint. Setting this to `1` enables reuse of open connections, increasing efficiency.

*   `net.ipv4.tcp_tw_recycle` – this enables fast recycling of TIME_WAIT sockets. A setting of `1` enables the reuse of sockets without the normal wait time.

You can also set `net.core.somaxconn = 1024` increasing the number of incoming connections backlog to `1024` and allowing Momentum to process more open connections.

**1.5.1.7. Disable SELinux**

Some operating systems such as Red Hat make use of the Security-Enhanced Linux (SELinux) security policies.

Running Momentum with SELinux enabled is not supported. Disable SELinux by editing `/etc/selinux/config` and setting `SELINUX=disabled` and then running **`setenforce 0`**   .

### 1.5.2. Solaris

**1.5.2.1. Disabling Hardware IP Checksums**

Certain OEM network cards (typically Broadcom) shipped with Sun x86/AMD54 servers can calculate TCP/IP checksums incorrectly for some packets, which can lead to poor performance. Normally, you would leave the checksum offloading enabled on the NIC, but if you suspect you are having problems, you can use external tools like TShark to look for checksum failures. If you are having problems, checksums can be disabled in the kernel by adding following setting to the `/etc/system` file to disable hardware TCP/IP checksums:

`set ip:dohwcksum = 0`
### Warning

Do not use this option with Solaris Sparc, as it will lead to significant performance degradation on most Sparc hardware.

Given the variety of different hardware combinations, disabling hardware IP checksums may require additional changes. Follow your manufacturer's recommendations.

If you find that your controller returns an invalid checksum, it would also be prudent to look at other network parameters such as jumbo frame support, switch port speeds, etc. to ensure that the checksum issue is not a symptom of a larger issue.

| [Prev](install.prepare)  | [Up](install.php) |  [Next](install.linux.php) |
| 1.4. Preparing the System  | [Table of Contents](index) |  1.6. Installation on Linux |
