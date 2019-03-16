| [Prev](lua.ref.msys.validate.dkim.verify_results_get_count)  | 15.2. Lua Functions |  [Next](lua.ref.msys.validate.dkim.verify_status_to_string.php) |

<a name="lua.ref.msys.validate.dkim.verify_results_get_item"></a>
## Name

msys.validate.dkim.verify_results_get_item — Return the DKIM signature result at the specified index

<a name="idp27237440"></a>
## Synopsis

`msys.validate.dkim.verify_results_get_item(results, index_value);`

```
results: string
index_value: number
```
<a name="idp27240192"></a>
## Description

Return the DKIM signature result at the specified index. For an example of how this function is used see [Example 15.36, “msys.dkim.get_verify_results”](lua.ref.msys.validate.dkim.get_verify_results#lua.ref.msys.validate.dkim.get_verify_results.example "Example 15.36. msys.dkim.get_verify_results").

**Configuration Change. ** This feature is available as of version 3.5.

*Note*: If results is nil then error is `"No verification results to get item from`" and if index_value is nil then error is `Index value not specified`" and if index_value is greater than the size of results then error is "`Index value is greater than the number of verification results`".

This function is valid in the validate_data_spool, data and data_spool_each_rcpt phases. Enable this function with the statement `require('msys.validate.dkim');`.

<a name="idp27248688"></a>
## See Also

[msys.validate.dkim.get_verify_results](lua.ref.msys.validate.dkim.get_verify_results "msys.validate.dkim.get_verify_results"), [msys.validate.dkim.verify_results_get_count](lua.ref.msys.validate.dkim.verify_results_get_count.php "msys.validate.dkim.verify_results_get_count"), [msys.validate.dkim.verify_status_to_string](lua.ref.msys.validate.dkim.verify_status_to_string.php "msys.validate.dkim.verify_status_to_string")

| [Prev](lua.ref.msys.validate.dkim.verify_results_get_count)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.validate.dkim.verify_status_to_string.php) |
| msys.validate.dkim.verify_results_get_count  | [Table of Contents](index) |  msys.validate.dkim.verify_status_to_string |
