|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msgpart_insertBefore)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msgpart_raw_replace) |

<a name="lua.ref.msgpart_raw_match"></a>
## Name

msgpart:raw_match — Streaming interface to a PCRE search of the current message part

<a name="idp17154736"></a>
## Synopsis

`msgpart:raw_match(pattern);`

`pattern: string`<a name="idp17157664"></a>
## Description

Streaming interface to a PCRE search of the current message part. If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msgpart_insertBefore)  | [Up](lua.function.details) |  [Next](lua.ref.msgpart_raw_replace) |
| msgpart:insertBefore  | [Table of Contents](index) |  msgpart:raw_replace |

