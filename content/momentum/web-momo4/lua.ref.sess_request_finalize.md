| [Prev](lua.ref.sess_request_delete_header)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.sess_request_set_body) |

<a name="lua.ref.sess_request_finalize"></a>
## Name

sess:request_finalize — Finalize changes to an HTTP request

<a name="idp15290416"></a>
## Synopsis

`require('msys.httpclnt')`

`sess:request_finalize(update);`

`update: boolean`<a name="idp15294128"></a>
## Description

Finalize changes to an HTTP session. Call this function whenever the data in an http_session has been modified. Set `update` to `1` if you are updating existing data. If you are adding new session elements, set it to `0`.

For a code example see [http_request_eval](https://support.messagesystems.com/docs/web-push/push.http_request_eval). Use this function in the `http_request_eval` callout.

<a name="idp15299904"></a>
## See Also

[sess:request_set_body](lua.ref.sess_request_set_body "sess:request_set_body") and [sess:request_add_header](lua.ref.sess_request_add_header "sess:request_add_header")

| [Prev](lua.ref.sess_request_delete_header)  | [Up](lua.function.details) |  [Next](lua.ref.sess_request_set_body) |
| sess:request_delete_header  | [Table of Contents](index) |  sess:request_set_body |

