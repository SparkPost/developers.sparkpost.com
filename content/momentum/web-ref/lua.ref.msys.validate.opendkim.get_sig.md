|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.validate.opendkim.get_num_sigs)  | 15.2. Lua Functions |  [Next](lua.ref.msys.validate.opendkim.get_sig_canons.php) |

<a name="lua.ref.msys.validate.opendkim.get_sig"></a>
## Name

msys.validate.opendkim.get_sig — Get a signature from a DKIM object

<a name="idp27318880"></a>
## Synopsis

`msys.validate.opendkim.get_sig(dkim, num)`

```
dkim: userdata, DKIM type
num: numeric, optional
```
<a name="idp27322000"></a>
## Description

**Configuration Change. ** This function is available as of version 3.6.

This function gets a signature (DKIM_SIGINFO) from a DKIM object. It requires the opendkim module. The `dkim` parameter is an array of DKIM_SIGINFO objects returned by the `msys.validate.opendkim.verify` function. For a description of the DKIM_SIGINFO object see [DKIM_SIGINFO](http://www.opendkim.org/libopendkim/dkim_siginfo.html). The `num` parameter is the index of the DKIM_SIGINFO object that you wish to retrieve. The signature index, must be less than the number of signatures in the DKIM object. For a code example see [Example 15.70, “msys.validate.opendkim.verify example”](lua.ref.msys.validate.opendkim.verify#lua.ref.msys.validate.opendkim.verify.example "Example 15.70. msys.validate.opendkim.verify example").

This function returns the DKIM_SIGINFO object and the DKIM status (DKIM_STAT). For a description of the DKIM_SIGINFO object see [DKIM_DSIGINFO](http://www.opendkim.org/libopendkim/dkim_siginfo.html). `DKIM_STAT` can be any one of the following values:

*   `DKIM_STAT_OK` – successful completion

*   `DKIM_STAT_BADSIG` – signature did not match headers and body

*   `DKIM_STAT_NOSIG` – no signature present

*   `DKIM_STAT_NOKEY` – no key available for verifying

*   `DKIM_STAT_CANTVRFY` – can't get key for verifying

*   `DKIM_STAT_SYNTAX` – message is not in valid syntax

*   `DKIM_STAT_NORESOURCE` – resource unavailable

*   `DKIM_STAT_INTERNAL` – internal error

*   `DKIM_STAT_REVOKED` – signing key revoked

*   `DKIM_STAT_INVALID` – invalid parameter(s)

*   `DKIM_STAT_NOTIMPLEMENT` – function not implemented

*   `DKIM_STAT_KEYFAIL` – key retrieval failed (try again later)

*   `DKIM_STAT_CBREJECT` – callback requested message rejection

*   `DKIM_STAT_CBTRYAGAIN` – callback can't complete (try again later)

*   `DKIM_STAT_CBERROR` – unspecified callback error

Enable this function with the statement `require('msys.validate.opendkim');`.

<a name="idp27351040"></a>
## See Also

[msys.validate.opendkim.get_sig_canons](lua.ref.msys.validate.opendkim.get_sig_canons "msys.validate.opendkim.get_sig_canons"), [msys.validate.opendkim.sign](lua.ref.msys.validate.opendkim.sign.php "msys.validate.opendkim.sign"), [msys.validate.opendkim.verify](lua.ref.msys.validate.opendkim.verify.php "msys.validate.opendkim.verify"), [msys.validate.opendkim.get_num_sigs](lua.ref.msys.validate.opendkim.get_num_sigs.php "msys.validate.opendkim.get_num_sigs"), [msys.validate.opendkim.get_sig_domain](lua.ref.msys.validate.opendkim.get_sig_domain.php "msys.validate.opendkim.get_sig_domain"), [msys.validate.opendkim.get_sig_selector](lua.ref.msys.validate.opendkim.get_sig_selector.php "msys.validate.opendkim.get_sig_selector"), [msys.validate.opendkim.get_sig_errorstr](lua.ref.msys.validate.opendkim.get_sig_errorstr.php "msys.validate.opendkim.get_sig_errorstr"), [msys.validate.opendkim.get_sig_flags](lua.ref.msys.validate.opendkim.get_sig_flags.php "msys.validate.opendkim.get_sig_flags"), [msys.validate.opendkim.get_sig_identity](lua.ref.msys.validate.opendkim.get_sig_identity.php "msys.validate.opendkim.get_sig_identity"), [msys.validate.opendkim.get_sig_keysize](lua.ref.msys.validate.opendkim.get_sig_keysize.php "msys.validate.opendkim.get_sig_keysize"), [msys.validate.opendkim.get_sig_signalg](lua.ref.msys.validate.opendkim.get_sig_signalg.php "msys.validate.opendkim.get_sig_signalg"), [msys.validate.opendkim.get_sig_hdrsigned](lua.ref.msys.validate.opendkim.get_sig_hdrsigned.php "msys.validate.opendkim.get_sig_hdrsigned"), [msys.validate.opendkim.get_sig_canons](lua.ref.msys.validate.opendkim.get_sig_canons.php "msys.validate.opendkim.get_sig_canons"), [Section 14.49, “opendkim – OpenDKIM module”](modules.opendkim.php "14.49. opendkim – OpenDKIM module") and [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim.php "14.27. dkim – DomainKeys Identified Mail Signatures")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.validate.opendkim.get_num_sigs)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.validate.opendkim.get_sig_canons.php) |
| msys.validate.opendkim.get_num_sigs  | [Table of Contents](index) |  msys.validate.opendkim.get_sig_canons |
