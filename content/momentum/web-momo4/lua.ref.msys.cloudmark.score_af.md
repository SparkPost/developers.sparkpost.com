| [Prev](lua.ref.msys.cloudmark.score)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.cloudmark.set_af_mode_discard) |

<a name="lua.ref.msys.cloudmark.score_af"></a>
## Name

msys.cloudmark.score_af — Set the Cloudmark ActiveFilter score threshold

<a name="idp15050832"></a>
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.score_af(msg, accept, vctx, af_threshold)`

```
msg: userdata, ec_message
accept: userdata, accept_construct
vctx: userdata, validate_context
af_threshold: string
```
<a name="idp15054592"></a>
## Description

Set the ActiveFilter score threshold as part of the fourth argument in this function. If a message is originally marked as "not-spam" and later the message fingerprint exceeds this score, then it will trigger an ActiveFilter update. Similarly, if a message is marked as spam and later is re-classified as "not spam", then ActiveFilter will be updated as well. Note that the latter case is only significant in the `MOVEMSG` ActiveFilter mode. Why? If you are discarding messages then there is no action to take in the false positive case.

<a name="lua.ref.msys.cloudmark.score_af.example"></a>

**Example 70.5. msys.cloudmark.score_af Example**

```
require("msys.core");
require("msys.cloudmark");

local mod = {};

function mod:init()

  msys.cloudmark.set_af_mode_movemsg("Inbox", "Spam", "no");
  msys.cloudmark.set_af_msi_address("msi@msi.local"); 

  return 0;
end

function mod:validate_data(msg, ac, vctx)

  -- Set the ActiveFilter score threshold

  local score = msys.cloudmark.score_af(msg, ac, vctx, 90);
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("af_test", mod);
```

<a name="idp15057872"></a>
## See Also

[msys.cloudmark.score_af](lua.ref.msys.cloudmark.score_af "msys.cloudmark.score_af"), [msys.cloudmark.add_af_data](lua.ref.msys.cloudmark.add_af_data "msys.cloudmark.add_af_data"), [msys.cloudmark.set_af_mode_discard](lua.ref.msys.cloudmark.set_af_mode_discard "msys.cloudmark.set_af_mode_discard"), [msys.cloudmark.set_af_mode_keep](lua.ref.msys.cloudmark.set_af_mode_keep "msys.cloudmark.set_af_mode_keep"), [msys.cloudmark.set_af_mode_movemsg](lua.ref.msys.cloudmark.set_af_mode_movemsg "msys.cloudmark.set_af_mode_movemsg"), [msys.cloudmark.set_af_msi_address](lua.ref.msys.cloudmark.set_af_msi_address "msys.cloudmark.set_af_msi_address"), [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze "msys.cloudmark.analyze"), [msys.cloudmark.score](lua.ref.msys.cloudmark.score "msys.cloudmark.score"), [Section 71.18, “cloudmark – Cloudmark Authority® Content Scanning”](modules.cloudmark "71.18. cloudmark – Cloudmark Authority® Content Scanning")

| [Prev](lua.ref.msys.cloudmark.score)  | [Up](lua.function.details) |  [Next](lua.ref.msys.cloudmark.set_af_mode_discard) |
| msys.cloudmark.score  | [Table of Contents](index) |  msys.cloudmark.set_af_mode_discard |

