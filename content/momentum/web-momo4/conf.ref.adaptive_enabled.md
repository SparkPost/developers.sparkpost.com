|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.adaptive_backstore_riak)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.adaptive_scope) |

<a name="conf.ref.adaptive_enabled"></a>
## Name

adaptive_enabled — enable or disable the adaptive module

## Synopsis

`adaptive_enabled = "true"`
`adaptive_enabled = "false"`

<a name="idp23365856"></a>
## Description

### Note

This directive is only valid if the Momentum adaptive module is loaded. See [Section 71.3, “adaptive – Adaptive Delivery”](modules.adaptive "71.3. adaptive – Adaptive Delivery").

This directive instructs Momentum to enable (or disable) the adaptive module globally, on a specific domain, binding or domain within a binding.

<a name="idp23369120"></a>
## Scope

adaptive_enabled is valid in the binding, binding_group, domain and global scope.

<a name="idp23370880"></a>
## See Also

[Section 71.3, “adaptive – Adaptive Delivery”](modules.adaptive "71.3. adaptive – Adaptive Delivery")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.adaptive_backstore_riak)  | [Up](config.options.ref) |  [Next](conf.ref.adaptive_scope) |
| adaptive_backstore_riak  | [Table of Contents](index) |  adaptive_scope |

