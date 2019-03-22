| [Prev](lua.ref.vctx_recipient_list)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.vctx_set) |

<a name="lua.ref.vctx_remove_recipient"></a>
## Name

vctx:remove_recipient — Remove an address from the recipient list

<a name="idp19292560"></a>
## Synopsis

`vctx:remove_recipient(address);`

`address: string`<a name="idp19295488"></a>
## Description

Removes an address (which may be a table representing multiple addresses) from the recipient list. If used in an invalid phase (after rcptlist final), this function raises an error.

Enable this function with the statement `require('msys.extended.vctx');`.

| [Prev](lua.ref.vctx_recipient_list)  | [Up](lua.function.details) |  [Next](lua.ref.vctx_set) |
| vctx:recipient_list  | [Table of Contents](index) |  vctx:set |

