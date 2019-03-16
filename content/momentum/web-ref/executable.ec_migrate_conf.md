| [Prev](executable.ec_md5passwd)  | 11.2. Executable Commands |  [Next](executable.ec_rotate.php) |

<a name="executable.ec_migrate_conf"></a>
## Name

ec_migrate_conf — migrate from Momentum version 2.2 to version 3.0

## Synopsis

`/opt/msys/ecelerity/bin/ec_migrate_conf` { *`/path/to/file`* } [ *`/other/file`* ]

<a name="idp13710736"></a>
## Description

**ec_migrate_conf** converts a `ecelerity.conf` file from version 2.2 syntax to version 3.0 syntax. Specify the configuration file that you wish to convert and optionally the conversion file. Use this command in the following way:

`shell> /opt/msys/ecelerity/bin/ec_migrate_conf ecelerity.conf`

In this case the configuration file is converted in place and the original is saved as `ecelerity.conf.bak`. You can also specify a new configuration file using redirection:

shell> /opt/msys/ecelerity/bin/ec_migrate_conf  <
  `conf_file` > *`new.conf`*

This will read the specified configuration file and output the changed file the new configuration file.

If your configuration file includes other files, you must migrate each file individually. Once your original file has been converted, use the **ec_dump_config** command to validate the script migration prior to starting Momentum. For more information see [ec_dump_config](executable.ec_dump_config "ec_dump_config").

<a name="ec_migrate_conf.using"></a>
### Using ec_migrate_conf

<a class="indexterm" name="idp13720128"></a>

This script generates a syntactically valid configuration file. Find below a description of the actions taken.

The following deprecated options are removed:

*   `async_close_concurrency`

*   `async_reception_swap_out`

*   `extensions_dir`

*   `async_sending_swap_in`

*   `async_spool_in`

*   `async_swap_out`

*   `async_swap_in`

*   `async_unlink_backlog`

*   `async_unlink_concurrency`

*   `batch_unlink_concurrency`

*   `worker_cpu_concurrency`

*   `worker_io_concurrency`

*   `control_listener_timeout`

The following modules no longer exist and are removed:

*   auth_ldap

*   auth_mysql

If you had ec_logger and bounce_loggers named ec_logger_rt and bounce_logger_rt, these will be removed from your configuration file. If you are using the web UI, these loggers are required. Add the following code to your configuration file:

```
ec_logger "ec_logger_rt" {
  mainlog = "jlog:///var/log/ecelerity/mainlog.rt=>ec_rt_stats"
  rejectlog = "jlog:///var/log/ecelerity/rejectlog.rt=>ec_rt_stats"
  log_errors = "false"
}

bounce_logger "bounce_logger_rt" {
  bouncelog = "jlog:///var/log/ecelerity/bouncelog.rt=>ec_rt_stats"
}
```

The following modules need not be explicitly referenced in the configuration file and are removed.

*   jlog

*   persist_io

*   ds_sqlite

*   bzip2

*   http_io

*   gzip

*   syslog_io

*   ds_ldap

*   ds_csv

*   ds_cdb

*   ds_iowrapper

*   ds_mysql

*   ds_pgsql

*   ds_odbc

To migrate regex_binding2 modules use the **migrate_regex_binding2** command. For more information see [migrate_regex_binding2](executable.migrate_regex_binding2 "migrate_regex_binding2").

The migration script returns a message to the user telling what was converted. Review this message.

<a name="idp13757760"></a>
## See Also

[migrate_regex_binding2](executable.migrate_regex_binding2 "migrate_regex_binding2") and [ec_dump_config](executable.ec_dump_config.php "ec_dump_config")

| [Prev](executable.ec_md5passwd)  | [Up](exe.commands.details.php) |  [Next](executable.ec_rotate.php) |
| ec_md5passwd  | [Table of Contents](index) |  ec_rotate |
