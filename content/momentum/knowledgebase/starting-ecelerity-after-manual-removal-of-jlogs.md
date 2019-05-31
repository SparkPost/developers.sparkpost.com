# Starting Ecelerity after manual removal of jlogs

**Ecelerity is unable to start after manual removal of Jlogs.**

From time to time customers take it upon themselves to remove unwanted or old log files, jlogs that have not been consumed as usual or that have become corrupt and as a result are not being consumed and are growing in size, unchecked they can potentially fill the disk  partition where they reside.  Removal of logs in itself is no problem provided the "open logs" command is issued from the ec_console afterwards and the data within the logs is not wanted.

If the ecelerity process fails to start normally after the removal, start the process with the debug flag as follows, let it run for about a minute then break out with CTRL+C and check the output for anything obvious.

`# /opt/msys/ecelerity/sbin/run.ecelerity -d`

Extracted debug info from running ecelerity -d,

```
"[Mon 02 Mar 2015 15:41:03] JLOG-1073 error: 20 (JLOG_ERR_META_OPEN) errno: 17 (File exists)
[Mon 02 Mar 2015 15:41:03] cluster logger file error: jlog[jlog:///var/log/ecelerity/bouncelog.rt=>ec_rt_stats] 20
[Mon 02 Mar 2015 15:41:03] Cannot open bouncelog. Check that the configured directory exists and is writable.
[Mon 02 Mar 2015 15:41:03] bounce_logger: Could not open log files
[Mon 02 Mar 2015 15:41:03] Module 'bounce_logger' instance 'bounce_logger_rt' post-init failed. Consult your vendor.
[Mon 02 Mar 2015 15:41:03] ec_cluster: Shutting down all clustering.
[Mon 02 Mar 2015 15:41:03] DBGTLS-00522 shutdown after stack trace.
[Mon 02 Mar 2015 15:41:03] ec_cluster: Shutting down all clustering."
```

As we can see from the above extract, the bouncelog could not be opened, it may not be present or have the correct permissions:

`[Mon 02 Mar 2015 15:41:03] Cannot open bouncelog. Check that the configured directory exists and is writable.`

In order to make sure the bouncelog is present and has the correct permissions, check the contents of /var/log/ecelerity if bouncelog.rt exists remove it and others that could be problematic, they would also appear in the debug output as above.

`# rm -rf bouncelog.rt`

Now, reopen logs via the ec_console:

`# /opt/msys/ecelerity/bin/ec_console`

Now, once inside the console:

```
/tmp/2025> reopen logs 
Executed
Quit out of the console:
 
 /tmp/2025> quit
```
 
Again, check the contents and permissions of /var/log/ecelerity/*.rt

All jlogs permissions should be ecuser:ecuser

Now, restart ecelerity as usual if all is well, it should start up normally.

```
# service ecelerity start
Pulling latest config files from repo
Running startup includes (if any)
Starting Ecelerity: 2469
```
Now the process is running as usual.