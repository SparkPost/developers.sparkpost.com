|     |     |     |
| --- | --- | --- |
| [Prev](executable.ec_console)  | 11.2. Executable Commands |  [Next](executable.ec_dkim_ctl.php) |

<a name="executable.ec_ctl"></a>
## Name

ec_ctl — start, stop or restart the Momentum Application Server

## Synopsis

`/opt/msys/ecelerity/bin/ec_ctl` [ start | stop | restart ]

<a name="idp13318720"></a>
## Description

**ec_ctl** is a shell script that you can use to start, stop or restart the ecelerity process. Aside from launching this process, **ec_ctl** performs various pre-launch actions, such as fetching a new license if the current machine has none, checking out the latest version of the configuration file from the cluster configuration store and so on. As such, it is recommended that you use **ec_ctl** to start and stop ecelerity instead of manually launching **ecelerity** yourself.

### Note

In a cluster configuration, the ecelerity process runs on the MTA nodes only. For this reason you should not invoke this command on the manager.

Additionally, on startup **ec_ctrl** sets any environment variables found in the `environment` file and executes any startup scripts found in the `/opt/msys/ecelerity/bin/rc.includes` directory. For more information see [Section 2.1.5, “Environment Variables and Startup Scripts”](conf.ecelerity.conf#conf.environment_variables "2.1.5. Environment Variables and Startup Scripts") and [Section 2.10, “Starting Momentum”](conf.starting.php "2.10. Starting Momentum").

The `TRY` environment variable is one of the variables that may be set in the `environment` file. This variable controls the number of times to loop waiting for Momentum to start up. In some configurations it can take a long time for Momentum to start and, if the default `TRY` value is too small, the **ec_ctl** script may decide that startup has failed. The default value for this variable is `10` but, for example, for hosts that use large RBLs, this value may need to be adjusted upwards. Increasing TRY to a higher value will increase the amount of time that **ec_ctl** will wait for Momentum to start before deciding that it is broken. With `TRY` set to a default value of `‘10’`, the amount of time that **ec_ctl** waits is 55 seconds (10+9+8+7+6+5+4+3+2+1).

The `CONFFILE` and the `CONTROL` variables also have a bearing on **ec_ctl**. For a discussion of these variables see [Q: A.2](faq#faq.running.multiple.instances "A.2.").

<a name="idp13334416"></a>
## See Also

[ecelerity](executable.ecelerity "ecelerity")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.ec_console)  | [Up](exe.commands.details.php) |  [Next](executable.ec_dkim_ctl.php) |
| ec_console  | [Table of Contents](index) |  ec_dkim_ctl |
