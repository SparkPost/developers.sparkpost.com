| [Prev](lua.ref.json.encode)  | 15.2. Lua Functions |  [Next](lua.ref.json.strerror.php) |

<a name="lua.ref.json.new"></a>
## Name

json.new — Create an empty JSON object

<a name="idp25255824"></a>
## Synopsis

`require("json");`

`json.new()`

<a name="idp25258496"></a>
## Description

Create an empty JSON object.

<a name="lua.ref.new.example"></a>

**Example 15.39. json.new example**

```
o = json.new();
o.name = "value";
print(o); -- { "name": "value" }
```

<a name="idp25262384"></a>
## See Also

[json.strerror](lua.ref.json.strerror "json.strerror") and [json.decode](lua.ref.json.decode.php "json.decode")

| [Prev](lua.ref.json.encode)  | [Up](lua.function.details.php) |  [Next](lua.ref.json.strerror.php) |
| json.encode  | [Table of Contents](index) |  json.strerror |
