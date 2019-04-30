|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.timer.every)  | 15.2. Lua Functions |  [Next](lua.ref.msys.validate.dk.sign.php) |

<a name="lua.ref.msys.validate.dk.get_responsible_domain"></a>
## Name

msys.validate.dk.get_responsible_domain — Return the domain responsible for the current message

<a name="idp27103680"></a>
## Synopsis

`msys.validate.dk.get_responsible_domain(msg, vctx);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
```
<a name="idp27106416"></a>
## Description

This function requires the "dk_validate" module. `msg` is a mail message. `ctx` is the validation context. This function returns the domain responsible for the current message.

Enable this function with the statement `require('msys.validate.dk');`.

<a name="idp27109936"></a>
## See Also

[msys.validate.dk.sign](lua.ref.msys.validate.dk.sign "msys.validate.dk.sign") [Section 14.29, “domainkeys – Yahoo! DomainKeys”](modules.domainkeys.php "14.29. domainkeys – Yahoo! DomainKeys")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.timer.every)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.validate.dk.sign.php) |
| msys.timer.every  | [Table of Contents](index) |  msys.validate.dk.sign |
