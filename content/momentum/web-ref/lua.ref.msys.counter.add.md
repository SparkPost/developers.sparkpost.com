|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.commtouch.diagnose)  | 15.2. Lua Functions |  [Next](lua.ref.msys.counter.inc.php) |

<a name="lua.ref.msys.counter.add"></a>
## Name

msys.counter.add — Add to the current value of the specified counter

<a name="idp26382144"></a>
## Synopsis

`msys.counter.add(object_or_path, delta);`

```
object_or_path: mixed
delta: number
```
<a name="idp26384832"></a>
## Description

The first argument is either a path to a counter (for example, `/sites/site_name/errors`) or a counter object that was returned by `msys.counter.open`. If a string is provided containing the path to a counter that does not exist, the counter is created with STRICT semantics. The second argument is atomically added to the current value of the counter.

Enable this function with the statement `require('msys.counter');`.

For a code example see [Example 15.55, “msys.counter.read example”](lua.ref.msys.counter.read#lua.ref.msys.counter.read.example "Example 15.55. msys.counter.read example").

<a name="idp26389616"></a>
## See Also

[msys.counter.reset](lua.ref.msys.counter.reset "msys.counter.reset"), [msys.counter.inc](lua.ref.msys.counter.inc.php "msys.counter.inc"), [msys.counter.open](lua.ref.msys.counter.open.php "msys.counter.open"), [msys.counter.unlink](lua.ref.msys.counter.unlink.php "msys.counter.unlink"), [counter](console_commands.counter.php "counter")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.commtouch.diagnose)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.counter.inc.php) |
| msys.commtouch.diagnose  | [Table of Contents](index) |  msys.counter.inc |
