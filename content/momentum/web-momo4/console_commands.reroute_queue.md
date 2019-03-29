|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.reopen_logs)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.show_inbound) |

<a name="console_commands.reroute_queue"></a>
## Name

reroute queue — move messages from queues of one domain to queues of the other

## Synopsis

`reroute queue` { *`domain_name1`* } { *`domain_name2`* }

<a name="idp12023472"></a>
## Description

The **reroute queue**       command requires two domain names as its arguments. It will move messages from queues of the first domain to the queues of the second domain.

```
10:47:35 /tmp/2025> reroute queue relay.com newrelay.com
Moved 100 messages from 'relay.com' to 'newrelay.com'
```

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.reopen_logs)  | [Up](console.cmds.ref) |  [Next](console_commands.show_inbound) |
| reopen logs  | [Table of Contents](index) |  show inbound |

