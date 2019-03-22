| [Prev](sieve.ref.ec_header_add)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_header_get) |

<a name="sieve.ref.ec_header_delete"></a>
## Name

ec_header_delete — remove a header from the current message

## Synopsis

`ec_header_delete` { *`field-name`* }

<a name="idp29830800"></a>
## Description

This will delete the named RFC2822 header from the current email message.

### Note

You should not use this function in the set_binding phases (regardless of version), and, as of Momentum 2.2.2.37, it will not work in these phases.

| [Prev](sieve.ref.ec_header_add)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_header_get) |
| ec_header_add  | [Table of Contents](index) |  ec_header_get |
