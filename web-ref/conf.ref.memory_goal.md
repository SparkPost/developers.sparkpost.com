|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.mdn_failures_notify)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.memory_hwm.php) |

<a name="conf.ref.memory_goal"></a>
## Name

memory_goal — configure physical memory usage goal

## Synopsis

`Memory_Goal = 90`

<a name="idp10356928"></a>
## Description

The memory_goal directive allows you to specify the maximum percentage of physical memory that should be used during normal operation. If this threshold is exceeded, the server will free up some resources to try to bring memory usage within acceptable bounds. The default value for this option is `90`.

It is possible for the server to exceed the memory_goal. Other than trying to free up some resources, no action is taken to stop the memory_goal from being exceeded. For a "harder" limit, see [memory_hwm](conf.ref.memory_hwm "memory_hwm").

<a name="idp10361216"></a>
## Scope

memory_goal is valid in the global scope.

<a name="idp10362816"></a>
## See Also

[memory_hwm](conf.ref.memory_hwm "memory_hwm")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.mdn_failures_notify)  | [Up](conf.ref.files.php) |  [Next](conf.ref.memory_hwm.php) |
| mdn_failures_notify  | [Table of Contents](index) |  memory_hwm |
