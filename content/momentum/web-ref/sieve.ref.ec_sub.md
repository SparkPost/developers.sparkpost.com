|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_spool_space)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_tarpit) |

<a name="sieve.ref.ec_sub"></a>
## Name

ec_sub — perform subtraction of two numbers

## Synopsis

`ec_sub` { *`number1`* } { *`number2`* }

<a name="idp30602512"></a>
## Description

`ec_sub` takes two numbers, subtracts the second number from the first number and returns the result.

<a name="example.ec_sub"></a>

**Example 16.96. ec_sub example**

```
$a = 43;
$b = "55.54";
$sub = ec_sub $a $b;
ec_log " ${a} - ${b} is ${sub}";
#sub is -12.540000
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_spool_space)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_tarpit) |
| ec_spool_space  | [Table of Contents](index) |  ec_tarpit |
