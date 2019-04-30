|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_raw_match)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_rcptto) |

<a name="lua.ref.msg_raw_replace"></a>
## Name

msg:raw_replace — Streaming interface to a PCRE replacement of message content

<a name="idp16923952"></a>
## Synopsis

`msg:raw_replace(pattern, replacement);`

```
pattern: string
replacement: string
```
<a name="idp16926944"></a>
## Description

Streaming interface to a PCRE replacement of message content. This function has the same semantics as `raw_match`.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp16930256"></a>
## See Also

[msg:raw_match](lua.ref.msg_raw_match "msg:raw_match")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_raw_match)  | [Up](lua.function.details) |  [Next](lua.ref.msg_rcptto) |
| msg:raw_match  | [Table of Contents](index) |  msg:rcptto |

