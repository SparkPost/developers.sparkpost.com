| [Prev](sieve.ref.ec_throttle)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_trace_context) |

<a name="sieve.ref.ec_tolower"></a>
## Name

ec_tolower — change all characters to lower case

## Synopsis

`ec_tolower` { *`string`* }

<a name="idp30706816"></a>
## Description

Change all characters in the argument to lower case. Numerals remain unchanged.

<a name="example.ec_tolower"></a>

**Example 16.99. ec_tolower example**

```
$a = "%{vctx_mess:mailfrom_localpart}";
  $b = ec_tolower $a;
  ec_log "${a} lower to ${b}";
```

| [Prev](sieve.ref.ec_throttle)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_trace_context) |
| ec_throttle  | [Table of Contents](index) |  ec_trace_context |
