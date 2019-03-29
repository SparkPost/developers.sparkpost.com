|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_gauge_cache)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_get_message_creation_time) |

<a name="sieve.ref.ec_get_message_code"></a>
## Name

ec_get_message_code — Returns the current SMTP status code for a message

## Synopsis

`ec_get_message_code`

<a name="idp29617328"></a>
## Description

`ec_get_message_code` returns the current SMTP code and description associated with a message. The code reflects the status of the message from the point of view of the mail system. It has the form of an SMTP response; a three-digit response code followed by a (possibly multiline) textual description, terminated with canonical line endings (CRLF).

If Momentum were to construct an out-of-band bounce message, this code is used as the reason.

In the following script, the codes are checked on each message and logged.

<a name="example.ec_get_message_code"></a>

**Example 16.45. ec_get_message_code example**

```
$log = ec_get_message_code;
ec_log $log;
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_gauge_cache)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_get_message_creation_time) |
| ec_gauge_cache  | [Table of Contents](index) |  ec_get_message_creation_time |
