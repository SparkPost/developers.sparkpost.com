| [Prev](lua.ref.msg_raw)  | 15.2. Lua Functions |  [Next](lua.ref.msg_raw_replace.php) |

<a name="lua.ref.msg_raw_match"></a>
## Name

msg:raw_match — Streaming interface to a PCRE search of the message content

<a name="idp25582304"></a>
## Synopsis

`msg:raw_match(pattern);`

`pattern: string`<a name="idp25584976"></a>
## Description

Streaming interface to a PCRE search of the message content. This applies to the entire message content, headers through body, without decoding transfer encoding. This function returns all matches. If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25588208"></a>
## See Also

[msg:raw_replace](lua.ref.msg_raw_replace "msg:raw_replace")

| [Prev](lua.ref.msg_raw)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_raw_replace.php) |
| msg:raw  | [Table of Contents](index) |  msg:raw_replace |
