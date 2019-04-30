|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.disclaimer_add)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ds_fetch) |

<a name="sieve.ref.ds_execute"></a>
## Name

ds_execute — execute a query on a datasource

## Synopsis

`ds_execute` { *`cachename`* } { *`query`* } [ *`params`* ]

<a name="idp28999056"></a>
## Description

This function executes a query that does not return a result set. The query will be queued to the thread pool and the current Sieve script will be suspended until the query completes. While the Sieve script is suspended, Momentum will continue to schedule other events.

If you need to execute a query that fetches a row or all rows from a datasource, you need to use [ds_fetch](sieve.ref.ds_fetch "ds_fetch"), [ds_fetch_hash](sieve.ref.ds_fetch_hash "ds_fetch_hash"). or [ds_fetch_flat](sieve.ref.ds_fetch_flat "ds_fetch_flat").

### Note

The ds_core module and datasource drivers are loaded automatically as required and do not need to be explicitly included. See [Section 14.30, “ds_core – Datasource Query Core”](modules.ds_core "14.30. ds_core – Datasource Query Core") for more information.

By specifying the optional *`params`* parameter, you can create parameterized queries. Where supported by the underlying datasource driver, parameterized queries are mapped to native prepared statements for more optimal database performance.

Parameterized queries use one of three different kinds of placeholder indicator, depending on the underlying driver. If you want to use the ODBC style `?` parameter marker, then the *`params`* parameter should be a stringlist containing the values to be substituted for each marker.

Alternatively, you may use Oracle style `:name` parameter markers, which are useful for creating more readable queries. If you use these, then *`params`* should be a hash table where the keys of the hash correspond to the names of the parameters; the values in the hash will be substituted for the placeholders.

The last form is similar to Oracle style named markers, except that a dollar sign is used instead of the colon: `$name`. This style of naming is used by datasource drivers where the native query syntax treats the `:` and `?` characters specially. Rather than requiring tedious quoting/escaping of those characters an alternative symbol was chosen.

Most drivers support both `?` and `:name` style parameters. Those that don't, only support the `$name` style. The definitive list of drivers and their supported placeholders can be found in [Section 14.30.3, “Datasource Drivers”](modules.ds_core#modules.ds_core.drivers "14.30.3. Datasource Drivers").

<a name="example.ds_execute"></a>

**Example 16.20. ds_execute example: executing query**

```
if size :over 1M {
  ($deny) = ds_fetch "mssql" "select deny from LargeMsgSender where sender = ?"
               ["%{vctx_mess:mailfrom_localpart}@%{vctx_mess:mailfrom_domain}"];
  #cache_life should be 0 for real-time check;
  if ec_test :is "${deny}" "1" {
    ec_action 550 "5.7.1 sender rejected by policy";
  } else {
    ds_execute "mssql" "insert into LargeMsgSender values (1, ?)"
               ["%{vctx_mess:mailfrom_localpart}@%{vctx_mess:mailfrom_domain}"];
    ec_action 550 "5.7.1 sender rejected by policy";
  }
}
```

<a name="idp29018688"></a>
## See Also

[ds_fetch](sieve.ref.ds_fetch "ds_fetch"). [ds_fetch_flat](sieve.ref.ds_fetch_flat "ds_fetch_flat"). [ds_fetch_hash](sieve.ref.ds_fetch_hash "ds_fetch_hash").


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.disclaimer_add)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ds_fetch) |
| disclaimer_add  | [Table of Contents](index) |  ds_fetch |
