| [Prev](lua.ref.msgpart_unlink)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.cast) |

<a name="lua.ref.msys.core.io_wrapper_open"></a>
## Name

msys.core.io_wrapper_open — Open a handle to a resource

<a name="idp16010912"></a>
## Synopsis

`msys.core.io_wrapper_open(filename, options, mode);`

```
filename: string
options: numeric
mode: numeric
```
<a name="idp16013504"></a>
## Description

This function opens a resource and returns a handle to it. For the methods that can be used with this file handle see [The Simple I/O Model](http://www.lua.org/pil/21.1.html).

Valid `options` are the options used with the Linux `open(3)` function such as: `O_RDONLY, O_RDRW, O_BINARY, O_CREAT, O_APPEND, O_WRONLY`. Any combination of these flags is valid.

Mode is an octal number indicating the file mode.

### Warning

Writing to a file is a blocking call; If you are creating text logs or jlog files be sure to execute write calls to files opened using `msys.core.io_wrapper_open` in a separate thread. An example follows.

<a name="lua.ref.msys.core.io_wrapper_open.example"></a>

**Example 70.29. msys.core.io_wrapper_open**

```
...
local FLAGS = msys.core.O_CREAT | msys.core.O_APPEND | msys.core.O_WRONLY;
local text_log_data = "This,Is,A,Test,Line\n";
-- Write to text log file in async thread
msys.runInPool('LUA_TXT_LOGS', function()
  local text_log = msys.core.io_wrapper_open(mod["text_log_file.csv"], FLAGS, 0644);
  if not text_log then
    print("ERROR: could not open text log file");
    return;
  end
  text_log:write(text_log_data, #text_log_data);
  text_log = nil;
  end, true);
```

The code shown in [Example 70.29, “msys.core.io_wrapper_open”](lua.ref.msys.core.io_wrapper_open#lua.ref.msys.core.io_wrapper_open.example "Example 70.29. msys.core.io_wrapper_open") assumes that a separate threadpool has been configured in `ecelerity.conf` in the following way:

```
# Thread pool for Lua custom logs
threadpool "LUA_TXT_LOGS" { concurrency = 10 }
```

For more information about threadpools see [threadpool](conf.ref.threadpool "threadpool").

**Bitwise Operators**

To make it easier to work with libraries that use bitmasks as part of their API, bitwise logical operators are enabled as detailed below. The bitwise operators first convert their numeric operands to an integer, apply the operator and then generate a standard Lua number result.

*   `a & b` – bitwise AND, uses the __and metatable event (if defined)

*   `a | b` – bitwise OR (__or)

*   `a ^^ b` – bitwise XOR (__xor)

*   `a << 1` – bitwise shift left (__shl)

*   `a >> 1` – bitwise shift right (__shr)

*   `~a` – bitwise negation (__not)

*   `a \ 2` – integer division (__intdiv)

<a name="idp16037136"></a>
## See Also

[msys.runInPool](lua.ref.msys.runinpool "msys.runInPool")

| [Prev](lua.ref.msgpart_unlink)  | [Up](lua.function.details) |  [Next](lua.ref.msys.cast) |
| msgpart:unlink  | [Table of Contents](index) |  msys.cast |

