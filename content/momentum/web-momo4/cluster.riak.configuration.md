| [Prev](cluster.config.failover)  | Chapter 16. Cluster-specific Configuration |  [Next](control_listener) |

## 16.7. Configuring Riak in a Cluster

In a cluster configuration, by default, [Riak](riak "Chapter 30. Riak") is installed on every node. Each node requires a unique name to participate in the cluster. During installation, the installer automatically assigns names, which are stored in the `/opt/msys/3rdParty/riak/etc/vm.args` configuration file and specified with the "-name" parameter switch.

### Note

If the IP address or interface is changed, this parameter must be updated and the ring status updated in the following way; **`riak-admin reip riak-subcluster_name@oldip riak-subcluster_name@newip`**                                                            . The local service **must not be running**                for this to work; make sure the service is disabled and stopped while this operation is carried out.

On a singlenode installation, the name defaults to riak-*`subcluster_name`*@127.0.0.1.

### 16.7.1. Joining a Node to a Riak Cluster

To configure a node to join the Riak cluster after installation, follow these steps:

1.  Shut down the ecelerity process on the node by issuing the command:

    `shell> /etc/init.d/ecelerity stop`
2.  In `/opt/msys/3rdParty/riak/etc/app.config`, ensure that `http` is bound to both `{127.0.0.1, 8098}` and {*`local_node_ip`*, 8098}.

    For example: `{http, [{127.0.0.1, 8098}, {10.70.20.131, 8098} ]}`.

3.  Start Riak by issuing the command:

    `shell> /etc/init.d/msys-riak start`
4.  Use the riak-admin command to join the MTA to the Riak cluster:

    shell> /opt/msys/3rdParty/riak/bin/riak-admin cluster join riak-*`cluster_name@manager_IP`*
5.  Use the riak-admin command to verify that all nodes are joined together

    `shell> /opt/msys/3rdParty/riak/bin/riak-admin status`

    The `ring_members` line of the command output should be similar to the following:

    `ring_members : ['riak-default@10.70.20.129','riak-default@10.70.20.131', ... ]`
6.  Restart the ecelerity process:

    `shell> /etc/init.d/ecelerity start`

### 16.7.2. Removing a Node from a Riak Cluster

### Warning

Serious performance issues can occur if inactive or misbehaving Riak nodes are not removed from the cluster.

To remove a node from a Riak cluster, go to the command line on the node you wish to remove and issue the following Riak command:

`shell> /opt/msys/3rdParty/riak/bin/riak-admin cluster leave`

In cases where the Riak node is misbehaving or unresponsive and you cannot use the `cluster leave` command, use the `cluster force-remove` command:

shell> /opt/msys/3rdParty/riak/bin/riak-admin cluster force-remove riak-*`cluster_name@ip_address`*

In this example, the Riak node riak-*`cluster_name@ip_address`* will be removed from the node that executes this command forcing the removal of the target node from the ring. The `cluster force-remove` command should only be used in cases where it is not possible to properly `cluster leave`, as **data on the removed node will not be handed off** .

### 16.7.3. Checking Riak Cluster Communication

To check that all nodes are joined together, use the following test:

1.  Log in to any node, go to the command line, and insert a record into Riak:

    ```
    shell> curl -X PUT -H "Content-Type: text/plain" \
    http://127.0.0.1:8098/riak/adctrl/test-record -d "A test"
    ```

2.  Log in to another node and retrieve the record:

    `shell> curl http://127.0.0.1:8098/riak/adctrl/test-record`

    If "A test" is output to the screen, then the two Riak servers are joined.

3.  Repeat the previous step for every node in the cluster.

4.  When you've finished testing, remove the test record:

    `shell> curl -X DELETE http://127.0.0.1:8098/riak/adctrl/test-record`

If you fail to retrieve the test record, check that the Riak nodes are joined by using the command:

`shell> /opt/msys/3rdParty/riak/bin/riak-admin status`

In the output, look for the `ring_members` line and verify that there is an entry 'riak-*`cluster_name@ip_address`*' for each node in the cluster. If this is not the case, then the Riak servers may be partially joined or not joined at all. Join the missing node or nodes to the cluster as described in [Section 16.7.1, “Joining a Node to a Riak Cluster”](cluster.riak.configuration#cluster.riak.configuration.joining "16.7.1. Joining a Node to a Riak Cluster")

### Note

In a cluster configuration, messages in the panic log such as `adaptive_db_sync: Couldn't connect to server` may indicate the failure of one or more Riak servers. If you see such messages, check the status of your Riak servers using the **riak-admin** command.

|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.failover)  | [Up](cluster) |  [Next](control_listener) |
| 16.6. Configuring Momentum for High Availability and Failover  | [Table of Contents](index) |  Chapter 17. Configuring Momentum's System Console |

