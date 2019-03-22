| [Prev](lua.ref.msys.apn.apn_status_classifier)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.client_get_body) |

<a name="lua.ref.client_do_request"></a>
## Name

client:do_request — Perform an HTTP request

<a name="idp15187904"></a>
## Synopsis

`require('msys.http.client')`

`client:do_request(type, url, data);`

```
type: string
url: string
data: string (optional)
```
<a name="idp15191648"></a>
## Description

Perform an HTTP request. The legal values for the `type` parameter are as follows:

*   GET

*   POST

*   PUT

*   DELETE

The `url` parameter defines the URL that will process the request.

The `data` parameter does not need to be provided when `type` is `GET`.

<a name="lua.ref.client_do_request.example"></a>

**Example 70.11. client:do_request example**

```
function httpclient_test_post(url, postdata)
  client:set_header("Content-Type: text/xml; charset=utf-8");
  client:do_request("POST", url, postdata);
end
```

<a name="idp15202576"></a>
## See Also

[msys.http.client.new](lua.ref.msys.http.client.new "msys.http.client.new"), [client:set_timeout](lua.ref.client_set_timeout "client:set_timeout"), [client:set_header](lua.ref.client_set_header "client:set_header"), [client:get_status](lua.ref.client_get_status "client:get_status"), [client:get_body](lua.ref.client_get_body "client:get_body"), [client:parse_headers](lua.ref.client_parse_headers "client:parse_headers") [client:get_headers](lua.ref.client_get_headers "client:get_headers")

| [Prev](lua.ref.msys.apn.apn_status_classifier)  | [Up](lua.function.details) |  [Next](lua.ref.client_get_body) |
| msys.apn.apn_status_classifier  | [Table of Contents](index) |  client:get_body |

