| [Prev](conf.ref.tls_verify_mode)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.transfail_drain_rate.php) |

<a name="conf.ref.trace_smtp_mode"></a>
## Name

trace_smtp_mode — set the default permissions of trace files

## Synopsis

`trace_smtp_mode = 0640`

<a name="idp12276256"></a>
## Description

This option sets the default permissions of trace files created when using the console command **trace smtp** . As always, the permissions will be modified by the umask of the ecelerity process. When running as user and group `ecuser`, the default value of this option will make the files readable and writable to the `ecuser` user, readable to members of the ecuser group, and not accessible to other users.

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

The default value for this option is `0640`.

<a name="idp12281856"></a>
## Scope

trace_smtp_mode is valid in the global scope.

<a name="idp12283504"></a>
## See Also

[trace smtp](console_commands.trace_smtp "trace smtp")

| [Prev](conf.ref.tls_verify_mode)  | [Up](conf.ref.files.php) |  [Next](conf.ref.transfail_drain_rate.php) |
| tls_verify_mode  | [Table of Contents](index) |  transfail_drain_rate |
