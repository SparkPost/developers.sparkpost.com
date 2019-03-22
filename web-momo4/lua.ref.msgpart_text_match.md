| [Prev](lua.ref.msgpart_text)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msgpart_text_replace) |

<a name="lua.ref.msgpart_text_match"></a>
## Name

msgpart:text_match — Streaming a PCRE search across the transfer decoded UTF-8 text version of the message body part

<a name="idp17200688"></a>
## Synopsis

`msgpart:text_match(pattern);`

`pattern: string`<a name="idp17203616"></a>
## Description

Streaming a PCRE search across the transfer decoded UTF-8 text version of the message body part. If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.

| [Prev](lua.ref.msgpart_text)  | [Up](lua.function.details) |  [Next](lua.ref.msgpart_text_replace) |
| msgpart:text  | [Table of Contents](index) |  msgpart:text_replace |

