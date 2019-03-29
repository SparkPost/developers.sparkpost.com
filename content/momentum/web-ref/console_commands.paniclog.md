|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.pager)  | 12.2. System Console Commands |  [Next](console_commands.pid.php) |

<a name="console_commands.paniclog"></a>
## Name

paniclog — show last several entries written to paniclog

## Synopsis

`paniclog`

<a name="idp16205952"></a>
## Description

Momentum maintains, in memory, the last several messages that were written to the paniclog. This command will display the last 10 messages seen on each log level (see the [debug_flags](conf.ref.debug_flags "debug_flags") for details).

```
10:47:35 /tmp/2025> paniclog
[Sun 30 Nov 2003 10:31:37] [serious] Validating software license.
[Sun 30 Nov 2003 10:31:37] [serious] Validated MAC address 00:01:02:34:4b:b3
[Sun 30 Nov 2003 10:31:37] [serious] Licensed unlimited MultiVIP bindings.
[Sun 30 Nov 2003 10:31:37] [serious] Valid license.
[Sun 30 Nov 2003 10:31:37] [serious] ndbm_cache initialized
```

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.pager)  | [Up](console.commands.non-module.php) |  [Next](console_commands.pid.php) |
| \pager  | [Table of Contents](index) |  pid |
