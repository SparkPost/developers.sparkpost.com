|     |     |     |
| --- | --- | --- |
| [Prev](eccluster.conf3)  | Chapter 10. Cluster Configuration Reference |  [Next](cluster.boot.php) |

<a name="ecelerity-cluster.conf"></a>
## Name

ecelerity-cluster.conf — The cluster-specific configuration file included from within `ecelerity.conf`

<a name="idp12540608"></a>
## Description

`ecelerity-cluster.conf` configures cluster behavior. The configuration options of the `ecelerity-cluster.conf` file are discussed here.

<a name="ecelerity-cluster.conf.example"></a>

**Example 10.2. The `ecelerity-cluster.conf` file**

```
# Ensure that we have appropriate privileges
Security {
  user = "ecuser"
  group = "ecuser"
  # Linux
  Capabilities = "cap_net_admin+ep cap_net_bind_service+ep cap_net_raw+ep cap_sys_resource+ep"
  # Solaris
  Privileges = "basic net_privaddr net_bindmlp sys_resource sys_net_config net_rawaccess"
}

ec_logger "ec_logger_cluster" {
  mainlog = "cluster:///var/log/ecelerity/mainlog.cluster=>master"
  paniclog = "cluster:///var/log/ecelerity/paniclog.cluster=>master"
  rejectlog = "cluster:///var/log/ecelerity/rejectlog.cluster=>master"
  acctlog = "cluster:///var/log/ecelerity/acctlog.cluster=>master"
}

bounce_logger "bounce_logger_cluster" {
  bouncelog = "cluster:///var/log/ecelerity/bouncelog.cluster=>master"
}
# The ECCluster_Listener stanza is available as of version 3.0.15
ECCluster_Listener {
  Listen "*:4802" {}
}

cluster {
  #cluster_listener = *:4802 Replaced by the ECCluster_Listener stanza
  #mbus_daemon = 4803 Deprecated in version 3.4
  cluster_group = "ec_cluster"
  control_group = "ec_console"
  logs = [
    rejectlog = "/var/log/ecelerity/rejectlog.cluster"
    paniclog = "/var/log/ecelerity/paniclog.cluster"
    mainlog = "/var/log/ecelerity/mainlog.cluster"
    acctlog = "/var/log/ecelerity/acctlog.cluster"
    bouncelog = "/var/log/ecelerity/bouncelog.cluster"
  ]
  Replicate "inbound_cidr" {}
  Replicate "outbound_cidr" {}
  Replicate "outbound_domains" {}
  Replicate "outbound_binding_domains" {}
  Replicate "shared_named_throttles" {}

  # DuraVIP network topology hints
  Topology "10.1.1.0/24" {
    cidrmask = "32"
    interface = "eth1"
  }
}
```

### Note

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `Gateway`, `Routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.

You **cannot** view the contents of the `ecelerity-cluster.conf` file using the system console from the cluster manager. You can only view the contents of this file from a cluster node because it is included from the `ecelerity.conf` file. The ec_logger module defined here applies to cluster nodes only. The ec_logger module defined in the `eccluster.conf` file on the cluster manager records events that occur on the cluster manager. Since mail does not transit the cluster manager, only the paniclog will have entries.

<a name="idp12556928"></a>
### The `Security` Stanza

The definition of the `Security` stanza in the `ecelerity-cluster.conf` file applies to the cluster nodes only and usually differs from the configuration found in the `eccluster.conf` file.

For a discussion of the Security stanza options see [security](conf.ref.security "security").

<a name="idp12561456"></a>
### Clustered Logging

The ec_logger defined in the `ecelerity-cluster.conf` file is typically one of three ec_loggers used in a cluster configuration. These loggers, with their conventional instance names, are as follows:

*   `ec_logger "ec_logger_cluster"` – typically defined in the `ecelerity-cluster.conf` file and used when creating consolidated log files on the cluster manager

*   `ec_logger "ec_logger"` – the node-specific log files

*   `ec_logger "ec_logger_rt"` – the node-specific log files used by the web UI

Here we are only concerned with the ec_logger "ec_logger_cluster" logger.

The Momentum clustering module provides two facilities that aid administrators in setting up cluster-wide consolidated logging. The first of these is a node-local clustered I/O layer which is provided by the clustering module as the `cluster://` URI schema. A typical log destination looks like `cluster:///var/log/ecelerity/mainlog.cluster=>master` where `cluster://` tells the I/O abstraction layer to use node-local segmented data format, `/var/log/ecelerity/mainlog.cluster` is the directory in which the node-local log stream will be stored (created on demand), and `=>master` specifies that a subscriber named "master" should be added to the node-local log stream if it is created on demand.

