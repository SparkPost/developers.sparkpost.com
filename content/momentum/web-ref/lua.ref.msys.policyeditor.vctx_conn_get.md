|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.vctx_conn_set)  | 15.2. Lua Functions |  [Next](lua.ref.msys.validate.dkim.get_verify_results.php) |

<a name="lua.ref.msys.policyeditor.vctx_conn_get"></a>
## Name

msys.policyeditor.vctx_conn_get — Return a connection validation context value

<a name="idp25160048"></a>
## Synopsis

`msys.policyeditor.vctx_conn_get(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local value = msg:context_get(msys.core.ECMESS_CTX_CONN, "key")` to get a connection context value. For more information see [msg:context_get](lua.ref.msg_context_get "msg:context_get").

<a name="idp25165424"></a>
## Description

Return a connection validation context value.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

The defined parameter for `params` is:

*   `key` the name of the context variable to be returned

<a name="idp25171440"></a>
## See Also

[msys.policyeditor.vctx_conn_set](lua.ref.msys.policyeditor.vctx_conn_set "msys.policyeditor.vctx_conn_set")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.vctx_conn_set)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.validate.dkim.get_verify_results.php) |
| msys.policyeditor.vctx_conn_set  | [Table of Contents](index) |  msys.validate.dkim.get_verify_results |
