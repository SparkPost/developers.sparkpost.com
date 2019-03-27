| [Prev](lua.ref.msys.gcm.gcm_classify_error)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.pcre.match) |

<a name="lua.ref.msys.gcm.gcm_get_result_error_code"></a>
## Name

msys.gcm.gcm_get_result_error_code — Get the error code from the response results error

<a name="idp18199984"></a>
## Synopsis

`require('msys.gcm');`

`msys.gcm.gcm_get_result_error_code(error);`

`error: string`<a name="idp18204144"></a>
## Description

Get the error code from the response results error. The error code should be one of the following:

*   `msys.gcm.GCM_NO_ERROR`

*   `msys.gcm.GCM_UNAVAILABLE`

*   `msys.gcm.GCM_MISSING_REGISTRATION`

*   `msys.gcm.GCM_INVALID_REGISTRATION`

*   `msys.gcm.GCM_MISMATCH_SENDER_ID`

*   `msys.gcm.GCM_NOT_REGISTERED`

*   `msys.gcm.GCM_MESSAGE_TOO_BIG`

*   `msys.gcm.GCM_INVALID_DATA_KEY`

*   `msys.gcm.GCM_INVALID_TTL`

*   `msys.gcm.GCM_INTERNAL_SERVER_ERROR`

*   `msys.gcm.GCM_INVALID_PACKAGE_NAME`

*   `msys.gcm.GCM_UNKNOW`

<a name="idp18222768"></a>
## See Also

[Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/) and [msys.apn.apn_status_classifier](lua.ref.msys.apn.apn_status_classifier "msys.apn.apn_status_classifier").

| [Prev](lua.ref.msys.gcm.gcm_classify_error)  | [Up](lua.function.details) |  [Next](lua.ref.msys.pcre.match) |
| msys.gcm.gcm_classify_error  | [Table of Contents](index) |  msys.pcre.match |

