| [Prev](executable.mbusd)  | 11.2. Executable Commands |  [Next](executable.migrate_regex_binding2.php) |

<a name="executable.mbusd_monitor"></a>
## Name

mbusd_monitor — Momentum cluster messaging bus monitor

## Synopsis

`/opt/msys/ecelerity/bin/mbusd_monitor` [ -b *`cluster.boot file`*       ]

`/opt/msys/ecelerity/bin/mbusd_monitor` [ -c *`mbus config file`*              ]

`/opt/msys/ecelerity/bin/mbusd_monitor` [ -d ]

`/opt/msys/ecelerity/bin/mbusd_monitor` [ -e *`ecelerity config file`*              ]

`/opt/msys/ecelerity/bin/mbusd_monitor` [ -h ]

`/opt/msys/ecelerity/bin/mbusd_monitor` [ -l *`log file`*       ]

`/opt/msys/ecelerity/bin/mbusd_monitor` [ --loglevel *`num`* ]

`/opt/msys/ecelerity/bin/mbusd_monitor` [ -m *`mbus binary`*         ]

`/opt/msys/ecelerity/bin/mbusd_monitor` [ -n *`nodename`* ]

`/opt/msys/ecelerity/bin/mbusd_monitor` [ -p *`pid file`*       ]

`/opt/msys/ecelerity/bin/mbusd_monitor` [ -q ]

`/opt/msys/ecelerity/bin/mbusd_monitor` { start | stop | restart }

<a name="idp14806112"></a>
## Description

**mbusd_monitor** is responsible for launching and stopping **mbusd**.

**Configuration Change. ** As of version 3.4, cluster communication is handled by the msgc modules rather than by mbus. For more information see [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules").

Available options:

<dl className="variablelist">

<dt>-b `cluster.boot`</dt>

<dd>

Path to an alternate `cluster.boot` file.

</dd>

<dt>-c `file`</dt>

<dd>

Path to mbus configuration file. If unspecified, **mbusd_monitor** will search for mbus.conf in the following locations: `/opt/msys/ecelerity/etc`, `/opt/msys/ecelerity/etc/conf/global`, `/opt/msys/ecelerity/etc/conf/NODENAME`, and `/opt/msys/ecelerity/etc/conf/default` where NODENAME is the hostname of the local machine.

</dd>

<dt>-d</dt>

<dd>

Do not daemonize.

</dd>

<dt>-e `file`</dt>

<dd>

Path to ecelerity configuration file. Defaults to `/opt/ecelerity/etc/ecelerity.conf`.

</dd>

<dt>-h</dt>

<dd>

Display usage information.

</dd>

<dt>-l `file`</dt>

<dd>

Logfile to use. Defaults to /var/log/ecelerity/mbusd.log

</dd>

<dt>--loglevel `num`</dt>

<dd>

Log verbosity level. Valid values are 0-4, with 4 being the most verbose. Default is 1.

</dd>

<dt>-m `file`</dt>

<dd>

Path to mbus executable. Defaults to /opt/msys/ecelerity/3rdParty/sbin/spread

</dd>

<dt>-n `name`</dt>

<dd>

Nodename to use instead of the value of the **hostname** command.

</dd>

<dt>-p `pid file`</dt>

<dd>

File to store the process ID in instead of `/var/run/mbusd_monitor.pid`.

</dd>

<dt>-q</dt>

<dd>

**Configuration Change. ** As of version 3.0.13, the `-q` option is no longer used. To stop, start or restart the messaging bus monitor issue the command **`mbusd_monitor { stop | restart | start}`**                           .

Enables quiet mode which disables logging to the console.

</dd>

</dl>

<a name="idp14841856"></a>
## See Also

[mbusd](executable.mbusd "mbusd"), [mbus.conf](mbus.conf.php "mbus.conf")

| [Prev](executable.mbusd)  | [Up](exe.commands.details.php) |  [Next](executable.migrate_regex_binding2.php) |
| mbusd  | [Table of Contents](index) |  migrate_regex_binding2 |
