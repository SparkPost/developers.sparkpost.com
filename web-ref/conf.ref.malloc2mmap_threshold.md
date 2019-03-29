|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.maintainer_pool)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.masterdb_file.php) |

<a name="conf.ref.malloc2mmap_threshold"></a>
## Name

malloc2mmap_threshold — use mmap when allocations exceed this amount

## Synopsis

`malloc2mmap_threshold = 4092`

<a name="idp10117072"></a>
## Description

When set to a positive value, Momentum will use `mmap` to fulfill memory allocation requirements exeeding the `malloc2mmap_threshold` size, rather than allocating memory from the heap via `malloc` .

Lowering this setting can reduce heap fragmentation and the system RSS, but can use up more address space than heap allocations alone, since the minimum granularity of `mmap` is the system page size.

The default for this option is 4092.

<a name="idp10121664"></a>
## Scope

malloc2mmap_threshold is valid in the global scope.

<a name="idp10123312"></a>
## See Also

[Use_MMAP](conf.ref.use_mmap "Use_MMAP")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.maintainer_pool)  | [Up](conf.ref.files.php) |  [Next](conf.ref.masterdb_file.php) |
| maintainer_pool  | [Table of Contents](index) |  masterdb_file |
