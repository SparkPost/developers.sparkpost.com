|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.fingerprint_cache_summary)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.flush_domain) |

<a name="console_commands.fingerprint_rejection_summary"></a>
## Name

fingerprint rejection summary — display details related to the current inbound connection

## Synopsis

`fingerprint rejection summary`

<a name="idp14254112"></a>
## Description

In order to use this command, you must have the Policy Tools suite installed. Passive OS fingerprinting is installed as part of the Policy Tools suite. This functionality yields information about inbound connections. For more information about installing the Policy Tools suite see [Section 12.1, “Installing Partner Modules”](post_installation#install.additional.packages "12.1. Installing Partner Modules").

This command displays the genre, detail, receptions and rejections related to the current inbound connection.

Passive operating system fingerprinting runs as a daemon that Momentum communicates with over a socket, `/tmp/p0fd`. This daemon is started using the command: **/etc/init.d/ecp0f start** . The fingerprints are all included in the ecp0f package and are located here: `/opt/msys/ecelerity/3rdParty/etc/p0f/`. These fingerprints do not need to be modified.

<a name="idp14260096"></a>
## See Also

[fingerprint cache summary](console_commands.fingerprint_cache_summary "fingerprint cache summary")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.fingerprint_cache_summary)  | [Up](console.cmds.ref) |  [Next](console_commands.flush_domain) |
| fingerprint cache summary  | [Table of Contents](index) |  flush domain |

