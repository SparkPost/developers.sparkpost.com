|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.ac_inbound_session_count)  | 15.2. Lua Functions |  [Next](lua.ref.msys.cloudmark.add_af_data.php) |

<a name="lua.ref.msys.cloudmark.analyze"></a>
## Name

msys.cloudmark.analyze — Analyze a message using Cloudmark

<a name="idp23433392"></a>
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.analyze(hdr, msg, vctx)`

```
hdr: string
msg: userdata, ec_message type (optional)
vctx: userdata, validate_context type (optional)
```
<a name="idp23436880"></a>
## Description

This function analyzes the input string `hdr` and returns a table of the following key/value pairs:

*   `score` the authority score for the message, a number between 0 and 100\. The higher the number, the more certain the engine is that the mail is spam.

*   `is_spam` if cloudmark module option MinimumScore is set, this flag is set for messages whose score exceeds MinimumScore, to indicate the engine has determined the message is spam. No action is directly taken on the message; that is left to the user to do using a policy script.

*   `category` the category assigned to the message by the Cloudmark Authority.

*   `category-desc` the description of the category.

*   `sub-category` the sub-category assigned to the message by the Cloudmark Authority.

*   `sub-category-desc` the description of sub-category.

*   `rescan` the rescan flag. If this flag is set to ‘yes’, the email would benefit from a rescan.

*   `analysis` the Cloudmark Authority analysis header.

If input msg or vctx is not provided, they will be inferred from the current context. The above name value pairs are also set within the validation context (VCTX_MESS with cmae- as prefix) except analysis.

For a listing of the available context variables see [Section 14.18, “cloudmark – Cloudmark Authority Module”](modules.cloudmark "14.18. cloudmark – Cloudmark Authority Module").

### Warning

Do not use `pcall` with this function.

<a name="idp23452992"></a>
## See Also

[msys.cloudmark.score](lua.ref.msys.cloudmark.score "msys.cloudmark.score"), [Section 14.18, “cloudmark – Cloudmark Authority Module”](modules.cloudmark.php "14.18. cloudmark – Cloudmark Authority Module")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.ac_inbound_session_count)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.cloudmark.add_af_data.php) |
| ac:inbound_session_count  | [Table of Contents](index) |  msys.cloudmark.add_af_data |
