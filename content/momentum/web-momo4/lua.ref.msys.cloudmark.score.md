|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cloudmark.add_af_data)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.cloudmark.score_af) |

<a name="lua.ref.msys.cloudmark.score"></a>
## Name

msys.cloudmark.score — Scan messages using Cloudmark

<a name="idp15013296"></a>
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.score(msg, accept, vctx)`

```
msg: userdata, ec_message type (optional)
accept: userdata, accept_construct type (optional)
vctx: userdata, validate_context type (optional)
```
<a name="idp15017136"></a>
## Description

Use this function to scan mail. It can be invoked at the data, spool, or each_rcpt phases, and it will not work at the connect, ehlo, mailfrom, or rcptto phases. It takes the following parameters. If any of these inputs are not provided, they will be inferred from the current context.

*   `msg` – Email to be scored

*   `accept` – accept_construct

*   `vctx` – Validation context

You must load and correctly configure the cloudmark module before using this function. Be sure to set the cloudmark module option `Enabled` to `false`. For details, see [Section 71.18, “cloudmark – Cloudmark Authority® Content Scanning”](modules.cloudmark "71.18. cloudmark – Cloudmark Authority® Content Scanning").

This function returns a table is returned with the following key/value pairs. These name value pairs are also set within the validation context (VCTX_MESS):

*   `score` – Authority score for the message, a number between 0 and 100\. The higher the number, the more certain the engine is that the mail is spam.

*   `is_spam` – If the cloudmark module `MinimumScore` option is set, this flag is set to `true`, indicating that the engine has determined the message is spam. No action is directly taken on the message; that is left to the user to do using a policy script.

*   `category` – Category assigned to the message by the Cloudmark Authority

*   `category-desc` – Description of the category

*   `sub-category` – Sub-category assigned to the message by the Cloudmark Authority

*   `sub-category-desc` – Description of sub-category

*   `rescan` – If this flag is set to `yes`, the email would benefit from a rescan.

*   `analysis` – Cloudmark Authority analysis header

<a name="lua.ref.msys.cloudmark.score.example"></a>

**Example 70.4. msys.cloudmark.score example**

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

### Warning

Do not use `pcall` with this function.

<a name="idp15043776"></a>
## See Also

[msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze "msys.cloudmark.analyze")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.cloudmark.add_af_data)  | [Up](lua.function.details) |  [Next](lua.ref.msys.cloudmark.score_af) |
| msys.cloudmark.add_af_data  | [Table of Contents](index) |  msys.cloudmark.score_af |

