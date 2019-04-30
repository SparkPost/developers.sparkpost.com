|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cloudmark.analyze)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.cloudmark.score) |

<a name="lua.ref.msys.cloudmark.add_af_data"></a>
## Name

msys.cloudmark.add_af_data — Pass data for use with the Cloudmark ActiveFilter.

<a name="idp14992480"></a>
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.add_af_data(addr, data)`

```
addr: string
data: userdata (key-value pairs)
```
<a name="idp14996224"></a>
## Description

Optionally pass the Cloudmark ActiveFilter an email address and a table of key-value pairs.

### Note

You must load and correctly configure the cloudmark module and the maildir module before using this function. This function does not have a return value.

<a name="lua.ref.msys.cloudmark.add_af_data.example"></a>

**Example 70.3. msys.cloudmark.add_af_data Example**

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

<a name="idp15002288"></a>
## See Also

[msys.cloudmark.score_af](lua.ref.msys.cloudmark.score_af "msys.cloudmark.score_af"), [msys.cloudmark.set_af_mode_discard](lua.ref.msys.cloudmark.set_af_mode_discard "msys.cloudmark.set_af_mode_discard"), [msys.cloudmark.set_af_mode_keep](lua.ref.msys.cloudmark.set_af_mode_keep "msys.cloudmark.set_af_mode_keep"), [msys.cloudmark.set_af_mode_movemsg](lua.ref.msys.cloudmark.set_af_mode_movemsg "msys.cloudmark.set_af_mode_movemsg"), [msys.cloudmark.set_af_msi_address](lua.ref.msys.cloudmark.set_af_msi_address "msys.cloudmark.set_af_msi_address"), [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze "msys.cloudmark.analyze"), [msys.cloudmark.score](lua.ref.msys.cloudmark.score "msys.cloudmark.score"), [Section 71.18, “cloudmark – Cloudmark Authority® Content Scanning”](modules.cloudmark "71.18. cloudmark – Cloudmark Authority® Content Scanning")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cloudmark.analyze)  | [Up](lua.function.details) |  [Next](lua.ref.msys.cloudmark.score) |
| msys.cloudmark.analyze  | [Table of Contents](index) |  msys.cloudmark.score |

