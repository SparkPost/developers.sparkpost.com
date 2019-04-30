|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.db.execute)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.ac_esmtp_capability_remove) |

<a name="lua.ref.ac_esmtp_capability_add"></a>
## Name

ac:esmtp_capability_add — Add a capability to the EHLO response

<a name="idp14867552"></a>
## Synopsis

`require('msys.extended.ac')`

`ac:esmtp_capability_add(name);`

`name: string`<a name="idp14871168"></a>
## Description

This function is equivalent to the Sieve `advertize_esmtp_capability` action. It adds a capability string to the EHLO response. It is most useful in the connect phase and raises an error if the session is not attached to an SMTP listener. Find an example below:

<a name="lua.ref.ac_esmtp_capability_add.example"></a>

**Example 70.2. ac:esmtp_capability_add example**

```
require("msys.core");
require("msys.extended.message");
require("msys.extended.ac");

local mod = {};
function mod:validate_connect(ac, vctx)
  ac:esmtp_capability_add("8BITMIME");
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("validate_connect", mod);
```

The `ac` variable is an accept construct userdata data type. For a description of the C struct see [accept_construct](https://support.messagesystems.com/docs/web-c-api/structs.accept_construct.php).

<a name="idp14877728"></a>
## See Also

[ac:esmtp_capability_remove](lua.ref.ac_esmtp_capability_remove "ac:esmtp_capability_remove")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.db.execute)  | [Up](lua.function.details) |  [Next](lua.ref.ac_esmtp_capability_remove) |
| msys.db.execute  | [Table of Contents](index) |  ac:esmtp_capability_remove |

