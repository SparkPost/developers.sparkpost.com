|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delay_dsn_retry_interval)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.delayed_queue_scan_interval) |

<a name="conf.ref.delayed_binding_domain_fuzz"></a>
## Name

delayed_binding_domain_fuzz — length of time to spread scheduled messages over when a bulk requeue is necessary

## Synopsis

`delayed_binding_domain_fuzz = 0`

<a name="idp24244336"></a>
## Description

When a bulk requeue is necessary, this option sets the number of seconds to spread scheduled messages over. This option must be a power-of-two value from 2 - n. It is possible to set this to values that are not powers of two, but this may result in sub-optimal performance and ecelerity scheduler congestion.

The default value is `0`.

<a name="idp24247376"></a>
## Scope

delayed_binding_domain_fuzz is valid in the global, binding, and binding_group scopes.

<a name="idp24249264"></a>
## See Also

[Section 71.3, “adaptive – Adaptive Delivery”](modules.adaptive "71.3. adaptive – Adaptive Delivery")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delay_dsn_retry_interval)  | [Up](config.options.ref) |  [Next](conf.ref.delayed_queue_scan_interval) |
| delay_dsn_retry_interval  | [Table of Contents](index) |  delayed_queue_scan_interval |

