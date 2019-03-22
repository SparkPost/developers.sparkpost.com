| [Prev](sieve.ref.ec_config)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_div) |

<a name="sieve.ref.ec_disconnect"></a>
## Name

ec_disconnect — set SMTP status and close the SMTP connection

## Synopsis

`ec_disconnect` { *`smtp-code`* } { *`reason`* } [ *`counter`* ]

<a name="idp29316784"></a>
## Description

This takes the same argument and performs the same action as ec_action except that subsequent to sending the response to the remote MTA, the SMTP session is terminated. NOTE: to be strictly RFC compliant, the SMTP code here should almost always be 421.

The optional counter string is used to count the number of hits for this particular action; if omitted, the script filename and line number will be assumed. You can see the hit count via the web console or via `ec_console` using the `sieve stats` command.

This is a terminal action; no further Sieve rules will be run for the current message in the current phase.

| [Prev](sieve.ref.ec_config)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_div) |
| ec_config  | [Table of Contents](index) |  ec_div |
