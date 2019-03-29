|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cloudmark.add_af_data)  | 15.2. Lua Functions |  [Next](lua.ref.msys.cloudmark.score_af.php) |

<a name="lua.ref.msys.cloudmark.score"></a>
## Name

msys.cloudmark.score — Scan messages using Cloudmark

<a name="idp23479840"></a>
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.score(msg, accept, vctx)`

```
msg: userdata, ec_message type (optional)
accept: userdata, accept_construct type (optional)
vctx: userdata, validate_context type (optional)
```
<a name="idp23483360"></a>
## Description

You must load and correctly configure the cloudmark module before using this function. Be sure to set the module option `Enabled` to `false`. This function can be invoked at the data, spool or each_rcpt phases. It will not work at the connect, ehlo, mailfrom or rcptto phases. `msg` is the email to be scored; `accept` is the accept_construct and `vctx` is the validation context. If any of these inputs are not provided, they will be inferred from the current context. Use this function to scan mail. A table is returned with the following key/value pairs:

*   `score` – The authority score for the message, a number between 0 and 100\. The higher the number, the more certain the engine is that the mail is spam.

*   `is_spam` – If the cloudmark module option MinimumScore is set, this item is set to `true` indicating that the engine has determined the message is spam. No action is directly taken on the message; that is left to the user to do using a policy script.

*   `category` – The category assigned to the message by the Cloudmark Authority.

*   `category-desc` – The description of the category.

*   `sub-category` – The sub-category assigned to the message by the Cloudmark Authority.

*   `sub-category-desc` – The description of sub-category.

*   `rescan` – If this flag is set to ‘yes’, the email would benefit from a rescan.

*   `analysis` – The Cloudmark Authority analysis header.

The above name value pairs are also set within the validation context (VCTX_MESS).

### Warning

Do not use `pcall` with this function.

<a name="lua.ref.msys.cloudmark.score.example"></a>

**Example 15.4. msys.cloudmark.score example**

```
require("msys");
require("require("msys");
require("msys.cloudmark");

local mod = {};
function mod:validate_data(msg, accept, vctx)
  local result = msys.cloudmark.score(msg, accept, vctx)
  for k,v in pairs(result) do
    print (k, '=', v)
  end
  return msys.core.VALIDATE_CONT;
end
msys.registerModule("test_cm", mod);
```

<a name="idp23504464"></a>
## See Also

[msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze "msys.cloudmark.analyze"), [Section 14.18, “cloudmark – Cloudmark Authority Module”](modules.cloudmark.php "14.18. cloudmark – Cloudmark Authority Module")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cloudmark.add_af_data)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.cloudmark.score_af.php) |
| msys.cloudmark.add_af_data  | [Table of Contents](index) |  msys.cloudmark.score_af |
