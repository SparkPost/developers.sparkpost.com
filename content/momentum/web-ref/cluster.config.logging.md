|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.duravip)  | Chapter 7. Clustering |  [Next](cluster.config.replication.php) |

## 7.6. Log Aggregation

The log aggregation capability of the cluster provides a reliable, durable centralized logging facility. The default cluster configuration implements centralized logging in addition to the regular loggers, so that the node keeps its own local logs in the usual location as well as making that information available to the cluster manager.

There is no requirement that log aggregation be enabled. These logs are gathered for the customer's own use, and are not used by any Momentum software. However, log aggregation means that you can see any log from any node on any date by going to the `/var/log/eccluster` directory on the manager (if you use the default configuration).

The following elements are required in order to aggregate log files on the cluster manager:

*   Define logger modules in `ecelerity-cluster.conf`

*   Define the "logs" dictionary within the cluster module scope in `ecelerity-cluster.conf`

*   Define the "Logs" stanza in `eccluster.conf`

### 7.6.1. ec_logger Module in `ecelerity-cluster.conf`

The default `ecelerity-cluster.conf` file has the following loggers defined:

<a name="cluster.config.logging.loggers"></a>

**Example 7.1. Loggers in `ecelerity-cluster.conf`**

```
ec_logger "ec_logger_cluster" {
  mainlog = "cluster:///var/log/ecelerity/mainlog.cluster=>master"
  paniclog = "cluster:///var/log/ecelerity/paniclog.cluster=>master"
  rejectlog = "cluster:///var/log/ecelerity/rejectlog.cluster=>master"
  acctlog = "cluster:///var/log/ecelerity/acctlog.cluster=>master"
}

bounce_logger "bounce_logger_cluster" {
  bouncelog = "cluster:///var/log/ecelerity/bouncelog.cluster=>master"
}
```

The `cluster://` URI schema is an alias for `jlog://`. It tells the io_wrapper subsystem that we are opening a jlog and not a regular file; the second part is the path, and the `=>master` is an optional parameter that jlog uses to create a subscriber when opening the log for writing. If there were no subscribers then items in the log could be deleted immediately; normally readers will add their own subscriber, but you don't want data to go missing between the time the writer first creates the jlog and the time a reader first opens it, so you provide the name of one of the readers; the cluster manager uses the subscriber name `master` by default.

The jlog files created on a node by lines such as `mainlog = "cluster:///var/log/ecelerity/mainlog.cluster=>master"` in the ec_logger module, is processed by eccmgr to create a text file on the manager.

### Note

This ec_logger module (typically given the instance name `ec_logger_cluster`) configures the files used to create aggregated text logs of node events. The ec_logger defined in the `eccluster.conf` file configures logs of cluster manager events only.

Creating this logger causes the MTA to produce logs in the durable journalled jlog format. On its own this just causes logs to accumulate on disk; for them to find their way to the manager, the `logs` dictionary within the cluster module needs to be configured to publish those jlogs.

### 7.6.2. The `logs` Dictionary in the Cluster Module

The cluster module definition is found in the `ecelerity-cluster.conf` file. You can view the configuration by selecting the `cluster` module from the configuration editor of the web UI or by issuing the console command **config show cluster**              from the system console on a cluster node. By default the `logs` dictionary is configured as follows:

<a name="cluster.config.logging.logs.dictionary"></a>

**Example 7.2. The logs dictionary in the cluster scope**

```
cluster {
  #cluster_listener = *:4802 Replaced by the ECCluster_Listener stanza in 3.0.15
  ...
  logs = [
    rejectlog = "/var/log/ecelerity/rejectlog.cluster"
    paniclog = "/var/log/ecelerity/paniclog.cluster"
    mainlog = "/var/log/ecelerity/mainlog.cluster"
    acctlog = "/var/log/ecelerity/acctlog.cluster"
    bouncelog = "/var/log/ecelerity/bouncelog.cluster"
  ]
}
```

