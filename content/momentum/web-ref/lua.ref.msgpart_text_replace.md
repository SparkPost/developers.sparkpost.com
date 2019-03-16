| [Prev](lua.ref.msgpart_text_match)  | 15.2. Lua Functions |  [Next](lua.ref.msys.asyncOk.php) |

<a name="lua.ref.msgpart_text_replace"></a>
## Name

msgpart:text_replace — Streaming interface to a PCRE replacement of textual content from the message body parts

<a name="idp25859152"></a>
## Synopsis

`msgpart:text_replace(pattern, replacement);`

```
pattern: string
replacement: string
```
<a name="idp25861824"></a>
## Description

Streaming interface to PCRE replacement of textual content from the message body parts. Only parts that have a 'text' mime type will be included in the search.

Enable this function with the statement `require('msys.extended.message');`.

| [Prev](lua.ref.msgpart_text_match)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.asyncOk.php) |
| msgpart:text_match  | [Table of Contents](index) |  msys.asyncOk |
