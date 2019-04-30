|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.soft_bounce_drain_rate)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.spoolbase) |

<a name="conf.ref.spool_mode"></a>
## Name

spool_mode — set the file mode for newly created spool files

## Synopsis

`spool_mode = 0640`

<a name="idp26714400"></a>
## Description

`spool_mode` allows you to set the *`mode`* for the `open` system call used to create spool files. The value must be specified in octal format. The default is `0640`.

Changing the value of this option at runtime requires restarting the ecelerity process (issuing the ec_console command **`config reload`**         will not suffice).

<a name="idp26719136"></a>
## Scope

`spool_mode` is valid in the global scope.

<a name="idp26721392"></a>
## See Also

[spoolbase](conf.ref.spoolbase "spoolbase")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.soft_bounce_drain_rate)  | [Up](config.options.ref) |  [Next](conf.ref.spoolbase) |
| soft_bounce_drain_rate  | [Table of Contents](index) |  spoolbase |

