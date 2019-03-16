| [Prev](lua.ref.msys.counter.open)  | 15.2. Lua Functions |  [Next](lua.ref.msys.counter.reset.php) |

<a name="lua.ref.msys.counter.read"></a>
## Name

msys.counter.read — Read the specified counter

<a name="idp26442256"></a>
## Synopsis

`msys.counter.read(object_or_path);`

`object_or_path: mixed`<a name="idp26444944"></a>
## Description

Returns the current integer value of the given counter object or path. For example, msys.counter.read("/sites/example/errors") and msys.counter.read(c) are valid (where c was a successful return value of msys.counter.open).

<a name="lua.ref.msys.counter.read.example"></a>

**Example 15.55. msys.counter.read example**

```
require("msys.core");
require("msys.counter");

local mod = {};
local ct = msys.counter.open("/lua/test");

function mod:validate_mailfrom(str, accept, vctx)
  str = tostring(str);
  if (string.find(str, "count@test.example.com") != nil) then
    msys.counter.inc(ct);
  elseif (string.find(str, "blargh@test.example.com") != nil) then
    c = msys.counter.open("/lua/blargh", msys.counter.RELAXED);
    msys.counter.add(c, 1024);
  elseif (string.find(str, "blarghstring@test.example.com") != nil) then
    msys.counter.add("/lua/blargh", 3);
  elseif (string.find(str, "blarghinc@test.example.com") != nil) then
    msys.counter.inc("/lua/blargh");
  elseif (string.find(str, "unlink@test.example.com") != nil) then
    msys.counter.unlink("/lua/blargh");
  elseif (string.find(str, "readname@test.example.com") != nil) then
    c = msys.counter.open("/readname");
    msys.counter.add(c, msys.counter.read("/lua/blargh"));
  elseif (string.find(str, "readcounter@test.example.com") != nil) then
    c = msys.counter.open("/readcounter");
    msys.counter.add(c, msys.counter.read(msys.counter.open("/lua/blargh")));
  elseif (string.find(str, "resetname@test.example.com") != nil) then
    msys.counter.reset("/lua/blargh");
  elseif (string.find(str, "resetcounter@test.example.com") != nil) then
    c = msys.counter.open("/lua/test");
    msys.counter.reset(c);
  end

  return msys.core.VALIDATE_CONT;
end

msys.registerModule("counter", mod);
```

Enable this function with the statement `require('msys.counter');`.

<a name="idp26452928"></a>
## See Also

[msys.counter.open](lua.ref.msys.counter.open "msys.counter.open"), [msys.counter.add](lua.ref.msys.counter.add.php "msys.counter.add"), [msys.counter.reset](lua.ref.msys.counter.reset.php "msys.counter.reset"), [msys.counter.unlink](lua.ref.msys.counter.unlink.php "msys.counter.unlink"), [msys.counter.inc](lua.ref.msys.counter.inc.php "msys.counter.inc"), [counter](console_commands.counter.php "counter")

| [Prev](lua.ref.msys.counter.open)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.counter.reset.php) |
| msys.counter.open  | [Table of Contents](index) |  msys.counter.reset |
