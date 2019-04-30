|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.client_set_timeout)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.curl.c_perform) |

<a name="lua.ref.curl.c_close"></a>
## Name

c:close — Close a curl object

<a name="idp15402800"></a>
## Synopsis

`require('curl');`

`c:close();`

<a name="idp15405760"></a>
## Description

Close a curl object created using `curl.new`; equivalent to `c = nil;`.

This function can be used to force closure of all resources associated with the curl object. It is called automatically when the curl object is garbage collected, so you will not typically need to call this function. After calling this function, a runtime error will result if you attempt to use the curl object.

<a name="lua.ref.curl.c_close.example"></a>

**Example 70.14. c:close example**

```
c = curl.new();
c:setopt(curl.OPT_URL, "http://example.com/path");
c:perform();
c:close();
```

<a name="idp15411312"></a>
### See Also

[curl.new](lua.ref.curl.new "curl.new")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.client_set_timeout)  | [Up](lua.function.details) |  [Next](lua.ref.curl.c_perform) |
| client:set_timeout  | [Table of Contents](index) |  c:perform |

