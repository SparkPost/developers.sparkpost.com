| [Prev](lua.ref.msg_context_delete)  | 15.2. Lua Functions |  [Next](lua.ref.msg_context_exists_and_get.php) |

<a name="lua.ref.msg_context_exists"></a>
## Name

msg:context_exists — Check if a context variable exists

<a name="idp24300112"></a>
## Synopsis

`msg:context_exists(type, key);`

```
type: numeric
key: string
```
<a name="idp24302816"></a>
## Description

Check if a context variable exists. Legal values for `type` are:

*   `msys.core.ECMESS_CTX_MESS`

*   `msys.core.ECMESS_CTX_CONN`

`local e = msg:context_exists(msys.core.ECMESS_CTX_MESS, 'key')`

This function returns `1` if the key exists and `0` if the key does not exist.

The return value of this function should always be compared explicitly. For example:

```
local e = msg:context_exists(msys.core.ECMESS_CTX_MESS, 'key')
if e == 1 then
  -- do something here that depends on the key existing
end
```

Note that Lua treats the numeric value `0` as true, which can be confusing.

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp24313232"></a>
## See Also

[msg:context_exists_and_get](lua.ref.msg_context_exists_and_get "msg:context_exists_and_get")

| [Prev](lua.ref.msg_context_delete)  | [Up](lua.function.details.php) |  [Next](lua.ref.msg_context_exists_and_get.php) |
| msg:context_delete  | [Table of Contents](index) |  msg:context_exists_and_get |
