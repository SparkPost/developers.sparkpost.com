|     |     |     |
| --- | --- | --- |
| [Prev](ecelerity-cluster.conf)  | Chapter 10. Cluster Configuration Reference |  [Next](mbus.conf) |

<a name="cluster.boot"></a>
## Name

cluster.boot — determines how the cluster configuration files are managed

<a name="idp12717216"></a>
## Description

This file is created on the cluster manager and on any nodes when the **/opt/msys/ecelerity/bin/eccfg bootstrap**           command is used during installation. You can find this file in the `/opt/msys/ecelerity/etc` directory. Find below the sample `cluster.boot` file found in the `/opt/msys/ecelerity/etc/sample-configs/` directory.

```
# The autoupdate setting determines whether or not the cluster configuration
# will be automatically updated from the repository on the cluster manager.
# If set to 'true', the config will be updated on startup and periodically
# (via cron).  If set to 'ifunchanged', it will only be updated if there are
# no local changes.  If set to 'false', updates must be triggered manually.
#
# autoupdate = (true|ifunchanged|false)
autoupdate=true

# The node_name setting allows one to override the name the cluster node will
# use when joining the message bus, as well as the name that will be searched
# for in the configuration directory.
# The default is to use the short form of the hostname.
#
#node_name=example

# The cluster_name setting specifies the unique name of the cluster
# on the message bus.  This should be set to 'default' unless a multi-level
# cluster is desired.
#
# cluster_name = (name|default)
cluster_name=default

# The repo setting specifies one or more locations for the configuration
# repository.  Typically, the repo lives on the cluster manager.  The repo
# may be 'local' for a repo in the local filesystem, 'auto' to automatically
# determine the value (requires an existing conf checkout), the hostname
# of the machine hosting the repo, or a combination of hostname and port.
# Multiple repo sources may be specified, separated by a comma.
#
# repo = (auto|local|host|host:port,...)
repo=auto,eccmgr.example.com

# The reload_config_on_update setting specifies whether a change
# in the configuration should trigger a reload of the relevant
# ecelerity component.
#
# reload_config_on_update = (true | false)
reload_config_on_update=true
```

<dl className="variablelist">

<dt>autoupdate</dt>

<dd>

This option controls how updates from the central repository are applied. Legitimate values for this option are:

*   true – All changes made to the central repository are merged into the local configuration file. If there are no local changes, this is the same as simply updating from the central repository. If you have made local changes, and the upstream change doesn't conflict, then changes will be merged in automatically.

*   ifunchanged – The same behavior as `true` unless local changes have been made to the local checkout, in which case, no upstream changes will be applied.

*   false – This option prevents any upstream changes from being applied to the local checkout. It is useful for freezing a given node's configuration while performing testing on one or more other nodes.

</dd>

<dt>cluster_name</dt>

<dd>

This is the only required option. This option is assigned a value when **eccfg bootstrap**           is run. This value can be edited later, when changing a node's subcluster for example.

</dd>

<dt>ecconfigd.1</dt>

<dd>

**Configuration Change. ** This feature is available as of version 3.4.

This option identifies the hostname of the ecconfigd process.

### Warning

This option is set during installation. Do not alter it without consulting support.

</dd>

<dt>node_name</dt>

<dd>

**Configuration Change. ** As of version 3.4, cluster communication is handled by the msgc modules rather than by mbus. For more information see [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules").

Returns the Spread name for this node. This must be the same name that is used in `mbus.conf` and it must be a DNS-resolvable name. It defaults to the unqualified hostname. You can use the command **host *`node_name`***               to determine whether a node is DNS-resolvable. If the host is found, this command will return the IP address. As of version 3.4, this option is no longer required.

*Note*: Currently, spread limits the node name to no more than 10 characters and you must set the `node_name` option if your node name contains periods.

</dd>

<dt>reload_config_on_update</dt>

<dd>

This option controls whether the running Momentum process will have its configuration file reloaded whenever the configuration is updated. It defaults to 'true'.

</dd>

<dt>repo</dt>

<dd>

This option defines the URL for the repository that this node is using. This can be either the master repository or a read-only slave repository. The default value is 'auto' which determines the appropriate URL from the existing working copy on the node or contacts the local spread daemon.

The default port for the `repo` option is `2027`. You need not specify the port unless you have changed the default.

</dd>

</dl>

|     |     |     |
| --- | --- | --- |
| [Prev](ecelerity-cluster.conf)  | [Up](cluster.ref) |  [Next](mbus.conf) |
| ecelerity-cluster.conf  | [Table of Contents](index) |  mbus.conf |
