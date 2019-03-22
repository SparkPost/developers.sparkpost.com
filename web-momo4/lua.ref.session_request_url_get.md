| [Prev](lua.ref.msys.unlock)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.session_response_status_set_std) |

<a name="lua.ref.session_request_url_get"></a>
## Name

session:request_url_get — Get the request URL

<a name="idp16453632"></a>
## Synopsis

`session:request_url_get();`

<a name="idp16455392"></a>
## Description

Use an [ec_httpsrv_session](https://support.messagesystems.com/docs/web-c-api/structs.ec_httpsrv_session) object and this method to return an [ec_url_details](https://support.messagesystems.com/docs/web-c-api/structs.ec_url_details) object. For example code, see [Example 70.35, “session:request_url_get Example”](lua.ref.session_request_url_get#lua.ref.session_request_url_get.example "Example 70.35. session:request_url_get Example") and [Example 70.30, “msys.httpsrv.register Example”](lua.ref.msys.httpsrv.register#lua.ref.msys.httpsrv.register.example "Example 70.30. msys.httpsrv.register Example").

You can access the following fields of the ec_url_details userdata object:

*   `url_details.url` – Request URL

*   `url_details.attrs` – Request URL attributes

<a name="lua.ref.session_request_url_get.example"></a>

**Example 70.35. session:request_url_get Example**

```
require("msys.extended.httpsrv")

local function params_handler(session)
  local url_details = session:request_url_get()
  local params = {}

  if url_details.attrs ~= nil then
    local iter = msys.core.dict_iter2(url_details.attrs)
    repeat
      local rc, k, v = msys.core.dict_next(url_details.attrs, iter)
      if rc != 0 then
        params[k] = v
      end
    until rc == 0
    msys.core.dict_iter2_free(url_details.attrs, iter)
  end

  if params.reply == nil or params.reply ~= "true" then
    -- If the reply parameter was missing, return the default HTTP response.
    print("reply not true in " .. url_details.url)
    return msys.httpsrv.DONE
  end

  -- Return all the parameters in a string.
  local sorted_params = {}
  local reply = ""

  for k, v in pairs(params) do
    table.insert(sorted_params, k)
  end
  table.sort(sorted_params)
  for i, k in ipairs(sorted_params) do
    reply = reply .. k .. "=" .. params[k] .. " "
  end
  session:response_status_set_std(200, reply, "text/plain")
end
```

Enable this function with the statement `require("msys.extended.httpsrv");`.

<a name="idp16467504"></a>
## See Also

[msys.httpsrv.register](lua.ref.msys.httpsrv.register "msys.httpsrv.register") and [session:response_status_set_std](lua.ref.session_response_status_set_std "session:response_status_set_std")

| [Prev](lua.ref.msys.unlock)  | [Up](lua.function.details) |  [Next](lua.ref.session_response_status_set_std) |
| msys.unlock  | [Table of Contents](index) |  session:response_status_set_std |

