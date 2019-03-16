| [Prev](executable.credmgr)  | 11.2. Executable Commands |  [Next](executable.ec_adtool.php) |

<a name="executable.ec_admigrate"></a>
## Name

ec_admigrate — migrate from the SQLite adaptive database to the Riak database

## Synopsis

`/opt/msys/ecelerity/bin/ec_admigrate` [ -d | --database { *`/path/to/db`* | *`riak_url`* } ]

`/opt/msys/ecelerity/bin/ec_admigrate` [ -n | --nodename *`node_name`* ]

`/opt/msys/ecelerity/bin/ec_admigrate` [ -o | --override ]

`/opt/msys/ecelerity/bin/ec_admigrate` [ -u | --url *`riak_url`* ]

`/opt/msys/ecelerity/bin/ec_admigrate` [ -v | --verbose ]

<a name="idp13178864"></a>
## Description

**Configuration Change. ** This feature is available as of version 3.3.1.

### Note

This command is applicable to Momentum installations that use the adaptive module and is available as of version 3.3\. It is used to migrate the adaptive module from earlier versions of Momentum to Momentum 3.3.

As of version 3.3, Momentum no longer uses a SQLite database as the repository for adaptive delivery parameters. The **ec_admigrate** command is used to migrate to a Riak data store. Upon execution, a local Riak record replaces the SQLite data store.

When migrating to Momentum 3.3 from earlier versions, you must invoke this command on all MTA nodes immediately after installation. Before running this command, stop the ecelerity process by issuing the command **`/etc/init.d/ecelerity stop`**      . However, the riak process must be running. It is controlled by the `/etc/init.d/msys-riak` script. For more information see [Section 4.4, “Riak”](operations.riak "4.4. Riak").

The options used with this command are as follows:

<dl className="variablelist">

<dt>

-d | --database { *`/path/to/db`* | *`riak_url`* }

</dt>

<dd>

This option defines the full path to the SQLite database. or to an existing Riak URL. If you are migrating from Momentum 3.2.x to Momentum 3.3.x use the path to the database. If this option is not specified, the it defaults to `/var/log/ecelerity/adaptive.db`.

Use a Riak URL instead of a SQLite database in order to migrate from Momentum 3.3.0 to Momentum 3.3.x. For example:

`shell> /opt/msys/ecelerity/bin/ec_admigrate –d http://127.0.0.1:8098 –n mta1`

The node name is case sensitive and must be the same as defined in `mbusd.conf` or the output of command **`hostname`** in the case of a standalone installation.

As of version 3.4, the `mbusd.conf` file is no longer used. To determine the node name look at the `msgc_server.conf` file. For more information see [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules").

</dd>

<dt>

-n | -- nodename *`node_name`*

</dt>

<dd>

Specify the node name as defined in `mbusd.conf`.

</dd>

<dt>

-o | --override

</dt>

<dd>

Whether to override the existing record in the Riak data store with the value from the SQLite database. The default is not to override.

This command is only applicable if Momentum 3.3 has been run at least once thereby creating the Riak "buckets".

</dd>

<dt>

-u | --url *`riak_url`*

</dt>

<dd>

The url for a Riak node. The default for this option is `127.0.0.1:8098`.

</dd>

<dt>

-v | --verbose

</dt>

<dd>

Display more information than usual.

</dd>

</dl>

<a name="idp13205216"></a>
## See Also

[adaptivedb](executable.adaptivedb "adaptivedb"), [Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive.php "14.2. adaptive – Adaptive Delivery"), [Section 4.4, “Riak”](operations.riak.php "4.4. Riak"), [ec_adtool](executable.ec_adtool.php "ec_adtool")

| [Prev](executable.credmgr)  | [Up](exe.commands.details.php) |  [Next](executable.ec_adtool.php) |
| credmgr  | [Table of Contents](index) |  ec_adtool |
