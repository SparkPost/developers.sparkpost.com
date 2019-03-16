| [Prev](lua.ref.sess_request_delete_header)  | 15.2. Lua Functions |  [Next](lua.ref.sess_request_set_body.php) |

<a name="lua.ref.sess_request_finalize"></a>
## Name

sess:request_finalize — Finalize changes to an HTTP request

<a name="idp23744064"></a>
## Synopsis

`require('msys.httpclnt')`

`sess:request_finalize(update);`

`update: boolean`<a name="idp23747456"></a>
## Description

**Configuration Change. ** This function is available as of version 3.6.

Finalize changes to an HTTP session. Call this function whenever the data in an http_session has been modified. Set `update` to `1` if you are updating existing data. If you are adding new session elements, set it to `0`.

For a code example see [http_request_eval](https://support.messagesystems.com/docs/web-push/push.http_request_eval). Use this function in the `http_request_eval` callout.

<a name="idp23754496"></a>
## See Also

[sess:request_set_body](lua.ref.sess_request_set_body "sess:request_set_body") and [sess:request_add_header](lua.ref.sess_request_add_header.php "sess:request_add_header")

| [Prev](lua.ref.sess_request_delete_header)  | [Up](lua.function.details.php) |  [Next](lua.ref.sess_request_set_body.php) |
| sess:request_delete_header  | [Table of Contents](index) |  sess:request_set_body |
