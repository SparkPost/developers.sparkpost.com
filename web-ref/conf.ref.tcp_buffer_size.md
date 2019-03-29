|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.suspend_delivery)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.threadpool.php) |

<a name="conf.ref.tcp_buffer_size"></a>
## Name

tcp_buffer_size — maximum tcp buffer size for outbound connections

## Synopsis

`tcp_buffer_size = 32768`

<a name="idp11957632"></a>
## Description

Momentum uses an auto-scaling algorithm to ensure that the tcp buffer size is set optimally. This option allows you to set an upper bound on the tcp buffer size selected.

The default for this option is 32768 bytes.

### Warning

This is an advanced option. Setting the value too high can cause memory exhaustion. Thorough testing is recommended before deployment in a production environment.

<a name="idp11960832"></a>
## Scope

tcp_buffer_size is valid in the global scope.

<a name="idp11962480"></a>
## See Also

[Use_MMAP](conf.ref.use_mmap "Use_MMAP")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.suspend_delivery)  | [Up](conf.ref.files.php) |  [Next](conf.ref.threadpool.php) |
| suspend_delivery  | [Table of Contents](index) |  threadpool |