This dictionary defines the logs that the cluster module on the node will tell the cluster manager are available for aggregation, and it needs to match the ec_logger and bounce_logger configurations shown in [Example 7.1, “Loggers in `ecelerity-cluster.conf`”](cluster.config.logging#cluster.config.logging.loggers "Example 7.1. Loggers in ecelerity-cluster.conf").

The manager will periodically attempt to connect to MTA nodes to pull logs. It does this by connecting to the `cluster_listener` address configured in the cluster stanza on the node. Once connected, it will try to consume records from the jlogs published by the node and write that data to log files on the manager.

**Configuration Change. ** As of version 3.0.15, the `cluster_listener` has been replaced by an `ECCluster_Listener` stanza. For more information see [the section called “ECCluster_Listener”](ecelerity-cluster.conf#ecelerity-cluster.conf.eccluster_listener "ECCluster_Listener").

### 7.6.3. The `Logs` stanza

The manager log pull is controlled by the "Logs" stanza in `eccluster.conf` and is *not* visible through the web UI. If you wish to inspect your configuration, go to the command line on the cluster manager and issue the command **`/opt/msys/ecelerity/bin/ec_console /tmp/2025 config show Logs`**                            . The default configuration is as follows:

```
Logs {
  logfile = "/var/log/eccluster/%Y/%m/%d/%{l}/%{s}/%{n}"
  file_mode = "0640"
  dir_mode = "0755"
}
```

This configuration creates logs under `/var/log/eccluster` according to the `logfile` setting. This is processed by `strftime` expanding the macros as follows:

<dl className="variablelist">

<dt>%Y</dt>

<dd>

A four digit representation of the year

</dd>

<dt>%m</dt>

<dd>

A two digit representation of the month

</dd>

<dt>%d</dt>

<dd>

A two digit representation of the day of the month

</dd>

</dl>

Additional special place holders are as follows:

<dl className="variablelist">

<dt>

%{l}

</dt>

<dd>

Expands to the name of the log as specified as the key in the "logs" dictionary configured within the cluster scope as shown in [Example 7.2, “The logs dictionary in the cluster scope”](cluster.config.logging#cluster.config.logging.logs.dictionary "Example 7.2. The logs dictionary in the cluster scope")

</dd>

<dt>

%{n}

</dt>

<dd>

Expands to the name of the node

</dd>

<dt>

%{s}

</dt>

<dd>

Expands to the name of the subcluster to which the node belongs

</dd>

</dl>

So, for the mainlog, being pulled from `node1`, where `node1` is a member of the subcluster named `mycluster`, the data would be logged to: /var/log/eccluster*`/year/month/day/`*mainlog/mycluster/node1.

In addition to the place holders shown above, all of the POSIX `strftime` macros are supported. For more information see [strftime](http://www.opengroup.org/onlinepubs/009695399/functions/strftime.html).

There are no requirements regarding the structure of the filenames, nor is there any expectation that you have configured centralized logging, so you are free to adjust the `logfile` parameter to suit your needs as long as `logfile` defines a valid path after all the macros get expanded. The path does not have to exist beforehand, eccmgr will create directories as needed.

### Note

If you wish to change the `Logs` configuration you cannot use the web UI. You must manually change the `eccluster.conf` file on the cluster manager. For instructions on doing this see [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files").

### 7.6.4. Centralized Logging with bounce_logger and fbl

This section gives an example of log aggregation when a custom_logger and an fbl module are defined. Find below a sample configuration for the custom_logger followed by a sample fbl module configuration:
{% raw %}
```
custom_logger "custom_logger1" {
  permanent_failure_logfile = "cluster:///var/log/ecelerity/custombounce.cluster=>master"
  permanent_failure_format  = "%t@%i@%BI@%CI@B@%r@%R@%m@%M@%g@%b@%c@%C@%B@%H@%h{X-campaignid} »
    @%h{date}@%h{subject}@%n"
  transient_failure_logfile = "cluster:///var/log/ecelerity/custombounce.cluster=>master"
  transient_failure_format  = "%t@%i@%BI@%CI@T@%r@%R@%m@%M@%g@%b@%c@%C@%B@%H@%h{X-campaignid} »
    @%h{date}@%h{subject}@%n"
}
```
{% endraw %}
*Note*: The format options in the custom_logger module above should be unbroken in your configuration file.

```
fbl {
  Auto_Log = true # default is "false"
  Log_Path = "cluster:///var/log/ecelerity/fbllog.cluster=>master"
  Addresses = ( “^.*@fbl.domain.com” ) # default is unset
  Header_Name = “X-MSFBL” # this is the default
  User_String = “%{vctx_mess:my_context_variable}” # default is unset
  Message_Disposition = “blackhole” # default is blackhole, also allowed to set to "pass"
  Condition = “can_relay” # default is unset, should be name of a vctx entry
}
```

Given the above configuration for the custom_logger module and the fbl module, you would configure the cluster logs in the following way:

```
cluster {
  # As of version 3.4 ,the mbus_daemon option has been removed
  # and cluster communication is handled by the msgc modules.
  # mbus_daemon = 4803
  cluster_group = ec_cluster
  control_group = ec_console
  logs = [
    rejectlog = "/var/log/ecelerity/rejectlog.cluster"
    paniclog = "/var/log/ecelerity/paniclog.cluster"
    mainlog = "/var/log/ecelerity/mainlog.cluster"
    acctlog = "/var/log/ecelerity/acctlog.cluster"
    bouncelog = "/var/log/ecelerity/bouncelog.cluster"
    fbllog = "/var/log/ecelerity/fbllog.cluster"
    custombounce = "/var/log/ecelerity/custombounce.cluster"
  ]
  ...
}
```

If the `logfile` option in the `Logs` scope is configured as shown in [Section 7.6.3, “The `Logs` stanza”](cluster.config.logging#cluster.config.logging.logs.stanza "7.6.3. The Logs stanza") then you'll have access to the fbl logs of `node1` belonging to subcluster `mysubcluster` in the /var/log/eccluster/*`year/mon/day`*/fbllog/mycluster/node1 directory on the cluster manager.

For more information about the fbl and custom_loggers see [Section 14.34, “fbl – Feedback Loop Module”](modules.fbl "14.34. fbl – Feedback Loop Module") and [Section 14.24, “custom_logger – Customizable Logging”](modules.custom_logger.php "14.24. custom_logger – Customizable Logging").

### 7.6.5. More Complex Deployments

More complex deployments may arrange for the logs for a given subcluster to be aggregated on a manager local to that subcluster. Consider an environment with "east" and "west" subclusters, where the intention is for logs from the "east" subcluster to be journalled on a manager node physically located in the east, and similarly, logs from "west" logged to a manager in the west. The east subcluster has nodes "east1" and "east2", and the west subcluster has nodes "west1" and "west2".

There are two ways to configure this; the first is via `eccluster.conf`:

```
Logs {
    logfile = "/var/log/eccluster/%Y/%m/%d/%{l}/%{s}/%{n}"
    file_mode = "0640"
    dir_mode = "0755"

    Manager "eastmgr" {
        # Note that The default for Subscriber here is ("eastmgr", "master")
        Node "west1" {
            Subscriber = () # don't pull anything from west1
        }
        Node "west2" {
            Subscriber = () # don't pull anything from west2
        }
    }
    Manager "westmgr" {
        # Note that The default for Subscriber here is ("westmgr", "master")
        Node "east1" {
            Subscriber = () # don't pull anything from east1
        }
        Node "east2" {
            Subscriber = () # don't pull anything from east2
        }
    }
}
```

For this to work, you would save this to `/opt/msys/ecelerity/etc/conf/global/eccluster.conf` and remove `/opt/msys/ecelerity/etc/conf/default/eccluster.conf` so that there is just one configuration file for all the managers across the cluster. For instructions on adding and removing configuration files see [Section 2.9, “Best Practices for Adding Configuration Files”](conf.adding.configuration.files "2.9. Best Practices for Adding Configuration Files").

This configuration instructs the managers to ignore the nodes from the opposing cluster. This has the convenience of centralizing the log pulling logic, but the trade off is that that complexity of the manager configuration will grow as the number of nodes and subclusters increases.

An alternate configuration to achieve the same end result is to leave eccluster.conf as the default and instead alter the `ecelerity-cluster.conf` file for the "west" subcluster so that the cluster logger section looks like this:

```
ec_logger "ec_logger_cluster" {
    mainlog = "cluster:///var/log/ecelerity/mainlog.cluster=>westmgr"
    paniclog = "cluster:///var/log/ecelerity/paniclog.cluster=>westmgr"
    rejectlog = "cluster:///var/log/ecelerity/rejectlog.cluster=>westmgr"
    acctlog = "cluster:///var/log/ecelerity/acctlog.cluster=>westmgr"
}

bounce_logger "bounce_logger_cluster" {
    bouncelog = "cluster:///var/log/ecelerity/bouncelog.cluster=>westmgr"
}
```

Modify the same section for the "east" subcluster:

```
ec_logger "ec_logger_cluster" {
    mainlog = "cluster:///var/log/ecelerity/mainlog.cluster=>eastmgr"
    paniclog = "cluster:///var/log/ecelerity/paniclog.cluster=>eastmgr"
    rejectlog = "cluster:///var/log/ecelerity/rejectlog.cluster=>eastmgr"
    acctlog = "cluster:///var/log/ecelerity/acctlog.cluster=>eastmgr"
}

bounce_logger "bounce_logger_cluster" {
    bouncelog = "cluster:///var/log/ecelerity/bouncelog.cluster=>eastmgr"
}
```

This changes the subscriber name on the jlogs to match the name of the manager node that you want to pull the log file. By default, the manager will try to pull jlogs using its nodename as the subscriber, and then try to pull logs with the subscriber name of "master". Since there are no longer any jlogs targeting the "master" subscriber, the net result of this configuration change is that the "eastmgr" manager will pull all the logs from nodes in the "east" subcluster (because they target "eastmgr" as a subscriber) and similarly, the "westmgr" manager will pull all the logs from the nodes in the "west" subcluster.

In a more complex deployment scenario, you may want to have multiple managers pull the same set of logs from a given node. To do this, you need to declare multiple subscribers by changing the "=>mgrname" portion of the filename:

```
ec_logger "ec_logger_cluster" {
    mainlog = "cluster:///var/log/ecelerity/mainlog.cluster?subscribers=mgr1,mgr2,mgr3"
    ...
}
```

You would repeat this change for each log file that you want to export in this way.

It should be noted that each subscriber that you declare will maintain a checkpoint for the log data in the jlog. If a subscriber never consumes data from the jlog, the jlog will continue to grow and occupy an increasing amount of disk space. For this reason, you should make sure that you only provision subscribers that will be actively consuming data from the jlog.

### 7.6.6. Decommissioning a Manager

If you decide to decommission a manager, the suggested operational procedure is:

*   modify the `ecelerity-cluster.conf` file(s) for the affected subclusters and remove the manager from the subscriber list(s) in the log file names

*   apply that configuration to the cluster

*   allow time for the manager to drain any remaining log data from the node(s). You may opt to skip this part if you have no plan to retain this data.

*   remove the manager from your cluster.

*   on each of the nodes that was journalling data for that manager, use the [jlogctl](executable.jlogctl "jlogctl") tool to erase the now redundant subscriber checkpoint information from each of the jlog files.

|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.duravip)  | [Up](cluster.php) |  [Next](cluster.config.replication.php) |
| 7.5. DuraVIP™: IP Fail over  | [Table of Contents](index) |  7.7. Data Replication |
