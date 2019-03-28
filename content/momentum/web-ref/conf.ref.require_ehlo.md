|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.remote_smtp_port)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.reserve_maintenance_interval.php) |

<a name="conf.ref.require_ehlo"></a>
## Name

require_ehlo — reject mail from clients that don't say HELO

## Synopsis

`Require_EHLO = false`

`Require_EHLO = true`

<a name="idp11157376"></a>
## Description

This directive instructs Momentum to force clients to initiate conversations with an EHLO or HELO command. Early RFCs defining the SMTP protocol did not require or even define the HELO command (notably RFC788). However, starting with RFC821 and currently in RFC2821, one of EHLO or HELO is required. As such, much older SMTP clients may not implement a version of SMTP newer than RFC788. Enable this setting if you wish to enforce RFC821 and later HELO/EHLO handling.

Setting `Require_EHLO` to `true` will cause Momentum to response with a 501 error to any commands issued before an EHLO or HELO command.

The default value for this option is `false`.

<a name="idp11162320"></a>
## Scope

require_ehlo is valid in the global, listener, listen and peer scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.remote_smtp_port)  | [Up](conf.ref.files.php) |  [Next](conf.ref.reserve_maintenance_interval.php) |
| remote_smtp_port  | [Table of Contents](index) |  reserve_maintenance_interval |
