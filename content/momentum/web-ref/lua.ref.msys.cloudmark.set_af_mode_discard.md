| [Prev](lua.ref.msys.cloudmark.score_af)  | 15.2. Lua Functions |  [Next](lua.ref.msys.cloudmark.set_af_mode_keep.php) |

<a name="lua.ref.msys.cloudmark.set_af_mode_discard"></a>
## Name

msys.cloudmark.set_af_mode_discard — Set the Cloudmark ActiveFilter mode to DISCARD.

<a name="idp23532080"></a>
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.set_af_mode_discard()`

<a name="idp23534784"></a>
## Description

Set the Cloudmark ActiveFilter mode to DISCARD.

**Configuration Change. ** This feature is available starting from Momentum 3.5.4.

### Note

You must set the ActiveFilter mode by invoking one of the following functions:

*   `msys.cloudmark.set_af_mode_discard`

*   `msys.cloudmark.set_af_mode_keep`

*   `msys.cloudmark.set_af_mode_movemsg`

<a name="lua.ref.msys.cloudmark.set_af_mode_discard.example"></a>

**Example 15.6. msys.cloudmark.set_af_mode_discard Example**

```
require("msys.cloudmark");

local mod = {};

function mod:init()

  msys.cloudmark.set_af_mode_discard();
  msys.cloudmark.set_af_msi_address("msi@msi.local");
  return 0;
end

msys.registerModule("af_test", mod);
```

<a name="idp23546240"></a>
## See Also

[msys.cloudmark.score_af](lua.ref.msys.cloudmark.score_af "msys.cloudmark.score_af"), [msys.cloudmark.add_af_data](lua.ref.msys.cloudmark.add_af_data.php "msys.cloudmark.add_af_data"), [msys.cloudmark.set_af_mode_keep](lua.ref.msys.cloudmark.set_af_mode_keep.php "msys.cloudmark.set_af_mode_keep"), [msys.cloudmark.set_af_mode_movemsg](lua.ref.msys.cloudmark.set_af_mode_movemsg.php "msys.cloudmark.set_af_mode_movemsg"), [msys.cloudmark.set_af_msi_address](lua.ref.msys.cloudmark.set_af_msi_address.php "msys.cloudmark.set_af_msi_address"), [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze.php "msys.cloudmark.analyze"), [msys.cloudmark.score](lua.ref.msys.cloudmark.score.php "msys.cloudmark.score"), [Section 14.18, “cloudmark – Cloudmark Authority Module”](modules.cloudmark.php "14.18. cloudmark – Cloudmark Authority Module")

| [Prev](lua.ref.msys.cloudmark.score_af)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.cloudmark.set_af_mode_keep.php) |
| msys.cloudmark.score_af  | [Table of Contents](index) |  msys.cloudmark.set_af_mode_keep |
