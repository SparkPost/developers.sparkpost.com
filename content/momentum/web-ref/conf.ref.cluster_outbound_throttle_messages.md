| [Prev](conf.ref.cluster_outbound_throttle_connections)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.cluster_scope_max_outbound_connections.php) |

<a name="conf.ref.cluster_outbound_throttle_messages"></a>
## Name

cluster_outbound_throttle_messages — limit the rate at which messages are delivered, and enforce it across the cluster

## Synopsis

`Cluster_Outbound_Throttle_Messages = "1"`

`Cluster_Outbound_Throttle_Messages = "1/60"`

<a name="idp8609520"></a>
## Description

This allows you to limit the rate at which Momentum will attempt to deliver mail. It can be employed to globally limit throughput or to reduce the rate sent to a particular domain.

If a single integer parameter is provided, Momentum will ensure that no more than the specified number of messages are sent in a given second of time. If a proper fraction parameter is provided, Momentum will limit the number of sent message to the number specified in the numerator over the time window in seconds specified by the denominator.

### Note

For best results, a throttle in the same scope and with the same values should also be defined using [cluster_outbound_throttle_connections](conf.ref.cluster_outbound_throttle_connections "cluster_outbound_throttle_connections")

The cluster module must be configured with the outbound throttle parameters as defined here: [Section 7.7.1.8, “Shared Outbound Throttles”](cluster.config.replication#cluster.replication.outbound_throttles "7.7.1.8. Shared Outbound Throttles")

<a name="idp8614624"></a>
## Scope

`cluster_outbound_throttle_messages` is valid in the binding_group, domain and global scopes.

| [Prev](conf.ref.cluster_outbound_throttle_connections)  | [Up](conf.ref.files.php) |  [Next](conf.ref.cluster_scope_max_outbound_connections.php) |
| cluster_outbound_throttle_connections  | [Table of Contents](index) |  cluster_scope_max_outbound_connections |
