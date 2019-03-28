|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_unlink)  | 15.2. Lua Functions |  [Next](sieve.ref3.php) |

<a name="lua.ref.xml.parsexml"></a>
## Name

xml.parsexml — Create an XML document object

<a name="idp28116592"></a>
## Synopsis

`require('xml');`

`xml.parsexml(strxml, keep_blanks);`

```
strxml: string
keep_blanks: numeric (optional)
```
<a name="idp28120000"></a>
## Description

This function parses an XML string and returns an XML document object. The second argument, `keep_blanks` is an optional integer value. When not set or set to `0`, ignorable white spaces will be ignored, otherwise, text nodes containing those blanks will be generated in the Document Object Model (DOM) output.

<a name="lua.ref.xml.parsexml.example"></a>

**Example 15.86. xml.parsexml example**

```
local doc = xml.parsexml([[<doc></doc>]]);
local node = doc:root();
local child = node:addchild("item")
```

<a name="idp28124832"></a>
### See Also

[doc:root](lua.ref.xml.doc_root "doc:root")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.xml.node_unlink)  | [Up](lua.function.details.php) |  [Next](sieve.ref3.php) |
| node:unlink  | [Table of Contents](index) |  Chapter 16. Sieve++ Function Reference |
