|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.doc_root)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.xml.doc_xpath) |

<a name="lua.ref.xml.doc_tostring"></a>
## Name

doc:tostring — Output a DOM document as a string

<a name="idp19355232"></a>
## Synopsis

`require('xml');`

`doc:tostring();`

<a name="idp19358192"></a>
## Description

Where `doc` is an XML document, this method returns a string representation of the XML source of the entire document. This same method is also available as a __tostring metamethod, so `doc:tostring()` and `tostring(doc)` are equivalent.

<a name="lua.ref.xml.doc_tostring.example"></a>

**Example 70.74. doc:tostring example**

```
doc = xml.parsexml([[<doc></doc>]]);
local node = doc:root();
local child = node:addchild("item");
child:contents("I am a child node.");
local doc = node:doc();
print(doc:tostring());
```

This function outputs the entire document as shown in the following:

```
<?xml version="1.0" encoding="utf8"?>
<doc>
  <item>I am a child node.</item>
</doc>
```

### Note

The `print` function will automatically convert a document to string so the use of `doc:tostring` in [Example 70.74, “doc:tostring example”](lua.ref.xml.doc_tostring#lua.ref.xml.doc_tostring.example "Example 70.74. doc:tostring example") is not strictly necessary.

<a name="idp19367104"></a>
### See Also

[node:doc](lua.ref.xml.node_doc "node:doc") and [xml.parsexml](lua.ref.xml.parsexml "xml.parsexml")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.doc_root)  | [Up](lua.function.details) |  [Next](lua.ref.xml.doc_xpath) |
| doc:root  | [Table of Contents](index) |  doc:xpath |

