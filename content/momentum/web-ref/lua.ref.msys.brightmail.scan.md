|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.bounce.classify_smtp_response)  | 15.2. Lua Functions |  [Next](lua.ref.msys.cidr.define.php) |

<a name="lua.ref.msys.brightmail.scan"></a>
## Name

msys.brightmail.scan — Use Brightmail to scan messages

<a name="idp26241216"></a>
## Synopsis

`msys.brightmail.scan(msg, accept, vctx);`

```
msg: userdata, ec_message type
accept: userdata, accept_construct type
vctx: userdata, validate_context type
```
<a name="idp26244016"></a>
## Description

In order for this function to work, you must configure the brightmail module. Be sure to set the brightmail module option `sieve_mode` to `on`. This function can be invoked at the data, spool or each_rcpt phases. It will not work at the connect, ehlo, mailfrom or rcptto phases. `msg` is the email to be scanned; `accept` is the accept_construct and `vctx` is the validation context. Use this function to scan the mail. A tuple is returned with the following members:

*   `verdict` the scan result. Possible values include `spam` and `inbox`.

*   `is_default` if true, the mail should be dispatched to original destination.

*   `rules` a list of the brightmail rule numbers used to reach the verdict. The numbers are separated by a space and in string format. This key is available only when the brightmail module is configured and performs the scanning.

*   `tracker` a string suitable for use as the X-Brightmail-Tracker header. This key is available only when the brightmail module is configured and performs the scanning.

### Warning

Do not use `pcall` with this function. Also, note that the brightmail module option, `sieve_mode`, must be set to `on` if you wish to use this function.

<a name="lua.ref.msys.brightmail.scan.example"></a>

**Example 15.51. msys.brightmail.scan example**

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

Enable this function with the statement `require('msys.brightmail');`.

<a name="idp26260736"></a>
## See Also

[Section 14.14, “brightmail – Brightmail Module”](modules.brightmail "14.14. brightmail – Brightmail Module")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.bounce.classify_smtp_response)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.cidr.define.php) |
| msys.bounce.classify_smtp_response  | [Table of Contents](index) |  msys.cidr.define |
