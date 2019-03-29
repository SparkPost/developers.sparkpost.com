|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.trace_smtp)  | 12.2. System Console Commands |  [Next](console_commands.version.php) |

<a name="console_commands.unlink_stats"></a>
## Name

unlink stats — show statistics of removing messages from the disk

## Synopsis

`unlink stats`

<a name="idp16559296"></a>
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
| [Prev](console_commands.trace_smtp)  | [Up](console.commands.non-module.php) |  [Next](console_commands.version.php) |
| trace smtp  | [Table of Contents](index) |  version |
