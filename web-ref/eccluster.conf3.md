|     |     |     |
| --- | --- | --- |
| [Prev](cluster.ref)  | Chapter 10. Cluster Configuration Reference |  [Next](ecelerity-cluster.conf.php) |

<a name="eccluster.conf3"></a>
## Name

eccluster.conf — Momentum Cluster Manager configuration file

<a name="idp12476992"></a>
## Description

Whereas the `ecelerity.conf` file configures the behavior of a node, `eccluster.conf` configures the behavior of the Momentum Cluster Manager, **eccmgr**. This file is found in the `/opt/msys/ecelerity/etc/conf/default/` directory.Configuration changes to `eccluster.conf` cannot be made through the web UI. You must manually change this file if the default values need changing. For instructions on doing this see [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files").

<a name="eccluster.conf3.example"></a>

**Example 10.1. The `eccluster.conf` file**

```
Security {
  User = "ecuser"
  Group = "ecuser"
}

# Centralized logs are deposited here
Logs {
  logfile = "/var/log/eccluster/%Y/%m/%d/%{l}/%{s}/%{n}"
  file_mode = "0640"
  dir_mode = "0755"
}

Control_Listener {
  AuthDigestMD5Parameters = [
    uri = "ecauth://"
  ]
  Enable_Authentication = "true"

  Enable_Authorization = "false"
  AuthorizationParameters = [
    uri = "ecauth://"
  ]

  Listen "/tmp/2025" {
    Enable_Authentication = "false"
  }
  Listen "127.0.0.1:2025" {
  }
}

# troubleshoot the eccmgr instance by looking for its logs
# in /var/log/eccluster/paniclog.ec
ec_logger "ec_logger"
{
  rejectlog = "/var/log/eccluster/rejectlog.ec"
  mainlog = "/var/log/eccluster/mainlog.ec"
  heartbeat = "0"
  paniclog = "/var/log/eccluster/paniclog.ec"
#  acctlog = "/var/log/eccluster/acctlog.ec"
}

include "webui-common.conf"

# Pull in auxillary information prepared by the installer; this must be the
# last thing in the top level eccluster.conf file, as it is intended to overlay
# the webui-common.conf file (for example)
readonly_include "/opt/msys/etc/installer/eccmgr.d/ecdb.conf"
```

Using the system console from the cluster manager, you can view the contents of the `eccluster.conf` file. For instance, if your configuration matches [Example 10.1, “The `eccluster.conf` file”](eccluster.conf3#eccluster.conf3.example "Example 10.1. The eccluster.conf file"), the output of **config show Logs**           is as follows:

```
10:47:34 /tmp/2025> config show Logs
dir_mode = "0755"
logfile = "/var/log/eccluster/%Y/%m/%d/%{l}/%{s}/%{n}"
file_mode = "0640"
```

Since the `eccluster.conf` file is specific to the cluster manager, you cannot view the `Logs` scope from the system console on a cluster node.

<a name="eccluster.conf3.included.files"></a>
## Included Files

The `webui-common.conf` contains the `ecauth` authentication scheme defined in an auth_ds module. For a discussion of the `ecauth` scheme see [webui-common.conf](webui-common.conf "webui-common.conf").

The `/opt/msys/etc/installer/eccmgr.d/ecdb.conf` file contains the definition of the `ecdb` datasource file. This definition of `ecdb` overrides the definition of `ecdb` found in the `webui-common.conf` file because it is the last included file.

<a name="eccluster.conf3.logs"></a>
## Logs

The `Logs` scope must be configured in order to aggregate node logs on the cluster manager. This topic is discussed at length in [Section 7.6, “Log Aggregation”](cluster.config.logging "7.6. Log Aggregation").

If you wish to change options defined within the scope of the `Logs` stanza you must do this manually—you cannot change them through the web UI. For instructions on manually changing configuration files see [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files").

<dl className="variablelist">

<dt><a name="eccluster.conf3.logs.logfile"></a>Logfile</dt>

<dd>

This describes the full pathname of the log file to be written. As eccmgr is capable of writing log files into several distinct locations, a simple interpolation set is provided. All of the POSIX strftime macros are supported (see the POSIX strftime standard) as well as two special interpolations. %{n} will interpolate to the name of the Momentum cluster node that generated the log line in question. %{l} will interpolate to the name of the log as named in the logs section of the cluster configuration in the `ecelerity.conf`. For more information about the POSIX strftime macros see [strftime](http://www.opengroup.org/onlinepubs/009695399/functions/strftime.html).

There is no restriction on the value assigned to this option as long as it creates a valid path after all the macros get expanded; it does not have to exist beforehand, eccmgr will create directories as needed, hence the `Dir_Mode`.

</dd>

<dt><a name="eccluster.conf3.logs.max_open"></a>Max_Open</dt>

<dd>

The maximum number of concurrently open log files.

</dd>

<dt><a name="eccluster.conf3.logs.max_idle"></a>Max_Idle</dt>

<dd>

The maximum number of seconds a log file may be left open without writing a new log entry to it.

</dd>

<dt><a name="eccluster.conf3.logs.file_mode"></a>File_Mode</dt>

<dd>

The octal representation of the file permissions of newly created log files.

</dd>

<dt><a name="eccluster.conf3.logs.dir_mode"></a>Dir_Mode</dt>

<dd>

The octal representation of the file permissions of newly created log directories.

</dd>

<dt><a name="eccluster.conf3.logs.control_cache"></a>Control_Cache</dt>

<dd>

The name of the cache file storing asynchronous responses to clusterwide Momentum inquiries.

</dd>

</dl>

<a name="idp12519392"></a>
## Control Listener

In version 3.0, the `Enable_Authentication` option has been added with the usual fallback semantics applying. In [Example 10.1, “The `eccluster.conf` file”](eccluster.conf3#eccluster.conf3.example "Example 10.1. The eccluster.conf file"), for example, access to the control listener via TCP requires authentication because the fallback value of "Enable_Authentication" is "true". On the other hand, authentication is disabled for access via a Unix domain socket because `Enable_Authentication` is set to `false` in the scope defined by `Listen "/tmp/2025"`. The `Enable_Authorization` option is used in the same way as the `Enable_Authentication` option.

The 'uri = "ecauth://"' inside both AuthDigestMD5Parameters and AuthorizationParameters references an authentication scheme named "`ecauth`" defined in an auth_ds module. A scheme named `ecauth` is created during installation and uses the `webconsole` PostgreSQL datastore. For a discussion of the `ecauth` scheme see [webui-common.conf](webui-common.conf "webui-common.conf").

<a name="idp12527600"></a>
## ec_logger Stanza

This logger logs events that occur on the cluster manager. Values are specified for the reject log and main log because eccmgr runs inside the ecelerity process and will otherwise try to open the default log files.

Since eccmgr does not transit messages, only the panic log will have entries. For this same reason, the `heartbeat` option is turned off, otherwise the reject and main logs will be filled with heartbeat markers.

### Note

This ec_logger module is for logging the cluster manager only. The ec_logger module defined in `ecelerity-cluster.conf` and typically given the instance name `ec_logger_cluster` configures logs aggregated from the cluster nodes.

<a name="idp12532368"></a>
## See Also

[eccmgr](executable.eccmgr "eccmgr"), [mbus.conf](mbus.conf.php "mbus.conf"), [Section 14.31, “ec_logger – Momentum-Style Logging”](modules.ec_logger.php "14.31. ec_logger – Momentum-Style Logging").

|     |     |     |
| --- | --- | --- |
| [Prev](cluster.ref)  | [Up](cluster.ref.php) |  [Next](ecelerity-cluster.conf.php) |
| Chapter 10. Cluster Configuration Reference  | [Table of Contents](index) |  ecelerity-cluster.conf |
