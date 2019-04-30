|     |     |     |
| --- | --- | --- |
| [Prev](executable.lu_pull)  | 11.2. Executable Commands |  [Next](executable.mbusd.php) |

<a name="executable.mbuscfg"></a>
## Name

mbuscfg — cluster messaging bus configuration tool

## Synopsis

`/opt/msys/ecelerity/bin/mbuscfg` [ -g ] [ -r *`revision`* ] [ -c *`eccluster.conf`* ] [ -n *`nodename`* ] [ *`file`* ]

<a name="idp14731200"></a>
## Description

**mbuscfg** is a wrapper around Subversion for managing the mbusd configuration.

**Configuration Change. ** As of version 3.4, cluster communication is handled by the msgc modules rather than by mbus. For more information see [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules").

Available options:

<dl className="variablelist">

<dt>-h</dt>

<dd>

Display usage information.

</dd>

<dt>-s</dt>

<dd>

Check in a configuration file.

</dd>

<dt>-g</dt>

<dd>

Check out a configuration file.

</dd>

<dt>-c `file`</dt>

<dd>

Specify path to Momentum Cluster Manager configuration file. Defaults to /opt/ecelerity/etc/eccluster.conf

</dd>

<dt>-r `revision`</dt>

<dd>

Specify the revision number for check out.

</dd>

<dt>-n `nodename`</dt>

<dd>

Specify a node. The default value is `default`. The configuration file of the specified node will be checked in or out. If there is no configuration file at the specified node to check out, nodename will take the default value.

</dd>

<dt>file</dt>

<dd>

Specify the file to check in or the file to save the check out. If no file name is specified to save the check out, the output will be directed to `STDOUT`.

Once the mbus.conf file has been checked in to the repository, the copy located at `/opt/ecelerity/etc/mbus.conf` on the cluster manager will be regularly overwritten by the message bus monitoring process. If you need to edit the `mbus.conf` file, copy it to `/var/tmp/mbus.conf`, edit the copy and then check it in using the command shown above, substituting `/var/tmp/mbus.conf` for the regular path.

</dd>

</dl>

<a name="idp14753232"></a>
## See Also

[mbusd](executable.mbusd "mbusd"), [mbus.conf](mbus.conf.php "mbus.conf")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.lu_pull)  | [Up](exe.commands.details.php) |  [Next](executable.mbusd.php) |
| lu_pull  | [Table of Contents](index) |  mbusd |
