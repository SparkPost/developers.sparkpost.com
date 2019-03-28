|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_action)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_base64_decode) |

<a name="sieve.ref.ec_add"></a>
## Name

ec_add — perform addition of two numbers

## Synopsis

`ec_add` { *`number1`* } { *`number2`* }

<a name="idp29165632"></a>
## Description

`ec_add` takes two numbers and returns their sum.

<a name="example.ec_add"></a>

**Example 16.25. ec_add example**

```
$a = "55.54";
$b = 0;
$sum = ec_add $a $b;
ec_log "${a} + ${b} is ${sum}";
#sum is 55.540000
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_action)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_base64_decode) |
| ec_action  | [Table of Contents](index) |  ec_base64_decode |
