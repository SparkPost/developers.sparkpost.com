|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.timer.at)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.validate.dk.get_responsible_domain) |

<a name="lua.ref.msys.timer.every"></a>
## Name

msys.timer.every — execute closure every interval

<a name="idp18550912"></a>
## Synopsis

`msys.timer.every(interval, closure, name);`

```
interval: number
closure: string
name: string, optional
```
<a name="idp18553952"></a>
## Description

The returned timer is already scheduled when the function returns; no additional schedule call is required. The returned object is a timer object with the following methods:

*   timer:stop() – cancel the timer

*   timer:start() – reschedule the timer

*   timer:name() – return the name used when the timer was created

### Warning

The `stop` method is not thread-safe. Make sure that you only call `timer:stop` from the scheduler thread.

`name` is an optional parameter that can be interrogated from the timer using `timer:name()`. The name is simply a label associated with the instance; it is not a unique identifier for the event and can not be used to locate an event by name.

The garbage collection handler of the timer object will implicitly stop the timer so that dangling references are prevented. As a consequence the following code is incorrect: `msys.timer.after(10, do_something)` since the return value will be collectible immediately and will likely cancel the timer before it fires. Likewise, the following will fail for the same reasons: `local timer = msys.timer.after(10, do_something)`. Instead, use a global variable, or something traceable from a stronger reference to keep your timer instance alive.

The timed event callback function is called from the scheduler thread; you should avoid blocking or lengthy operations.

<a name="lua.ref.msys.timer.every.example"></a>

**Example 70.64. msys.timer.every example**

```
require("msys.core");
require 'msys.timer';

rep = msys.timer.every(2, function ()
  print("rep: I am the 2 second repeating timer")
end, "repeater")
```

Enable this function with the statements `require('msys.timer');` and `require("msys.core");`.

<a name="idp18569744"></a>
## See Also

[msys.timer.at](lua.ref.msys.timer.at "msys.timer.at"), [msys.timer.after](lua.ref.msys.timer.after "msys.timer.after")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.timer.at)  | [Up](lua.function.details) |  [Next](lua.ref.msys.validate.dk.get_responsible_domain) |
| msys.timer.at  | [Table of Contents](index) |  msys.validate.dk.get_responsible_domain |

