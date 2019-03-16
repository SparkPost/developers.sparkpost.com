| [Prev](lua.ref.curl.c_close)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.curl.c_setopt) |

<a name="lua.ref.curl.c_perform"></a>
## Name

c:perform — Perform the file transfer

<a name="idp15417824"></a>
## Synopsis

`require('curl');`

`c:perform();`

<a name="idp15420784"></a>
## Description

After all `setopt` calls have been made, perform a file transfer.

<a name="lua.ref.curl.c_perform.example"></a>

**Example 70.15. c:perform example**

```
c = curl.new();
c:setopt(curl.OPT_URL, "http://example.com/index");
c:setopt(curl.OPT_WRITEFUNCTION, function(userdata, datastring) print(datastring); »
  return string.len(datastring); end);
c:perform();
```

<a name="idp15425232"></a>
### See Also

See [c:setopt](lua.ref.curl.c_setopt "c:setopt") for an explanation of the parameters passed to `setopt`.

| [Prev](lua.ref.curl.c_close)  | [Up](lua.function.details) |  [Next](lua.ref.curl.c_setopt) |
| c:close  | [Table of Contents](index) |  c:setopt |

