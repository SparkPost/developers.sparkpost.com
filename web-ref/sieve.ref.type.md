|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.thread_pool_stats)  | 16.2. Sieve Function Details |  [Next](sieve.ref.vctx_conn_delete) |

<a name="sieve.ref.type"></a>
## Name

type — test the type of the value in a Sieve variable

## Synopsis

`type` { *`variable`* } { *`string`* }

<a name="idp31333104"></a>
## Description

Some actions (such as `ec_config`) can return more than one type of value. Use this test to check the type of the value in a Sieve variable. Possible types are:

*   "string"

*   "number"

*   "stringlist"

*   "hash"

*   "tag"

<a name="example.test"></a>

**Example 16.130. type test example**

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
| [Prev](sieve.ref.thread_pool_stats)  | [Up](sieve.ref.files) |  [Next](sieve.ref.vctx_conn_delete) |
| thread_pool_stats  | [Table of Contents](index) |  vctx_conn_delete |
