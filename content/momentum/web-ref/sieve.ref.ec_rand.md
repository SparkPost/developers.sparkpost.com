|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_pcre_match)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_rewrite_mailfrom) |

<a name="sieve.ref.ec_rand"></a>
## Name

ec_rand — generate a random number no larger than max -1 or a random string from a list.

## Synopsis

`ec_rand` { *`max/list`* }

<a name="idp30379936"></a>
## Description

`ec_rand` returns a random number no larger than max - 1\. It returns a random string from a stringlist.

<a name="example.ec_rand"></a>

**Example 16.86. ec_rand example**

If you wished to allow 90% of messages and fail 10% of the messages without differentiating between the messages themselves, we could use ec_rand to do so as below:

```
$num = ec_rand 10;
if ec_test :is $num "0" {
  ec_action 421 "Service not available.";
}
```

If you wished to log a random reason for your mail to be failed in the paniclog.

```
$reason = ["Service not available.", "Bad mailfrom.", "Malformed EHLO."];
$r = ec_rand $reason;
ec_log "${r}";
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_pcre_match)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_rewrite_mailfrom) |
| ec_pcre_match  | [Table of Contents](index) |  ec_rewrite_mailfrom |
