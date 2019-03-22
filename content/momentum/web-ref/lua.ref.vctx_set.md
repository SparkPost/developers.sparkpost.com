| [Prev](lua.ref.vctx_remove_recipient)  | 15.2. Lua Functions |  [Next](lua.ref.vctx_set_code.php) |

<a name="lua.ref.vctx_set"></a>
## Name

vctx:set — Set the value of a context variable

<a name="idp27929968"></a>
## Synopsis

`vctx:set(type, key, value);`

```
type: numeric
key: string
value: mixed
```
<a name="idp27932688"></a>
## Description

Set the value of a context variable. The `type` parameter can be either `msys.core.VCTX_MESS` or `msys.core.VCTX_CONN`.

<a name="lua.ref.vctx_set.example"></a>

**Example 15.73. vctx:set example**

```
require("msys.core");
require("msys.brightmail");

local mod = {};
function mod:validate_data(msg, accept, vctx)
  local verdict, is_default, rules, tracker = msys.brightmail.scan(msg, accept, vctx)
    print("verdict:", verdict, " is_default:", is_default, " rules:", rules, " tracker:", tracker)
    vctx:set(msys.core.VCTX_MESS, 'bm_verdict', verdict)
  return msys.core.VALIDATE_CONT;
end
msys.registerModule("bm", mod);
```

Because this function is in the `msys.core` namespace, an explicit `require('msys.core')` is not necessary.

<a name="idp27939712"></a>
## See Also

[vctx:get](lua.ref.vctx_get "vctx:get")

| [Prev](lua.ref.vctx_remove_recipient)  | [Up](lua.function.details.php) |  [Next](lua.ref.vctx_set_code.php) |
| vctx:remove_recipient  | [Table of Contents](index) |  vctx:set_code |
