| [Prev](sieve.ref.ec_trace_context)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_url_ripper) |

<a name="sieve.ref.ec_trunc"></a>
## Name

ec_trunc — round toward zero

## Synopsis

`ec_trunc` { *`number`* }

<a name="idp30733024"></a>
## Description

`ec_trunc` rounds the given number toward 0.

<a name="example.ec_trunc"></a>

**Example 16.100. ec_trunc example**

```
$a = 65.43;
$b = -41.65;
$c = 43;
$trunca = ec_trunc $a;
$truncb = ec_trunc $b;
$truncc = ec_trunc $c;
#trunca is 65.000000
#truncb is -41.000000
#truncc is 43.000000
```

| [Prev](sieve.ref.ec_trace_context)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_url_ripper) |
| ec_trace_context  | [Table of Contents](index) |  ec_url_ripper |
