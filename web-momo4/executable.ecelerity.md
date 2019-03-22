| [Prev](executable.ecconfigd_ctl)  | Chapter 74. Executable Commands Reference |  [Next](executable.jlog_change_endian) |

<a name="executable.ecelerity"></a>
## Name

ecelerity — Momentum Application Server

## Synopsis

`/opt/msys/ecelerity/sbin/ecelerity` [ -c *`configfile`* ] [ -d ] [ -h ] [ -n *`service`* ] [ -s ]

<a name="idp11899792"></a>
## Description

**ecelerity** is the main server component of the Momentum Application Server. On start up, the script **/etc/init.d/ecelerity start**       starts Momentum.

Use **ec_ctl** to start, stop, or restart this process. This ensures that environment variables are set and that startup scripts are run.

The `ecelerity.conf` file is the master configuration file for **ecelerity**.

While the recommended method for starting Momentum is to use **ec_ctl**, you may also launch Momentum from the command line. The following options are available:

<dl className="variablelist">

<dt>-h</dt>

<dd>

Display a help message, showing all command line options.

</dd>

<dt>-d</dt>

<dd>

Run in the foreground, leave stdout, stderr open.

### Note

The configuration system has a search path algorithm, and the first element in the path it searches is ‘`.`.’. This means that if you run ecelerity in the foreground, you may get different results than if you run it in the background (because when running in the background, the start scripts set the working directory for the process to ‘`/`’).

To make sure you're chasing down the right error, make sure you always do a **`cd /`**    before running ecelerity in the foreground. Doing so makes the environment the same as when running in the background, and consequently the errors will be the same.

In a cluster configuration, do not invoke this command from within the **eccmgr** service.

</dd>

<dt>-n *`service`*</dt>

<dd>

Skip service offering. Service can be 'esmtp', 'ecstream', or 'queue'.

</dd>

<dt>-c *`configfile`*</dt>

<dd>

Use an alternate config file.

</dd>

</dl>

<a name="idp13199456"></a>
## See Also

[ec_ctl](executable.ec_ctl "ec_ctl"), [Section 15.6, “`ecelerity.conf` File”](conf.ref.ecelerity.conf "15.6. ecelerity.conf File"), [Chapter 36, *Starting Momentum (**ecelerity**)*](conf.starting "Chapter 36. Starting Momentum (ecelerity)")

| [Prev](executable.ecconfigd_ctl)  | [Up](exec.cmds.ref) |  [Next](executable.jlog_change_endian) |
| ecconfigd_ctl  | [Table of Contents](index) |  jlog_change_endian |

