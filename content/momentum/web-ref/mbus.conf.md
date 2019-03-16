| [Prev](cluster.boot)  | Chapter 10. Cluster Configuration Reference |  [Next](exe.php) |

<a name="mbus.conf"></a>
## Name

mbus.conf — Momentum Cluster Messaging Bus configuration file

<a name="idp12754336"></a>
## Description

`/opt/msys/ecelerity/etc/conf/global/mbus.conf` configures the behavior of the Momentum Cluster Messaging Bus, **mbusd**. Configuration changes to the message bus cannot be made through the web UI, you must manually change `mbus.conf`. For instructions on doing this see [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files").

Momentum's clustering solution makes heavy use of a group communication messaging bus called "Spread". Spread provides a mechanism for distributing data to various nodes in a networked configuration. Without this messaging bus, the nodes and the cluster manager cannot communicate and all cluster tasks such as DuraVIP™ binding, logging, and replication will cease to operate.

The cluster manager node and each Momentum node will pull the configuration from **ecconfigd** on a periodic basis (once per minute) and if the configuration has changed, the messaging bus will shut itself down and restart operations under the new configuration.

An initial configuration for the messaging bus is constructed as part of the installation process. Typically, this file is `/opt/msys/ecelerity/etc/conf/global/mbus.conf`.

### Note

As of version 3.4, cluster communication is handled by the msgc modules rather than by mbus. Configuration is handled by the `msgc_server.conf` file. For more information see [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules").

```
SocketPortReuse = on
DaemonUser = ecspread
DaemonGroup = ecspread
DebugFlags = { EXIT CONFIGURATION }
RuntimeDir = /var/run/spread
EventLogFile = /var/log/spread/mainlog
EventTimeStamp
DangerousMonitor = false

# Subcluster: default => manager-0-1
Spread_Segment  10.0.0.255:4803 {         # 10.0.0.255 is the bcast
       manager-0-1          10.0.0.91     # management node
       ec-0-1               10.0.0.191    # ecelerity node 1
       ec-0-2               10.0.0.192    # ecelerity node 2
       ec-0-3               10.0.0.193    # ecelerity node 3
       ec-0-4               10.0.0.194    # ecelerity node 4
       ec-0-5               10.0.0.195    # ecelerity node 5
       ec-0-6               10.0.0.196    # ecelerity node 6
}
```

The above configuration listing illustrates a standard configuration. In this configuration, 10.0.0.255 is the network broadcast address. Inside the Spread_Segment declaration we see each participating node. The node name should match the output of the **hostname** command on that node. The IP interface on which the node's participating address resides must have the same broadcast address as this Spread_Segment, as reported by **ifconfig**.

If you need to edit the `mbus.conf` file, edit it in place and commit it to the repository using **eccfg**.

### Note

The `mbus.conf` file is promulgated to cluster nodes by [ecconfigd](executable.ecconfigd "ecconfigd"). It is advisable to restart **ecconfigd** after making extensive changes to `mbus.conf`, after adding multiple nodes for instance. Do this by issuing the command **`/etc/init.d/ecconfigd restart`**         . It is also advisable to restart the ecelerity and the eccmgr processes.

Depending upon your configuration, there may be additional `Spread_Segment` stanzas. Spread_Segments are created both if the nodes are not all in the same net block as well as if there are multiple subclusters. A single subcluster with two segments might look like the following:

```
SocketPortReuse = on
DaemonUser = ecspread
DaemonGroup = ecspread
DebugFlags = { EXIT CONFIGURATION }
RuntimeDir = /var/run/spread
EventLogFile = /var/log/spread/mainlog
EventTimeStamp
DangerousMonitor = false

# Subcluster: default => rh52mgr.vmnet24.example.com
Spread_Segment 10.79.240.255:4803 {
       rh52bar2    10.79.240.129
}
Spread_Segment 10.79.24.255:4803 {
       rh52bare    10.79.24.130
       rh52mgr     10.79.24.136
}
```

With multiple subclusters the Spread_Segments could be configured in the following way:

```
SocketPortReuse = on
DaemonUser = ecspread
DaemonGroup = ecspread
DebugFlags = { EXIT CONFIGURATION }
RuntimeDir = /var/run/spread
EventLogFile = /var/log/spread/mainlog
EventTimeStamp
DangerousMonitor = false

# Subcluster: east => rh52mgr.vmnet24.example.com
Spread_Segment 10.79.24.255:4803 {
        rh52bare        10.79.24.130
        rh52mgr         10.79.24.136
}
SocketPortReuse = on
DaemonUser = ecspread
DaemonGroup = ecspread
DebugFlags = { EXIT CONFIGURATION }
RuntimeDir = /var/run/spread
EventLogFile = /var/log/spread/mainlog
EventTimeStamp
DangerousMonitor = false

# Subcluster: west => rh52mgr.vmnet24.example.com
Spread_Segment 10.79.240.255:4803 {
        rh52bar2        10.79.240.129
}
```

For more information about subclusters see [Section 7.1, “Subclusters”](subclusters "7.1. Subclusters").

<a name="idp12781216"></a>
## See Also

[eccmgr](executable.eccmgr "eccmgr"), [mbusd](executable.mbusd.php "mbusd"), [mbusd_monitor](executable.mbusd_monitor.php "mbusd_monitor"),

| [Prev](cluster.boot)  | [Up](cluster.ref.php) |  [Next](exe.php) |
| cluster.boot  | [Table of Contents](index) |  Chapter 11. Momentum Command Line Reference |
