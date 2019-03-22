| [Prev](conf.ref.authorization)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.binding.php) |

<a name="conf.ref.bind_address"></a>
## Name

bind_address — source address for outbound connections

## Synopsis

`Bind_Address = "10.0.0.1"`

`Bind_Address = "fe80::a00:1"`

`Bind_Address = "my.local.host.name"`

<a name="idp7551072"></a>
## Description

Configures the source address that Momentum uses for outbound connections. When specified at the global scope, Bind_Address configures the source IP for the `default` binding. When specified in a `Binding` stanza, the source IP for that binding will be configured.

This option must be present in a Binding stanza to dictate which IP address that named binding represents. In version 2.1.1, if omitted from the Binding stanza, the default value of `*` will be used; in version 2.1.1 `Bind_Address` *does not*     fall back to the global value.

However, in versions 2.2 and 3.0, if bind_address is defined in the global scope it *is* the fallback value; the kernel chooses the value only if bind_address is not set in either the binding stanza or the global scope.

The default for this option is `*`, which corresponds to `INADDR_ANY` (or its IPv6 equivalent); the actual address used in that case is determined by the operating system kernel based on the destination address.

### Note

You must restart ecelerity whenever you make a change to a bind_address.

### Warning

If the delivery of a message requires contacting a machine on a private network (on a multi-homed machine) and the bind address specified is a public IP address, the internal address may be considered "unroutable" and all messages destined for that IP address will subsequently be undeliverable.

<a name="idp7561344"></a>
## Scope

bind_address is valid in the global, binding_group and binding scopes.

<a name="idp7563024"></a>
## See Also

[Section 4.6, “MultiVIP© Interfaces”](operations.multivip "4.6. MultiVIP© Interfaces")

| [Prev](conf.ref.authorization)  | [Up](conf.ref.files.php) |  [Next](conf.ref.binding.php) |
| authorization  | [Table of Contents](index) |  binding |
