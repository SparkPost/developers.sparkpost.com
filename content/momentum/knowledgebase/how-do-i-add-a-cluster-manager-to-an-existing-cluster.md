#How Do I Add a Cluster Manager to an Existing Cluster?

* 1\. On each of the MTA nodes in the cluster, disable the cron jobs that pull configuration from the manager:

  /etc/cron.d/msys-ecelerity
  
  /opt/msys/ecelerity/bin/eccfg pull
  
  /opt/msys/ecelerity/bin/lu_pull
* 2\. Copy the /opt/msys/ecelerity/etc/conf directory over to the new manager (into /tmp for example) from one of the nodes
* 3\. Remove .svn, and .eccfg subdirectories as well as the mbus.conf file from the configuration backup. (Check this next command without the -exec part first to verify what it will delete!)

  [root@localhost /temp]# find /path/to/conf -type d -name .svn -exec rm -rf {} \;
* 4\. Ensure the new manager has the same IP and hostname as before
* 5\. Verify the hosts file on the new manager is correct and can resolve the names of all of the nodes in the cluster (localhost should not include hostname)
* 6\. Install Momentum on the new manager:
	* a\. Install with database and manager roles, and all the same options as the original installation (including passwords)
	* b\. Include all of the nodes and manager in the node list
	* c\. Do not start services
* 7\. Move the configuration files into place on the new manager
* 8\. Start Ecconfigd and commit
* 9\. Start the remaining services on the manager
* 10\. If you're using DuraVIPs, stop the ecelerity process on all of the nodes (at the same time)
* 11\. On each node, move the configuration files out of the way, bootstrap from the manager, and start the ecelerity process:

	mv /opt/msys/ecelerity/etc/conf /opt/msys/ecelerity/etc/oldconf

	/opt/msys/ecelerity/bin/eccfg bootstrap --username <username> --password \<password> --clustername \<clustername> \<clustermanager>
	
* 12\. Ensure the riak ring is functional using status command
* 13\. Ensure all nodes can see each other using the "cluster membership" and "show cluster membership" ec_console commands
* 14\. Uncomment the cron commands on the nodes (see step 1)