The second part of the clustered logging solution is the log file service (provided over the `ECCluster_Listener`). This service lets subscribers connect to Momentum and request a "replay" of logs since their last checkpoint and then checkpoint the reader. This is a durable logging mechanism for aggregation. The log file server is configured in the `logs` dictionary of the cluster module configuration.

Each logfile that should be serviced in this fashion is given a key name and a corresponding local path that should match the path portion of the `cluster://` log destination specified in the other Loggers throughout your configuration.

For an in-depth discussion of consolidated cluster logging see [Section 7.6, “Log Aggregation”](cluster.config.logging "7.6. Log Aggregation").

<a name="ecelerity-cluster.conf.eccluster_listener"></a>
### ECCluster_Listener

Any direct, point-to-point communication between cluster nodes that does not require membership-wide ordering semantics will be performed over TCP/IP via the port specified in the Listen stanza within the ECCluster_Listener stanza. Any node can establish a connection to the destination node at the address specified by the `ECCluster_Listener` and point-to-point communication will ensue.

**Configuration Change. ** This option is available as of version 3.0.15 and replaces the `cluster_listener` option.

The following table displays all options valid in the ECCluster_Listener scope and within a Listen stanza within an ECCluster_Listener scope.

<a name="eccluster_listener-options-table"></a>

**Table 10.1. eccluster_listener options**

