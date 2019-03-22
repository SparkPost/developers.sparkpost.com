| [Prev](sieve.ref.audit_service)  | 16.2. Sieve Function Details |  [Next](sieve.ref.cidrdb) |

<a name="sieve.ref.brightmail"></a>
## Name

*`brightmail`*_is_default, *`brightmail`*_rules, *`brightmail`*_verdict, *`brightmail`*_scanner, *`brightmail`*_tracker — brightmail functions for Sieve

## Synopsis

*`brightmail`*_verdict

*`brightmail`*_is_default

*`brightmail`*_rules

*`brightmail`*_scanner

*`brightmail`*_tracker

<a name="idp28782768"></a>
## Description

These Sieve tests and actions are provided by the [Section 14.14, “brightmail – Brightmail Module”](modules.brightmail "14.14. brightmail – Brightmail Module"); you must load and correctly configured this module before using these functions. Be sure to set the brightmail module option, `sieve_mode` to `on`. These functions can be invoked at the data, spool or each_rcpt phases. They will not work at the connect, ehlo, mailfrom or rcptto phases.

### Note

The names of these functions are determined by the value of the `sieve_prefix` configuration setting. For example, if the brightmail module is loaded with `sieve_prefix` set to `bm`, you would, for example, invoke the verdict function using the name `bm_verdict`. The default value of the `sieve_prefix` option is `brightmail`.

The **brightmail_scanner** command is used to force a brightmail scan of a message; it should be called first before *any* of the other brightmail actions. Use this function to get a verdict from brightmail.

```
brightmail_scanner;
if brightmail_verdict :is " " "spam" {
  ec_header_prefix "Subject" "[brightmail] ";
}
```

**brightmail_verdict** returns the text destination from the verdict that applies to the current recipient of the current message. Typical return values would be either `inbox` or `spam`.

You may also use **brightmail_verdict** as a test:

```
brightmail_scanner;
if brightmail_verdict :is " " "spam" {
  ec_header_prefix "Subject" "[brightmail] ";
}
```

**brightmail_is_default** is a test that will yield a positive result if the verdict for the current recipient on the current message is the "default" destination.

The Brightmail protocol signals when the default disposition was found. So rather than matching an explicit default name of "default", you can use the `brightmail_is_default` Sieve action to see if there is a match. This makes your Sieve script independent of what the default verdict is named. `if not brightmail_is_default` effectively means that there is something suspicious about the message.

```
brightmail_scanner;
if not brightmail_is_default {
  ec_tarpit 10 "non default brightmail result";
}
```

**brightmail_rules** returns a stringlist of the rules noted in the verdict applying to the current recipient on the current message. Rules in the brightmail protocol are specified by number.

```
brightmail_scanner;
if brightmail_rules :is " " "111" {
  ec_log "Brightmail rule #111 hit!";
}
```

**brightmail_tracker** returns a string suitable for use as the X-Brightmail-Tracker header.

```
$tracker = brightmail_tracker;
vctx_mess_set "bm_tracker" $tracker;
$ruleslist = brightmail_rules;
$rules = join " " $ruleslist;
vctx_mess_set "bm_rules" $rules;
```

For more information about Brightmail see [http://www.symantec.com/business/products/family.jsp?familyid=brightmail](http://www.symantec.com/business/products/family.jsp?familyid=brightmail) .

| [Prev](sieve.ref.audit_service)  | [Up](sieve.ref.files) |  [Next](sieve.ref.cidrdb) |
| audit_service  | [Table of Contents](index) |  cidrdb |
