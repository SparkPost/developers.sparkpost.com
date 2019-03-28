| [Prev](console_commands.fail_domain)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.fingerprint_cache_summary) |

<a name="console_commands.fail_domain_quiet"></a>
## Name

fail domain quiet — fail messages for a domain without generating bounces

## Synopsis

`fail domain quiet` { *`domain_name`* }

<a name="idp13050480"></a>
## Description

The **fail domain quiet**              command allows the administrative failure of all messages bound for the specified domain without sending a bounce message, even if Generate_Bounces is set in the configuration file. Its usage is similar to fail domain:

```
10:47:35 /tmp/2025> fail domain quiet unresolvableproblems.com
unresolvableproblems.com purged, 62415 messages failed.
```
<a name="idp13053504"></a>
## See Also

[fail domain](console_commands.fail_domain "fail domain")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.fail_domain)  | [Up](console.cmds.ref) |  [Next](console_commands.fingerprint_cache_summary) |
| fail domain  | [Table of Contents](index) |  fingerprint cache summary |

