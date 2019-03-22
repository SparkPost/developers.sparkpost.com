| [Prev](lua.ref.msys.policyeditor.vctx_mess_set)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.vctx_conn_set.php) |

<a name="lua.ref.msys.policyeditor.vctx_mess_get"></a>
## Name

msys.policyeditor.vctx_mess_get — Return a message validation context value

<a name="idp25124560"></a>
## Synopsis

`msys.policyeditor.vctx_mess_get(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local value = msg:context_get(msys.core.ECMESS_CTX_MESS, "key")` to get a message context value. For more information see [msg:context_get](lua.ref.msg_context_get "msg:context_get").

<a name="idp25129936"></a>
## Description

Return a message validation context value.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

The defined parameter for `params` is `key` the name of the context variable to be returned.

<a name="idp25134784"></a>
## See Also

[msys.policyeditor.vctx_mess_set](lua.ref.msys.policyeditor.vctx_mess_set "msys.policyeditor.vctx_mess_set")

| [Prev](lua.ref.msys.policyeditor.vctx_mess_set)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.vctx_conn_set.php) |
| msys.policyeditor.vctx_mess_set  | [Table of Contents](index) |  msys.policyeditor.vctx_conn_set |
