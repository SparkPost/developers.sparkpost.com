|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ds_execute)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ds_fetch_flat) |

<a name="sieve.ref.ds_fetch"></a>
## Name

ds_fetch — query and fetch a row from a datasource

## Synopsis

`ds_fetch` { *`cachename`* } { *`query`* } [ *`params`* ]

<a name="idp29034800"></a>
## Description

This function issues a query against a datasource cache. If the data is available in the cache, it will return immediately with the first row of the data. If the data is not cached, the query will be queued to the thread pool and the current Sieve script will be suspended until the query completes. While the Sieve script is suspended, Momentum will continue to schedule other events.

The first row of the data is returned as a stringlist. If you need to work with a datasource that can return multiple values for a particular column in a particular row, then you need to use [ds_fetch_hash](sieve.ref.ds_fetch_hash "ds_fetch_hash") to retrieve the row as a hash instead.

### Note

If you select more than one column from the row, the ordering of the elements in the returned stringlist is not always the same as the columns in your query. To select more than one column from the row and preserve the ordering, you need to use [ds_fetch_hash](sieve.ref.ds_fetch_hash "ds_fetch_hash") instead.

If you need to execute a query that doesn't return a result, for example, insert, update or delete, you should use [ds_execute](sieve.ref.ds_execute "ds_execute") instead.

If your query cannot be completed due to an error, the connection validation context variable `datasource_error` will contain the error message. For successful queries, this connection context variable is deleted.

### Note

The ds_core module and datasource drivers are loaded automatically as required and do not need to be explicitly included. See [Section 14.30, “ds_core – Datasource Query Core”](modules.ds_core "14.30. ds_core – Datasource Query Core") for more information.

By specifying the optional *`params`* parameter, you can create parameterized queries. Where supported by the underlying datasource driver, parameterized queries are mapped to native prepared statements for more optimal database performance.

Parameterized queries use one of three different kinds of placeholder indicator, depending on the underlying driver. If you want to use the ODBC style `?` parameter marker, then the *`params`* parameter should be a stringlist containing the values to be substituted for each marker.

Alternatively, you may use Oracle style `:name` parameter markers, which are useful for creating more readable queries. If you use these, then *`params`* should be a hash table where the keys of the hash correspond to the names of the parameters; the values in the hash will be substituted for the placeholders.

The last form is similar to Oracle style named markers, except that a dollar sign is used instead of the colon: `$name`. This style of naming is used by datasource drivers where the native query syntax treats the `:` and `?` characters specially. Rather than requiring tedious quoting/escaping of those characters an alternative symbol was chosen.

Most drivers support both `?` and `:name` style parameters. Those that don't, only support the `$name` style. The definitive list of drivers and their supported placeholders can be found in [Section 14.30.3, “Datasource Drivers”](modules.ds_core#modules.ds_core.drivers "14.30.3. Datasource Drivers").

<a name="example.ds_fetch"></a>

**Example 16.21. ds_fetch example: fetching data**

```
($deny) = ds_fetch "mssql" "select deny from blacklist where sender = ?"
            ["%{vctx_mess:mailfrom_localpart}@%{vctx_mess:mailfrom_domain}"];
if ec_test :is "${deny}" "1" {
  ec_action 550 "5.7.1 sender rejected by policy" "policy:blacklisted";
}
```

You can use this action to select more than one column from a row and the ordering of the elements in the returned stringlist is the same with the ordering of columns in your query. Index 0 of the list holds the value of the first column returned from the datasource. Index 1 the second and so on.

<a name="idp29058432"></a>
## See Also

[ds_execute](sieve.ref.ds_execute "ds_execute"), [ds_fetch_hash](sieve.ref.ds_fetch_hash "ds_fetch_hash"), [ds_fetch_flat](sieve.ref.ds_fetch_flat "ds_fetch_flat")


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ds_execute)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ds_fetch_flat) |
| ds_execute  | [Table of Contents](index) |  ds_fetch_flat |
