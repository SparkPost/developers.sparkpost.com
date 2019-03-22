| [Prev](lua.ref.client_get_status)  | 15.2. Lua Functions |  [Next](lua.ref.sess_request_delete_header.php) |

<a name="lua.ref.sess_request_add_header"></a>
## Name

sess:request_add_header — Add a header to an HTTP session

<a name="idp23713984"></a>
## Synopsis

`require('msys.httpclnt')`

`sess:request_add_header(header, value, replace);`

```
header: string
value: string
replace: boolean
```
<a name="idp23717424"></a>
## Description

**Configuration Change. ** This function is available as of version 3.6.

Set the header of an HTTP session. Use `header` for the header identifier and `value` for its value. If you are replacing an existing header, set `repace` to `1`. Otherwise set it to `0`. You must call [sess:request_finalize](lua.ref.sess_request_finalize "sess:request_finalize") after invoking this function.

For a code example see [http_request_eval](https://support.messagesystems.com/docs/web-push/push.http_request_eval).

<a name="idp23724688"></a>
## See Also

[sess:request_set_body](lua.ref.sess_request_set_body "sess:request_set_body") and [sess:request_finalize](lua.ref.sess_request_finalize.php "sess:request_finalize")

| [Prev](lua.ref.client_get_status)  | [Up](lua.function.details.php) |  [Next](lua.ref.sess_request_delete_header.php) |
| client:get_status  | [Table of Contents](index) |  sess:request_delete_header |
