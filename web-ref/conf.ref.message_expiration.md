|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.memory_hwm)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.migrate_connections_between_sibling_domains.php) |

<a name="conf.ref.message_expiration"></a>
## Name

message_expiration — the time to live for messages

## Synopsis

`Message_Expiration = 604800`

<a name="idp10383984"></a>
## Description

The maximum amount of time in seconds a message will remain undelivered in the system. If a message remains undeliverable for this amount of time, it will be removed and a delivery failure log entry will be made. If the `Generate_Bounces` configuration option is enabled, then at failure time an out-of-band bounce message will be generated and queued for delivery. The default value for this option is `86400` seconds (24 hours). However, in the default `ecelerity.conf` file this option is set to `604800` (1 week).

<a name="idp10387584"></a>
## Scope

`message_expiration` is valid in the binding, binding_group, domain and global scopes.

<a name="idp10389600"></a>
## See Also

[never_attempt_expired_messages](conf.ref.never_attempt_expired_messages "never_attempt_expired_messages"), [retry_interval](conf.ref.retry_interval.php "retry_interval") and [max_retries](conf.ref.max_retries.php "max_retries")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.memory_hwm)  | [Up](conf.ref.files.php) |  [Next](conf.ref.migrate_connections_between_sibling_domains.php) |
| memory_hwm  | [Table of Contents](index) |  migrate_connections_between_sibling_domains |
