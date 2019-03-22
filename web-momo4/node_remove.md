| [Prev](add_remove_platform_nodes)  | Chapter 13. Adding and Removing Platform Nodes |  [Next](add_remove_analytics_nodes) |

## 13.2. Removing a Platform Node

This section describes how to remove a functional Platform node, which involves removing the node from the Cassandra and Momentum clusters and making some manual configuration changes on the remaining Platform nodes and on the existing Analytics nodes.

### Note

These instructions apply to Momentum 4.2.1.*`x`*, where `x` > or = `11`

### 13.2.1. Remove the Node

1.  Remove the node from any external load balancers.

2.  Update the `momo_upstream.conf` file from all Analytics nodes in your cluster.

    ```
    # Edit /opt/msys/3rdParty/nginx/conf.d/momo_upstream.conf

    #  In momo_upstream.conf, REMOVE the OLD Platform node from the upstream momo-rest stanza
         upstream momo-rest {
           server node1.int.messagesystems.com:2081;
           server node2.int.messagesystems.com:2081;
           server node3.int.messagesystems.com:2081;
    #  Example:  Remove the appropriate old Platform server here:
           server node4.int.messagesystems.com:2081;
           least_conn;
       }
    ```

3.  Reload the NGINX configuration on the Analytics nodes.

    `# service msys-nginx reload`
4.  Prevent the node from receiving clicks and opens.

    On all Platform nodes, update the `click_proxy_upstream.conf` file by removing the appropriate server line for the Platform host that is being removed.

    ### Tip

    If Engagement Tracking hosts are separate from the Platform nodes, then you do not have to update this file as your old Platform node will not have been included in this stanza.

    ```
    # /opt/msys/3rdParty/nginx/conf.d/click_proxy_upstream.conf

    #  In click_proxy_upstream.conf, REMOVE the OLD Platform node from the upstream click_proxy stanza:
         upstream click_proxy {
         server node1.int.messagesystems.com:2081;
         server node2.int.messagesystems.com:2081;
         server node3.int.messagesystems.com:2081;
    #  REMOVE the old Platform server line here:
         server node4.int.messagesystems.com:2081;
         least_conn;
       }
    ```

5.  Allow the node time to finish generation.

    ```
    $ /opt/msys/ecelerity/bin/ec_console
    16:26:02 /tmp/2025> msg_gen joblist    
    Job: 84158406797069455 jctl: 4 Restarts: 0 resync: 0 complete: 0 del_pend: 0
          inprog: 1 Recips:    100  LastStart:      1 worker(count: 1 complete: 0)

          own  start count s_recip s_count s_total complete fail status state restart seqno finish
            4      1   100       1     100       0        0    0      0     0       0     1      0
    Job: 84158406797069346 jctl: 4 Restarts: 0 resync: 0 complete: 0 del_pend: 0
          inprog: 1 Recips:    100  LastStart:      1 worker(count: 1 complete: 0)

          own  start count s_recip s_count s_total complete fail status state restart seqno finish
            4      1   100       1     100       0        0    0      0     0       0     1      0
    16:26:06 /tmp/2025> msg_gen joblist                                                                                          
    Ok
    ```

6.  Stop services on the node.

    ```
    service ecelerity stop
    service msys-app-metrics-etl stop
    service msys-app-webhooks-etl stop
    service msys-app-adaptive-delivery-etl stop
    service msys-riak stop
    service msys-nginx stop
    service msys-rabbitmq stop
    ```

### 13.2.2. Modify the Configuration on the Remaining Platform Nodes

### Note

You can perform the following steps on any remaining Platform node.

