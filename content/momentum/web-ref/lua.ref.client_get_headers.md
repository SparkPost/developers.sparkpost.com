| [Prev](lua.ref.client_get_body)  | 15.2. Lua Functions |  [Next](lua.ref.client_get_status.php) |

<a name="lua.ref.client_get_headers"></a>
## Name

client:get_headers — Get HTTP headers

<a name="idp23685472"></a>
## Synopsis

`require('msys.http.client')`

client:get_headers();

<a name="idp23687744"></a>
## Description

Get the HTTP headers. Use this function in the following way:

`local headers = client:parse_headers(client:get_headers());`

This function returns the raw HTTP headers as a table. Use `client:parse_headers` to create a key/value table where the key is the header name.

<a name="idp23690704"></a>
## See Also

[msys.http.client.new](lua.ref.msys.http.client.new "msys.http.client.new"), [client:set_timeout](lua.ref.client_set_timeout.php "client:set_timeout"), [client:set_header](lua.ref.client_set_header.php "client:set_header"), [client:do_request](lua.ref.client_do_request.php "client:do_request"), [client:get_status](lua.ref.client_get_status.php "client:get_status"), [client:get_body](lua.ref.client_get_body.php "client:get_body"), [client:parse_headers](lua.ref.client_parse_headers.php "client:parse_headers")

| [Prev](lua.ref.client_get_body)  | [Up](lua.function.details.php) |  [Next](lua.ref.client_get_status.php) |
| client:get_body  | [Table of Contents](index) |  client:get_status |
