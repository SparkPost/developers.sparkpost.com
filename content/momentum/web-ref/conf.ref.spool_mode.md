| [Prev](conf.ref.soft_bounce_drain_rate)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.spoolbase.php) |

<a name="conf.ref.spool_mode"></a>
## Name

spool_mode — set the file mode for newly created spool files

## Synopsis

`Spool_Mode = 0640`

<a name="idp11859472"></a>
## Description

`Spool_Mode` allows you to set the *`mode`* for the `open` system call used to create spool files. The value must be specified in octal format. The default is `0640`.

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp11864336"></a>
## Scope

`spool_mode` is valid in the global scope.

<a name="idp11866368"></a>
## See Also

[spoolbase](conf.ref.spoolbase "spoolbase")

| [Prev](conf.ref.soft_bounce_drain_rate)  | [Up](conf.ref.files.php) |  [Next](conf.ref.spoolbase.php) |
| soft_bounce_drain_rate  | [Table of Contents](index) |  spoolbase |
