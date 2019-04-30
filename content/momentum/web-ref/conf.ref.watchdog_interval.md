|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.user)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.xclient.php) |

<a name="conf.ref.watchdog_interval"></a>
## Name

watchdog_interval — if Momentum is unresponsive for this length of time, it will be restarted

## Synopsis

`Watchdog_Interval = 60`

<a name="idp12446048"></a>
## Description

Momentum starts as the child process of a parent watchdog process. The watchdog attempts to restart Momentum if the MTA has been unresponsive for more than the `watchdog_interval` number of seconds. The default value for this option is `60`. When the watchdog restarts the MTA, it generates a trace file. The watchdog can also detect when the MTA has exited anomalously. In this case it also generates a trace file. Trace files are found in the `/var/log/ecelerity/traces` directory and bear the process id number with the extension `trc`, `24536.trc`, for example.

**Configuration Change. ** This option is deprecated as of version 3.5\. As a replacement add the `GIMLI_WATCHDOG_INTERVAL`, `GIMLI_WATCHDOG_START_INTERVAL` and/or `GIMLI_WATCHDOG_STOP_INTERVAL` variables to the environment file. For more information about this file and these variables see [Section 2.1.5, “Environment Variables and Startup Scripts”](conf.ecelerity.conf#conf.environment_variables "2.1.5. Environment Variables and Startup Scripts").

<a name="idp12454576"></a>
## Scope

watchdog_interval is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.user)  | [Up](conf.ref.files.php) |  [Next](conf.ref.xclient.php) |
| user  | [Table of Contents](index) |  xclient |
