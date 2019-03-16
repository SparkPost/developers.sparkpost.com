| [Prev](conf.ref.transform_8bitmime_content)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.unlink_on_spool_in_failure) |

<a name="conf.ref.umem_reap_interval"></a>
## Name

umem_reap_interval — how often to release unused memory

## Synopsis

`umem_reap_interval = 1800`

<a name="idp27250704"></a>
## Description

The ecelerity process uses a memory management system called libumem, which allocates memory for different tasks from a number of pools. When a pool does not have enough space to perform an allocation, umem will request more memory from the operating system (OS); however, when memory is released, umem does not immediately return it to the OS, since chances are we will need to use it again soon. Every Umem_Reap_Interval seconds, a thread looks at the umem memory pools to see if unused memory should be returned to the OS. This setting should not normally need to be changed.

The default value is `1800`.

<a name="idp27254032"></a>
## Scope

umem_reap_interval is valid in the global scope.

| [Prev](conf.ref.transform_8bitmime_content)  | [Up](config.options.ref) |  [Next](conf.ref.unlink_on_spool_in_failure) |
| transform_8bitmime_content  | [Table of Contents](index) |  unlink_on_spool_in_failure |

