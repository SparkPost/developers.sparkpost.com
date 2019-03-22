| [Prev](sieve.ref.ec_mime_parts)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_mul) |

<a name="sieve.ref.ec_mod"></a>
## Name

ec_mod — calculate the modulus of two numbers

## Synopsis

`ec_mod` { *`number1`* } { *`number2`* }

<a name="idp30314448"></a>
## Description

`ec_mod` calculates the modulus of two numbers and returns the result.

<a name="example.ec_mod"></a>

**Example 16.82. ec_mod example**

```
$a = 87;
$b = 43;
$mod = ec_mod $a $b;
ec_log "${a} mod by ${b} is ${mod}";
#mod is 1
```

| [Prev](sieve.ref.ec_mime_parts)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_mul) |
| ec_mime_parts  | [Table of Contents](index) |  ec_mul |
