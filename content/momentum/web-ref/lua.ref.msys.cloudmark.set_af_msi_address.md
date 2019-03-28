|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cloudmark.set_af_mode_movemsg)  | 15.2. Lua Functions |  [Next](lua.ref.msys.apn.apn_status_classifier.php) |

<a name="lua.ref.msys.cloudmark.set_af_msi_address"></a>
## Name

msys.cloudmark.set_af_msi_address — Set the address for the Cloudmark ActiveFilter MSI Messages.

<a name="idp23610704"></a>
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.set_af_msi_address(addr)`

`addr: string`<a name="idp23614096"></a>
## Description

Set the address for the ActiveFilter MSI Messages. This address needs to correspond to the maildir that was defined in the `maildir` module declaration when you configured Momentum to use the Cloudmark ActiveFilter.

**Configuration Change. ** This feature is available starting from Momentum 3.5.4.

<a name="lua.ref.msys.cloudmark.set_af_msi_address.example"></a>

**Example 15.9. msys.cloudmark.set_af_msi_address Example**

```
require("msys.cloudmark");

local mod = {};

function mod:init()

  msys.cloudmark.set_af_mode_movemsg("Inbox", "Spam", "no");
  msys.cloudmark.set_af_msi_address("msi@msi.local");  -- Uses same address configured in the maildir module
  return 0;
end

msys.registerModule("af_test", mod);
```

<a name="idp23621408"></a>
## See Also

[msys.cloudmark.score_af](lua.ref.msys.cloudmark.score_af "msys.cloudmark.score_af"), [msys.cloudmark.add_af_data](lua.ref.msys.cloudmark.add_af_data.php "msys.cloudmark.add_af_data"), [msys.cloudmark.set_af_mode_discard](lua.ref.msys.cloudmark.set_af_mode_discard.php "msys.cloudmark.set_af_mode_discard"), [msys.cloudmark.set_af_mode_keep](lua.ref.msys.cloudmark.set_af_mode_keep.php "msys.cloudmark.set_af_mode_keep"), [msys.cloudmark.set_af_mode_movemsg](lua.ref.msys.cloudmark.set_af_mode_movemsg.php "msys.cloudmark.set_af_mode_movemsg"), [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze.php "msys.cloudmark.analyze"), [msys.cloudmark.score](lua.ref.msys.cloudmark.score.php "msys.cloudmark.score"), [Section 14.18, “cloudmark – Cloudmark Authority Module”](modules.cloudmark.php "14.18. cloudmark – Cloudmark Authority Module")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cloudmark.set_af_mode_movemsg)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.apn.apn_status_classifier.php) |
| msys.cloudmark.set_af_mode_movemsg  | [Table of Contents](index) |  msys.apn.apn_status_classifier |
