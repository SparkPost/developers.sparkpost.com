|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.set_binding_group)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.vctx_mess_set.php) |

<a name="lua.ref.msys.policyeditor.set_variable"></a>
## Name

msys.policyeditor.set_variable — Set the value of a script variable

<a name="idp25086352"></a>
## Synopsis

`msys.policyeditor.set_variable(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. You can easily set a Lua variable as follows: `local x = y;` .

<a name="idp25091104"></a>
## Description

Set the value of a script variable

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

Defined parameters for params are:

*   `name` the name of the variable to be set

*   `value` the value to set the variable to

<a name="idp25097936"></a>
## See Also

[msys.policyeditor.get_variable](lua.ref.msys.policyeditor.get_variable "msys.policyeditor.get_variable"), [Section 3.10.3, “Using Variables”](web3.policy.editor.php#web3.policy.editor.variables "3.10.3. Using Variables")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.set_binding_group)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.vctx_mess_set.php) |
| msys.policyeditor.set_binding_group  | [Table of Contents](index) |  msys.policyeditor.vctx_mess_set |
