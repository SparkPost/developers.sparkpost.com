| [Prev](modules.ds_core)  | Chapter 14. Modules Reference |  [Next](modules.eleven.php) |

## 14.31. ec_logger – Momentum-Style Logging

<a class="indexterm" name="idp19804912"></a>

ec_logger module is a self-contained entity that tracks the full disposition status of every message that goes through Momentum. Everything either ends up in the mainlog or rejectlog. Together these two logs provide a full picture of all the mail transiting the system.

ec_logger writes three log files, mainlog.ec, paniclog.ec and rejectlog.ec. The mainlog.ec format was designed to be a concise, machine-parseable, computationally inexpensive and complete format for writing information about every message received and delivered by Momentum. Fixed position codes signify whether the log line represents a reception, delivery, transient failure or permanent failure. For more general information about ecelerity-style logging see [Section 4.5, “Logging”](operations.logging "4.5. Logging").

### 14.31.1. Configuration

The writing of ec_logger format logs is configured in your `ecelerity.conf` file. All logging capabilities in Momentum are implemented through the extension API. To load the ec_logger module, you add the following lines to the main body of your ecelerity.conf file:

<a name="example.ec_logger.3"></a>

**Example 14.62. ec_logger module**

```
ec_logger "ec_logger1"
{
   mainlog = "/var/log/ecelerity/mainlog.ec"
   paniclog = "/var/log/ecelerity/paniclog.ec"
   rejectlog = "/var/log/ecelerity/rejectlog.ec"
   acctlog = "/var/log/ecelerity/acctlog.ec"
   importlog = "/var/log/ecelerity/importlog.ec"
   heartbeat = 60
}
```

This instructs Momentum to write a mainlog file containing message receipt and delivery records to `/var/log/ecelerity/mainlog.ec`, a paniclog containing error messages to `/var/log/ecelerity/paniclog.ec`, and a rejection log to `/var/log/ecelerity/rejectlog.ec`. The `heartbeat` option sets the interval at which "heartbeat" entries will be written to the log. `60` is the default value. The heartbeat entries in the log are essential for proper operation of the real time stats pieces, and changing the default value of `heartbeat` is not recommended unless advised to do so by Message Systems support.

Heartbeat entries in the log take the following format:

`1251222268@@@@M1`

The first field is a Unix timestamp and the next three fields are unused. Having three unused fields ensures that, like other logs, the fifth field is the log entry type. This makes parsing easier.

The final field is a type identifier. Having a different `type` identifier in version 3.0, helps differentiate log entries when a log has both version 2.2 and version 3.0 entries.

The ec_logger module can log authentication and authorization events together in an accounting log using the `acctlog` option. You should note that, by default, no log rotation is performed for the acctlog. For more information on logging authorization and authentication events see [Section 2.2.2, “Configuring Authentication for the Control Listener”](conf.aaa#conf.control_authen "2.2.2. Configuring Authentication for the Control Listener").

You can also record the outcome of a spool import operation (see [spool import](console_commands.spool_import "spool import")) by configuring a path for the `importlog`. You should note that, by default, no log rotation is performed for the importlog.

You can also control the permissions of the various log files. The options to use are shown below with their default values.

```
mainlog_mode = 0644
paniclog_mode = 0644
rejectlog_mode = 0644
acctlog_log_mode = 0644
importlog_mode = 0644
```

Be sure to assign octal numbers to these options.

Additional configuration directives supported inside the ec_logger module configuration are:

```
log_receptions = <true|false:  default true>
log_deliveries = <true|false:  default true>
log_transient_failures = <true|false:  default true>
log_permanent_failures = <true|false:  default true>
log_rejections = <true|false:  default true>
log_errors = <true|false:  default true>
```

These directives allow you to specify precisely which events to log or not to log. Typically you will always want to log deliveries, receptions and errors. The log entry type is indicated by the fifth field. The type indicators are as follows:

*   `R` – Indicates a reception

*   `D` – Indicates a delivery

*   `X` – In a cluster configuration, transfers between nodes are indicated by an ‘`X`’. ‘`X`’ entries appear in the delivery log on the transferring node indicating that the message left for another cluster node. The node receiving the message will have an ‘`R`’ entry in its log.

*   `T` – Indicates a transient failure

*   `B` – Indicates both an in-band and an out-of-band bounce, if an in-band bounce, a `P` entry is logged in the main log.

There is no log type indicator for a rejection and the format of the rejection log differs from the other logs. Nor is there a log type indicator for the `log_errors` option which logs errors to the paniclog as unstructured text. The different log formats are described in [Appendix E, *Log Formats*](log_formats "Appendix E. Log Formats") .

The acctlog format also differs from the other logs as do the log type indicators. Indicators are as follows:

*   `N` – indicates an autheNtication log entry

*   `Z` – indicates an authoriZation entry

*   `T` – indicates an authentication timeout

*   `?` – indicates an unknown type

For information about the formats of the various logs written by ec_logger see [Section 4.5.1, “ec_logger”](operations.logging#operations.logging.ec_logger "4.5.1. ec_logger") and also [Section E.1, “Log Formats for Version 3.x”](log_formats.version_3.php "E.1. Log Formats for Version 3.x").

### 14.31.2. ec_loggers in a Cluster Configuration

In a cluster configuration that includes the web UI, there are typically three ec_loggers defined. These loggers, with their conventional instance names, are as follows:

*   `ec_logger "ec_logger_cluster"` – this logger is defined in the `ecelerity-cluster.conf` file and creates a log in jlog format that is used for consolidating log files on the cluster manager

*   `ec_logger "ec_logger"` – the node-specific log files in text format. This ec_logger module is typically defined in the `ecelerity.conf` file.

*   `ec_logger "ec_logger_rt"` – the node-specific log files in jlog format used by the web UI. This ec_logger module is typically defined in the `ecelerity.conf` file.

### Note

For each logger that is defined, there will be a log entry in the appropriate log file. If you define a logger and do **not** specify a value for the `paniclog`, `rejectlog`, `acctlog` and `mainlog` options, the default values apply and each logger will write a separate entry to the same log file.

### 14.31.3. ec_logger Management Using Console Commands

The ec_logger module can be controlled through the `ec_console`; the following commands are available:

**14.31.3.1. ec_logger:*`ec_logger1`* help**

Using this command displays the available console commands. The output is as follows:

```
reopen logs
	Close and reopen log files
```
**14.31.3.2. ec_logger:*`ec_logger1`* reopen logs (version 3.0)**

This command closes and reopens the logs.

| [Prev](modules.ds_core)  | [Up](modules.php) |  [Next](modules.eleven.php) |
| 14.30. ds_core – Datasource Query Core  | [Table of Contents](index) |  14.32. eleven – Module |
