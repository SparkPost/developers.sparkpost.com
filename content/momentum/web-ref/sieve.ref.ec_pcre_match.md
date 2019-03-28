|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_nearbyint)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_rand) |

<a name="sieve.ref.ec_pcre_match"></a>
## Name

ec_pcre_match — perform a regular expression match

## Synopsis

`ec_pcre_match` { *`string`* } { *`pattern`* }

<a name="idp30363808"></a>
## Description

`ec_pcre_match` performs a regular expression match and returns a stringlist containing the matched strings. The zeroth element of the stringlist consists of the part of the string that matched the whole given pattern, the first element corresponds to the first captured subpattern, the second element to the second captured subpattern, and so on.

<a name="example.ec_pcre_match"></a>

**Example 16.85. ec_pcre_match example**

```
$email = "foo@bar.com.cn";
($a, $b, $c) = ec_pcre_match $email "(.*)@(.*)\.com";

# $a is "foo@bar.com", $b is "foo" and $c is "bar"
ec_log "the string matched is ${a}, $1 is ${b}, $2 is ${c}.";
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_nearbyint)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_rand) |
| ec_nearbyint  | [Table of Contents](index) |  ec_rand |
