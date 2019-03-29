|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.validate.dkim.get_domains)  | 15.2. Lua Functions |  [Next](lua.ref.msys.validate.dkim.reflect.php) |

<a name="lua.ref.msys.validate.dkim.get_responsible_domain"></a>
## Name

msys.validate.dkim.get_responsible_domain — Return the domain responsible for the current message

<a name="idp27153440"></a>
## Synopsis

`msys.validate.dkim.get_responsible_domain(msg, vctx);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
```
<a name="idp27156208"></a>
## Description

This function requires the dkim_validate module. `msg` is a mail message. `vctx` is the validation context. It returns the domain responsible for the current message.

Enable this function with the statement `require('msys.validate.dkim');`.

<a name="idp27159744"></a>
## See Also

[msys.validate.dkim.get_domains](lua.ref.msys.validate.dkim.get_domains "msys.validate.dkim.get_domains"), [msys.validate.dkim.reflect](lua.ref.msys.validate.dkim.reflect.php "msys.validate.dkim.reflect"), [msys.validate.dkim.sign](lua.ref.msys.validate.dkim.sign.php "msys.validate.dkim.sign"), [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim.php "14.27. dkim – DomainKeys Identified Mail Signatures")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.validate.dkim.get_domains)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.validate.dkim.reflect.php) |
| msys.validate.dkim.get_domains  | [Table of Contents](index) |  msys.validate.dkim.reflect |
