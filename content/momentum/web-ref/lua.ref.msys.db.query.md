|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.db.fetch_row)  | 15.2. Lua Functions |  [Next](lua.ref.msys.delivery.ob_get_current_message.php) |

<a name="lua.ref.msys.db.query"></a>
## Name

msys.db.query — Query a datasource

<a name="idp26527728"></a>
## Synopsis

`msys.db.query(cachename, query, queryparams, options);`

```
cachename: string
query: string
queryparams: table, optional
options: table, optional
```
<a name="idp26530512"></a>
## Description

Issue a query to a datasource. The parameters are as follows:

*   `cachename` the name of the datasource cache to be queried

*   `query` the query to be presented to the cache

*   `queryparams` a Lua table object with parameters to bind into the query

    ### Note

    The SQL standard requires the use of the "`IS [NOT] NULL"` syntax in a predicate for matching against `NULL`. A predicate "*`field_name`* = ?" would result in an error if a query parameter is `NULL`. A Lua `nil` is equivalent to an SQL `NULL`.

*   `options` a Lua table object containing additional options that affect this query

`query` may use placeholder characters in the form `:name, ?` or `$name` depending on the underlying driver. If the `?` placeholder is used, then `queryparams` must be a table with numeric keys, with index `1` corresponding to the first `?` in the query string. Otherwise, the keys must be string keys with names that match up to the defined parameters. For instance, `$name` or `:name` expect to find a parameter in the table using the key name; the leading `$` or `:` is removed before looking up the value.

If `options` is specified, it must be a Lua table object. The following options are permitted:

*   `nocache` bypass the cache and force the query to be presented to the underlying datasource

*   `raise_error` This is a boolean. If set to `true`, raise an exception (lua_error) on error containing the error string. The default value is `true`.

If the query succeeds, it returns: `rowiter`, an iterator returning the rows.

If the query fails and `raise_error` is set to false, it returns:

*   `nil` indicating query failure

*   `errmsg` indicating what failed

If the query fails and `raise_error` is set to `true` an exception is raised.

The idiom for issuing a query and working with the results is as follows:

<a name="lua.ref.msys.db.query.example"></a>

**Example 15.57. msys.db.query example**

```
require('msys.db');
require('msys.datasource');
local rowset, row, err;

...
  rowset, err = msys.db.query('mycache', 'select firstname, lastname from names
  where age < ?', {30});

  if rowset == nil then
    print("ERROR: " .. err);
    return;
  end

  for row in rowset do
    print(row.firstname, row.lastname);
  end
...
```

### Note

The data cache used in the preceding example must be defined in your configuration file. For more information see [Section 14.30, “ds_core – Datasource Query Core”](modules.ds_core "14.30. ds_core – Datasource Query Core").

Each iteration over the returned rowset yields a table with string keys corresponding to the names of the columns from the row. If the driver does not return names, the values are indexed by their ordinal position instead, with the first column at ordinal position `1`. For drivers that can return multiple values for a given named column (such as LDAP), the values may in turn be tables indexed by ordinal position of the sub-value.

Enable this function with the statement `require('msys.db');`.

### Warning

When using this function you must also include `require('msys.datasource');`.

<a name="idp26566112"></a>
## See Also

[Section 5.2, “Implementing Policy Using Scriptlets”](implementing.policy.scriptlets "5.2. Implementing Policy Using Scriptlets"), [msys.db.fetch_row](lua.ref.msys.db.fetch_row.php "msys.db.fetch_row"), [msys.db.execute](lua.ref.msys.db.execute.php "msys.db.execute")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.db.fetch_row)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.delivery.ob_get_current_message.php) |
| msys.db.fetch_row  | [Table of Contents](index) |  msys.delivery.ob_get_current_message |
