# Monitoring Momentum 4 Processes

Some critical processes are monitored internally or with Gimli and are automatically restarted.  Other processes should be monitored, and if down, should be investigated and resolved. The sections below list the major processes, associated log files, and notes detailing what is monitored internally and what should be monitored separately.

## Internal Monitoring and Auto-Restart
The following processes are monitored internally and are automatically restarted if found to be unresponsive:

* Momentum (ecelerity)
* Momentum Cluster Configuration (ecconfigd)
* Node Processes
* Metrics ETL and API
* Webhooks Batch, Transmitter, and API
* Users API
* Adaptive Delivery ETL and API
* Riak


## Additional Monitoring Needed

The following processes cannot or should not be automatically restarted. If there is a problem, investigate the issue and determine an appropriate resolution.
  

| Process | Resolution steps |
| -------------------------:| -------------------------:|  
| Web server and load balancer (nginx) | 1. Monitor the up/down status on all nodes. |  
| Vertica	| 1. Monitor the up/down status on all Analytics nodes. 2. Monitor database growth; the Vertica partition should not exceed 60%. |
| Cassandra | 1. Monitor the up/down status on all Platform nodes. 2. Monitor database growth. 3. Monitor disk space usage; utilization should not go above 50%. |
| PostgreSQL	| 1. Monitor the up/down status on all Platform nodes. 2. Monitor connectivity. |
| RabbitMQ | 1. Monitor the up/down status on all nodes. |
| Momentum (ecelerity)	| 1. Monitor for the existence of trace files; a fast growing number of /var/log/ecelerity/traces/*.trc files indicates a critical system error. 2. Monitor memory usage. 3. Monitor disk space usage. |
| Momentum Cluster	| 1. Monitor configuration process logs - /var/ecconfigd/apache/error.log. 2. Monitor manager error logs - /var/log/eccluster/paniclog.ec. 3. Monitor disk space of log aggregator. If the log aggregator node exists, and log aggregation is enabled on the Platform nodes in ecelerity-cluster.conf, /var/log/eccluster will increase in size over time. There will be one directory per day (/var/log/eccluster/YYYY/MM/DD) with logs under it. |
| Mail Spools |	1. Monitor message counts in each queue (active and delay queues). 2. Monitor disk space usage; growing disk usage indicates a build up of messages queues.|
 
### Other things to monitor:

1. Monitor TCP port 25 (and 587 if using the submission port).
2. Monitor the up/down status of supporting processes:
	* Cron
	* DNS/Caching Resolvers
3. Monitor the following expiration dates:
	* SSL certificate expiration
	* License expiration
4. RabbitMQ Queues:
```
/opt/msys/3rdParty/sbin/rabbitmqctl list_queues
```
5. `ec_console` Connectivity - The best method to ensure the system is responding is to check the ec_console connectivity.
6. `ec_console` uptime check:
```
echo "summary" | /opt/msys/ecelerity/bin/ec_console | grep -i uptime
```
ec_console memory check
echo memory | ec_console
non-ec_console memory check

### General System Health
Monitor the following parameters to ensure a healthy system:

* Disk space and utilization
* Load Average
* CPU utilization
* Swap usage
* Up/down status of NTP process
* NTP offset
* Status of local caching resolver (DNS)
* Overall memory usage
* Overall TCP connections and throughput