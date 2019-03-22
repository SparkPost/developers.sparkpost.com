| [Prev](conf.ref.memory_goal)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.message_expiration) |

<a name="conf.ref.memory_hwm"></a>
## Name

memory_hwm — configure physical memory usage high-water mark

## Synopsis

`memory_hwm = 95`

<a name="idp25518592"></a>
## Description

The memory_hwm directive allows you to specify the maximum percentage of physical memory that should be used during normal operation. If this threshold is exceeded, new mail will be transiently failed and the server will aggressively free up resources to bring memory usage within acceptable bounds. The default value is `95`.

<a name="idp25521168"></a>
## Scope

memory_hwm is valid in the global scope.

<a name="idp25522992"></a>
## See Also

[memory_goal](conf.ref.memory_goal "memory_goal")

| [Prev](conf.ref.memory_goal)  | [Up](config.options.ref) |  [Next](conf.ref.message_expiration) |
| memory_goal  | [Table of Contents](index) |  message_expiration |

