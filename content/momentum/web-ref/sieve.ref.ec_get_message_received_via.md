|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_get_message_received_from_port)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_get_message_received_via_port) |

<a name="sieve.ref.ec_get_message_received_via"></a>
## Name

ec_get_message_received_via — Return the IP address that the message was received via

## Synopsis

`ec_get_message_received_via`

<a name="idp29756496"></a>
## Description

`ec_get_message_received_via` returns the IP address of the interface that the message was received on. It returns the address in dot-decimal notation, 192.126.1.20 for example.

In the following script, the IP address returned by ec_get_message_received_via is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_received_via"></a>

**Example 16.53. ec_get_message_received_via example**

```
$ip = ec_get_message_received_via;
if not ec_test :is "${ip}" "127.0.0.1" {
  ec_action 550 "ec_get_message_received_via failed.  Expected 127.0.0.1, got ${ip}";
}
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_get_message_received_from_port)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_get_message_received_via_port) |
| ec_get_message_received_from_port  | [Table of Contents](index) |  ec_get_message_received_via_port |
