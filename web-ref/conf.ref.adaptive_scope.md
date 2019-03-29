|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.adaptive_enabled)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.address_metrics_cleanse_interval.php) |

<a name="conf.ref.adaptive_scope"></a>
## Name

adaptive_scope — define the scope applicable to adaptive delivery

## Synopsis

`adaptive_scope = "auto"`

<a name="idp7395360"></a>
## Description

**Configuration Change. ** This feature is available as of version 3.3.

### Note

This directive is only valid if the Momentum adaptive module is loaded. See [Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive "14.2. adaptive – Adaptive Delivery").

Use this option to set the scope of adaptive delivery to either local to the node or cluster-wide (i.e. global). Legal values for this option are: `local`, `global` and `auto`. When this option is set to `auto`, then the scope will be global if the binding is DuraVIP enabled and `local` for all other cases.

The default value for this option is `auto`.

<a name="idp7404544"></a>
## Scope

adaptive_scope is valid in the binding, binding_group, domain and global scopes.

<a name="idp7406224"></a>
## See Also

[Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive "14.2. adaptive – Adaptive Delivery"), [adaptive_enabled](conf.ref.adaptive_enabled.php "adaptive_enabled"), [Section 14.2.6.2, “The `adaptive_scope` Option”](modules.adaptive.php#modules.adaptive.options.changes.3.3.adaptive_scope "14.2.6.2. The adaptive_scope Option")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.adaptive_enabled)  | [Up](conf.ref.files.php) |  [Next](conf.ref.address_metrics_cleanse_interval.php) |
| adaptive_enabled  | [Table of Contents](index) |  address_metrics_cleanse_interval |
