|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.message_fail)  | 12.2. System Console Commands |  [Next](console_commands.message_retry.php) |

<a name="console_commands.message_fail_quiet"></a>
## Name

message fail quiet — fail a message and do not create a non-delivery receipt (NDR)

## Synopsis

`message fail quiet` { *`message_id`* }

<a name="idp16146608"></a>
## Description

This command takes a single argument in the form of a message id and will immediately fail the delivery of the message suppressing the creation of an NDR.

<a name="idp16148368"></a>
## See Also

[message fail](console_commands.message_fail "message fail")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.message_fail)  | [Up](console.commands.non-module.php) |  [Next](console_commands.message_retry.php) |
| message fail  | [Table of Contents](index) |  message retry |
