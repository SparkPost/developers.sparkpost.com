| [Prev](sieve.ref.ec_mem_usage)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_mime_parts) |

<a name="sieve.ref.ec_mime_boundary_create"></a>
## Name

ec_mime_boundary_create — return a string to be used as a boundary when creating a MIME message

## Synopsis

`ec_mime_boundary_create`

<a name="idp30280464"></a>
## Description

`ec_mime_boundary_create` returns a string that can be used as a boundary when creating a MIME message. It doesn't include the `--` required before or after the boundary string.

Please see [ec_rfc3464_delivery_status](sieve.ref.ec_rfc3464_delivery_status "ec_rfc3464_delivery_status") for an usage example.

| [Prev](sieve.ref.ec_mem_usage)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_mime_parts) |
| ec_mem_usage  | [Table of Contents](index) |  ec_mime_parts |
