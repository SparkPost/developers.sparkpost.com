|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_get_message_protocol)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_get_message_received_from) |

<a name="sieve.ref.ec_get_message_rcptto"></a>
## Name

ec_get_message_rcptto — Return the rcptto of the current message.

## Synopsis

`ec_get_message_rcptto`

<a name="idp29709616"></a>
## Description

`ec_get_message_rcptto` returns the rcptto of the current message. It has the form of RCPT TO:<bar@bar.com>.

In the following script, the rcptto is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_rcptto"></a>

**Example 16.50. ec_get_message_rcptto example**

```
$rcpt = ec_get_message_rcptto;
if not ec_test :contains "${rcpt}" "RCPT TO:<bar@bar.com>" {
  ec_action 550 "ec_get_message_rcptto failed (read ${rcpt})";
}
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_get_message_protocol)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_get_message_received_from) |
| ec_get_message_protocol  | [Table of Contents](index) |  ec_get_message_received_from |
