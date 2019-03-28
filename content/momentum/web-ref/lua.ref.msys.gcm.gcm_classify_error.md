|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.gauge_cache.remove_item)  | 15.2. Lua Functions |  [Next](lua.ref.msys.gcm.gcm_get_result_error_code.php) |

<a name="lua.ref.msys.gcm.gcm_classify_error"></a>
## Name

msys.gcm.gcm_classify_error — Determine the delivery status of the "DLV_Response_Status" variable

<a name="idp26732112"></a>
## Synopsis

`msys.gcm.gcm_classify_error(status);`

`status: numeric`<a name="idp26734800"></a>
## Description

**Configuration Change. ** This function is available as of Momentum version 3.5.5.

This function returns the delivery status of the "DLV_Response_Status" variable. It classifies the "DLV_Response_Status" variable as one of the following:

*   `msys.delivery.DELIVERY_SUCCESS`

*   `msys.delivery.DELIVERY_TEMPFAILED`

*   `msys.delivery.DELIVERY_PERMFAILED`

<a name="lua.ref.msys.gcm.gcm_classify_error.example"></a>

**Example 15.59. msys.gcm.gcm_classify_error example**

```
require("strict")
require("msys.delivery")
require("msys.gcm")
require("msys.extended.message")

local mod = {}

function mod:generic_delivery_msg_dispose(msg)
  local status = msg:context_get(msys.core.ECMESS_CTX_MESS, "DLV_Response_Status")
  if status == "" then
    return msys.delivery.DELIVERY_CONTINUE
  -- "DLV_Response_Status" varies depending upon protocol
  -- but a message is treated as ok or delivered if and
  -- only if the DLV_Response_Status does not exist.
  elseif (msys.gcm.gcm_classify_error(tonumber(status))==msys.delivery.DELIVERY_PERMFAILED) or
      (msys.gcm.gcm_classify_error(tonumber(status))==msys.delivery.DELIVERY_TEMPFAILED) then
    -- reset context variable for DLV_Response_Status
    msg:context_delete(msys.core.ECMESS_CTX_MESS, "DLV_Response_Status")
    msg:inject(msg:mailfrom(), "defaultNumber@deliverSMPP")
    return msys.delivery.DELIVERY_DONE
  else
    print(status, " unknown disposition!\n")
  end
end

msys.registerModule("convert", mod);
```

### Note

When a message fails, you can use the generic_delivery_msg_dispose callout and reroute the message to another channel. Use the [msg:get_delivery_method](lua.ref.msg_get_delivery_method "msg:get_delivery_method") function to determine the protocol of the message.

Enable this function with the statement `require('msys.gcm');`.

<a name="idp26747440"></a>
## See Also

[Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/) and [msys.apn.apn_status_classifier](lua.ref.msys.apn.apn_status_classifier "msys.apn.apn_status_classifier")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.gauge_cache.remove_item)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.gcm.gcm_get_result_error_code.php) |
| msys.gauge_cache.remove_item  | [Table of Contents](index) |  msys.gcm.gcm_get_result_error_code |
