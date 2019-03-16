| [Prev](lua.ref.msys.validate.dk.sign)  | 15.2. Lua Functions |  [Next](lua.ref.msys.validate.dkim.get_responsible_domain.php) |

<a name="lua.ref.msys.validate.dkim.get_domains"></a>
## Name

msys.validate.dkim.get_domains — Return a list of valid signing domains

<a name="idp27136992"></a>
## Synopsis

`msys.validate.dkim.get_domains(msg, vctx);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
```
<a name="idp27139744"></a>
## Description

This function requires the dkim_validate module. `msg` is a mail message. `vctx` is the validation context. This function returns a list of valid signing domains.

<a name="lua.ref.msys.validate.dkim.get_domains.example"></a>

**Example 15.65. msys.validate.dkim.get_domains example**

```
require("msys.validate.dkim");
local mod = {};
function mod:validate_data_spool(msg, accept, vctx)
  local domain = msys.validate.dkim.get_responsible_domain();
  print("msys.validate.dkim.get_responsible_domain returns ", domain);
  local domains = msys.validate.dkim.get_domains(msg, vctx);
  print("msys.validate.dkim.get_domains returns ", domains);
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("test_dkim", mod);
```

Enable this function with the statement `require('msys.validate.dkim');`.

<a name="idp27146048"></a>
## See Also

[msys.validate.dkim.get_responsible_domain](lua.ref.msys.validate.dkim.get_responsible_domain "msys.validate.dkim.get_responsible_domain"), [msys.validate.dkim.get_domains](lua.ref.msys.validate.dkim.get_domains.php "msys.validate.dkim.get_domains"), [msys.validate.dkim.reflect](lua.ref.msys.validate.dkim.reflect.php "msys.validate.dkim.reflect"), [msys.validate.dkim.sign](lua.ref.msys.validate.dkim.sign.php "msys.validate.dkim.sign"), [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim.php "14.27. dkim – DomainKeys Identified Mail Signatures")

| [Prev](lua.ref.msys.validate.dk.sign)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.validate.dkim.get_responsible_domain.php) |
| msys.validate.dk.sign  | [Table of Contents](index) |  msys.validate.dkim.get_responsible_domain |
