|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.av.scan)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.base64.decode) |

<a name="lua.ref.msys.av.scan_part"></a>
## Name

msys.av.scan_part — Perform a virus scan on a specific message part using the named engine

<a name="idp17521968"></a>
## Synopsis

`msys.av.scan_part(msg_part, av_engine_name, validate_context);`

```
msg_part: userdata, ec_message type
av_engine_name: string, optional
validate_context: userdata, validate_context type, optional
```
<a name="idp17525536"></a>
## Description

Use this function with AV engines that depend on the AV module, such as the clamav module.

This function performs a virus scan. The scan is done using the specified engine or, if no engine is specified, any installed engines that are supported by the AV module. if a virus is detected by an engine, the function will skip the remaining engines and return. For a list of these engines, see [Section 71.6, “antivirus – Antivirus”](modules.antivirus "71.6. antivirus – Antivirus").

Enable this function with the statement `require('msys.av');`.

This function takes the following parameters:

*   `msg_part`– required message part (msys.core:_ec_message_part)

*   `av_engine_name` – optional engine name

*   `validate_context` – optional validation context

If the `validate_context` parameter is omitted, it will be inferred from the calling environment, if possible. If `msg_part` is `nil`, this function will raise an error.

This function returns four values:

*   The *scan status* , which is one of the following values:

    *   msys.av.EC_AV_PART_IS_CONTAINER – A container was passed to `msys.av.scan`.

    *   msys.av.EC_AV_NAME_TOO_LONG – `av_engine_name` is longer than 40 characters.

    *   msys.av.EC_AV_NO_ENGINE – No AV engine is configured.

    *   msys.av.EC_AV_NOT_SUITABLE_FOR_STREAMING – AV engine cannot scan the message that was passed in as a stream.

    *   msys.av.EC_AV_ERROR – A runtime error occurred. For clamav-specific information, see [Section 71.17.1.1, “clamav Runtime Usage”](modules.clamav#modules.clamav.runtime "71.17.1.1. clamav Runtime Usage").

    *   msys.av.EC_AV_CLEAN – Meaning of this status depends on the AV engine.

    *   msys.av.EC_AV_INFECTED – Meaning of this status depends on the AV engine. For engine-specific information, see [Section 71.23.2, “Context Variables”](modules.csapi#modules.csapi.context.variables "71.23.2. Context Variables") and [Section 71.17.1.1, “clamav Runtime Usage”](modules.clamav#modules.clamav.runtime "71.17.1.1. clamav Runtime Usage").

    *   msys.av.EC_AV_UNSCANNABLE – Message could not be scanned.

*   An *informational string* , which typically contains the virus name; the precise contents of this string depend on the engine.

*   The *name of the AV engine*                  that detected the virus or `nil` if no virus was detected.

*   The *engine scan code*           or `nil` if no engine scan code is available. The scan code returned is specific to the engine reporting the error. For engine-specific information, see [Section 71.23.2, “Context Variables”](modules.csapi#modules.csapi.context.variables "71.23.2. Context Variables") and [Section 71.17.1.1, “clamav Runtime Usage”](modules.clamav#modules.clamav.runtime "71.17.1.1. clamav Runtime Usage").

<a name="lua.ref.msys.av.scan_part.example"></a>

**Example 70.48. msys.av.scan_part example using clamav**

```
require("msys.av");

 local mod = {};

 function mod:validate_data(msg_part, accept, vctx)
   local rc
   local result
   local eng
   local s_code
   rc, result, eng, s_code = msys.av.scan_part(msg_part, "clamav", vctx);
   print ("rc: ", rc, map_to_symbol(rc), " result: ", result, " engine: ", eng, " scan code: ", s_code)
   if rc == msys.av.EC_AV_INFECTED then
     vctx:set_code(550, "The mail contains virus: " .. result)
     return msys.core.VALIDATE_DONE;
   end
   return msys.core.VALIDATE_CONT;
 end

 local function map_to_symbol(rc)
   if rc == msys.av.EC_AV_PART_IS_CONTAINER then
     return "EC_AV_PART_IS_CONTAINER"
   elseif rc == msys.av.EC_AV_NAME_TOO_LONG then
     return "EC_AV_NAME_TOO_LONG"
   elseif rc == msys.av.EC_AV_NO_ENGINE then
     return "EC_AV_NO_ENGINE"
   elseif rc == msys.av.EC_AV_NOT_SUITABLE_FOR_STREAMING then
     return "EC_AV_NOT_SUITABLE_FOR_STREAMING"
   elseif rc == msys.av.EC_AV_ERROR then
     return "EC_AV_ERROR"
   elseif rc == msys.av.EC_AV_CLEAN then
     return "EC_AV_CLEAN"
   elseif rc == msys.av.EC_AV_INFECTED then
     return "EC_AV_INFECTED"
   elseif rc == msys.av.EC_AV_UNSCANNABLE then
     return "EC_AV_UNSCANNABLE"
   else
     return "UNKNOWN"
   end
 end

 msys.registerModule("test_av", mod);
```

<a name="idp17560256"></a>
## See Also

[msys.av.scan](lua.ref.msys.av.scan "msys.av.scan")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.av.scan)  | [Up](lua.function.details) |  [Next](lua.ref.msys.base64.decode) |
| msys.av.scan  | [Table of Contents](index) |  msys.base64.decode |

