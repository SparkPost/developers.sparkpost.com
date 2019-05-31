# How do I clear data from /var/log/eccluster/?
 

There are two common reasons why the /var/log/eccluster directory can fill up with space, or appear full (even though it's not). Each reason has been separated out to its own section.

## No rotation in place
The cluster manager logs are not rotated automatically out of the box, because this is your data, and what you want to do with it is a business decision. These are merely centralized logs that are aggregated from each of the MTAs.

The quickest way to clear up space is by simply removing the directories themselves and restarting the eccmgr service on the manager. However, this is not a good long-term solution because it will be easy to forget about this and run into this issue again. 

A more ideal solution would be to automate this process. The following Code Block will automatically rotate and delete the logs older than 30 days.

-This will create a tarball of yesterday's cluster logs:

	0 1 * * * root tar -cvjf /var/log/eccluster/`date +\%Y\/\%m\/\%d -
	d "yesterday"`.tar.bz2 /var/log/eccluster/`date +\%Y\/\%m\/\%d -
	d "yesterday"`/ > /dev/null 2>&1

-This will delete yesterday's raw cluster log files.

	0 2 * * * root rm -rf /var/log/eccluster/`date +\%Y\/\%m\/\%d -
	d "yesterday"`/ > /dev/null 2>&1

-This will execute the find command and remove logs older than 30 days. If you want to alter this, then change the "-mtime" parameter.

	0 0 * * 0 root find /var/log/eccluster/`date +\%Y` -mtime +30 -exec rm -f 
	{} \; > /dev/null 2>&1

Additional Resources:  Wikipedia on Cron

## Open File Handles
The output of the df command shows that the /var/log/eccluster partition is full. However, the total number of actual files does not add up to this sum. Although this doesn't happen all the time, it can happen when actions (such as a cron job that performs compression, or deletion) take place on the file that is actively being accessed by the eccmgr service. This results in eccmgr being unable to properly relinquish its file handles.

Before we can resolve the issue, we must first gather some information.

### Manual Method:
-We will need to first get the PID of the service. We're looking for the "eccmgr" service running as "ecuser".

	ps aux | grep eccmgr | grep -v grep
	root      4323  0.0  0.0  10736   344 ?        S    14:42   0:00 /opt/msys/ecelerity/sbin/eccmgr: monitoring child 4324
	ecuser    4324  0.0  1.1 979512 11936 ?        Ssl  14:42   0:00 /opt/msys/ecelerity/sbin/eccmgr

-We will then use the PID (4324 in this case) to check on the open file handles.

	ls -l /proc/4324/fd/
	lrwx------ 1 root root 64 Jul 17 14:42 0 -> /dev/null
	lrwx------ 1 root root 64 Jul 17 14:42 1 -> /dev/null
	lrwx------ 1 root root 64 Jul 17 14:42 10 -> socket:[34661327]
	lrwx------ 1 root root 64 Jul 17 14:42 11 -> /var/log/eccluster/control.cache
	l-wx------ 1 root root 64 Jul 17 14:42 12 -> /var/log/eccluster/mainlog.ec
	l-wx------ 1 root root 64 Jul 17 14:42 13 -> /var/log/eccluster/rejectlog.ec
	l-wx------ 1 root root 64 Jul 17 14:42 14 -> /var/log/eccluster/paniclog.ec
	...

### Automated Method:
This will pull the PID for this service and show you the open file handles for it.

	ps h -C eccmgr | ls -l /proc/`awk '{ print $1; }'`/fd

Once we've confirmed that it is eccmgr that is not relinquishing file handles, we can then restart it using the provided init scripts.

	/etc/init.d/eccmgr restart
	Shutting down eccmgr: done.
	Starting eccmgr: Pulling latest config files from repo
	started

Should this fail, we'll then use the kill command on the PID with the SIGTERM (-15) signal. If the process is still running even after the first kill command, then we'll send the SIGKILL (-9) signal.

	kill -15 4324
	kill -9 4324

### Alternate Methods:
The methods provided above are to be used during the time of a problem occurring. To take more preventative measures, the client could add the max_open option to the **eccluster.conf**. You would add the following to the Logs {} stanza:

	max_open = 5
	Note: The default value for max_open is 128.