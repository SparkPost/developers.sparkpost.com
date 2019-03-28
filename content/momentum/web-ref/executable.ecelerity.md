|     |     |     |
| --- | --- | --- |
| [Prev](executable.ecconfigd_ctl)  | 11.2. Executable Commands |  [Next](executable.jlog_change_endian.php) |

<a name="executable.ecelerity"></a>
## Name

ecelerity — the Momentum Application Server process

## Synopsis

`/opt/msys/ecelerity/sbin/ecelerity` [ -c *`configfile`* ] [ -d ] [ -h ] [ -n *`service`* ] [ -s ]

<a name="idp14555744"></a>
## Description

**/opt/msys/ecelerity/sbin/ecelerity** is the main server component of the Momentum Application Server.

### Note

As of version 3.1, for the Momentum sending bundle only, the **ecelerity** command was replaced by **ecelerity_send**. You can continue to use the **ecelerity** command as it is a symlink to **ecelerity_send**.

The recommended method for starting the ecelerity process is to use **/opt/msys/ecelerity/bin/ec_ctl**. This ensures that environment variables are set and that startup scripts are run.

While the recommended method for starting Momentum is to use **/opt/msys/ecelerity/bin/ec_ctl**, you may also launch Momentum from the command line.

<dl className="variablelist">

<dt>-h</dt>

<dd>

display a help message, showing all command line options.

</dd>

<dt>-d</dt>

<dd>

run in the foreground, leave stdout, stderr open.

### Note

The 3.x config system has a search path algorithm, and the first element in the path it searches is ‘`.`.’. This means that if you run ecelerity in the foreground, you may get different results than if you run it in the background (because when running in the background, the start scripts set the working directory for the process to ‘`/`’).

To make sure you're chasing down the right error, make sure you always do a **`cd /`**    before running ecelerity in the foreground. Doing so makes the environment the same as when running in the background, and consequently the errors will be the same.

In a cluster configuration, the ecelerity process runs on the MTA nodes only. For this reason you should not invoke his command on the manager.

</dd>

<dt>-n *`service`*</dt>

<dd>

skip service offering. Service can be 'esmtp', 'ecstream', or 'queue'.

</dd>

<dt>-c *`configfile`*</dt>

<dd>

use an alternate config file.

</dd>

</dl>

<a name="idp14575792"></a>
## See Also

[ec_ctl](executable.ec_ctl "ec_ctl")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.ecconfigd_ctl)  | [Up](exe.commands.details.php) |  [Next](executable.jlog_change_endian.php) |
| ecconfigd_ctl  | [Table of Contents](index) |  jlog_change_endian |
