| [Prev](lua.ref.msys.db.fetch_row)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.delivery.ob_get_current_message) |

<a name="lua.ref.msys.db.query"></a>
## Name

msys.db.query — Query a datasource

<a name="idp17947840"></a>
## Synopsis

`msys.db.query(cachename, query, queryparams, options);`

```
cachename: string
query: string
queryparams: table, optional
options: table, optional
```
<a name="idp17950912"></a>
## Description

Issue a query to a datasource.

Enable this function with the statement `require('msys.db');` and also include the statement `require('msys.datasource');`.

The parameters are as follows:

*   `cachename` – Name of the datasource cache to be queried

*   `query` – Query to be presented to the cache

    `query` may use placeholder characters in the form `:name, ?` or `$name` depending on the underlying driver. If the `?` placeholder is used, then `queryparams` must be a table with numeric keys, with index `1` corresponding to the first `?` in the query string. Otherwise, the keys must be string keys with names that match up to the defined parameters. For instance, `$name` or `:name` expect to find a parameter in the table using the key name; the leading `$` or `:` is removed before looking up the value.

*   `queryparams` – Lua table object with parameters to bind into the query

    ### Note

    The SQL standard requires the use of the "`IS [NOT] NULL"` syntax in a predicate for matching against `NULL`. A predicate "*`field_name`* = ?" would result in an error if a query parameter is `NULL`. A Lua `nil` is equivalent to an SQL `NULL`.

*   `options` – Lua table object containing additional options that affect this query

    If `options` is specified, it must be a Lua table object. The following options are permitted:

    *   `nocache` – Boolean value. If set to `true`, bypass the cache and force the query to be presented to the underlying datasource.

    *   `raise_error` – Boolean value. If set to `true`, raise an exception (lua_error) on error containing the error string. Default value is `true`.

This function returns the following:

*   If the query succeeds, – Returns `rowiter`, which is an iterator returning the rows.

*   If the query fails and `raise_error` is set to `false` – Returns `nil` indicating query failure and `errmsg` indicating what failed.

*   If the query fails and `raise_error` is set to `true` – Raises an exception.

The idiom for issuing a query and working with the results is as follows:

<a name="lua.ref.msys.db.query.example"></a>

**Example 70.56. msys.db.query example**

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

The data cache used in the preceding example must be defined in your configuration file. For more information, see [Section 71.29, “ds_core - Datasource Query Core”](modules.ds_core "71.29. ds_core - Datasource Query Core").

Each iteration over the returned rowset yields a table with string keys corresponding to the names of the columns from the row. If the driver does not return names, the values are indexed by their ordinal position instead, with the first column at ordinal position `1`. For drivers that can return multiple values for a given named column (such as LDAP), the values may in turn be tables indexed by ordinal position of the sub-value.

<a name="idp17989696"></a>
## See Also

[msys.db.fetch_row](lua.ref.msys.db.fetch_row "msys.db.fetch_row"), [msys.db.execute](lua.ref.msys.db.execute "msys.db.execute"), [Section 62.2, “Policy Scriptlets”](implementing.policy.scriptlets "62.2. Policy Scriptlets")

| [Prev](lua.ref.msys.db.fetch_row)  | [Up](lua.function.details) |  [Next](lua.ref.msys.delivery.ob_get_current_message) |
| msys.db.fetch_row  | [Table of Contents](index) |  msys.delivery.ob_get_current_message |

