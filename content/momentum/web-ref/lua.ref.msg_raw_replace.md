|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_raw_match)  | 15.2. Lua Functions |  [Next](lua.ref.msg_rcptto.php) |

<a name="lua.ref.msg_raw_replace"></a>
## Name

msg:raw_replace — Streaming interface to a PCRE replacement of message content

<a name="idp25594368"></a>
## Synopsis

`msg:raw_replace(pattern, replacement);`

```
pattern: string
replacement: string
```
<a name="idp25597072"></a>
## Description

Streaming interface to a PCRE replacement of message content. This function has the same semantics as `raw_match`.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25600160"></a>
## See Also

[msg:raw_match](lua.ref.msg_raw_match "msg:raw_match")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_raw_match)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_rcptto.php) |
| msg:raw_match  | [Table of Contents](index) |  msg:rcptto |
