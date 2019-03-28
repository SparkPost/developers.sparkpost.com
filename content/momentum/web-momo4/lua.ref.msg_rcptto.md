|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_raw_replace)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_routing_domain) |

<a name="lua.ref.msg_rcptto"></a>
## Name

msg:rcptto — Sets the 'RCPT TO' email address if one is provided

<a name="idp16937104"></a>
## Synopsis

`msg:rcptto(...);`

`...: string, optional`<a name="idp16940064"></a>
## Description

Sets the 'RCPT TO' email address if one is provided and returns the current or new value.

Enable this function with the statement `require('msys.extended.message');`.

### Note

The function may be used to return the current `RCPT TO` address in any validation phase from `validate_rcptto` and later. However, if you want to **modify** the `RCPT TO` address, you must do this in `validate_data_spool_each_rcpt` or later.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_raw_replace)  | [Up](lua.function.details) |  [Next](lua.ref.msg_routing_domain) |
| msg:raw_replace  | [Table of Contents](index) |  msg:routing_domain |

