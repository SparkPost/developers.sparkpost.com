|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msgpart_insertBefore)  | 15.2. Lua Functions |  [Next](lua.ref.msgpart_raw_replace.php) |

<a name="lua.ref.msgpart_raw_match"></a>
## Name

msgpart:raw_match — Streaming interface to a PCRE search of the current message part

<a name="idp25807200"></a>
## Synopsis

`msgpart:raw_match(pattern);`

`pattern: string`<a name="idp25809840"></a>
## Description

Streaming interface to a PCRE search of the current message part. If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msgpart_insertBefore)  | [Up](lua.function.details.php) |  [Next](lua.ref.msgpart_raw_replace.php) |
| msgpart:insertBefore  | [Table of Contents](index) |  msgpart:raw_replace |
