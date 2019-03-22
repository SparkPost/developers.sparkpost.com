| [Prev](lua.ref.msys.policyeditor.get_mess_recv_from)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.get_rcptto.php) |

<a name="lua.ref.msys.policyeditor.get_mess_recv_via"></a>
## Name

msys.policyeditor.get_mess_recv_via — Return the IP:port combination on which the message was received

<a name="idp24919552"></a>
## Synopsis

`msys.policyeditor.get_mess_recv_via(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local svc_point = msg:listener_addr('ip')` to get the IP address of the listener that the message was received on. For more information see [msg:listener_addr](lua.ref.msg_listener_addr "msg:listener_addr").

<a name="idp24924896"></a>
## Description

Return the IP:port combination on which the message was received.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

There are no defined parameters for `params`.

<a name="idp24929328"></a>
## See Also

[msys.policyeditor.get_mess_recv_from](lua.ref.msys.policyeditor.get_mess_recv_from "msys.policyeditor.get_mess_recv_from")

| [Prev](lua.ref.msys.policyeditor.get_mess_recv_from)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.get_rcptto.php) |
| msys.policyeditor.get_mess_recv_from  | [Table of Contents](index) |  msys.policyeditor.get_rcptto |
