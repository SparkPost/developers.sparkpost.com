| [Prev](modules.chunk_logger)  | Chapter 14. Modules Reference |  [Next](modules.clamav.php) |

## 14.16. cidrdb – CIDRDB

<a class="indexterm" name="idp18362000"></a>

The cidrdb module exposes scripting functions which check the IP of incoming transactions against CIDR blocks defined within a database, a blacklist for example. For more information on CIDR blocks see the following: [http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_blocks](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing#CIDR_blocks).

The cidrdb module can query the data source layer, or an RBLDNSD-format data file. When using the data source layer, the cidrdb module requires a previous ds_core instantiation with the uri pointing to the database which contains the table from which the CIDR blocks are drawn. See [Section 14.30, “ds_core – Datasource Query Core”](modules.ds_core "14.30. ds_core – Datasource Query Core") for more information.

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

When using the data source layer as the source for the CIDR data, ensure that you have disabled the limit on the number of rows returned in a data source query by setting `max_rows` to `-1` as shown in the following:

<a name="example.cidrdb.csv"></a>

**Example 14.27. Specifying a datasource**

```
Datasource "csv" {
    uri = "csv:"
    max_rows = -1
}
```

### 14.16.1. Runtime Usage

**Lua Functions**

This module makes a number of Lua functions available. These are:

*   [msys.cidr.define](lua.ref.msys.cidr.define "msys.cidr.define"), [msys.cidr.reload](lua.ref.msys.cidr.reload.php "msys.cidr.reload"), [msys.cidr.query](lua.ref.msys.cidr.query.php "msys.cidr.query")

For more information follow the preceding links.

**Sieve Commands**

When loaded, cidrdb provides a set of Sieve actions that can be used to perform queries. See [cidrdb](sieve.ref.cidrdb "cidrdb") for more details.

### 14.16.2. cidrdb Management Using Console Commands

The cidrdb module can be controlled through the `ec_console`; the following commands are available:

**14.16.2.1. cidrdb reload **

The reload action will trigger an immediate reload of the specified list.

**14.16.2.2. cidrdb list**

List configured CIDR databases. This command outputs:

*`cidr_name`* [refresh in *`secs`* seconds]

To list configured CIDR databases in XML format use **`xml cidrdb list`**             . This command outputs the cidr_name, the refresh interval and the number of seconds until the next refresh.

| [Prev](modules.chunk_logger)  | [Up](modules.php) |  [Next](modules.clamav.php) |
| 14.15. chunk_logger – Asynchronous Logging  | [Table of Contents](index) |  14.17. clamav – ClamAV |
