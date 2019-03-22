| [Prev](conf.ref.cluster_max_outbound_connections)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.cluster_outbound_throttle_messages.php) |

<a name="conf.ref.cluster_outbound_throttle_connections"></a>
## Name

cluster_outbound_throttle_connections — limit the rate at which connections are established, and enforce it across a cluster of systems

## Synopsis

`Cluster_Outbound_Throttle_Connections = "1"`

`Cluster_Outbound_Throttle_Connections = "1/60"`

<a name="idp8593488"></a>
## Description

This allows you to limit the rate at which Momentum will attempt to establish TCP/IP connections. It can be employed to globally limit connection allocation or to reduce the rate established to a particular binding_group.

If a single integer parameter is provided, Momentum will ensure that no more than the specified number of connections are initiated in a given second. If a proper fraction parameter is provided, Momentum will limit the number of connection initiations to the number specified in the numerator over the time window in seconds specified by the denominator.

### Note

The cluster module must be configured with the outbound throttle parameters as defined here: [Section 7.7.1.8, “Shared Outbound Throttles”](cluster.config.replication#cluster.replication.outbound_throttles "7.7.1.8. Shared Outbound Throttles")

<a name="idp8597904"></a>
## Scope

`cluster_outbound_throttle_connections` is valid in the binding_group, domain and global scopes.

<a name="idp8599984"></a>
## See Also

[cluster_outbound_throttle_messages](conf.ref.cluster_outbound_throttle_messages "cluster_outbound_throttle_messages")

| [Prev](conf.ref.cluster_max_outbound_connections)  | [Up](conf.ref.files.php) |  [Next](conf.ref.cluster_outbound_throttle_messages.php) |
| cluster_max_outbound_connections  | [Table of Contents](index) |  cluster_outbound_throttle_messages |
