| [Prev](lua.ref.msys.httpsrv.register)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.idn_utf8) |

<a name="lua.ref.msys.idn"></a>
## Name

msys.idn.to_idn — Attempts to convert the domain to the IDN format

<a name="idp16168576"></a>
## Synopsis

`msys.idn.to_idn(name);`

`name: string`<a name="idp16171088"></a>
## Description

**Configuration Change. ** This feature is available as beta in Momentum 4.2.

to_idn() assumes its argument to be a utf-8 formatted domain name. It attempts to convert the domain to the IDN format. If it is successful, it returns the ASCII version of the resulting IDN string (Note: the underlying encoding is unicode, but the characters are ASCII). If it fails, an error is returned.

<a name="msys.idn.to_idn.example"></a>

**Example 70.31. msys.idn example**

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

<a name="idp16177488"></a>
## See Also

[msys.idn.to_utf8](lua.ref.msys.idn_utf8 "msys.idn.to_utf8")

| [Prev](lua.ref.msys.httpsrv.register)  | [Up](lua.function.details) |  [Next](lua.ref.msys.idn_utf8) |
| msys.httpsrv.register  | [Table of Contents](index) |  msys.idn.to_utf8 |

