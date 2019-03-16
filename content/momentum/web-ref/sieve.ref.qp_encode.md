| [Prev](sieve.ref.pe2_mark_unsubscribed)  | 16.2. Sieve Function Details |  [Next](sieve.ref.redirect) |

<a name="sieve.ref.qp_encode"></a>
## Name

qp_encode — quoted-printable encode a string

## Synopsis

`qp_encode` { *`string`* } [ *`charset`* ]

<a name="idp31093824"></a>
## Description

Quoted-printable encode all the encodable characters in a string and return the result. A character encoding may be specified as an optional second argument.

<a name="example.ap_encode"></a>

**Example 16.118. qp_encode example**

```
$encoded = qp_encode "Postal Engine ®";
  $encoded2 = qp_encode "Postal Engine ®" "ISO-8859-1";
  ec_log "encoded: ${encoded}";
  ec_log "encoded2: ${encoded2}";
```

| [Prev](sieve.ref.pe2_mark_unsubscribed)  | [Up](sieve.ref.files) |  [Next](sieve.ref.redirect) |
| pe2_mark_unsubscribed  | [Table of Contents](index) |  redirect |
