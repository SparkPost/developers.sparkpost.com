| [Prev](lua.ref.msys.dumper.Dumper)  | 15.2. Lua Functions |  [Next](lua.ref.msys.gauge_cache.dec.php) |

<a name="lua.ref.msys.expurgate.scan"></a>
## Name

msys.expurgate.scan — Scan using the Eleven antivirus engine

<a name="idp26598480"></a>
## Synopsis

`msys.expurgate.scan(msg, accept, vctx);`

```
msg: userdata, ec_message type
accept: userdata, accept_construct type
vctx: userdata, validate_context type
```
<a name="idp26601264"></a>
## Description

You must load and correctly configure the eleven module before using this function. Be sure to set the module option `Enabled` to `false`. This function can be invoked at the data, spool or each_rcpt phases where there is a complete message. It will not work at the connect, ehlo, mailfrom or rcptto phases. `msg` is the email to be scored; `accept` is the accept_construct and `vctx` is the validation context. Use this function to scan the mail. The scan result is a tuple consisting of the following: `major-type-string`, `minor-type-string`, `major-type-int`, `minor-type-int`.

String values for major type:

*   unknown

*   clean

*   suspect

*   spam

*   bulk

*   dangerous

String values for minor type:

*   normal

*   empty

*   empty-body

*   almost-empty

*   bounce

*   advertisement

*   porn

*   virus

*   attachment

*   code

*   iframe

*   outbreak

*   url

*   url-count

*   mail-count

*   sender

Integer values for major type:

*   msys.expurgate.TYPE_UNKNOWN

*   msys.expurgate.TYPE_CLEAN

*   msys.expurgate.TYPE_SUSPECT

*   msys.expurgate.TYPE_SPAM

*   msys.expurgate.TYPE_BULK

*   msys.expurgate.TYPE_DANGEROUS

Integer values for minor type:

*   msys.expurgate.SUBTYPE_NORMAL

*   msys.expurgate.SUBTYPE_CLEAN_EMPTY

*   msys.expurgate.SUBTYPE_CLEAN_ALMOST_EMPTY

*   msys.expurgate.SUBTYPE_CLEAN_EMPTY_BODY

*   msys.expurgate.SUBTYPE_CLEAN_BOUNCE

*   msys.expurgate.SUBTYPE_BULK_ADV

*   msys.expurgate.SUBTYPE_BULK_PORN

*   msys.expurgate.SUBTYPE_DANGEROUS_VIRUS

*   msys.expurgate.SUBTYPE_DANGEROUS_ATTACHMENT

*   msys.expurgate.SUBTYPE_DANGEROUS_CODE

*   msys.expurgate.SUBTYPE_DANGEROUS_IFRAME

*   msys.expurgate.SUBTYPE_DANGEROUS_OUTBREAK

*   msys.expurgate.SUBTYPE_SUSPECT_URL

*   msys.expurgate.SUBTYPE_SUSPECT_URL_COUNT

*   msys.expurgate.SUBTYPE_SUSPECT_MAIL_COUNT

*   msys.expurgate.SUBTYPE_SUSPECT_SENDER

*   msys.expurgate.SUBTYPE_SUSPECT_USER1

*   msys.expurgate.SUBTYPE_SUSPECT_USER2

*   msys.expurgate.SUBTYPE_SUSPECT_USER3

*   msys.expurgate.SUBTYPE_SUSPECT_USER4

*   msys.expurgate.SUBTYPE_SUSPECT_USER5

*   msys.expurgate.SUBTYPE_SUSPECT_USER6

*   msys.expurgate.SUBTYPE_SUSPECT_USER7

*   msys.expurgate.SUBTYPE_SUSPECT_USER8

*   msys.expurgate.SUBTYPE_SUSPECT_USER9

The major and minor types are also set within the validation context (VCTX_MESS). Look them up using the following keys:

*   `eleven-majorscore` is mapped to major type's integer value (in string format).

*   `eleven-result` is mapped to major type's string value.

*   `eleven-minorscore` is mapped to minor type's integer value (in string format).

*   `eleven-result-subtype` is mapped to minor type's string value.

```
require("msys.core")
require("msys.extended.message")
require("msys.expurgate")

local function evaluate(vctx, major, minor, major_str, minor_str)
  if major == msys.expurgate.TYPE_CLEAN
    or major == msys.expurgate.TYPE_BULK and minor == msys.expurgate.SUBTYPE_NORMAL then
    return msys.core.VALIDATE_CONT
  else
    vctx:set_code(550, major_str .. "/" .. minor_str .. ":" .. major .. "/" .. minor)
    return msys.core.VALIDATE_DONE
  end
end

local function scan(msg, ac, vctx)
  local a, b, c, d;
  local l, m, n, o;

  msys.expurgate.scan();
  msys.expurgate.scan(nil);
  msys.expurgate.scan(nil, nil);
  msys.expurgate.scan(nil, nil, nil);

  a, b, c, d = msys.expurgate.scan();
  l, m, n, o = msys.expurgate.scan(msg, accept, ctx)

  if a ~= l or b ~= m or c ~= n or d ~= o then
    error("inconsistent return values");
  end

  return a, b, c, d;
end

local mod = {};
function mod:validate_data(msg, accept, vctx)
  local major_type, minor_type, major_str, minor_str = scan(msg, accept, ctx)
  print ("major/minor", major_type .. "/" .. minor_type)
  return evaluate(vctx, major_type, minor_type, major_str, minor_str)
end
msys.registerModule("test_scan", mod);
```

Enable this function with the statement `require('msys.expurgate');`.

<a name="idp26664704"></a>
## See Also

[Section 14.32, “eleven – Module”](modules.eleven "14.32. eleven – Module")

| [Prev](lua.ref.msys.dumper.Dumper)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.gauge_cache.dec.php) |
| msys.dumper.Dumper  | [Table of Contents](index) |  msys.gauge_cache.dec |
