|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.vctx_disconnect)  | 15.2. Lua Functions |  [Next](lua.ref.vctx_recipient_list.php) |

<a name="lua.ref.vctx_get"></a>
## Name

vctx:get — Get the value of a context variable

<a name="idp27896768"></a>
## Synopsis

`vctx:get(type, key);`

```
type: numeric
key: string
```
<a name="idp27899456"></a>
## Description

Get the value of a context variable. The `type` parameter can be either `msys.core.VCTX_MESS` or `msys.core.VCTX_CONN`. The `key` parameter is the name of the context variable that you wish to retrieve.

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp27904320"></a>
## See Also

[vctx:set](lua.ref.vctx_set "vctx:set")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.vctx_disconnect)  | [Up](lua.function.details.php) |  [Next](lua.ref.vctx_recipient_list.php) |
| vctx:disconnect  | [Table of Contents](index) |  vctx:recipient_list |
