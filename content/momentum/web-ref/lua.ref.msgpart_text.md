|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msgpart_text2)  | 15.2. Lua Functions |  [Next](lua.ref.msgpart_text_match.php) |

<a name="lua.ref.msgpart_text"></a>
## Name

msgpart:text — Returns the transfer decoded text for the message part, in UTF-8

<a name="idp25838272"></a>
## Synopsis

`msgpart:text(...);`

`...: mixed`<a name="idp25840944"></a>
## Description

Returns the transfer decoded text for the message part, in UTF-8\. The ellipsis (...) indicates that this function accepts any number of arguments.

### Note

This function does not always return a string. It can return `nil` on message parts where there is no body content.

Enable this function with the statement `require('msys.extended.message');`.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msgpart_text2)  | [Up](lua.function.details.php) |  [Next](lua.ref.msgpart_text_match.php) |
| msgpart:text  | [Table of Contents](index) |  msgpart:text_match |
