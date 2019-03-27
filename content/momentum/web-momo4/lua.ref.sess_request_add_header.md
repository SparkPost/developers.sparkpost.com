| [Prev](lua.ref.client_get_status)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.sess_request_delete_header) |

<a name="lua.ref.sess_request_add_header"></a>
## Name

sess:request_add_header — Add a header to an HTTP session

<a name="idp15258048"></a>
## Synopsis

`require('msys.httpclnt')`

`sess:request_add_header(header, value, replace);`

```
header: string
value: string
replace: boolean
```
<a name="idp15261808"></a>
## Description

Set the header of an HTTP session. Use `header` for the header identifier and `value` for its value. If you are replacing an existing header, set `repace` to `1`. Otherwise set it to `0`. You must call [sess:request_finalize](lua.ref.sess_request_finalize "sess:request_finalize") after invoking this function.

For a code example see [http_request_eval](https://support.messagesystems.com/docs/web-push/push.http_request_eval).

<a name="idp15267824"></a>
## See Also

[sess:request_set_body](lua.ref.sess_request_set_body "sess:request_set_body") and [sess:request_finalize](lua.ref.sess_request_finalize "sess:request_finalize")

| [Prev](lua.ref.client_get_status)  | [Up](lua.function.details) |  [Next](lua.ref.sess_request_delete_header) |
| client:get_status  | [Table of Contents](index) |  sess:request_delete_header |

