| [Prev](lua.ref.vctx_set_code)  | 15.2. Lua Functions |  [Next](lua.ref.xml.doc_root.php) |

<a name="lua.ref.vctx_tarpit"></a>
## Name

vctx:tarpit — Issue a time cost on the inbound session

<a name="idp27953712"></a>
## Synopsis

`vctx:tarpit(interval);`

`interval: number`<a name="idp27956384"></a>
## Description

This instructs Momentum that the SMTP session should be put on hold for the specified number of seconds. Currently only the SMTP listener supports this.

<a name="lua.ref.vctx_tarpit.example"></a>

**Example 15.74. vctx:tarpit example**

```
require("msys.core");
require("msys.extended.vctx");

local mod = {};
function mod:validate_connect(accept, vctx)
  vctx:tarpit(1);
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("validate_connect", mod);
```

Enable this function with the statement `require('msys.extended.vctx');`.

| [Prev](lua.ref.vctx_set_code)  | [Up](lua.function.details.php) |  [Next](lua.ref.xml.doc_root.php) |
| vctx:set_code  | [Table of Contents](index) |  doc:root |
