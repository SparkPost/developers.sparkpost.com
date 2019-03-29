|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.client_parse_headers)  | 15.2. Lua Functions |  [Next](lua.ref.client_set_timeout.php) |

<a name="lua.ref.client_set_header"></a>
## Name

client:set_header — Set an HTTP header

<a name="idp23817792"></a>
## Synopsis

`require('msys.http.client')`

`client:set_header(header);`

`header: string (optional)`<a name="idp23821200"></a>
## Description

Set a client's HTTP header. To set multiple headers, invoke this function multiple times. Calling this function with no arguments will clear the headers.

<a name="lua.ref.client_set_header.example"></a>

**Example 15.13. client:set_header example**

```
function httpclient_test_post(url, postdata)
  client:set_header("Content-Type: text/xml; charset=utf-8");
  client:do_request("POST", url, postdata);
end
```

<a name="idp23824592"></a>
## See Also

[msys.http.client.new](lua.ref.msys.http.client.new "msys.http.client.new"), [client:set_timeout](lua.ref.client_set_timeout.php "client:set_timeout"), [client:do_request](lua.ref.client_do_request.php "client:do_request"), [client:get_status](lua.ref.client_get_status.php "client:get_status"), [client:get_body](lua.ref.client_get_body.php "client:get_body"), [client:parse_headers](lua.ref.client_parse_headers.php "client:parse_headers") [client:get_headers](lua.ref.client_get_headers.php "client:get_headers")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.client_parse_headers)  | [Up](lua.function.details.php) |  [Next](lua.ref.client_set_timeout.php) |
| client:parse_headers  | [Table of Contents](index) |  client:set_timeout |
