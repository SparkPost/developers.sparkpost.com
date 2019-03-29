|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.vctx_get)  | 15.2. Lua Functions |  [Next](lua.ref.vctx_remove_recipient.php) |

<a name="lua.ref.vctx_recipient_list"></a>
## Name

vctx:recipient_list — Return or set the current recipient list

<a name="idp27909360"></a>
## Synopsis

`vctx:recipient_list(addresses);`

`addresses: string, optional`<a name="idp27912016"></a>
## Description

If called with no arguments, this function returns the current recipient list. If passed an `addresses` parameter, this replaces the current recipient list. The parameter may be a single address or a table of addresses.

### Warning

This function should **not** be called in the validate_rcptto phase.

Enable this function with the statement `require('msys.extended.vctx');`.

<a name="idp27916768"></a>
## See Also

[Example 15.71, “vctx_add_recipient example”](lua.ref.vctx_add_recipient#lua.ref.vctx_add_recipient.example "Example 15.71. vctx_add_recipient example")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.vctx_get)  | [Up](lua.function.details.php) |  [Next](lua.ref.vctx_remove_recipient.php) |
| vctx:get  | [Table of Contents](index) |  vctx:remove_recipient |
