| [Prev](sieve.ref.eleven_scan)  | 16.2. Sieve Function Details |  [Next](sieve.ref.generate_mail_raw) |

<a name="sieve.ref.envelope"></a>
## Name

envelope — return the envelope sender or recipient

## Synopsis

`$recip = envelope "to";`

`$sender = envelope "from";`

`$sender_domain = envelope :domain "from";`

<a name="idp30844704"></a>
## Description

Returns the envelope sender or recipient into a variable. You may use the `:localpart`, `:domain`, `:user` and `:detail` subaddressing tags to obtain the corresponding parts of the address.

<a name="idp30848528"></a>
## See Also

[address](sieve.ref.address "address").

| [Prev](sieve.ref.eleven_scan)  | [Up](sieve.ref.files) |  [Next](sieve.ref.generate_mail_raw) |
| eleven_scan  | [Table of Contents](index) |  generate_mail_raw |
