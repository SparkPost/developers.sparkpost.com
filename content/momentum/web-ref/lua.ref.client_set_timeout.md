|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.client_set_header)  | 15.2. Lua Functions |  [Next](lua.ref.curl.c_close.php) |

<a name="lua.ref.client_set_timeout"></a>
## Name

client:set_timeout — Set the timeout for an HTTP client

<a name="idp23833120"></a>
## Synopsis

`require('msys.http.client')`

`client:set_timeout(number);`

`number: integer (optional)`<a name="idp23836528"></a>
## Description

Set the timeout for an HTTP client. Setting the parameter to an integer value determines the length of the timeout. Passing no parameter clears the timeout setting.

<a name="idp23837920"></a>
## See Also

[msys.http.client.new](lua.ref.msys.http.client.new "msys.http.client.new"), [client:do_request](lua.ref.client_do_request.php "client:do_request"), [client:get_status](lua.ref.client_get_status.php "client:get_status"), [client:set_header](lua.ref.client_set_header.php "client:set_header"), [client:get_body](lua.ref.client_get_body.php "client:get_body"), [client:parse_headers](lua.ref.client_parse_headers.php "client:parse_headers") [client:get_headers](lua.ref.client_get_headers.php "client:get_headers")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.client_set_header)  | [Up](lua.function.details.php) |  [Next](lua.ref.curl.c_close.php) |
| client:set_header  | [Table of Contents](index) |  c:close |
