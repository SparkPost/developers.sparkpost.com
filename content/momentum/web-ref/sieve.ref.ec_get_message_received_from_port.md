| [Prev](sieve.ref.ec_get_message_received_from)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_get_message_received_via) |

<a name="sieve.ref.ec_get_message_received_from_port"></a>
## Name

ec_get_message_received_from_port — Return the port that the message was received from.

## Synopsis

`ec_get_message_received_from_port`

<a name="idp29741008"></a>
## Description

`ec_get_message_received_from_port` returns the port from which the message was received. It takes the form of an integer.

In the following script, the received_from_port is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_received_from_port"></a>

**Example 16.52. ec_get_message_received_from_port example**

```
$p = ec_get_message_received_from_port;
if not ec_test :is "${p}" "$port" {
 ec_action 550 "ec_get_message_received_from_port failed.  Expected $port, got ${p}";
}
```

| [Prev](sieve.ref.ec_get_message_received_from)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_get_message_received_via) |
| ec_get_message_received_from  | [Table of Contents](index) |  ec_get_message_received_via |
