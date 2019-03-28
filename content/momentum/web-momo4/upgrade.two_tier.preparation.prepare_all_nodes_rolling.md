| [Prev](upgrade.two_tier_configuration_rolling)  | Chapter 11. Rolling Upgrade - Two-Tier Configuration and Combined Node |  [Next](upgrade.two_tier.preparation.snapshot_cassandra_rolling) |

## 11.2. Before You Begin the Upgrade

The steps in this section should be done prior to the upgrading your Momentum software. We recommend you perform these steps several days before your planned software upgrade.

### 11.2.1. Preparation and Cassandra Compaction

1.  Consider a Cassandra manual compaction if disk space usage in `/var/db/casssandra/data` is sizeable, even though disk space reclamation is expected from either expiring data or data being explicitly deleted.

    ### Note

    In general, there is a period of two days from data deletion/expiration to disk space reclamation. This is to allow for consistency in the cluster and prevents a situation where deleted data can reappear.

    1.  Check the Cassandra node status on **all platform nodes**                and confirm all nodes are up and normal. For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

        `/opt/msys/3rdParty/cassandra/bin/nodetool status`
    2.  Compact and flush the database on **all platform nodes** . For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

        ```
        /opt/msys/3rdParty/cassandra/bin/nodetool flush
        /opt/msys/3rdParty/cassandra/bin/nodetool compact
        ```

        ### Note

        You can observe the progress of the compaction by using the nodetool `compactionstats` command:

        `/opt/msys/3rdParty/cassandra/bin/nodetool compactionstats`

2.  Prepare the software for the installation.

    1.  Download the Momentum 4.2 software bundle to **all nodes** .

    2.  Untar/unzip the bundle.

        tar -xvzf *`momentum-bundle-4.2.1.50062.rhel6.x86_64.tar.gz`*
    3.  Change to the bundle directory.

        cd *`momentum-4.2.1.50062`*
    4.  Add the local yum repository to upgrade Momentum.

        `./setrepodir -i`

3.  Confirm that the Analytics nodes are adequate for the Vertica upgrade.

    chmod +x validate_vertica_node
    /var/tmp/*`momentum-4.2.1.50062`*/validate_vertica_node

### 11.2.2. Install DB RPMs

1.  Uninstall `msys-app-users` on **all nodes** . Erasing the old RPM ensures there will be no conflict with the new RPM.

    `yum -y erase msys-app-users`
2.  Be sure you have the boost-devel RPMs on **all nodes**       (Platform and Analytics).

    `yum install --disablerepo=* --config momentum.repo --enablerepo=momentum boost-devel`
3.  Install the Analytics DB RPMs.

    1.  Run these commands on the **first Platform node** :

        `yum install --disablerepo=* --config momentum.repo --enablerepo=momentum msys-app-users-db`
        ### Note

        Do not run the following command if you are installing Momentum 4.2.1.11 or later.

        `yum install --disablerepo=* --config momentum.repo --enablerepo=momentum msys-app-webhooks-batch-db`
    2.  Run this command on the **first Analytics node** :

        ```
        yum install --disablerepo=* --config momentum.repo --enablerepo=momentum \
        msys-app-adaptive-delivery-db msys-app-metrics-db msys-app
        ```

### 11.2.3. Vertica Performance Updates

You should perform these steps at a time of low volume. Some services will need to be temporarily stopped, and queues could back up if there is too much activity. Also, pay special attention to the verification steps; some will take longer to complete, and they will need to be verified before moving on.

1.  Run updates to the tuple mover (**first Analytics node only** ).

    ```
    /opt/vertica/bin/vsql -U vertica_dba -f \
    /opt/msys/app/db/scripts/V2015.07.09_14.35.00__update_tuple_mover.sql
    ```

2.  Stop the ETLs and wait for ETL queries to complete on each Platform node (up to a minute should be enough time).

    ```
    /etc/init.d/msys-app-metrics-etl stop
    /etc/init.d/msys-app-webhooks-transmitter stop
    /etc/init.d/msys-app-webhooks-batch stop
    ```

3.  Trigger moveout on the **first Analytics node** .

    `/opt/vertica/bin/vsql -U vertica_dba -c "select do_tm_task('moveout');"`
4.  Monitor/verify the moveout on the **first Analytics node**                to ensure that it contains zeros for all rows in `region_in_use_size_kb`.

    `/opt/vertica/bin/vsql -U vertica_dba -c "select * from wos_container_storage;"`
5.  Run the Write Optimize Store (WOS) resource pool update on the **first Analytics node** .

    `/opt/vertica/bin/vsql -U vertica_dba -f /opt/msys/app/db/scripts/V2015.07.09_14.45.00__update_wos.sql`
6.  Start the ETLs on **all Platform nodes** . For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

    ```
    /etc/init.d/msys-app-metrics-etl start
    /etc/init.d/msys-app-webhooks-transmitter start
    /etc/init.d/msys-app-webhooks-batch start
    ```

