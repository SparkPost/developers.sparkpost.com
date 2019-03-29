|     |     |     |
| --- | --- | --- |
| [Prev](new_installation)  | Chapter 9. New Installation - All Configurations |  [Next](install.analytics_nodes) |

## 9.2. Configure the Cassandra Nodes

The Cassandra distributed database can be configured to run on its own cluster of nodes OR together on the MTA nodes. You must know the name and IP address of each Cassandra cluster node (or Platform node if you are combining it with an MTA) before you can configure Cassandra.

Follow all steps below on the first Cassandra node until reaching the final numbered step in this section, which is to configure the remaining nodes.

1.  Each Cassandra cluster must have a unique name that is shared by all nodes in that cluster. The name of the cluster is used to prevent machines in one logical cluster from joining another. All nodes participating in a cluster must have the same `cluster_name` value. Create a Cassandra cluster name and set it as an environment variable.

    ```
    export CLUSTER="CAS-12345678"
    echo $CLUSTER >/var/tmp/cass.cluster
    ```

2.  Copy the `/opt/msys/3rdParty/cassandra/conf/cassandra.yaml.dist` file to `/opt/msys/3rdParty/cassandra/conf/cassandra.yaml`.

3.  Edit the `/opt/msys/3rdParty/cassandra/conf/cassandra.yaml` file. Set or change the following configuration options:

    *   `cluster_name: '`*`your-cluster-name`* `'`

    *   `listen_address:` *`your-firstCassNode-IP`*

    *   `rpc_address: 0.0.0.0`

    *   `rpc_max_threads: 200`

    *   `thrift_framed_transport_size_in_mb: 25`

    *   Replace the default Cassandra root `/var/lib/cassandra/` with `/var/db/cassandra/` in all three places it appears (`data_file_directories`, `commitlog_directory`, and `saved_caches_directory`). Be sure to retain the existing directory names beneath the root at each of those places.

    *   Ensure the following option is formatted as shown below:

        ```
        seed_provider:
        - class_name: org.apache.cassandra.locator.SimpleSeedProvider
          parameters:
          - seeds: "
        ```
        *`cassnode1.example.com,cassnode2.example.com,cassnode3.example.com`*`"`

        Configure **EXACTLY THREE**       Cassandra hostnames in the seeds parameter. It is not critical which of your Cassandra hostnames are in this list as long as the parameter has exactly three hostnames set.

        ### Note

        If you are performing a single node install, configure one Cassandra hostname in the seeds parameter.

4.  Set your environment variables to handle singlenode OR multinode configurations.

    For environments with a single Cassandra node, run the following:

    ```
    export CASS_MULTI_OR_SINGLE=singlenode
    export CASS_CLUSTER_OR_SINGLE=singlenode
    ```

    For environments with multiple Cassandra nodes, run the following:

    ```
    export CASS_MULTI_OR_SINGLE=multinode
    export CASS_CLUSTER_OR_SINGLE=cluster
    ```

5.  Start the Cassandra service.

    ```
    service msys-cassandra start
    sleep 30
    ```

    ### Warning

    It is possible to get a FAILURE result message on first startup, even though the startup actually succeeded. Perform the next step below to determine the real status. If you do not get the indicated result, check logs at `/var/log/msys-cassandra/` for error messages.

6.  Check the status of the Cassandra service.

    `service msys-cassandra status`

    Your results should look something like this:

    ```
    Datacenter: datacenter1
    =======================
    Status=Up/Down
    |/ State=Normal/Leaving/Joining/Moving
    --  Address      Load       Tokens  Owns (effective)  Host ID                               Rack
    UN  10.77.0.158  45.89 KB   256     100.0%            a5732aca-b808-417b-a83b-ac97b4693694  rack1
    ```

7.  Apply the initial Cassandra schema. **Do this only on the first Cassandra node in the cluster.**

    ### Note

    You can safely ignore any 'Invalid column name' messages that may appear.

    export PATH=/opt/msys/3rdParty/bin:$PATH
    export IPADDRESS=`host $HOSTNAME | cut -d' ' -f4`

    cd /opt/msys/ecelerity/etc

    ../bin/cassandra_momo_setup.sh --$CASS_MULTI_OR_SINGLE $PWD | \
      tee -a /opt/msys/app/users-api/cql/cassandra_schema.log

    cd /opt/msys/app/users-api/cql

    cqlsh $IPADDRESS -f load_${CASS_CLUSTER_OR_SINGLE}_keyspace.cql \
      2>&1 | tee -a /opt/msys/app/users-api/cql/cassandra_schema.log

    cqlsh $IPADDRESS -k authentication \
      -f upgrades/V2015.01.20_00.00.00__create_customer_metadata.cql \
      2>&1 | tee -a /opt/msys/app/users-api/cql/cassandra_schema.log

    cqlsh $IPADDRESS -k authentication \
      -f  upgrades/V2015.01.21_00.00.00__add_terms_of_use_column.cql \
      2>&1 | tee -a /opt/msys/app/users-api/cql/cassandra_schema.log

    cqlsh $IPADDRESS -k authentication \
      -f upgrades/V2015.05.21_00.00.00__add_email_verified_column.cql \
      2>&1 | tee -a /opt/msys/app/users-api/cql/cassandra_schema.log

    cd /opt/msys/app/webhooks-api/cql

    cqlsh $IPADDRESS -f load_${CASS_CLUSTER_OR_SINGLE}_keyspace.cql \
      2>&1 | tee -a /opt/msys/app/users-api/cql/cassandra_schema.log

    cqlsh $IPADDRESS -k webhooks \
      -f upgrades/V2015.08.12_12.00.00__add_auth_columns.cql \
      2>&1 | tee -a /opt/msys/app/users-api/cql/cassandra_schema.log
8.  Configure the remaining Cassandra nodes

    *   Configure Cassandra's yaml file on all remaining nodes.

        From the first Cassandra node, copy `/opt/msys/3rdParty/cassandra/conf/cassandra.yaml` to each remaining Cassandra node.

        ```
        cd /opt/msys/3rdParty/cassandra/conf
        scp cassandra.yaml cass2.com:/opt/msys/3rdParty/cassandra/conf/
        ```

    *   On every node, edit `/opt/msys/3rdParty/cassandra/conf/cassandra.yaml` to be sure that this option `listen_address: w.x.y.z` matches the IP address of the node.

    *   Start the Cassandra service on each node.

        ### Warning

        Do not start the Cassandra on two or more nodes simultaneously. Allow Cassandra startup to fully complete on an individual node prior to starting on the next one.

        `service msys-cassandra start`
    *   After you have started Cassandra service on each node, check the status on any node.

        `service msys-cassandra status`

        You should see all the nodes in the cluster. Something like this:

        ```
        Datacenter: datacenter1
        =======================
        Status=Up/Down
        |/ State=Normal/Leaving/Joining/Moving
        --  Address      Load       Tokens  Owns   Host ID                               Rack
        UN  10.77.0.177  91.92 KB   256     31.2%  fbe23d7b-0c7b-4a45-90bb-20373ff3948b  rack1
        UN  10.77.0.233  110.98 KB  256     35.4%  2713fb8f-b188-4b0b-9d11-b76506e922bc  rack1
        UN  10.77.0.235  111.41 KB  256     33.3%  88a7616c-36b9-4aa0-9ddc-db24ad76115c  rack1
        ```

|     |     |     |
| --- | --- | --- |
| [Prev](new_installation)  | [Up](new_installation) |  [Next](install.analytics_nodes) |
| Chapter 9. New Installation - All Configurations  | [Table of Contents](index) |  9.3. Configure the Analytics Nodes |

