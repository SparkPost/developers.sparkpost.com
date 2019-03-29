|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.vctx_set)  | 15.2. Lua Functions |  [Next](lua.ref.vctx_tarpit.php) |

<a name="lua.ref.vctx_set_code"></a>
## Name

vctx:set_code — Set the inbound disposition and response message

<a name="idp27944608"></a>
## Synopsis

`vctx:set_code(codenum, message);`

```
codenum: string
message: string
```
<a name="idp27947312"></a>
## Description

Sets the inbound disposition and response message. This can cause the current message to be rejected if the `codenum` is set to an appropriate value.

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.vctx_set)  | [Up](lua.function.details.php) |  [Next](lua.ref.vctx_tarpit.php) |
| vctx:set  | [Table of Contents](index) |  vctx:tarpit |
