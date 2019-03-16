| [Prev](sieve.ref.qp_encode)  | 16.2. Sieve Function Details |  [Next](sieve.ref.reject) |

<a name="sieve.ref.redirect"></a>
## Name

redirect, ec_redirect — change the envelope recipient

## Synopsis

`redirect` { *`address`* }

`ec_redirect` { *`address`* } [ *`counter`* ]

<a name="idp31112288"></a>
## Description

This action will replace the rcptto address on the envelope to the one supplied and redirect the message. The headers and the body of the message will not be changed.

The optional counter parameter to `ec_redirect` is used to count the number of hits for this particular action; if omitted, the script filename and line number will be assumed. You can see the hit count via **ec_console** using the **sieve stats**       command.

Sieve scripts using `redirect` or `ec_redirect` can be set during data_phase1 or any subsequent phase except the set_binding_phase. It is recommended that this action be used in the each_rcpt_phase.

<a name="example.ec_redirect"></a>

**Example 16.119. redirect example**

```
if envelope :domain :is "from" "do-redirect.com" {
  redirect "bar@foo.com";
  stop;
}
```

<a name="example.ec_redirect.second"></a>

**Example 16.120. ec_redirect example**

```
require "ec_redirect";
if envelope :domain :is "from" "do-redirect.com" {
  ec_redirect "bar@foo.com" "policy:do-redirect.com";
  stop;
}
```

This is a terminal action; no further Sieve rules will be run for the current message in the current phase and the message will not be logged. If a log entry is desirable, use [ec_forward](sieve.ref.ec_forward "ec_forward").

For an overview of Sieve actions see [Section 8.2.2, “Actions”](sieve.syntax.basic#sieve.syntax.basic.actions "8.2.2. Actions").

| [Prev](sieve.ref.qp_encode)  | [Up](sieve.ref.files) |  [Next](sieve.ref.reject) |
| qp_encode  | [Table of Contents](index) |  reject |
