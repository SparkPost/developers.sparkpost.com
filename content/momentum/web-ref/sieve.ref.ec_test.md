| [Prev](sieve.ref.ec_tarpit)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_thread_pool_get_queue_size) |

<a name="sieve.ref.ec_test"></a>
## Name

ec_test — generic test

## Synopsis

`ec_test` { *`comparison`* } { *`value`* } { *`other-value`* }

<a name="idp30636176"></a>
## Description

Instead of building comparators into every extension function, Momentum provides a generic test facility called `ec_test` through which all comparators can be used. See [Section 8.2.3, “Comparisons”](sieve.syntax.basic#sieve.syntax.basic.comparisons "8.2.3. Comparisons") for a discussion of Sieve comparators.

A short example of variable assignment, interpolation and testing is testing for an SPF -all record. In order to search for an SPF record that explicitly states that a domain sends no email, we look for a TXT record for the domain part of the envelope sender and attempt to match it against something that looks like: "v=spf1 -all".

<a name="example.ec_test"></a>

**Example 16.97. ec_test example**

```
$txt = ec_dns_lookup "%{spvf1:d}" "txt";
if ec_test :regex "${txt}" "v=spf1\\s+-all" {
  ec_action 550 "SPF says %{spvf1:d} sends no email.";
}
```

For a description of the types of comparisons you can perform using `ec_test` see [Section 8.2.3, “Comparisons”](sieve.syntax.basic#sieve.syntax.basic.comparisons "8.2.3. Comparisons").

| [Prev](sieve.ref.ec_tarpit)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_thread_pool_get_queue_size) |
| ec_tarpit  | [Table of Contents](index) |  ec_thread_pool_get_queue_size |
