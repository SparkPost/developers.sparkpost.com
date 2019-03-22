| [Prev](lua.ref.msys.validate.dk.get_responsible_domain)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.validate.opendkim.get_num_sigs) |

<a name="lua.ref.msys.validate.dk.sign"></a>
## Name

msys.validate.dk.sign — Sign a message using a Domain Key

<a name="idp18592128"></a>
## Synopsis

`msys.validate.dk.sign(msg, vctx, options);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
options: table
```
<a name="idp18595184"></a>
## Description

This function signs a message using a DomainKey signature. This function requires the [`dk_sign`](modules.domainkeys "71.28. domainkeys – Yahoo! DomainKeys") module.

Enable this function with the statement `require('msys.sign.dk');`.

It requires the following parameters:

*   `msg` – mail message to sign

*   `vctx` – validation context

*   `options` – table that allows the caller to override the following options with values different from that provided by the dk_sign module:

    *   `base_domain` – default signing domain

    *   `selector` – default signing selector

    *   `keyfile` – default signing key file (which may be parameterized as defined in [Section 71.50, “opendkim – Open Source DKIM”](modules.opendkim "71.50. opendkim – Open Source DKIM"))

    *   `keybuf` – default signing key

        This hash entry must contain the PEM encoded private key to use for signing the messages.

### Note

This function should only be invoked from the core_final_validation hook.

<a name="idp18612160"></a>
## See Also

[msys.validate.dk.get_responsible_domain](lua.ref.msys.validate.dk.get_responsible_domain "msys.validate.dk.get_responsible_domain")

| [Prev](lua.ref.msys.validate.dk.get_responsible_domain)  | [Up](lua.function.details) |  [Next](lua.ref.msys.validate.opendkim.get_num_sigs) |
| msys.validate.dk.get_responsible_domain  | [Table of Contents](index) |  msys.validate.opendkim.get_num_sigs |

