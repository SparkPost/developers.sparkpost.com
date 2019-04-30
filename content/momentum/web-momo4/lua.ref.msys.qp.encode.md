|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.qp.decode)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.rfc3464.compute_delivery_status) |

<a name="lua.ref.msys.qp.encode"></a>
## Name

msys.qp.encode — Quoted-printable encode a string

<a name="idp18353808"></a>
## Synopsis

`msys.qp.encode(original[, charset, dotstuffing]);`

```
original: mixed
charset: string, optional
dotstuffing: boolean
```
<a name="idp18356864"></a>
## Description

`original` can be a string, `msys.core:_ec_string`, or `msys.core:_io_object`. Use `charset` to convert the text to a different character encoding before it is quoted-printable encoded. Use `dotstuffing` to specify whether or not the encoded text will be dot stuffed if qp encoding creates new line breaks. Encoded text is returned in a string.

Enable this function with the statement `require('msys.qp');`.

<a name="idp18362096"></a>
## See Also

[msys.qp.decode](lua.ref.msys.qp.decode "msys.qp.decode")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.qp.decode)  | [Up](lua.function.details) |  [Next](lua.ref.msys.rfc3464.compute_delivery_status) |
| msys.qp.decode  | [Table of Contents](index) |  msys.rfc3464.compute_delivery_status |

