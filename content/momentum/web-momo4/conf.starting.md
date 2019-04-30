|     |     |     |
| --- | --- | --- |
| [Prev](p.operations)  | Part V. Using the System Console |  [Next](operations) |
## Chapter 36. Starting Momentum (ecelerity)
**Table of Contents**

* [36.1\. Startup Scripts](conf.starting#startup.scripts)

<a class="indexterm" name="idp3781216"></a>
**ecelerity** is the main server component of the Momentum Application Server. On start up, the script **/etc/init.d/ecelerity start**       starts Momentum. For details about the available options, see [ecelerity](executable.ecelerity "ecelerity").
### Note
To run this script, you must have root privileges.
Use **ec_ctl** to start, stop, or restart this process. For details about this command, see [ec_ctl](executable.ec_ctl "ec_ctl").
## 36.1. Startup Scripts
It can be useful to execute specific scripts on startup or shutdown. For example, if you have configured the spool directory as a separate filesystem, you might want to make sure that filesystem is mounted before starting Momentum. If Momentum is started up using [ec_ctl](executable.ec_ctl "ec_ctl"), startup scripts in the `rc.includes` directory will be executed.
The `rc.includes` directory under the `/opt/msys/ecelerity/bin` directory allows third party module providers and local administrators to add startup and shutdown procedures to the **ec_ctl** command. For example, use this directory for scripts that initiate database recovery, set environment variables, or check for necessary mount points.
Start scripts must be named start.*`purpose`* and stop scripts stop.*`purpose`*. **ec_ctl** will use `sh .` to include each script named in this format.
The following example illustrates how to check for the spool filesystem. Save it as `/opt/msys/ecelerity/bin/rc.includes/start.checkmount`.
```
SPOOL_FS=/var/spool/ecelerity
/sbin/mount | /usr/bin/grep -q $SPOOL_FS
if [ $? != 0 ]; then
  echo "Spool filesystem not mounted, aborting."
  exit 1
fi
```

|     |     |     |
| --- | --- | --- |
| [Prev](p.operations)  | [Up](p.operations) |  [Next](operations) |
| Part V. Using the System Console  | [Table of Contents](index) |  Chapter 37. Using the System Console (**ec_console**) |
