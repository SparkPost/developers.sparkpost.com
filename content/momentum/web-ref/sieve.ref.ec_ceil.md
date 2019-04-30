|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_bounce_classify)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_cluster_cache_get) |

<a name="sieve.ref.ec_ceil"></a>
## Name

ec_ceil — round up to the nearest integer

## Synopsis

`ec_ceil` { *`number`* }

<a name="idp29239216"></a>
## Description

`ec_ceil` rounds the given number up to the nearest integer.

<a name="example.ec_ceiling"></a>

**Example 16.29. ec_ceil example**

```
$a = 65.43;
$b = -41.65;
$c = 43;
$ceila = ec_ceil $a;
$ceilb = ec_ceil $b;
$ceilc = ec_ceil $c;
#ceila is 66.000000
#ceilb is -41.000000
#ceilc is 43.000000
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_bounce_classify)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_cluster_cache_get) |
| ec_bounce_classify  | [Table of Contents](index) |  ec_cluster_cache_get |
