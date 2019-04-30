|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.lmtp_port)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.local_changes_only.php) |

<a name="conf.ref.local_changes_file"></a>
## Name

local_changes_file — the file for writing local configuration changes

## Synopsis

`Local_Changes_File = "/opt/msys/ecelerity/etc/local_changes.conf"`

<a name="idp10027712"></a>
## Description

The `Local_Changes_File` option sets the name of a configuration file which must be writable, and which is implicitly loaded after all other configuration files regardless of its placement in the `ecelerity.conf` file. Since it must be writable and files included twice are read-only, the `Local_Changes_File` option cannot point to the same file as any 'include' directive, and it cannot point to the main configuration file. Since the `Local_Changes_File` is effectively loaded at the end of the main configuration file, options set in it are able to override any setting in any other configuration file; if it were loaded at some other point, options set after that point could not be overridden by it.

If the `Local_Changes_File` option is not defined, and the main configuration file is writable, then changes are written to the main configuration file. If `Local_Changes_File` is not defined, and the main configuration file is read-only, then a virtual file, not associated with any real path is used to hold changes; in this case, the **config writeback**           command will issue a warning stating that not all portions of the configuration could be saved, and show the contents of the virtual file. This situation can be remedied by setting the `Local_Changes_File` to a valid path and issuing the **config writeback**           command again, at which point changes in the virtual file will be saved to the newly configured location. For more information about **config writeback**           see [config](console_commands.config "config").

<a name="idp10036368"></a>
## Scope

Local_Changes_File is valid in the global scope.

<a name="idp10038016"></a>
## See Also

[local_changes_only](conf.ref.local_changes_only "local_changes_only")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.lmtp_port)  | [Up](conf.ref.files.php) |  [Next](conf.ref.local_changes_only.php) |
| lmtp_port  | [Table of Contents](index) |  local_changes_only |
