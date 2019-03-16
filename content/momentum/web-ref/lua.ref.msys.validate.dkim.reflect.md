| [Prev](lua.ref.msys.validate.dkim.get_responsible_domain)  | 15.2. Lua Functions |  [Next](lua.ref.msys.validate.dkim.sign.php) |

<a name="lua.ref.msys.validate.dkim.reflect"></a>
## Name

msys.validate.dkim.reflect — Send an email to `receiver_addrs` regarding the validation result of the current message

<a name="idp27167008"></a>
## Synopsis

`msys.validate.dkim.reflect(msg, vctx, sender_addrs, receiver_addrs, subj, note);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
sender_addrs: string
receiver_addrs: string
subj: string, optional
note: string, optional
```
<a name="idp27169904"></a>
## Description

This function requires the dkim_validate module. It should be used before the data_validate phase to instruct the system to send an email to `receiver_addrs` regarding the validation result of the current message.

*   `msg` the inbound message to be validated by dkim_validate.

*   `vctx` validation context.

*   `sender_addr` the "from" address of reflective email.

*   `receiver_addrs` a list of addresses (separated by semi-colon) who are going to receive the reflective email. The first one will be used as "To" address of the reflective email and the rest will be used as "Bcc" addresses.

*   `subject` optional subject line for the reflective email. If omitted, a default subject line is used.

*   `note` optional text to be added to the reflective email. If omitted, a default text is used.

Enable this function with the statement `require('msys.validate.dkim');`.

<a name="idp27181312"></a>
## See Also

[msys.validate.dkim.get_responsible_domain](lua.ref.msys.validate.dkim.get_responsible_domain "msys.validate.dkim.get_responsible_domain"), [msys.validate.dkim.get_domains](lua.ref.msys.validate.dkim.get_domains.php "msys.validate.dkim.get_domains"), [msys.validate.dkim.sign](lua.ref.msys.validate.dkim.sign.php "msys.validate.dkim.sign"), [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim.php "14.27. dkim – DomainKeys Identified Mail Signatures")

| [Prev](lua.ref.msys.validate.dkim.get_responsible_domain)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.validate.dkim.sign.php) |
| msys.validate.dkim.get_responsible_domain  | [Table of Contents](index) |  msys.validate.dkim.sign |
