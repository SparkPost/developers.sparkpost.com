| [Prev](lua.ref.vctx_tarpit)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.xml.doc_tostring) |

<a name="lua.ref.xml.doc_root"></a>
## Name

doc:root — Return the root node of an XML document

<a name="idp19340880"></a>
## Synopsis

`require('xml');`

**`doc:root();`**

<a name="idp19343840"></a>
## Description

Where `doc` is an XML object created using **`xml.parsexml`**, return the root node.

<a name="lua.ref.xml.doc_root.example"></a>

**Example 70.73. doc:root example**

```
local doc = xml.parsexml([[<doc></doc>]]);
local node = doc:root();
local child = node:addchild("item");
child:contents("I am a child node.");
print(node:tostring());
```

<a name="idp19348848"></a>
## See Also

[xml.parsexml](lua.ref.xml.parsexml "xml.parsexml")

| [Prev](lua.ref.vctx_tarpit)  | [Up](lua.function.details) |  [Next](lua.ref.xml.doc_tostring) |
| vctx:tarpit  | [Table of Contents](index) |  doc:tostring |

