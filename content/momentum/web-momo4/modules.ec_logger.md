|     |     |     |
| --- | --- | --- |
| [Prev](modules.ds_core)  | Chapter 71. Modules Reference |  [Next](modules.eleven) |

## 71.30. EC_logger – Momentum-Style Logging

<a className="indexterm" name="idp21571376"></a>

The EC_logger module is used for tracking messages from generation through delivery. It creates log files that provide the disposition status of every message that goes through Momentum, including message generation, message reception, and message delivery.

This module provides up to five logs, depending upon its configuration. For details about the format of each log, follow the corresponding link:

*   [main log](log_formats.mainlog "35.7. mainlog") - logs message disposition including reception, delivery, transient failure, and permanent failure events

*   [paniclog](log_formats.paniclog "35.8. paniclog") - aids in debugging system errors by logging system events

*   [rejectlog](log_formats.rejectlog "35.9. rejectlog") - logs records of inbound messages that are rejected by Momentum, either due to policy or protocol deviations

*   [acctlog](log_formats#log_formats.acctlog "35.1. acctlog") - logs both authentication entries and authorization entries for the ESMTP_Listener and Control_Listener

*   [importlog](log_formats.importlog "35.6. importlog") - logs outcome of spool imports (By default, no log rotation is performed for this log.)

### 71.30.1. Configuration

To configure the ec_logger module, load it in the `ecelerity.conf` file. The following is the default configuration:

<a name="modules.ec_logger.node.example"></a>

**Example 71.55. ec_logger Configuration**

```
ec_logger "ec_logger"
{
   mainlog = "/var/log/ecelerity/mainlog.ec"
   rejectlog = "/var/log/ecelerity/rejectlog.ec"
   paniclog = "/var/log/ecelerity/paniclog.ec"
   acctlog = "/var/log/ecelerity/acctlog.ec"
   #importlog is not written by default
   #importlog = "/var/log/ecelerity/importlog.ec"
   heartbeat = 60
}
```

This configuration instructs Momentum to write a `mainlog` file to `/var/log/ecelerity/mainlog.ec` and a `rejectlog` file to `/var/log/ecelerity/rejectlog.ec`. Together, these logs provide a full picture of all the mail transiting Momentum. Both log files are included in the default configuration.

The `paniclog` file is written to `/var/log/ecelerity/paniclog.ec`. This log file is used to debug errors in your system. Under normal circumstances, this log should be empty, excepting informational startup messages. It is recommended that you periodically check your `paniclog.ec` (or schedule a cron job to do it for you) to look for any anomalous events. This log file is included in the default configuration.

The `acctlog` file is an accounting log and is written to `/var/log/ecelerity/acctlog.ec`. Configure this log if you are using authentication or authorization for the ESMTP_Listener or Control_Listener. This log file is included in the default configuration. For additional details, see [Section 19.5.5, “Logging SMTP Authentication Events”](inbound_smtp#inbound_smtp.logging.auth "19.5.5. Logging SMTP Authentication Events") and [Section 17.4, “Control_Listener Authorization”](control_authz "17.4. Control_Listener Authorization").

The `importlog` file is written to `/var/log/ecelerity/importlog.ec`. This log records the outcome of a spool import operation. This log file is not included in the default configuration. For more information, see [spool import](console_commands.spool_import "spool import").

The `heartbeat` option sets the interval at which "heartbeat" entries will be written to the logs. Default value is `60`. The heartbeat entries in the logs are essential for proper operation of the real time stats pieces, and changing the default value of `heartbeat` is not recommended unless advised to do so by Message Systems support.

In the configuration, you can also control the permissions of the various log files and specify precisely which events to log or not to log.

To control the permissions, add the following lines to your `ecelerity.conf` file:

```
mainlog_mode = 0644
paniclog_mode = 0644
rejectlog_mode = 0644
acctlog_log_mode = 0644
importlog_mode = 0644
```

Note that the default value is 0644\. Be sure to assign octal numbers to these options.

The following directives enable you to specify which events to log or not to log. Events will be logged based on the following lines in your `ecelerity.conf` file:

```
log_receptions = <true|false:  default true>
log_deliveries = <true|false:  default true>
log_transient_failures = <true|false:  default true>
log_permanent_failures = <true|false:  default true>
log_rejections = <true|false:  default true>
log_errors = <true|false:  default true>
```

Typically, you will want to log deliveries, receptions, and errors.

The default log files created by this logger are rotated by the utility script **ec_rotate**. For more information, see [ec_rotate](executable.ec_rotate "ec_rotate").

### 71.30.2. Configuration of Aggregated Cluster Node Logging

When the ec_logger is defined in the `ecelerity-cluster.conf` file, it configures the files used to create aggregated text logs of node events.

The default `ecelerity-cluster.conf` file defines the following ec_logger:

<a name="modules.ec_logger.cluster.example"></a>

**Example 71.56. ec_logger in ecelerity-cluster.conf**

```
ec_logger "ec_logger_cluster" {
  mainlog = "cluster:///var/log/ecelerity/mainlog.cluster=>master"
  paniclog = "cluster:///var/log/ecelerity/paniclog.cluster=>master"
  rejectlog = "cluster:///var/log/ecelerity/rejectlog.cluster=>master"
  acctlog = "cluster:///var/log/ecelerity/acctlog.cluster=>master"
}
```

Momentum provides two facilities that aid administrators in setting up cluster-wide consolidated logging. The first is a node-local clustered I/O layer: `cluster://` URI schema. A typical log destination looks like cluster:///var/log/ecelerity/*`log_name`*.cluster=>master

where

*   `cluster://` tells the I/O abstraction layer to use node-local segmented data format.

*   /var/log/ecelerity/*`log_name`*.cluster is the directory in which the node-local log stream will be stored (created on demand).

*   `=>master` specifies that a subscriber named "master" should be added to the node-local log stream if it is created on demand.

For log aggregation,

*   `cluster://` URI schema is an alias for `jlog://`. It tells the io_wrapper subsystem that we are opening a jlog and not a regular file.

*   /var/log/ecelerity/*`log_name`*.cluster is the path.

*   `=>master` is an optional parameter that jlog uses to create a subscriber when opening the log for writing.

If there were no subscribers, items in the log could be deleted immediately. Normally, readers will add their own subscriber, but you do not want data to go missing between the time the writer first creates the jlog and the time a reader first opens it, so you provide the name of one of the readers. The default subscriber name is `master`.

The jlog files created on a node by lines such as `mainlog = "cluster:///var/log/ecelerity/mainlog.cluster=>master"` in the ec_logger module, are processed by `eccmgr` to create a text file on the log aggregator.

Creating this logger causes the node to produce logs in the durable journalled jlog format. On its own, this causes logs to accumulate on disk. For them to find their way to the log aggregator, the `logs` dictionary within the cluster module needs to be configured to publish those jlogs. For details, see [logs](modules.cluster#option.logs.dictionary) .

### 71.30.3. Configuration for the Cluster Manager

The ec_logger module can also be used to configure log events that occur on the cluster manager. Configuration is similar to [Section 71.30.1, “Configuration”](modules.ec_logger#modules.ec_logger.node "71.30.1. Configuration") with the exception that the ec_logger module is loaded in the `eccluster.conf` file.

The default `eccluster.conf` file defines the following loggers:

<a name="modules.ec_logger.eccmgr.example"></a>

**Example 71.57. Logger in eccluster.conf**

```
ec_logger "ec_logger"
{
  rejectlog = "/var/log/eccluster/rejectlog.ec"
  mainlog = "/var/log/eccluster/mainlog.ec"
  heartbeat = "0"
  paniclog = "/var/log/eccluster/paniclog.ec"
}
```

Values are specified for the `rejectlog` and `mainlog` because `eccmgr` runs inside the ecelerity process and will otherwise try to open the default log files.

Since `eccmgr` does not transit messages, only the `paniclog` will have entries. For this same reason, the `heartbeat` option is turned off, otherwise the `rejectlog` and `mainlog` will be filled with heartbeat markers.

### 71.30.4. Console Commands

The ec_logger module is accessible through the `ec_console` for run-time configuration and control.

The following **ec_logger** commands are available:

<dl className="variablelist">

<dt>ec_logger:*`ec_logger1`* help</dt>

<dd>

Using this command displays the available console commands. The output is as follows:

```
reopen logs
	Close and reopen log files
```
</dd>

<dt>ec_logger:*`ec_logger1`* reopen logs</dt>

<dd>

Closes and reopens the logs.

</dd>

</dl>

|     |     |     |
| --- | --- | --- |
| [Prev](modules.ds_core)  | [Up](modules) |  [Next](modules.eleven) |
| 71.29. ds_core - Datasource Query Core  | [Table of Contents](index) |  71.31. eleven – Eleven eXpurgate Content Scanning |

