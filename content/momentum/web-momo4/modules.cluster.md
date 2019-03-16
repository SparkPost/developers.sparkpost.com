| [Prev](modules.cloudmark)  | Chapter 71. Modules Reference |  [Next](modules.commtouch) |

## 71.19. cluster – Cluster

The cluster module is used to specify cluster behavior.

### 71.19.1. Configuration

The cluster module is configured in the `ecelerity-cluster.conf` file. The following is the default configuration:

<a name="modules.cluster.configuration.example"></a>

**Example 71.32. cluster Configuration**

```
cluster {
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

The following are the configuration options defined within this module:

<dl className="variablelist">

<dt><a name="option.arp_all_hosts"></a>arp_all_hosts</dt>

<dd>

When plumbing a DuraVIP™, you can either aggressively send out ARP information to ensure that the network knows about the IP address assignment (true) or target the ARP to specific hosts of interest (false).

Default value is `true`. You may consider changing this to `false` if your network experiences problems with the burst of ARP traffic around the DuraVIP™ move.

</dd>

<dt><a name="option.cluster_group"></a>cluster_group</dt>

<dd>

Defines cluster communication. Default value is `ec_cluster`. Under normal circumstances, this option should be left at the default value.

The DuraVIP™ system will coordinate IP ownership responsibilities via the `cluster_group` EVS group.

</dd>

<dt><a name="option.control_group"></a>control_group</dt>

<dd>

Defines the cluster communication. Default value is `ec_console`. Under normal circumstances, this option should be left at the default value.

Each node can respond to normal console commands received on the `control_group`. The cluster manager utilizes this group to issue cluster-wide configuration commands to update and discover changes in configuration information.

</dd>

<dt><a name="option.duravip_balance_set_size"></a>duravip_balance_set_size</dt>

<dd>

When balancing DuraVIP™s, how many to process as a batch in response to a balance request.

Clusters with large numbers of DuraVIP™s (especially when they are not explicitly preferenced) will take less time to converge if this number is increased. It is imperative that this number be set consistently across all nodes, as inconsistent values across the nodes will result in a cluster that will not converge (since the nodes will not all agree on the same parameters). Therefore, it is strongly recommended that all the nodes be brought down before changing this option. The value must be greater than `1`.

</dd>

<dt><a name="option.heartbeat_start_delay"></a>heartbeat_start_delay</dt>

<dd>

How many seconds to wait after startup before the cluster heartbeat is activated. Default value is `15`.

</dd>

<dt><a name="option.heartbeats_per_sec"></a>heartbeats_per_sec</dt>

<dd>

How often to send a heartbeat. The heartbeat is used to help detect "byzantine" nodes in the cluster. Default value is `1`.

</dd>

<dt><a name="option.if_check_interval"></a>if_check_interval</dt>

<dd>

How often to run through a maintenance cycle to make sure that the interfaces plumbed on the system match up to the cluster internal view. Default value is `30`.

</dd>

<dt><a name="option.if_down_limit"></a>if_down_limit</dt>

<dd>

As part of the maintenance cycle, when detecting that we need to plumb an IP address, how long to wait before deciding that we should bring it online. This avoids rapid "flapping". Default value is `4`.

</dd>

<dt><a name="option.log_active_interval"></a>log_active_interval</dt>

<dd>

This option, along with `log_idle_interval`, is used to tune centralized logging (logmove). When logmove is actively sending data to the log aggregator, it will sleep for `log_active_interval` seconds between each segment send. When the job idles (no segments are pending), then it will sleep for `log_idle_interval` seconds before looking for another segment. Default value is `1`.

</dd>

<dt><a name="option.log_group"></a>log_group</dt>

<dd>

When this option is enabled, the paniclog messages are broadcast over spread, using the specified group name. Another spread enabled application or the `spuser` tool can then listen in on paniclog events.

</dd>

<dt><a name="option.log_idle_interval"></a>log_idle_interval</dt>

<dd>

Amount of time to sleep before looking for another segment. Default value is `10`.

</dd>

<dt><a name="option.logs.dictionary"></a>logs</dt>

<dd>

The `logs` dictionary configures the log file server. In conjunction with aggregated logging, the log file service makes up the clustered logging solution. This service lets subscribers connect to Momentum and request a "replay" of logs since their last checkpoint and then checkpoint the reader. This is a durable logging mechanism for aggregation.

Default values are as follows:

```
logs = [
    rejectlog = "/var/log/ecelerity/rejectlog.cluster"
    paniclog = "/var/log/ecelerity/paniclog.cluster"
    mainlog = "/var/log/ecelerity/mainlog.cluster"
    acctlog = "/var/log/ecelerity/acctlog.cluster"
    bouncelog = "/var/log/ecelerity/bouncelog.cluster"
  ]
