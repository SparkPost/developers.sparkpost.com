| [Prev](console_commands.fingerprint_cache_summary)  | 12.2. System Console Commands |  [Next](console_commands.flush_domain.php) |

<a name="console_commands.fingerprint_rejection_summary"></a>
## Name

fingerprint rejection summary — display details related to the current inbound connection

## Synopsis

`fingerprint rejection summary`

<a name="idp16015424"></a>
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.26.

In order to use this command, you must have the Policy Tools suite installed. Passive OS fingerprinting is installed as part of the Policy Tools suite. This functionality yields information about inbound connections. For more information about installing the Policy Tools suite see [Section 1.9, “Installing Additional Packages”](install.additional.packages "1.9. Installing Additional Packages").

This command displays the genre, detail, receptions and rejections related to the current inbound connection.

Passive operating system fingerprinting runs as a daemon that Momentum communicates with over a socket, `/tmp/p0fd`. This daemon is started using the command: **/etc/init.d/ecp0f start** . The fingerprints are all included in the ecp0f package and are located here: `/opt/msys/ecelerity/3rdParty/etc/p0f/`. These fingerprints do not need to be modified.

<a name="idp16024976"></a>
## See Also

[fingerprint cache summary](console_commands.fingerprint_cache_summary "fingerprint cache summary")

| [Prev](console_commands.fingerprint_cache_summary)  | [Up](console.commands.non-module.php) |  [Next](console_commands.flush_domain.php) |
| fingerprint cache summary  | [Table of Contents](index) |  flush domain |
