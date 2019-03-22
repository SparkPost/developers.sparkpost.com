| [Prev](lua.ref.vctx_set_code)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.xml.doc_root) |

<a name="lua.ref.vctx_tarpit"></a>
## Name

vctx:tarpit — Issue a time cost on the inbound session

<a name="idp19327536"></a>
## Synopsis

`vctx:tarpit(interval);`

`interval: number`<a name="idp19330496"></a>
## Description

This instructs Momentum that the SMTP session should be put on hold for the specified number of seconds. Currently only the SMTP listener supports this.

Enable this function with the statement `require('msys.extended.vctx');`.

<a name="lua.ref.vctx_tarpit.example"></a>

**Example 70.72. vctx:tarpit example**

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

| [Prev](lua.ref.vctx_set_code)  | [Up](lua.function.details) |  [Next](lua.ref.xml.doc_root) |
| vctx:set_code  | [Table of Contents](index) |  doc:root |

