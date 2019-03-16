| [Prev](sieve.ref.ec_header_postfix)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_host_fingerprint) |

<a name="sieve.ref.ec_header_prefix"></a>
## Name

ec_header_prefix — prepend to a header in the current message

## Synopsis

`ec_header_prefix` { *`field-name`* } { *`field-body`* }

<a name="idp29877856"></a>
## Description

This will find the header named ```<field-name>``` and should it exist, prepend the specified newtext to the field body of the header.

### Note

You should not use this function in the set_binding phases (regardless of version), and, as of Momentum 2.2.2.37, it will not work in these phases.

| [Prev](sieve.ref.ec_header_postfix)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_host_fingerprint) |
| ec_header_postfix  | [Table of Contents](index) |  ec_host_fingerprint |
