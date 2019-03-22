| [Prev](lua.ref.thread.mutex)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.vctx_disconnect) |

<a name="lua.ref.vctx_add_recipient"></a>
## Name

vctx:add_recipient — Add an address to the recipient list for the inbound session

<a name="idp19240576"></a>
## Synopsis

`vctx:add_recipient(address);`

`address: string`<a name="idp19243504"></a>
## Description

This function adds an address or a table representing multiple addresses to the recipient list for the inbound session. If it is used in an invalid phase (after rcptlist final), it raises an error. Use this function in the following way:

<a name="lua.ref.vctx_add_recipient.example"></a>

**Example 70.69. vctx_add_recipient example**

```
require("msys.core");
require("msys.extended.message");
require("msys.extended.vctx");

local mod = {};

local function sum_table(tbl)
  if (tbl == nil) then
    return "";
  end
  local sum = "";
  for i=0,#tbl do
    sum = sum..tbl[i].." ";
  end
  return sum;
end

function mod:validate_data(str, accept, vctx)
  vctx:add_recipient("mailfrom@messagesystems.com");
  local addrs = vctx:recipient_list();
  print ("validate_mailfrom:rcpts: "..sum_table(addrs));
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("validate_data", mod);
```

Enable this function with the statement `require('msys.extended.vctx');`.

| [Prev](lua.ref.thread.mutex)  | [Up](lua.function.details) |  [Next](lua.ref.vctx_disconnect) |
| thread.mutex  | [Table of Contents](index) |  vctx:disconnect |

