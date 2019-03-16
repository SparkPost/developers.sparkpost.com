| [Prev](lua.ref.msys.validate.dk.get_responsible_domain)  | 15.2. Lua Functions |  [Next](lua.ref.msys.validate.dkim.get_domains.php) |

<a name="lua.ref.msys.validate.dk.sign"></a>
## Name

msys.validate.dk.sign — Sign a message using a Domain Key

<a name="idp27115504"></a>
## Synopsis

`msys.validate.dk.sign(msg, vctx, options);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
options: table
```
<a name="idp27118272"></a>
## Description

This function requires the dk_sign module. `msg` is a mail message. `vctx` is the validation context. This function signs the message `msg` using a DomainKey signature. `options` is a table which allows the caller to override the following options with values different from that provided by dk_sign module:

*   `base_domain` override the default signing domain.

*   `selector` override the default signing selector.

*   `keyfile` override the default signing key file (which may be parameterized as defined in [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim "14.27. dkim – DomainKeys Identified Mail Signatures")).

*   `keybuf` Override the default signing key. This hash entry must contain the PEM encoded private key to use for signing the messages.

### Note

This function should only be invoked from the core_final_validation hook.

Enable this function with the statement `require('msys.validate.dk');`.

<a name="idp27129824"></a>
## See Also

[msys.validate.dk.get_responsible_domain](lua.ref.msys.validate.dk.get_responsible_domain "msys.validate.dk.get_responsible_domain"), [Section 14.29, “domainkeys – Yahoo! DomainKeys”](modules.domainkeys.php "14.29. domainkeys – Yahoo! DomainKeys")

| [Prev](lua.ref.msys.validate.dk.get_responsible_domain)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.validate.dkim.get_domains.php) |
| msys.validate.dk.get_responsible_domain  | [Table of Contents](index) |  msys.validate.dkim.get_domains |
