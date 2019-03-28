|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.sess_request_set_body)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.http.client.new) |

<a name="lua.ref.msys.httpclnt.http_status_classifier"></a>
## Name

msys.httpclnt.http_status_classifier — Determine the delivery status of the "DLV_Response_Status" variable

<a name="idp15321952"></a>
## Synopsis

```
require('msys.httpclnt');
require('msys.delivery');
```

`msys.httpclnt.http_status_classifier(status);`

`status: numeric`<a name="idp15325696"></a>
## Description

This function returns the delivery status of the "DLV_Response_Status" variable. It classifies the "DLV_Response_Status" variable as one of the following:

*   `msys.delivery.DELIVERY_SUCCESS`

*   `msys.delivery.DELIVERY_PERMFAILED`

Use this function in the `http_response_eval` callout.

<a name="idp15331728"></a>
## See Also

[Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/), [msys.gcm.gcm_classify_error](lua.ref.msys.gcm.gcm_classify_error "msys.gcm.gcm_classify_error") and [msys.apn.apn_status_classifier](lua.ref.msys.apn.apn_status_classifier "msys.apn.apn_status_classifier").

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.sess_request_set_body)  | [Up](lua.function.details) |  [Next](lua.ref.msys.http.client.new) |
| sess:request_set_body  | [Table of Contents](index) |  msys.http.client.new |

