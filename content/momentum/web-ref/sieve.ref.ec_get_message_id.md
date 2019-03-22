| [Prev](sieve.ref.ec_get_message_creation_time)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_get_message_mailfrom) |

<a name="sieve.ref.ec_get_message_id"></a>
## Name

ec_get_message_id — Returns the message's unique ID.

## Synopsis

`ec_get_message_id`

<a name="idp29649056"></a>
## Description

`ec_get_message_id` returns the unique (on this Momentum instance) ID of this message. This is the same value that is returned in the 250 OK response when a message is accepted by Momentum, and is related to the spool name of the message. This value also appears in the second (numbered 1) field of main and bounce log entries pertaining to this message. For more information see [Section E.1.1, “The `mainlog.ec` Format”](log_formats.version_3#log_formats.mainlog3 "E.1.1. The mainlog.ec Format") and [Section E.1.5, “The bounce_logger”](log_formats.version_3.php#log_formats.bouncelog3 "E.1.5. The bounce_logger").

| [Prev](sieve.ref.ec_get_message_creation_time)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_get_message_mailfrom) |
| ec_get_message_creation_time  | [Table of Contents](index) |  ec_get_message_mailfrom |
