| [Prev](sieve.ref.ec_get_message_received_via_port)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_get_message_spool_name) |

<a name="sieve.ref.ec_get_message_size"></a>
## Name

ec_get_message_size — Return the size of the current message.

## Synopsis

`ec_get_message_size`

<a name="idp29787600"></a>
## Description

`ec_get_message_size` returns the size of the current message in bytes. It returns this as a string.

In the following script, the size is checked and if it is greater than 1 megabyte the message is permanently failed.

<a name="example.ec_get_message_size"></a>

**Example 16.55. ec_get_message_size example**

```
$n = ec_get_message_size;
if ec_test :value "ge" :comparator "i;ascii-numeric" $n 1048576 {
  ec_action 550 "message too large.";
}
```

| [Prev](sieve.ref.ec_get_message_received_via_port)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_get_message_spool_name) |
| ec_get_message_received_via_port  | [Table of Contents](index) |  ec_get_message_spool_name |
