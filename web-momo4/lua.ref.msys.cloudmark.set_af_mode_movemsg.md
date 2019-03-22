| [Prev](lua.ref.msys.cloudmark.set_af_mode_keep)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.cloudmark.set_af_msi_address) |

<a name="lua.ref.msys.cloudmark.set_af_mode_movemsg"></a>
## Name

msys.cloudmark.set_af_mode_movemsg — Set the Cloudmark ActiveFilter mode to MOVEMSG.

<a name="idp15115632"></a>
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.set_af_mode_movemsg(inbox, spam, unread_only)`

```
inbox: string
spam: string
unread_only: string
```
<a name="idp15119408"></a>
## Description

This sets the Cloudmark ActiveFilter mode to `MOVEMSG`. That is, move messages around based on their status.

*   `inbox` – The Inbox folder name.

*   `spam` – The Spam folder name.

*   `unread_only` – Whether or not to move unread messages only. Values are `"yes"` or `"no"`.

### Note

You must set the ActiveFilter mode by invoking one of the following functions:

*   `msys.cloudmark.set_af_mode_discard`

*   `msys.cloudmark.set_af_mode_keep`

*   `msys.cloudmark.set_af_mode_movemsg`

<a name="lua.ref.msys.cloudmark.set_af_mode_movemsg.example"></a>

**Example 70.8. msys.cloudmark.set_af_mode_movemsg Example**

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

<a name="idp15135520"></a>
## See Also

[msys.cloudmark.score_af](lua.ref.msys.cloudmark.score_af "msys.cloudmark.score_af"), [msys.cloudmark.add_af_data](lua.ref.msys.cloudmark.add_af_data "msys.cloudmark.add_af_data"), [msys.cloudmark.set_af_mode_discard](lua.ref.msys.cloudmark.set_af_mode_discard "msys.cloudmark.set_af_mode_discard"), [msys.cloudmark.set_af_mode_keep](lua.ref.msys.cloudmark.set_af_mode_keep "msys.cloudmark.set_af_mode_keep"), [msys.cloudmark.set_af_msi_address](lua.ref.msys.cloudmark.set_af_msi_address "msys.cloudmark.set_af_msi_address"), [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze "msys.cloudmark.analyze"), [msys.cloudmark.score](lua.ref.msys.cloudmark.score "msys.cloudmark.score"), [Section 71.18, “cloudmark – Cloudmark Authority® Content Scanning”](modules.cloudmark "71.18. cloudmark – Cloudmark Authority® Content Scanning")

| [Prev](lua.ref.msys.cloudmark.set_af_mode_keep)  | [Up](lua.function.details) |  [Next](lua.ref.msys.cloudmark.set_af_msi_address) |
| msys.cloudmark.set_af_mode_keep  | [Table of Contents](index) |  msys.cloudmark.set_af_msi_address |

