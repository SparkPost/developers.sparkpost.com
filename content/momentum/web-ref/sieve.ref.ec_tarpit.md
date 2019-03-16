| [Prev](sieve.ref.ec_sub)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_test) |

<a name="sieve.ref.ec_tarpit"></a>
## Name

ec_tarpit — impose a time penalty

## Synopsis

`ec_tarpit` { *`seconds`* } [ *`counter`* ]

<a name="idp30619264"></a>
## Description

This instructs Momentum that the SMTP session should be put on hold for the specified number of seconds.

The optional counter string is used to count the number of hits for this particular action; if omitted, the script filename and line number will be assumed. You can see the hit count via **ec_console** using the **sieve:*`sieve1`* stats**       command.

| [Prev](sieve.ref.ec_sub)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_test) |
| ec_sub  | [Table of Contents](index) |  ec_test |
