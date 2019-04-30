|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.trace_smtp)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.version) |

<a name="console_commands.unlink_stats"></a>
## Name

unlink stats — show statistics of removing messages from the disk

## Synopsis

`unlink stats`

<a name="idp11643504"></a>
## Description

This command shows statistics of unlinking messages on the disk.

```
10:47:35 /tmp/2025> unlink stats
                   Messages    Headers    Bodies
Submissions    :        6000      6000      6000
Attempts       :        6000      6000      6000
  Failures     :           0         0         0
  Successes    :        6000      6000      6000
  Success Rate :      100.00%   100.00%   100.00%
Current Backlog:      0
Batch Backlog  :      0
```

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.trace_smtp)  | [Up](console.cmds.ref) |  [Next](console_commands.version) |
| trace smtp  | [Table of Contents](index) |  version |

