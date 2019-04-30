|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.vctx_tarpit)  | 15.2. Lua Functions |  [Next](lua.ref.xml.doc_tostring.php) |

<a name="lua.ref.xml.doc_root"></a>
## Name

doc:root — Return the root node of an XML document

<a name="idp27965264"></a>
## Synopsis

`require('xml');`

`doc:root();`

<a name="idp27967936"></a>
## Description

Where `doc` is an XML object created using `xml.parsexml`, return the root node.

<a name="lua.ref.xml.doc_root.example"></a>

**Example 15.75. doc:root example**

```
local doc = xml.parsexml([[<doc></doc>]]);
local node = doc:root();
local child = node:addchild("item");
child:contents("I am a child node.");
print(node:tostring());
```

<a name="idp27972752"></a>
## See Also

[xml.parsexml](lua.ref.xml.parsexml "xml.parsexml")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.vctx_tarpit)  | [Up](lua.function.details.php) |  [Next](lua.ref.xml.doc_tostring.php) |
| vctx:tarpit  | [Table of Contents](index) |  doc:tostring |
