| [Prev](sieve.ref.ec_get_message_num_retries)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_get_message_rcptto) |

<a name="sieve.ref.ec_get_message_protocol"></a>
## Name

ec_get_message_protocol — Return the protocol of the current message.

## Synopsis

`ec_get_message_protocol`

<a name="idp29694224"></a>
## Description

`ec_get_message_protocol` returns the protocol that the message was received via. It takes the form of ESMTP, ECSTREAM, LMTP, INTERNAL, POP3, IMAP, or CLUSTER.

In the following script, the protocol is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_protocol"></a>

**Example 16.49. ec_get_message_protocol example**

```
$p = ec_get_message_protocol;
if not ec_test :is "${p}" "ESMTP" {
 ec_action 550 "ec_get_message_protocol.  Expected ESMTP, got ${p}";
}
```

| [Prev](sieve.ref.ec_get_message_num_retries)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_get_message_rcptto) |
| ec_get_message_num_retries  | [Table of Contents](index) |  ec_get_message_rcptto |
