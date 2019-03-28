|     |     |     |
| --- | --- | --- |
| [Prev](ecelerity.conf.fallback)  | Chapter 2. Configuration |  [Next](conf.manual.changes.php) |

## 2.7. The Momentum Configuration Server: ecconfigd

Both stand-alone and clustered installations take advantage of the revision control system for configuration files. Furthermore, the web UI component embraces this concept; any configuration changes made via the UI are effected by committing to the configuration server, ecconfigd.

The ecconfigd service consists of two processes; in a cluster configuration one process participates in the messaging bus to maintain membership, and the other process, active in both cluster and stand-alone configurations, is an Apache-based Subversion server listening on port 2027\. Together these processes manage the configuration repositories for the subclusters on the network, or for a stand-alone system.

In a cluster environment the ecconfigd service must run on the cluster manager. This daemon is auto-configuring and will replicate its configuration repositories and share them across the cluster.

The default installation has a cron job deployed on the nodes that uses **eccfg pull**      to update the local configuration from the Configuration Server (ecconfigd). eccfg is built in such a way that these updates are applied atomically to the configuration checkout directory; it will not modify the checkout if doing so causes a conflict.

After an update changes files, eccfg asks the node to reload the configuration and apply the changed configuration. This does not require the node to restart.

The repository working copy directories are located at `/opt/msys/ecelerity/etc/conf/`. There are a number of directories below this. What they are depends upon whether you have installed Momentum in a stand-alone or cluster configuration and whether you have defined any subclusters. Find a description of the subdirectories below:

*   `global` – contains files shared across multiple subclusters. This directory exists but is not used in a stand-alone configuration.

*   `default` – files shared across multiple nodes or those used by a stand-alone configuration. In a cluster configuration, `default` is the name of the default subcluster.

*   *`nodename`* – node-specific files

*   *`peer`* – any files shared by multiple nodes in a single subcluster

If you wish to change the search order, set the environment variable `EC_CONF_SEARCH_PATH`. By default the order is:

```
/opt/msys/ecelerity/etc
/opt/msys/ecelerity/etc/conf/global
/opt/msys/ecelerity/etc/conf/{NODENAME}
/opt/msys/ecelerity/etc/conf/default
```

Directories are separated by the standard path separator. For more information about `EC_CONF_SEARCH_PATH` see [Section 2.1.5.1, “The `environment` File”](conf.ecelerity.conf#conf.environment.file "2.1.5.1. The environment File").

Sieve scripts and scriptlets created through the web UI also make use of the revision control system.

For example, if you upgrade from version 2.2 with the following file structure:

```
/opt/ecelerity/etc/ecelerity.conf
/opt/ecelerity/etc/sieve/files ...
```

Conversion will render this as:

```
/opt/msys/ecelerity/etc/conf/default/ecelerity.conf
/opt/msys/ecelerity/etc/conf/sieve/files ...
```

If you add any scripts using the policy editor in the web UI your changes will be stored in the repository working directory `/opt/msys/ecelerity/etc/default/policy`. If you plan to create your own policy scripts outside of the web UI, follow the procedures described in [Section 5.6, “Best Practices for Manually Created Policy Scripts”](policy.best.practices "5.6. Best Practices for Manually Created Policy Scripts").

|     |     |     |
| --- | --- | --- |
| [Prev](ecelerity.conf.fallback)  | [Up](conf.php) |  [Next](conf.manual.changes.php) |
| 2.6. Configuration Scopes and Fallback  | [Table of Contents](index) |  2.8. Best Practices for Manually Changing Configuration Files |
