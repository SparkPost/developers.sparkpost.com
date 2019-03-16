| [Prev](modules.ipv6_lookup)  | Chapter 71. Modules Reference |  [Next](modules.live.bounce.updates) |

## 71.43. jlog – jlog-Formatted Logging

<a className="indexterm" name="idp22053952"></a>

jlog-formatted logs are binary logs with independent producers, which write the logs, and subscribers, which consume the logs. Momentum jlogs present themselves as directories in the filesystem.

Momentum produces jlogs in the following:

*   Aggregated cluster node logging (see [Section 16.3, “`ecelerity-cluster.conf` File”](conf.ref.ecelerity_cluster.conf "16.3. ecelerity-cluster.conf File"))

*   event_hydrant module used for tracking messages (see [Section 71.33, “event_hydrant – Message Tracking”](modules.event_hydrant "71.33. event_hydrant – Message Tracking"))

*   Custom deployments configured to log data to jlog files for consumption by another application, such as Perl scripts. In turn, these scripts may push the data elsewhere, e.g.: to a database. (see [Section 71.25, “custom_logger – User-defined Logging”](modules.custom_logger "71.25. custom_logger – User-defined Logging"))

### Warning

We expressly recommend **against** writing jlogs to an NFS file system because of concerns about its performance in general and its reliability, especially on Linux.

### 71.43.1. Configuration

This module is loaded automatically as required and does not need to be explicitly included.

### Warning

If your system is generating jlogs, ensure that they are being consumed. Otherwise, the `/var/log/ecelerity` partition will become exceedingly large.

**71.43.1.1. jlog Executable Commands**

The following executable commands are used for analyzing and maintaining jlog files:

*   [jlog_change_endian](executable.jlog_change_endian "jlog_change_endian")

*   [jlog_sanity_check](executable.jlog_sanity_check "jlog_sanity_check")

*   [jlogctl](executable.jlogctl "jlogctl")

### 71.43.2. Using JLog::Reader

Using the JLog::Reader module that ships with Momentum, you can read your jlog files with a Perl script. This module is found in the `/opt/msys/3rdParty/lib/perl5/vendor_perl/5.16.3/x86_64-linux-thread-multi/JLog` directory on any Momentum node.

A common use case is to process the jlog files created by a custom_logger module. In [Example 71.68, “custom_logger”](modules.jlog#modules.jlog.reader.custom_logger.example "Example 71.68. custom_logger"), a jlog is created at `/var/log/ecelerity/delivery_log_rt` with a subscriber name `my_subscriber`.

<a name="modules.jlog.reader.custom_logger.example"></a>

**Example 71.68. custom_logger**

```
custom_logger "custom_logger_jlog" {
  # custom logging in jlog format
  delivery_logfile = "jlog://var/log/ecelerity/delivery_log_rt=>my_subscriber"
  delivery_format = "%t@%r@%R@%vctx_mess{customerid}"
}
```

You can read the jlog in the following way:

<a name="crm.processing.logs.jlog.reader.example"></a>

**Example 71.69. JLog::Reader example**

```
#!/opt/msys/3rdParty/bin/perl
use JLog::Reader;
my $path = "/var/log/ecelerity/delivery_log_rt";
my $subscriber = "my_subscriber";

my $reader = JLog::Reader->new($path);
$reader->open($subscriber);

while (my $line = $reader->read) {
  # Do something with $line such as process and push into a database
}
# If you're done with the various $line's or they were pushed to a db
# successfully set a checkpoint.
$reader->checkpoint();
# if you're done with reading the log, close it
$reader->close();
```

This code opens a jlog and reads each line in that jlog. The `$path` and `$subscriber` variables should match those configured in the custom_logger module. The `checkpoint` method indicates that records have been read successfully to this point. Records are removed after they have been read by all registered subscribers.

For more information about JLog::Reader, issue the command **`/opt/msys/3rdParty/bin/perldoc JLog::Reader`**              .

| [Prev](modules.ipv6_lookup)  | [Up](modules) |  [Next](modules.live.bounce.updates) |
| 71.42. ipv6_lookup – Multi-address-family MX Records  | [Table of Contents](index) |  71.44. Live Bounce Updates – Live Bounce Updates Service |

