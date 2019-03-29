|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msgpart_body_match)  | 15.2. Lua Functions |  [Next](lua.ref.msgpart_content_type.php) |

<a name="lua.ref.msgpart_body_replace"></a>
## Name

msgpart:body_replace — Streaming interface to a PCRE replacement of a message body part (minus headers)

<a name="idp25732096"></a>
## Synopsis

`msgpart:body_replace(pattern, replacement);`

```
pattern: string
replacement: string
```
<a name="idp25734768"></a>
## Description

Streaming interface to a PCRE replacement of a message body part (minus headers).

Enable this function with the statement `require('msys.extended.message');`.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msgpart_body_match)  | [Up](lua.function.details.php) |  [Next](lua.ref.msgpart_content_type.php) |
| msgpart:body_match  | [Table of Contents](index) |  msgpart:content_type |
