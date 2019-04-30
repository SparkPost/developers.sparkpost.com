|     |     |     |
| --- | --- | --- |
| [Prev](executable.ecelerity)  | Chapter 74. Executable Commands Reference |  [Next](executable.jlog_sanity_check) |

<a name="executable.jlog_change_endian"></a>
## Name

jlog_change_endian — change the endianness of a jlog

## Synopsis

`/opt/msys/jlog/bin/jlog_change_endian` *`source`* { tole | tobe } *`destination`*

<a name="idp13218416"></a>
## Description

This command creates an exact copy of a jlog with the opposite endianness of the original. If it detects a problem in the source jlog, it will print an error message and not create the copy. For this reason, you should run [jlog_sanity_check](executable.jlog_sanity_check "jlog_sanity_check") on the source jlog first, to make sure it is error-free. This command should be run as `ecuser`.

The first argument is the path to the jlog you want to convert.

The second argument indicates the endianness of the destination jlog (and implicitly of the source jlog). `tole` will convert a big-endian jlog to little-endian (e.g. sparc to i386), while `tobe` will convert a little-endian jlog to big-endian (e.g. i386 to sparc).

The third argument is the path where you want the converted jlog to be written; it must not exist, but its parent directory must exist before you run `jlog_change_endian.pl`.

|     |     |     |
| --- | --- | --- |
| [Prev](executable.ecelerity)  | [Up](exec.cmds.ref) |  [Next](executable.jlog_sanity_check) |
| ecelerity  | [Table of Contents](index) |  jlog_sanity_check |

