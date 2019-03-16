| [Prev](lua.ref.msys.core.mail_queue_delay_domain)  | 15.2. Lua Functions |  [Next](lua.ref.msg_code.php) |

<a name="lua.ref.msys.core.string_new"></a>
## Name

msys.core.string_new — Create an ec_string

<a name="idp24142896"></a>
## Synopsis

`msys.core.string_new();`

<a name="idp24144496"></a>
## Description

Create userdata of the ec_string type. Some functions such as `msg:get_envelope2`, require ec_string type userdata, the Lua rendering of the C struct, [string](https://support.messagesystems.com/docs/web-c-api/structs.string).

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

For a code example see [Example 15.42, “msg:binding example”](lua.ref.msg_binding#lua.ref.msg_binding.example "Example 15.42. msg:binding example").

| [Prev](lua.ref.msys.core.mail_queue_delay_domain)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_code.php) |
| msys.core.mail_queue_delay_domain  | [Table of Contents](index) |  msg:code |
