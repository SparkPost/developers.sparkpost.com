| [Prev](lua.ref.xml.node_children)  | 15.2. Lua Functions |  [Next](lua.ref.xml.node_doc.php) |

<a name="lua.ref.xml.node_contents"></a>
## Name

node:contents — Get or set a text node

<a name="idp28047136"></a>
## Synopsis

`require('xml');`

`node:contents(text_str);`

`text_str: string (optional)`<a name="idp28050480"></a>
## Description

When a parameter is passed, a text node with the specified value is created. If no string is passed, the value of the text node is returned. To remove text, pass an empty string.

<a name="idp28052144"></a>

**Example 15.81. node:contents example**

```
local node = doc:root();
local child = node:addchild("item");
child:contents("I am a child node.");
```

### Note

In the preceding example, the element node &lt;item>, holds a child text node with the value "I am a child node". `node:contents()` will return the value of the text node of &lt;item>. "I am a child node" is not the value of the &lt;item> element. This is evident if you look at [Example 15.83, “node:name example”](lua.ref.xml.node_name#lua.ref.xml.node_name.example "Example 15.83. node:name example")".

<a name="idp28056160"></a>
### See Also

[xml.parsexml](lua.ref.xml.parsexml "xml.parsexml")

| [Prev](lua.ref.xml.node_children)  | [Up](lua.function.details.php) |  [Next](lua.ref.xml.node_doc.php) |
| node:children  | [Table of Contents](index) |  node:doc |
