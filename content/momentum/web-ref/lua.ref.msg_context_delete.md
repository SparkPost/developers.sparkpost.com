| [Prev](lua.ref.msg_reception_peer)  | 15.2. Lua Functions |  [Next](lua.ref.msg_context_exists.php) |

<a name="lua.ref.msg_context_delete"></a>
## Name

msg:context_delete — Delete a context variable

<a name="idp24282576"></a>
## Synopsis

`msg:context_delete(type, key);`

```
type: numeric
key: string
```
<a name="idp24285280"></a>
## Description

Delete a context variable. Legal values for `type` are:

*   `msys.core.ECMESS_CTX_MESS`

*   `msys.core.ECMESS_CTX_CONN`

For a code example see [Example 15.59, “msys.gcm.gcm_classify_error example”](lua.ref.msys.gcm.gcm_classify_error#lua.ref.msys.gcm.gcm_classify_error.example "Example 15.59. msys.gcm.gcm_classify_error example"). Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

This function returns `1` if the key is deleted and `0` if the key does not exist.

<a name="idp24293440"></a>
## See Also

[msg:context_set](lua.ref.msg_context_set "msg:context_set")

| [Prev](lua.ref.msg_reception_peer)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_context_exists.php) |
| msg:reception_peer  | [Table of Contents](index) |  msg:context_exists |
