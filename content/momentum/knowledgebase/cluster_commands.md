# How do I send ec_console commands to multiple nodes simultaneously?

You can use the "**broadcast**" and "**retrieve**" console commands on the cluster manager. This is helpful when needing to gather information from the MTA nodes simultaneously. Run this from the ec_console: 

```  
/tmp/2025> broadcast summary  
/tmp/2025> retrieve summary  
```
This feature works via eccmgr (on port 4809), and the data retrieved from each node is stored in a SQLite database located in /var/log/eccluster/control.cache on the cluster manager.

NOTE: When broadcasting commands, you will not receive any output. For Momentum versions 4.x, the retrieve command will only work if you have enabled Log Aggregation.

Refer here for more information:  
[https://support.messagesystems.com/docs/web-momo4/cluster.config.operations.eccmgr.console.php]()
