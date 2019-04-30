|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.adaptive_enabled)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.address_metrics_cleanse_interval) |

<a name="conf.ref.adaptive_scope"></a>
## Name

adaptive_scope — define the scope applicable to adaptive delivery (AD)

## Synopsis

`adaptive_scope = "auto"`

<a name="idp23393072"></a>
## Description

### Note

This directive is only valid if the Momentum adaptive module is loaded. See [Section 71.3, “adaptive – Adaptive Delivery”](modules.adaptive "71.3. adaptive – Adaptive Delivery").

This option controls the scope of adaptive delivery, making it local to the node or cluster-wide (i.e., global). It can be be set to `local`, `global`, or `auto`. When it is set to `auto`, the scope will be global if the binding is DuraVIP™ enabled and local for all other cases.

When it is set to `global` for a binding::domain:

*   AD is cluster-wide for that binding::domain.

*   The stats will be aggregated across all MTA nodes. Although stats are replicated across the cluster, rules are only evaluated for the binding::domain pair on the node where messages have been sent. This may cause a small latency for a recently transferred virtual IP that has activity in its previous host (but only if the transfer occurs while rules are being evaluated).

*   Any action triggered for a binding::domain, where `adaptive_scope` is global, will affect the same binding::domain across all MTA nodes.

*Note*: If `adaptive_scope` evaluates to "global" for a binding::domain combination, it does not imply that it will also evaluate to the same value for that binding alone.

If `adaptive_scope` evaluates to "global" for a [binding](conf.ref.binding "binding") scope, the age set for that binding through the warmup action will be applied to the binding across the whole cluster.

The following use cases apply to the `adaptive_scope` option:

*   In a standalone MTA, `adaptive_scope` is local no matter what value the option is set to.

*   In a cluster where more than one MTA is doing the sending and all traffic goes through a network router, you will want to set `adaptive_scope` to `global` for the relevant bindings/domains. This is because the outside world sees only one source IP.

*   When a binding is DuraVIP™ enabled, it may be relocated to another host. For this reason, set the scope to `global` or `auto` (which is effectively `global` for a DuraVIP™ binding).

*   In all other circumstances, set the scope to `local` to save CPU and network bandwidth. For example, where different IPs are used for different bindings (and the binding is not DuraVIP™), `adaptive_scope` should be local.

The default value for this option is `auto`.

<a name="idp23417728"></a>
## Scope

adaptive_scope is valid in the binding, binding_group, domain, and global scopes.

<a name="idp23419600"></a>
## See Also

[Section 71.3, “adaptive – Adaptive Delivery”](modules.adaptive "71.3. adaptive – Adaptive Delivery"), [adaptive_enabled](conf.ref.adaptive_enabled "adaptive_enabled")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.adaptive_enabled)  | [Up](config.options.ref) |  [Next](conf.ref.address_metrics_cleanse_interval) |
| adaptive_enabled  | [Table of Contents](index) |  address_metrics_cleanse_interval |

