|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.snmp)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.spool_mode.php) |

<a name="conf.ref.soft_bounce_drain_rate"></a>
## Name

soft_bounce_drain_rate — how many soft bounces to place into the mail queues in a single scheduler iteration

## Synopsis

`soft_bounce_drain_rate = 100`

<a name="idp11846480"></a>
## Description

When async_bounce_rendering is enabled soft bounces are queued internally. This option defines how many are pulled from the internal queue and placed into the mail queues in a single scheduler iteration.

The default value for this option is `100`.

<a name="idp11849168"></a>
## Scope

soft_bounce_drain_rate is valid in the global scope.

<a name="idp11850816"></a>
## See Also

[async_bounce_rendering](conf.ref.async_bounce_rendering "async_bounce_rendering")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.snmp)  | [Up](conf.ref.files.php) |  [Next](conf.ref.spool_mode.php) |
| SNMP  | [Table of Contents](index) |  spool_mode |
