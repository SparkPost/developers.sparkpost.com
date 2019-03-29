|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.get_variable)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.send_email.php) |

<a name="lua.ref.msys.policyeditor.pcre_match"></a>
## Name

msys.policyeditor.pcre_match — Perform a PCRE regex match operation

<a name="idp24970640"></a>
## Synopsis

`msys.policyeditor.pcre_match(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local str = msys.pcre.match("string", "pattern")` to perform a PCRE match. For more information see [msys.pcre.match](lua.ref.msys.pcre.match "msys.pcre.match").

<a name="idp24975984"></a>
## Description

Perform a PCRE regex match operation.

A side effect of operation is that the variable `$0` is set to the subject string, `$1` is set to the first capturing subexpression, `$2` the second and so on. Additionally, if you use one of the various forms of named subexpression captures, such as `(?P<name>\d+)`, then the name of each captured item will be prefixed with a dollar sign and set as a script variable (so you'd have `$name` if you used `(?P<name>\d+)`).

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

Defined parameters for `params` are:

*   `subject` the string to be matched

*   `pattern` the PCRE regex pattern to match against

<a name="idp24986608"></a>
## See Also

[Section 3.10.5, “Using Regular Expressions with the Policy Editor”](web3.policy.editor#web3.policy.editor.regex "3.10.5. Using Regular Expressions with the Policy Editor")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.get_variable)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.send_email.php) |
| msys.policyeditor.get_variable  | [Table of Contents](index) |  msys.policyeditor.send_email |
