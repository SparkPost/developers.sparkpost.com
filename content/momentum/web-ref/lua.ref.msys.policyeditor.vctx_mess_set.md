|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.set_variable)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.vctx_mess_get.php) |

<a name="lua.ref.msys.policyeditor.vctx_mess_set"></a>
## Name

msys.policyeditor.vctx_mess_set — Set a message validation context value

<a name="idp25105264"></a>
## Synopsis

`msys.policyeditor.vctx_mess_set(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `msg:context_set(msys.core.ECMESS_CTX_MESS, "key", "value")` to set a message context value. For more information see [msg:context_set](lua.ref.msg_context_set "msg:context_set").

<a name="idp25110624"></a>
## Description

Set a message validation context value.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

The defined parameters for `params` are:

*   `key` the name of the context variable

*   `value` the value to which it will be set

<a name="idp25117856"></a>
## See Also

[msys.policyeditor.vctx_mess_get](lua.ref.msys.policyeditor.vctx_mess_get "msys.policyeditor.vctx_mess_get")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.set_variable)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.vctx_mess_get.php) |
| msys.policyeditor.set_variable  | [Table of Contents](index) |  msys.policyeditor.vctx_mess_get |
