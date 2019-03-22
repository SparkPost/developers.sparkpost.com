| [Prev](sieve.ref.ec_header_get)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_header_prefix) |

<a name="sieve.ref.ec_header_postfix"></a>
## Name

ec_header_postfix — append to a header of the current message

## Synopsis

`ec_header_postfix` { *`field-name`* } { *`field-body`* }

<a name="idp29863280"></a>
## Description

This will find the header named ```<field-name>``` and should it exist, append the specified newtext to the field body of the header.

### Note

You should not use this function in the set_binding phases (regardless of version), and, as of Momentum 2.2.2.37, it will not work in these phases.

| [Prev](sieve.ref.ec_header_get)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_header_prefix) |
| ec_header_get  | [Table of Contents](index) |  ec_header_prefix |
