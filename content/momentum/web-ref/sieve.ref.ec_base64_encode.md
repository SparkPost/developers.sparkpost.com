| [Prev](sieve.ref.ec_base64_decode)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_bounce_classify) |

<a name="sieve.ref.ec_base64_encode"></a>
## Name

ec_base64_encode — base64 encode text

## Synopsis

`ec_base64_encode` { *`plain_text`* }

<a name="idp29199936"></a>
## Description

Convert plain text to a base 64 representation.

Sieve scripts using `ec_base64_encode` can be used in any phase.

<a name="example.ec_base64"></a>

**Example 16.27. ec_base64_encode example**

`$enc = ec_base64_encode $plain;`
<a name="idp29205424"></a>
## See Also

[ec_base64_decode](sieve.ref.ec_base64_decode "ec_base64_decode")

| [Prev](sieve.ref.ec_base64_decode)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_bounce_classify) |
| ec_base64_decode  | [Table of Contents](index) |  ec_bounce_classify |
