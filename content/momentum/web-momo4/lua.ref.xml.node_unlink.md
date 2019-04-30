|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_tostring)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.xml.parsexml) |

<a name="lua.ref.xml.node_unlink"></a>
## Name

node:unlink — Unlink an XML node from its DOM container

<a name="idp19499696"></a>
## Synopsis

`require('xml');`

**`node:unlink();`**

<a name="idp19502656"></a>
## Description

Unlink an XML node from its DOM container. Call this function when you wish to save the node prior to its container being garbage collected. This function returns the XML node object.

<a name="idp19504480"></a>

**Example 70.83. node:unlink example**

```
local doc = xml.parsexml([[<doc><item/></doc>]]);
local node = doc:root();
local node = node:unlink();
```

<a name="idp19506176"></a>
### See Also

[xml.parsexml](lua.ref.xml.parsexml "xml.parsexml")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_tostring)  | [Up](lua.function.details) |  [Next](lua.ref.xml.parsexml) |
| node:tostring  | [Table of Contents](index) |  xml.parsexml |

