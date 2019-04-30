|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.curl.c_setopt)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.curl.new) |

<a name="lua.ref.curl.escape"></a>
## Name

curl.escape — URL encode a string

<a name="idp15648032"></a>
## Synopsis

`require('curl');`

`curl.escape(str);`

`str: string`<a name="idp15651712"></a>
## Description

URL encode a string; useful when building an URL.

<a name="lua.ref.curl.escape.example"></a>

**Example 70.17. curl.escape example**

`print(curl.escape("abcd$%^&*()"))`

[Example 70.17, “curl.escape example”](lua.ref.curl.escape#lua.ref.curl.escape.example "Example 70.17. curl.escape example") outputs the following:

`abcd%24%25%5E%26%2A%28%29`<a name="idp15656992"></a>
### See Also

[curl.unescape](lua.ref.curl.unescape "curl.unescape")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.curl.c_setopt)  | [Up](lua.function.details) |  [Next](lua.ref.curl.new) |
| c:setopt  | [Table of Contents](index) |  curl.new |

