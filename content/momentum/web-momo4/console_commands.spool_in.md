|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.spool_import_poll)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.summary) |

<a name="console_commands.spool_in"></a>
## Name

spool_in — read a message from the spool to the mail queue

## Synopsis

`spool_in` { *`mid`* }

<a name="idp12151248"></a>
## Description

This command takes a message id and tries to read the message specified by the mid from the spool to the mail queue. If the message is already in queue, it will do nothing except printing a notice.

### Warning

This is an advanced command. Please consult with our support team before making use of this command in a production enviroment.

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.spool_import_poll)  | [Up](console.cmds.ref) |  [Next](console_commands.summary) |
| spool import_poll  | [Table of Contents](index) |  summary |

