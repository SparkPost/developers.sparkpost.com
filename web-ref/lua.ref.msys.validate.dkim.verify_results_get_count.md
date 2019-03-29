|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.validate.dkim.sign)  | 15.2. Lua Functions |  [Next](lua.ref.msys.validate.dkim.verify_results_get_item.php) |

<a name="lua.ref.msys.validate.dkim.verify_results_get_count"></a>
## Name

msys.validate.dkim.verify_results_get_count — return a count of verification results

<a name="idp27221280"></a>
## Synopsis

`msys.validate.dkim.verify_results_get_count(results);`

`results: string`<a name="idp27223984"></a>
## Description

A message can contain zero or more DKIM signatures. If more than one signature is found in a message, they are normally found in the different parts of a multi-part MIME type message. Each signature will be validated and one verification result will be created for each signature. This function returns the number of verification results.

**Configuration Change. ** This feature is available as of version 3.5.

*Note*: If results is nil then error is set to "`No verification results to count.`"

This function is valid in the validate_data_spool, data and data_spool_each_rcpt phases. Enable this function with the statement `require('msys.validate.dkim);`.

<a name="idp27231088"></a>
## See Also

[msys.validate.dkim.verify_status_to_string](lua.ref.msys.validate.dkim.verify_status_to_string "msys.validate.dkim.verify_status_to_string"), [msys.validate.dkim.get_verify_results](lua.ref.msys.validate.dkim.get_verify_results.php "msys.validate.dkim.get_verify_results"), [msys.validate.dkim.verify_results_get_item](lua.ref.msys.validate.dkim.verify_results_get_item.php "msys.validate.dkim.verify_results_get_item")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.validate.dkim.sign)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.validate.dkim.verify_results_get_item.php) |
| msys.validate.dkim.sign  | [Table of Contents](index) |  msys.validate.dkim.verify_results_get_item |
