|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.counter.read)  | 15.2. Lua Functions |  [Next](lua.ref.msys.counter.unlink.php) |

<a name="lua.ref.msys.counter.reset"></a>
## Name

msys.counter.reset — Reset a counter

<a name="idp26460768"></a>
## Synopsis

`msys.counter.reset(object_or_path);`

`object_or_path: mixed`<a name="idp26463408"></a>
## Description

Resets the given counter object or counter associated with the given path to `0`. If the supplied counter path does not have a counter associated with it, then it is created with strict semantics.

Enable this function with the statement `require('msys.counter');`.

<a name="idp26466560"></a>
## See Also

[msys.counter.inc](lua.ref.msys.counter.inc "msys.counter.inc"), [msys.counter.add](lua.ref.msys.counter.add.php "msys.counter.add"), [msys.counter.open](lua.ref.msys.counter.open.php "msys.counter.open"), [msys.counter.unlink](lua.ref.msys.counter.unlink.php "msys.counter.unlink"), [counter](console_commands.counter.php "counter")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.counter.read)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.counter.unlink.php) |
| msys.counter.read  | [Table of Contents](index) |  msys.counter.unlink |
