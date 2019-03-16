| [Prev](lua.ref.msys.cidr.define)  | 15.2. Lua Functions |  [Next](lua.ref.msys.cidr.reload.php) |

<a name="lua.ref.msys.cidr.query"></a>
## Name

msys.cidr.query — Look up address against the named CIDR

<a name="idp26322048"></a>
## Synopsis

`msys.cidr.query(name, address);`

```
name: string
address: string, optional
```
<a name="idp26324768"></a>
## Description

This function looks up addresses against the named CIDR. When using the `datasource` or `rbldnsd` types, the return value will always be a string, and will either be the value of the `value_column` or the `a` or `txt` entry. If an entry is not found, this function returns the default_value associated with the CIDR, which is typically `false`. If the address is unspecified, the IP address of the connected peer is assumed.

Enable this function with the statement `require('msys.cidr');`.

<a name="idp26331040"></a>
## See Also

[Section 14.16, “cidrdb – CIDRDB”](modules.cidrdb "14.16. cidrdb – CIDRDB"), [msys.cidr.define](lua.ref.msys.cidr.define.php "msys.cidr.define"), [msys.cidr.reload](lua.ref.msys.cidr.reload.php "msys.cidr.reload"),

| [Prev](lua.ref.msys.cidr.define)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.cidr.reload.php) |
| msys.cidr.define  | [Table of Contents](index) |  msys.cidr.reload |
