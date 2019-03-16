| [Prev](lua.ref.msys.policyeditor.get_mailfrom)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.get_mess_recv_via.php) |

<a name="lua.ref.msys.policyeditor.get_mess_recv_from"></a>
## Name

msys.policyeditor.get_mess_recv_from — Return the IP:port combination from which the message was received

<a name="idp24902896"></a>
## Synopsis

`msys.policyeditor.get_mess_recv_from(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local rip = msg:reception_peer('ip')` to get the IP address of the injecting server. For more information see [msg:reception_peer](lua.ref.msg_reception_peer "msg:reception_peer").

<a name="idp24908224"></a>
## Description

Return the IP:port combination from which the message was received.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

There are no defined parameters for `params`.

<a name="idp24912656"></a>
## See Also

[msys.policyeditor.get_mess_recv_via](lua.ref.msys.policyeditor.get_mess_recv_via "msys.policyeditor.get_mess_recv_via")

| [Prev](lua.ref.msys.policyeditor.get_mailfrom)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.get_mess_recv_via.php) |
| msys.policyeditor.get_mailfrom  | [Table of Contents](index) |  msys.policyeditor.get_mess_recv_via |
