| [Prev](sieve.ref.ec_rand)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_rfc2047_encode_addresses) |

<a name="sieve.ref.ec_rewrite_mailfrom"></a>
## Name

ec_rewrite_mailfrom — change the envelope sender

## Synopsis

`ec_rewrite_mailfrom` { *`address`* } [ *`counter`* ]

<a name="idp30397952"></a>
## Description

This action will replace the envelope sender (the `MAIL FROM`) address on the envelope with the one supplied. The headers and the body of the message will not be changed.

The optional counter parameter to `ec_rewrite_mailfrom` is used to count the number of hits for this particular action; if omitted, the script filename and line number will be assumed. You can see the hit count via the web console or via **ec_console** using the **sieve stats**       command.

Sieve scripts using `ec_rewrite_mailfrom` can be set during data_phase1 or any subsequent phase except the set_binding_phase.

<a name="example.ec_rewrite_mailfrom"></a>

**Example 16.87. ec_rewrite_mailfrom example**

```
if envelope :domain :is "from" "bar.com" {
  ec_rewrite_mailfrom "bar@foo.com";
  stop;
}
```

| [Prev](sieve.ref.ec_rand)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_rfc2047_encode_addresses) |
| ec_rand  | [Table of Contents](index) |  ec_rfc2047_encode_addresses |
