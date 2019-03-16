| [Prev](lua.ref.msys.policyeditor.send_trap)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.set_binding_group.php) |

<a name="lua.ref.msys.policyeditor.set_binding"></a>
## Name

msys.policyeditor.set_binding — Assign the message to a named binding

<a name="idp25044496"></a>
## Synopsis

`msys.policyeditor.set_binding(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `msg:binding(bnd)` to set a binding. For more information see [msg:binding](lua.ref.msg_binding "msg:binding").

<a name="idp25049776"></a>
## Description

Assign the message to a named binding. If commas appear, it's a list of bindings, and we pick one at random.

### Note

If you assign messages to bindings, it is important to ensure that *all* messages are assigned to bindings, or to make sure that the fallback binding (otherwise known as "default") does what you want. Good scripting practice would be to ensure that there is always an `else` clause or some other way of ensuring that all messages are always dealt with in some way. For example, you could create a variable at the top of your script with the most general binding, then `if` blocks to assign a message to a more specific binding if it matches. At the end of the script, assuming no `if` condition applies, the `else` clause would assign the message to the most general binding.

You can use this function to set the binding to the `default` binding. For more information see [the section called “The "default" Binding”](conf.ref.binding#conf.ref.binding.default "The "default" Binding").

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

The defined parameter for `params` is:

*   `binding` the name of the binding to assign to. If commas appear, it's a list of bindings, and we pick one at random.

<a name="idp25061104"></a>
## See Also

[msys.policyeditor.set_binding_group](lua.ref.msys.policyeditor.set_binding_group "msys.policyeditor.set_binding_group")

| [Prev](lua.ref.msys.policyeditor.send_trap)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.set_binding_group.php) |
| msys.policyeditor.send_trap  | [Table of Contents](index) |  msys.policyeditor.set_binding_group |
