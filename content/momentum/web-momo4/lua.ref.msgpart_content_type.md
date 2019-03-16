| [Prev](lua.ref.msgpart_body_replace)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msgpart_header) |

<a name="lua.ref.msgpart_content_type"></a>
## Name

msgpart:content_type — Returns a table of content type related information

<a name="idp17082816"></a>
## Synopsis

`msgpart:content_type();`

<a name="idp17085024"></a>
## Description

Returns a table of content type related information with the following fields:

*   mimetype (text/plain)

*   charset (utf-8)

*   encoding (base64)

*   is_attachment – This element is a boolean and is always `true` when there is a filename in Content-Type/Content-Disposition.

*   filename – The "filename" attribute is taken from the "filename" attribute in the Content-Disposition header if present, otherwise the "name" parameter from the Content-Type header is used.

### Note

This function only returns one filename. The filename specified in the Content-Disposition field takes precedence over the name parameter specified in Content-Type.

Enable this function with the statement `require('msys.extended.message');`.

<a name="lua.ref.msgpart.content_type.example2"></a>

**Example 70.44. msgpart:content_type example**

```
require("msys.core");
require('msys.extended.message');

local mod = {};

function mod:validate_data_spool_each_rcpt (msg, accept, vctx)
  local msgpart = msg:mime(true);
  while msgpart != nil do
    local ct = msgpart:content_type();
    for k,v in pairs(ct) do
      print(k,v)
    end
    msgpart = msgpart.thread;
  end
  return msys.core.VALIDATE_DONE;
end

msys.registerModule('validate_data_spool_each_rcpt', mod);
```

| [Prev](lua.ref.msgpart_body_replace)  | [Up](lua.function.details) |  [Next](lua.ref.msgpart_header) |
| msgpart:body_replace  | [Table of Contents](index) |  msgpart:header |

