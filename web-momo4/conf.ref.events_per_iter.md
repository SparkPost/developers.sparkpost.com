| [Prev](config.ref.eventloop)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.exclude_vctx_conn) |

<a name="conf.ref.events_per_iter"></a>
## Name

events_per_iter — employ when using a concurrency greater than 1.

## Synopsis

`events_per_iter = 0`

<a name="idp24628656"></a>
## Description

This option may be used when using a concurrency greater than 1 (a threaded accept). When running in this mode, `accept()` is called on a secondary thread (specified by the `pool_name`) and the accepted connection put on a queue to be dispatched from the main thread. `events_per_iter` limits the number of items that can be dispatched in a single scheduler iteration. If unspecified, or less than 1, then `events_per_iter` will be treated as though it was set to 1.

The default value is `0`.

<a name="idp24633888"></a>
## Scope

events_per_iter is valid in the control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, and xmpp_listener scopes.

<a name="idp24635840"></a>
## See Also

[pool_name](esmtp_listener#esmtp_listener.config "19.1. ESMTP_Listener Configuration")

| [Prev](config.ref.eventloop)  | [Up](config.options.ref) |  [Next](conf.ref.exclude_vctx_conn) |
| eventloop  | [Table of Contents](index) |  exclude_vctx_conn |

