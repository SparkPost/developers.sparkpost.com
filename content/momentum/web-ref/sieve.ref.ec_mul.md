| [Prev](sieve.ref.ec_mod)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_nearbyint) |

<a name="sieve.ref.ec_mul"></a>
## Name

ec_mul — perform multiplication of two numbers

## Synopsis

`ec_mul` { *`number1`* } { *`number2`* }

<a name="idp30331168"></a>
## Description

`ec_mul` takes two numbers and returns the result of multiplication.

<a name="example.ec_mul"></a>

**Example 16.83. ec_mul example**

```
$a = 55;
$b = 43;
$mul = ec_mul $a $b;
ec_log "${a} * ${b} is ${mul}";
#mul is 2365.000000
```

| [Prev](sieve.ref.ec_mod)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_nearbyint) |
| ec_mod  | [Table of Contents](index) |  ec_nearbyint |
