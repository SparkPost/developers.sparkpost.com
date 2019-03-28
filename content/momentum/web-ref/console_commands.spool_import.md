|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.sp_async)  | 12.2. System Console Commands |  [Next](console_commands.spool_import_poll.php) |

<a name="console_commands.spool_import"></a>
## Name

spool import — import an alternative spool

## Synopsis

spool import *`/path/to/spoolbase [concurrency] [suppress_trace_headers]`*

<a name="idp16388464"></a>
## Description

This command instructs Momentum to scan the specified directory as an Momentum spool directory, and to migrate the messages within into its active SpoolBase. This command is useful for disaster-recovery actions where a spool needs to be imported via an archive from another install.

The `suppress_trace_headers` suppresses the addition of trace headers on import. When performing a spool import, you may optionally specify the number of threads in the pool. The default value is `1`. When using the `suppress_trace_headers` option, you must specify a concurrency value

Messages imported with spool import will be assigned new message id's only if their existing id's would collide with messages currently in the system. Old messages will be deleted as they are imported.

### Warning

Importing a spool window subdirectory, for example, `/var/spool/ecelerity/59A3B`, may unexpectedly stop the ecelerity process. Importing the parent directory is strongly advised. For example, **`spool import /var/spool/ecelerity`**                             .

If you import a spool and delete the folder after importation, ecelerity will eventually crash. If you wish to delete the folder associated with an imported spool, do this only after restarting ecelerity.

You can configure the ec_logger module to log import events as described in [Section 14.31, “ec_logger – Momentum-Style Logging”](modules.ec_logger "14.31. ec_logger – Momentum-Style Logging"). Alternatively, you can implement a hook to record these events as you see fit.

<a name="idp16397104"></a>
## See Also

[spool import_poll](console_commands.spool_import_poll "spool import_poll")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.sp_async)  | [Up](console.commands.non-module.php) |  [Next](console_commands.spool_import_poll.php) |
| sp_async  | [Table of Contents](index) |  spool import_poll |
