| [Prev](lua.ref.msg_body_match)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_build) |

<a name="lua.ref.msg_body_replace"></a>
## Name

msg:body_replace — Streaming interface to a PCRE replacement of a message body (minus headers)

<a name="idp16708128"></a>
## Synopsis

`msg:body_replace(pattern, replacement);`

```
pattern: string
replacement: string
```
<a name="idp16711072"></a>
## Description

Streaming interface to a PCRE replacement of a message body (minus headers). This function has the same semantics as `msg:body_match`. If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp16714864"></a>
## See Also

[msg:body_match](lua.ref.msg_body_match "msg:body_match")

| [Prev](lua.ref.msg_body_match)  | [Up](lua.function.details) |  [Next](lua.ref.msg_build) |
| msg:body_match  | [Table of Contents](index) |  msg:build |

