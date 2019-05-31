# Troubleshooting Cassandra issues in 4.x

The Platform nodes i.e. the Cassandra nodes operate as a cluster. To verify if all the nodes are up and running and to check the status of the complete cluster, run the following commands on one of the nodes:  

`/opt/msys/3rdParty/cassandra/bin/nodetool status` (or)  
`service msys-cassandra status`  


For further troubleshooting the issue, the log data can be found on the Platform nodes(s) in the folder:  

`/var/log/msys-cassandra`  

The logs are:  
```system.log  
daemon.log```