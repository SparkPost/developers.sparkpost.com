|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.pcre_match)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.send_trap.php) |

<a name="lua.ref.msys.policyeditor.send_email"></a>
## Name

msys.policyeditor.send_email — Sends a simple email message

<a name="idp24993360"></a>
## Synopsis

`msys.policyeditor.send_email(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use a combination of `msg:build()` and `msg:inject()` to send a message. For more information see [msg:build](lua.ref.msg_build "msg:build") and [msg:inject](lua.ref.msg_inject.php "msg:inject").

<a name="idp24999664"></a>
## Description

Sends a simple email message. Builds out a simple, non-MIME, RFC2822 email message based on the supplied sender, recipient, subject and body content. The from and to must be simple RFC2821 email addresses, that is, addresses of the form user@domain with no friendly names or other surrounding punctuation.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

Defined parameters for params are:

*   `from` the envelope sender and "From" header for the generated email

*   `to` the envelope recipient and "To" header for the generated email

*   `subject` the subject line for the generated email

*   `body` the body of the message

*   `throttle` if non-zero, limits sending to one message every "throttle" seconds

<a name="idp25010592"></a>
## See Also

[Section 3.11, “Automated Alerting Configuration”](web3.automated.alerting "3.11. Automated Alerting Configuration")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.pcre_match)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.send_trap.php) |
| msys.policyeditor.pcre_match  | [Table of Contents](index) |  msys.policyeditor.send_trap |
