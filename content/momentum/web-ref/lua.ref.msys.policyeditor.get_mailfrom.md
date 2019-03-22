| [Prev](lua.ref.msys.policyeditor.get_header)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.get_mess_recv_from.php) |

<a name="lua.ref.msys.policyeditor.get_mailfrom"></a>
## Name

msys.policyeditor.get_mailfrom — Return the envelope sender

<a name="idp24886368"></a>
## Synopsis

`msys.policyeditor.get_mailfrom(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local mf = msg:mailfrom()` to get the sending address. For more information see [msg:mailfrom](lua.ref.msg_mailfrom "msg:mailfrom").

<a name="idp24891696"></a>
## Description

Return the envelope sender.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

There are no defined parameters for `params`.

<a name="idp24896080"></a>
## See Also

[msys.policyeditor.get_rcptto](lua.ref.msys.policyeditor.get_rcptto "msys.policyeditor.get_rcptto")

| [Prev](lua.ref.msys.policyeditor.get_header)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.get_mess_recv_from.php) |
| msys.policyeditor.get_header  | [Table of Contents](index) |  msys.policyeditor.get_mess_recv_from |
