| [Prev](sieve.ref.ec_disconnect)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_dk_responsible_domain) |

<a name="sieve.ref.ec_div"></a>
## Name

ec_div — perform division of two numbers

## Synopsis

`ec_div` { *`number1`* } { *`number2`* }

<a name="idp29332336"></a>
## Description

`ec_div` takes two numbers and divides the first number by the second and returns the result.

<a name="example.ec_div"></a>

**Example 16.33. ec_div example**

```
$a = -86;
$b = 43;
$div = ec_div $a $b;
ec_log "${a} / ${b} is ${div}";
#div is -2.000000
```

| [Prev](sieve.ref.ec_disconnect)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_dk_responsible_domain) |
| ec_disconnect  | [Table of Contents](index) |  ec_dk_responsible_domain |
