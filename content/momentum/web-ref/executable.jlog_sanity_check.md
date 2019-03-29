|     |     |     |
| --- | --- | --- |
| [Prev](executable.jlog_change_endian)  | 11.2. Executable Commands |  [Next](executable.jlogctl.php) |

<a name="executable.jlog_sanity_check"></a>
## Name

jlog_sanity_check — validate that a jlog is free of errors

## Synopsis

`/opt/msys/jlog/bin/jlog_sanity_check` { le | be } *`jlog`*

<a name="idp14611040"></a>
## Description

This command inspects the contents of a jlog, and reports any errors or inconsistencies it finds. If the jlog is OK, nothing is printed.

The first argument indicates the endianness of the system on which the jlog was written (`le` for little-endian architectures like i386 and `be` for big-endian architectures like sparc).

The second argument is the path to the jlog you want to check.

This command should be run as `ecuser`.

|     |     |     |
| --- | --- | --- |
| [Prev](executable.jlog_change_endian)  | [Up](exe.commands.details.php) |  [Next](executable.jlogctl.php) |
| jlog_change_endian  | [Table of Contents](index) |  jlogctl |
