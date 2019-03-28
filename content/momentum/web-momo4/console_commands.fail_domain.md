| [Prev](console_commands.domain_all)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.fail_domain_quiet) |

<a name="console_commands.fail_domain"></a>
## Name

fail domain — fail messages for a domain with a bounce message

## Synopsis

`fail domain` { *`domain_name`* }

<a name="idp9126112"></a>
## Description

The **fail domain**        command allows the administrative failure of all messages bound for the specified domain. If political issues arise that cannot be resolved or if the domain has been discontinued, it may be necessary to fail all of the messages to that domain. All failed messages will be assigned the following administrative failure message: "554 Message manually purged."

For example, the following command could be used to fail all message for the domain unresolvableproblems.com.

```
10:47:35 /tmp/2025> fail domain unresolvableproblems.com
unresolvableproblems.com purged, 62415 messages failed.
```

Usually, the command is immediately proceded or followed by "blackholing" the domain by issuing a command such as:

`10:47:35 /tmp/2025> config set domain unresolvableproblems.com blackhole inline`<a name="idp9130912"></a>
## See Also

[fail domain quiet](console_commands.fail_domain_quiet "fail domain quiet")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.domain_all)  | [Up](console.cmds.ref) |  [Next](console_commands.fail_domain_quiet) |
| domain all  | [Table of Contents](index) |  fail domain quiet |

