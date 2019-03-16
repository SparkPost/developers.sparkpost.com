| [Prev](executable.ec_rotate)  | 11.2. Executable Commands |  [Next](executable.ec_sendmail.php) |

<a name="executable.ec_rt_stats2"></a>
## Name

ec_rt_stats2 — analyze Momentum jlogs and generate reports for the web UI

## Synopsis

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ -b | --bouncelog *`log`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ -c | --c14n_patterns *`c14n_file`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ --cache_db *`config_string`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ --driver *`string`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ --driver_pass *`driver_password`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ --driver_user *`username`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ -h | --help ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ -l | --mainlog *`log`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ --man ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ --no-set-user ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ --nodename *`node_name`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ -P | --pidfile *`pidfile`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ -p | --passes *`num_passes`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ -r | --rejectlog *`log`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ -s | --statlog *`statlog`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ --subcluster *`name`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ --subscriber *`name`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ -U | unclass_bounces ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ -u | --user *`user_name`* ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ -v | --verbose ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ -W | --watchlist_only ]

`/opt/msys/ecelerity/bin/ec_rt_stats2` [ -w *`number`* ]

<a name="idp13980336"></a>
## Description

`ec_rt_stats2` performs statistical analysis on jlog files, providing copious information regarding the volume and delivery performance of mail transiting the system. Statistical analysis of the logs is written to a PostgreSQL database, providing realtime data available through the Web UI.

**ec_rt_stats2** is run as a cron job. On Linux **ec_rt_stats2** is run from `/etc/cron.d/msys-ecelerity` and on Solaris from root's crontab (`/var/spool/cron/crontabs/root`). If no logfiles are specified, **ec_rt_stats2** will produce no output.

