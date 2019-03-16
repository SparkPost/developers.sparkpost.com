| [Prev](lua.ref.msys.validate.opendkim.get_sig_identity)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.validate.opendkim.get_sig_selector) |

<a name="lua.ref.msys.validate.opendkim.get_sig_keysize"></a>
## Name

msys.validate.opendkim.get_sig_keysize — Fetch the size of the key used to generate a signature

<a name="idp18988832"></a>
## Synopsis

`msys.validate.opendkim.get_sig_keysize(dkim_sig)`

`dkim_sig: userdata, DKIM_SIGINFO type`<a name="idp18992288"></a>
## Description

This function fetches the size of the key used to generate a signature. Use `msys.validate.opendkim.get_num_sigs` and `msys.validate.opendkim.get_sig` to get a DKIM_SIGINFO object to pass to this function. For a description of the DKIM_SIGINFO object, see [DKIM_DSIGINFO](http://www.opendkim.org/libopendkim/dkim_siginfo.html).

This function requires the [`opendkim`](modules.opendkim "71.50. opendkim – Open Source DKIM") module.

Enable this function with the statement `require('msys.validate.opendkim');`.

This function returns the size of the signing key in bits and the DKIM status `DKIM_STAT`.

The `DKIM_STAT` can be one of the following values:

*   `DKIM_STAT_OK` – successful completion

*   `DKIM_STAT_BADSIG` – signature did not match headers and body

*   `DKIM_STAT_NOSIG` – no signature present

*   `DKIM_STAT_NOKEY` – no key available for verifying

*   `DKIM_STAT_CANTVRFY` – cannot get key for verifying

*   `DKIM_STAT_SYNTAX` – message is not in valid syntax

*   `DKIM_STAT_NORESOURCE` – resource unavailable

*   `DKIM_STAT_INTERNAL` – internal error

*   `DKIM_STAT_REVOKED` – signing key revoked

*   `DKIM_STAT_INVALID` – invalid parameter(s)

*   `DKIM_STAT_NOTIMPLEMENT` – function not implemented

*   `DKIM_STAT_KEYFAIL` – key retrieval failed (try again later)

*   `DKIM_STAT_CBREJECT` – callback requested message rejection

*   `DKIM_STAT_CBTRYAGAIN` – callback cannot complete (try again later)

*   `DKIM_STAT_CBERROR` – unspecified callback error

<a name="lua.ref.msys.validate.opendkim.get_sig_keysize.example"></a>

**Example 70.66. msys.validate.opendkim.get_num_sigs example**

```
require("opendkim.dkim");
require("msys.validate.opendkim");
local mod = {};

function mod:validate_data(msg, accept, vctx)
  local num = 0;
  local stat;
  local dkim_sig;
  local dkim = msys.validate.opendkim.verify(msg);
  num, stat = msys.validate.opendkim.get_num_sigs(dkim);
  -- create loop controlled by num 
  if num > 0 then
    for i = 0, num-1 do
      dkim_sig = msys.validate.opendkim.get_sig(dkim, i);
      -- now do something with the signature
      local size = msys.validate.opendkim.get_sig_keysize(dkim_sig);
      if size < 1024 then
        ...
      end
    end
  end 
  return msys.core.VALIDATE_CONT;
end
msys.registerModule("test_opendkim", mod);
```

<a name="idp19024160"></a>
## See Also

[msys.validate.opendkim.get_sig_canons](lua.ref.msys.validate.opendkim.get_sig_canons "msys.validate.opendkim.get_sig_canons"), [msys.validate.opendkim.sign](lua.ref.msys.validate.opendkim.sign "msys.validate.opendkim.sign"), [msys.validate.opendkim.verify](lua.ref.msys.validate.opendkim.verify "msys.validate.opendkim.verify"), [msys.validate.opendkim.get_num_sigs](lua.ref.msys.validate.opendkim.get_num_sigs "msys.validate.opendkim.get_num_sigs"), [msys.validate.opendkim.get_sig](lua.ref.msys.validate.opendkim.get_sig "msys.validate.opendkim.get_sig"), [msys.validate.opendkim.get_sig_domain](lua.ref.msys.validate.opendkim.get_sig_domain "msys.validate.opendkim.get_sig_domain"), [msys.validate.opendkim.get_sig_selector](lua.ref.msys.validate.opendkim.get_sig_selector "msys.validate.opendkim.get_sig_selector"), [msys.validate.opendkim.get_sig_errorstr](lua.ref.msys.validate.opendkim.get_sig_errorstr "msys.validate.opendkim.get_sig_errorstr"), [msys.validate.opendkim.get_sig_flags](lua.ref.msys.validate.opendkim.get_sig_flags "msys.validate.opendkim.get_sig_flags"), [msys.validate.opendkim.get_sig_identity](lua.ref.msys.validate.opendkim.get_sig_identity "msys.validate.opendkim.get_sig_identity"), [msys.validate.opendkim.get_sig_signalg](lua.ref.msys.validate.opendkim.get_sig_signalg "msys.validate.opendkim.get_sig_signalg"), [msys.validate.opendkim.get_sig_hdrsigned](lua.ref.msys.validate.opendkim.get_sig_hdrsigned "msys.validate.opendkim.get_sig_hdrsigned")

| [Prev](lua.ref.msys.validate.opendkim.get_sig_identity)  | [Up](lua.function.details) |  [Next](lua.ref.msys.validate.opendkim.get_sig_selector) |
| msys.validate.opendkim.get_sig_identity  | [Table of Contents](index) |  msys.validate.opendkim.get_sig_selector |

