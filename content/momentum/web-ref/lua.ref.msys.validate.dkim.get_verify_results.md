|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.vctx_conn_get)  | 15.2. Lua Functions |  [Next](lua.ref.json.decode.php) |

<a name="lua.ref.msys.validate.dkim.get_verify_results"></a>
## Name

msys.validate.dkim.get_verify_results — return the number of DKIM signature results

<a name="idp25177328"></a>
## Synopsis

`require('msys.validate.dkim')`

`msys.validate.dkim.get_verify_results(vctx);`

`vctx: validation_context type (optional)`<a name="idp25180768"></a>
## Description

**Configuration Change. ** This feature is available as of version 3.5.

This function returns the number of DKIM signature results and the results table. If the optional parameter is not present, the validation context will be retrieved from the Lua bag state. Use this function in conjunction with the `dkim.verify_results_get_item` as shown below:

<a name="lua.ref.msys.validate.dkim.get_verify_results.example"></a>

**Example 15.36. msys.dkim.get_verify_results**

```
require("msys.core");
require("msys.validate.dkim");
require("msys.extended.message");

local mod = {};

function mod:validate_data_spool(msg, accept, vctx)
  local count = 0
  local i = 0
  local result
  local results
  local dkimveres_hdr
  local dkimveres_hdr2
  local p
  local hdrs
  local results_str = ""
  local results_str2 = ""
  count, results = msys.validate.dkim.get_verify_results (vctx)

  if count > 0 then
    for i = 0, count-1 do
      result = msys.validate.dkim.verify_results_get_item (results, i)
      if result ~= nil then
        if i > 0 then
          results_str = results_str .. ", "
        end
        results_str = results_str .. result.diagnostic
        if result.query ~= nil then
          results_str2 = results_str2 .. "q=" .. result.query .. " "
        end
        if result.algorithm ~= nil then
          results_str2 = results_str2 .. "a=" .. result.algorithm .. " "
        end
        print ("result status: " .. msys.validate.dkim.verify_status_to_string(result.status))
      end
    end

    print (results_str, results_str2)
    print ("results.ref: " .. results.ref)
  end
  results = nil

  msg:header("X-DKIM-Results", results_str, "prepend")
  msg:header("N-DKIM-Results", results_str2, "prepend")

  return msys.core.VALIDATE_CONT;
end

msys.registerModule("dkim_verify_results", mod);
```

This function is valid in the validate_data_spool, data and data_spool_each_rcpt phases. Enable this function with the statement `require('msys.validate.dkim');`.

<a name="idp25193056"></a>
## See Also

[msys.validate.dkim.verify_results_get_count](lua.ref.msys.validate.dkim.verify_results_get_count "msys.validate.dkim.verify_results_get_count"), [msys.validate.dkim.verify_results_get_item](lua.ref.msys.validate.dkim.verify_results_get_item.php "msys.validate.dkim.verify_results_get_item") [msys.validate.dkim.verify_status_to_string](lua.ref.msys.validate.dkim.verify_status_to_string.php "msys.validate.dkim.verify_status_to_string")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.policyeditor.vctx_conn_get)  | [Up](lua.function.details.php) |  [Next](lua.ref.json.decode.php) |
| msys.policyeditor.vctx_conn_get  | [Table of Contents](index) |  json.decode |
