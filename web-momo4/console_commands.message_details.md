| [Prev](console_commands.memory)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.message_fail) |

<a name="console_commands.message_details"></a>
## Name

message details — show detailed message information

## Synopsis

`message details` [ *`full | body`*         ] { *`message_id`* }

<a name="idp9231360"></a>
## Description

While all messages are stored on disk in the spool and can be manually inspected there, Momentum also provides a mechanism to view message details from within the console.

Given a message id, you can request the metadata details on that message, the body of the message (including headers) or the metadata concatenated with the body (including headers).

To show just the metadata, issue the command with the message id as a single parameter.

```
10:47:35 /tmp/2025> message details 53/6B-18426-1AAEACF3
Message: 53/6B-18426-1AAEACF3
Message Type: full message
               Created: 2003-12-01 02:15:45
          Next Attempt: 2003-12-01 18:11:25
               Retries: 5
          Received Via: SMTP 10.0.0.103 (IPv4)
                Sender: sender-849629@senderdomain.com
             Recipient: someaddress@example.com
                  Code: 451 No valid hosts (too many connection failures)
                  Size: 11317
```

If only the body is desired, then the command should take the form:

`message details body 53/6B-18426-1AAEACF3`

If both the metadata and the body are desired, the "full" option should be used:

`message details full 53/6B-18426-1AAEACF3`
### Note

`message details` cannot show details for a message that is in the process of being delivered.

| [Prev](console_commands.memory)  | [Up](console.cmds.ref) |  [Next](console_commands.message_fail) |
| memory  | [Table of Contents](index) |  message fail |

