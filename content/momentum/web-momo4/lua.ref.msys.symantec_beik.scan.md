|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.rfc3464.send_mdn)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.threadpool.count) |

<a name="lua.ref.msys.symantec_beik.scan"></a>
## Name

msys.symantec_beik.scan — Scan using BEIK

<a name="idp18424688"></a>
## Synopsis

`msys.symantec_beik.scan(msg, vctx);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
```
<a name="idp18427664"></a>
## Description

Use this function to scan email. You must load and correctly configure the beik module before using this function. Be sure to load the beik module in passive mode by setting `Enabled` to `false`. For details, see [Section 71.10, “beik – Symantec Brightmail™ Engine Integration Kit”](modules.beik "71.10. beik – Symantec Brightmail™ Engine Integration Kit").

It can be invoked in the data, spool, or each_rcpt phases, and it will not work at the connect, ehlo, mailfrom, or rcptto phases.

Enable this function with the statement `require('msys.symantec_beik');`.

It takes the following parameters;

*   `msg` – Email to be scanned

*   `vctx` – Validation context

This function returns a tuple with the following members:

*   `code` – Scan result. Returned values are numeric BEIK codes.

*   `beik_destination` – Where the email should go. Returned values are `tracker`, `inbox`, and `is-spam`.

*   `is_default` – Returned value is `0` or `1`. When `1` is returned, the mail should be dispatched to its original destination.

*   `tracker` – String suitable for use as a header.

<a name="lua.ref.msys.symantec_beik.scan.example"></a>

**Example 70.61. msys.symantec_beik_scan example**

```
require("msys")
require("msys.core")
require("msys.symantec_beik")

local mod = {}
function mod:validate_data(msg, accept, vctx)
  print ("type(msg)", msys.type(msg))
  print ("type(accept)", msys.type(accept))
  print ("type(vctx)", msys.type(vctx))
  local a, b, is_default, tracker = msys.symantec_beik.scan(msg, vctx)
  if a == 0 then
    print("Error found: ", b)
    return msys.core.VALIDATE_DONE
  else
    print("return code:", a)
    print("beik_destination:", b)
    print ("beik_is_default:", is_default)
    print("beik_tracker:", tracker)
    return msys.core.VALIDATE_CONT
  end
end
msys.registerModule("test_beik", mod);
```

*Note*: When the first returned value is `0`, an error has occurred. The second return value contains the error message.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.rfc3464.send_mdn)  | [Up](lua.function.details) |  [Next](lua.ref.msys.threadpool.count) |
| msys.rfc3464.send_mdn  | [Table of Contents](index) |  msys.threadpool.count |

