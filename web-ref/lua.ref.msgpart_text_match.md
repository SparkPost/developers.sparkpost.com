|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msgpart_text)  | 15.2. Lua Functions |  [Next](lua.ref.msgpart_text_replace.php) |

<a name="lua.ref.msgpart_text_match"></a>
## Name

msgpart:text_match — Streaming a PCRE search across the transfer decoded UTF-8 text version of the message body part

<a name="idp25849184"></a>
## Synopsis

`msgpart:text_match(pattern);`

`pattern: string`<a name="idp25851824"></a>
## Description

Streaming a PCRE search across the transfer decoded UTF-8 text version of the message body part. If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msgpart_text)  | [Up](lua.function.details.php) |  [Next](lua.ref.msgpart_text_replace.php) |
| msgpart:text  | [Table of Contents](index) |  msgpart:text_replace |
