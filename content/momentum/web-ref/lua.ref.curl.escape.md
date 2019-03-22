| [Prev](lua.ref.curl.c_setopt)  | 15.2. Lua Functions |  [Next](lua.ref.curl.new.php) |

<a name="lua.ref.curl.escape"></a>
## Name

curl.escape — URL encode a string

<a name="idp24067280"></a>
## Synopsis

`require('curl');`

`curl.escape(str);`

`str: string`<a name="idp24070640"></a>
## Description

URL encode a string; useful when building an URL.

<a name="lua.ref.curl.escape.example"></a>

**Example 15.17. curl.escape example**

`print(curl.escape("abcd$%^&*()"))`

[Example 15.17, “curl.escape example”](lua.ref.curl.escape#lua.ref.curl.escape.example "Example 15.17. curl.escape example") outputs the following:

`abcd%24%25%5E%26%2A%28%29`<a name="idp24075584"></a>
### See Also

[curl.unescape](lua.ref.curl.unescape "curl.unescape")

| [Prev](lua.ref.curl.c_setopt)  | [Up](lua.function.details.php) |  [Next](lua.ref.curl.new.php) |
| c:setopt  | [Table of Contents](index) |  curl.new |
