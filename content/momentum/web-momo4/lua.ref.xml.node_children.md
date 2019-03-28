|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_attribute)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.xml.node_contents) |

<a name="lua.ref.xml.node_children"></a>
## Name

node:children — Return an iterator of all child nodes

<a name="idp19420768"></a>
## Synopsis

`require('xml');`

`node:children();`

<a name="idp19423728"></a>
## Description

Return an iterator of all child nodes of the specified node. Any text nodes are also included.

<a name="lua.ref.xml.node_children.example"></a>

**Example 70.78. example**

```
for child in node:children() do
  print(child:name());
end
```

<a name="idp19427632"></a>
### See Also

[xml.parsexml](lua.ref.xml.parsexml "xml.parsexml")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_attribute)  | [Up](lua.function.details) |  [Next](lua.ref.xml.node_contents) |
| node:attribute  | [Table of Contents](index) |  node:contents |

