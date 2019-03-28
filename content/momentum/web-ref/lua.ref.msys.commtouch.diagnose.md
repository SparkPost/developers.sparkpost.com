|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cidr.reload)  | 15.2. Lua Functions |  [Next](lua.ref.msys.counter.add.php) |

<a name="lua.ref.msys.commtouch.diagnose"></a>
## Name

msys.commtouch.diagnose — Scan messages using Commtouch

<a name="idp26354272"></a>
## Synopsis

`msys.commtouch.diagnose(msg, accept, vctx);`

```
msg: userdata, ec_message type, optional
accept: userdata, accept_construct type, optional
vctx: userdata, validate_context type, optional
```
<a name="idp26362464"></a>
## Description

This function provides diagnosis of a message's virus or spam status. You must load and correctly configure the commtouch_ctasd module before using this function. This function can be invoked at the data, spool or each_rcpt phases. It will not work at the connect, ehlo, mailfrom or rcptto phases.

### Warning

Do not use `pcall` with this function.

`msg` is the email to be scored; `accept` is the accept_construct and `vctx` is the validation context. If any of the inputs is not provided, it will be inferred from the current context. Use this function to scan mail. A table is returned with the following key/value pairs:

*   `class` the spam classification of this message. Possible values are: `Unknown`, `Suspected`, `Bulk` and `Spam`.

*   `virus-threat` the virus classification of this message. Possible values are: `non-virus`, `medium`, `high` and `virus`.

*   `ref-id` a reference ID returned by the commtouch engine.

The above name value pairs are also set within the validation context with each key being prefixed with `commtouch-`.

Enable this function with the statement `require('msys.commtouch');`.

<a name="idp26377168"></a>
## See Also

[Section 14.19, “commtouch_ctasd – Commtouch_ctasd Module”](modules.commtouch "14.19. commtouch_ctasd – Commtouch_ctasd Module")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cidr.reload)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.counter.add.php) |
| msys.cidr.reload  | [Table of Contents](index) |  msys.counter.add |
