| [Prev](lua.ref.xml.node_addchild)  | 15.2. Lua Functions |  [Next](lua.ref.xml.node_children.php) |

<a name="lua.ref.xml.node_attribute"></a>
## Name

node:attribute — Set or get the attribute of a node

<a name="idp28021616"></a>
## Synopsis

`require('xml');`

`node:attribute(name, value);`

```
name: string
value: mixed (optional)
```
<a name="idp28025008"></a>
## Description

The attribute function can be used to get or set the attribute of a node. Use `nil` to unset `value`. `node:attr` is a synonym for `node:attribute`.

<a name="lua.ref.xml.node_attribute.example"></a>

**Example 15.79. example**

```
node:attr("name", "newval") -- sets the "name" attribute to "newval"
node:attr("name", nil) -- clears the "name" attribute
print(node:attr("name")) -- prints the value of the "name" attribute
```

<a name="idp28030448"></a>
### See Also

[xml.parsexml](lua.ref.xml.parsexml "xml.parsexml")

| [Prev](lua.ref.xml.node_addchild)  | [Up](lua.function.details.php) |  [Next](lua.ref.xml.node_children.php) |
| node:addchild  | [Table of Contents](index) |  node:children |
