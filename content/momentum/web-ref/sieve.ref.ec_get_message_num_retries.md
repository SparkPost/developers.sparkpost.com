| [Prev](sieve.ref.ec_get_message_mailfrom)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_get_message_protocol) |

<a name="sieve.ref.ec_get_message_num_retries"></a>
## Name

ec_get_message_num_retries — Return the num_retries of the current message.

## Synopsis

`ec_get_message_num_retries`

<a name="idp29678928"></a>
## Description

`ec_get_message_num_retries` returns the number of retries the current message has had. It returns this as an integer..

In the following script, the num_retries is checked and if a retry has occur, the message is permanently failed.

<a name="example.ec_get_message_num_retries"></a>

**Example 16.48. ec_get_message_num_retries example**

```
$n = ec_get_message_num_retries;
if not ec_test :is "${n}" "0" {
  ec_action 550 "ec_get_message_num_retries failed.  Expected 0, got ${n}";
}
```

| [Prev](sieve.ref.ec_get_message_mailfrom)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_get_message_protocol) |
| ec_get_message_mailfrom  | [Table of Contents](index) |  ec_get_message_protocol |
