|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_text1)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_text_replace) |

<a name="lua.ref.msg_text_match"></a>
## Name

msg:text_match — Streaming PCRE search across the transfer-decoded, UTF-8 text version of the message body

<a name="idp16990832"></a>
## Synopsis

`msg:text_match(pattern);`

`pattern: string`<a name="idp16993808"></a>
## Description

Streaming PCRE search across the transfer-decoded, UTF-8 text version of the message body. Only parts that have a 'text' mime type will be included in the search. This function returns the matches as a table. If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_text1)  | [Up](lua.function.details) |  [Next](lua.ref.msg_text_replace) |
| msg:text  | [Table of Contents](index) |  msg:text_replace |

