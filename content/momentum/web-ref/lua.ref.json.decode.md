| [Prev](lua.ref.msys.validate.dkim.get_verify_results)  | 15.2. Lua Functions |  [Next](lua.ref.json.encode.php) |

<a name="lua.ref.json.decode"></a>
## Name

json.decode — Create a JSON object from a JSON string

<a name="idp25203808"></a>
## Synopsis

require('json');

`json.decode(str);`

`str: string`<a name="idp25206896"></a>
## Description

Create a JSON object from a JSON string. On success this function returns a JSON object. On failure the JSON object is nil and an error code and an error message are returned. Use [json.strerror](lua.ref.json.strerror "json.strerror") to return a description of JSON error codes. You can also use [json.new](lua.ref.json.new.php "json.new") to create an empty JSON object.

<a name="lua.ref.json.decode.example"></a>

**Example 15.37. json.decode example**

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

<a name="idp25214432"></a>
## See Also

[json.encode](lua.ref.json.encode "json.encode")

| [Prev](lua.ref.msys.validate.dkim.get_verify_results)  | [Up](lua.function.details.php) |  [Next](lua.ref.json.encode.php) |
| msys.validate.dkim.get_verify_results  | [Table of Contents](index) |  json.encode |
