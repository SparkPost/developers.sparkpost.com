|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.runinpool)  | 15.2. Lua Functions |  [Next](lua.ref.msys.shareGet.php) |

<a name="lua.ref.msys.runSieveScript"></a>
## Name

msys.runSieveScript — Run a Sieve script in the specified phase

<a name="idp24701104"></a>
## Synopsis

`msys.runSieveScript(scriptfilename, phase, capabilities);`

```
scriptfilename: string
phase: string
capabilities: number
```
<a name="idp24703872"></a>
## Description

Runs the Sieve script contained in `scriptfilename` as though it were being run in the `phasename` phase. `capabilities` is a mask of Sieve capabilities, OR'd together, as appropriate for the currently executing environment. The Lua "bag" state is passed through to the Sieve interpreter, allowing the message and validation context information to be used by the script. This function returns two values:

*   boolean success indicator

*   error message string if success indicator is false

Possible capability values are:

*   msys.core.SIEVEREQ_MSG

*   msys.core.SIEVEREQ_ENV_FROM

*   msys.core.SIEVEREQ_ENV_TO

*   msys.core.SIEVEREQ_AC

*   msys.core.SIEVEREQ_550_OK

*   msys.core.SIEVEREQ_PHASE_CONNECT

*   msys.core.SIEVEREQ_PHASE_EHLO

*   msys.core.SIEVEREQ_PHASE_MAILFROM

*   msys.core.SIEVEREQ_PHASE_RCPTTO

*   msys.core.SIEVEREQ_PHASE_DATA

*   msys.core.SIEVEREQ_PHASE_SPOOL

*   msys.core.SIEVEREQ_PHASE_EACH_RCPT

*   msys.core.SIEVEREQ_DNS_LOOKUP_OK

*   msys.core.SIEVEREQ_MSG_BODY

*   msys.core.SIEVEREQ_PHASE_ACCEPT

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.runinpool)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.shareGet.php) |
| msys.runInPool  | [Table of Contents](index) |  msys.shareGet |
