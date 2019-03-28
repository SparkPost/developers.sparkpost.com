|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_cluster_cache_set)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_disconnect) |

<a name="sieve.ref.ec_config"></a>
## Name

ec_config — get Momentum configuration from Sieve

## Synopsis

`ec_config` { "get" | "eval" } [ *`<anonymous scope name>`*              | *`<scope name>`*        *`<instance name>`*        ...] { *`optname`* }

<a name="idp29299408"></a>
## Description

This action implements a subset of the console config command. Only the get and eval actions are currently supported, but otherwise behavior is identical. Simple option values are returned as strings, options that would be specified in parentheses in the config file (such as lists or ACLs) are returned as stringlists, and dictionary options are returned as hashes.

<a name="example.ec_config"></a>

**Example 16.32. ec_config example**

```
$opt = ec_config "get" "Debug_Flags" "DEBUG";
# first, see if the option was set
if type :is $opt "stringlist" {
  # now check the option value
  $dummy = join "," $opt;
  if ec_test $dummy "SMTP" {
    ec_log "SMTP debugging is turned on";
  }
}
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_cluster_cache_set)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_disconnect) |
| ec_cluster_cache_set  | [Table of Contents](index) |  ec_disconnect |
