|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.bounce.classify_smtp_response)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.cidr.define) |

<a name="lua.ref.msys.brightmail.scan"></a>
## Name

msys.brightmail.scan — Use Brightmail to scan messages

<a name="idp17623184"></a>
## Synopsis

`msys.brightmail.scan(msg, accept, vctx);`

```
msg: userdata, ec_message type
accept: userdata, accept_construct type
vctx: userdata, validate_context type
```
<a name="idp17626272"></a>
## Description

Use this function to scan the mail. You must load and correctly configure the brightmail module before using this function. Be sure to set the brightmail module option `sieve_mode` to `on`. For details, see [Section 71.14, “brightmail – Symantec Brightmail™ Content Scanning Support”](modules.brightmail "71.14. brightmail – Symantec Brightmail™ Content Scanning Support").

This function can be invoked at the data, spool, or each_rcpt phases, and it will not work at the connect, ehlo, mailfrom, or rcptto phases.

Enable this function with the statement `require('msys.brightmail');`.

It takes the following parameters:

*   `msg` – Email to be scanned

*   `accept` – accept_construct

*   `vctx` – Validation context

This function returns a tuple with the following members:

*   `verdict` – Scan result. Possible values include `spam` and `inbox`.

*   `is_default` – If true, the mail should be dispatched to original destination.

*   `rules` – List of the brightmail rule numbers used to reach the verdict. The numbers are separated by a space and in string format. This key is available only when the brightmail module is configured and performs the scanning.

*   `tracker` – String suitable for use as the X-Brightmail-Tracker header. This key is available only when the brightmail module is configured and performs the scanning.

### Warning

Do not use `pcall` with this function.

<a name="lua.ref.msys.brightmail.scan.example"></a>

**Example 70.50. msys.brightmail.scan example**

```
require("msys");
require("msys.brightmail");

local mod = {};

function mod:validate_data_spool_each_rcpt(msg, accept, vctx)
  local verdict, is_default, rules, tracker =
    msys.brightmail.scan(msg, accept, vctx);
  print("verdict:", verdict, " is_default:", is_default,
    " rules:", rules, " tracker:", tracker);
  vctx:set(msys.core.VCTX_MESS, 'bm_verdict', verdict);
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("test_bm", mod);
```

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.bounce.classify_smtp_response)  | [Up](lua.function.details) |  [Next](lua.ref.msys.cidr.define) |
| msys.bounce.classify_smtp_response  | [Table of Contents](index) |  msys.cidr.define |

