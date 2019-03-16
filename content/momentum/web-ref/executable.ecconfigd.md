| [Prev](executable.eccmgr_ctl)  | 11.2. Executable Commands |  [Next](executable.ecconfigd_ctl.php) |

<a name="executable.ecconfigd"></a>
## Name

ecconfigd — the Momentum Configuration Server

## Synopsis

`/opt/msys/ecelerity/sbin/ecconfigd` [ --log-level {*`level`*} ] --debug

<a name="idp14490400"></a>
## Description

**ecconfigd** is the Momentum configuration management server. Configuration files are maintained in a version control repository and exported via the ecconfigd service. In a clustered configuration, ecconfigd automatically replicates your configuration repositories to all participating cluster nodes. The user for this service is `ecuser`. The associated password is created during installation.

The repository resides in the `/var/ecconfigd/repo` directory on the cluster manager. Nodes pull their configuration from this repository and store their working copy in the `/opt/msys/ecelerity/etc/conf` directory.

**Configuration Change. ** As of version 3.2, ecconfigd always uses SSL. The self-signed certificate created during installation is valid for a year. To renew this certificate see [create_ssl_cert](executable.create_ssl_cert "create_ssl_cert").

The service consists of two pieces, ecconfigd itself as well as an HTTP server that listens on port 2027 and serves requests for the actual configuration files.

When **ecconfigd** is started using the script in the `/etc/init.d` directory, if the service doesn't start immediately, it will try for up to a minute to connect. This occurs only if there is a `cluster.boot` file in the `/opt/msys/ecelerity/etc` directory.

### Note

It is advisable to restart **ecconfigd** after making extensive changes to `mbus.conf` or `msgc_server.conf`, such as adding multiple nodes. Use the command **`/etc/init.d/ecconfigd restart`**         .

**Configuration Change. ** As of version 3.4, cluster communication is handled by the msgc modules rather than by mbus. For more information see [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules").

No additional arguments are required for normal operation. However, the `EXTRA_ARGS` environment variable may be used to control how ecconfigd is started. If this variable is set, its contents will be passed as additional arguments to ecconfigd. The following arguments may be specified as part of EXTRA_ARGS:

<dl className="variablelist">

<dt>--debug</dt>

<dd>

Run in the foreground and set the log level to 7.

</dd>

<dt>--log-level *`level`*</dt>

<dd>

Set the log file verbosity. The log level is a number from 0 to 7, where higher numbers result in more information. The default log level is 4, which logs warnings and errors.

</dd>

</dl>

<a name="idp14512496"></a>
## See Also

[ecconfigd_ctl](executable.ecconfigd_ctl "ecconfigd_ctl"), [eccfg](executable.eccfg.php "eccfg")

| [Prev](executable.eccmgr_ctl)  | [Up](exe.commands.details.php) |  [Next](executable.ecconfigd_ctl.php) |
| eccmgr_ctl  | [Table of Contents](index) |  ecconfigd_ctl |
