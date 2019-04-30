|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.reverse_delim)  | 16.2. Sieve Function Details |  [Next](sieve.ref.snmp_trap) |

<a name="sieve.ref.smtp_callback_verify"></a>
## Name

smtp_callback_verify — Perform smtp callback on an email address

## Synopsis

`smtp_callback_verify` { *`email_address`* } [ *`sender_address`* ]

<a name="idp31196640"></a>
## Description

`smtp_callback_verify` performs a smtp callback on an *`email_address`* you specify. You need to load the [Section 14.67, “smtp_cbv – SMTP Callback Verification”](modules.smtp_cbv "14.67. smtp_cbv – SMTP Callback Verification") module passively to use this action.

You can specify an optional *`sender_address`* to use as the MAIL FROM: address when performing the callback. If this argument is not specified, the default value in the config file will be used. Specifying this argument will not change the `mailfrom` value in the config file.

This action returns a stringlist, ["status", "message"]. `status` is one of `pass`, `fail`, `transient`, or `error`. `message` is the full DSN (Delivery Status Notification).

<a name="example.smtp_callback_verify"></a>

**Example 16.124. smtp_callback_verify example**

In the following script, a smtp callback is performed on all incoming mails with a NULL sender address. The `ecelerity.conf` for this setup looks something like the following:

```
smtp_cbv "smtp_cbv1" {
  Enabled = false
  phase = "mailfrom"
}

sieve "sieve1" {
  script "mailfrom_phase1" {
    source = "/path/to/myscript.siv"
  }
}
```

and the contents of `myscript.siv`:

```
$from = envelope "from";
($rv) = smtp_callback_verify "${from}";
if ec_test :is "${rv}" "fail" {
  ec_action 550 "from address not reachable";
}
```

<a name="idp31210240"></a>
## See Also

[Section 14.67, “smtp_cbv – SMTP Callback Verification”](modules.smtp_cbv "14.67. smtp_cbv – SMTP Callback Verification"),


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.reverse_delim)  | [Up](sieve.ref.files) |  [Next](sieve.ref.snmp_trap) |
| reverse_delim  | [Table of Contents](index) |  snmp_trap |
