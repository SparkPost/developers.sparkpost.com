| [Prev](conf.ref.ecelerity.conf)  | Part III. Configuring Momentum |  [Next](conf.ref.eccluster.conf) |
## Chapter 16. Cluster-specific Configuration
**Table of Contents**

* [16.1\. Cluster-specific Configuration Files](cluster#cluster.config_files)
* [16.2\. `eccluster.conf` File](conf.ref.eccluster.conf)
* [16.3\. `ecelerity-cluster.conf` File](conf.ref.ecelerity_cluster.conf)
* [16.4\. `msgc_server.conf` File](conf.ref.msgc_server.conf)
* [16.5\. Cluster-specific Listeners](cluster.listeners)
* [16.6\. Configuring Momentum for High Availability and Failover](cluster.config.failover)
* [16.7\. Configuring Riak in a Cluster](cluster.riak.configuration)

Clustering is based on the concept of having a cluster of machines that communicate using a group communication messaging bus. A cluster is comprised of at least one Manager node and one or more MTA nodes. The Manager in the cluster will be your central point of management for the cluster. Ideally, a cluster will have a dedicated gigabit network for transmission of replicated data and internal message moves.
The clustering capabilities of Momentum enable the following features:
*   Centralized management of configuration for multiple MTA nodes
*   Replicated, redundant, configuration repository with revision control
*   Log aggregation pulling log files from MTA nodes to centralized location(s) on the network
*   Replication of a variety of real-time metrics to allow cluster-wide coordination for inbound and outbound traffic shaping
*   DuraVIP™ (Momentum's IP Failover mechanism)
Momentum assumes that the cluster network is a trusted network, meaning that it leaves host based authentication to be implemented by the network administrator at an appropriate firewall on the network.
### Note
Momentum's installer does not support setting up subclusters during installation. Consult professional services if subclusters is a requirement.
## 16.1. Cluster-specific Configuration Files
A Momentum cluster installation is configured using the [`ecelerity.conf`](conf.ref.ecelerity.conf "15.6. ecelerity.conf File") file similar to a Momentum single node configuration. However, additional configuration files are needed:
*   [`eccluster.conf`](conf.ref.eccluster.conf "16.2. eccluster.conf File") - Momentum Cluster Manager configuration file
*   [`ecelerity_cluster.conf`](conf.ref.ecelerity_cluster.conf "16.3. ecelerity-cluster.conf File") - Cluster-specific configuration file included from within `ecelerity.conf`
*   [`msgc_server.conf`](conf.ref.msgc_server.conf "16.4. msgc_server.conf File") - Cluster messaging bus configuration file included from within the `eccluster.conf` file on the cluster manager and from the `ecelerity-cluster.conf` file on nodes
The default cluster-enabled configuration is located in the `/opt/msys/ecelerity/etc/conf/default` subdirectory. Simple deployments will not typically need to edit the cluster portions of this configuration. If you intend to use DuraVIP™ or to more tightly control the scope of replicate data, you will need to edit the configuration in the cluster stanza of the `ecelerity-cluster.conf` file.
There are numerous configuration options that are cluster-specific. Some of these options such as `cluster_max_outbound_connections` are visible in various scopes, but most options specific to cluster configuration are defined in the [cluster](modules.cluster "71.19. cluster – Cluster") module.
The non-module specific configuration options are listed in [Chapter 66, *Configuration Options Summary*](config.options.summary "Chapter 66. Configuration Options Summary") .
Modules and their configuration options are discussed in the [Chapter 71, *Modules Reference*](modules "Chapter 71. Modules Reference") .
For general information about Momentum's configuration files, see [Section 15.1, “Configuration Files”](conf.overview#conf.files "15.1. Configuration Files").
For additional details about editing your configuration files, see [Section 15.1.4, “Changing Configuration Files”](conf.overview#conf.manual.changes "15.1.4. Changing Configuration Files").
### 16.1.1. Cluster-specific Configuration Management
Momentum configuration files are maintained in a version control repository and exported to your cluster network via the [`ecconfigd`](conf.overview#conf.ecconfigd "15.1.3. Configuration Management (ecconfigd)") service running on the cluster manager. This daemon is auto-configuring and will replicate your configuration repositories to all participating cluster nodes. On the cluster manager, the repository resides in the `/var/ecconfigd/repo` directory. Nodes pull their configuration from this repository and store their working copy in the `/opt/msys/ecelerity/etc/conf` directory.
The default installation has a cron job deployed on the nodes that uses [**eccfg pull** ](executable.eccfg "eccfg") to update the local configuration from the `ecconfigd` service. **eccfg** is built in such a way that these updates are applied atomically to the configuration checkout directory.
The tools that operate on the configuration checkout directory try very hard to avoid leaving it in a broken state. Every minute, each node will attempt to update its directory to match the repository. If you have made local changes to the directory, the update will attempt to merge updates from the repository with your changes. The update process will only modify the directory if the complete revision was able to be pulled. In other words, it will not modify the configuration checkout directory if doing so causes a conflict and will never leave a directory with a half-applied update.
In some situations, it is possible to put the configuration replication into a conflicted state. For instance, in a two node cluster, if one of the nodes is unplugged from the network while configuration changes are made and committed on both nodes, when the network cable is re-connected, the configuration will attempt to sync but will notice that conflicting changes have been made. If conflicting changes were found, `ecconfigd` will warn you and provide you with instructions on how to resolve the conflict. You may need to manually resolve the conflicting configuration files. For instructions on changing configuration files, see [Section 15.1.4, “Changing Configuration Files”](conf.overview#conf.manual.changes "15.1.4. Changing Configuration Files").
**16.1.1.1. Repository Working Copy for Cluster**
On the client side of the configuration management, each node has a working copy checkout of the repository located at `/opt/msys/ecelerity/etc/conf`. The following are descriptions of the subdirectories in a cluster configuration:
*   `global` – location for sharing cluster-wide configuration information between nodes
    Every node has access to this subdirectory.
*   `default` – contains your default configuration files, which are shared across multiple nodes
    `default` is the name of the default subcluster and represents the default configuration for nodes in that subcluster.
*   *`nodename`* – contains node-specific configuration files
    When you create a node-specific configuration file, a directory bearing the node name and a node-specific `ecelerity.conf` file are created on *all* nodes in the cluster.
    When nodes use common values for a number of options, if you wish you can put these options in a configuration file stored in the `global` directory rather than repeating them in each /opt/msys/ecelerity/etc/conf/*`nodename`*/ecelerity.conf file. However, you must add include statements to the /opt/msys/ecelerity/etc/conf/*`nodename`*/ecelerity.conf file on each node.
*   *`peer`* – any files shared by multiple nodes in a single subcluster
By default the order is:
```
/opt/msys/ecelerity/etc
/opt/msys/ecelerity/etc/conf/global
/opt/msys/ecelerity/etc/conf/{NODENAME}
/opt/msys/ecelerity/etc/conf/default
```
Directories are separated by the standard path separator.
If you wish to change the search order, set the environment variable `EC_CONF_SEARCH_PATH`. For more information about `EC_CONF_SEARCH_PATH`, see [Chapter 31, *Configuring the Environment File*](environment_file "Chapter 31. Configuring the Environment File") .
### 16.1.2. Using Node-local `include` Files
If you have any configurations specific to a particular node, fallback values for configuration options in that node-local configuration file *cannot* be included via the `/opt/msys/ecelerity/etc/conf/ecelerity.conf` file. For an included file, the parent file's path is added to the search path, so if a file is included from `/opt/msys/ecelerity/etc/conf/default/ecelerity.conf`, the search path becomes:
/opt/msys/ecelerity/etc/conf/default:/opt/msys/ecelerity/etc:/opt/msys/ecelerity/etc/conf/global:»
  /opt/msys/ecelerity/etc/conf/*`nodename`*:/opt/msys/ecelerity/etc/conf/default
If there are minor differences between nodes, you can include a local node configuration file as discussed in the following the example:
For one node, you want `OPTION = "FOO"`.
For another node, you want `OPTION = "BAR"`.
Do not define `OPTION` in the `ecelerity.conf` file.
Set `OPTION` in a `node-local.conf` file in all the /opt/msys/ecelerity/etc/conf/*`nodename`* directories.
Add an "include node-local.conf" statement to `/opt/msys/ecelerity/etc/default/ecelerity.conf`.
If there are major differences between node configurations, it is probably simpler to create a separate configuration file for each node as described in [Section 16.1.1.1, “Repository Working Copy for Cluster”](cluster#cluster.config_files.mgmt.cluster "16.1.1.1. Repository Working Copy for Cluster").

| [Prev](conf.ref.ecelerity.conf)  | [Up](p.configuration) |  [Next](conf.ref.eccluster.conf) |
| 15.6. `ecelerity.conf` File  | [Table of Contents](index) |  16.2. `eccluster.conf` File |
