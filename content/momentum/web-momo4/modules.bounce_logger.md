| [Prev](modules.bounce_classifier_override)  | Chapter 71. Modules Reference |  [Next](modules.brightmail) |

## 71.13. bounce_logger – Momentum-Style Bounce Logging

<a className="indexterm" name="idp20140576"></a>

The ec_logger and event_hydrant modules provide full disposition status of every message that goes through Momentum. However, it is often convenient to view status of only bounced messages. The bounce_logger module writes only inband (or protocol-time) and out-of-band bounces to a single log file.

For details about the bouncelog file format, see [Section 35.3, “`bouncelog`”](log_formats.bouncelog "35.3. bouncelog").

### 71.13.1. Configuration

To configure the bounce_logger module, load it in the `ecelerity.conf` file. The following is the default configuration:

<a name="modules.bounce_logger.node.example"></a>

**Example 71.21. bounce_logger Configuration**

```
bounce_logger "bounce_logger"
{
   bouncelog = "/var/log/ecelerity/bouncelog.ec"
   bouncelog_mode = 0644
   heartbeat = 60
}
```

This configuration instructs Momentum to write a `bouncelog` file to `/var/log/ecelerity/bouncelog.ec` with the file permissions 0644.

The `heartbeat` option sets the interval at which "heartbeat" entries will write to the log. Default value is `60`. The heartbeat entries in the log are essential for proper operation of the real time stats pieces, and changing the default value of `heartbeat` is not recommended unless advised to do so by Message Systems support.

### Note

If you find that you have rejectlog entries with the reason "550 5.7.1 [internal] discarded by policy", and you are having difficulty in correlating those rejections with your policy rules, it could be because your bounce processing configuration is set to blackhole any detected bounces. If this is the case, you should expect to see a corresponding entry in your bounce log, except in the case where the internal bounce classifier has determined that the incoming message was classified as BC_SUBSCRIBE, a subscription request. The bounce logger does not log this type of incoming mail because it does not relate to a specific outgoing message originating from your site.

In the configuration, you can also specify which events to log or not to log. Events will be logged based on the following lines in your configuration file:

```
log_inband_bounces = <on|off:  default on>
log_outofband_bounces = <on|off:  default on>
log_transient_failures = <on|off:  default on>
```

The `log_transient_failures` option creates a log entry of type ‘`T`’ in the bounce log along with the actual bounce log line. Apart from the type identifier, the log entry for a transient failure is the same as other bounce log entries. Note that bounce log entries differ in format from ec_logger entries. The default value for this option is `on`.

The bounce_logger relies on additional global configuration options: [bounce_domains](conf.ref.bounce_domains "bounce_domains"), [bounce_behavior](conf.ref.bounce_behavior "bounce_behavior"), [bounce_suppress_list](conf.ref.bounce_suppress_list "bounce_suppress_list") and [bounce_pattern](conf.ref.bounce_pattern "bounce_pattern").

The default log file created by this logger is rotated by the utility script **ec_rotate**. For more information, see [ec_rotate](executable.ec_rotate "ec_rotate").

### 71.13.2. Configuration of Aggregated Cluster Node Logging

When the bounce_logger is defined in the `ecelerity-cluster.conf` file, it configures the files used to create aggregated text logs of node events.

The default `ecelerity-cluster.conf` file defines the following bounce_logger:

<a name="modules.bounce_logger.cluster.example"></a>

**Example 71.22. bounce_logger in ecelerity-cluster.conf**

```
bounce_logger "bounce_logger_cluster" {
  bouncelog = "cluster:///var/log/ecelerity/bouncelog.cluster=>master"
}
```

For a detailed explanation of setting up cluster-wide consolidated logging, see [Section 71.30.2, “Configuration of Aggregated Cluster Node Logging”](modules.ec_logger#modules.ec_logger.cluster "71.30.2. Configuration of Aggregated Cluster Node Logging").

### 71.13.3. Configuration for the Cluster Manager

The bounce_logger module can also be used to configure log events that occur on the cluster manager. Configuration is similar to [Section 71.13.1, “Configuration”](modules.bounce_logger#modules.bounce_logger.node "71.13.1. Configuration") with the exception that the bounce_logger module is loaded in the `eccluster.conf` file.

### 71.13.4. Console Commands

The bounce_logger module allows for a limited set of online commands via `ec_console`:

<dl className="variablelist">

<dt>

bounce_logger:*`bounce_logger_rt`* reopen logs

</dt>

<dd>

If you move a log, use the ec_console command **reopen logs**      to close and reopen all the log files.

</dd>

</dl>

| [Prev](modules.bounce_classifier_override)  | [Up](modules) |  [Next](modules.brightmail) |
| 71.12. bounce_classifier_override – Override/Augment Bounce Classifications  | [Table of Contents](index) |  71.14. brightmail – Symantec Brightmail™ Content Scanning Support |