```

Each logfile that should be serviced is given a key name and corresponding local path that should match the path portion of the `cluster://` log destination specified in the other loggers throughout your configuration. This dictionary defines the logs that the cluster module on the node will tell the log aggregator are available for aggregation.

The log aggregator will periodically attempt to connect to the nodes to pull logs. It does this by connecting to the address configured in the `ECCluster_Listener` stanza on the node. Once connected, it will try to consume records from the jlogs published by the node and write that data to log files on the log aggregator.

</dd>

<dt><a name="option.nodeaddr"></a>nodeaddr</dt>

<dd>

Canonical cluster address for the node.

If not specified, gethostbyname(*`nodename`*) is used to determine the address. The address must be routable via the cluster network, and must not be 127.0.0.1.

</dd>

<dt><a name="option.nodename"></a>nodename</dt>

<dd>

Override the node name that is used to canonically identify this cluster node.

The `nodename` is determined according to the following logic: When ec_ctl runs, it determines the node name (and subcluster) as configured from `cluster.boot` and exports EC_SUB_CLUSTER and EC_NODE_NAME to the environment. If you do not explicitly configure the nodename option, the cluster module will look for the EC_NODE_NAME environment variable and take that as the value. If EC_NODE_NAME is not set in the environment, it will use the system hostname, truncated at the first ‘`.`’. Note also that modules can use the cluster_nodename hook to determine the effective value of the `nodename`.

</dd>

<dt><a name="option.unconditional_rebind"></a>unconditional_rebind</dt>

<dd>

Whether the full set_binding logic is invoked when assessing messages for internal cluster message moves or whether to use an optimization that avoids calling out to whatever set_binding logic is in place. Default value is `true`.

</dd>

<dt><a name="option.view_balance_interval"></a>view_balance_interval</dt>

<dd>

How often DuraVIP™ views are subject to balancing. This option is similar to `view_mature_time` and should to be adjusted without consultation with support. Default value is `10`.

</dd>

<dt><a name="option.view_broadcast_interval"></a>view_broadcast_interval</dt>

<dd>

When non-zero, how often to speculatively broadcast a view announcement to the cluster. Should not be needed except in rare cases when the cluster does not seem to be in sync with views; only enable as directed by support. Default value is `0`.

</dd>

<dt><a name="option.view_mature_time"></a>view_mature_time</dt>

<dd>

How long a DuraVIP™ view needs to remain unchanged before considering it "mature".

Increasing the value will make the cluster take longer to fully converge and balance DuraVIP™s. Reducing the value will make it take less time. This option should not generally need to be altered, but you may consider doing so if the cluster is experiencing instability. Best to seek advice from support if that is the case. Default value is `5`.

</dd>

</dl>

### 71.19.2. Replication Scope

The replication component of the cluster module is considered its most powerful and versatile feature. The `Replicate` directive allows you to employ a sound and efficient replication framework to the data managed within Momentum.

The default `ecelerity-cluster.conf` file defines the following replication:

<a name="conf.ref.ecelerity_cluster.conf.replication"></a>

**Example 71.33. Replication**

```
cluster {
  ...
  Replicate "inbound_cidr" {}
  Replicate "outbound_cidr" {}
  Replicate "outbound_domains" {}
  Replicate "outbound_binding_domains" {}
  Replicate "shared_named_throttles" {}
  ...
}
```

The following replication types are supported:

<a name="modules.replication.types"></a>

**Replication Types**

<dl className="variablelist">

<dt>cache</dt>

<dd>

Replicate a data cache across the cluster

In addition to native Momentum data, it is possible to replicate user controlled data sets as well (such as caches). This provides a transparent and convenient mechanism to cache data from a module level in a medium that is accessible via every node participating in the cluster.

</dd>

<dt>inbound_cidr</dt>

<dd>

Replicate inbound SMTP connections

