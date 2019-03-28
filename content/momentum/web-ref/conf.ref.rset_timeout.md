|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.routes)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.scheduler.php) |

<a name="conf.ref.rset_timeout"></a>
## Name

rset_timeout — set the timeout after RSET

## Synopsis

`RSET_Timeout = 30`

<a name="idp11555072"></a>
## Description

The amount of time in seconds to wait for a response to a `RSET` command. `RSET` commands are used to reset the state of an SMTP session in which a transaction has only partially succeeded. It allows subsequent messages to be delivered down a single SMTP session immediately following a transient or permanent failure response from the remote server before the complete and successful delivery of the prior message. The default value for this option is `30`.

<a name="idp11558432"></a>
## Scope

rset_timeout is valid in the binding, binding_group, domain and global scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.routes)  | [Up](conf.ref.files.php) |  [Next](conf.ref.scheduler.php) |
| routes  | [Table of Contents](index) |  scheduler |
