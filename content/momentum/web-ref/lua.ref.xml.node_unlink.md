|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_tostring)  | 15.2. Lua Functions |  [Next](lua.ref.xml.parsexml.php) |

<a name="lua.ref.xml.node_unlink"></a>
## Name

node:unlink — Unlink an XML node from its DOM container

<a name="idp28105392"></a>
## Synopsis

`require('xml');`

`node:unlink();`

<a name="idp28108064"></a>
## Description

Unlink an XML node from its DOM container. Call this function when you wish to save the node prior to its container being garbage collected. This function returns the XML node object.

<a name="idp28109728"></a>

**Example 15.85. node:unlink example**

```
local doc = xml.parsexml([[<doc><item/></doc>]]);
local node = doc:root();
local node = node:unlink();
```

<a name="idp28111392"></a>
### See Also

[xml.parsexml](lua.ref.xml.parsexml "xml.parsexml")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_tostring)  | [Up](lua.function.details.php) |  [Next](lua.ref.xml.parsexml.php) |
| node:tostring  | [Table of Contents](index) |  xml.parsexml |
