| [Prev](sieve.ref.ec_add)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_base64_encode) |

<a name="sieve.ref.ec_base64_decode"></a>
## Name

ec_base64_decode — decode base64 encoded text

## Synopsis

`ec_base64_decode` { *`coded_text`* }

<a name="idp29181504"></a>
## Description

Convert base 64 encoded text to plain text.

Sieve scripts using `base64_decode` can be used in any phase.

<a name="example.ec_base64_encode"></a>

**Example 16.26. ec_base64_encode example**

`$dec = ec_base64_decode $enc;`
<a name="idp29186944"></a>
## See Also

[ec_base64_encode](sieve.ref.ec_base64_encode "ec_base64_encode")

| [Prev](sieve.ref.ec_add)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_base64_encode) |
| ec_add  | [Table of Contents](index) |  ec_base64_encode |
