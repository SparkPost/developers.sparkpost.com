|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.validate.opendkim.get_sig_errorstr)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.validate.opendkim.get_sig_hdrsigned) |

<a name="lua.ref.msys.validate.opendkim.get_sig_flags"></a>
## Name

msys.validate.opendkim.get_sig_flags — Fetch the flags associated with a DKIM signature

<a name="idp18843760"></a>
## Synopsis

`msys.validate.opendkim.get_sig_flags(dkim_sig)`

`dkim_sig: userdata, DKIM_SIGINFO type`<a name="idp18847216"></a>
## Description

This function fetches the flags associated with a DKIM signature. Use `msys.validate.opendkim.get_num_sigs` and `msys.validate.opendkim.get_sig` to get a DKIM_SIGINFO object to pass to this function. For a description of the DKIM_SIGINFO object, see [DKIM_DSIGINFO](http://www.opendkim.org/libopendkim/dkim_siginfo.html).

This function requires the [`opendkim`](modules.opendkim "71.50. opendkim – Open Source DKIM") module.

Enable this function with the statement `require('msys.validate.opendkim');`.

This function returns a flags bitmap and the DKIM status `DKIM_STAT`.

The flags bitmap can be one of the following values:

*   `DKIM_SIGFLAG_IGNORE` – Signature has been flagged to be ignored.

*   `DKIM_SIGFLAG_PROCESSED` – Signature has had DNS validation attempted.

*   `DKIM_SIGFLAG_PASSED` – DNS validation succeeded.

*   `DKIM_SIGFLAG_TESTKEY` – Keys "in test" flag was set.

*   `DKIM_SIGFLAG_NOSUBDOMAIN` – Keys "not for use with subdomains" flag was set.

These values are found in the `opendkim.dkim` namespace. For more information about the flags bitmap, see [dkim_sig_getflags](http://www.opendkim.org/libopendkim/dkim_sig_getflags.html).

The DKIM status `DKIM_STAT` can be one of the following values:

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

<a name="idp18885472"></a>
## See Also

[msys.validate.opendkim.get_sig_canons](lua.ref.msys.validate.opendkim.get_sig_canons "msys.validate.opendkim.get_sig_canons"), [msys.validate.opendkim.sign](lua.ref.msys.validate.opendkim.sign "msys.validate.opendkim.sign"), [msys.validate.opendkim.verify](lua.ref.msys.validate.opendkim.verify "msys.validate.opendkim.verify"), [msys.validate.opendkim.get_num_sigs](lua.ref.msys.validate.opendkim.get_num_sigs "msys.validate.opendkim.get_num_sigs"), [msys.validate.opendkim.get_sig](lua.ref.msys.validate.opendkim.get_sig "msys.validate.opendkim.get_sig"), [msys.validate.opendkim.get_sig_domain](lua.ref.msys.validate.opendkim.get_sig_domain "msys.validate.opendkim.get_sig_domain"), [msys.validate.opendkim.get_sig_selector](lua.ref.msys.validate.opendkim.get_sig_selector "msys.validate.opendkim.get_sig_selector"), [msys.validate.opendkim.get_sig_errorstr](lua.ref.msys.validate.opendkim.get_sig_errorstr "msys.validate.opendkim.get_sig_errorstr"), [msys.validate.opendkim.get_sig_identity](lua.ref.msys.validate.opendkim.get_sig_identity "msys.validate.opendkim.get_sig_identity"), [msys.validate.opendkim.get_sig_keysize](lua.ref.msys.validate.opendkim.get_sig_keysize "msys.validate.opendkim.get_sig_keysize"), [msys.validate.opendkim.get_sig_signalg](lua.ref.msys.validate.opendkim.get_sig_signalg "msys.validate.opendkim.get_sig_signalg"), [msys.validate.opendkim.get_sig_hdrsigned](lua.ref.msys.validate.opendkim.get_sig_hdrsigned "msys.validate.opendkim.get_sig_hdrsigned")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.validate.opendkim.get_sig_errorstr)  | [Up](lua.function.details) |  [Next](lua.ref.msys.validate.opendkim.get_sig_hdrsigned) |
| msys.validate.opendkim.get_sig_errorstr  | [Table of Contents](index) |  msys.validate.opendkim.get_sig_hdrsigned |

