|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_unlink)  | Chapter 70. Lua Functions Reference |  [Next](modules) |

<a name="lua.ref.xml.parsexml"></a>
## Name

xml.parsexml — Create an XML document object

<a name="idp19512736"></a>
## Synopsis

`require('xml');`

**`xml.parsexml(strxml, keep_blanks);`**

```
strxml: string
keep_blanks: numeric (optional)
```
<a name="idp19516464"></a>
## Description

This function parses an XML string and returns an XML document object. The second argument, **`keep_blanks`** is an optional integer value. When not set or set to `0`, ignorable white spaces will be ignored, otherwise, text nodes containing those blanks will be generated in the Document Object Model (DOM) output.

<a name="lua.ref.xml.parsexml.example"></a>

**Example 70.84. xml.parsexml example**

```
local doc = xml.parsexml([[<doc></doc>]]);
local node = doc:root();
local child = node:addchild("item")
```

<a name="idp19521504"></a>
### See Also

[doc:root](lua.ref.xml.doc_root "doc:root")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_unlink)  | [Up](lua.function.details) |  [Next](modules) |
| node:unlink  | [Table of Contents](index) |  Chapter 71. Modules Reference |

