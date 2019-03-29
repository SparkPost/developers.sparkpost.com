|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.counter.add)  | 15.2. Lua Functions |  [Next](lua.ref.msys.counter.open.php) |

<a name="lua.ref.msys.counter.inc"></a>
## Name

msys.counter.inc — Increment a counter

<a name="idp26396944"></a>
## Synopsis

`msys.counter.inc(object_or_path);`

`object_or_path: mixed`<a name="idp26399584"></a>
## Description

The first argument is either a path to a counter (for example, `/sites/sit_name/errors`) or a counter object that was returned by `msys.counter.open`. If a string is provided containing the path to a counter that does not exist, the counter is created with STRICT semantics. The counter value is atomically incremented. For performance reasons, use of counter handles is recommended. Find an example below.

<a name="lua.ref.msys.counter.inc.example1"></a>

**Example 15.53. msys.counter.inc example using counter handles**

```
require("msys.core");
require("msys.counter");

local mod = {};
local msys_emails = msys.counter.open("/sites/examples/messagesystems_correspondence");

function mod:validate_mailfrom(str, accept, vctx)
  str = tostring(str);
  if (string.find(str, "@messagesystems.com") != nil) then
    msys.counter.inc(msys_emails);
  end
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("counter", mod);
```

<a name="lua.ref.msys.counter.inc.example2"></a>

**Example 15.54. msys.counter.inc example using counter paths**

```
require("msys.core");
require("msys.counter");

local mod = {};

function mod:validate_mailfrom(str, accept, vctx)
  str = tostring(str);
  if (string.find(str, "@messagesystems.com") != nil) then
    msys.counter.inc("/sites/site_name/messagesystems_correspondence");
  end
return msys.core.VALIDATE_CONT;
end

msys.registerModule("counter", mod);
```

Enable this function with the statement `require('msys.counter');`.

<a name="idp26408832"></a>
## See Also

[msys.counter.open](lua.ref.msys.counter.open "msys.counter.open"), [msys.counter.add](lua.ref.msys.counter.add.php "msys.counter.add"), [msys.counter.reset](lua.ref.msys.counter.reset.php "msys.counter.reset"), [msys.counter.unlink](lua.ref.msys.counter.unlink.php "msys.counter.unlink"), [counter](console_commands.counter.php "counter")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.counter.add)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.counter.open.php) |
| msys.counter.add  | [Table of Contents](index) |  msys.counter.open |
