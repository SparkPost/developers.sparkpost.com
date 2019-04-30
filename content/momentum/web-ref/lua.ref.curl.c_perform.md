|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.curl.c_close)  | 15.2. Lua Functions |  [Next](lua.ref.curl.c_setopt.php) |

<a name="lua.ref.curl.c_perform"></a>
## Name

c:perform — Perform the file transfer

<a name="idp23859872"></a>
## Synopsis

`require('curl');`

`c:perform();`

<a name="idp23862544"></a>
## Description

After all `setopt` calls have been made, perform a file transfer.

<a name="lua.ref.curl.c_perform.example"></a>

**Example 15.15. c:perform example**

```
c = curl.new();
c:setopt(curl.OPT_URL, "http://example.com/index");
c:setopt(curl.OPT_WRITEFUNCTION, function(userdata, datastring) print(datastring); »
  return string.len(datastring); end);
c:perform();
```

<a name="idp23866928"></a>
### See Also

See [c:setopt](lua.ref.curl.c_setopt "c:setopt") for an explanation of the parameters passed to `setopt`.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.curl.c_close)  | [Up](lua.function.details.php) |  [Next](lua.ref.curl.c_setopt.php) |
| c:close  | [Table of Contents](index) |  c:setopt |
