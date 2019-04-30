|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.opendkim_sign)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.outbound_throttle_messages) |

<a name="conf.ref.outbound_throttle_connections"></a>
## Name

outbound_throttle_connections — limit the rate at which connections are established

## Synopsis

`outbound_throttle_connections = "1"`

`outbound_throttle_connections = "1/60"`

<a name="idp25740096"></a>
## Description

This allows you to limit the rate at which Momentum will attempt to establish TCP/IP connections. It can be employed to globally limit connection allocation or to reduce the rate established to a particular domain. When used in the global scope it limits the entire system to the value specified. For example, when set to `100`, no more than a total of `100` outbound connections can be made in a given second across any number of bindings.

If a single integer parameter is provided, Momentum will ensure that no more than the specified number of connections are initiated in a given second. If a proper fraction parameter is provided, Momentum will limit the number of connections to the number specified in the numerator over the time window in seconds specified by the denominator. By default this option is not set, indicating an unlimited number of connections.

Where throttles are concerned, Momentum's fallback behavior differs. For more information, see [the section called “Throttles and Fallback”](conf.ref.outbound_throttle_messages#conf.ref.outbound_throttle_messages.fallback "Throttles and Fallback").

### Note

This option can also be used to throttle *ecstream* connections.

<a name="idp25746656"></a>
## Scope

outbound_throttle_connections is valid in the binding, binding_group, domain, and global scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.opendkim_sign)  | [Up](config.options.ref) |  [Next](conf.ref.outbound_throttle_messages) |
| opendkim_sign  | [Table of Contents](index) |  outbound_throttle_messages |

