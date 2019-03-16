| [Prev](log_monitoring)  | Part IV. Logging |  [Next](log_formats) |
## Chapter 34. Rotating Logs ec_rotate
**Table of Contents**

* [34.1\. `ec_rotate.conf` File](log_rotating#conf.ref.ec_rotate.conf)

Momentum provides a utility script **ec_rotate** that you can use to rotate and compress logs that Momentum writes. It is recommended that you run this script daily from your system's crontab (`/etc/cron.d/msys-ecelerity-core`).
To invoke ec_rotate, execute **ec_rotate** as the root user. By default, this command will rotate the files specified in the `ec_rotate.conf` file, compress them using `bzip`, and keep seven days of logs on disk. For details about this script, including options to change its behavior, see [ec_rotate](executable.ec_rotate "ec_rotate"). For the default configuration, see [Section 34.1, “`ec_rotate.conf` File”](log_rotating#conf.ref.ec_rotate.conf "34.1. ec_rotate.conf File").
The following logfiles are **not** rotated by **ec_rotate**:
*   `/var/log/msys-nodejs/*.log`
*   `/var/log/msys-nginx/*.log`
*   `/var/log/msys-rabbitmq/*`
*   `/opt/vertica/log/*.log`
*   `/opt/vertica/log/**/*.log`
*   `/var/db/vertica/msys/*_catalog/vertica.log`
Set up log rotation for these logfiles using a tool of your choice.
## 34.1. `ec_rotate.conf` File
The `ec_rotate.conf` file is the configuration file for the utility script [ec_rotate](executable.ec_rotate "ec_rotate"). You do not need to edit this file unless you wish to change the default values.
A sample `ec_rotate.conf` file is found in the `/opt/msys/ecelerity/etc/sample-configs/` directory. To change the default `ec_rotate.conf` file, make the required changes to the sample file and then move it to the `/opt/msys/ecelerity/etc/` directory.
### Warning
Consult with Message Systems support before you make any changes to `ec_rotate.conf`.
The following is the default `ec_rotate.conf` file:
<a name="conf.ref.ec_rotate.conf.default"></a>
**Example 34.1. ec_rotate.conf**
```
# If enabled=yes, then ec_rotate will perform logfile rotation
# on the set of logfiles listed below.
# If you prefer to disable the default action without modifying
# the crontab entry installed by the package, you should do it here
# by setting enabled=no
#################################
# the options are as follows:
# enabled - yes/no - enables ec_rotate to be run
# logfiles - list of log files to rotate
# retention - the number of old log files to retain
# control_socket - the path to the ecelerity Control_Listener socket
# path_to_bzip - where to find the bzip2 binary on your system
enabled=yes
# The list of logfiles to rotate
logfiles =  /var/log/ecelerity/mainlog.ec \
            /var/log/ecelerity/paniclog.ec \
            /var/log/ecelerity/rejectlog.ec \
            /var/log/ecelerity/bouncelog.ec \
            /var/log/ecelerity/acctlog.ec \
            /var/log/ecelerity/smpplog.ec \
            /var/log/ecelerity/ecconfigd.log \
            /var/log/ecelerity/httplog.ec \
            /var/ecconfigd/apache/access.log \
            /var/ecconfigd/apache/error.log
logdirs = /var/log/ecelerity/adaptive
retention = 7
# vim:ts=2:sw=2:et:ft=conf:
```
The following are the options configured in the `ec_rotate.conf` file:
<dl className="variablelist">
<dt>enabled</dt>
<dd>
Whether log file rotation is enabled
Default value is `yes`.
</dd>
<dt>logfiles</dt>
<dd>
List of logfiles to rotate
</dd>
<dt>logdirs</dt>
<dd>
List of log directories to be searched for files with the suffix `.log` to rotate
</dd>
<dt>retention</dt>
<dd>
Retention period in days
</dd>
</dl>

| [Prev](log_monitoring)  | [Up](p.logs) |  [Next](log_formats) |
| Chapter 33. Log Monitoring  | [Table of Contents](index) |  Chapter 35. Log Formats |
