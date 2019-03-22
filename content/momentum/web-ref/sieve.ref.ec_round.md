| [Prev](sieve.ref.ec_rfc3464_delivery_status)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_set_binding) |

<a name="sieve.ref.ec_round"></a>
## Name

ec_round — round away from zero

## Synopsis

`ec_round` { *`number`* }

<a name="idp30476976"></a>
## Description

`ec_round` rounds the given number to the nearest integer, but away from 0.

<a name="example.ec_round"></a>

**Example 16.90. ec_round example**

```
$a = 65.43;
$b = -41.65;
$c = 43;
$rounda = ec_round $a;
$roundb = ec_round $b;
$roundc = ec_round $c;
#rounda is 66.000000
#roundb is -42.000000
#roundc is 43.000000
```

| [Prev](sieve.ref.ec_rfc3464_delivery_status)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_set_binding) |
| ec_rfc3464_delivery_status  | [Table of Contents](index) |  ec_set_binding |
