| [Prev](lua.ref.msys.base64.decode)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.bounce.classify) |

<a name="lua.ref.msys.base64.encode"></a>
## Name

msys.base64.encode — Base64-encode a string

<a name="idp17578368"></a>
## Synopsis

`msys.base64.encode(original, fold, charset);`

```
original: mixed
fold: string, optional
charset: string, optional
```
<a name="idp17581408"></a>
## Description

`original` can be a string or a `msys.core:_ec_string`. This function returns a base64 encoded string. If `fold` is true, the encoded string is folded at every 76 bytes by inserting a `CRLF` after that position. By default, the character encoding for all text is UTF-8\. If you would like to convert the text to a different character encoding before it is base64 encoded, then specify that as `charset`.

Enable this function with the statement `require('msys.base64');`.

<a name="idp17586688"></a>
## See Also

[msys.base64.decode](lua.ref.msys.base64.decode "msys.base64.decode")

| [Prev](lua.ref.msys.base64.decode)  | [Up](lua.function.details) |  [Next](lua.ref.msys.bounce.classify) |
| msys.base64.decode  | [Table of Contents](index) |  msys.bounce.classify |

