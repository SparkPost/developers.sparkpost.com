|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.timer.after)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.timer.every) |

<a name="lua.ref.msys.timer.at"></a>
## Name

msys.timer.at — execute closure at a given time

<a name="idp18529248"></a>
## Synopsis

`msys.timer.at(time, closure, name);`

```
time: number
closure: string
name: string, optional
```
<a name="idp18532256"></a>
## Description

The returned timer is already scheduled when the function returns; no additional schedule call is required. The returned object is a timer object with the following methods:

*   timer:stop() – cancel the timer

*   timer:start() – reschedule the timer

*   timer:name() – return the name used when the timer was created

### Warning

The `stop` method is not thread-safe. Make sure that you only call `timer:stop` from the scheduler thread.

`name` is an optional parameter that can be interrogated from the timer using `timer:name()`. The name is simply a label associated with the instance; it is not a unique identifier for the event and can not be used to locate an event by name.

The garbage collection handler of the timer object will implicitly stop the timer so that dangling references are prevented. As a consequence the following code is incorrect: `msys.timer.after(10, do_something)` since the return value will be collectible immediately and will likely cancel the timer before it fires. Likewise, the following will fail for the same reasons: `local timer = msys.timer.after(10, do_something)`. Instead, use a global variable, or something traceable from a stronger reference to keep your timer instance alive.

Enable this function with the statements `require('msys.timer');` and `require("msys.core");`.

<a name="idp18544800"></a>
## See Also

[msys.timer.after](lua.ref.msys.timer.after "msys.timer.after"), [msys.timer.every](lua.ref.msys.timer.every "msys.timer.every")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.timer.after)  | [Up](lua.function.details) |  [Next](lua.ref.msys.timer.every) |
| msys.timer.after  | [Table of Contents](index) |  msys.timer.every |

