| [Prev](modules.icu)  | Chapter 14. Modules Reference |  [Next](modules.imageanalyzer.php) |

## 14.39. ilf_logger Module

**Configuration Change. ** This module is available as of version 3.5.6.

The Incremental License Fee module is designed for users who have usage-based licenses. It provides an easy way to comply with the usage reporting requirements contained in the agreement with Message Systems. Usage files are written to `/var/log/ecelerity/ilf`; bundle these files and sent them to Message Systems as appropriate.

In its default configuration, this module collects data on a daily basis. The following information is captured:

*   SMTP Receptions

*   SMTP Deliveries

*   SMPP Receptions

*   SMPP Deliveries

*   MM7 Receptions

*   MM7 Deliveries

*   Push Deliveries

### 14.39.1. Configuration

```
ilf_logger {
  write_interval = 60
  filename_format = "/var/log/ecelerity/ilf/%m-%d-%Y.ilfdata"
}
```

<dl className="variablelist">

<dt>filename_format</dt>

<dd>

Set the name and location of the log files. The default value for this option is `/var/log/ecelerity/ilf/%m-%d-%Y.ilfdata`.

</dd>

<dt>write_interval</dt>

<dd>

How often to write to file. The default value for this option is `60` seconds.

</dd>

</dl>

| [Prev](modules.icu)  | [Up](modules.php) |  [Next](modules.imageanalyzer.php) |
| 14.38. icu – ICU  | [Table of Contents](index) |  14.40. imageanalyzer – Module |
