| [Prev](sieve.ref.ec_get_message_received_via)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_get_message_size) |

<a name="sieve.ref.ec_get_message_received_via_port"></a>
## Name

ec_get_message_received_via_port — Return the local port that the message was received on.

## Synopsis

`ec_get_message_received_via_port`

<a name="idp29772160"></a>
## Description

`ec_get_message_received_via_port` returns the local port on which the message was received. It takes the form of an integer.

In the following script, the received_via_port is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_received_via_port"></a>

**Example 16.54. ec_get_message_received_via_port example**

```
$p = ec_get_message_received_via_port;
if not ec_test :is "${p}" "$local_port" {
 ec_action 550 "ec_get_message_received_via_port failed.  Expected $local_port, got ${p}";
}
```

| [Prev](sieve.ref.ec_get_message_received_via)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_get_message_size) |
| ec_get_message_received_via  | [Table of Contents](index) |  ec_get_message_size |
