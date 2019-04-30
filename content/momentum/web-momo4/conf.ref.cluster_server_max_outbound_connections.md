|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.cluster_scope_max_outbound_connections)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.connect_timeout) |

<a name="conf.ref.cluster_server_max_outbound_connections"></a>
## Name

cluster_server_max_outbound_connections — set the maximum number of outbound connections, and enforce it across a cluster

## Synopsis

`cluster_server_max_outbound_connections = 800`

<a name="idp24002624"></a>
## Description

Limits the number of total connections that will be established concurrently by a cluster of Momentum systems, irrespective of bindings. There is no limit enforced by default; 800 is an example value. A more realistic value would need to be based on the cluster size and the capabilities of the underlying hardware and operating system.

Within a `Binding` stanza, this option will regulate the total number of connections through that particular binding across the cluster.

### Note

The cluster module must be configured with the outbound CIDR parameters.

<a name="idp24007136"></a>
## Scope

cluster_server_max_outbound_connections is valid in the binding, binding_group, and global scopes.

<a name="idp24009024"></a>
## See Also

[server_max_outbound_connections](conf.ref.server_max_outbound_connections "server_max_outbound_connections")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.cluster_scope_max_outbound_connections)  | [Up](config.options.ref) |  [Next](conf.ref.connect_timeout) |
| cluster_scope_max_outbound_connections  | [Table of Contents](index) |  connect_timeout |

