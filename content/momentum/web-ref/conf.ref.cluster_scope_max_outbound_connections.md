|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.cluster_outbound_throttle_messages)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.cluster_server_max_outbound_connections.php) |

<a name="conf.ref.cluster_scope_max_outbound_connections"></a>
## Name

cluster_scope_max_outbound_connections — provide traffic shaping for outbound connections in a cluster configuration

## Synopsis

`Cluster_Scope_Max_Outbound_Connections = 20`

<a name="idp8623520"></a>
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.16.

Cluster Scope_Max_Outbound_Connections is for use in a cluster configuration and is the equivalent of Scope_Max_Outbound_Connections. It provides for finer-grained manipulation of the number of outbound connections than does Cluster_Server_Max_Outbound_Connections. When used in different scopes its behavior is as follows:

*   In the global scope, it behaves like Cluster_Server_Max_Outbound_Connections

*   In a Global::Domain scope, it determines the maximum number of connections to the specified domain across all bindings

*   In a Binding_Group::Domain scope, it determines the maximum number of connections to the specified domain across all the bindings in that Binding Group

*   In a Binding::Domain scope, it behaves like Cluster_Max_Outbound_Connections

*   In a Global:Host scope it determines the maximum number of connections to the specified host across all bindings

Cluster_Scope_Max_Outbound_Connections is disabled by default. When it is not set then Cluster_Max_Outbound_Connections or Cluster_Server_Max_Outbound_Connections is used, depending on the context.

To use this option the `Replicate "outbound_binding_domains" {}` stanza must be defined in `ecelerity-cluster.conf`. For information on this topic see [the section called “Replication”](ecelerity-cluster.conf#ecelerity-cluster.conf.replication "Replication").

<a name="idp8636480"></a>
## Scope

cluster_scope_max_outbound_connections is valid in the global, binding, binding_group, domain and host scopes.

<a name="idp8638192"></a>
## See Also

[scope_max_outbound_connections](conf.ref.scope_max_outbound_connections "scope_max_outbound_connections"), [cluster_max_outbound_connections](conf.ref.cluster_max_outbound_connections.php "cluster_max_outbound_connections"), [cluster_server_max_outbound_connections](conf.ref.cluster_server_max_outbound_connections.php "cluster_server_max_outbound_connections")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.cluster_outbound_throttle_messages)  | [Up](conf.ref.files.php) |  [Next](conf.ref.cluster_server_max_outbound_connections.php) |
| cluster_outbound_throttle_messages  | [Table of Contents](index) |  cluster_server_max_outbound_connections |
