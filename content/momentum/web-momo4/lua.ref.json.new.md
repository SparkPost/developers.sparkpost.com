|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.json.encode)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.json.strerror) |

<a name="lua.ref.json.new"></a>
## Name

json.new — Create an empty JSON object

<a name="idp16553392"></a>
## Synopsis

`require("json");`

`json.new()`

<a name="idp16556352"></a>
## Description

Create an empty JSON object.

<a name="lua.ref.new.example"></a>

**Example 70.38. json.new example**

```
o = json.new();
o.name = "value";
print(o); -- { "name": "value" }
```

<a name="idp16560720"></a>
## See Also

[json.strerror](lua.ref.json.strerror "json.strerror") and [json.decode](lua.ref.json.decode "json.decode")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.json.encode)  | [Up](lua.function.details) |  [Next](lua.ref.json.strerror) |
| json.encode  | [Table of Contents](index) |  json.strerror |

