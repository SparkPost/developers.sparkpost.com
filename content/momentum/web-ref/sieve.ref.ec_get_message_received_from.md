|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_get_message_rcptto)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_get_message_received_from_port) |

<a name="sieve.ref.ec_get_message_received_from"></a>
## Name

ec_get_message_received_from — Return the IP address that the message was received from

## Synopsis

`ec_get_message_received_from`

<a name="idp29725504"></a>
## Description

`ec_get_message_received_from` returns the IP address that the message was sent from. It returns the address in dot-decimal notation, 192.126.1.20 for example.

In the following script, the received_from is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_received_from"></a>

**Example 16.51. ec_get_message_received_from example**

```
$ip = ec_get_message_received_from;
if not ec_test :is "${ip}" "127.0.0.1" {
  ec_action 550 "ec_get_message_received_from failed.  Expected 127.0.0.1, got ${ip}";
}
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_get_message_rcptto)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_get_message_received_from_port) |
| ec_get_message_rcptto  | [Table of Contents](index) |  ec_get_message_received_from_port |
