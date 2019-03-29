|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.local_changes_file)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.mail_queue_check_vm_interval.php) |

<a name="conf.ref.local_changes_only"></a>
## Name

local_changes_only — whether there is a file for writing local configuration changes

## Synopsis

`Local_Changes_Only = true`

<a name="idp10046864"></a>
## Description

The `Local_Changes_Only` option defaults to 'false'. If it is 'true', the `Local_Changes_File` option must be defined and all changes are saved to the `Local_Changes_File`. If it is 'false', changes are distributed as described below:

*   When replacing a value that has previously been set, if the file it was last set in is writable then the change is made in-place; the new option value replaces the old option value at the same location in the writable file.

*   If replacing a value that was last set in a read-only file or setting a value that was not set previously, then the change will go to the lexically first writable file in which the scope instance containing the change was defined.

<a name="idp10052816"></a>
## Scope

Local_Changes_Only is valid in the global scope.

<a name="idp10054464"></a>
## See Also

[local_changes_file](conf.ref.local_changes_file "local_changes_file")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.local_changes_file)  | [Up](conf.ref.files.php) |  [Next](conf.ref.mail_queue_check_vm_interval.php) |
| local_changes_file  | [Table of Contents](index) |  mail_queue_check_vm_interval |
