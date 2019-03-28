|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.http.client.new)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.client_set_header) |

<a name="lua.ref.client_parse_headers"></a>
## Name

client:parse_headers — Parse the headers of an HTTP response

<a name="idp15353984"></a>
## Synopsis

`require('msys.http.client')`

`client:parse_headers(headers);`

`headers: table`<a name="idp15357696"></a>
## Description

Parse the headers of an HTTP response. Use this function in the following way:

`local headers = client:parse_headers(client:get_headers());`

Returns a table with the header name as a key and the header value as the value.

<a name="idp15360416"></a>
## See Also

[msys.http.client.new](lua.ref.msys.http.client.new "msys.http.client.new"), [client:set_timeout](lua.ref.client_set_timeout "client:set_timeout"), [client:do_request](lua.ref.client_do_request "client:do_request"), [client:get_status](lua.ref.client_get_status "client:get_status"), [client:set_header](lua.ref.client_set_header "client:set_header"), [client:get_body](lua.ref.client_get_body "client:get_body") [client:get_headers](lua.ref.client_get_headers "client:get_headers")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.http.client.new)  | [Up](lua.function.details) |  [Next](lua.ref.client_set_header) |
| msys.http.client.new  | [Table of Contents](index) |  client:set_header |

