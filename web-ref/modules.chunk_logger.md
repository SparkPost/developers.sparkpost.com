|     |     |     |
| --- | --- | --- |
| [Prev](modules.brightmail)  | Chapter 14. Modules Reference |  [Next](modules.cidrdb.php) |

## 14.15. chunk_logger – Asynchronous Logging

<a class="indexterm" name="idp18327504"></a>

**Configuration Change. ** This feature is available as beta in Momentum 3.6.5.

The `chunk_logger` module provides a safe interface for logging asynchronously from Lua, C, and C++.

Historically, the paniclog has been used for low-volume logging via **print()** in Lua, **ec_log** in Sieve++, or **ec_mod_debug()** or **log_error()** in C/C++. However, logging to the paniclog is not suitable for general debug logging or more than occassional debug logging.

Logging to the paniclog in the scheduler thread (the main thread) can limit throughput and cause watchdog kills. The scheduler thread's job is to multiplex file descriptors and execute timed events, handing off time-consuming tasks to other threads. Logging to the paniclog involves disk I/O, and writing to the paniclog in the scheduler thread may block its execution for a long time, thereby holding up other tasks in the scheduler thread and decreasing throughput. If enough data is logged to the paniclog in the scheduler thread, it may become so unresponsive to the watchdog process that the watchdog timeout triggers. The `chunk_logger` module does not have this limitation.

### 14.15.1. Configuration

`chunk_logger` is configured through the `ecelerity.conf` file with a stanza such as:

<a name="example.chunk_logger"></a>

**Example 14.23. chunk_logger module**

```
chunk_logger chunk_logger1
{
  destination = "/path/to/log/file"
}
```

You can specify the timestamp in a **strftime()** format, as in the following example:

<a name="example.chunk_logger.timestamp"></a>

**Example 14.24. Specifying the Timestamp**
{% raw %}
```
chunk_logger chunk_logger1
{
  timestamp_format = "%m:%d:%H:%M:%S"
  destination = "/path/to/log/file"
  add_newline = "true"
}
```
{% endraw %}
### Note

**add_newline** enables you to specify whether a new line is added automatically to every item of data that is logged. It defaults to `true`.

The module is in the `msys.beta.chunk_logger_int` namespace:

`msys.beta.chunk_logger_int.log("Hello World!")`
### 14.15.2. Lua Interface

The module `msys.ts.chunk_logger` and the function `msys.ts.chunk_logger.log()` provides the Lua interface, as shown by the following example:

<a name="example.chunk_logger.lua_interface"></a>

**Example 14.25. Lua Interface**

```
require("msys.beta.chunk_logger_int")

...

msys.beta.chunk_logger_int.log()
```

### 14.15.3. C Interface

The C interface uses Momentum's module hooks system to provide a callable hook point. `chunk_logger` provides an implementation of the hook point, as shown in the following example:

<a name="example.chunk_logger.c_interface"></a>

**Example 14.26. C Interface**

```
#include <module-hooks.h>
#include "hooks/chunk_logger/log.h"

...

call_chunk_logger_log_hook("default", buf, buflen);
```

### Note

"default" is specified here as the name of the log destination. Currently `chunk_logger` only supports one log destination, so this field is ignored. It is recommended that you pass "default" until different log destinations are supported.

|     |     |     |
| --- | --- | --- |
| [Prev](modules.brightmail)  | [Up](modules.php) |  [Next](modules.cidrdb.php) |
| 14.14. brightmail – Brightmail Module  | [Table of Contents](index) |  14.16. cidrdb – CIDRDB |
