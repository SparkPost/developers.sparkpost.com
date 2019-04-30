|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_binding_group)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_body_match) |

<a name="lua.ref.msg_body"></a>
## Name

msg:body — Set the message body (minus headers) if provided

<a name="idp16681296"></a>
## Synopsis

`msg:body(...);`

`...: mixed, optional`<a name="idp16684256"></a>
## Description

This function sets the message body (minus headers) if it is provided and returns the message body (minus headers). This applies to the body (not headers), without decoding transfer encoding.

### Note

When called without parameters, this function returns content that does not have the end-of-data marker (`CRLF.CRLF`). However, when setting the message body you must append the end-of-data marker to the content.

If you are modifying content be sure set readonly to `false` using the [msg:mime](lua.ref.msg_mime "msg:mime") function.

Enable this function with the statement `require('msys.extended.message');`.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_binding_group)  | [Up](lua.function.details) |  [Next](lua.ref.msg_body_match) |
| msg:binding_group  | [Table of Contents](index) |  msg:body_match |

