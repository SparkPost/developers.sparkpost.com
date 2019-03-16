| [Prev](lua.ref.msys.cloudmark.set_af_mode_keep)  | 15.2. Lua Functions |  [Next](lua.ref.msys.cloudmark.set_af_msi_address.php) |

<a name="lua.ref.msys.cloudmark.set_af_mode_movemsg"></a>
## Name

msys.cloudmark.set_af_mode_movemsg — Set the Cloudmark ActiveFilter mode to MOVEMSG.

<a name="idp23580288"></a>
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.set_af_mode_movemsg(inbox, spam, unread_only)`

```
inbox: string
spam: string
unread_only: string
```
<a name="idp23583744"></a>
## Description

This sets the Cloudmark ActiveFilter mode to `MOVEMSG`. That is, move messages around based on their status.

**Configuration Change. ** This feature is available starting from Momentum 3.5.4.

*   `inbox` – The Inbox folder name.

*   `spam` – The Spam folder name.

*   `unread_only` – Whether or not to move unread messages only. Values are `"yes"` or `"no"`.

### Note

You must set the ActiveFilter mode by invoking one of the following functions:

*   `msys.cloudmark.set_af_mode_discard`

*   `msys.cloudmark.set_af_mode_keep`

*   `msys.cloudmark.set_af_mode_movemsg`

<a name="lua.ref.msys.cloudmark.set_af_mode_movemsg.example"></a>

**Example 15.8. msys.cloudmark.set_af_mode_movemsg Example**

```
require("msys.cloudmark");

local mod = {};

function mod:init()

  msys.cloudmark.set_af_mode_movemsg("Inbox", "Spam", "no");
  msys.cloudmark.set_af_msi_address("msi@msi.local");
  return 0;
end

msys.registerModule("af_test", mod);
```

<a name="idp23600992"></a>
## See Also

[msys.cloudmark.score_af](lua.ref.msys.cloudmark.score_af "msys.cloudmark.score_af"), [msys.cloudmark.add_af_data](lua.ref.msys.cloudmark.add_af_data.php "msys.cloudmark.add_af_data"), [msys.cloudmark.set_af_mode_discard](lua.ref.msys.cloudmark.set_af_mode_discard.php "msys.cloudmark.set_af_mode_discard"), [msys.cloudmark.set_af_mode_keep](lua.ref.msys.cloudmark.set_af_mode_keep.php "msys.cloudmark.set_af_mode_keep"), [msys.cloudmark.set_af_msi_address](lua.ref.msys.cloudmark.set_af_msi_address.php "msys.cloudmark.set_af_msi_address"), [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze.php "msys.cloudmark.analyze"), [msys.cloudmark.score](lua.ref.msys.cloudmark.score.php "msys.cloudmark.score"), [Section 14.18, “cloudmark – Cloudmark Authority Module”](modules.cloudmark.php "14.18. cloudmark – Cloudmark Authority Module")

| [Prev](lua.ref.msys.cloudmark.set_af_mode_keep)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.cloudmark.set_af_msi_address.php) |
| msys.cloudmark.set_af_mode_keep  | [Table of Contents](index) |  msys.cloudmark.set_af_msi_address |
