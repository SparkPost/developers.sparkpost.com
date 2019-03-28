|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rset_timeout)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.scheduler) |

<a name="conf.ref.scope_max_outbound_connections"></a>
## Name

scope_max_outbound_connections — provide traffic shaping for outbound connections

## Synopsis

`scope_max_outbound_connections = 20`

<a name="idp26403600"></a>
## Description

`scope_max_outbound_connections` provides for finer-grained manipulation of the number of outbound connections than does `server_max_outbound_connections`. When used in different scopes its behavior is as follows:

*   In the global scope, it behaves like `server_max_outbound_connections`

*   In a Global::Domain scope, it determines the maximum number of connections to the specified domain across all bindings

*   In a Binding_Group::Domain scope, it determines the maximum number of connections to the specified domain across all the bindings in that Binding Group

*   In a Binding::Domain scope, it behaves like `max_outbound_connections`

*   In a Global::Host scope it determines the maximum number of connections to the specified host across all bindings

### Note

`server_reserve_outbound_connections` must be set to `0` in order for `scope_max_outbound_connections` to work properly in the Global::Domain scope. However, when `server_reserve_outbound_connections` is set to `0` and the server is under load, low volume domains may be starved of connections.

`scope_max_outbound_connections` is disabled by default. When it is not set then `max_outbound_connections` or `server_max_outbound_connections` is used, depending on the context.

You might want to use this option in circumstances where two MX names resolve to a list of identical IP addresses. This is currently the case with `wanadoo.fr` and `orange.fr`. Any given sending host cannot have more than three simultaneous connections to any given host for **both** domains. To ensure that you are working within these parameters, use `scope_max_outbound_connections` in the following way:

```
domain "/^(wanadoo|orange)\.fr$/" {
   scope_max_outbound_connections = 3
}
```

With this configuration both domains are considered as one for the sake of total outbound connections.

To highlight how `scope_max_outbound_connections` differs from `max_outbound_connections` consider the following example:

```
domain "/^(aol|yahoo).com$/" {
  max_outbound_connections = 5
}
```

The preceding example is identical to the following configuration:

```
domain "aol.com" {
  max_outbound_connections = 5
}

domain "yahoo.com" {
  max_outbound_connections = 5
}
```

This gives a maximum of 5 outbound connections for *each* domain.

<a name="idp26426272"></a>
## Scope

scope_max_outbound_connections is valid in the global, binding, binding_group, domain, and host scopes.

<a name="idp26428176"></a>
## See Also

[max_outbound_connections](conf.ref.max_outbound_connections "max_outbound_connections"), [server_max_outbound_connections](conf.ref.server_max_outbound_connections "server_max_outbound_connections"), [server_reserve_outbound_connections](conf.ref.server_reserve_outbound_connections "server_reserve_outbound_connections")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rset_timeout)  | [Up](config.options.ref) |  [Next](conf.ref.scheduler) |
| rset_timeout  | [Table of Contents](index) |  scheduler |

