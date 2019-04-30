|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.session_request_url_get)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.json.decode) |

<a name="lua.ref.session_response_status_set_std"></a>
## Name

session:response_status_set_std — Set the HTTP status for the session response

<a name="idp16474752"></a>
## Synopsis

`session:response_status_set_std(cod, message, mimetype);`

code: numeric
message: string
mimetype: string (optional)

<a name="idp16477088"></a>
## Description

Use this function with [msys.httpsrv.register](lua.ref.msys.httpsrv.register "msys.httpsrv.register") to set the HTTP status for the session response. For example code see [Example 70.30, “msys.httpsrv.register Example”](lua.ref.msys.httpsrv.register#lua.ref.msys.httpsrv.register.example "Example 70.30. msys.httpsrv.register Example"). For a description of the session object, see [ec_httpsrv_session](https://support.messagesystems.com/docs/web-c-api/structs.ec_httpsrv_session).

Set the `code` to a valid HTTP response code, the `message` to an appropriate message, and `mimetype` to a mime type. The following is an example:

`session:response_status_set_std(200, response, "text/plain");`

Enable this function with the statement `require("msys.extended.httpsrv");`.

<a name="idp16484304"></a>
## See Also

[msys.httpsrv.register](lua.ref.msys.httpsrv.register "msys.httpsrv.register") and [session:request_url_get](lua.ref.session_request_url_get "session:request_url_get")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.session_request_url_get)  | [Up](lua.function.details) |  [Next](lua.ref.json.decode) |
| session:request_url_get  | [Table of Contents](index) |  json.decode |

