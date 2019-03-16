| [Prev](lua.ref.msys.counter.reset)  | 15.2. Lua Functions |  [Next](lua.ref.msys.db.fetch_row.php) |

<a name="lua.ref.msys.counter.unlink"></a>
## Name

msys.counter.unlink — Unlink a counter

<a name="idp26473824"></a>
## Synopsis

`msys.counter.unlink(counter_path);`

`counter_path: string`<a name="idp26476464"></a>
## Description

This removes the counter from the global counter index. The handle will remain in the Lua counter cache for 5 minutes by default.

For a code example see [Example 15.55, “msys.counter.read example”](lua.ref.msys.counter.read#lua.ref.msys.counter.read.example "Example 15.55. msys.counter.read example").

Enable this function with the statement `require('msys.counter');`.

<a name="idp26480720"></a>
## See Also

[msys.counter.inc](lua.ref.msys.counter.inc "msys.counter.inc"), [msys.counter.add](lua.ref.msys.counter.add.php "msys.counter.add"), [msys.counter.open](lua.ref.msys.counter.open.php "msys.counter.open"), [msys.counter.reset](lua.ref.msys.counter.reset.php "msys.counter.reset"), [counter](console_commands.counter.php "counter")

| [Prev](lua.ref.msys.counter.reset)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.db.fetch_row.php) |
| msys.counter.reset  | [Table of Contents](index) |  msys.db.fetch_row |
