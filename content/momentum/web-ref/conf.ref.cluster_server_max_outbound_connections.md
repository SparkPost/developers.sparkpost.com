| [Prev](conf.ref.cluster_scope_max_outbound_connections)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.connect_timeout.php) |

<a name="conf.ref.cluster_server_max_outbound_connections"></a>
## Name

cluster_server_max_outbound_connections — set the maximum number of outbound connections, and enforce it across a cluster

## Synopsis

`Cluster_Server_Max_Outbound_Connections = 800`

<a name="idp8648336"></a>
## Description

Limits the number of total connections that will be established concurrently by a cluster of Momentum systems, irrespective of bindings. There is no limit enforced by default. 800 is an example value -- a more realistic value would need to be based on the cluster size and the capabilities of the underlying hardware and operating system.

Within a `Binding` stanza, this option will regulate the total number of connections through that particular binding across the cluster.

### Note

The cluster module must be configured with the outbound CIDR parameters as defined here: [Section 7.7, “Data Replication”](cluster.config.replication "7.7. Data Replication")

<a name="idp8653344"></a>
## Scope

cluster_server_max_outbound_connections is valid in the binding, binding_group and global scopes.

<a name="idp8655040"></a>
## See Also

[server_max_outbound_connections](conf.ref.server_max_outbound_connections "server_max_outbound_connections")

| [Prev](conf.ref.cluster_scope_max_outbound_connections)  | [Up](conf.ref.files.php) |  [Next](conf.ref.connect_timeout.php) |
| cluster_scope_max_outbound_connections  | [Table of Contents](index) |  connect_timeout |