The following options are available and can be passed in via options in the script invocation or via the `ec_rotate.conf` settings as explained below. For information about `ec_rotate.conf` see [the section called “The `ec_rotate.conf` File”](executable.ec_rotate#ec_rotate.conf "The ec_rotate.conf File").

<dl className="variablelist">

<dt>-b | --bouncelog *`/path/to/bounce_log`*</dt>

<dd>

Specify the bounce log file to use. The default value is `/var/log/ecelerity/bouncelog.rt`. In the `ec_rotate.conf` file this is equivalent to setting the `setting rt_stats_bouncelog` option.

</dd>

<dt>-c | --c14n_patterns *`/path/to/c14n_file`*</dt>

<dd>

Specify a file for bounce reason canonicalizers. This file contains PRCE patterns that are applied to the bounce reason so that the reasons can be normalized and will aggregate well. For example, you may wish to remove specific email addresses and IP addresses. Files should be formatted in the following way:

`/Mail Refused - /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/Mail Refused - a.b.c.d/`

In this case, IP addresses would be replaced by the expression `a.b.c.d`. You can add any number of patterns and they'll be applied in order. The default value for this option is `/opt/msys/ecelerity/etc/c14n_patterns`. In the `ec_rotate.conf` file this is equivalent to setting the `rt_stats_c14n_patterns` option.

</dd>

<dt>--cache_db *`config_string`*</dt>

<dd>

**Configuration Change. ** This feature is available as of version 3.5.

The location of The SQLite cache used by ec_rt_stats2\. The default value for this option is `dbi:SQLite:dbname=/var/log/ecelerity/pg_cache.db`.

</dd>

<dt>--driver *`string`*</dt>

<dd>

Specify an alternate driver connection string. The default value is `dbi:Pg:dbname=ecelerity;connect_timeout=300`. In the `ec_rotate.conf` file this is equivalent to setting the `rt_stats_driver` option.

</dd>

<dt>--driver_pass *`secret`*</dt>

<dd>

Specify an alternate driver password. There is no default value. In the `ec_rotate.conf` file this is equivalent to setting the `rt_stats_driver_pass` option.

</dd>

<dt>--driver_user *`ecuser`*</dt>

<dd>

Specify an alternate driver user. The default value is `ecuser`. In the `ec_rotate.conf` file this is equivalent to setting the `rt_stats_driver_user` option.

</dd>

<dt>-h | --help</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.14.

Display the help message.

</dd>

<dt>-l | --mainlog *`/path/to/mainlog`*</dt>

<dd>

Specify the main log file to use. The default value is `/var/log/ecelerity/mainlog.rt`. In the `ec_rotate.conf` file this is equivalent to setting `rt_stats_mainlog` option.

</dd>

<dt>--man</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.14.

Display the manual page.

</dd>

<dt>--no-set-user</dt>

<dd>

Do not set the user ID. The default is to `setuid` to `ecuser`.

</dd>

<dt>--nodename *`name_of_node`*</dt>

<dd>

This option affects the nodename used when inserting rows into the stats tables. It is taken from the `cluster.boot` file and should not need to be explicitly set by the user.

</dd>

<dt>-P | --pidfile *`/path/to/pidfile`*</dt>

<dd>

Specify an alternate PID to attach to. The default value is `/var/run/ec_rt_stats`. In the `ec_rotate.conf` file this is equivalent to setting the `rt_stats_alternate_pid` option.

</dd>

<dt>-p | --passes *`num_passes`*</dt>

<dd>

ec_rt_stats2 will keep processing windows of data until either it reaches an incomplete window, or has processed the number of windows specified by this option. The default is `10`, meaning that it will try to consume 10 minutes of data on each run. This should not normally need to be changed, but altering this value can be useful if for some reason stats processing has fallen behind; you might consider running it by hand with a high `--passes` value.

</dd>

<dt>-r | --rejectlog *`/path/to/rejectlog`*</dt>

<dd>

Specify the reject log file to use. The default value is `/var/log/ecelerity/rejectlog.rt`. In the `ec_rotate.conf` file this is equivalent to setting the `rt_stats_rejectlog` option.

</dd>

<dt>-s | --statlog *`/path/to/statlog`*</dt>

<dd>

Specify the statp log file to use. The default value is `/var/log/ecelerity/statp.rt`. In the `ec_rotate.conf` file this is equivalent to setting the `rt_stats_statlog` option.

</dd>

<dt>--subcluster *`subcluster_name`*</dt>

<dd>

This option affects the subcluster name used when inserting rows into the stats tables. It is taken from the `cluster.boot` file and should not need to be explicitly set by the user.

</dd>

<dt>--subscriber *`ec_rt_stats`*</dt>

<dd>

The subscriber to the ec_rt_stats2 service. The default value is `ec_rt_stats`.

</dd>

<dt>-U | --unclass_bounces *`/path/to/unclass_bounces`*</dt>

<dd>

Specify the unclassified bounces log file to use. The default value is `/var/log/ecelerity/unclass_bounces`.

</dd>

<dt>-u | --user</dt>

<dd>

Specify a user. The default value for this option is `ecuser`. In the `ec_rotate.conf` file this is equivalent to setting the `rt_stats_user` option.

</dd>

<dt>-v | --verbose</dt>

<dd>

Output in verbose mode. In the `ec_rotate.conf` file this is equivalent to setting `rt_stats_verbose` = yes.

</dd>

<dt>-W --watchlist_only</dt>

<dd>

**Configuration Change. ** This feature is available starting from Momentum 3.0.13.

Prior to version 3.3, the default behavior is to log bounces for all domains. Use this option to log only for the domains defined in the watchlist data source. For more information see [Section 14.71, “statp – Stats Producer Module”](modules.stats_producer "14.71. statp – Stats Producer Module").

As of version 3.3, ec_rt_stats2 defaults to using this option in order to slow database growth by only storing and rolling up stats for domains on the watchlist. For new installations, the watch list is pre-populated with common domains.

</dd>

<dt>-w *`number`*</dt>

<dd>

Set the time window to be considered at one time. In the `ec_rotate.conf` file this is equivalent to setting the `rt_stats_time_window_size` option. The default value for this option is `60` seconds.

</dd>

</dl>

<a name="idp14065680"></a>
## See Also

[the section called “The `ec_rotate.conf` File”](executable.ec_rotate#ec_rotate.conf "The ec_rotate.conf File")

| [Prev](executable.ec_rotate)  | [Up](exe.commands.details.php) |  [Next](executable.ec_sendmail.php) |
| ec_rotate  | [Table of Contents](index) |  ec_sendmail |
