|     |     |     |
| --- | --- | --- |
| [Prev](config.click_tracking_scheme)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.cluster_outbound_throttle_connections) |

<a name="conf.ref.cluster_max_outbound_connections"></a>
## Name

cluster_max_outbound_connections — set the maximum number of outbound connections for a scope and enforce it across a cluster

## Synopsis

`Cluster_Max_Outbound_Connections = 128`

<a name="idp23910480"></a>
## Description

This will limit the number of outbound connections across the cluster to an individual binding to the specified value. It can also be set at a global level, which enforces the limit on every domain in the cluster. The global value can be overridden by setting it in a `Binding` stanza. Furthermore, this option can be used in a `Host` stanza to limit the connections to a particular MX as shown in [the section called “Scope”](conf.ref.cluster_max_outbound_connections#conf.ref.cluster_max_outbound_connections.scope "Scope"). *Note*: When used in the Host scope, `Cluster_Max_Outbound_Connections` limits the number of connections **to** the particular MX.

The default value is `-1`, which means that an unlimited number of connections are allowed.

### Note

When this option is used in scopes other than Host, the cluster module must have the outbound_domains parameter configured as defined in [Section 28.1, “Replication Configurations”](cluster.config.replication#cluster.replication.features "28.1. Replication Configurations").

<a name="conf.ref.cluster_max_outbound_connections.scope"></a>
## Scope

cluster_max_outbound_connections is valid in the binding, domain, global, and host scopes.

### Note

This option is not valid when defined in a binding contained within a binding_group.

When used within a Host scope, a limit on the number of connections to a particular MX is enforced. The Host should be listed exactly as it exists in the DNS MX record. (Do not specify an equivalent IP address or hostname). For example, the console can be used to obtain the MX records for a given domain, and then a Host stanza can be written to limit connections to a particular MX.

```
16:33:51 ecelerity(/tmp/2025)> dig messagesystems.com
submitted
16:34:01 ecelerity(/tmp/2025)> domain messagesystems.com
Domain 'messagesystems.com' has 1 MXs and a TTL of 86394 seconds
  [10 edge.omniti.com. TTL:594]
```

This domain has only one MX record (edge.omniti.com). A Host stanza to limit connections to it would look like this:

```
Host edge.omniti.com {
  cluster_max_outbound_connections = 2
}
```

`cluster_max_outbound_connections` is one of only two options valid in the host scope and is *not* valid in the binding_group scope. The value that this option assumes, in order of decreasing precedence, is as follows:

1.  binding::host

2.  host

3.  binding::domain

4.  binding

5.  domain

6.  global

<a name="idp23932208"></a>
## See Also

[max_outbound_connections](conf.ref.max_outbound_connections "max_outbound_connections"), [host](conf.ref.host "host")

|     |     |     |
| --- | --- | --- |
| [Prev](config.click_tracking_scheme)  | [Up](config.options.ref) |  [Next](conf.ref.cluster_outbound_throttle_connections) |
| click_tracking_scheme  | [Table of Contents](index) |  cluster_outbound_throttle_connections |

