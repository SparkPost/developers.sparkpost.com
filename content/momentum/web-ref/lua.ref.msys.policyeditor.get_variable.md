|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.get_rcptto)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.pcre_match.php) |

<a name="lua.ref.msys.policyeditor.get_variable"></a>
## Name

msys.policyeditor.get_variable — Return the value of a script variable

<a name="idp24952224"></a>
## Synopsis

`msys.policyeditor.get_variable(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. You can easily access the value of Lua variables within the Lua policy script.

<a name="idp24956560"></a>
## Description

Return the value of a script variable

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

Defined parameters for params are:

*   `name` the name of the variable to be set value: the value to set it to.

*   `value` the value to set it to

<a name="idp24963408"></a>
## See Also

[msys.policyeditor.set_variable](lua.ref.msys.policyeditor.set_variable "msys.policyeditor.set_variable") [Section 3.10.3, “Using Variables”](web3.policy.editor.php#web3.policy.editor.variables "3.10.3. Using Variables")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.get_rcptto)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.pcre_match.php) |
| msys.policyeditor.get_rcptto  | [Table of Contents](index) |  msys.policyeditor.pcre_match |
