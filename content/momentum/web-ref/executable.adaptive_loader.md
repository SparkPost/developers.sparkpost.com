|     |     |     |
| --- | --- | --- |
| [Prev](executable.ad_summary)  | 11.2. Executable Commands |  [Next](executable.adaptivedb.php) |

<a name="executable.adaptive_loader"></a>
## Name

adaptive_loader — the script that loads the adaptive data used by the web UI

## Synopsis

`/opt/msys/ecelerity/bin/adaptive_loader` [ --cache-db *`cache_db_filename`* ]

`/opt/msys/ecelerity/bin/adaptive_loader` [ --driver *`string`* ]

`/opt/msys/ecelerity/bin/adaptive_loader` [ --driver-pass *`driver_password`* ]

`/opt/msys/ecelerity/bin/adaptive_loader` [ --driver-user *`username`* ]

`/opt/msys/ecelerity/bin/adaptive_loader` [ -h | --help ]

`/opt/msys/ecelerity/bin/adaptive_loader` [ -l | --log *`log_file`* ]

`/opt/msys/ecelerity/bin/adaptive_loader` [ --man ]

`/opt/msys/ecelerity/bin/adaptive_loader` [ --no-set-user ]

`/opt/msys/ecelerity/bin/adaptive_loader` [ -P | --pidfile *`pidfile`* ]

`/opt/msys/ecelerity/bin/adaptive_loader` [ --prune-now ]

`/opt/msys/ecelerity/bin/adaptive_loader` [ --retention ]

`/opt/msys/ecelerity/bin/adaptive_loader` [ -u | --user *`user_name`* ]

`/opt/msys/ecelerity/bin/adaptive_loader` [ -v | --verbose ]

<a name="idp12972640"></a>
## Description

This script loads the adaptive data used to create the adaptive reports in the web UI. Typically you should not need to invoke this script directly or change the default options. The default values for all options are determined by [ec_rotate](executable.ec_rotate "ec_rotate").

### Note

If you do need to change the default values for options, consult with support.

<dl className="variablelist">

<dt>--cache-db *`cache_db_filename`*</dt>

<dd>

Specify the location of the SQLite cache database to use. This is used to improve performance by caching frequently-used normalized data objects from PostgreSQL on the local server.

In the `ec_rotate.conf` file this is equivalent to setting `adaptive_loader_cache_db`.

</dd>

<dt>--driver *`string`*</dt>

<dd>

Specify an alternate driver connection string. The default value for this option is `dbi:Pg:dbname=ecelerity;connect_timeout=300`.

In the `ec_rotate.conf` file this is equivalent to setting the `adaptive_loader_driver` option.

</dd>

<dt>--driver-pass *`password`*</dt>

<dd>

Specify the driver user password. There is no default value for this option.

</dd>

<dt>--driver-user *`username`*</dt>

<dd>

Specify the databse driver user.

The default value for this option is `ecuser`.

</dd>

<dt>-h | --help</dt>

<dd>

Display the help message and exit.

</dd>

<dt>-l | --log</dt>

<dd>

Specify the jlog file to use. The default value for this option is `/var/log/ecelerity/adaptive.rt`.

In the `ec_rotate.conf` file this is equivalent to setting the `adaptive_loader_log` option.

</dd>

<dt>-m | --man</dt>

<dd>

Display the man page and exit.

</dd>

<dt>--no-set-user</dt>

<dd>

Do not set the user ID. The default is to setuid to `ecuser`.

</dd>

<dt>-P | --pidfile *`pidfile`*</dt>

<dd>

Specify the process ID file. The default value for this option is `/var/run/ecelerity`.

</dd>

<dt>--prune-now</dt>

<dd>

Do an immediate prune of historical data in the database. Under default operation, this only happens on the hour, in order to not put excess load on the database.

</dd>

<dt>--retention</dt>

<dd>

Specify the age of historical data that should be retained when doing a prune of old data from the database. If set to `0`, no data will be pruned. Unless this is used in conjunction with --prune-now, it will only have an effect when the script is run on the hour.

</dd>

<dt>-u | --user *`user_name`*</dt>

<dd>

Define the user that the script will run as. The default value for this option is `ecuser`.

In the `ec_rotate.conf` file this is equivalent to setting the `adaptive_loader_user` option.

</dd>

<dt>-v | --verbose</dt>

<dd>

Output in verbose mode. In the `ec_rotate.conf` file this is equivalent to setting `adaptive_loader_verbose = yes`.

</dd>

</dl>

<a name="idp13011152"></a>
## See Also

[ec_rotate](executable.ec_rotate "ec_rotate"), [Section 3.6.10, “Adaptive Reports”](web3.reports.php#web3.reports.adaptive "3.6.10. Adaptive Reports"), [Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive.php "14.2. adaptive – Adaptive Delivery")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.ad_summary)  | [Up](exe.commands.details.php) |  [Next](executable.adaptivedb.php) |
| ad_summary  | [Table of Contents](index) |  adaptivedb |
