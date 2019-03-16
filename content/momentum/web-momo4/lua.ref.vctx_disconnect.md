| [Prev](lua.ref.vctx_add_recipient)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.vctx_get) |

<a name="lua.ref.vctx_disconnect"></a>
## Name

vctx:disconnect — Disconnect the session associated with the current validation context

<a name="idp19252768"></a>
## Synopsis

`vctx:disconnect(code, message);`

```
code: string
message: string
```
<a name="idp19255760"></a>
## Description

This function disconnects the current session associated with the validation context. Pass in a code and a message. Use this function in the following way:

<a name="lua.ref.vctx_disconnect.example"></a>

**Example 70.70. vctx:disconnect example**

```
require("msys.core");
require("msys.extended.message");
require("msys.extended.vctx");

local mod = {};

function mod:validate_mailfrom(str, accept, vctx)
  str = tostring(str);
  if (string.find(str, "disconnect@example.com") != nil) then
    print("Disconnecting " .. str);
    vctx:disconnect(421, "Go away dude");
  return msys.core.VALIDATE_DONE;
end

return msys.core.VALIDATE_CONT;
end

msys.registerModule("vctx_disconnect", mod);
```

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

| [Prev](lua.ref.vctx_add_recipient)  | [Up](lua.function.details) |  [Next](lua.ref.vctx_get) |
| vctx:add_recipient  | [Table of Contents](index) |  vctx:get |

