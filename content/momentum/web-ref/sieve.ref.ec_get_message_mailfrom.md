| [Prev](sieve.ref.ec_get_message_id)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_get_message_num_retries) |

<a name="sieve.ref.ec_get_message_mailfrom"></a>
## Name

ec_get_message_mailfrom — Return the mailfrom of the current message.

## Synopsis

`ec_get_message_mailfrom`

<a name="idp29663376"></a>
## Description

`ec_get_message_mailfrom` returns the mail from of the current message. It has the form of MAIL FROM:<bar@bar.com>.

In the following script, the mailfrom is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_mailfrom"></a>

**Example 16.47. ec_get_message_mailfrom example**

```
$mfrom = ec_get_message_mailfrom;
if not ec_test :contains "${mfrom}" "MAIL FROM:<bar@bar.com>" {
  ec_action 550 "ec_get_message_mailfrom failed (read ${mfrom})";
}
```

| [Prev](sieve.ref.ec_get_message_id)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_get_message_num_retries) |
| ec_get_message_id  | [Table of Contents](index) |  ec_get_message_num_retries |
