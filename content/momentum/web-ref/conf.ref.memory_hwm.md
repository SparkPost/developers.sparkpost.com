| [Prev](conf.ref.memory_goal)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.message_expiration.php) |

<a name="conf.ref.memory_hwm"></a>
## Name

memory_hwm — configure physical memory usage high-water mark

## Synopsis

`Memory_HWM = 95`

<a name="idp10370992"></a>
## Description

The memory_hwm directive allows you to specify the maximum percentage of physical memory that should be used during normal operation. If this threshold is exceeded, new mail will be transiently failed and the server will aggressively free up resources to bring memory usage within acceptable bounds. The default value for this option is `95`.

<a name="idp10374208"></a>
## Scope

memory_hwm is valid in the global scope.

<a name="idp10375808"></a>
## See Also

[memory_goal](conf.ref.memory_goal "memory_goal")

| [Prev](conf.ref.memory_goal)  | [Up](conf.ref.files.php) |  [Next](conf.ref.message_expiration.php) |
| memory_goal  | [Table of Contents](index) |  message_expiration |
