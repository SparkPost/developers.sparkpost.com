|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.operations)  | Chapter 38. Using the Cluster Manager (**eccmgr**) |  [Next](cluster.cidr_server) |

## 38.2. Console Commands for the Cluster Manager

The following console commands can be issued from within the **eccmgr** service. These commands are mainly concerned with broadcasting or unicasting commands to other cluster nodes.

<dl className="variablelist">

<dt><a name="cluster.config.operations.eccmgr.console.broadcast"></a>broadcast *`command`*</dt>

<dd>

Broadcast a console command to the cluster. For a list of available console commands, see [Chapter 67, *Console Commands Summary*](console_commands "Chapter 67. Console Commands Summary") .

</dd>

<dt><a name="cluster.config.operations.eccmgr.console.broadcast.cluster"></a>broadcast cluster duravip move *`from_host`* *`to_host`*</dt>

<dd>

The only safe way to do a duravip move is using a **broadcast cluster duravip move**                      command. This guarantees that both the node that currently owns the address and the new owner will be in sync. For example:

/tmp/2025> broadcast cluster duravip move *`10.0.5.139`* to *`hostname`*

Furthermore, if there is a mismatch between the machine's hostname and the spread node name (i.e. if the hostname is fully qualified) the move will not succeed.

### Warning

If you modify DuraVIP™ bindings, a possible race condition means that a **config reload**        taking effect on multiple machines at the same time can cause nodes to disagree about who owns which binding. For this reason, it is strongly suggested that you broadcast this command to the cluster by issuing the command **broadcast cluster duravip announce view**                               immediately after **config reload** . Doing this synchronizes ownership of the bindings and eliminates a possible race condition among the nodes.

</dd>

<dt>subcluster broadcast *`subcluster command`* </dt>

<dd>

This command works in the same way as the **broadcast *`command`***             but sends the command only to the subcluster identified by *`subcluster`*.

For example to broadcast a command to all nodes on the `west` subcluster, you would issue the command **subcluster broadcast west *`command`***                           .

</dd>

<dt>subcluster retrieve *`subcluster command`* </dt>

<dd>

This command works in the same way as the **retrieve *`command`***             but retrieves the responses only from the subcluster identified by *`subcluster`*.

For example to retrieve the responses to a command broadcast to all nodes on the `west` subcluster, you would issue the command **subcluster retrieve west *`command`***                          .

</dd>

<dt>flush control cache</dt>

<dd>

Clear the results buffer. After executing this command, you will not be able to retrieve previous commands.

</dd>

<dt>help</dt>

<dd>

Show a help message, listing available commands and their brief usages.

</dd>

<dt>info</dt>

<dd>

Show general information about the cluster group and the cluster node.

This command is analogous to the similarly named cluster module console command, described in [Section 71.19.4, “Cluster Module-specific Console Commands”](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands").

</dd>

<dt>retrieve *`command`*</dt>

<dd>

Retrieve the responses to a command broadcasted by the cluster manager.

</dd>

<dt>retrieve_node *`node`* *`command`*</dt>

<dd>

Retrieve the responses to a unicasted/broadcasted command from the specified node of the cluster.

</dd>

<dt>show cluster membership</dt>

<dd>

Show current cluster members and their roles (nodes, manager or other).

This command is analogous to the similarly named cluster module console command described in [Section 71.19.4, “Cluster Module-specific Console Commands”](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands"), i.e., the output of **show cluster membership**                    while in XML format, is identical to the output of the cluster module command **cluster membership** .

</dd>

<dt>shutdown</dt>

<dd>

Shutdown the cluster manager.

</dd>

<dt>unicast *`node`* *`command`*</dt>

<dd>

Unicast a [console command](console_commands "Chapter 67. Console Commands Summary") to the specified node in the cluster.

</dd>

<dt>version</dt>

<dd>

Display version and copyright information of eccmgr.

</dd>

<dt>config</dt>

<dd>

You can use the [config](console_commands.config "config") commands for online configuration tuning. Commonly used commands include:

<dl className="variablelist">

<dt>config [set | get | eval] [ *`scope`* ] *`option_name`* [ *`value`* ]</dt>

<dd>

Set, get, or eval any of the options in the `eccluster.conf`.

</dd>

<dt>config showrecurse</dt>

<dd>

View all options that affect the cluster manager. This command displays options found in the `eccluster.conf` file.

</dd>

</dl>

</dd>

</dl>

|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.operations)  | [Up](cluster.config.operations) |  [Next](cluster.cidr_server) |
| Chapter 38. Using the Cluster Manager (**eccmgr**)  | [Table of Contents](index) |  Chapter 39. CIDR Server |

