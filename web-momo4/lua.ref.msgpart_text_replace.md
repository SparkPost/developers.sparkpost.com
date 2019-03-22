| [Prev](lua.ref.msgpart_text_match)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.asyncOk) |

<a name="lua.ref.msgpart_text_replace"></a>
## Name

msgpart:text_replace — Streaming interface to a PCRE replacement of textual content from the message body parts

<a name="idp17211568"></a>
## Synopsis

`msgpart:text_replace(pattern, replacement);`

```
pattern: string
replacement: string
```
<a name="idp17214528"></a>
## Description

Streaming interface to PCRE replacement of textual content from the message body parts. Only parts that have a 'text' mime type will be included in the search.

Enable this function with the statement `require('msys.extended.message');`.

| [Prev](lua.ref.msgpart_text_match)  | [Up](lua.function.details) |  [Next](lua.ref.msys.asyncOk) |
| msgpart:text_match  | [Table of Contents](index) |  msys.asyncOk |

