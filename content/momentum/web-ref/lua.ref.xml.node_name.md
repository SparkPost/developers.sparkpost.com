|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_doc)  | 15.2. Lua Functions |  [Next](lua.ref.xml.node_tostring.php) |

<a name="lua.ref.xml.node_name"></a>
## Name

node:name — Return the name of a node

<a name="idp28072992"></a>
## Synopsis

`require('xml');`

`node:name();`

<a name="idp28075664"></a>
## Description

This function returns the element name of a node and returns the string "text" for text nodes.

<a name="lua.ref.xml.node_name.example"></a>

**Example 15.83. node:name example**

```
doc = xml.parsexml([[<doc></doc>]]);
local node = doc:root();
local child = node:addchild("item");
child:attr("name", "Junior");
child:contents("I am a child node.");
node:children();
for kid in child:children() do
  print(kid:name());
end
```

The code shown in [Example 15.83, “node:name example”](lua.ref.xml.node_name#lua.ref.xml.node_name.example "Example 15.83. node:name example") results in the following output:

```
item
text
```

If you remove the line, `child:contents("I am a child node.");`, from [Example 15.83, “node:name example”](lua.ref.xml.node_name#lua.ref.xml.node_name.example "Example 15.83. node:name example"), `item` is all that will be output.

<a name="idp28082992"></a>
### See Also

[xml.parsexml](lua.ref.xml.parsexml "xml.parsexml") and [node:contents](lua.ref.xml.node_contents.php "node:contents")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_doc)  | [Up](lua.function.details.php) |  [Next](lua.ref.xml.node_tostring.php) |
| node:doc  | [Table of Contents](index) |  node:tostring |
