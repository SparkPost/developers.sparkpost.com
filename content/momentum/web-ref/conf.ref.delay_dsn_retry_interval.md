| [Prev](conf.ref.delay_dsn_max_retry_interval)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.delayed_binding_domain_fuzz.php) |

<a name="conf.ref.delay_dsn_retry_interval"></a>
## Name

delay_dsn_retry_interval — base interval for sending DSNs to the sender of a message that has not yet been delivered

## Synopsis

`Delay_DSN_Retry_Interval = "3600"`

<a name="idp8844032"></a>
## Description

The base retry period in seconds for sending warning messages (delivery status notifications, or DSNs) to the sender of a message which has not yet been delivered. Momentum employs an exponential back-off scheme for sending DSNs. The first DSN is sent `Delay_DSN_Retry_Interval` seconds after the message is queued for delivery. The second DSN is sent twice that after the second DSN. The third DSN four times that after the second DSN. The fourth DSN, eight times that. This process continues until delivery attempts for the message have ceased. The interval between DSNs cannot exceed `Delay_DSN_Max_Retry_Interval`.

### Note

To use this feature the [delay_dsn](modules.delay_dsn "14.25. delay_dsn – Delay DSN Generation") module must be loaded.

The default value for this option is `3600`.

<a name="idp8850512"></a>
## Scope

`delay_dsn_retry_interval` is valid in the binding_group, binding, domain and global scopes.

<a name="idp8852608"></a>
## See Also

[generate_delay_dsn](conf.ref.generate_delay_dsn "generate_delay_dsn"), [delay_dsn_max_retry_interval](conf.ref.delay_dsn_max_retry_interval.php "delay_dsn_max_retry_interval")

| [Prev](conf.ref.delay_dsn_max_retry_interval)  | [Up](conf.ref.files.php) |  [Next](conf.ref.delayed_binding_domain_fuzz.php) |
| delay_dsn_max_retry_interval  | [Table of Contents](index) |  delayed_binding_domain_fuzz |
