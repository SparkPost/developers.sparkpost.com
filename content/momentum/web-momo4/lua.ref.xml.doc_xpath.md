| [Prev](lua.ref.xml.doc_tostring)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.xml.node_addchild) |

<a name="lua.ref.xml.doc_xpath"></a>
## Name

doc:xpath — Perform an XPath query

<a name="idp19374208"></a>
## Synopsis

`require('xml');`

`doc:xpath(query, [contextnode]);`

```
query: string
contextnode: string (optional)
```
<a name="idp19377936"></a>
## Description

This function performs an XPath query and returns an iterator over the resultant set of nodes. You may specify an optional node from the same document to use as context for the XPath query. *Note*: If you include a context node you must enclose it in square brackets.

<a name="lua.ref.xml.doc_xpath.example"></a>

**Example 70.75. doc:xpath example**

```
...
for node in doc:xpath("//item") do
  print(node:name())
end
```

<a name="idp19382416"></a>
### See Also

[xml.parsexml](lua.ref.xml.parsexml "xml.parsexml")

| [Prev](lua.ref.xml.doc_tostring)  | [Up](lua.function.details) |  [Next](lua.ref.xml.node_addchild) |
| doc:tostring  | [Table of Contents](index) |  node:addchild |

