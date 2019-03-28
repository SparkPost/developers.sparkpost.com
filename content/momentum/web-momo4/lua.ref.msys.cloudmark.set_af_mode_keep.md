|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cloudmark.set_af_mode_discard)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.cloudmark.set_af_mode_movemsg) |

<a name="lua.ref.msys.cloudmark.set_af_mode_keep"></a>
## Name

msys.cloudmark.set_af_mode_keep — Set the Cloudmark ActiveFilter mode to KEEP.

<a name="idp15090848"></a>
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.set_af_mode_keep()`

<a name="idp15093840"></a>
## Description

This sets the Cloudmark ActiveFilter mode to `KEEP`. That is, move messages around based on their status.

### Note

You must set the ActiveFilter mode by invoking one of the following functions:

*   `msys.cloudmark.set_af_mode_discard`

*   `msys.cloudmark.set_af_mode_keep`

*   `msys.cloudmark.set_af_mode_movemsg`

<a name="lua.ref.msys.cloudmark.set_af_mode_keep.example"></a>

**Example 70.7. msys.cloudmark.set_af_mode_keep Example**

```
require("msys.cloudmark");

local mod = {};

function mod:init()

  msys.cloudmark.set_af_mode_keep();
  msys.cloudmark.set_af_msi_address("msi@msi.local");
  return 0;
end

msys.registerModule("af_test", mod);
```

<a name="idp15104512"></a>
## See Also

[msys.cloudmark.score_af](lua.ref.msys.cloudmark.score_af "msys.cloudmark.score_af"), [msys.cloudmark.add_af_data](lua.ref.msys.cloudmark.add_af_data "msys.cloudmark.add_af_data"), [msys.cloudmark.set_af_mode_discard](lua.ref.msys.cloudmark.set_af_mode_discard "msys.cloudmark.set_af_mode_discard"), [msys.cloudmark.set_af_mode_movemsg](lua.ref.msys.cloudmark.set_af_mode_movemsg "msys.cloudmark.set_af_mode_movemsg"), [msys.cloudmark.set_af_msi_address](lua.ref.msys.cloudmark.set_af_msi_address "msys.cloudmark.set_af_msi_address"), [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze "msys.cloudmark.analyze"), [msys.cloudmark.score](lua.ref.msys.cloudmark.score "msys.cloudmark.score"), [Section 71.18, “cloudmark – Cloudmark Authority® Content Scanning”](modules.cloudmark "71.18. cloudmark – Cloudmark Authority® Content Scanning")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cloudmark.set_af_mode_discard)  | [Up](lua.function.details) |  [Next](lua.ref.msys.cloudmark.set_af_mode_movemsg) |
| msys.cloudmark.set_af_mode_discard  | [Table of Contents](index) |  msys.cloudmark.set_af_mode_movemsg |

