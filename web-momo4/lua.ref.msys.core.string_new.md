| [Prev](lua.ref.msys.core.mail_queue_delay_domain)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_code) |

<a name="lua.ref.msys.core.string_new"></a>
## Name

msys.core.string_new — Create an ec_string

<a name="idp15734416"></a>
## Synopsis

`msys.core.string_new();`

<a name="idp15736208"></a>
## Description

Create userdata of the ec_string type. Some functions such as `msg:get_envelope2`, require ec_string type userdata, the Lua rendering of the C struct, [string](https://support.messagesystems.com/docs/web-c-api/structs.string).

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

For a code example see [Example 70.41, “msg:binding example”](lua.ref.msg_binding#lua.ref.msg_binding.example "Example 70.41. msg:binding example").

| [Prev](lua.ref.msys.core.mail_queue_delay_domain)  | [Up](lua.function.details) |  [Next](lua.ref.msg_code) |
| msys.core.mail_queue_delay_domain  | [Table of Contents](index) |  msg:code |

