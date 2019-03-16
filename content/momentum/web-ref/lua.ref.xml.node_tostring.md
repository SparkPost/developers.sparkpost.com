| [Prev](lua.ref.xml.node_name)  | 15.2. Lua Functions |  [Next](lua.ref.xml.node_unlink.php) |

<a name="lua.ref.xml.node_tostring"></a>
## Name

node:tostring — Output a node as a string

<a name="idp28088832"></a>
## Synopsis

`require('xml');`

`node:tostring();`

<a name="idp28091504"></a>
## Description

Where `node` is an XML element, this method returns a string representation of the XML source of the node and its children. This same method is also available as a __tostring metamethod, so `node:tostring()` and `tostring(node)` are equivalent.

<a name="lua.ref.xml.node_tostring.example"></a>

**Example 15.84. node:tostring example**

```
local doc = xml.parsexml([[<doc></doc>]]);
local node = doc:root();
local child = node:addchild("item");
child:contents("I am a child node.");
print(child:tostring());
```

In this case the output is as follows:

```
<doc>
 <item>I am a child node.</item>
</doc>
```

### Note

The `print` function will automatically convert a node to string so the use of `child:tostring` in [Example 15.84, “node:tostring example”](lua.ref.xml.node_tostring#lua.ref.xml.node_tostring.example "Example 15.84. node:tostring example") is not strictly necessary.

<a name="idp28100144"></a>
### See Also

[xml.parsexml](lua.ref.xml.parsexml "xml.parsexml")

| [Prev](lua.ref.xml.node_name)  | [Up](lua.function.details.php) |  [Next](lua.ref.xml.node_unlink.php) |
| node:name  | [Table of Contents](index) |  node:unlink |
