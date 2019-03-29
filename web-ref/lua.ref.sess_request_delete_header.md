|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.sess_request_add_header)  | 15.2. Lua Functions |  [Next](lua.ref.sess_request_finalize.php) |

<a name="lua.ref.sess_request_delete_header"></a>
## Name

sess:request_delete_header — Delete a header from an HTTP session

<a name="idp23730480"></a>
## Synopsis

`require('msys.httpclnt');`

`sess:request__delete_header(header);`

`header: string`<a name="idp23733872"></a>
## Description

Delete a header from an HTTP session. `header` is the key that you wish to delete. You must call [sess:request_finalize](lua.ref.sess_request_finalize "sess:request_finalize") after invoking this function. Use this function in the `http_request_eval` callout.

On success this function returns `1` and on failure `0`.

<a name="idp23738224"></a>
### See Also

[sess:request_finalize](lua.ref.sess_request_finalize "sess:request_finalize") and [sess:request_add_header](lua.ref.sess_request_add_header.php "sess:request_add_header")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.sess_request_add_header)  | [Up](lua.function.details.php) |  [Next](lua.ref.sess_request_finalize.php) |
| sess:request_add_header  | [Table of Contents](index) |  sess:request_finalize |
