| [Prev](lua.ref.msys.qp.decode)  | 15.2. Lua Functions |  [Next](lua.ref.msys.rfc3464.compute_delivery_status.php) |

<a name="lua.ref.msys.qp.encode"></a>
## Name

msys.qp.encode — Quoted-printable encode a string

<a name="idp26896752"></a>
## Synopsis

`msys.qp.encode(original, charset);`

```
original: mixed
charset: string, optional
```
<a name="idp26899472"></a>
## Description

`original` can be a string or a `msys.core:_ec_string`. By default, the character encoding for all text is UTF-8\. If you would like to convert the text to a different character encoding before it is quoted-printable encoded, then specify a `charset`.

Enable this function with the statement `require('msys.qp');`.

<a name="idp26903520"></a>
## See Also

[msys.qp.decode](lua.ref.msys.qp.decode "msys.qp.decode")

| [Prev](lua.ref.msys.qp.decode)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.rfc3464.compute_delivery_status.php) |
| msys.qp.decode  | [Table of Contents](index) |  msys.rfc3464.compute_delivery_status |
