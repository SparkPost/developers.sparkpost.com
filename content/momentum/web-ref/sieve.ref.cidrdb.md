|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.brightmail)  | 16.2. Sieve Function Details |  [Next](sieve.ref.cloudmark_score) |

<a name="sieve.ref.cidrdb"></a>
## Name

define_cidr, reload_cidr, check_cidr — cidr functions for Sieve

## Synopsis

`define_cidr` { *`name for the CIDR information`*                           } { *`name of the datasource`*                    } { *`query string to the datasource`*                           } [ *`refresh interval to rebuild CIDR`*                           ]
`define_cidr` { *`$hash`* }

`reload_cidr` { *`name for the CIDR information`*                           }

`check_cidr` { *`name for the CIDR information`*                           } [ :ip *`IP address to query`*                   ]

`query_cidr` { *`name for the CIDR information`*                           } [ :ip *`IP address to query`*                   ]

<a name="idp28828272"></a>
## Description

This Sieve functionality requires that you have the cidrdb module loaded. See [Section 14.16, “cidrdb – CIDRDB”](modules.cidrdb "14.16. cidrdb – CIDRDB")

### Simple usage

`define_cidr` creates the pathway for CIDR information. In the first form, the first argument names the resulting information stream so it can be referred to by the check_cidr function. The second argument names the datasource, and refers to the name it was given in the ds_core instantiation. The third argument is a query string to retrieve the CIDR blocks from the datasource specified in the second argument. The optional fourth argument allows you to specify the period on which to rebuild the CIDR tree (the default is to rebuild only when a reload command is issued via the console.) The first form creates a CIDR pathway with a `type` of `boolean`. The second form is described below.

`reload_cidr` reloads the information from the pathway specified by the argument. In this way, if the information is being updated, such as a blacklist, the CIDR will always be aware of the most recent changes before it performs a check.

`check_cidr` checks the CIDR information pathway specified by the first argument to determine if the IP associated with a current transaction would fit within any of the CIDR blocks. For CIDR pathways of `type` `boolean`, it returns true if it does and false otherwise. For CIDR pathways of `type` `value`, it always returns false.

### Complex usage

In the second form of `define_cidr`, a hash is used to define the CIDR pathway. These keys are supported:

<dl className="variablelist">

<dt>cidrname</dt>

<dd>

Name for the CIDR information

</dd>

<dt>dstype</dt>

<dd>

Data source type.

A value of `dslayer` specifies that the data source layer should be used. A value of `rbldnsd` specifies that the data should be taken from a [rbldnsd](http://www.corpit.ru/mjt/rbldnsd/rbldnsd.8.html)-format file.

</dd>

<dt>cachename</dt>

<dd>

When `dstype` is `dslayer`, this specifies the name of the data source instance to query.

</dd>

<dt>query</dt>

<dd>

When `dstype` is `dslayer`, this specifies the query to issue to the data source instance identified by `cachename`.

When `dstype` is `rbldnsd`, this specifies the URI of the rbldnsd-format file. The URI must include a `want` parameter with a value of `a` or `txt`, to specify whether to return the A or TXT record from the RBL.

</dd>

<dt>type</dt>

<dd>

`boolean` specifies that the query will only return whether the IP associated with a current transaction would fit within any of the CIDR blocks.

`value` specifies that the query will return the data associated with the CIDR. When using the data source layer, this data comes from the `value_column`. When using an rbldnsd-format file, this data comes from the field specified by the `query`.

</dd>

<dt>refresh</dt>

<dd>

Refresh interval for rebuilding CIDR. If this is set to `0`, then the CIDR will only be refreshed when `reload_cidr` is called on the CIDR. The default refresh interval is 1800 seconds (30 minutes).

</dd>

<dt>interpolate</dt>

<dd>

When set to `true`, `query_cidr` will replace any dollar signs in the value with the IP address, and return this interpolated value.

</dd>

<dt>optimize</dt>

<dd>

Some RBLs distributed in RBLDNSD-format are not optimized from a CIDR standpoint—the CIDR blocks are not listed in a sorted order. When `optimize` is set to `true`, the CIDRs will be sorted when the data is loaded. This can increase performance and reduce memory usage, but there may be a lengthening in the time taken to load the data.

</dd>

<dt>cidr_column</dt>

<dd>

For a CIDR pathway with a `type` of `value`, the name of the column containing the CIDR, as returned by `query`.

</dd>

<dt>value_column</dt>

<dd>

For a CIDR pathway with a `type` of `value`, the name of the column containing the data associated with the CIDR, as returned by `query`. This data will be returned by `query_cidr` when the CIDR matches.

</dd>

<dt>default_value</dt>

<dd>

For a CIDR pathway with a `type` of `value`, the default value for `query_cidr` to return if `query` does not return any data for the matched CIDR.

</dd>

</dl>

`query_cidr` can be used to obtain data associated with the CIDR information pathway, for more complex applications. If the `type` is `value`, a string containing the data associated with the CIDR is returned. If the `type` is `boolean`, then `true` is returned on a CIDR match, otherwise `false`.

### Examples

<a name="example.cidr_check"></a>

**Example 16.11. check_cidr example**

```
if check_cidr "test" "true"
{
  ...
}
```

<a name="example.query_cidr"></a>

**Example 16.12. query_cidr example**

```
$cidr = hash_create;
$cidrname = "myblacklist";
hash_set $cidr "cidrname" "${cidrname}";
hash_set $cidr "cachename" "cidrdb_sqlite";
hash_set $cidr "dstype" "dslayer";
hash_set $cidr "query" "SELECT CIDR,RESULT FROM MYRBL";
hash_set $cidr "type" "value";
hash_set $cidr "cidr_column" "CIDR";
hash_set $cidr "value_column" "RESULT";
hash_set $cidr "default_value" "127.0.0.0";

define_cidr $cidr;
$q = query_cidr :ip "%{spfv1:i}" "${cidrname}";

# In this example, MYRBL is a home-grown set of RBLs, and RESULT has bits
# set indicating RBL matches, e.g.: 127.0.0.x, where x is a bitwise AND
# of the lists.
$octets = split "." $q;
if isset $octets 3 {
  $last_octet = $octets[3];
  if ec_test :value "bitwise-and" :comparator "i;ascii-numeric" $last_octet "1"
  {
    ec_log "%{spfv1:i} is blacklisted in SOMEBL";
  }
  if ec_test :value "bitwise-and" :comparator "i;ascii-numeric" $last_octet "2"
  {
    ec_log "%{spfv1:i} is blacklisted in ANOTHERBL";
  }
}
```

<a name="example.query.rbldsnd"></a>

**Example 16.13. Querying an rbldnsd file**

```
$cidr = hash_create;
$cidrname = "myrbldnsd";
hash_set $cidr "cidrname" "${cidrname}";
hash_set $cidr "cachename" "cidrdb_myrbldnsd";
hash_set $cidr "dstype" "rbldnsd";
hash_set $cidr "query" "/path/to/my.rbldnsd?want=txt";
hash_set $cidr "type" "value";
hash_set $cidr "cidr_column" "cidr";
hash_set $cidr "value_column" "str";
hash_set $cidr "interpolate" "true";

define_cidr $cidr;
$q = query_cidr "${cidrname}";
ec_log "Query result:${q}";
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.brightmail)  | [Up](sieve.ref.files) |  [Next](sieve.ref.cloudmark_score) |
| brightmail  | [Table of Contents](index) |  cloudmark_score |
