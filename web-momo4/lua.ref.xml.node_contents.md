| [Prev](lua.ref.xml.node_children)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.xml.node_doc) |

<a name="lua.ref.xml.node_contents"></a>
## Name

node:contents — Get or set a text node

<a name="idp19434240"></a>
## Synopsis

`require('xml');`

`node:contents(text_str);`

`text_str: string (optional)`<a name="idp19437904"></a>
## Description

When a parameter is passed, a text node with the specified value is created. If no string is passed, the value of the text node is returned. To remove text, pass an empty string.

<a name="idp19439728"></a>

**Example 70.79. node:contents example**

```
local node = doc:root();
local child = node:addchild("item");
child:contents("I am a child node.");
```

### Note

In the preceding example, the element node &lt;item>, holds a child text node with the value "I am a child node". `node:contents()` will return the value of the text node of &lt;item>. "I am a child node" is not the value of the &lt;item> element. This is evident if you look at [Example 70.81, “node:name example”](lua.ref.xml.node_name#lua.ref.xml.node_name.example "Example 70.81. node:name example")".

<a name="idp19443616"></a>
### See Also

[xml.parsexml](lua.ref.xml.parsexml "xml.parsexml")

| [Prev](lua.ref.xml.node_children)  | [Up](lua.function.details) |  [Next](lua.ref.xml.node_doc) |
| node:children  | [Table of Contents](index) |  node:doc |

