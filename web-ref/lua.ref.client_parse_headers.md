|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.http.client.new)  | 15.2. Lua Functions |  [Next](lua.ref.client_set_header.php) |

<a name="lua.ref.client_parse_headers"></a>
## Name

client:parse_headers — Parse the headers of an HTTP response

<a name="idp23803328"></a>
## Synopsis

`require('msys.http.client')`

`client:parse_headers(headers);`

`headers: table`<a name="idp23806720"></a>
## Description

Parse the headers of an HTTP response. Use this function in the following way:

`local headers = client:parse_headers(client:get_headers());`

Returns a table with the header name as a key and the header value as the value.

<a name="idp23809216"></a>
## See Also

[msys.http.client.new](lua.ref.msys.http.client.new "msys.http.client.new"), [client:set_timeout](lua.ref.client_set_timeout.php "client:set_timeout"), [client:do_request](lua.ref.client_do_request.php "client:do_request"), [client:get_status](lua.ref.client_get_status.php "client:get_status"), [client:set_header](lua.ref.client_set_header.php "client:set_header"), [client:get_body](lua.ref.client_get_body.php "client:get_body") [client:get_headers](lua.ref.client_get_headers.php "client:get_headers")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.http.client.new)  | [Up](lua.function.details.php) |  [Next](lua.ref.client_set_header.php) |
| msys.http.client.new  | [Table of Contents](index) |  client:set_header |