7.  Verify the new configuration on the **first Analytics node** .

    ```
    /opt/vertica/bin/vsql -U vertica_dba -c "select get_config_parameter('MoveOutInterval');"
    /opt/vertica/bin/vsql -U vertica_dba -c "select get_config_parameter('MoveOutSizePct');"
    /opt/vertica/bin/vsql -U vertica_dba -c \
    "select plannedconcurrency, maxmemorysize, memorysize from resource_pools where name='wosdata';"
    /opt/vertica/bin/vsql -U vertica_dba -c \
    "select memorysize, maxconcurrency from resource_pools where name='tm';"
    /opt/vertica/bin/vsql -U vertica_dba -c "select * from databases where database_name='msys';"
    ```

    Your results should look something like this:

    ```
    [root@ops-842-1 ~]# /opt/vertica/bin/vsql -U vertica_dba -c "select get_config_parameter('MoveOutInterval');"
     get_config_parameter
    ----------------------
     90
    (1 row)
    [root@ops-842-1 ~]# /opt/vertica/bin/vsql -U vertica_dba -c "select get_config_parameter('MoveOutSizePct');"
     get_config_parameter
    ----------------------
     50
    (1 row)
    [root@ops-842-1 ~]# /opt/vertica/bin/vsql -U vertica_dba -c "select plannedconcurrency, maxmemorysize, memorysize
    from resource_pools where name='wosdata';"
     plannedconcurrency | maxmemorysize | memorysize
    --------------------+---------------+------------
     6                  | 33%           | 33%
    (1 row)
    [root@ops-842-1 ~]# /opt/vertica/bin/vsql -U vertica_dba -c "select memorysize, maxconcurrency from resource_pools
    where name='tm';"
     memorysize | maxconcurrency
    ------------+----------------
     600M       |             15
    (1 row)
    [root@ops-842-1 ~]# /opt/vertica/bin/vsql -U vertica_dba -c "select * from databases where database_name='msys';"
        database_id    | database_name |     owner_id      | owner_name  |          start_time           |  (cont'd below)
    -------------------+---------------+-------------------+-------------+-------------------------------+  (cont'd below)
     45035996273704974 | msys          | 45035996273704962 | vertica_dba | 2015-08-17 13:01:40.135772-04 |  (cont'd below)
    (1 row)

                          compliance_message                      | export_subnet | load_balance_policy
    --------------------------------------------------------------+---------------+---------------------
     The database is in compliance with respect to raw data size. |             0 | none
    (1 row)
    ```

    ### Note

    The last table rows shown above had to be displayed here on two lines due to browser limitations. Your results will be displayed on a single line.

### 11.2.4. msg_events Data Repartition

1.  Stop the metrics-api on the **first Analytics node** .

    `/etc/init.d/msys-app-metrics-api stop`
2.  Run the repartition on the **first Analytics node** . This may take a while.

    ```
    echo "set search_path='momo';\i /opt/msys/app/db/data-migrations/V2015.01.27_14.30.00__repartition_msg_events.sql" | \
       /opt/vertica/bin/vsql -U vertica_dba
    ```

3.  Check the repartition status on the **first Analytics node** .

    1.  Confirm that **msg_events** repartitions are at 100 percent. Each row for column `partition_reorganize_percent` should be at 100\. If they are not, then continue checking every few minutes until they are all reported at 100.

        `/opt/vertica/bin/vsql -U vertica_dba -c "select * from v_monitor.partition_status;"`
        ### Warning

        Attend carefully, particularly if waiting for only one or two rows to complete, as the rows are not always reported in the same order from command to command!

    2.  Confirm your output:

        `/opt/vertica/bin/vsql -U vertica_dba -c "select export_objects('', 'momo.msg_events');" | grep "PARTITION BY"`

        Your results should look something like this:

        ```
        # PARTITION BY (concat(((date_part('year', "timezone"('UTC', msg_events.tdate_hour)))::int)::varchar, \
        # ((date_part('month', "timezone"('UTC', msg_events.tdate_hour)))::int)::varchar));
        ```

        ### Note

        The last table rows shown above had to be displayed here on two lines due to browser limitations. Your results will be displayed on a single line.

    3.  Verify the partition keys are in the format YYYYM(M).

        ```
        /opt/vertica/bin/vsql -U vertica_dba -c \
        "select partition_key from partitions where table_schema = 'momo'"
        ```

        Your results should look something like this:

        ```
        # example output:
        partition_key
        ---------------
         20157
         20157
         20157
         20157
         20157
         20157
         20157
         20157
         20157
         20157
        (10 rows)
        ```

|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier_configuration_rolling)  | [Up](upgrade.two_tier_configuration_rolling) |  [Next](upgrade.two_tier.preparation.snapshot_cassandra_rolling) |
| Chapter 11. Rolling Upgrade - Two-Tier Configuration and Combined Node  | [Table of Contents](index) |  11.3. Perform a Cassandra Snapshot |

