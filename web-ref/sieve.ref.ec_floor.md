|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_error_mode)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_forward) |

<a name="sieve.ref.ec_floor"></a>
## Name

ec_floor — round down to the nearest integer

## Synopsis

`ec_floor` { *`number`* }

<a name="idp29538128"></a>
## Description

`ec_floor` rounds the given number down to the nearest integer.

<a name="example.ec_floor"></a>

**Example 16.40. ec_floor example**

```
$a = 65.43;
$b = -41.65;
$c = 43;
$floora = ec_floor $a;
$floorb = ec_floor $b;
$floorc = ec_floor $c;
#floora is 65.000000
#floorb is -42.000000
#floorc is 43.000000
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_error_mode)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_forward) |
| ec_error_mode  | [Table of Contents](index) |  ec_forward |
