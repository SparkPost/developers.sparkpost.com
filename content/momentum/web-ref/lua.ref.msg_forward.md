|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_discard)  | 15.2. Lua Functions |  [Next](lua.ref.msg_get_delivery_method.php) |

<a name="lua.ref.msg_forward"></a>
## Name

msg:forward — Forward the current message to recipients other than the original recipients

<a name="idp25450736"></a>
## Synopsis

`msg:forward(sender, rcptto, text, subject, charset);`

```
sender: string
rcptto: string
text: string
subject: string, optional
charset: string, optional
```
<a name="idp25453536"></a>
## Description

Forward the current message to recipients other than the original recipients. A new message is created and the original message is attached to it. The parameters are as follows:

*   `sender` the address of the forwarder

*   `rcptto` the addresses where the message is to be forwarded to. If there are more than one address, separate them with `,`.

*   `text` brief text. If it contains non-ASCII or non-printable ASCII, charset must be specified.

*   `subject` optional subject line. If it contains non-ASCII or non-printable ASCII, encode it according to RFC 2047.

*   `charset` the character encoding of text. It need not be specified if text contains only ASCII.

Enable this function with the statement `require('msys.extended.message');`.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_discard)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_get_delivery_method.php) |
| msg:discard  | [Table of Contents](index) |  msg:get_delivery_method |
