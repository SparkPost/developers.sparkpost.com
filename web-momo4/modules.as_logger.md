| [Prev](modules.antivirus)  | Chapter 71. Modules Reference |  [Next](modules.auth_ds) |

## 71.7. as_logger – Audit Series Logger

<a className="indexterm" name="idp19786864"></a>

The as_logger module is designed for use on an `eccmgr` instance. It journals replicated audit series to disk at a configurable, periodic interval. Audit series can be included or excluded from being journalled by specifying regular expressions in an inclusion or exclusion list. The files are stored in a configurable directory. The name of each file is formed from the series name followed by a timestamp. The content of each file is a serialized "snapshot" of the audit series at that moment (reflecting the interval ending at the moment the file is written). The audit series is reset at each interval so that each file represents only one data period.

Post-analysis of these data files can be performed via custom scripts. These data files can also be inspected from the cidr_server command line using the **cidr_cli** command. For more information, see [Chapter 39, *CIDR Server*](cluster.cidr_server "Chapter 39. CIDR Server") .

### 71.7.1. Configuration

The as_logger module is a singleton and is configured through the `eccluster.conf` file with a stanza such as:

<a name="example.as_logger_3"></a>

**Example 71.9. as_logger Configuration**

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

The following are configuration options valid in the as_logger scope:

<dl className="variablelist">

<dt>base_dir</dt>

<dd>

Directory where the serialized files should be created.

</dd>

<dt>log_interval</dt>

<dd>

Interval in seconds at which the replicated audit_series should be serialized to disk. At this interval, files will be created in the directory specified by `base_dir`, named from the series name suffixed with a timestamp.

</dd>

<dt>series_exclude</dt>

<dd>

List of regular expressions specifying series names that should be excluded from serialization. This option is only applicable when `series_include_default` is set to `all`. Remember to use regular expression syntax; e.g., "series" performs a substring match; "^myseries$" is an exact match, etc.

</dd>

<dt>series_include</dt>

<dd>

List of regular expressions specifying series names which should be included in serialization. This option is only applicable when `series_include_default` is set to `none`. Remember to use regular expression syntax; e.g., "series" performs a substring match; "^myseries$" is an exact match, etc.

</dd>

<dt>series_include_default</dt>

<dd>

Whether all series are serialized, or not, by default. Valid values are `all` or `none`. If left unspecified, `none` is assumed.

</dd>

</dl>

### 71.7.2. `cidr_maintain.conf` File

The files created by the as_logger module are maintained by the **cidr_maintain** command. This command is run from the cron job `/etc/cron.d/msys-ecelerity-cidr-server`. The format of the entry is as follows:

<a name="example.as_logger.cidr_maintain_3"></a>

**Example 71.10. cidr_maintain crontab entry**

```
0 0 * * * /opt/msys/ecelerity/bin/cidr_maintain -c \
/opt/msys/ecelerity/etc/cidr_maintain.conf 2>&1 > /dev/null
```

The **cidr_maintain** command is invoked with the `-c` option which points to the configuration file. In this case, the configuration options used with the **cidr_maintain** command are found in the `/opt/msys/ecelerity/etc/cidr_maintain.conf` configuration file. Typical settings are shown below.

```
# Auto-Discover series cidr databases to maintain
# default is true
auto = true

# Manually list series to maintain, as an alternative to 'auto' mode
# series = rbl zombie

# retain 30 days of data (default)
retention = 30

# condense data one day or older (default)
condense = 0

# Where to look for cidr database files
# default is /var/log/eccluster/aslogger on a manager node,
# or /var/log/ecelerity/audit_series_logs standalone. Leave it unset
# to allow the system to look in the right spot automatically
basedir = "/var/log/eccluster/aslogger"
```

The `retention` setting determines when data is purged, `condense` turns file compression off and on, and `basedir` sets the base directory for log files.

The `auto` and `series` options are useful if you wish to apply different settings to different audit series. For example, you could create a file with the following settings:

```
auto = "false"
series = "rbl"
condense = 30
retention = 60
```

| [Prev](modules.antivirus)  | [Up](modules) |  [Next](modules.auth_ds) |
| 71.6. antivirus – Antivirus  | [Table of Contents](index) |  71.8. auth_ds – Datasource based SMTP Authentication |

