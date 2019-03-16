| [Prev](lua.ref.msg_body_match)  | 15.2. Lua Functions |  [Next](lua.ref.msg_build.php) |

<a name="lua.ref.msg_body_replace"></a>
## Name

msg:body_replace — Streaming interface to a PCRE replacement of a message body (minus headers)

<a name="idp25396240"></a>
## Synopsis

`msg:body_replace(pattern, replacement);`

```
pattern: string
replacement: string
```
<a name="idp25398896"></a>
## Description

Streaming interface to a PCRE replacement of a message body (minus headers). This function has the same semantics as `msg:body_match`. If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25402464"></a>
## See Also

[msg:body_match](lua.ref.msg_body_match "msg:body_match")

| [Prev](lua.ref.msg_body_match)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_build.php) |
| msg:body_match  | [Table of Contents](index) |  msg:build |
