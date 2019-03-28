|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.default_charset)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.delay_dsn_retry_interval) |

<a name="conf.ref.delay_dsn_max_retry_interval"></a>
## Name

delay_dsn_max_retry_interval — maximum interval for sending DSNs to the sender of a message that has not yet been delivered

## Synopsis

`delay_dsn_max_retry_interval = "43200"`

<a name="idp24208192"></a>
## Description

The maximum interval between successive warning messages (delivery status notifications, or DSNs) sent to the sender of a message that has not yet been delivered. This provides a cap on the effective interval between DSNs calculated from `delay_dsn_retry_interval`.

### Note

To use this feature the [delay_dsn](modules.delay_dsn "71.26. delay_dsn – Delay DSN Generation") module must be loaded.

The default value is `0`.

<a name="idp24213280"></a>
## Scope

`delay_dsn_max_retry_interval` is valid in the binding_group, binding, domain, and global scopes.

<a name="idp24215600"></a>
## See Also

[generate_delay_dsn](conf.ref.generate_delay_dsn "generate_delay_dsn"), [delay_dsn_max_retry_interval](conf.ref.delay_dsn_max_retry_interval "delay_dsn_max_retry_interval"), and [delay_dsn_retry_interval](conf.ref.delay_dsn_retry_interval "delay_dsn_retry_interval")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.default_charset)  | [Up](config.options.ref) |  [Next](conf.ref.delay_dsn_retry_interval) |
| default_charset  | [Table of Contents](index) |  delay_dsn_retry_interval |

