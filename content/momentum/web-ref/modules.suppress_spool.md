| [Prev](modules.stats_producer)  | Chapter 14. Modules Reference |  [Next](modules.syslog_io) |

## 14.72. suppress_spool – Deferred Message Spooling

<a class="indexterm" name="idp21539072"></a>

The primary bottleneck for most MTAs is spooling messages to disk. To be fully RFC compliant, an MTA must complete writing a message to disk before they communicate to the sender that it has been received. The purpose of this is so that in the event of crash or power failure, the MTA will not lose any messages.

For many outbound-oriented mailers and ESPs, this safety can be pushed back up into their application. If messages can be regenerated dynamically, then in the event of a crash it may be sufficent simply to know which messages have been delivered, so that the queue can be emptied and messages regenerated.

In this case, an administrator can gain considerable performance benefit from deferring spool attempts with the `suppress_spool` module. The `suppress_spool` module works by completely avoiding writing a message to disk until one of two things happens:

*   The configured threshold of retries in the `suppress_spool` module is reached.

*   A memory based policy decision (notably [max_resident_active_queue](conf.ref.max_resident_active_queue "max_resident_active_queue")) causes a forced spool write.

### 14.72.1. Configuration

<a name="example.suppress_spool3"></a>

**Example 14.102. suppress_spool module**

```
_unsafe_spool = true
suppress_spool "suppress_spool" {
  num_retries = 2
}
```

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

The `_unsafe_spool` line disables Momentum's internal protections to guarantee that a message is actually written to disk before acceptance. The module stanza loads the `suppress_spool` module and instructs it to only spool messages which have had three unsuccessful delivery attempts, namely, those that have been retried twice.

### Warning

This module is dangerous and can result in data loss if you experience a crash.

| [Prev](modules.stats_producer)  | [Up](modules) |  [Next](modules.syslog_io) |
| 14.71. statp – Stats Producer Module  | [Table of Contents](index) |  14.73. syslog_io – The syslog_io Module |
