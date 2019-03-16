| [Prev](lua.ref.msys.policyeditor.vctx_mess_get)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.vctx_conn_get.php) |

<a name="lua.ref.msys.policyeditor.vctx_conn_set"></a>
## Name

msys.policyeditor.vctx_conn_set — Set a connection validation context value

<a name="idp25141552"></a>
## Synopsis

`msys.policyeditor.vctx_conn_set(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `msg:context_set(msys.core.ECMESS_CTX_CONN, "key", "value")` to set a connection context value. For more information see [msg:context_set](lua.ref.msg_context_set "msg:context_set").

<a name="idp25146912"></a>
## Description

Set a connection validation context value.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

*   `key` the name of the context variable to be set

*   `value` the value to which it will be set

<a name="idp25153280"></a>
## See Also

[msys.policyeditor.vctx_conn_get](lua.ref.msys.policyeditor.vctx_conn_get "msys.policyeditor.vctx_conn_get")

| [Prev](lua.ref.msys.policyeditor.vctx_mess_get)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.vctx_conn_get.php) |
| msys.policyeditor.vctx_mess_get  | [Table of Contents](index) |  msys.policyeditor.vctx_conn_get |
