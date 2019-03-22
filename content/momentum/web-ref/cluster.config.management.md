| [Prev](subclusters)  | Chapter 7. Clustering |  [Next](cluster.config.mbus.php) |

## 7.2. Configuration Management

A Momentum cluster installation is configured using the `ecelerity.conf` file just like a Momentum single node configuration. However, the `ecelerity.conf` file in a cluster configuration also includes the `ecelerity-cluster.conf` file. This file is typically used to specify options common to all nodes—the cluster topology for example.

### Note

The `eccluster.conf` file configures the behavior of the Momentum Cluster *Manager*, **eccmgr** only, not cluster nodes. For more information about this file see [eccluster.conf](eccluster.conf3 "eccluster.conf").

There are numerous options that are cluster-specific. Some of these options such as `cluster_max_outbound_connections` are visible in various scopes but most options specific to cluster configuration are defined in the cluster module. The following table shows the options that are exclusive to a cluster configuration:

<a name="table-cluster-options"></a>

**Table 7.1.  Cluster options**

| Option/Description | Type | Default | Scopes |
| --- | --- | --- | --- |
| **[cluster_group](ecelerity-cluster.conf#option.cluster_group)** – The DuraVIP™ system coordinates IP ownership responsibilities via the cluster_group extended virtual synchrony group | na |   | cluster |
| **[cluster_max_outbound_connections](conf.ref.cluster_max_outbound_connections "cluster_max_outbound_connections")**                                     – Set the maximum number of outbound connections for a domain | sending |   | binding, domain, global, host |
| **[cluster_outbound_throttle_connections](conf.ref.cluster_outbound_throttle_connections "cluster_outbound_throttle_connections")**                                          – Limit the rate at which connections are established | sending |   | binding_group, domain, global |
| **[cluster_outbound_throttle_messages](conf.ref.cluster_outbound_throttle_messages "cluster_outbound_throttle_messages")**                                       – Limit the rate at which messages are delivered | sending |   | binding_group, domain, global |
| **[cluster_server_max_outbound_connections](conf.ref.cluster_server_max_outbound_connections "cluster_server_max_outbound_connections")**                                            – Set the maximum number of outbound connections | sending |   | binding, binding_group, global |
| **[control_group](ecelerity-cluster.conf#option.control_group)** – The cluster console manager utilizes this group to issue cluster-wide configuration commands | na |   | cluster |
| **[Section 13.1, “Module Overview”](modules.overview.implicit "13.1. Module Overview")**                                                                                 – Set the module debug level (applicable to all modules) | na |   | cluster |
| **[duravip_balance_set_size](ecelerity-cluster.conf#option.duravip_balance_set_size)** – When balancing DuraVIP™s, how many to process as a batch in response to a balance request | na |   | cluster |
| **[Section 7.5, “DuraVIP™: IP Fail over”](cluster.config.duravip "7.5. DuraVIP™: IP Fail over")**                                                                                          – Specify the binding a listener should follow | receiving |   | listen |
| **[Section 7.5, “DuraVIP™: IP Fail over”](cluster.config.duravip "7.5. DuraVIP™: IP Fail over")**                                                                                          – Specify a DuraVIP™ preference | both |   | binding, listen |
| **[Section 7.5, “DuraVIP™: IP Fail over”](cluster.config.duravip "7.5. DuraVIP™: IP Fail over")**                                                                                          – Whether to enable Durable MultiVIP© bindings | both |   | binding, listen |
| **[Chapter 13, *Modules*](modules.overview "Chapter 13. Modules")**                                                            – Whether or not the module is enabled | na |   | cluster |
| **[heartbeat_start_delay](ecelerity-cluster.conf#option.heartbeat_start_delay)** – Seconds to wait after startup before the cluster heartbeat is activated | na |   | cluster |
| **[heartbeats_per_sec](ecelerity-cluster.conf#option.heartbeats_per_sec)** – How often to send a heartbeat | na |   | cluster |
| **[if_check_interval](ecelerity-cluster.conf#option.if_check_interval)** – How often to run through a maintenance cycle | na |   | cluster |
| **[if_down_limit](ecelerity-cluster.conf#option.if_down_limit)** – How long to wait before deciding to bring an IP online | na |   | cluster |
| **[log_active_interval](ecelerity-cluster.conf#option.log_active_interval)** – Used to tune centralized logging | na |   | cluster |
| **[log_group](ecelerity-cluster.conf#option.log_group)** – Whether or not panic log messages are broadcast over spread | na |   | cluster |
| **[log_idle_interval](ecelerity-cluster.conf#option.log_idle_interval)** – The amount of time to sleep before looking for another segment | na |   | cluster |
| **[ecelerity-cluster.conf](ecelerity-cluster.conf "ecelerity-cluster.conf")**                           – Define the location of the cluster manager logs | na |   | cluster |
| **[ecelerity-cluster.conf](ecelerity-cluster.conf "ecelerity-cluster.conf")**                           – The port that the messaging bus listens on | na |   | cluster |
| **[nodeaddr](ecelerity-cluster.conf#option.nodeaddr)** – The canonical cluster address for the node | na |   | cluster |
| **[nodename](ecelerity-cluster.conf#option.nodename)** – Override the node name that is used to canonically identify this cluster node | na |   | cluster |
| **[ecelerity-cluster.conf](ecelerity-cluster.conf "ecelerity-cluster.conf")**                           – Define the cluster replication framework | na |   | cluster |
| **[mbus.conf](mbus.conf "mbus.conf")**              – The name of the subcluster | na |   | cluster |
| **[Section 7.5, “DuraVIP™: IP Fail over”](cluster.config.duravip "7.5. DuraVIP™: IP Fail over")**                                                                                          – Define the cluster network topology | na |   | cluster |
| **[unconditional_rebind](ecelerity-cluster.conf#option.unconditional_rebind)** – Whether the full set_binding logic is invoked or not | na |   | cluster |
| **[view_balance_interval](ecelerity-cluster.conf#option.view_balance_interval)** – How often DuraVIP™ views are subject to balancing | na |   | cluster |
| **[view_broadcast_interval](ecelerity-cluster.conf#option.view_broadcast_interval)** – How often to speculatively broadcast a view announcement to the cluster | na |   | cluster |
| **[view_mature_time](ecelerity-cluster.conf#option.view_mature_time)** – How long a DuraVIP™ view needs to remain unchanged before considering it "mature" | na |   | cluster |

### 7.2.1. Synchronization Conflicts

Momentum configuration files are maintained in a version control repository and exported to your cluster network via the ecconfigd service running on the cluster manager. For a detailed description of this service see [ecconfigd](executable.ecconfigd "ecconfigd").

In some situations it is possible to put the configuration replication into a conflicted state. This is usually happens when conflicting changes are made to the configuration for a subcluster on both sides of a network partition. In other words, in a two node cluster, if one of the nodes is unplugged from the network and configuration changes are made and committed on both nodes, when the network cable is re-connected, the configuration will attempt to sync but will notice that conflicting changes have been made.

If such a conflict occurs, you will need to resolve it by manually changing configuration files. For a description of this process see [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files").

While ecconfigd is in a conflicted state, no configuration changes will be able to be committed.

### 7.2.2. Working Copy of the Repository

On the client side of the configuration management, each node has a working copy checkout of the repository for its subcluster. This checkout is found at `/opt/msys/ecelerity/etc/conf`.

The tools that operate on the `conf` directory try very hard to avoid leaving it in a broken state. Every minute, each node will attempt to update its `conf` directory to match the repository. The update process will only modify the `conf` directory if the complete revision was able to be pulled—in other words, if the update could not complete, it will never leave a `conf` directory with a half-applied update.

If you have made local changes to the `conf` directory, the update will attempt to merge updates from the repository with your changes and will only update the `conf` directory if there were no conflicting changes.

If conflicting changes were found, ecconfigd will warn you and provide you with instructions on how to resolve the conflict.

### 7.2.3. Working Copy Layout

In addition to managing the configuration of subclusters, ecconfigd will also manage a special `global` subcluster. This is mapped in as a sub-directory of the `conf` directory (`/opt/msys/ecelerity/etc/conf/global`), a directory that every node has access to. This is the recommended location for sharing cluster-wide configuration information between nodes.

The `conf` directory is created with the sub-directory, `/opt/msys/ecelerity/etc/conf/default`. This represents the default configuration for nodes in that subcluster. We recommend that you place your default configuration files within this directory.

### 7.2.4. Node-specific Configuration

If you need to configure a node differently from other nodes, the recommended approach is to create a separate `ecelerity.conf` file as described in [Figure 3.33, “Copy node configuration”](web3.administration#figure_copy_config "Figure 3.33. Copy node configuration"). Doing this creates a copy of the `ecelerity.conf` file in a sub-directory below `/opt/msys/ecelerity/conf` that bears the name of the node. The name of this copy is `ecelerity.conf`.

If you wish, you can also manually create this file by creating a directory below the `/opt/msys/ecelerity/etc/conf` and copying the `ecelerity.conf` file from the `default` directory. You must do this on the cluster manager and use [eccfg](executable.eccfg "eccfg") to commit your changes to the repository.

### Note

When you create a node-specific configuration file, a directory bearing the node name and a node-specific `ecelerity.conf` file are created on *all* nodes in the cluster.

When manually changing configuration files be sure to follow the best practices described in [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files").

After creating node-specific configurations you must stop and restart the ecelerity process. To do this see [ec_ctl](executable.ec_ctl "ec_ctl"). **config reload**        will **not** load configuration changes.

When nodes use common values for a number of options, if you wish you can put these options in a configuration file stored in the `global` directory rather than repeating them in each /opt/msys/ecelerity/etc/conf/*`nodename`*/ecelerity.conf file. However, you must add include statements to the /opt/msys/ecelerity/etc/conf/*`nodename`*/ecelerity.conf file on each node.

### 7.2.5. Node-local Include Files

If you have any configurations specific to a particular node, fallback values for configuration options in that node-local configuration file *cannot* be included via the `/opt/msys/ecelerity/etc/conf/ecelerity.conf` file. For an included file, the parent file's path is added to the search path, so if a file is included from `/opt/msys/ecelerity/etc/conf/default/ecelerity.conf`, the search path becomes:

/opt/msys/ecelerity/etc/conf/default:/opt/msys/ecelerity/etc:/opt/msys/ecelerity/etc/conf/global:»
  /opt/msys/ecelerity/etc/conf/*`nodename`*:/opt/msys/ecelerity/etc/conf/default

If there are minor differences between nodes, you can include a local node configuration file in the following way. If, for example, you want `OPTION = "FOO"` on one node but `OPTION = "BAR"` on another, be sure that the option is left "undefined" in the `ecelerity.conf` file and `OPTION` is set in a `node-local.conf` file in all the `/opt/msys/ecelerity/etc/conf/{NODENAME}` directories. Be sure to also add an "include node-local.conf" statement to `/opt/msys/ecelerity/etc/default/ecelerity.conf`.

If there are major differences between node configurations, it is probably simpler to create a separate configuration file for each node as described in [Section 7.2.4, “Node-specific Configuration”](cluster.config.management#cluster.configmgmt.node.specific "7.2.4. Node-specific Configuration").

| [Prev](subclusters)  | [Up](cluster.php) |  [Next](cluster.config.mbus.php) |
| 7.1. Subclusters  | [Table of Contents](index) |  7.3. Message Bus |