Such metrics as the number of current connections from a specific netblock are calculated locally by referencing an internal structure called a CIDR tree. By specifying `Replicate "inbound_cidr" {}`, you tell the clustering subsystem to share all the local information about inbound connections tracked in its CIDR tree with every other node in the cluster (and vice versa). Using this shared information, the replication system will maintain an aggregated "cluster-wide" CIDR tree representing **all** inbound connections to the cluster. This option is included in the default `ecelerity-cluster.conf` file.

</dd>

<dt>outbound_binding_domains</dt>

<dd>

Replication in support of `cluster_scope_max_outbound_connections`

The `Replicate "outbound_binding_domains" {}` stanza ensures that the `cluster_scope_max_outbound_connections` option works cluster-wide. This option is included in the default `ecelerity-cluster.conf` file.

</dd>

<dt><a name="option.outbound_cidr"></a>outbound_cidr</dt>

<dd>

Replicate outbound SMTP connections

Similar to `Replicate "inbound_cidr" {}`, specifying `Replicate "outbound_cidr" {}` tells the clustering subsystem to share all the local information about outbound connections tracked in its CIDR tree with every other node in the cluster (and vice versa). The same is possible for outbound connections grouped by destination domain via `Replicate "outbound_domains" {}`. For outbound connections, it may be desirable to be more granular than aggregating on a cluster-wide premise. This option is included in the default `ecelerity-cluster.conf` file.

</dd>

<dt>outbound_domains</dt>

<dd>

Replicate outbound domains

