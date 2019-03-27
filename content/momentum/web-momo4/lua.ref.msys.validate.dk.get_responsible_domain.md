| [Prev](lua.ref.msys.timer.every)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.validate.dk.sign) |

<a name="lua.ref.msys.validate.dk.get_responsible_domain"></a>
## Name

msys.validate.dk.get_responsible_domain — Return the domain responsible for the current message

<a name="idp18576240"></a>
## Synopsis

`msys.validate.dk.get_responsible_domain(msg, vctx);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
```
<a name="idp18579296"></a>
## Description

This function returns the domain responsible for the current message. This function requires the [`dk_validate`](modules.domainkeys "71.28. domainkeys – Yahoo! DomainKeys") module.

Enable this function with the statement `require('msys.validate.dk');`.

It takes the following parameters:

*   `msg` – mail message

*   `vctx` – validation context

<a name="idp18586656"></a>
## See Also

[msys.validate.dk.sign](lua.ref.msys.validate.dk.sign "msys.validate.dk.sign")

| [Prev](lua.ref.msys.timer.every)  | [Up](lua.function.details) |  [Next](lua.ref.msys.validate.dk.sign) |
| msys.timer.every  | [Table of Contents](index) |  msys.validate.dk.sign |

