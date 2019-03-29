|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_get_message_size)  | 15.2. Lua Functions |  [Next](lua.ref.msg_is_mcmt.php) |

<a name="lua.ref.msg_inject"></a>
## Name

msg:inject — Use this function to send mail

<a name="idp25487056"></a>
## Synopsis

`msg:inject(mailfrom, rcptto);`

```
mailfrom: string
rcptto: string
```
<a name="idp25489760"></a>
## Description

Use this function to send mail. `mailfrom` is the address of the sender in the form of "`localpart@domain`". `rcptto` is the address of the recipient in the form of `localpart@domain`. If you want to send this mail to multiple addresses, separate the addresses using a ‘`,`’.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25494832"></a>
## See Also

[msg:build](lua.ref.msg_build "msg:build")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_get_message_size)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_is_mcmt.php) |
| msg:get_message_size  | [Table of Contents](index) |  msg:is_mcmt |
