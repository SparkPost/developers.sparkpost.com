| [Prev](cluster.config.logging)  | Chapter 7. Clustering |  [Next](cluster.config.operations.php) |

## 7.7. Data Replication

The Clustered Replication feature set provided by the Momentum clustering suite is an extensive set of data sharing and aggregation facilities for representing information across node boundaries.

The following replication types are supported:

<a name="cluster.config.replication.types"></a>

**Replication Types**

*   cache – replicate a data cache across the cluster

*   inbound_cidr – replicate inbound SMTP connections

*   outbound_binding_domains – replication in support of `Cluster_Scope_Max_Outbound_Connections`

*   outbound_cidr – replicate outbound SMTP connections

*   outbound_domains – replicate outbound domains

*   OBTM – replicate outbound message throttles

*   OBTC – replicate outbound connection throttles

*   shared_named_throttles – enable replication of shared throttles

*   metrics – maintain cluster-wide time series views for an IP address or CIDR block

*   eccmgr_metrics – update the eccmgr but not other nodes

Replication is managed using the replication scope within the cluster module. Options valid within this scope are as follows:

<dl className="variablelist">

<dt>parameters</dt>

<dd>

This option defines which metrics will be replicated across the cluster. Possible values for this option are as follows:

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

The replication type. The various replication types are listed in [Replication Types](cluster.config.replication#cluster.config.replication.types "Replication Types"). There is no default value for this option.

</dd>

<dt>max_delay</dt>

<dd>

The maximum amount of time to buffer replication messages before sending them out. The default value for this option is `1.0`.

</dd>

<dt>max_pending</dt>

<dd>

Maximum number of replication messages to buffer before sending them out. The default value for this option is `100`.

</dd>

<dt>max_size</dt>

<dd>

The maximum size of a replication cache. This option is only valid for caches. The default value for this option is `-1` indicating the maximum supported integer size.

</dd>

<dt>binding_group</dt>

<dd>

This only makes sense for outbound_cidr and outbound_domains replication types. You can define multiple groups using the class option to track based on different binding groups. There is no default value for this option.

</dd>

<dt>class</dt>

<dd>

This option is useful when you need multiple replication objects for the same type. So, for example, you could make a replicate object named `oubound_cidr_foo` for binding group `foo`, but you would then have to define the class as `outbound_cidr` so it knew what type to register for. There is no default value for this option.

In practice this isn't used much, if at all.

</dd>

</dl>

### 7.7.1. Replication Configurations

There are special replication facilities that are used for enforcing cluster wide reception and delivery behaviors. These facilities exist to count inbound connections by IP address as well as outbound connections by both IP address and domain. To enable these facilities, you use the following configuration:

```
cluster {
  # ... other cluster config ...
  Replicate "inbound_cidr" {}
  Replicate "outbound_cidr" {}
  Replicate "outbound_domains" {}
  Replicate "outbound_binding_domains" {}
  Replicate "shared_named_throttles" {}
}
```

Given the above configuration, Momentum will track cluster-wide inbound SMTP connections by IP address in the `inbound_cidr` replicated data structure, the outbound SMTP connections by IP address in the `outbound_cidr` replicated data structure, and the outbound SMTP connections by destination domain in the `outbound_domains` replicated data structure. `outbound_binding_domains` tracks outbound connections in the cluster scope.

From the system console you can view the configuration using the **cluster shared list**             command:

```
22:36:50 ecelerity(2025)> cluster shared list
Currently managed objects:
                  inbound_cidr [lazy, cidrtree w/ snapshots]
                 outbound_cidr [lazy, cidrtree w/ snapshots]
              outbound_domains [lazy, gauge table w/ snapshots]
```

For a complete list of the cluster commands available from the system console see [Section 7.7.2, “Cluster Management Using Console Commands”](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands").

**7.7.1.1. Tracking inbound connections via inbound_cidr**

On a running system, investigating the contents of the `inbound_cidr` storage will show us the inbound connections to our cluster:

```
22:45:34 ecelerity(2025)> cluster shared show inbound_cidr
lazy, snapped cidrtree 'inbound_cidr', view 'global'
     31                         10.0.0.0/8
     31                         10.0.0.0/24
      4                         10.0.0.0/25
      4                         10.0.0.103/32
     27                         10.0.0.160/27
     27                         10.0.0.176/29
     27                         10.0.0.180/31
     14                         10.0.0.180/32
     13                         10.0.0.181/32
```

The above output shows the view of inbound SMTP connections per IP address aggregated across the entire cluster. In order to view the inbound connection counts to a particular node, we can ask for the view of that information from the perspective of any node by appending `from nodename` where `nodename` is the name of the node:

```
22:45:40 ecelerity(2025)> cluster shared show inbound_cidr from relay-0-1
lazy, snapped cidrtree 'inbound_cidr', view '#ec1-12137#relay-0-1'
      5                         10.0.0.0/8
      5                         10.0.0.0/24
      5                         10.0.0.160/27
      5                         10.0.0.176/29
      5                         10.0.0.180/31
      4                         10.0.0.180/32
      1                         10.0.0.181/32

22:45:59 ecelerity(2025)> cluster shared show inbound_cidr from relay-0-2
lazy, snapped cidrtree 'inbound_cidr', view '#ec1-48616#relay-0-2'
      7                         10.0.0.0/8
      7                         10.0.0.0/24
      3                         10.0.0.103/32
      4                         10.0.0.160/27
      4                         10.0.0.180/31
      2                         10.0.0.180/32
      2                         10.0.0.181/32
```
**7.7.1.2. Tracking outbound connections via outbound_cidr**

To look at the outbound SMTP connections by IP address, we can use the same command as above, replacing `inbound_cidr` with `outbound_cidr`, yielding an identical data layout and meaning (excepting the data represents outbound connections).

**7.7.1.3. Tracking outbound connections via outbound_domain**

The outbound connections tallied by destination domain can be viewed by specifying the `outbound_domain` shared structure:

```
23:05:30 ecelerity(2025)> cluster shared show outbound_domain
lazy, snapped gauge table 'outbound_domain', view 'global'
                                                     aol.com:           10
                                               bellsouth.net:           23
                                                 hotmail.com:          246
                                                  omniti.com:            5
                                                   yahoo.com:           65
```

Just as in any shared structure view, you can limit the display to the perspective of any participating node by appending `from nodename` to the command. To see the view from relay-0-1 instead of the cluster-wide aggregate, we can issue the following command:

```
23:05:34 ecelerity(2025)> cluster shared show outbound_domain from relay-0-1
lazy, snapped gauge table 'outbound_domain', view '#ec1-12137#relay-0-1'
                                                     aol.com:            1
                                               bellsouth.net:            4
                                                 hotmail.com:           26
                                                   yahoo.com:           30
```
**7.7.1.4. Replicated inbound audit metrics**

We can use this feature with the inbound audit module (see [Section 14.41, “inbound_audit – Inbound traffic analytics”](modules.inbound_audit "14.41. inbound_audit – Inbound traffic analytics")) in order to maintain cluster-wide time series views of inbound connections, receptions and rejections from any IP address or CIDR block.

```
cluster {
  # ... other cluster configuration ...
  Replicate "metrics" {
    parameters="connect;reception;rejection"
  }
}
```

With this configuration, it's also necessary to define one or more audit series for the inbound audit module.

```
inbound_audit {
  # keep audit data for the last half hour,
  # placed into six windows of 5 min (300s) each
  monitors = ("300,6")
}
```

### Note

As of version 3.0.23, the inbound_audit module is a singleton and does not have an instance name. This changes the way the module is defined and also the way that system console commands are invoked.

As of version 3.3.1, the adaptive module is cluster-aware. To enable this capability, a `replicate "metrics"` stanza must be declared and the `parameters` must be set to `audit_series`.

With such a configuration we can view connections, receptions and rejections over the entire cluster for the last half hour from any IP address or CIDR block. From the console, this can be done using a command of this form:

`09:16:03 ecelerity> inbound_audit:inbound_audit1 show ip 127.0.0.0/8`

You can also implement policy based on these time series using Sieve. See [ec_ip_connections_cluster](sieve.ref.ec_ip_connections_cluster "ec_ip_connections_cluster"), [ec_ip_receptions_cluster](sieve.ref.ec_ip_receptions_cluster.php "ec_ip_receptions_cluster"), and [ec_ip_rejections_cluster](sieve.ref.ec_ip_rejections_cluster.php "ec_ip_rejections_cluster").

**7.7.1.5. Replicated named audit series**

Named audit series are a more general mechanism than the inbound audit metrics. We can use them to maintain time series for any events we wish—in comparison, the inbound audit metrics can track only connections, receptions and rejections. Since the source IP address is recorded for each event, we can obtain event counts by IP address or CIDR block. These named audit series can be replicated across a cluster by including `audit_series` in the metrics replication stanza.

```
cluster {
  # ... other cluster configuration ...
  Replicate  "metrics" {
    parameters="audit_series"
  }
}
```

With this configuration, we can use Sieve or Lua to add data to a named series and specify that it be replicated. We can also obtain counts from these series. See [audit_series_add](sieve.ref.audit_series_add "audit_series_add") and [audit_series](sieve.ref.audit_series.php "audit_series") for Sieve functions and [msys.audit_series.add](lua.ref.msys.audit_series.add.php "msys.audit_series.add") and [msys.audit_series.define](lua.ref.msys.audit_series.define.php "msys.audit_series.define").

**7.7.1.6. Replicated Caches**

In addition to the other built-in replication objects, we can dynamically replicate arbitrary key-value pairs across all nodes of the cluster using replicated caches.

<a name="cluster.replicatedcache.code"></a>

**Example 7.3. Replicated caches**

```
Datasource "mycache" {
  uri = ("odbc:DSN=sqlserver;UID=user;PWD=pass")
  serialized = true
}

cluster {
  # ... other cluster configuration ...
  Replicate "mycache" {
    type = "cache"
  }
}
```

Note that if you have the replicate type defined as `cache` you must supply the `replication_name` of the cache and that name must match the cache name defined in the `ds_core` module. In [Example 7.3, “Replicated caches”](cluster.config.replication#cluster.replicatedcache.code "Example 7.3. Replicated caches"), for example, the name `mycache` referenced in the cluster stanza shown below is defined in the ds_core module. For more information about using the `ds_core` module see [Section 14.30, “ds_core – Datasource Query Core”](modules.ds_core.php "14.30. ds_core – Datasource Query Core").

This stanza can be repeated any number of times, specifying a unique `replication_name` for each cache. Key-value pairs can be inserted into, or retrieved from, the replicated cache at run time using Sieve. See [ec_cluster_cache_get](sieve.ref.ec_cluster_cache_get "ec_cluster_cache_get") and [ec_cluster_cache_set](sieve.ref.ec_cluster_cache_set.php "ec_cluster_cache_set"). For the Lua equivalents, see [msys.gauge_cache.define](lua.ref.msys.gauge_cache.define.php "msys.gauge_cache.define") and [msys.gauge_cache.get](lua.ref.msys.gauge_cache.get.php "msys.gauge_cache.get").

By default, nodes that join the cluster will receive new or updated key-value pairs as they are inserted into the cache. Any pre-existing key-value pairs present on other nodes will not be populated into the cache on a new node until the key-value pair is updated. To change this behavior, snapshots can be enabled on a per-cache basis. This causes all pre-existing key-value pairs on the other nodes to be populated on a new node as soon as it joins the cluster.

```
cluster {
  # ... other cluster configuration ...
  Replicate "mycache" {
    type = "cache"
    parameters="snapshot"
  }
}
```
**7.7.1.7. Shared named throttles**

Cluster-wide enforcement of name-keyed throttles is supported in the MTA, and accessed in a similar way to the [ec_throttle](sieve.ref.ec_throttle "ec_throttle") support for single instance deployments. The documentation for [ec_shared_throttle](sieve.ref.ec_shared_throttle.php "ec_shared_throttle") provides information on how to interact directly with the throttles. The following stanza must be placed in the cluster module configuration to enable the shared throttles:

```
cluster {
  # ... other cluster configuration ...
  Replicate "shared_named_throttles" {}
}
```
**7.7.1.8. Shared Outbound Throttles**

Cluster-wide outbound connection and message throttles are supported in the MTA, using the [cluster_outbound_throttle_connections](conf.ref.cluster_outbound_throttle_connections "cluster_outbound_throttle_connections") and [cluster_outbound_throttle_messages](conf.ref.cluster_outbound_throttle_messages.php "cluster_outbound_throttle_messages") configuration parameters. The cluster stanza must include a `replicate` directive to enable outbound message throttles (OBTM) or outbound connection throttles (OBTC).

```
cluster {
  # ... other cluster configuration ...
  Replicate "OBTM" {}   # outbound message throttles
  Replicate "OBTC" {}   # outbound connection throttles
}
```
**7.7.1.9. Shared Gauge Caches**

A gauge cache is a collection of named counters (gauges), which are manipulated by increment or decrement operations. In Sieve, these are used via the [ec_gauge_cache](sieve.ref.ec_gauge_cache "ec_gauge_cache") functions. For the equivalent Lua functions see [msys.gauge_cache.inc](lua.ref.msys.gauge_cache.inc.php "msys.gauge_cache.inc") and [msys.gauge_cache.dec](lua.ref.msys.gauge_cache.dec.php "msys.gauge_cache.dec"). When gauge cache replication is enabled, increments or decrements are broadcast to all nodes on the cluster.

```
cluster {
  # ... other cluster configuration ...
  Replicate "metrics" {
    parameters="gauge_cache"
  }
}
```

Once gauge cache replication is enabled in this way, we can specify which caches to replicate on an individual basis. This is done using the `replicate` argument to `ec_gauge_cache_init`.

### 7.7.2. Cluster Management Using Console Commands

The cluster module can be controlled and queried through the system console. *Note*: These commands must be issued from the system console on a node; they do not execute when issued from eccmgr.

The following commands are available:

**7.7.2.1. cluster help**

Display the available console commands.

**7.7.2.2. cluster abort **

Abort the job with the specified id.

**7.7.2.3. cluster arp show**

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
**7.7.2.4. cluster duravip show**

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

**7.7.2.5. cluster duravip move *`from_host`* *`to_host`***
### Warning

The only safe way to use this command is from the cluster console using a `broadcast` command. For more information see [Section 7.8, “Using the Cluster Manager”](cluster.config.operations "7.8. Using the Cluster Manager").

**7.7.2.6. cluster duravip announce view**

This command announces a view update using the current local view.

### Warning

If you modify DuraVIP™ bindings, a possible race condition means that a **config reload**        taking effect on multiple machines at the same time can cause nodes to disagree about who owns which binding. For this reason it is strongly suggested that you broadcast this command to the cluster by issuing the command **broadcast cluster duravip announce view**                               immediately after **config reload** . Doing this synchronizes ownership of the bindings and eliminates a possible race condition among the nodes.

**7.7.2.7. cluster duravip debug { on | off }**

Turn DuraVIP™ debugging on or off.

**7.7.2.8. cluster membership**

Display the current operating status and parameters including the private name of the node, the node name and the node type. If the node is disconnected, no information is available. Sample output follows.

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
**7.7.2.9. cluster duravip show tables**

Display the DuraVIP™ state tables in XML format.

**7.7.2.10. cluster info**

Display the current operating status and parameters. Sample output follows.

```
13:38:31 ecelerity(/tmp/2025)> cluster info
Daemon: 4803 [m:#ec0-22787#labrat-1,s:#ec1-22787#labrat-1]
Control Group: ec_console
Cluster Group: ec_cluster (labrat-4 is leader)
Logger Group: none
```
**7.7.2.11. cluster nodename**

Show the name of the local node.

**7.7.2.12. cluster nodeaddr**

Show the cluster protocol service address. Sample output follows.

```
13:40:17 ecelerity(/tmp/2025)> cluster nodeaddr
10.80.116.201:4802
```
**7.7.2.13. cluster reset**
### Warning

Reset the node cluster membership. This command restarts Spread, forcing a new negotiation of DuraVIP™'s and as such should only be used in consultation with support.

**7.7.2.14. cluster shared list**

This command displays the currently managed objects. For example:

```
22:36:50 ecelerity(2025)> cluster shared list
Currently managed objects:
                  inbound_cidr [lazy, cidrtree w/ snapshots]
                 outbound_cidr [lazy, cidrtree w/ snapshots]
              outbound_domains [lazy, gauge table w/ snapshots]
```

The name of the type of shared object is followed by a description. In all current versions of Momentum all our objects are "lazy", which refers to a network protocol optimization when serializing the data and sharing it with the cluster. This is followed by an expanded representation of the replication object type; cidrtree, gauge table etc.

**7.7.2.15. cluster shared show *`obj_name`***

Display the specified shared object. Sample output follows.

```
15:26:28 ecelerity(/tmp/2025)> cluster shared show inbound_cidr
lazy, snapped cidrtree 'inbound_cidr', view 'global'
```
**7.7.2.16. cluster shared show *`obj_name`* from *`node_name`***

Display the specified shared object from node's perspective.

**7.7.2.17. cluster show logs**

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

| [Prev](cluster.config.logging)  | [Up](cluster.php) |  [Next](cluster.config.operations.php) |
| 7.6. Log Aggregation  | [Table of Contents](index) |  7.8. Using the Cluster Manager |
