| [Prev](conf.ref.inline_transfail_processing)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.large_message_threshold) |

<a name="conf.ref.keep_message_dicts_in_memory"></a>
## Name

keep_message_dicts_in_memory — preserve memory representation of metadata when memory is low

## Synopsis

`keep_message_dicts_in_memory = false`

<a name="idp25045904"></a>
## Description

Momentum aggressively uses RAM to speed up processing, and to make that approach successful, it also needs to realize that it should reclaim and re-use memory for messages that are delayed. When a message is placed on the delayed queue, or when one of the various memory management metrics indicates that too much memory is in use, Momentum will discard the message body and the in-memory representation of the validation context dictionaries that were captured during reception.

This results in reduced memory usage, but can result in higher disk IO, and in particular, unexpected disk IO on the scheduler thread after periods of intense memory pressure if you are using validation context data to drive your binding assignment or other policy hooks.

By setting `keep_message_dicts_in_memory` to `true`, Momentum will retain the validation context dictionaries in memory when it discards the message body memory. This will prevent additional disk IO when the message is later scheduled for delivery, but at the cost of increased memory usage.

### Warning

In some circumstances, using the Lua function [msg:routing_domain](lua.ref.msg_routing_domain "msg:routing_domain") may cause Momentum to "watchdog" (i.e., to become unresponsive and restart). To alleviate this, set `keep_message_dicts_in_memory` to `true`.

If you change this option you must restart the ecelerity process for the change to take effect. Invoking **`config reload`**         from the system console is not sufficient.

To reduce the overall memory cost of enabling this option, make use of the `exclude_vctx_mess` and `exclude_vctx_conn` options to reduce the size of the validation context dictionaries.

The default value is `false`.

<a name="idp25056528"></a>
## Scope

keep_message_dicts_in_memory is valid in the global scope.

<a name="idp25058368"></a>
## See Also

[exclude_vctx_conn](conf.ref.exclude_vctx_conn "exclude_vctx_conn"), [exclude_vctx_mess](conf.ref.exclude_vctx_mess "exclude_vctx_mess")

| [Prev](conf.ref.inline_transfail_processing)  | [Up](config.options.ref) |  [Next](conf.ref.large_message_threshold) |
| inline_transfail_processing  | [Table of Contents](index) |  large_message_threshold |

