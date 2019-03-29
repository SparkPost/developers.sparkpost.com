|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_binding)  | 15.2. Lua Functions |  [Next](lua.ref.msg_body.php) |

<a name="lua.ref.msg_binding_group"></a>
## Name

msg:binding_group — Sets the binding_group to the named binding, if one is provided.

<a name="idp25356688"></a>
## Synopsis

`msg:binding_group(value);`

`value: string, optional`<a name="idp25359344"></a>
## Description

Sets the binding to one in the named binding_group, if one is provided, using logic similar to the Sieve function `ec_set_binding_group`. Returns the current or new value for the binding_group.

If the [adaptive module](modules.adaptive "14.2. adaptive – Adaptive Delivery") is enabled the logic for choosing a binding is as follows:

1.  An unsuspended binding local to the MTA

2.  A non-local unsuspended binding

3.  If all bindings are suspended, a local binding is randomly chosen

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25366656"></a>
## See Also

[msg:binding](lua.ref.msg_binding "msg:binding")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_binding)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_body.php) |
| msg:binding  | [Table of Contents](index) |  msg:body |
