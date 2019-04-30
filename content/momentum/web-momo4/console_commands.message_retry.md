|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.message_fail_quiet)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.module) |

<a name="console_commands.message_retry"></a>
## Name

message retry — perform an immediate delivery attempt on a message

## Synopsis

`message retry` { *`message_id`* }

<a name="idp7296864"></a>
## Description

This command takes a message ID as an argument and forces an immediate delivery attempt by placing it in the active queue for the appropriate domain.

```
10:47:35 /tmp/2025> message retry 53/6B-18426-1AAEACF3
Message requeued for delivery
```

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.message_fail_quiet)  | [Up](console.cmds.ref) |  [Next](console_commands.module) |
| message fail quiet  | [Table of Contents](index) |  module |

