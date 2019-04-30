|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_ipv6)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.use_sendfile) |

<a name="conf.ref.use_mmap"></a>
## Name

use_mmap — use mmap when spooling messages from disk

## Synopsis

`use_mmap = false`

`use_mmap = true`

<a name="idp27323168"></a>
## Description

When set to true, Momentum will attempt to memory map message bodies (via `mmap`), rather than allocating memory from the heap and reading the file from disk.

The default is `false`. This option should be set dependent on the performance and stability of `mmap` on your system.

### Warning

If you set `use_mmap` to `true` the `compress_spool` module will not load. For more information see [Section 71.21, “compress_spool – Dynamic Spool Compression”](modules.compress_spool "71.21. compress_spool – Dynamic Spool Compression")

<a name="idp27329808"></a>
## Scope

use_mmap is valid in the global scope.

<a name="idp27331632"></a>
## See Also

[malloc2mmap_threshold](conf.ref.malloc2mmap_threshold "malloc2mmap_threshold") and [use_sendfile](conf.ref.use_sendfile "use_sendfile")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_ipv6)  | [Up](config.options.ref) |  [Next](conf.ref.use_sendfile) |
| use_ipv6  | [Table of Contents](index) |  use_sendfile |

