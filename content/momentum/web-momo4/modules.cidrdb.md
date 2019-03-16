| [Prev](modules.chunk_logger)  | Chapter 71. Modules Reference |  [Next](modules.clamav) |

## 71.16. cidrdb – CIDRDB

<a className="indexterm" name="idp20262944"></a>

The cidrdb module exposes scripting functions that check the IP of incoming transactions against CIDR blocks defined within a database, a blacklist for example. For more information on CIDR blocks, see [http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_blocks](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_blocks).

The cidrdb module can query the data source layer or an RBLDNSD-format data file. When using the data source layer, the cidrdb module requires a previous ds_core instantiation with the uri pointing to the database that contains the table from which the CIDR blocks are drawn. For more information, see [Section 71.29, “ds_core - Datasource Query Core”](modules.ds_core "71.29. ds_core - Datasource Query Core").

### 71.16.1. Configuration

This module is loaded automatically as required and does not need to be explicitly included.

### 71.16.2. Datasource Scope

When using the data source layer as the source for the CIDR data, ensure that you have disabled the limit on the number of rows returned in a data source query by setting `max_rows` to `-1` as shown in the following:

<a name="example.cidrdb.csv"></a>

**Example 71.27. Specifying a Datasource**

```
Datasource "csv" {
    uri = "csv:"
    max_rows = -1
}
```

### 71.16.3. Lua Functions

This module makes the following Lua functions available:

*   [msys.cidr.define](lua.ref.msys.cidr.define "msys.cidr.define")

*   [msys.cidr.query](lua.ref.msys.cidr.query "msys.cidr.query")

*   [msys.cidr.reload](lua.ref.msys.cidr.reload "msys.cidr.reload")

### 71.16.4. Console Commands

The cidrdb module can be controlled through the `ec_console`. The following commands are available:

<dl className="variablelist">

<dt>cidrdb reload &lt;listname></dt>

<dd>

The reload action will trigger an immediate reload of the specified list.

</dd>

<dt>cidrdb list</dt>

<dd>

List configured CIDR databases. This command outputs:

*`cidr_name`* [refresh in *`secs`* seconds]

To list configured CIDR databases in XML format use **`xml cidrdb list`**             . This command outputs the cidr_name, the refresh interval, and the number of seconds until the next refresh.

</dd>

</dl>

| [Prev](modules.chunk_logger)  | [Up](modules) |  [Next](modules.clamav) |
| 71.15. chunk_logger Module  | [Table of Contents](index) |  71.17. clamav – ClamAV |

