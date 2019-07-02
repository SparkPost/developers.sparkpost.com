# Why do I see "ec_cluster: cannot open reader..." errors in the paniclog?

Here's an example of what you may find in your paniclog. If these appear in your MTA's paniclog, please continue for more info. 


	[Thu 01 Jan 2014 15:55:58] [serious] ec_cluster: cannot open reader <nodename> on /var/log/ecelerity/rejectlog.cluster 
	[Thu 01 Jan 2014 15:55:58] [serious] ec_cluster: cannot open reader <nodename> on /var/log/ecelerity/acctlog.cluster 
	[Thu 01 Jan 2014 15:55:58] [serious] ec_cluster: cannot open reader <nodename> on /var/log/ecelerity/paniclog.cluster 
	[Thu 01 Jan 2014 15:55:58] [serious] ec_cluster: cannot open reader <nodename> on /var/log/ecelerity/mainlog.cluster 
	[Thu 01 Jan 2014 15:55:58] [serious] ec_cluster: cannot open reader msbadger on /var/log/ecelerity/bouncelog.cluster

This is a known issue, due to a race condition that occurs upon initial startup of the Ecelerity process. However, the race condition eventually clears and the log files are opened by the process as usual. Unless you see these errors constantly repeating, they can be safely ignored. Otherwise, you may need to look into some filesystem limitations such as lack of space, file handles, inodes, etc. 