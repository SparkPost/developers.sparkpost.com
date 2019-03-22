| [Prev](conf.ref.default_charset)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.delay_dsn_retry_interval.php) |

<a name="conf.ref.delay_dsn_max_retry_interval"></a>
## Name

delay_dsn_max_retry_interval — maximum interval for sending DSNs to the sender of a message that has not yet been delivered

## Synopsis

`Delay_DSN_Max_Retry_Interval = "43200"`

<a name="idp8825936"></a>
## Description

The maximum interval between successive warning messages (delivery status notifications, or DSNs) sent to the sender of a message that has not yet been delivered. This provides a cap on the effective interval between DSNs calculated from `Delay_DSN_Retry_Interval`.

### Note

To use this feature the [delay_dsn](modules.delay_dsn "14.25. delay_dsn – Delay DSN Generation") module must be loaded.

The default value for this option is `0`.

<a name="idp8831904"></a>
## Scope

`delay_dsn_max_retry_interval` is valid in the binding_group, binding, domain and global scopes.

<a name="idp8834000"></a>
## See Also

[generate_delay_dsn](conf.ref.generate_delay_dsn "generate_delay_dsn"), [delay_dsn_max_retry_interval](conf.ref.delay_dsn_max_retry_interval.php "delay_dsn_max_retry_interval") and [delay_dsn_retry_interval](conf.ref.delay_dsn_retry_interval.php "delay_dsn_retry_interval")

| [Prev](conf.ref.default_charset)  | [Up](conf.ref.files.php) |  [Next](conf.ref.delay_dsn_retry_interval.php) |
| default_charset  | [Table of Contents](index) |  delay_dsn_retry_interval |
