| [Prev](lua.ref.msys.idn)  | 15.2. Lua Functions |  [Next](lua.ref.msys.lock.php) |

<a name="lua.ref.msys.idn_utf8"></a>
## Name

msys.idn.to_utf8 — Converts an IDN formatted string to unicode

<a name="idp24515552"></a>
## Synopsis

`msys.idn.to_utf8(name);`

`name: string`<a name="idp24517840"></a>
## Description

**Configuration Change. ** This feature is available as beta in Momentum 3.6.12.

to_utf8() attempts to convert an IDN formatted string to unicode. If it is successful, it returns the result. If it fails, an error is returned.

<a name="msys.idn.to_idn_utf8.example"></a>

**Example 15.31. msys.idn example**

```
local newMsg = msys.core.ec_message_new(nil)
local headers = {}
local parts = {}

parts['text/plain'] = "this is a sample message"
headers['from'] = [[From: “John Doe =?utf-8?Q?=28?=" <弗兰克@example.com>]]
newMsg:build(headers, parts, {})

local domains = newMsg:address_header("From", "domain");
local idn = msys.idn.to_idn(domains[1]);
local utf8 = msys.idn.to_utf8(idn);
print ("Original: " .. domains[1] .. " IDN: " .. idn .. " UTF8: " .. utf8);
```

This function wil help facilitate the translation of international characters to and from unicode in order to support internationalized domain names and international email.

<a name="idp24524544"></a>
## See Also

[msys.idn.to_idn](lua.ref.msys.idn "msys.idn.to_idn")

| [Prev](lua.ref.msys.idn)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.lock.php) |
| msys.idn.to_idn  | [Table of Contents](index) |  msys.lock |
