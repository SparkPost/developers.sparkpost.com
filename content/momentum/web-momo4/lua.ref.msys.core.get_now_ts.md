| [Prev](lua.ref.msys.core.dns_get_domain)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.core.mail_queue_delay_domain) |

<a name="lua.ref.msys.core.get_now_ts"></a>
## Name

msys.core.get_now_ts — Get the current time

<a name="idp15707440"></a>
## Synopsis

`msys.core.get_now_ts();`

<a name="idp15709232"></a>
## Description

If this function is called from a scheduler thread, it will return the time from the current [ec_scheduler_inst](https://support.messagesystems.com/docs/web-c-api/structs.ec_scheduler_inst) structure. If it is called from a non-scheduler thread, it will return the value returned by `time()`.

The value returned is the epoch time in UTC measured in seconds.

Because this function is in the msys.core namespace, an explicit `require('msys.core')` is not necessary.

| [Prev](lua.ref.msys.core.dns_get_domain)  | [Up](lua.function.details) |  [Next](lua.ref.msys.core.mail_queue_delay_domain) |
| msys.core.dns_get_domain  | [Table of Contents](index) |  msys.core.mail_queue_delay_domain |

