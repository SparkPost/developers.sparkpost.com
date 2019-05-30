# How do I add a node to an isolated riak ring on Momentum?

When adding a node to an environment that has had the Riak ring partitioned its recommended to follow these steps when prompted.  Since there is various configurations depending on where the node is at time of install in relation to the cluster you could be prompted for different questions.  Here is the recommended steps depending on configurations:

If you are installing Momentum in a cluster configuration with only the default subcluster, when you install one of the cluster MTA nodes, you are asked the following question:

```
Would you like this node to join the following riak cluster? Type an existing 
riak node (name or IP) or 'no' to not join at this time. (ip_address)
```

Type **no**

If no Riak instance has been created and you are not in the same subcluster as the cluster manager, you will be asked:

```
Is this the first riak instance in the 'cluster_name' subcluster?
```

Type **no**

When you answer "no", you will then be asked to join the Riak cluster:

```
Type an existing riak node (name or IP) or 'no' to not join at this time.
```
Type **no**

If you run into any other issues perform the following:

1\. Stop ecelerity

2\. Leave the Riak ring:
 
    */opt/msys/3rdParty/riak/bin/riak-admin leave *
    
3\. Stop msys-riak

4\. Run rm -rf /var/db/riak/* 

5\. Restart *msys-riak*

6\. Restart *ecelerity*

If msys-riak will not start for any reason, check the app.config in /opt/msys/3rdParty/riak/etc for any duplicate ring members then perform the following steps:

1\. Run *rm -rf /var/db/riak/* *

2\. Start *msys-riak*
    
3\. Restart *ecelerity*
