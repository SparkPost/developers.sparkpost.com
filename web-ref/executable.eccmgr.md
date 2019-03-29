|     |     |     |
| --- | --- | --- |
| [Prev](executable.eccfg)  | 11.2. Executable Commands |  [Next](executable.eccmgr_ctl.php) |

<a name="executable.eccmgr"></a>
## Name

eccmgr — Momentum cluster manager

## Synopsis

`/opt/msys/ecelerity/sbin/eccmgr` [ -c *`configfile`* ] [ -g *`group`* ] [ -s *`daemon`* ] [ -n ] [ -v ] [ -e ] [ -D ] [ -d ] [ -V ] [ -x ]

<a name="idp14432512"></a>
## Description

**eccmgr** is the Momentum Cluster Manager. You should use **eccmgr_ctl** to start, stop or restart this process.

### Note

To start eccmgr as a service on Linux systems or on Solaris, issue the command **`/etc/init.d/eccmgr start`**       .

<dl className="variablelist">

<dt>-c configfile</dt>

<dd>

Use an alternate config file.

</dd>

<dt>-g *`group`*</dt>

<dd>

Specify the cluster group.

</dd>

<dt>-s *`daemon`*</dt>

<dd>

Specify the mbus daemon. This option has been removed as of version 3.4.

**Configuration Change. ** As of version 3.4, cluster communication is handled by the msgc modules rather than by mbus. For more information see [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules").

</dd>

<dt>-n</dt>

<dd>

Skip locking (flock) files (**NOT RECOMMENDED** ).

</dd>

<dt>-v</dt>

<dd>

Verbose mode.

This option can be used up to four times for increasing levels of verbosity.

</dd>

<dt>-e</dt>

<dd>

Set alternate extensions directory.

</dd>

<dt>-D</dt>

<dd>

Do not daemonize (debug; deprecated, use -d instead).

</dd>

<dt>-d</dt>

<dd>

Run in the foreground, leave stdout, stderr open.

</dd>

<dt>-V</dt>

<dd>

Show version information.

</dd>

<dt>-x</dt>

<dd>

Log mbus errors.

With the introduction of MSGC in version 3.4, this option was removed.

</dd>

</dl>

<a name="idp14459200"></a>
## See Also

[eccmgr_ctl](executable.eccmgr_ctl "eccmgr_ctl")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.eccfg)  | [Up](exe.commands.details.php) |  [Next](executable.eccmgr_ctl.php) |
| eccfg  | [Table of Contents](index) |  eccmgr_ctl |
