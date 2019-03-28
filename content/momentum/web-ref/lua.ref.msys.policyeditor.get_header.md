|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.get_binding_domain_failure_rate)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.get_mailfrom.php) |

<a name="lua.ref.msys.policyeditor.get_header"></a>
## Name

msys.policyeditor.get_header — Return the value of a header field

<a name="idp24868288"></a>
## Synopsis

`msys.policyeditor.get_header(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local x = msg:header("X-Custom-Hdr")` to get a header. For more information see [msg:header](lua.ref.header "msg:header").

<a name="idp24873600"></a>
## Description

Return the value of a header field.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

Defined parameters for `params` are:

*   `header` the name of the header to retrieve

<a name="idp24879616"></a>
## See Also

[msys.policyeditor.del_header](lua.ref.msys.policyeditor.del_header "msys.policyeditor.del_header")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.get_binding_domain_failure_rate)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.get_mailfrom.php) |
| msys.policyeditor.get_binding_domain_failure_rate  | [Table of Contents](index) |  msys.policyeditor.get_mailfrom |
