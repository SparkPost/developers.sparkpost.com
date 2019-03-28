|     |     |     |
| --- | --- | --- |
| [Prev](modules.ipv6_lookup)  | Chapter 14. Modules Reference |  [Next](modules.live.bounce.updates.php) |

## 14.43. jlog – The jlog Module

<a class="indexterm" name="idp20267248"></a>

jlog-formatted logs are binary logs used by the web console and by centralized cluster logging. Additionally, custom deployments can log data to jlog files for consumption by perl scripts. In turn, these scripts may push the data elsewhere, to a database for example.

### Warning

We expressly recommend **against** writing jlogs to an NFS file system because of concerns about its performance in general and its reliability, especially on Linux.

### 14.43.1. Configuration

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

The **ec_rt_stats2** command performs statistical analysis on jlog files. For more information see [ec_rt_stats2](executable.ec_rt_stats2 "ec_rt_stats2").

**14.43.1.1. jlog Executable Files**

There are three executable files used for analyzing and maintaining jlog files. These are:

*   [jlog_change_endian](executable.jlog_change_endian "jlog_change_endian")

*   [jlog_sanity_check](executable.jlog_sanity_check "jlog_sanity_check")

*   [jlogctl](executable.jlogctl "jlogctl")

### 14.43.2. Using JLog::Reader

Any jlog files that you create can be read by a Perl script using the JLog::Reader module that ships with Momentum. This module is found in the `/opt/msys/lib/perl5/vendor_perl/5.10.0/x86_64-linux-thread-multi/JLog` directory on any Momentum node.

A common use case is to process the jlog files created by a custom_logger module. Suppose that you have the following custom_logger:

<a name="modules.jlog.reader.custom_logger.example"></a>

**Example 14.71. custom_logger**

```
custom_logger "custom_logger_jlog" {
  # custom logging in jlog format
  delivery_logfile = "jlog://var/log/ecelerity/delivery_log_rt=>my_subscriber"
  delivery_format = "%t@%r@%R@%vctx_mess{customerid}"
}
```

In [Example 14.71, “custom_logger”](modules.jlog#modules.jlog.reader.custom_logger.example "Example 14.71. custom_logger") a jlog is created at `/var/log/ecelerity/delivery_log_rt` and has a subscriber name `my_subscriber` You can read this jlog in the following way:

<a name="crm.processing.logs.jlog.reader.example"></a>

**Example 14.72. JLog::Reader example**

```
#!/opt/ecelerity/3rdParty/bin/perl
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

This code opens a jlog and reads each line in that jlog. The `$path` variable should match the path configured in the custom_logger module as should the `$subscriber` variable. The `checkpoint` method indicates that records have been read successfully to this point. Records are removed after they have been read by all registered subscribers.

For more information about JLog::Reader issue the command **`/opt/msys/3rdParty/bin/perldoc JLog::Reader`**              .

|     |     |     |
| --- | --- | --- |
| [Prev](modules.ipv6_lookup)  | [Up](modules.php) |  [Next](modules.live.bounce.updates.php) |
| 14.42. ipv6_lookup – Multi-address-family MX Records  | [Table of Contents](index) |  14.44. Live Bounce Updates – Module |
