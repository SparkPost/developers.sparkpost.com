# How Do I manually consume jlogs?

### Symptoms:

/var/log/ecelerity is continuously expanding. Jlogs are not being consumed and a large backlog is being created.

### Cause:

Jlogs are not being consumed as normal, for what ever reason.

Jlogs, by their design and nature are somewhat prone to corruption and inconsistencies and need a bit of manual intervention occasionally to help them along when they stop functioning as  intended.  

We've developed and included tools to analyse and repair them, the jlog_sanity_check and jlogctl.  In some cases we needed to manually process the file by forcing X amount (100000 in this example) passes which will consume the file as expected.  The "p 100000" switch indicates the amount of passes to be done.

### Steps to remedy the situation:

- First, run the sanity check to inspect contents and report any inconsistencies or errors it finds.  If there is no terminal output the log is ok.  If not, the log is in need of repair.

	```
	/opt/msys/jlog/bin/jlog_sanity_check le /var/log/ecelerity/mainlog.rt/
	```
	
- Next, run the repair on the affected log.  The results of this are a mixed bag, some times the repair process works, some times not.   The -r switch repairs and the -v displays verbose information while doing so.

	```
	/opt/msys/jlog/bin/jlogctl -r -v /var/log/ecelerity/mainlog.rt/
	```
	
- To manually consume a jlog, we use the ec_rt_stats2 process.

	```
	/opt/msys/ecelerity/bin/ec_rt_stats2 /var/log/ecelerity/mainlog.rt/
	```
	
- Before manually running the ec_rt_stats2 command we need to disable the cron job that controls it and check that it is not already running, do the following:

	- Disable the cron job:
	
	```
	vi /etc/cron.d/msys-ecelerity
	```	
	- Place a hash # in front of the line as follows:  
	
	```
	# * * * * * root /opt/msys/ecelerity/bin/ec_rt_stats2 >/dev/null 2>&1
	```
	
	- Save and exit the file
	
	- Check that it is not currently running:

	```
	ps afx | grep ec_rt_stats2
	```
	
	- If the process is running, it should appear in the list.  To kill it do:
	
	```
	kill -9 <process ID>
	```
	
	- To be sure it is not running, again do:  
	
	```
	ps afx | grep ec_rt_stats2 
	```
	
	- To manually consume the jlog file by doing multiple passes if the default value is not consuming the data fast enough, the following command can be used to consume the backlog.  The cron job must be disabled while this is process is running:

	```
	/opt/msys/ecelerity/bin/ec_rt_stats2 -v -p 100000 /var/log/ecelerity/mainlog.rt
	```
	
	As mentioned above under the Cause heading,  in some cases we needed to manually process the file by forcing X amount (100000 in this example) passes which will consume the file as expected.  The "p 100000" switch indicates the amount of passes to be done.
	
	**Note:**
	
	Please allow a considerable amount of time for this process to complete. The larger the directory size the more time it will take. The value of 100000 was used on a directory of ~ 170GB. So a lower number of passes can be specified for a smaller amount of disk usage.
	
	If something like the snippet below is displayed, the log is being processed at the default rate of 10 minutes of data per 10 minute window.
	
	The manual page states:
	
	*ec_rt_stats2 will keep processing windows of data until either
	it reaches an incomplete window, or has processed the number of
	windows specified by this option. The default is 10, meaning
	that it will try to consume 10 minutes of data on each run. This
	should not normally need to be changed, but altering this value
	can be useful if for some reason stats processing has fallen
	behind; you might consider running it by hand with a high
	--passes value.*
	
	```
	[root@mta2 ecelerity]# /opt/msys/ecelerity/bin/ec_rt_stats2 -v /var/log/ecelerity/mainlog.rt/
	Considering window starting at 2015-01-16 23:00:00
	processed 1 lines from /var/log/ecelerity/mainlog.rt
	processed 1 lines from /var/log/ecelerity/bouncelog.rt
	processed 1 lines from /var/log/ecelerity/rejectlog.rt
	processed 7 lines from /var/log/ecelerity/statp.rt
	Checkpointing /var/log/ecelerity/mainlog.rt at 00000000:0000016b.
	Checkpointing /var/log/ecelerity/bouncelog.rt at 00000000:00000483.
	Checkpointing /var/log/ecelerity/rejectlog.rt at 00000000:00000483.
	Checkpointing /var/log/ecelerity/statp.rt at 00000000:00001f3f.
	Trying another pass.
	Considering window starting at 2015-01-16 23:01:00
	Not enough data in window for mainlog
	System health updated.
	```
	- We need to re-enable the cron, if all is well.  To do that, just remove the # from the line in the cron:

	```
	vi /etc/cron.d/msys-ecelerity
	```
	
	 Remove the hash symbol # from the line so it is as follows :  
	 
	 ```
	 * * * * * root /opt/msys/ecelerity/bin/ec_rt_stats2 >/dev/null 2>&1
	 ```
	 
	- Save and exit the file.

As a final step, removing the broken directory / directories if repairing fails.

- Stop ecelerity:

	```
	/etc/init.d/ecelerity stop
	```
	
- Remove mainlog.rt or any other .rt directory:

	```
	rm -rf /var/log/ecelerity/mainlog.rt/
	```
	
- Restart ececerity:

	```
	/etc/init.d/ecelerity start
	```	