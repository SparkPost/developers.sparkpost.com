|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.snmp)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.spool_mode) |

<a name="conf.ref.soft_bounce_drain_rate"></a>
## Name

soft_bounce_drain_rate — how many soft bounces to place into the mail queues in a single scheduler iteration

## Synopsis

`soft_bounce_drain_rate = 100`

<a name="idp26698992"></a>
## Description

When `async_bounce_rendering` is enabled, soft bounces are queued internally. This option defines how many are pulled from the internal queue and placed into the mail queues in a single scheduler iteration.

The default value is `100`.

<a name="idp26702336"></a>
## Scope

`soft_bounce_drain_rate` is valid in the global scope.

<a name="idp26704592"></a>
## See Also

[async_bounce_rendering](conf.ref.async_bounce_rendering "async_bounce_rendering")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.snmp)  | [Up](config.options.ref) |  [Next](conf.ref.spool_mode) |
| SNMP  | [Table of Contents](index) |  spool_mode |

