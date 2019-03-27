| [Prev](config.tls_verify_mode)  | Chapter 72. Configuration Options Reference |  [Next](config.tracking_domain) |

<a name="conf.ref.trace_smtp_mode"></a>
## Name

trace_smtp_mode — set the default permissions of trace files

## Synopsis

`trace_smtp_mode = 0640`

<a name="idp27162256"></a>
## Description

This option sets the default permissions of trace files created when using the console command **trace smtp** . As always, the permissions will be modified by the umask of the ecelerity process. When running as user and group `ecuser`, the default value will make the files readable and writable to the `ecuser` user, readable to members of the ecuser group, and not accessible to other users.

Changing the value of this option at runtime requires restarting the ecelerity process (issuing the ec_console command **`config reload`**         will not suffice).

The default value is `0640`.

<a name="idp27167696"></a>
## Scope

`trace_smtp_mode` is valid in the global scope.

<a name="idp27169952"></a>
## See Also

[trace smtp](console_commands.trace_smtp "trace smtp")

| [Prev](config.tls_verify_mode)  | [Up](config.options.ref) |  [Next](config.tracking_domain) |
| tls_verify_mode  | [Table of Contents](index) |  tracking_domain |

