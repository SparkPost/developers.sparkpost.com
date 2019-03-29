|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.get_mess_recv_via)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.get_variable.php) |

<a name="lua.ref.msys.policyeditor.get_rcptto"></a>
## Name

msys.policyeditor.get_rcptto — Return the recipient

<a name="idp24936080"></a>
## Synopsis

`msys.policyeditor.get_rcptto(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local recip = msg:rcptto()` to get the RCPT TO email address. For more information see [msg:rcptto](lua.ref.msg_rcptto "msg:rcptto").

<a name="idp24941392"></a>
## Description

Return the recipient.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

<a name="idp24944880"></a>
## See Also

[msys.policyeditor.get_mess_recv_via](lua.ref.msys.policyeditor.get_mess_recv_via "msys.policyeditor.get_mess_recv_via"), [msys.policyeditor.get_mailfrom](lua.ref.msys.policyeditor.get_mailfrom.php "msys.policyeditor.get_mailfrom")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.get_mess_recv_via)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.get_variable.php) |
| msys.policyeditor.get_mess_recv_via  | [Table of Contents](index) |  msys.policyeditor.get_variable |
