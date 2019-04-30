|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_mmap)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.user) |

<a name="conf.ref.use_sendfile"></a>
## Name

use_sendfile — use sendfile() when sending mail

## Synopsis

`use_sendfile = false`

`use_sendfile = true`

<a name="idp27342944"></a>
## Description

When set to true, Momentum will attempt to use `sendfile` ), (or other system dependent equivalent) to efficiently send mail to a remote MTA. This typically means that the system will either pull data directly from disk using a form of memory mapped IO, or use a zero copy mechanism to reduce the number of user-space to kernel mode transitions and memory bus overhead that would otherwise be required to push the data through the system.

The default for this option is `false`. This option should be set dependent on the performance and stability of `sendfile` on your system. Unix systems typically also require that `use_mmap` also be enabled for this to take effect.

<a name="idp27347584"></a>
## Scope

use_sendfile is valid in the global scope.

<a name="idp27349408"></a>
## See Also

[use_mmap](conf.ref.use_mmap "use_mmap")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_mmap)  | [Up](config.options.ref) |  [Next](conf.ref.user) |
| use_mmap  | [Table of Contents](index) |  user |

