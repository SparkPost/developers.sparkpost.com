|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.validate.dkim.reflect)  | 15.2. Lua Functions |  [Next](lua.ref.msys.validate.dkim.verify_results_get_count.php) |

<a name="lua.ref.msys.validate.dkim.sign"></a>
## Name

msys.validate.dkim.sign — Sign a message using a DKIM signature

<a name="idp27188016"></a>
## Synopsis

`msys.validate.dkim.sign(msg, vctx, options);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
options: table, optional
```
<a name="idp27190800"></a>
## Description

This function requires the dkim_sign module. `msg` is a mail message. `vctx` is the validation context. It signs the message `msg` using a DKIM signature. `options` is a table which allows the caller to override the following options:

*   `base_domain/signing_domain` override the default signing domain. These two parameters are synonyms for one another, each will have the same effect.

*   `header_canon` override the default header canonicalization setting.

*   `body_canon` override the default body canonicalization setting.

*   `digest` override the default digest setting.

*   `headerlist` override the default list of headers to sign.

*   `identity` override the default signing identity.

*   `selector` Override the default signing selector

*   `keyfile` override the default signing key file, which may be parameterized as defined in [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim "14.27. dkim – DomainKeys Identified Mail Signatures").

*   `keybuf` Override the default signing key. This hash entry must contain the PEM encoded private key to use for signing the messages. This must be a contiguous string, with no line breaks and no white space, without the `BEGIN` and `END` tags that are found in the key file itself. The format is similar to the format used to store the public key in the DKIM DNS records.

*   `body_length_limit` Override the default body_length_limit setting.

<a name="lua.ref.msys.validate.dkim.sign.example"></a>

**Example 15.66. msys.validate.dkim.sign example**

require("msys.validate.dkim");
local mod = {};
function mod:core_final_validation(msg, accept, vctx)
  local options = {};
  options["base_domain"] = "example.com";
  options["selector"] = "*`selector_name`*";
  local domain = msys.validate.dkim.get_responsible_domain();
  print("msys.validate.dkim.get_responsible_domain returns ", domain);
  print("msys.validate.dkim.sign returns ", msys.validate.dkim.sign(nil, nil, options));
  local domains = msys.validate.dkim.get_domains(msg, vctx);
  print("msys.validate.dkim.get_domains returns ", domains);
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("test_dkim", mod);

### Note

This function should only be invoked during the core_final_validation hook.

Enable this function with the statement `require('msys.validate.dkim');`.

<a name="idp27214480"></a>
## See Also

[msys.validate.dkim.get_responsible_domain](lua.ref.msys.validate.dkim.get_responsible_domain "msys.validate.dkim.get_responsible_domain"), [msys.validate.dkim.get_domains](lua.ref.msys.validate.dkim.get_domains.php "msys.validate.dkim.get_domains"), [msys.validate.dkim.reflect](lua.ref.msys.validate.dkim.reflect.php "msys.validate.dkim.reflect"), [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim.php "14.27. dkim – DomainKeys Identified Mail Signatures")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.validate.dkim.reflect)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.validate.dkim.verify_results_get_count.php) |
| msys.validate.dkim.reflect  | [Table of Contents](index) |  msys.validate.dkim.verify_results_get_count |