1.  Remove the node from the ecelerity cluster by updating the `msgc_server.conf` file. Delete the line in the peers stanza for the Platform host that you are removing.

    ```
    # Edit /opt/msys/ecelerity/etc/conf/global/msgc_server.conf
    # Example.  Assumes 4 nodes in current cluster.  Removing node4.int.messagesystems.com

    msgc_server {
       peers = [
         node1.int.messagesystems.com = "10.77.0.93"
         node2.int.messagesystems.com = "10.77.0.94"
         node3.int.messagesystems.com = "10.77.0.95"
    #  REMOVE the old Platform node line here:
         node4.int.messagesystems.com = "10.77.0.96"
       ]
    }
    ```

2.  Remove the node from message generation by updating the following stanzas in `msg_gen.conf`.

    *   cassandra_client - remove the line that specifies the host that you are removing from Message Generation.

    *   msg_gen - remove the node that specifies the node that you are removing from Message Generation.

    ```
    # Edit /opt/msys/ecelerity/etc/conf/default/msg_gen.conf 
    # Example.  Assumes 4 nodes in current cluster.  Removing node4.int.messagesystems.com

    cassandra_client {
      uri = (
        # all of the servers running cassandra in the following format
        # "name=cassandra_db;host=Fully.Qualified.Domain.Name;port=9160"
        "name=cassandra_db;host=node1.int.messagesystems.com;port=9160"
        "name=cassandra_db;host=node2.int.messagesystems.com;port=9160"
        "name=cassandra_db;host=node3.int.messagesystems.com;port=9160"
    # Remove the old Platform host line here:
        "name=cassandra_db;host=node4.int.messagesystems.com;port=9160"
      )
    }
    msg_gen {
      engagement_tracking_host = "__EXTERNAL_DNS_HOSTNAME__:81"
      # set the following to false if only using a single MTA
      # cluster_cfg = true
      # Repeat the following structure for as many hosts in C* cluster
      # The mta_id must be a unique integer < 255
      node node1.int.messagesystems.com { mta_id = 1  votes = 1 }
      node node2.int.messagesystems.com { mta_id = 2  votes = 1 }
      node node3.int.messagesystems.com { mta_id = 3  votes = 1 }
    #  REMOVE the old Platform node line here:
      node node4.int.messagesystems.com { mta_id = 4  votes = 1 }
    }
    ```

3.  Use eccfg to commit the modified configuration, substituting your own admin password if environmental variable $ADMINPASS is not defined.

    `$ /opt/msys/ecelerity/bin/eccfg commit -u admin -p $ADMINPASS -m 'Removing a platform node from the cluster'`
4.  Restart ecelerity on ALL of the remaining Platform nodes.

    `$ service ecelerity restart`

### 13.2.3. Remove the Node from the `production.json` Files

1.  Remove the node from the `production.json` files on each Analytics node.

    ```
    # Update the following file by REMOVING the new Platform host FROM the "cassandra:hosts" array:
    # /opt/msys/app/users-api/config/production.json

    # Example: Remove this string "pnode4.int.messagesystems.com" from the array:
    {
      "cassandra": {
        "hosts": [
          "node1.int.messagesystems.com",
          "node2.int.messagesystems.com",
          "node3.int.messagesystems.com",
    # REMOVE the trailing comma from the preceding line, and
    # REMOVE the appropriate host from here
          "pnode4.int.messagesystems.com"
        ]
      }
    }

    # Update the following file by REMOVING the new Platform host FROM the "cql:contactPoints" array:
    # /opt/msys/app/webhooks-api/config/production.json

    # Example: Remove this string "pnode4.int.messagesystems.com" from the array:
    {
      "cql": {
        "contactPoints": [
          "pnode1.int.messagesystems.com",
          "pnode2.int.messagesystems.com",
          "pnode3.int.messagesystems.com",
    # REMOVE the trailing comma from the preceding line, and
    # REMOVE the appropriate host from here
          "pnode4.int.messagesystems.com"
        ]
      }
    }
    ```

2.  Restart all applicable services on each Analytics node.

    ```
    service msys-app-users-api restart
    service msys-app-webhooks-api restart
    service msys-nginx reload
    ```

### 13.2.4. Decommission the Node from the Cassandra Cluster

