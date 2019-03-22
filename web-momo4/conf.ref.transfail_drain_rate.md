| [Prev](config.tracking_link_expiry)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.transform_8bitmime_content) |

<a name="conf.ref.transfail_drain_rate"></a>
## Name

transfail_drain_rate — the maximum number of messages to pop off the transient failure queue in a single scheduler iteration

## Synopsis

`transfail_drain_rate = 100`

<a name="idp27211120"></a>
## Description

The maximum number of messages to pop off the transient failure queue in a single scheduler iteration, mitigating the potential for watchdog timeout.

The default value is `100`.

<a name="idp27213984"></a>
## Scope

transfail_drain_rate is valid in the global scope.

<a name="idp27215824"></a>
## See Also

[inline_transfail_processing](conf.ref.inline_transfail_processing "inline_transfail_processing") and [max_resident_transfails](conf.ref.max_resident_transfails "max_resident_transfails")

| [Prev](config.tracking_link_expiry)  | [Up](config.options.ref) |  [Next](conf.ref.transform_8bitmime_content) |
| tracking_link_expiry  | [Table of Contents](index) |  transform_8bitmime_content |

