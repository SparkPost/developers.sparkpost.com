| [Prev](lua.ref.msg_body)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_body_replace) |

<a name="lua.ref.msg_body_match"></a>
## Name

msg:body_match — Streaming interface to a PCRE search of a message body (minus headers)

<a name="idp16694816"></a>
## Synopsis

`msg:body_match(pattern);`

`pattern: string`<a name="idp16697792"></a>
## Description

Streaming interface to a PCRE search of a message body (minus headers). If matches are found, they are returned. Otherwise this function returns `false`.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp16701152"></a>
## See Also

[msg:body_replace](lua.ref.msg_body_replace "msg:body_replace")

| [Prev](lua.ref.msg_body)  | [Up](lua.function.details) |  [Next](lua.ref.msg_body_replace) |
| msg:body  | [Table of Contents](index) |  msg:body_replace |

