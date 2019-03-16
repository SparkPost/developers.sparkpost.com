| [Prev](lua.ref.msys.counter.unlink)  | 15.2. Lua Functions |  [Next](lua.ref.msys.db.query.php) |

<a name="lua.ref.msys.db.fetch_row"></a>
## Name

msys.db.fetch_row — If successful, return the first row of the query result as a table

<a name="idp26489216"></a>
## Synopsis

`msys.db.fetch_row(cachename, query, queryparams, options);`

```
cachename: string
query: string
queryparams: table, optional
options: table, optional
```
<a name="idp26492000"></a>
## Description

Issue a query to a datasource. The parameters are as follows:

*   `cachename` the name of the datasource cache to be queried

*   `query` the query to be presented to the cache

*   `queryparams` a Lua table object with parameters to bind into the query

    ### Note

    The SQL standard requires the use of the "`IS [NOT] NULL"` syntax in a predicate for matching against `NULL`. A predicate "*`field_name`* = ?" would result in an error if a query parameter is `NULL`. A Lua `nil` is equivalent to an SQL `NULL`.

*   `options` a Lua table object containing additional options that affect this query. If `options` is specified, it must be a Lua table object. Only the following option is permitted:

    *   `nocache` bypass the cache and force the query to be presented to the underlying datasource

    *   `raise_error` This is a boolean. If set to `true`, raise an exception (lua_error) on error containing the error string. The default value is `true`.

If the query fails and `raise_error` is set to false, it returns:

*   `nil` indicating query failure

*   `errmsg` indicating what failed

If the query fails and `raise_error` is set to `true` an exception is raised.

If the query returns no data, `nil` is returned. Otherwise, the first row of the query results is returned as a table.

<a name="lua.ref.msys.db.fetch_row.example"></a>

**Example 15.56. msys.db.fetch_row example**

```
...
  r, e = msys.db.fetch_row (cache, query, nil, { raise_error = false });
  if (r ~= nil) then
    for k, v in pairs(r) do
      print(k, v);
    end
  elseif (e ~= nil) then
    print "Query failed";
  else
    print "No match";
  end
...
```

### Note

The data cache used in the preceding example must be defined in your configuration file. For more information see [Section 14.30, “ds_core – Datasource Query Core”](modules.ds_core "14.30. ds_core – Datasource Query Core").

### Warning

When using this function you must also include `require('msys.datasource');`.

Enable this function with the statement `require('msys.db');`.

<a name="idp26520480"></a>
## See Also

[Section 5.2, “Implementing Policy Using Scriptlets”](implementing.policy.scriptlets "5.2. Implementing Policy Using Scriptlets"), [msys.db.query](lua.ref.msys.db.query.php "msys.db.query"), [msys.db.execute](lua.ref.msys.db.execute.php "msys.db.execute")

| [Prev](lua.ref.msys.counter.unlink)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.db.query.php) |
| msys.counter.unlink  | [Table of Contents](index) |  msys.db.query |
