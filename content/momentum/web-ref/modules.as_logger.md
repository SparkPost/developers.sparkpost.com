| [Prev](modules.antivirus)  | Chapter 14. Modules Reference |  [Next](modules.auth_ds.php) |

## 14.6. as_logger – Audit series logger

<a class="indexterm" name="idp17799600"></a>

For background on replicated audit series, please read [Section 7.7.1.5, “Replicated named audit series”](cluster.config.replication#cluster.replicated_audit_series "7.7.1.5. Replicated named audit series").

### Note

The as_logger module is an eccmgr (cluster manager) module, not an ecelerity module. For this reason, you cannot add this module using the web UI. You must manually change the `eccluster.conf` file. For instructions on doing this see [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files").

This module is designed for use on a cluster manager (eccmgr) instance. It journals replicated audit series to disk at a configurable, periodic interval. Audit series can be included or excluded from being journalled by specifying regular expressions in an inclusion or exclusion list. The files are stored in a configurable directory. The name of each file is formed from the series name followed by a timestamp. The content of each file is a serialized "snapshot" of the audit series at that moment (reflecting the interval ending at the moment the file is written). The audit series is reset at each interval so that each file represents only one data period.

Post-analysis of these data files can be performed using the cluster web console or via custom scripts. These data files can also be inspected from the cidr_server command line using the **cidr_cli** command. For more information see [Section 7.10, “The `cidr_server`”](cluster.cidr_server "7.10. The cidr_server").

### 14.6.1. Configuration (eccluster.conf)

<a name="example.as_logger_3"></a>

**Example 14.8. as_logger module**

```
as_logger
{
  log_interval = 60
  base_dir = "/var/log/eccluster/aslogger"

  # We can log *everything* by default, and
  # then list exclusions that should not be logged.
  series_include_default = "all"
  series_exclude = ( "spam$" "^other" )

  #################################################
  # Alternatively, we can log *nothing* by default,
  # and specify only the series we want to log.
  # series_include_default = none
  # series_include = ( "^keep-" "^myseries$ )
  #################################################
}
```

**Configuration Change. ** As of version 3.1 this module is a singleton. In version 3.0 add an instance name when defining this module.

Valid configuration parameters are:

<dl className="variablelist">

<dt>base_dir</dt>

<dd>

The directory where the serialized files should be created.

</dd>

<dt>log_interval</dt>

<dd>

The interval in seconds at which the replicated audit_series should be serialized to disk. At this interval, files will be created in the directory specified by `base_dir`, named from the series name suffixed with a timestamp.

</dd>

<dt>series_exclude</dt>

<dd>

A list of regular expressions specifying series names which should be excluded from serialization. This option is only applicable when `series_include_default` is set to `all`. Remember to use regular expression syntax; e.g., "series" performs a substring match; "^myseries$" is an exact match, etc.

</dd>

<dt>series_include</dt>

<dd>

A list of regular expressions specifying series names which should be included in serialization. This option is only applicable when `series_include_default` is set to `none`. Remember to use regular expression syntax; e.g., "series" performs a substring match; "^myseries$" is an exact match, etc.

</dd>

<dt>series_include_default</dt>

<dd>

This can have the value `all` or `none`. This controls whether all series are serialized, or not, by default. If left unspecified, `none` is assumed.

</dd>

</dl>

### 14.6.2. The `cidr_maintain.conf` File

The files created by the as_logger module are maintained by the **cidr_maintain** command. On Linux this command is run from the cron job, `/etc/cron.d/msys-ecelerity-cidr-server` and on Solaris it's run from root's crontab, `/var/spool/cron/crontabs/root`. In either case the entry looks like the following:

<a name="example.as_logger.cidr_maintain_3"></a>

**Example 14.9. cidr_maintain crontab entry**

```
0 0 * * * /opt/msys/ecelerity/bin/cidr_maintain -c \
/opt/msys/ecelerity/etc/cidr_maintain.conf 2>&1 > /dev/null
```

The **cidr_maintain** command is invoked with the `-c` option which points to the configuration file. In this case, the configuration options used with the **cidr_maintain** command are found in the `/opt/msys/ecelerity/etc/cidr_maintain.conf` configuration file. Typical settings are shown below.

```
# Auto-Discover series cidr databases to maintain
# auto = true
auto = true

# Manually list series to maintain, as an alternative to 'auto' mode
# series = rbl zombie

# retain 30 days of data
retention = 30

# condense data one day or older
condense = 0

# Where to look for cidr database files
basedir = "/var/log/eccluster/aslogger"
```

The `retention` setting determines when data is purged, `condense` turns file compression off and on while `basedir` sets the base directory for log files.

The `auto` and `series` options are useful if you wish to apply different settings to different audit series. For example, you could create a file with the following settings:

```
auto = "false"
series = "rbl"
condense = 30
retention = 60
```

| [Prev](modules.antivirus)  | [Up](modules.php) |  [Next](modules.auth_ds.php) |
| 14.5. antivirus – Antivirus Modules  | [Table of Contents](index) |  14.7. auth_ds – Datasource based SMTP Authentication |