| Option/Description | Default | Scopes |
| --- | --- | --- |
| **[accept_queue_backlog](ecelerity.conf#ecelerity.conf3.listener.options.accept_queue_backlog)** – The accept queue backlog | 0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| **[concurrency](ecelerity.conf#esmtp_listener_example3 "Example 9.1. ESMTP_Listener")** – Define number of available threads | 0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, threadpool, xmpp_listener |
| **[disable_nagle_algorithm](conf.ref.disable_nagle_algorithm "disable_nagle_algorithm")** – Disable nagle algorithm on sockets | false | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, global, http_listener, listen, xmpp_listener |
| **[enable](ecelerity.conf#esmtp_listener_example3 "Example 9.1. ESMTP_Listener")** – Enable or disable a listener scope | true | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| **[events_per_iter](ecelerity.conf#ecelerity.conf3.listener.options.events_per_iter)** – Employ when using a Concurrency greater than 1 | 0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[file_mode](ecelerity.conf#ecelerity.conf3.control_listener "Control_Listener")** – File access rights in octal notation | 0660 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| **[listen_backlog](ecelerity.conf#ecelerity.conf3.listener.options.listen_backlog)** – The listen backlog | 500 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[pool_name](ecelerity.conf#esmtp_listener_example3 "Example 9.1. ESMTP_Listener")** – Associate a threadpool with a listener |   | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[tcp_recv_buffer_size](ecelerity.conf#ecelerity.conf3.listener.options.tcp_recv_buffer_size)** – The size of the TCP receive buffer size | 4096 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **[tcp_send_buffer_size](ecelerity.conf#ecelerity.conf3.listener.options.tcp_send_buffer_size)** – The size of the TCP send buffer | 4096 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |

For information regarding IPv6 addresses and Listen stanzas, see [the section called “Listeners and IPv6 Addresses”](ecelerity.conf#ecelerity.conf.ipv6 "Listeners and IPv6 Addresses").

<a name="idp12621760"></a>
### Cluster Communications

<dl className="variablelist">

<dt>mbus_daemon</dt>

<dd>

The most important underlying component of the clustering system is the underlying messaging bus. The Momentum clustering module utilizes a messaging bus that provides extended virtual synchrony (EVS) messaging semantics. The Momentum instance will attach to this node over some form of inter-process communication socket (IPC) (currently either AF_INET or AF_UNIX) as specified by the `mbus_daemon` configuration option.

**Configuration Change. ** As of version 3.4, cluster communication is handled by the msgc modules rather than by mbus. For more information see [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules").

</dd>

<dt><a name="option.cluster_group"></a>cluster_group</dt>

<dd>

The DuraVIP™ system will coordinate IP ownership responsibilities via the `cluster_group` EVS group.

</dd>

<dt><a name="option.control_group"></a>control_group</dt>

<dd>

Each node can respond to normal console commands received on the `control_group`. The cluster console manager utilizes this group to issue cluster-wide configuration commands to update and discover changes in configuration information. For more information about cluster console commands see [Section 7.7.2, “Cluster Management Using Console Commands”](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands").

</dd>

</dl>

Under normal circumstances, the `mbus_daemon`, `cluster_group` and `control_group` should be left at their default values (as shown in the configuration above).

<a name="ecelerity-cluster.conf.replication"></a>
### Replication

The replication component of the clustering module is considered its most powerful and versatile feature. The `replicate` directive allows you to employ a sound and efficient replication framework to the data managed within Momentum. Such metrics as the number of current connections from a specific netblock are calculated locally by referencing an internal structure called a CIDR tree. By specifying `Replicate = "inbound_cidr" {}`, we tell the clustering subsystem to share all the local information about inbound connections tracked in its CIDR tree with every other node in the cluster (and vice versa). Using this shared information, the replication system will maintain an aggregated "cluster-wide" CIDR tree representing **all** inbound connections to the cluster.

The same is possible for outbound connections via `Replicate "outbound_cidr" {}` as well as outbound connections grouped by destination domain via `Replicate "outbound_domains" {}`. For outbound connections, it may be desirable to be more granular than aggregating on a cluster-wide premise. This is discussed in more detail in the cluster data replication section.

The `Replicate "outbound_binding_domains" {}` stanza ensures that the Cluster_Scope_Max_Outbound_Connections option works cluster-wide. This option was introduced in Momentum 3.2 and is included in the default `ecelerity-cluster.conf` file.

In addition to native Momentum data, it is possible to replicate user controlled data sets as well (such as caches). This provides a transparent and convenient mechanism to cache data from a module level in a medium that is accessible via every node participating in the cluster. This is discussed in more detail in [Section 7.7, “Data Replication”](cluster.config.replication "7.7. Data Replication").

<a name="idp12646128"></a>
### DuraVIP™ Network Topology

The DuraVIP™ featureset maintains the availability of MultiVIP© bindings and listener services on IP addresses despite node failures. Each binding or listener that should be managed in this fashion should be marked with a `Enable_Duravip = true` option.

Because Momentum is responsible for adding and removing the corresponding IP addresses, more information must be known about the IP networks and physical interfaces on which these IPs will reside. Within the cluster module configuration, options in the `Topology` scope provide this additional information.

<dl className="variablelist">

<dt>interface</dt>

<dd>

In the Topology configuration shown in [Example 10.2, “The `ecelerity-cluster.conf` file”](ecelerity-cluster.conf#ecelerity-cluster.conf.example "Example 10.2. The ecelerity-cluster.conf file"), `10.1.1.0/24` informs the clustering module that IPs in the range specified will be added to the `eth1` ethernet interface.

</dd>

<dt>cidrmask</dt>

<dd>

When bringing an IP address online, you must also know the netmask it will be using. The cidrmask option indicates the number of bits in the netmask for a given IP address. Above, we see that the IP address should be added with a /32 netmask (i.e. 255.255.255.255). It is most common to add IP aliases with a 255.255.255.255 netmask, but this can vary between operating systems.

</dd>

</dl>

<a name="idp12656288"></a>
### Other Cluster Configuration Options

Find below a list of all cluster options not covered by the categories discussed above. For a complete list of all cluster options see [Table 9.4, “cluster options”](options-summary#cluster-options-table "Table 9.4. cluster options").

<dl className="variablelist">

<dt><a name="option.log_group"></a>log_group</dt>

<dd>

When this is enabled, the panic log messages are broadcast over spread, using the specified group name. Another spread enabled application, or the `spuser` tool, can then listen in on paniclog events.

</dd>

<dt><a name="option.nodename"></a>nodename</dt>

<dd>

Override the node name that is used to canonically identify this cluster node. The `nodename` is determined according to the following logic: When ec_ctl runs, it determines the node name (and subcluster) as configured from `cluster.boot` and exports EC_SUB_CLUSTER and EC_NODE_NAME to the environment. If you do not explicitly configure the nodename option, the cluster module will look for the EC_NODE_NAME environment variable and take that as the value. If EC_NODE_NAME is not set in the environment, it will use the system hostname, truncated at the first ‘`.`’. Note also that modules can use the cluster_nodename hook to determine the effective value of the `nodename`.

</dd>

<dt><a name="option.nodeaddr"></a>nodeaddr</dt>

<dd>

`nodeaddr` is the canonical cluster address for the node. If not specified, gethostbyname(*`nodename`*) is used to determine the address. The address must be routable via the cluster network, and must not be 127.0.0.1.

</dd>

<dt><a name="option.log_active_interval"></a>log_active_interval</dt>

<dd>

This option, along with `log_idle_interval`, is used to tune centralized logging (logmove). When logmove is actively sending data to the manager, it will sleep for `log_active_interval` seconds between each segment send. When the job idles (no segments are pending), then it will sleep for `log_idle_interval` seconds before looking for another segment, The default value for this option is `1`.

</dd>

<dt><a name="option.log_idle_interval"></a>log_idle_interval</dt>

<dd>

The amount of time to sleep before looking for another segment. The default value for this option is `10`.

</dd>

<dt><a name="option.heartbeat_start_delay"></a>heartbeat_start_delay</dt>

<dd>

How many seconds to wait after startup before the cluster heartbeat is activated. The default value for this option is `15`.

</dd>

<dt><a name="option.heartbeats_per_sec"></a>heartbeats_per_sec</dt>

<dd>

How often to send a heartbeat. The heartbeat is used to help detect "byzantine" nodes in the cluster. The default value for this option is `1`.

</dd>

<dt><a name="option.if_check_interval"></a>if_check_interval</dt>

<dd>

How often to run through a maintenance cycle to make sure that the interfaces plumbed on the system match up to the cluster internal view. The default value for this option is `30`.

</dd>

<dt><a name="option.if_down_limit"></a>if_down_limit</dt>

<dd>

As part of the maintenance cycle, when detecting that we need to plumb an IP address, how long to wait before deciding that we should bring it online. This avoids rapid "flapping". The default value for this option is `4`.

</dd>

<dt><a name="option.duravip_balance_set_size"></a>duravip_balance_set_size</dt>

<dd>

When balancing DuraVIP™s, how many to process as a batch in response to a balance request. Clusters with large numbers of DuraVIP™s (especially when they are not explicitly preferenced) will take less time to converge if this number is increased. It is imperative that this number be set consistently across all nodes, as inconsistent values across the nodes will result in a cluster that will not converge (since the nodes will not all agree on the same parameters). Therefore, it is strongly recommended that all the nodes be brought down before changing this option. The value of this option must be greater than `1`.

</dd>

<dt><a name="option.arp_all_hosts"></a>arp_all_hosts</dt>

<dd>

When plumbing a DuraVIP™, you can either aggressively send out ARP information to ensure that the network knows about the IP address assignment (true), or target the ARP to specific hosts of interest (false). You may consider changing this to `false` if your network experiences problems with the burst of ARP traffic around the DuraVIP™ move. The default value for this option is `true`.

</dd>

<dt><a name="option.view_mature_time"></a>view_mature_time</dt>

<dd>

How long a DuraVIP™ view needs to remain unchanged before considering it "mature". Increasing the value will make the cluster take longer to fully converge and balance DuraVIP™s. Reducing the value will make it take less time. This option should not generally need to be altered, but you may consider doing so if the cluster is experiencing instability. Best to seek advice from support if that is the case. The default value for this option is `5`.

</dd>

<dt><a name="option.view_balance_interval"></a>view_balance_interval</dt>

<dd>

How often DuraVIP™ views are subject to balancing. This option is similar to `view_mature_time` and should to be adjusted without consultation with support. The default value for this option is `10`.

</dd>

<dt><a name="option.unconditional_rebind"></a>unconditional_rebind</dt>

<dd>

Whether the full set_binding logic is invoked when assessing messages for internal cluster message moves or whether to use an optimization that avoids calling out to whatever set_binding logic is in place. The default value for this option is `true`.

</dd>

<dt><a name="option.view_broadcast_interval"></a>view_broadcast_interval</dt>

<dd>

When non-zero, how often to speculatively broadcast a view announcement to the cluster. Should not be needed except in rare cases when the cluster does not seem to be in sync with views; only enable as directed by support. The default value for this option is `0`.

</dd>

</dl>

<a name="idp12710208"></a>
### See Also

[mbusd](executable.mbusd "mbusd"), [mbus.conf](mbus.conf.php "mbus.conf").

|     |     |     |
| --- | --- | --- |
| [Prev](eccluster.conf3)  | [Up](cluster.ref.php) |  [Next](cluster.boot.php) |
| eccluster.conf  | [Table of Contents](index) |  cluster.boot |
