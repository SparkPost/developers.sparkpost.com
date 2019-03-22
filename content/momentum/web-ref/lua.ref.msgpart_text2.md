| [Prev](lua.ref.msgpart_raw_replace)  | 15.2. Lua Functions |  [Next](lua.ref.msgpart_text.php) |

<a name="lua.ref.msgpart_text2"></a>
## Name

msgpart:text — The entire message body part is replaced by the supplied text

<a name="idp25825248"></a>
## Synopsis

`msgpart:text(value, type, charset);`

```
value: string
type: string, optional
charset: string, optional
```
<a name="idp25827984"></a>
## Description

This function has the same semantics and purpose as the Message equivalent (see [msg:text](lua.ref.msg_text "msg:text")), except that it is scoped to the message part currently being referenced instead of the entire message.

This function does not always return a string. It can return `nil` on message parts where there is no body content.

### Warning

In the current design, this function applies encoding and MIME headers but **does not dot stuff** .

Enable this function with the statement `require('msys.extended.message');`.

| [Prev](lua.ref.msgpart_raw_replace)  | [Up](lua.function.details.php) |  [Next](lua.ref.msgpart_text.php) |
| msgpart:raw_replace  | [Table of Contents](index) |  msgpart:text |
