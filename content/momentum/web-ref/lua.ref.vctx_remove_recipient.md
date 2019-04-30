|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.vctx_recipient_list)  | 15.2. Lua Functions |  [Next](lua.ref.vctx_set.php) |

<a name="lua.ref.vctx_remove_recipient"></a>
## Name

vctx:remove_recipient — Remove an address from the recipient list

<a name="idp27921760"></a>
## Synopsis

`vctx:remove_recipient(address);`

`address: string`<a name="idp27924400"></a>
## Description

Removes an address (which may be a table representing multiple addresses) from the recipient list. If used in an invalid phase (after rcptlist final), this function raises an error.

Enable this function with the statement `require('msys.extended.vctx');`.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.vctx_recipient_list)  | [Up](lua.function.details.php) |  [Next](lua.ref.vctx_set.php) |
| vctx:recipient_list  | [Table of Contents](index) |  vctx:set |
