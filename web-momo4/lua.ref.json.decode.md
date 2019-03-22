| [Prev](lua.ref.session_response_status_set_std)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.json.encode) |

<a name="lua.ref.json.decode"></a>
## Name

json.decode — Create a JSON object from a JSON string

<a name="idp16495424"></a>
## Synopsis

require('json');

`json.decode(str);`

`str: string`<a name="idp16498832"></a>
## Description

Create a JSON object from a JSON string. On success this function returns a JSON object. On failure the JSON object is nil and an error code and an error message are returned. Use [json.strerror](lua.ref.json.strerror "json.strerror") to return a description of JSON error codes. You can also use [json.new](lua.ref.json.new "json.new") to create an empty JSON object.

<a name="lua.ref.json.decode.example"></a>

**Example 70.36. json.decode example**

```
obj, code, err = json.decode([[{ "hello": "world" }]]);
if not obj then
 error(err);
end
print(obj.hello); -- { "hello": "world" }
obj.int = 4;
obj.num = 3.5;
print(obj); -- { "hello": "world", "int": 4, "num": 3.500000 }
```

Enable this function with the statement `require("json");`.

You can directly assign a primitive to the field of a JSON object. Lua tables, whether they are objects or arrays, are a different matter; See [json.encode](lua.ref.json.encode "json.encode") for more information.

<a name="idp16506848"></a>
## See Also

[json.encode](lua.ref.json.encode "json.encode")

| [Prev](lua.ref.session_response_status_set_std)  | [Up](lua.function.details) |  [Next](lua.ref.json.encode) |
| session:response_status_set_std  | [Table of Contents](index) |  json.encode |

