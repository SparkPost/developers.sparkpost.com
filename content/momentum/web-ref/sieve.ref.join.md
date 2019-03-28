|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.is_true)  | 16.2. Sieve Function Details |  [Next](sieve.ref.keep) |

<a name="sieve.ref.join"></a>
## Name

join — join stringlist elements into a single string

## Synopsis

`join` { *`delimiter`* } { *`stringlist`* }

<a name="idp31019200"></a>
## Description

This function uses its first argument as a delimiter to join all the elements in the stringlist and returns the result as a string.

For example, to join MX records with a ",", we could:

<a name="example.join"></a>

**Example 16.114. join example**

```
$mxs = ec_dns_lookup "messagesystems.com" "mx";
$res = join "," $mxs;

ec_log "Message Systems MX records ${res}";
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.is_true)  | [Up](sieve.ref.files) |  [Next](sieve.ref.keep) |
| is_true  | [Table of Contents](index) |  keep |
