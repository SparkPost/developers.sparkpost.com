| [Prev](conf.ref.generate_bounces_for_multi_recipient_policy_rejections)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.growbuf_size.php) |

<a name="conf.ref.generate_delay_dsn"></a>
## Name

generate_delay_dsn — generate DSNs if mail is delayed

## Synopsis

`generate_delay_dsn = true`

`generate_delay_dsn = false`

<a name="idp9701232"></a>
## Description

Momentum has the ability to generate warning messages (delivery status notifications, or DSNs) that are delivered to the envelope sender of a message that has not yet been delivered.

The default value for this option is `false`.

### Note

To use this feature the [delay_dsn](modules.delay_dsn "14.25. delay_dsn – Delay DSN Generation") module must be loaded.

<a name="idp9706096"></a>
## Scope

`generate_delay_dsn` is valid in the binding_group, binding, domain and global scopes.

<a name="idp9708176"></a>
## See Also

[delay_dsn_retry_interval](conf.ref.delay_dsn_retry_interval "delay_dsn_retry_interval"), [delay_dsn_max_retry_interval](conf.ref.delay_dsn_max_retry_interval.php "delay_dsn_max_retry_interval") and [generate_delay_dsn](conf.ref.generate_delay_dsn.php "generate_delay_dsn")

| [Prev](conf.ref.generate_bounces_for_multi_recipient_policy_rejections)  | [Up](conf.ref.files.php) |  [Next](conf.ref.growbuf_size.php) |
| generate_bounces_for_multi_recipient_policy_rejections  | [Table of Contents](index) |  growbuf_size |
