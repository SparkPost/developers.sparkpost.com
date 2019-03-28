|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_body)  | 15.2. Lua Functions |  [Next](lua.ref.msg_body_replace.php) |

<a name="lua.ref.msg_body_match"></a>
## Name

msg:body_match — Streaming interface to a PCRE search of a message body (minus headers)

<a name="idp25384096"></a>
## Synopsis

`msg:body_match(pattern);`

`pattern: string`<a name="idp25386784"></a>
## Description

Streaming interface to a PCRE search of a message body (minus headers). If matches are found, they are returned. Otherwise this function returns `false`.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25389920"></a>
## See Also

[msg:body_replace](lua.ref.msg_body_replace "msg:body_replace")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_body)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_body_replace.php) |
| msg:body  | [Table of Contents](index) |  msg:body_replace |
