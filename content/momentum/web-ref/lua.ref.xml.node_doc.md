|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_contents)  | 15.2. Lua Functions |  [Next](lua.ref.xml.node_name.php) |

<a name="lua.ref.xml.node_doc"></a>
## Name

node:doc — Return the document object that contains the specified node

<a name="idp28061456"></a>
## Synopsis

`require('xml');`

`node:doc();`

<a name="idp28064128"></a>
## Description

Return the document object that contains the specified node.

<a name="idp28065664"></a>

**Example 15.82. example**

```
local doc = node:doc();
print(doc:tostring());
```

<a name="idp28067152"></a>
### See Also

[doc:tostring](lua.ref.xml.doc_tostring "doc:tostring") and [xml.parsexml](lua.ref.xml.parsexml.php "xml.parsexml")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_contents)  | [Up](lua.function.details.php) |  [Next](lua.ref.xml.node_name.php) |
| node:contents  | [Table of Contents](index) |  node:name |
