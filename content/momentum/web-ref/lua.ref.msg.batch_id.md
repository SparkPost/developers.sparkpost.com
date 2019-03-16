| [Prev](lua.ref.json.strerror)  | 15.2. Lua Functions |  [Next](lua.ref.msg.conn_id.php) |

<a name="lua.ref.msg.batch_id"></a>
## Name

msg.batch_id — Return the human-readable ec_message.batch_id

<a name="idp25296336"></a>
## Synopsis

`msg.batch_id;`

<a name="idp25298320"></a>
## Description

When used in a string context, or explicitly forced into a string via `tostring(msg.batch_id)`, this function returns the human-readable ec_message.batch_id.

<a name="lua.ref.msg.batch_id.example"></a>

**Example 15.41. msg.batch_id example**

```
require("msys.core");
require("msys.extended.message");

local mod = {};

function mod:validate_data(msg, ac, vctx)
  print(msg.batch_id);
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("validate_data", mod);
```

Enable this function with the statement `require('msys.extended.message');`.

| [Prev](lua.ref.json.strerror)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg.conn_id.php) |
| json.strerror  | [Table of Contents](index) |  msg.conn_id |
