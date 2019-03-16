| [Prev](lua.ref.msys.av.scan_part)  | 15.2. Lua Functions |  [Next](lua.ref.msys.base64.encode.php) |

<a name="lua.ref.msys.base64.decode"></a>
## Name

msys.base64.decode — Decode a base64 encoded string

<a name="idp26188336"></a>
## Synopsis

`msys.base64.decode(encoded_text, charset);`

```
encoded_text: string
charset: string, optional
```
<a name="idp26191072"></a>
## Description

`encoded_text` is a base64 encoded string. This function returns the decoded bytes in a string. If the input cannot be decoded, it raises an error. By default, the character encoding for decoded text is UTF-8\. If the original text is not UTF-8, its character encoding must be specified using `charset` in order for the decoded text returned from this function to be UTF-8.

Enable this function with the statement `require('msys.base64');`.

<a name="idp26194816"></a>
## See Also

[msys.base64.encode](lua.ref.msys.base64.encode "msys.base64.encode")

| [Prev](lua.ref.msys.av.scan_part)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.base64.encode.php) |
| msys.av.scan_part  | [Table of Contents](index) |  msys.base64.encode |
