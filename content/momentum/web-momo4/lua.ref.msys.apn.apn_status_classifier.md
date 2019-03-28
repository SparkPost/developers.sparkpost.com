|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cloudmark.set_af_msi_address)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.client_do_request) |

<a name="lua.ref.msys.apn.apn_status_classifier"></a>
## Name

msys.apn.apn_status_classifier — Determine whether the delivery status code represents a permanent or temporary failure

<a name="idp15167088"></a>
## Synopsis

`require('msys.apn')`

`msys.apn.apn_status_classifier(status);`

`status: numeric`<a name="idp15170784"></a>
## Description

Determine the delivery status of the "DLV_Response_Status" variable in the context of an Apple push notification. This function classifies the "DLV_Response_Status" variable and returns one of the following values:

*   `msys.delivery.DELIVERY_SUCCESS`

*   `msys.delivery.DELIVERY_TEMPFAILED`

*   `msys.delivery.DELIVERY_PERMFAILED`

The following code example converts a failed Apple push notification to an SMPP message.

<a name="lua.ref.msys.apn_classify_error.example"></a>

**Example 70.10. msys.apn_classify_error example**

```
require("strict")
require("msys.delivery")
require("msys.apn")
require("msys.extended.message")

local mod = {}

function mod:generic_delivery_msg_dispose(msg)
  local status = msg:context_get(msys.core.ECMESS_CTX_MESS, "DLV_Response_Status")
  if status == "" then
    return msys.delivery.DELIVERY_CONTINUE
    -- "DLV_Response_Status" varies depending upon protocol
    -- but a message is treated as ok or delivered if and
    -- only if the DLV_Response_Status does not exist.
  elseif (msys.apn.apn_status_classifier(tonumber(status))==msys.delivery.DELIVERY_PERMFAILED) or
      (msys.apn.apn_status_classifier(tonumber(status))==msys.delivery.DELIVERY_TEMPFAILED) then
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

<a name="idp15180512"></a>
## See Also

[Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/) and [msys.gcm.gcm_classify_error](lua.ref.msys.gcm.gcm_classify_error "msys.gcm.gcm_classify_error")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cloudmark.set_af_msi_address)  | [Up](lua.function.details) |  [Next](lua.ref.client_do_request) |
| msys.cloudmark.set_af_msi_address  | [Table of Contents](index) |  client:do_request |

