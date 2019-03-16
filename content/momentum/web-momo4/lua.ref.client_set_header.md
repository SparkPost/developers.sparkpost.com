| [Prev](lua.ref.client_parse_headers)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.client_set_timeout) |

<a name="lua.ref.client_set_header"></a>
## Name

client:set_header — Set an HTTP header

<a name="idp15370144"></a>
## Synopsis

`require('msys.http.client')`

`client:set_header(header);`

`header: string (optional)`<a name="idp15373872"></a>
## Description

Set a client's HTTP header. To set multiple headers, invoke this function multiple times. Calling this function with no arguments will clear the headers.

<a name="lua.ref.client_set_header.example"></a>

**Example 70.13. client:set_header example**

```
function httpclient_test_post(url, postdata)
  client:set_header("Content-Type: text/xml; charset=utf-8");
  client:do_request("POST", url, postdata);
end
```

<a name="idp15377616"></a>
## See Also

[msys.http.client.new](lua.ref.msys.http.client.new "msys.http.client.new"), [client:set_timeout](lua.ref.client_set_timeout "client:set_timeout"), [client:do_request](lua.ref.client_do_request "client:do_request"), [client:get_status](lua.ref.client_get_status "client:get_status"), [client:get_body](lua.ref.client_get_body "client:get_body"), [client:parse_headers](lua.ref.client_parse_headers "client:parse_headers") [client:get_headers](lua.ref.client_get_headers "client:get_headers")

| [Prev](lua.ref.client_parse_headers)  | [Up](lua.function.details) |  [Next](lua.ref.client_set_timeout) |
| client:parse_headers  | [Table of Contents](index) |  client:set_timeout |

