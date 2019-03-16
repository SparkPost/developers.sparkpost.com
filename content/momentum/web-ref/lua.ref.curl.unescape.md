| [Prev](lua.ref.curl.new)  | 15.2. Lua Functions |  [Next](lua.ref.msys.core.dns_get_domain.php) |

<a name="lua.ref.curl.unescape"></a>
## Name

curl.unescape — Unescape URL encoding in strings

<a name="idp24092384"></a>
## Synopsis

`require('curl');`

`curl.unescape(str);`

`str: string`<a name="idp24095744"></a>
## Description

This function unescapes URL encoding in strings and is suitable for use when decomposing URLs.

<a name="lua.ref.curl.unescape.example"></a>

**Example 15.19. curl.unescape example**

`print(curl.unescape("abcd%24%25%5E%26%2A%28%29"));`

[Example 15.19, “curl.unescape example”](lua.ref.curl.unescape#lua.ref.curl.unescape.example "Example 15.19. curl.unescape example") outputs:

`abcd$%^&*()`<a name="idp24100688"></a>
### See Also

[curl.escape](lua.ref.curl.escape "curl.escape")

| [Prev](lua.ref.curl.new)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.core.dns_get_domain.php) |
| curl.new  | [Table of Contents](index) |  msys.core.dns_get_domain |
