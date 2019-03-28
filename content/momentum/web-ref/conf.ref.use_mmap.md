|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_ipv6)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.use_sendfile.php) |

<a name="conf.ref.use_mmap"></a>
## Name

Use_MMAP — use mmap when spooling messages from disk

## Synopsis

`Use_MMAP = false`

`Use_MMAP = true`

<a name="idp12394496"></a>
## Description

When set to true, Momentum will attempt to memory map message bodies (via `mmap` ), rather than allocating memory from the heap and reading the file from disk.

The default for this option is `false`. This option should be set dependent on the performance and stability of `mmap` on your system.

### Warning

If you set `Use_MMAP` to `true` the `compress_spool` module will not load. For more information see [Section 14.20, “compress_spool – Dynamic Spool Compression”](modules.compress_spool "14.20. compress_spool – Dynamic Spool Compression")

<a name="idp12400800"></a>
## Scope

use_mmap is valid in the global scope.

<a name="idp12402432"></a>
## See Also

[malloc2mmap_threshold](conf.ref.malloc2mmap_threshold "malloc2mmap_threshold") and [Use_SendFile](conf.ref.use_sendfile.php "Use_SendFile")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_ipv6)  | [Up](conf.ref.files.php) |  [Next](conf.ref.use_sendfile.php) |
| Use_IPv6  | [Table of Contents](index) |  Use_SendFile |
