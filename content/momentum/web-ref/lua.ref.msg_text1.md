|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_text)  | 15.2. Lua Functions |  [Next](lua.ref.msg_text_match.php) |

<a name="lua.ref.msg_text1"></a>
## Name

msg:text — Replace the entire message body

<a name="idp25644976"></a>
## Synopsis

`msg:text(value, type, charset);`

```
value: string
type: string, optional
charset: string, optional
```
<a name="idp25647712"></a>
## Description

The entire message body is replaced by the supplied text. The text will be converted to the specified charset and transfer encoding will be applied affecting the content-type and related headers of the message.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25650480"></a>
## See Also

[msg:text](lua.ref.msg_text "msg:text")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_text)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_text_match.php) |
| msg:text  | [Table of Contents](index) |  msg:text_match |
