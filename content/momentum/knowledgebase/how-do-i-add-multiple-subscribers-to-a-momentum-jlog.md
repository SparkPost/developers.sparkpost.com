# How do I add multiple subscribers to a Momentum jlog?

### What is jlog?

JLog is short for "journaled log" and this package is really an API and implementation that is libjlog. What is libjlog? libjlog is a pure C, very simple durable message queue with multiple subscribers and publishers (both thread and multi-process safe). The basic concept is that publishers can open a log and write messages to it while subscribers open the log and consume messages from it. libjlog abstracts away the need to perform log rotation or maintenance by publishing into fixed size log buffers and eliminating old log buffers when there are no more consumers pending.

The jlog will collect data in multiple files called "segments". Each segment can grow to 4MB in size. Segments remain on disk until all known subscribers have consumed the data from that segment and issued a checkpoint against the jlog.



### How do I add another subscriber to a Momentum jlog?

To have multiple subscribers read from the same jlog, you should alter the subscriber list in your logger configuration so that it includes both subscribers, comma separated:
For example, to have both a "master" subscriber and an "other" subscriber:

```
delivery_logfile = "jlog:///var/log/ecelerity/delivery.queue=>master,other"
```

Because jlogs are writing data to segments, it means that if you have a high volume of data going to the jlog and one of the subscribers is not running for some time, that you will see increased disk space usage. If you decide to decommission one of the subscribers, you will need to stop all writers and readers, adjust the logger configuration to remove the redundant subscriber, and then use the jlogctl tool to remove the subscriber from the log.

```
delivery_logfile = "jlog:///var/log/ecelerity/delivery.queue=>master"

/opt/msys/jlog/bin/jlogctl -e other /var/log/ecelerity/delivery.queue
```