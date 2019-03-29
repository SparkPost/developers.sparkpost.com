|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delay_dsn_retry_interval)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.delayed_queue_scan_interval.php) |

<a name="conf.ref.delayed_binding_domain_fuzz"></a>
## Name

delayed_binding_domain_fuzz — The length of time to spread scheduled messages over when a bulk requeue is necessary

## Synopsis

`delayed_binding_domain_fuzz = 0`

<a name="idp8861280"></a>
## Description

When a bulk requeue is necessary, this option sets the number of seconds to spread scheduled messages over. This option must be a power-of-two value from 2 - n. It is possible to set this to values that are not powers of two, but this may result in sub-optimal performance and ecelerity scheduler congestion.

The default value for this option is `0`.

<a name="idp8864080"></a>
## Scope

delayed_binding_domain_fuzz is valid in the global, binding and binding_group scopes

<a name="idp8865760"></a>
## See Also

[Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive "14.2. adaptive – Adaptive Delivery")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.delay_dsn_retry_interval)  | [Up](conf.ref.files.php) |  [Next](conf.ref.delayed_queue_scan_interval.php) |
| delay_dsn_retry_interval  | [Table of Contents](index) |  delayed_queue_scan_interval |
