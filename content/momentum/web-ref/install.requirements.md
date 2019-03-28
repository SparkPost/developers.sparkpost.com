|     |     |     |
| --- | --- | --- |
| [Prev](install)  | Chapter 1. Installation |  [Next](install.ports.php) |

## 1.1. System Requirements

During installation the following roles are available:

*   `database` – data store (max 1 per deployment, required for all deployments)

*   `manager` – cluster service manager for a cluster of MTAs

*   `mta` – for sending/receiving email

*   `singlenode` – shortcut for the mta, database and web roles

*   `web` – browser driven control panel

When running the installer you will be asked a series of questions that vary depending upon the roles chosen. If you are installing the database on a separate machine, you *must* install this role first. Additionally, if you are installing a cluster configuration, the manager must be installed before the nodes.

The web console is not mandatory for a stand-alone installation, but a database **is** required for correct operation of the MTA. The 3.0 server uses a robust version control system that requires a database for authentication. There are several server processes that assume that this version control system is installed and configured correctly.

**Configuration Change. ** Prior to version 3.0.15, the web console role and the database role **must** be installed on the same machine.

We recommend running Momentum on dedicated hardware to ensure optimal performance. The exact hardware specifications depend on the volume of mail that you intend to process and the role that each specific machine is performing. But, in general terms, you should use nodes having 64 bit, x86-based architecture.

### Note

Use Linux with kernel 2.6.18-194 or later. There is an issue with Broadcom NICs when used with older kernels in Red Hat 4 and Red Hat 5\. If you are running kernel 2.6.18-194 or later you will not have this issue.

The Momentum web UI supports the following browsers:

*   Firefox version 3.6 and higher on PC and Mac

*   Internet Explorer versions 8 and 9

### 1.1.1. Riak Hardware Requirements

As of version 3.3, Momentum incorporates Riak, a distributed key-value data storage technology with excellent scalability properties. It replaces the SQLite data store used with the adaptive module. It is also used by Mobile Momentum for resubmission of messages and by the reporting capabilities introduced in version 3.3\. Use of this storage technology puts increased demands on hardware. This section details the hardware requirements.

Estimates based on the following equations are conservative; expect real life usage to be less than the numbers these equations yield. This is especially true for Adaptive Delivery, where real usage will likely be less than 25% of the RAM and disk equations and may even be less than 10%. For Adaptive Delivery this lower than maximum usage is because usually every binding is not used for every domain, although the software does limit this.

**Maximum RAM Usage**

*   Adaptive Delivery: 300 bytes * number of bindings * number of domains

*   Custom Reports: 70 bytes * (number of reports definitions + number of report instances)

*   SMPP: 80 bytes * number of messages over a 14 day period

*   XMPP: 120 bytes * (number of clients * average roster size)

**Maximum Disk Usage**

*   Setting `noatime` will increase disk IO performance

*   Adaptive Delivery: ((number of bindings * number of domains * 151 bytes) + 2GB) * (64 / number of Momentum nodes)

*   Custom Reports: (number of report instances * average report size in bytes * 2.362) + 2GB) * (64 / number of Momentum nodes)

*   SMPP: (number of messages per 14 days * average message size in bytes * 2.362 ) + 2GB) * (64 / number of Momentum nodes)

*   XMPP: (number of clients * average roster size * 3800 bytes) + 2GB) * (64 / number Momentum nodes)

**1.1.1.1. Space Requirements for Riak Log Files**

The space requirements for the various log files are as follows.

**The `erlang.log.x` Files**

These files are written by the [run_erl](http://www.erlang.org/doc/man/run_erl.html) process which Momentum uses to start the Erlang VM. The size and number of these logs can be set in `/opt/msys/3rdParty/riak/etc/vm.args` via the `RUN_ERL_LOG_MAXSIZE` and `RUN_ERL_LOG_GENERATIONS` environment variables. The defaults for these variables are, respectively, 100KB and 5.

**The run_erl.log File**

This file is written at startup. Its size is generally negligible.

**The sasl Logs**

These files are located in the `logs/sasl` directory and are written to by the [error_logging](http://www.erlang.org/doc/man/error_logger.html) module internal to Erlang Open Telecom Platform (OTP). These files are configured via the sasl section of the `/opt/msys/3rdParty/riak/etc/app.config` file and there are a number of [optional settings](http://erlang.org/doc/man/sasl_app.html) that can be changed. The settings which govern size and number of logs are `error_logger_mf_maxbytes` and `error_logger_mf_maxfiles` which respectively default to `10MB` and `5`.

**The `sasl-error.log` File**

This file is currently unbounded and cannot be limited. It is populated by the [full error reports](http://www.erlang.org/doc/man/error_logger.html#error_report-1) resulting from process crashes written to the sasl logs. These [reports](http://www.erlang.org/doc/apps/sasl/error_logging.html#id60880) are restricted in size by the Riak_err module and each entry's maximum size can be configured in the Riak_err section of `/opt/msys/3rdParty/riak/etc/app.config`. By default, these reports are limited to 64KB but the total number of reports written is not bounded. A suggested maximum size is `500MB`.

The `sasl_error.log` _is_ recreated every time Riak is stopped and started. You can prevent it from being created at all by changing the SASL config section to the following:

```
%% SASL config
{sasl, [
{sasl_error_logger, false}
]},
```
**The erlang_crash.dump File**

The [erlang_crash.dump](http://erlang.org/doc/apps/erts/crash_dump.html) is written whenever the Erlang VM is killed either because of a critical application error or by a system kill such as an out of memory killer. The dump is written to the log_directory which is set when [run_erl](http://www.erlang.org/doc/man/run_erl.html) is called. The dump file contains all information for each process running in the Erlang VM at the time of the crash as well as all allocator information. The dumps are slightly larger than the size in memory of the Riak process at the time of the crash. If Riak is using a lot of memory this can be very large. If the log_dir does not have enough free space to store the entire dump file, it will be truncated.

To summarize, the erlang.log's size and number can be configured via the environment variables in `/opt/msys/3rdParty/riak/etc/vm.args`. The sasl logs are configured from the sasl section of the `/opt/msys/3rdParty/riak/etc/app.config` file. The `sasl-error.log` is populated by full error reports limited in size to 64K but the log file itself is not bounded. The `erlang_crash.dump` file is slightly larger than the resident memory size of the Riak process at crash time. By default the max sizes for the various logs are as follows:

*   erlang.log.x = 100KB * 5files = 500KB max

*   run_erl.log = <1KB

*   sasl logs = 10MB * 5 files = 50MB max

*   sasl-error.log is unbounded but should be less than 500MB

*   erlang_crash.dump = slightly larger than Riak memory usage at time of crash

Total max size = 550.5MB for the riak logs with at least an addition of the resident memory size of the Riak process to hold an erlang_crash.dump

|     |     |     |
| --- | --- | --- |
| [Prev](install)  | [Up](install.php) |  [Next](install.ports.php) |
| Chapter 1. Installation  | [Table of Contents](index) |  1.2. Ports Used by Momentum |
