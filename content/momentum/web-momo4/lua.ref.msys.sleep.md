|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.runinpool)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.snmpTrap) |

<a name="lua.ref.msys.sleep"></a>
## Name

msys.sleep — When called in the scheduler thread, suspend the current session for the specified duration

<a name="idp16385984"></a>
## Synopsis

`msys.sleep(duration_in_seconds);`

`duration_in_seconds: number`<a name="idp16388976"></a>
## Description

When called in the scheduler thread, this function suspends the current session for the specified duration. When called in a secondary thread, or if called on the scheduler thread and suspension is not possible, this function blocks the calling thread for the specified duration in seconds.

<a name="lua.ref.msys.sleep.example"></a>

**Example 70.34. msys.sleep example**

`msys.sleep(0.2)`

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.runinpool)  | [Up](lua.function.details) |  [Next](lua.ref.msys.snmpTrap) |
| msys.runInPool  | [Table of Contents](index) |  msys.snmpTrap |

