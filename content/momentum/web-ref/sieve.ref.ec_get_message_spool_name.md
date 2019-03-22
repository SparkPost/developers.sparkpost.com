| [Prev](sieve.ref.ec_get_message_size)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_header_add) |

<a name="sieve.ref.ec_get_message_spool_name"></a>
## Name

ec_get_message_spool_name — Returns the message's spool filename.

## Synopsis

`ec_get_message_spool_name`

<a name="idp29802960"></a>
## Description

`ec_get_message_spool_name` returns the base filename to which this message has been or will be spooled, unless it is handled by an alternate IO module. The spool format is opaque, and a message lives in more than one file, so this function is only useful for debugging.

| [Prev](sieve.ref.ec_get_message_size)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_header_add) |
| ec_get_message_size  | [Table of Contents](index) |  ec_header_add |
