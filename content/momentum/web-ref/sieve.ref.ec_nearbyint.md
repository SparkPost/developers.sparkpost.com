| [Prev](sieve.ref.ec_mul)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_pcre_match) |

<a name="sieve.ref.ec_nearbyint"></a>
## Name

ec_nearbyint — round to the nearest integer based on rounding direction

## Synopsis

`ec_nearbyint` { *`number`* }

<a name="idp30346896"></a>
## Description

`ec_nearbyint` rounds the given number to the nearest integer based on rounding direction.

<a name="example.ec_nearbyint"></a>

**Example 16.84. ec_nearbyint example**

```
$a = 65.43;
$b = -41.65;
$c = 43;
$nearbyinta = ec_nearbyint $a;
$nearbyintb = ec_nearbyint $b;
$nearbyintc = ec_nearbyint $c;
#nearbyinta is 65.000000
#nearbyintb is -42.000000
#nearbyintc is 43.000000
```

| [Prev](sieve.ref.ec_mul)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_pcre_match) |
| ec_mul  | [Table of Contents](index) |  ec_pcre_match |
