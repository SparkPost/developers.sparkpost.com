| [Prev](sieve.ref.ec_get_message_code)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_get_message_id) |

<a name="sieve.ref.ec_get_message_creation_time"></a>
## Name

ec_get_message_creation_time — Return the creation_time of the current message.

## Synopsis

`ec_get_message_creation_time`

<a name="idp29633392"></a>
## Description

`ec_get_message_creation_time` returns the creation time of the current message. It returns with seconds precision as an integer.

In the following script, the creation_time is checked against a specific value and the mail is permanently failed if it does not match.

<a name="example.ec_get_message_creation_time"></a>

**Example 16.46. ec_get_message_creation_time example**

```
$now = "%{t}";
$nearfuture = ec_add $now "15";
$t = ec_get_message_creation_time;
if ec_test :value "lt" :comparator "i;ascii-numeric" $t $now {
  ec_action 550 "ec_get_message_creation_time failed.  ${t} is less than ${now}";
}
if ec_test :value "gt" :comparator "i;ascii-numeric" $t $nearfuture {
  ec_action 550 "ec_get_message_creation_time failed.  ${t} is greater than than ${nearfuture}";
}
```

| [Prev](sieve.ref.ec_get_message_code)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_get_message_id) |
| ec_get_message_code  | [Table of Contents](index) |  ec_get_message_id |
