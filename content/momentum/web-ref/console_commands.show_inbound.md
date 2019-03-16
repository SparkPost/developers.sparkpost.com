| [Prev](console_commands.reroute_queue)  | 12.2. System Console Commands |  [Next](console_commands.show_outbound.php) |

<a name="console_commands.show_inbound"></a>
## Name

show inbound — show all inbound connections

## Synopsis

`show inbound`

<a name="idp16276400"></a>
## Description

This command shows all inbound connections. In the following example, the output has been wrapped for display purpose. "23" is the file descriptor of the related event. "async body response (for 0.264s)" shows the last state of the messages coming in via this connection and the time spent in that state. "[$RCSfile: sieve.c, v $]" shows the last validation module called. "[floating]" means the messages coming in via this connection are not handled by the main scheduler right now.

```
10:47:35 /tmp/2025> show inbound
23: [inbound/esmtp_message_factory] IPv4 127.0.0.1:47741 async body response
(for 0.264s) [$RCSfile: sieve.c,v $] [floating]
```
<a name="idp16279296"></a>
## See Also

[show outbound](console_commands.show_outbound "show outbound")

| [Prev](console_commands.reroute_queue)  | [Up](console.commands.non-module.php) |  [Next](console_commands.show_outbound.php) |
| reroute queue  | [Table of Contents](index) |  show outbound |
