| [Prev](lua.ref.xml.doc_xpath)  | 15.2. Lua Functions |  [Next](lua.ref.xml.node_attribute.php) |

<a name="lua.ref.xml.node_addchild"></a>
## Name

node:addchild — Add a child node

<a name="idp28007824"></a>
## Synopsis

`require('xml');`

`node:addchild(value);`

`value: mixed`<a name="idp28011184"></a>
## Description

When the parameter passed to this function is a string, this function creates a node and adds it as a child of the existing node, returning the new node. The parameter passed to this method is the name of the XML tag.

<a name="lua.ref.xml.node_addchild.example"></a>

**Example 15.78. node:addchild example**

```
local doc = xml.parsexml([[<doc></doc>]]);
local node = doc:root();
local child = node:addchild("item");
child:contents("I am a child node.");
print(node:tostring());
```

You can also pass a node object to this function, the return value of [node:children](lua.ref.xml.node_children "node:children"), for example. When the parameter is an existing node object, it is added as a child node and the "new" node is the return value of the function.

<a name="idp28016352"></a>
### See Also

[doc:root](lua.ref.xml.doc_root "doc:root")

| [Prev](lua.ref.xml.doc_xpath)  | [Up](lua.function.details.php) |  [Next](lua.ref.xml.node_attribute.php) |
| doc:xpath  | [Table of Contents](index) |  node:attribute |
