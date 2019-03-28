|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_reception_peer)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msg_context_exists) |

<a name="lua.ref.msg_context_delete"></a>
## Name

msg:context_delete — Delete a context variable

<a name="idp15890016"></a>
## Synopsis

`msg:context_delete(type, key);`

```
type: numeric
key: string
```
<a name="idp15893008"></a>
## Description

Delete a context variable. Legal values for `type` are:

*   `msys.core.ECMESS_CTX_MESS`

*   `msys.core.ECMESS_CTX_CONN`

For a code example see [Example 70.59, “msys.gcm.gcm_classify_error example”](lua.ref.msys.gcm.gcm_classify_error#lua.ref.msys.gcm.gcm_classify_error.example "Example 70.59. msys.gcm.gcm_classify_error example"). Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

This function returns `1` if the key is deleted and `0` if the key does not exist.

<a name="idp15901872"></a>
## See Also

[msg:context_set](lua.ref.msg_context_set "msg:context_set")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msg_reception_peer)  | [Up](lua.function.details) |  [Next](lua.ref.msg_context_exists) |
| msg:reception_peer  | [Table of Contents](index) |  msg:context_exists |

