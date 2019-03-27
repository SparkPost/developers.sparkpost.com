| [Prev](lua.ref.json.decode)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.json.new) |

<a name="lua.ref.json.encode"></a>
## Name

json.encode — Convert a Lua variable or an expression for use with a JSON object

<a name="idp16513280"></a>
## Synopsis

require('json');

`json.encode(obj);`

`obj: mixed`<a name="idp16516688"></a>
## Description

Convert a Lua variable or expression so that it can be added to a JSON object. The following scalar values directly map to JSON fields so do not need to be encoded:

*   boolean

*   numeric

*   string

*   null

This function is typically used with Lua tables but you can also encode other data types. For example, `local j = json.encode(42);` encodes `42` as the JSON blob `{ 42 }`.

The following example encodes a Lua array-style table expression to a JSON object.

<a name="lua.ref.json.encode.example"></a>

**Example 70.37. json.encode example**

```
local json_string = [[{"foo": "bar"}]];
local obj = json.decode(json_string);
obj.int = 4;
local array = json.encode({ 0, 1, 3 });
obj.arr = array;
print(tostring(obj));
```

Enable this function with the statement `require("json");`.

`json.encode` converts the `array` expression so that it can be assigned to a JSON object field. You can pass a variable or a literal to this function. The output of the print statement in [Example 70.37, “json.encode example”](lua.ref.json.encode#lua.ref.json.encode.example "Example 70.37. json.encode example") is as follows:

```
{
  "arr": [
    0,
    1,
    3
  ],
  "foo": "bar",
  "int": 4
}
```

When assigning Lua tables to JSON objects note the following behaviors:

*   `index and newindex` – The JSON object allows key/value pairs to be set on JSON objects, or integer offset and value pairs for JSON arrays.

    JSON arrays accept only integer keys and the indices are 1-based rather than 0-based to match the prevailing Lua semantic.

    JSON objects accept only string keys; if you attempt to use a non-string key, the bindings will attempt to convert it to a string.

*   `tostring(jsonobj)` – When cast to a string, the JSON object will return the JSON string representation of the object or array.

Assignments to object/array indices are subject to the following assignment rules:

<a name="lua.ref.json.decode.assignment.rules"></a>

**Assignment Rules**

When mapping from a Lua value to a JSON object representation, the following rules apply:

*   If the value is itself a JSON object, a reference to that object is used and the assignment operation is very cheap.

*   If the value is numeric, boolean or string, a copy of the value is created and used.

*   If the value is a table, the correct mapping to JSON is ambiguous due to tables in Lua being overloaded to represent both arrays and objects. The following simple rule is used to determine how to map a Lua table: if the table has a value for numeric index 1 (the first element of an array style table), then it is assumed to be an array, otherwise an object.

*   When mapping an array-style table as per the preceding rule, the mapper will read the first `n` contiguous array values starting at index 1 and stopping at the first nil value in the array.

*   When mapping an object-style table as per the preceding rule, the mapper will copy all the values from the table and apply them to the constructed JSON object, using the string representation of the keys and array indices. In layman's terms, this means that if you have a table with both string and integer keys, the integer keys will be converted to strings in the generated object.

*   userdata, closures and other non-scalar values cannot be assigned to a JSON object and will raise a runtime error

<a name="idp16546992"></a>
## See Also

[json.decode](lua.ref.json.decode "json.decode")

| [Prev](lua.ref.json.decode)  | [Up](lua.function.details) |  [Next](lua.ref.json.new) |
| json.decode  | [Table of Contents](index) |  json.new |