### Note

These instructions are based on the assumption that you are reducing the size of your Cassandra cluster and not replacing a dead node.

1.  Run the nodetool command to confirm that all nodes in the cluster are up (UN=up, DN=down).

    `/opt/msys/3rdParty/cassandra/bin/nodetool status`

    Your results should look similar to this:

    ```
    $ service msys-cassandra status
    Note: Ownership information does not include topology; for complete information, specify a keyspace
    Datacenter: datacenter1
    =======================
    Status=Up/Down
    |/ State=Normal/Leaving/Joining/Moving
    --  Address      Load       Tokens  Owns   Host ID                               Rack
    UN  10.77.0.245  215.57 KB  256     25.8%  1b00204c-5dc4-44b8-a024-c1ba47b07233  rack1
    UN  10.77.1.8    178.35 KB  256     23.7%  28e2d1b9-80f6-40f8-b399-4533b2cfb103  rack1
    UN  10.77.1.12   196.56 KB  256     23.2%  4addf36b-10f9-48fb-98c9-e5acf2c19970  rack1
    UN  10.77.0.227  203.12 KB  256     27.3%  5525b410-3f3e-49ec-a176-0efa2383f3f4  rack1
    ```

2.  Confirm that the node you are removing is marked `UN`. If it is, decommission the node using the `nodetool decommission` command, **executed on the node that is being removed.** 

    `/opt/msys/3rdParty/cassandra/bin/nodetool decommission`

    If the node is down (`DN`), then use the `nodetool removenode` command, **executed on the node that is being removed.** 

    `/opt/msys/3rdParty/cassandra/bin/nodetool removenode`
3.  Monitor the progress and wait for the node to be decommissioned.

    ```
    $ /opt/msys/3rdParty/cassandra/bin/nodetool netstats
    Mode: LEAVING
    ```

    ### Tip

    Use `watch nodetool netstats` to see the data leaving the node.

    Once the decommissioning is complete, you'll see the netstat command report "DECOMMISSIONED."

    ```
    $ /opt/msys/3rdParty/cassandra/bin/nodetool netstats
    Mode: DECOMMISSIONED
    ```

    Confirm that the node has been decommissioned (and therefore removed from the Cassandra cluster).

    `/opt/msys/3rdParty/cassandra/bin/nodetool status`
4.  If this node is in the seeds list, then remove the node from the seeds parameter in the `cassandra.yaml` configuration file on all remaining Platform nodes in your cluster.

    ```
    # Edit /opt/msys/3rdParty/cassandra/conf/cassandra.yaml
    # Example.  Assumes 4 nodes in current Cassandra cluster.  Removing node4.int.messagesystems.com

    # Look for this portion of the file
    seed_provider:
    - class_name: org.apache.cassandra.locator.SimpleSeedProvider
      parameters:
      - seeds: "node1.int.messagesystems.com, node2.int.messagesystems.com, node3.int.messagesystems.com"
    # REMOVE the OLD hostname from the above comma-separated list.
    # It is recommended that 3 nodes in your cluster are seed nodes, so you may have to replace this seed with another
    # functional Cassandra node in your cluster.
    ```

### 13.2.5. Move the Spool Files

Move the spool files to a functional Platform node. For more information, see [spool import](console_commands.spool_import "spool import").

### 13.2.6. Final Steps

1.  Confirm that the new node has been properly removed from the Momentum cluster. Run the following command on a remaining Platform node.

    `echo "cluster membership" | /opt/msys/ecelerity/bin/ec_console`
2.  Double-check the Cassandra cluster status.

    `service msys-cassandra status`

| [Prev](add_remove_platform_nodes)  | [Up](add_remove_platform_nodes) |  [Next](add_remove_analytics_nodes) |
| Chapter 13. Adding and Removing Platform Nodes  | [Table of Contents](index) |  Chapter 14. Adding and Removing Analytics Nodes |

