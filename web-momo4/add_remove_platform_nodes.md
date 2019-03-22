| [Prev](install.security_considerations)  | Part II. Installing Momentum |  [Next](node_remove) |
## Chapter 13. Adding and Removing Platform Nodes
**Table of Contents**
* [13.1\. Adding a Platform Node](add_remove_platform_nodes#node_add)
* [13.2\. Removing a Platform Node](node_remove)
This chapter describes how to add and remove a Platform node (MTA + Cassandra) to and from an existing Momentum 4.2 cluster.
## 13.1. Adding a Platform Node
This section describes how to add a Platform node, which involves installing the new node then making some manual configuration changes on the new node and on the existing nodes.
### Note
These instructions apply to Momentum 4.2.1.*`x`*, where `x` > or = `11`
### 13.1.1. Prepare the First Platform Node
1.  Add the new node to the ecelerity configuration files on the existing first platform node (or log aggregator node, if present).
    1.  Add the node to message generation by updating the following stanzas in `msg_gen.conf`.
        *   cassandra_client - duplicate an existing line and change the host name to match the new host.
        *   msg_gen - copy/paste one of the existing "node" stanzas and update the node name and set a new, unique `mta_id`.
        ```
        # Edit /opt/msys/ecelerity/etc/conf/default/msg_gen.conf 
        # Example.  Assumes 3 nodes in current cluster.  Adding node4.
        cassandra_client {
          uri = (
            # all of the servers running cassandra in the following format
            # "name=cassandra_db;host=Fully.Qualified.Domain.Name;port=9160"
            "name=cassandra_db;host=node1.int.messagesystems.com;port=9160"
            "name=cassandra_db;host=node2.int.messagesystems.com;port=9160"
            "name=cassandra_db;host=node3.int.messagesystems.com;port=9160"
        # Add the new line here:
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
        # Add the new line here:
          node node4.int.messagesystems.com { mta_id = 4  votes = 1 }
        }
        ```
    2.  Add the node to the ecelerity cluster by updating the following stanza in `msgc_server.conf`.
        *   peers - add an additional line for the new host (use both hostname and correct IP address).
        ```
        # Edit /opt/msys/ecelerity/etc/conf/global/msgc_server.conf
        # Example.  Assumes 3 nodes in current cluster.  Adding node4.
        msgc_server {
           peers = [
             node1.int.messagesystems.com = "10.77.0.93"
             node2.int.messagesystems.com = "10.77.0.94"
             node3.int.messagesystems.com = "10.77.0.95"
        # Add the new line here:
             node4.int.messagesystems.com = "10.77.0.96"
           ]
        }
        ```
2.  Use eccfg to commit the modified configuration, substituting your own admin password if environmental variable $ADMINPASS is not defined.
    `/opt/msys/ecelerity/bin/eccfg commit -u admin -p $ADMINPASS -m 'Add new Platform node to ecelerity cluster'`
3.  Restart affected services.
    `service ecelerity restart`
4.  Update the nginx configuration files.
    1.  Update the `click_proxy_upstream.conf` nginx configuration file by adding a "server" line for the new Platform host.
        ### Tip
        If Engagement Tracking hosts are separate from the Platform nodes and you do not expect your Platform node to handle clicks/opens, then you do not have to update this file.
        ```
        # Edit /opt/msys/3rdParty/nginx/conf.d/click_proxy_upstream.conf
        #  In click_proxy_upstream.conf, modify the upstream click_proxy stanza:
             upstream click_proxy {
             server node1.int.messagesystems.com:2081;
             server node2.int.messagesystems.com:2081;
             server node3.int.messagesystems.com:2081;
        #  Add the new server line here:
             server node4.int.messagesystems.com:2081;
             least_conn;
           }
        ```
    2.  Reload the nginx configuration.
        `service msys-nginx reload`
### 13.1.2. Update the Remaining Existing Platform Nodes
1.  Update the `click_proxy_upstream.conf` file on all remaining existing Platform nodes. You can copy the file from the first node to the remaining ones.
2.  Restart affected services on each Platform node.
    ```
    service ecelerity restart
    service msys-nginx reload
    ```
### 13.1.3. Configure the new Platform Node
1.  Copy the Momentum 4.2 bundle to the new node, unpack it, and activate the included yum repository.
    **NOTE:** Here, and throughout the node addition and removal documentation, specific releases and revisions shown are just examples, and your appropriate Momentum software bundle will be different.
    ```
    cd /var/tmp
    tar -zxf momentum-bundle-4.2.1.50062.rhel6.x86_64.tar.gz
    cd momentum-4.2.1.50062/
    ./setrepodir
    ```
2.  Install the meta package `msys-role-platform`.
    `yum install -y --config momentum.repo --enablerepo momentum msys-role-platform`
3.  Bootstrap the Ecelerity configuration from the first server, substituting your own admin password if environmental variable $ADMINPASS is not defined. .
    chown -R ecuser:ecuser /opt/msys/ecelerity/etc/
    cd /opt/msys/ecelerity/etc/
    ../bin/eccfg bootstrap --clustername default -u admin -p $ADMINPASS *`FIRST.NODE.FQDN`*
4.  Copy the existing configuration files from the first Platform node to the new node, substituting or setting the new node's hostname for environmental variable $NEWNODE.
    ```
    # execute this on the first Platform node
    for file in \
      /opt/msys/3rdParty/cassandra/conf/cassandra.yaml \
      /opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf \
      /opt/msys/3rdParty/nginx/conf.d/click_proxy_upstream.conf \
      /opt/msys/app/metrics-etl/config/production.json \
      /opt/msys/app/adaptive-delivery-etl/config/production.json \
      /opt/msys/app/webhooks-etl/config/production.json \
      /opt/msys/etc/ ;
    do
      scp -r $file $NEWNODE:$file
    done
    ```
5.  Update the `cassandra.yaml` file on the new Platform node to replace `listen_address` with the correct local IP address for the new node.
    ```
    # example
    vim /opt/msys/3rdParty/cassandra/conf/cassandra.yaml
    # Edit this line:
    listen_address: 10.77.0.245
    ```
6.  Start Cassandra on the new node.
    `# service msys-cassandra start`
    ### Note
    Depending on the amount of existing data in your Cassandra database, this may falsely report as failed (because the init script only waits a fixed amount of time for the service to start). Perform the next step below to determine the real status. If you do not get the indicated result, submit the start service command again, and if the desired result still does not result, check logs at `/var/log/msys-cassandra/` for error messages.
7.  After Cassandra starts, check that the database has been replicated (UN means Up Normal) using `service msys-cassandra status` or `/opt/msys/3rdParty/cassandra/bin/nodetool status`. You should expect to see the new node participating in the Cassandra cluster.
    ```
    service msys-cassandra status
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
8.  Configure RabbitMQ on the new platform node.
    ```
    # kill off qpidd service, which (if running) can interfere with RabbitMQ
    service qpidd stop
    /sbin/chkconfig qpidd off
    export THIRDPARTY=/opt/msys/3rdParty
    export RABBITMQCTL="$THIRDPARTY/sbin/rabbitmqctl"
    export RABBITMQADMIN="$THIRDPARTY/sbin/rabbitmqadmin"
    service msys-rabbitmq start
    $RABBITMQADMIN declare exchange name=momentum_metrics type=topic
    $RABBITMQADMIN declare queue name=msg_events
    $RABBITMQADMIN declare binding source=momentum_metrics \
      destination=msg_events \
      routing_key=msys.*
    $RABBITMQCTL add_user rabbitmq "p1-Vk0lXy"
    $RABBITMQCTL set_user_tags rabbitmq administrator
    $RABBITMQCTL set_permissions -p '/' rabbitmq '.*' '.*' '.*'
    $RABBITMQCTL delete_user guest
    ```
9.  Start all remaining services on the new node.
    ```
    /etc/init.d/msys-riak start
    /etc/init.d/msys-app-metrics-etl start
    /etc/init.d/msys-app-adaptive-delivery-etl start
    /etc/init.d/ecelerity start
    /etc/init.d/msys-nginx start
    /etc/init.d/msys-app-webhooks-etl start
    ```
### 13.1.4. Update the Analytics Nodes
Perform the following steps on each Analytics node in your cluster.
1.  Update the `momo_upstream.conf` nginx configuration file by adding the new Platform hostname to the upstream stanza.
    ```
    # Edit /opt/msys/3rdParty/nginx/conf.d/momo_upstream.conf
    #  In momo_upstream.conf, modify the upstream momo-rest stanza with the new Platform hostname
         upstream momo-rest {
           server node1.int.messagesystems.com:2081;
           server node2.int.messagesystems.com:2081;
           server node3.int.messagesystems.com:2081;
    #  Add the new Platform server host here:
           server node4.int.messagesystems.com:2081;
           least_conn;
       }
    ```
2.  Update two `production.json` files.
    ```
    # Update the following file by ADDING the new Platform host to the "cassandra:hosts" array
    # /opt/msys/app/users-api/config/production.json
    # Example:
    # Add this line below the former last-node line: "node4.int.messagesystems.com"
    # You must also add a trailing comma at the end of the former last-node line.
    {
      "cassandra": {
        "hosts": [
          "node1.int.messagesystems.com",
          "node2.int.messagesystems.com",
          "node3.int.messagesystems.com"
        ]
      }
    }
    # Update the following file by ADDING the new Platform host to the "cql:contactPoints" array
    # /opt/msys/app/webhooks-api/config/production.json
    # Example:
    # Add this line below the former last-node line: "node4.int.messagesystems.com"
    # You must also add a trailing comma at the end of the former last-node line.
    {
      "cql": {
        "contactPoints": [
          "node1.int.messagesystems.com",
          "node2.int.messagesystems.com",
          "node3.int.messagesystems.com"
        ]
      }
    }
    ```
3.  Restart all applicable services.
    ```
    service msys-app-users-api restart
    service msys-app-webhooks-api restart
    service msys-nginx reload
    ```
### 13.1.5. Final Steps
1.  Confirm that the new node has been properly added to the Momentum cluster.
    `echo "cluster membership" | /opt/msys/ecelerity/bin/ec_console`
2.  Ensure that the `momo_upstream.conf` and `msg_gen.conf` files were properly configured on your new node by confirming that the node is generating messages from REST transmissions.
3.  On all original Platform nodes, the Cassandra database will have duplicate keys that have now been distributed to the added node. Run the following command on each Platform/Cassandra node:
    `/opt/msys/3rdParty/cassandra/bin/nodetool cleanup`

| [Prev](install.security_considerations)  | [Up](p.installing) |  [Next](node_remove) |
| 12.6. Security Considerations  | [Table of Contents](index) |  13.2. Removing a Platform Node |
