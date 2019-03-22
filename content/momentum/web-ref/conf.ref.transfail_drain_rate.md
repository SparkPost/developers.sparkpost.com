| [Prev](conf.ref.trace_smtp_mode)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.transform_8bitmime_content.php) |

<a name="conf.ref.transfail_drain_rate"></a>
## Name

transfail_drain_rate — the maximum number of messages to pop off the transient failure queue in a single scheduler iteration

## Synopsis

`transfail_drain_rate = 100`

<a name="idp12292352"></a>
## Description

The maximum number of messages to pop off the transient failure queue in a single scheduler iteration, mitigating the potential for watchdog timeout.

The default value for this option is `100`.

<a name="idp12294976"></a>
## Scope

transfail_drain_rate is valid in the global scope.

<a name="idp12296624"></a>
## See Also

[inline_transfail_processing](conf.ref.inline_transfail_processing "inline_transfail_processing") and [max_resident_transfails](conf.ref.max_resident_transfails.php "max_resident_transfails")

| [Prev](conf.ref.trace_smtp_mode)  | [Up](conf.ref.files.php) |  [Next](conf.ref.transform_8bitmime_content.php) |
| trace_smtp_mode  | [Table of Contents](index) |  transform_8bitmime_content |
