| [Prev](conf.ref.binding)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.binding_auto_replumb_interval) |

<a name="conf.ref.binding_auto_replumb"></a>
## Name

binding_auto_replumb — enable or disable the auto replumber

## Synopsis

`binding_auto_replumb = "enabled"`
`binding_auto_replumb = "disabled"`

<a name="idp23614192"></a>
## Description

This directive instructs Momentum to enable (or disable) the auto replumber. The replumber periodically checks the plumbed state for bindings with static addresses and replumbs any that are unplumbed. Bindings can become unplumbed if there are network issues or if the NIC goes down temporarily.

The default value is `disabled`.

<a name="idp23617200"></a>
## Scope

`binding_auto_replumb` is valid in the global scope.

<a name="idp23619456"></a>
## See Also

[binding_auto_replumb_interval](conf.ref.binding_auto_replumb_interval "binding_auto_replumb_interval")

| [Prev](conf.ref.binding)  | [Up](config.options.ref) |  [Next](conf.ref.binding_auto_replumb_interval) |
| binding  | [Table of Contents](index) |  binding_auto_replumb_interval |

