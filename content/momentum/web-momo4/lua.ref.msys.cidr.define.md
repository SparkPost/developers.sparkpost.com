| [Prev](lua.ref.msys.brightmail.scan)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.cidr.query) |

<a name="lua.ref.msys.cidr.define"></a>
## Name

msys.cidr.define — Define a named CIDR object

<a name="idp17654464"></a>
## Synopsis

`msys.cidr.define(name, options);`

```
name: string
options: table
```
<a name="idp17657456"></a>
## Description

Defines a named CIDR object. A CIDR object is used to efficiently track information keyed by network address.

This function is intended to be used from a module init function:

<a name="lua.ref.msys.cidr.define.example"></a>

**Example 70.51. msys.cidr.define example**

```
local mod = {}
function mod:init()
  msys.cidr.define('mycidr', {
    type = 'rbldnsd',
    default_value = '127.0.0.1',
    source = '/path/to/file'
  });
  return true;
end
msys.registerModule("mymodule", mod);
```

This code defines a named CIDR object. A CIDR object is used to efficiently track information keyed by network address.

`options` is a table that can provide additional parameters and control the type of CIDR being created. Its elements are as follows:

*   `type` can be `datasource`, `rbldnsd` or `empty`. For a detailed discussion see [the section called “CIDR Types”](lua.ref.msys.cidr.define#lua.ref.msys.cidr.define.type "CIDR Types").

*   `interpolate` when true, any dollar sign placeholders in the returned data will be replaced by the IP address of the connected peer. This is because it is common practice for RBL files to use this syntax as a shortcut to represent the peer IP.

*   `default_value` the value to return when a query does not match. The default value is `nil`. A commonly used alternative is the string `127.0.0.0` which is typically used to indicate no match in DNS based RBLs.

If `option` is not a table, it is assumed to be the value of the `type` parameter, which effectively limits you to `empty`, as the other types all require more information and will raise an error if missing.

Enable this function with the statement `require('msys.cidr');`.

<a name="lua.ref.msys.cidr.define.type"></a>
### CIDR Types

## datasource

Datasource driven CIDRs are populated by querying a datasource via the datasource layer. The following options are valid when defining a datasource type CIDR:

*   `refresh` how often, in seconds, to refresh the CIDR from the datasource. The default is 1800 seconds (30 minutes). If set to 0, the data will only be refreshed when manually triggered.

*   `cachename` the name of the datasource cache against which to present the query.

*   `query` the query that will return the source data used to build the CIDR. This is run when the CIDR is defined and whenever the data is refreshed.

*   `cidr_column` the name or ordinal position of the column in the dataset that contains the CIDR value. If not specified, the first column is assumed.

*   `value_column` the name or ordinal position of the column in the dataset that contains the value associated with the CIDR entry, and that will be returned when a query matches. If not specified then matching queries will return a true value.

## rbldnsd

Realtime Block List DNS Daemon (RBLDNSD) files represent a serialized CIDR data structure that is used instead of issuing DNS lookups against a central server, since a local CIDR lookup is much faster.

RBLDNSD formatting uses ':' as a column delimiter for IPv4 and IPv6\. But IPv6 also uses ':' as a delimiter, which makes it difficult to differentiate between which colons are for the RBLDNSD entry and which are for the ipv6 address. To resolve this issue, we added a space before the colon (`' :'`) for the IPv6 address column delimiter.

As a result, the following format is valid:

`10.79.0.0:<rest of line>`

While this format is not valid:

`1111::0000:<rest of line>`

Instead, you must add a space before the delimiter colon:

`1111::0000 :<rest of line>`

The following options are valid when defining an `rbldnsd` type CIDR:

*   `refresh` how often, in seconds, to refresh the CIDR from the datasource. The default is 1800 seconds (30 minutes). If set to 0, the data will only be refreshed when manually triggered.

*   `source` the URI identifying the location of the rbldnsd file. This can be via any protocol supported by the I/O wrapper layer.

*   `value` either `a` or `txt` to indicate whether the address record or the text record from the file should be used when loading this CIDR. If not specified, the default is `a`.

*   `optimize` some RBLs are distributed in a non-optimal unsorted format. Setting optimize to true will optimize the data as it is loaded and result in improved runtime performance but will take longer to initialize.

### Note

Momentum **does not support**             the RBLDNSD 'hyphen' notation for IPv6 for performance concerns. The CIDRDB could become bloated because each IP is represented as an individual data structure and due to the size of IPv6 addresses. A CIDR mask would work more quickly and easily.

## empty

This value creates an empty CIDR that you can populate for yourself.

<a name="idp17704256"></a>
## See Also

[Section 71.16, “cidrdb – CIDRDB”](modules.cidrdb "71.16. cidrdb – CIDRDB"), [msys.cidr.reload](lua.ref.msys.cidr.reload "msys.cidr.reload"), [msys.cidr.query](lua.ref.msys.cidr.query "msys.cidr.query")

| [Prev](lua.ref.msys.brightmail.scan)  | [Up](lua.function.details) |  [Next](lua.ref.msys.cidr.query) |
| msys.brightmail.scan  | [Table of Contents](index) |  msys.cidr.query |

