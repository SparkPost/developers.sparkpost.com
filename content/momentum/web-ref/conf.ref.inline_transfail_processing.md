|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.initial_hash_buckets)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.keep_message_dicts_in_memory.php) |

<a name="conf.ref.inline_transfail_processing"></a>
## Name

inline_transfail_processing — how to handle transient failure processing

## Synopsis

`inline_transfail_processing = 1`

<a name="idp9928544"></a>
## Description

When true, transient failure processing is handled inline in the scheduler thread, Momentum's traditional behavior. If you have custom loggers or other modules that react to transient failures, and examine messages, you may experience poor performance, excessive memory utilization and potentially a watchdog timeout, if a large batch of messages is transiently failed at the same time.

Setting `inline_transfail_processing` to false uses an alternate strategy of breaking the transfails into more manageable chunks, affected by `transfail_drain_rate` and `max_resident_transfails`. In this alternate approach, the messages are queued up to a transfail queue.

### Warning

Setting `inline_transfail_processing` to `false` drops the remote IP address from the delivery log.

The default value for this option is `1`.

<a name="idp9935584"></a>
## Scope

inline_transfail_processing is valid in the global scope.

<a name="idp9937232"></a>
## See Also

[transfail_drain_rate](conf.ref.transfail_drain_rate "transfail_drain_rate") and [max_resident_transfails](conf.ref.max_resident_transfails.php "max_resident_transfails")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.initial_hash_buckets)  | [Up](conf.ref.files.php) |  [Next](conf.ref.keep_message_dicts_in_memory.php) |
| initial_hash_buckets  | [Table of Contents](index) |  keep_message_dicts_in_memory |
