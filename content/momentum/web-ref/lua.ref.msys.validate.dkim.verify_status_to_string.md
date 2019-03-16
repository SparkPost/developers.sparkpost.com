| [Prev](lua.ref.msys.validate.dkim.verify_results_get_item)  | 15.2. Lua Functions |  [Next](lua.ref.msys.validate.opendkim.get_num_sigs.php) |

<a name="lua.ref.msys.validate.dkim.verify_status_to_string"></a>
## Name

msys.validate.dkim.verify_status_to_string — Return a status string of DKIM verification

<a name="idp27254992"></a>
## Synopsis

`msys.validate.dkim.verify_status_to_string(status);`

`status: string`<a name="idp27257696"></a>
## Description

Return a textual representation of ec_dkim_verify_result.status that's suitable for use in an Authentication-Results header. For more information about status results see [RFC 5451](http://tools.ietf.org/html/rfc5451#section-2.4.1). For a code example see [Example 15.36, “msys.dkim.get_verify_results”](lua.ref.msys.validate.dkim.get_verify_results#lua.ref.msys.validate.dkim.get_verify_results.example "Example 15.36. msys.dkim.get_verify_results").

**Configuration Change. ** This feature is available as of version 3.5.

*Note*: If status is nil then error is "`No status code is passed in`".

This function is valid in the validate_data_spool, data and data_spool_each_rcpt phases. Enable this function with the statement `require('msys.validate.dkim');`.

<a name="idp27265968"></a>
## See Also

[msys.validate.dkim.verify_results_get_count](lua.ref.msys.validate.dkim.verify_results_get_count "msys.validate.dkim.verify_results_get_count"), [msys.validate.dkim.get_verify_results](lua.ref.msys.validate.dkim.get_verify_results.php "msys.validate.dkim.get_verify_results"), [msys.validate.dkim.verify_results_get_item](lua.ref.msys.validate.dkim.verify_results_get_item.php "msys.validate.dkim.verify_results_get_item")

| [Prev](lua.ref.msys.validate.dkim.verify_results_get_item)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.validate.opendkim.get_num_sigs.php) |
| msys.validate.dkim.verify_results_get_item  | [Table of Contents](index) |  msys.validate.opendkim.get_num_sigs |
