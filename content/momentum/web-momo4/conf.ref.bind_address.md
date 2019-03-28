|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.authorization)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.binding) |

<a name="conf.ref.bind_address"></a>
## Name

bind_address — source address for outbound connections

## Synopsis

`Bind_Address = "10.0.0.1"`

`Bind_Address = "fe80::a00:1"`

`Bind_Address = "my.local.host.name"`

<a name="idp23571440"></a>
## Description

Configures the source address that Momentum uses for outbound connections. When specified at the global scope, Bind_Address configures the source IP for the `default` binding. When specified in a `Binding` stanza, the source IP for that binding will be configured.

This option must be present in a Binding stanza to dictate which IP address that named binding represents. If bind_address is defined in the global scope it *is* the fallback value; the kernel chooses the value only if bind_address is not set in either the binding stanza or the global scope.

The default for this option is `*`, which corresponds to `INADDR_ANY` (or its IPv6 equivalent); the actual address used in that case is determined by the operating system kernel based on the destination address.

### Note

You must restart ecelerity whenever you make a change to a  bind_address. 

### Warning

If the delivery of a message requires contacting a machine on a private network (on a multi-homed machine) and the bind address specified is a public IP address, the internal address may be considered "unroutable" and all messages destined for that IP address will subsequently be undeliverable.

<a name="idp8670880"></a>
## Scope

bind_address is valid in the global, binding_group, and binding scopes.

<a name="idp12612912"></a>
## See Also

[binding](conf.ref.binding "binding")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.authorization)  | [Up](config.options.ref) |  [Next](conf.ref.binding) |
| authorization  | [Table of Contents](index) |  binding |

