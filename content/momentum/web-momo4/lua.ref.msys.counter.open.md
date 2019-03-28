|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.counter.inc)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.counter.read) |

<a name="lua.ref.msys.counter.open"></a>
## Name

msys.counter.open — Create a counter object

<a name="idp17815792"></a>
## Synopsis

`msys.counter.open(counter_path, semantics);`

```
counter_path: string
semantics: number, optional
```
<a name="idp17818816"></a>
## Description

For performance it is always recommended that counter handles be used rather than strings.

Momentum generic counters are scalable low latency counters that are identified by a unique path in a counter namespace. This namespace may be exported to other facilities for visualization, analysis and more. The namespace hierarchy is defined as follows.

*   `/` – reserved for Message Systems use.

*   `/vendor/<name>` – reserved for vendors. For example, vendor `Foo` may reserve `/vendor/foo`.

*   `/site/<name>` – reserved for clients. For example, client `CompanyA` may use `/site/companya`.

Lua counters are integrated into this system. Counters may be opened with either `msys.counter.STRICT` or `msys.counter.RELAXED` semantics. Strict semantics mean all counter handles will update the same value in memory. Relaxed means all counter handles update their own values in memory. Those values are then aggregated when someone does a read operation on the counter.

If a counter value is updated mostly in a single thread on one processor then the STRICT semantics are recommended. Also, for for policy-level logic, STRICT semantics are recommended as the counters may later be augmented to support atomic fetch and phi operations. If a counter is often updated across different threads or processors then RELAXED semantics are recommended. STRICT semantics provide almost perfect read scalability and RELAXED semantics provide almost perfect update scalability. For a graphic representation see below:

<a name="fig.console_command.counter"></a>

**Figure 70.1. Counter semantics**

![Counter semantics](images/counter.png)

**Note about [Figure 70.1, “Counter semantics”](lua.ref.msys.counter.open#fig.console_command.counter "Figure 70.1. Counter semantics"). ** In this figure `update` refers to increment and add operations. The sample machine used two Intel® Xeon® CPU E5530 at 2.4GHz with four cores each.

For a code example see [Example 70.54, “msys.counter.read example”](lua.ref.msys.counter.read#lua.ref.msys.counter.read.example "Example 70.54. msys.counter.read example").

Enable this function with the statement `require('msys.counter');`.

<a name="idp17840368"></a>
## See Also

[msys.counter.reset](lua.ref.msys.counter.reset "msys.counter.reset"), [msys.counter.add](lua.ref.msys.counter.add "msys.counter.add"), [msys.counter.inc](lua.ref.msys.counter.inc "msys.counter.inc"), [msys.counter.unlink](lua.ref.msys.counter.unlink "msys.counter.unlink")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.counter.inc)  | [Up](lua.function.details) |  [Next](lua.ref.msys.counter.read) |
| msys.counter.inc  | [Table of Contents](index) |  msys.counter.read |

