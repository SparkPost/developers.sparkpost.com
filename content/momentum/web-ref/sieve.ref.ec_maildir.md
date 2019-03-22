| [Prev](sieve.ref.ec_log_file)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_mem_usage) |

<a name="sieve.ref.ec_maildir"></a>
## Name

ec_maildir — write the current message into a maildir mailbox

## Synopsis

`ec_maildir` { *`email-address`* }

<a name="idp30246944"></a>
## Description

This action will store the current message into the maildir for the specified email address.

It can only be called in the each_rcpt phase.

This is a terminal action; no further Sieve rules will be run for the current message in the current phase.

<a name="example.ec_maildir"></a>

**Example 16.78. ec_maildir example 1**

```
require "ec_maildir";
if envelope :domain :is "to" "localdomain.com" {
  ec_maildir "%{vctx_mess:rcptto_localpart}@%{vctx_mess:rcptto_domain}";
}
```

<a name="example.ec_maildir.second"></a>

**Example 16.79. ec_maildir example 2**

```
require "ec_maildir";
if envelope :domain :is "to" ["localdomain.com", "otherdomain.com"] {
  $rcpt = envelope "to";
  ec_maildir "${rcpt}";
}
```

<a name="idp30254912"></a>
## See Also

[envelope](sieve.ref.envelope "envelope").

| [Prev](sieve.ref.ec_log_file)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_mem_usage) |
| ec_log_file  | [Table of Contents](index) |  ec_mem_usage |