This option is included in the default `ecelerity-cluster.conf` file. For details, see [outbound_cidr](modules.cluster#option.outbound_cidr) .

</dd>

<dt>OBTM</dt>

<dd>

Replicate outbound message throttles

</dd>

<dt>OBTC</dt>

<dd>

Replicate outbound connection throttles

</dd>

<dt>shared_named_throttles</dt>

<dd>

Enable replication of shared throttles

</dd>

<dt>metrics</dt>

<dd>

Maintain cluster-wide time series views for an IP address or CIDR block

</dd>

<dt>eccmgr_metrics</dt>

<dd>

Update the eccmgr but not other nodes

</dd>

</dl>

The following are the options valid within this scope:

<a name="modules.replication.options"></a>

**Options**

<dl className="variablelist">

<dt>parameters</dt>

<dd>

Defines which metrics will be replicated across the cluster. Possible values for this option are as follows:

*   snapshot

*   connect

*   delivery

*   transfail

*   permfail

*   reception

*   rejection

*   audit_series

*   gauge_cache

You may define multiple values in the following way: `parameters="connect;reception;rejection"`.

There is no default value for this option.

</dd>

<dt>type</dt>

<dd>

Replication type, as listed in [Replication Types](modules.cluster#modules.replication.types "Replication Types"). There is no default value for this option.

</dd>

<dt>max_delay</dt>

<dd>

Maximum amount of time to buffer replication messages before sending them out. Default value is `1.0`.

</dd>

<dt>max_pending</dt>

<dd>

Maximum number of replication messages to buffer before sending them out. Default value is `100`.

</dd>

<dt>max_size</dt>

<dd>

Maximum size of a replication cache. This option is only valid for caches. Default value is `-1` indicating the maximum supported integer size.

</dd>

<dt>binding_group</dt>

<dd>

This paramater is only valid for outbound_cidr and outbound_domains replication types. You can define multiple groups using the class option to track based on different binding groups. There is no default value for this option.

</dd>

<dt>class</dt>

<dd>

This option is useful when you need multiple replication objects for the same type. So, for example, you could make a replicate object named `oubound_cidr_foo` for binding group `foo`, but you would then have to define the class as `outbound_cidr` so it knew what type to register for. There is no default value for this option.

In practice this isn't used much, if at all.

</dd>

</dl>

For additional information about using the Replication scope, see [Chapter 28, *Data Replication*](cluster.config.replication "Chapter 28. Data Replication")

### 71.19.3. DuraVIP™ Network Topology

The DuraVIP™ featureset maintains the availability of MultiVIP© bindings and listener services on IP addresses despite node failures. Each binding or listener that should be managed in this fashion should be marked with a `Enable_Duravip = true` option.

The following is the default DuraVIP™ network topology defined in the `ecelerity-cluster.conf` file:

<a name="idp20595088"></a>

**Example 71.34. DuraVIP™ Network Topology in the Cluster Module**

```
cluster {
  ... other options here ...
  # DuraVIP network topology hints
  Topology "10.1.1.0/24" {
    cidrmask = "32"
    interface = "eth1"
  }
}
```

Because Momentum is responsible for adding and removing the corresponding IP addresses, more information must be known about the IP networks and physical interfaces on which these IPs will reside. Within the cluster module configuration, the following options in the `Topology` scope provide this additional information:

<dl className="variablelist">

<dt>interface</dt>

<dd>

In the example `Topology` scope shown previously, `10.1.1.0/24` informs the clustering module that IPs in the range specified will be added to the `eth1` ethernet interface.

</dd>

<dt>cidrmask</dt>

<dd>

When bringing an IP address online, you must also know the netmask it will be using. The cidrmask option indicates the number of bits in the netmask for a given IP address. In the example, the IP address should be added with a /32 netmask (i.e. 255.255.255.255). It is most common to add IP aliases with a 255.255.255.255 netmask, but this can vary between operating systems.

</dd>

</dl>

For additional details about DuraVIP™, see [Chapter 27, *DuraVIP™: IP Fail over*](cluster.config.duravip "Chapter 27. DuraVIP™: IP Fail over") .

### 71.19.4. Cluster Module-specific Console Commands

The cluster module can be controlled and queried through the console. *Note*: These commands do not execute when issued from within the `eccmgr` service.

The following **cluster** commands are available:

<dl className="variablelist">

<dt>cluster abort &lt;id></dt>

<dd>

Abort the job with the specified id.

</dd>

<dt>cluster arp show</dt>

<dd>

Resolve the MAC addresses of the cluster. Sample output follows.

```
12:34:15 ecelerity(/tmp/2025)> cluster arp show
10.80.116.204    [00:e0:81:63:5c:e8]  43s
10.80.116.202    [00:30:48:74:28:24]  13s
10.80.116.201    [00:e0:81:63:5d:64]  8s
10.80.117.25     [00:30:48:52:f9:06]  8s
10.80.117.2      [00:00:5e:00:01:0c]  8s
10.80.116.203    [00:30:48:74:29:ee]  8s
```
</dd>

<dt>cluster duravip move *`from_host`* *`to_host`*</dt>

<dd>

The only safe way to do a duravip move is using a **broadcast cluster duravip move**                      command from within the `eccmgr` service. For details, see [broadcast cluster duravip move *`from_host`* *`to_host`*](cluster.config.operations.eccmgr.console#cluster.config.operations.eccmgr.console.broadcast.cluster) .

</dd>

<dt><a name="modules.cluster.console.duravip.announce"></a>cluster duravip announce view</dt>

<dd>

This command announces a view update using the current local view.

### Warning

If you modify DuraVIP™ bindings, a possible race condition means that a **config reload**        taking effect on multiple machines at the same time can cause nodes to disagree about who owns which binding. For this reason, it is strongly suggested that you broadcast this command to the cluster by issuing the command **broadcast cluster duravip announce view**                               immediately after **config reload** . Doing this synchronizes ownership of the bindings and eliminates a possible race condition among the nodes.

</dd>

<dt>cluster duravip debug { on | off }</dt>

<dd>

Turn DuraVIP™ debugging on or off.

</dd>

<dt>cluster duravip show</dt>

<dd>

Show the current state of DuraVIP™ bindings. Sample output follows.

```
12:35:44 ecelerity(/tmp/2025)> cluster duravip show
DuraVIP State:
10.80.116.50/flowgomail-hotmail-50/flowgomail-hotmail-51/flowgomail-hotmail-52: (owned,safe) multivip
	[view stable for 5420 seconds]
	[configuration stable for 5409 seconds]
    	labrat-2 multivip
    	labrat-1 multivip
 *  	labrat-4 multivip
10.80.116.53/flowgomail-hotmail-53: (owned,safe) multivip
	[view stable for 5420 seconds]
	[configuration stable for 5466 seconds]
 *  	labrat-2 multivip
    	labrat-1 multivip
    	labrat-4 multivip
10.80.116.54/flowgomail-hotmail-54: (owned,safe) multivip
	[view stable for 5420 seconds]
	[configuration stable for 5465 seconds]
 *  	labrat-2 multivip
    	labrat-1 multivip
    	labrat-4 multivip
...
```

The asterisk on the left indicates that the current machine owns that particular DuraVIP™.

</dd>

<dt>cluster duravip show tables</dt>

<dd>

Display the DuraVIP™ state tables in XML format.

</dd>

<dt>cluster help</dt>

<dd>

Display the available console commands.

</dd>

<dt>cluster info</dt>

<dd>

Display the current operating status and parameters. Sample output follows.

```
13:38:31 ecelerity(/tmp/2025)> cluster info
Daemon: 4803 [m:#ec0-22787#labrat-1,s:#ec1-22787#labrat-1]
Control Group: ec_console
Cluster Group: ec_cluster (labrat-4 is leader)
Logger Group: none
```
</dd>

<dt>cluster membership</dt>

<dd>

Display the current operating status and parameters including the private name of the node, the node name, and the node type. If the node is disconnected, no information is available. Sample output follows.

```
22:16:53 /tmp/2025> cluster membership
Private Name: #ec0-20768#pono
Node Name: pono
Subcluster: default
Node Type: Momentum
Version: 3.0.10.30663 r(30669)
Address: 10.79.0.20:4802
Groups: ec_console, ec_sc_default, ec_cluster

Private Name: #ec0-08422#uhalehe
Node Name: uhalehe
Subcluster: default
Node Type: Momentum
Version: 3.0.10.30663 r(30669)
Address: 10.79.0.15:4802
Groups: ec_console, ec_sc_default, ec_cluster

Private Name: #barca#barca
Node Name: (Null)
Subcluster: (Null)
Node Type: Manager
Version: 3.0.10.30663 r(30669)
Address: 0.0.0.0:0
Groups: ec_cluster
```
</dd>

<dt>cluster nodeaddr</dt>

<dd>

Show the cluster protocol service address. Sample output follows.

```
13:40:17 ecelerity(/tmp/2025)> cluster nodeaddr
10.80.116.201:4802
```
</dd>

<dt>cluster nodename</dt>

<dd>

Show the name of the local node.

</dd>

<dt>cluster reset</dt>

<dd>
### Warning

Reset the node cluster membership. This command restarts Spread, forcing a new negotiation of DuraVIP™'s and as such should only be used in consultation with support.

</dd>

<dt>cluster shared list</dt>

<dd>

This command displays the currently managed objects. For example:

```
22:36:50 ecelerity(2025)> cluster shared list
Currently managed objects:
                  inbound_cidr [lazy, cidrtree w/ snapshots]
                 outbound_cidr [lazy, cidrtree w/ snapshots]
              outbound_domains [lazy, gauge table w/ snapshots]
```

The name of the type of shared object is followed by a description. In all current versions of Momentum all our objects are "lazy", which refers to a network protocol optimization when serializing the data and sharing it with the cluster. This is followed by an expanded representation of the replication object type; cidrtree, gauge table etc.

</dd>

<dt>cluster shared show *`obj_name`*</dt>

<dd>

Display the specified shared object. Sample output follows.

```
15:26:28 ecelerity(/tmp/2025)> cluster shared show inbound_cidr
lazy, snapped cidrtree 'inbound_cidr', view 'global'
```
</dd>

<dt>cluster shared show *`obj_name`* from *`node_name`*</dt>

<dd>

Display the specified shared object from node's perspective.

</dd>

<dt>cluster show logs</dt>

<dd>

Show the size, name and location of the cluster logs. Sample output follows.

```
15:40:34 ecelerity(/tmp/2025)> cluster show logs
mainlog
	[on disk: 1604005 bytes]
	[subscriber: 'master' @ 00000000:0000a43a]
paniclog
	[on disk: 9184 bytes]
	[subscriber: 'master' @ 00000000:00000059]
rejectlog
	[on disk: 3950 bytes]
	[subscriber: 'master' @ 00000000:0000001e]
bouncealllog
	[on disk: 0 bytes]
```
</dd>

</dl>

| [Prev](modules.cloudmark)  | [Up](modules) |  [Next](modules.commtouch) |
| 71.18. cloudmark – Cloudmark Authority® Content Scanning  | [Table of Contents](index) |  71.20. commtouch_ctasd – Commtouch Spam Protection |

