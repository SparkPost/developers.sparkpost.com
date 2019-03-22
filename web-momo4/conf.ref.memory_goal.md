| [Prev](conf.ref.mdn_failures_notify)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.memory_hwm) |

<a name="conf.ref.memory_goal"></a>
## Name

memory_goal — configure physical memory usage goal

## Synopsis

`memory_goal = 90`

<a name="idp25503216"></a>
## Description

The memory_goal directive allows you to specify the maximum percentage of physical memory that should be used during normal operation. If this threshold is exceeded, the server will free up some resources to try to bring memory usage within acceptable bounds. The default value is `90`.

It is possible for the server to exceed the memory_goal. Other than trying to free up some resources, no action is taken to stop the memory_goal from being exceeded. For a "harder" limit, see [memory_hwm](conf.ref.memory_hwm "memory_hwm").

<a name="idp25506976"></a>
## Scope

memory_goal is valid in the global scope.

<a name="idp25508800"></a>
## See Also

[memory_hwm](conf.ref.memory_hwm "memory_hwm")

| [Prev](conf.ref.mdn_failures_notify)  | [Up](config.options.ref) |  [Next](conf.ref.memory_hwm) |
| mdn_failures_notify  | [Table of Contents](index) |  memory_hwm |

