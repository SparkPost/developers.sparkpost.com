| [Prev](conf.ref.max_dns_ttl)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.max_recipients_per_batch) |

<a name="conf.ref.max_outbound_connections"></a>
## Name

max_outbound_connections — set the maximum number of outbound connections for a domain

## Synopsis

`Max_Outbound_Connections = 32`

<a name="idp25317984"></a>
## Description

This option will limit the number of outbound connections to an individual domain to the specified value. It can be set at a global level, which enforces the limit on every domain in the system or at a binding, binding_group, or domain level. When this option is set in the domain, binding, or binding_group scope, the global value is overridden, and the usual fallback semantics apply. *Note*: When used in the `host` scope, `Max_Outbound_Connections` limits the number of connections to the specified IP address.

Default value is `32`.

### Note

If your `Max_Outbound_Connections` setting is larger than 1000, you will need to adjust your system-wide and shell-specific open file limits to avoid errors. All errors from the program are placed in `/var/log/ecelerity/paniclog.ec`.

<a name="idp25324544"></a>
## Usage Example

Find below an example of how this configuration option might be used:

```
Max_Outbound_Connections = 30

Domain "example.com" {
  opendkim_sign = "true"
}

Binding_Group "group1" {

  Max_Outbound_Connections = 5

  Binding "example" {

    Bind_Address = "10.10.10.10"
    Max_Outbound_Connections = 15

    Domain "example.com" {
      #some other options
      ...
    }
  }

}
```

When connecting to `example.com` from the `example` binding, `Max_Outbound_Connections` will be `15`, when connecting from another binding in the `group1` group it will be `5`, and when connecting from a binding that is not in the `group1` group it will be 30.

In some circumstances, it may make sense to declare a domain within a binding and also declare it globally—when you want interaction with that domain to be different globally versus in a particular binding. For example with the following configuration, customers on the `yahoofriends` binding are allowed to use 30 connections to yahoo.com, customers on other bindings are allowed to use only 10 connections per binding to yahoo.com, and connections to domains other than yahoo.com are unrestricted.

```
Binding "yahoofriends" {
  Domain "yahoo.com" {
    Max_Outbound_Connections = 30
  }
}

Domain "yahoo.com" {
  Max_Outbound_Connections = 10
}
```
<a name="idp25333056"></a>
### `Max_Outbound_Connections` in the `host` Scope

Note that the usual semantics do not apply with this option in the `host` scope. If you declare a `host` scope and do not define `Max_Outbound_Connections`, its value will be `-1` and not the fallback value of `Max_Outbound_Connections` in an encompassing scope.

Given the following configuration file:

```
Max_Outbound_Connections = 32
host "example.com" {}
```

You will see the following results from the system console:

```
09:45:58 /tmp/2025> config eval max_outbound_connections
Max_Outbound_Connections = 32
09:46:29 /tmp/2025> config eval host example.com max_outbound_connections
Max_Outbound_Connections = -1
```

A setting of `-1` means that unlimited connections are allowed.

<a name="idp25340784"></a>
## Scope

max_outbound_connections is valid in the binding, binding_group, domain, global, and host scopes.

<a name="idp25342672"></a>
## See Also

[host](conf.ref.host "host"), [Section 25.3, “MultiVIP© Interfaces”](outbound_mail.multivip.interfaces "25.3. MultiVIP© Interfaces"), [server_max_outbound_connections](conf.ref.server_max_outbound_connections "server_max_outbound_connections"), [Section 15.3, “Configuration Scopes and Fallback”](ecelerity.conf.fallback "15.3. Configuration Scopes and Fallback"), [scope_max_outbound_connections](conf.ref.scope_max_outbound_connections "scope_max_outbound_connections")

| [Prev](conf.ref.max_dns_ttl)  | [Up](config.options.ref) |  [Next](conf.ref.max_recipients_per_batch) |
| max_dns_ttl  | [Table of Contents](index) |  max_recipients_per_batch |

