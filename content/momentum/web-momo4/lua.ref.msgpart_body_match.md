| [Prev](lua.ref.msgpart_address_header)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msgpart_body_replace) |

<a name="lua.ref.msgpart_body_match"></a>
## Name

msgpart:body_match — Streaming interface to a PCRE search of a message body part (minus headers)

<a name="idp17062912"></a>
## Synopsis

`msgpart:body_match(pattern);`

`pattern: string`<a name="idp17065840"></a>
## Description

Streaming interface to a PCRE search of a message body part (minus headers). If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.

| [Prev](lua.ref.msgpart_address_header)  | [Up](lua.function.details) |  [Next](lua.ref.msgpart_body_replace) |
| msgpart:address_header  | [Table of Contents](index) |  msgpart:body_replace |

