| [Prev](console_commands.showqueue)  | 12.2. System Console Commands |  [Next](console_commands.signing_stats.php) |

<a name="console_commands.shutdown"></a>
## Name

shutdown — shutdown Momentum

## Synopsis

`shutdown`

<a name="idp16320960"></a>
## Description

This command immediately causes Momentum to shutdown. Momentum must close its sockets and file descriptors cleanly, so this may not happen instantaneously. After this command is issued, no further SMTP, ECStream or console connections will be allowed.

### Note

This command does not work on Solaris. To stop the ecelerity process on Solaris sytems go to the command line and issue the command: **`svcadm disable ecelerity`**                   .

| [Prev](console_commands.showqueue)  | [Up](console.commands.non-module.php) |  [Next](console_commands.signing_stats.php) |
| showqueue  | [Table of Contents](index) |  signing_stats |
