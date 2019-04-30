|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_attribute)  | 15.2. Lua Functions |  [Next](lua.ref.xml.node_contents.php) |

<a name="lua.ref.xml.node_children"></a>
## Name

node:children — Return an iterator of all child nodes

<a name="idp28035648"></a>
## Synopsis

`require('xml');`

`node:children();`

<a name="idp28038320"></a>
## Description

Return an iterator of all child nodes of the specified node. Any text nodes are also included.

<a name="lua.ref.xml.node_children.example"></a>

**Example 15.80. example**

```
for child in node:children() do
  print(child:name());
end
```

<a name="idp28041904"></a>
### See Also

[xml.parsexml](lua.ref.xml.parsexml "xml.parsexml")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_attribute)  | [Up](lua.function.details.php) |  [Next](lua.ref.xml.node_contents.php) |
| node:attribute  | [Table of Contents](index) |  node:contents |
