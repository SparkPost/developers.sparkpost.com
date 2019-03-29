|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.fail_domain_quiet)  | 12.2. System Console Commands |  [Next](console_commands.fingerprint_rejection_summary.php) |

<a name="console_commands.fingerprint_cache_summary"></a>
## Name

fingerprint cache summary — display the current cache size

## Synopsis

`fingerprint cache summary`

<a name="idp15996240"></a>
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.26.

In order to use this command, you must have the Policy Tools suite installed. Passive OS fingerprinting is installed as part of the Policy Tools suite. This functionality yields information about inbound connections. For more information about installing the Policy Tools suite see [Section 1.9, “Installing Additional Packages”](install.additional.packages "1.9. Installing Additional Packages").

This console command displays the current fingerprint cache usage.

Passive operating system fingerprinting runs as a daemon that Momentum communicates with over a socket, `/tmp/p0fd`. This daemon is started using the command: **/etc/init.d/ecp0f start** . The fingerprints are all included in the ecp0f package and are located here: `/opt/msys/ecelerity/3rdParty/etc/p0f/`. These fingerprints do not need to be modified.

<a name="idp16005664"></a>
## See Also

[fingerprint rejection summary](console_commands.fingerprint_rejection_summary "fingerprint rejection summary")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.fail_domain_quiet)  | [Up](console.commands.non-module.php) |  [Next](console_commands.fingerprint_rejection_summary.php) |
| fail domain quiet  | [Table of Contents](index) |  fingerprint rejection summary |
