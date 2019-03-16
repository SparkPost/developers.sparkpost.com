| [Prev](lua.ref.msys.cloudmark.analyze)  | 15.2. Lua Functions |  [Next](lua.ref.msys.cloudmark.score.php) |

<a name="lua.ref.msys.cloudmark.add_af_data"></a>
## Name

msys.cloudmark.add_af_data — Pass data for use with the Cloudmark ActiveFilter.

<a name="idp23459056"></a>
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.add_af_data(addr, data)`

```
addr: string
data: userdata (key-value pairs)
```
<a name="idp23462480"></a>
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.5.4.

Optionally pass the Cloudmark ActiveFilter an email address and a table of key-value pairs.

### Note

You must load and correctly configure the cloudmark module and the maildir module before using this function. This function does not have a return value.

<a name="lua.ref.msys.cloudmark.add_af_data.example"></a>

**Example 15.3. msys.cloudmark.add_af_data Example**

```
require("msys");
require("msys.extended.vctx");
require("msys.cloudmark");

local mod = {};
function mod:validate_rcptto(msg, rcptto_string, ac, vctx)
  local localpart = vctx:get(msys.core.VCTX_MESS, "rcptto_localpart");
  local domain = vctx:get(msys.core.VCTX_MESS, "rcptto_domain");
  msys.cloudmark.add_af_data(localpart .. "@" .. domain,
                             { custom_key = "custom_value" });
  return msys.core.VALIDATE_CONT;
end
msys.registerModule("af_test", mod);
```

<a name="idp23470400"></a>
## See Also

[msys.cloudmark.score_af](lua.ref.msys.cloudmark.score_af "msys.cloudmark.score_af"), [msys.cloudmark.set_af_mode_discard](lua.ref.msys.cloudmark.set_af_mode_discard.php "msys.cloudmark.set_af_mode_discard"), [msys.cloudmark.set_af_mode_keep](lua.ref.msys.cloudmark.set_af_mode_keep.php "msys.cloudmark.set_af_mode_keep"), [msys.cloudmark.set_af_mode_movemsg](lua.ref.msys.cloudmark.set_af_mode_movemsg.php "msys.cloudmark.set_af_mode_movemsg"), [msys.cloudmark.set_af_msi_address](lua.ref.msys.cloudmark.set_af_msi_address.php "msys.cloudmark.set_af_msi_address"), [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze.php "msys.cloudmark.analyze"), [msys.cloudmark.score](lua.ref.msys.cloudmark.score.php "msys.cloudmark.score"), [Section 14.18, “cloudmark – Cloudmark Authority Module”](modules.cloudmark.php "14.18. cloudmark – Cloudmark Authority Module")

| [Prev](lua.ref.msys.cloudmark.analyze)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.cloudmark.score.php) |
| msys.cloudmark.analyze  | [Table of Contents](index) |  msys.cloudmark.score |
