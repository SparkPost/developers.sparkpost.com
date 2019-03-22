| [Prev](node_remove)  | Part II. Installing Momentum |  [Next](node_remove_analytics) |
## Chapter 14. Adding and Removing Analytics Nodes
**Table of Contents**

* [14.1\. Adding an Analytics Node](add_remove_analytics_nodes#node_add_analytics)
* [14.2\. Removing an Analytics Node](node_remove_analytics)

This chapter describes how to add and remove Analytics nodes to and from an existing Momentum 4.2 cluster.
## 14.1. Adding an Analytics Node
Adding an Analytics node (Vertica+Application) to an existing cluster is not handled automatically with the current installer script, but can be accomplished quickly using a role-based meta package and some manual configuration steps.
### Note
These instructions apply to Momentum 4.2.1.*`x`*, where `x` > or = `11`
### 14.1.1. Prepare the New Node
### Note
You can only add additional nodes to an existing analytics cluster; i.e., you cannot add a node if there is only one node to start with.
1.  Unpack the same tarball that was used for the original installation.
2.  Activate the local yum repository.
    **NOTE:** Here, and throughout the node addition and removal documentation, specific releases and revisions shown are just examples, and your appropriate Momentum software bundle will be different.
    ```
    cd momentum-4.2.1.51128
    ./setrepodir
    ```
3.  Install the `msys-role-analytics` metapackage.
    ```
    yum install -y --config=$PWD/momentum.repo --enablerepo=momentum msys-role-analytics msys-app-adaptive-delivery-db \
    msys-app-adaptive-delivery-api msys-app-webhooks-api msys-app-webhooks-db
    # Remove an ETL that is N/A for Analytics nodes in two-tier configurations:
    yum remove -y --config momentum.repo --enablerepo momentum msys-app-adaptive-delivery-etl
    ```
### 14.1.2. Add the Node to the Vertica Cluster and Database
### Note
The first two steps may take a while to complete, depending on how long the database has been up and how much data is present and should be run inside a screen or tmux session.
1.  From the first Analytics node, add the new node to the cluster. You will need the root password for the new node, or alternatively, you must have configured a password-less ssh login or be running ssh-agent.
    ```
    # cd /var/tmp/momentum-4.2.1.51128
    # export NEWNODE=new.host.fully.qualified.name
    # /opt/vertica/sbin/install_vertica --add-hosts $NEWNODE -z silent_install
    ```
    You can find the `silent_install` file in the working directory of the initial installation, or you can create a new one with the following contents:
    ```
    accept_eula = True
    data_dir = /var/db/vertica
    direct_only = True
    failure_threshold = FAIL
    license_file = /opt/vertica/config/licensing/Message_Systems_vertica.license.key
    rpm_file_name = /var/tmp/momentum-4.2.1.51128/packages/msys-vertica-7.1.1-2.rhel6.x86_64.rpm
    spread_subnet = default
    vertica_dba_group = verticadba
    vertica_dba_user = vertica_dba
    vertica_dba_user_dir = /var/db/vertica
    vertica_dba_user_password_disabled = True
    ```
2.  Change to the vertica_dba user and add the new host to the msys database.
    ```
    # su - vertica_dba
    $ export NEWNODE=new.host.fully.qualified.name
    $ adminTools --tool db_add_node --database msys --add=$NEWNODE
    $ adminTools --tool rebalance_data -k 1 -d msys
    ```
3.  Add the storage locations for the new node.
    ```
    #!/bin/bash
    # Setup storage location grants across all hosts
    for ARG in "api/webhooks/WEBHOOK_BATCHES" "etl/etl/ETL"
    do
        IFS='/' ARGS=($ARG)
        USER="vertica_${ARGS[0]}"
        LOCATION="/opt/vertica/log/${ARGS[1]}"
        LABEL=${ARGS[2]}
        IFS=$'\n ' NODES=`/opt/vertica/bin/vsql -c "select node_name from v_catalog.nodes where node_name not in \
            (select node_name from v_monitor.disk_storage where storage_path='$LOCATION') group by node_name;" -t`
        for NODE in $NODES
        do
            echo "Adding storage location $LOCATION for $NODE"
            /opt/vertica/bin/vsql -c "CREATE LOCATION '$LOCATION' NODE '$NODE' USAGE 'USER' LABEL '$LABEL';"
            /opt/vertica/bin/vsql -c "GRANT ALL ON LOCATION '$LOCATION' ON $NODE TO $USER;"
        done
    done
    ```
### 14.1.3. Update and Distribute Configuration Files
1.  Update the following `nginx/conf.d` files on the first Analytics node, adding a line for the new node to each.
    *   `/opt/msys/3rdParty/nginx/conf.d/api_adaptive_delivery_upstream.conf`
    *   `/opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf`
    *   `/opt/msys/3rdParty/nginx/conf.d/api_users_upstream.conf`
    *   `/opt/msys/3rdParty/nginx/conf.d/api_metrics_upstream.conf`
    *   `/opt/msys/3rdParty/nginx/conf.d/webui_upstream.conf`
    Duplicate the following line and change it to the new hostname as appropriate, and set the port to match the existing-node entries in each file.
    *`server new.host.fully.qualified.name:208x;`*
2.  Ensure the node name variables are set for the new node and one for each existing node after the first one.
    ```
    export NEWNODE=new.host.fully.qualified.name;
    export NODE2=host2.fully.qualified.name;
    export NODE3=host3.fully.qualified.name;
    ...
    export NODEn=hostN.fully.qualified.name;
    ```
3.  Update the `production.json` files with the new node.
    ```
    export PATH=/opt/msys/3rdParty/bin/:$PATH
    for f in \
      /opt/msys/app/webhooks-api/config/production.json \
      /opt/msys/app/adaptive-delivery-api/config/production.json \
      /opt/msys/app/adaptive-delivery-api/cron/config/production.json \
      /opt/msys/app/metrics-api/config/production.json \
      /opt/msys/app/metrics-api/cron/config/production.json \
      ; do
      tmpf=$(mktemp --tmpdir=$(dirname $f) -t)
      jq ".vertica.hosts = .vertica.hosts + [\"$NEWNODE\"]" -a -M $f > $tmpf
      if [ $? = 0 ]; then
        mv -f $tmpf $f
        echo "$f updated";
      fi
    done
    ```
4.  Ensure auth API Host and auth API Port are set to `false` in the webui json file.
    ```
    export PATH=/opt/msys/3rdParty/bin/:$PATH
    for f in \
      /opt/msys/app/webui/scripts/config/production.json \
      ; do
      tmpf=$(mktemp --tmpdir=$(dirname $f) -t)
      jq '.auth.apiPort=false | .auth.apiHost=false' $f > $tmpf
      if [ $? = 0 ]; then
        mv -f $tmpf $f
      fi
    done
    ```
5.  Copy the modified configuration files to the original Analytics nodes.
    ```
    for f in \
      /opt/msys/3rdParty/nginx/conf.d/api_adaptive_delivery_upstream.conf \
      /opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf \
      /opt/msys/3rdParty/nginx/conf.d/api_users_upstream.conf \
      /opt/msys/3rdParty/nginx/conf.d/api_metrics_upstream.conf \
      /opt/msys/3rdParty/nginx/conf.d/webui_upstream.conf \
      /opt/msys/app/webhooks-api/config/production.json \
      /opt/msys/app/adaptive-delivery-api/config/production.json \
      /opt/msys/app/adaptive-delivery-api/cron/config/production.json \
      /opt/msys/app/metrics-api/config/production.json \
      /opt/msys/app/metrics-api/cron/config/production.json \
      ; do
      scp $f $NODE2:$f
      scp $f $NODE3:$f
      # add additional scp lines as needed for additional existing nodes
    done
    ```
6.  Restart the services on the original Analytics nodes.
    ```
    service msys-app-metrics-api restart
    service msys-app-users-api restart
    service msys-app-webhooks-api restart
    service msys-app-adaptive-delivery-api restart
    service msys-nginx reload
    ```
7.  Copy all configuration files to the new Analytics node.
    ```
    for f in $(find /opt/msys/app/ -name production.json) ; do
      scp $f $NEWNODE:$f
    done
    scp /opt/msys/3rdParty/nginx/conf.d/* $NEWNODE:/opt/msys/3rdParty/nginx/conf.d/
    ```
8.  Start all services on the new Analytics node.
    ```
    service msys-app-metrics-api start
    service msys-app-users-api start
    service msys-app-webhooks-api start
    service msys-app-adaptive-delivery-api start
    service msys-nginx start
    ```
### 14.1.4. Update all Platform/MTA Nodes (not Manager/Log Aggregator)
1.  Update the `/opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf` file on all MTA nodes by duplicating the following line and changing it to the new hostname as appropriate, and set the port to match the existing-node entries in each file.
    *`server new.host.fully.qualified.name:208x;`*
2.  Update the `production.json` files on all MTA nodes.
    ```
    export PATH=/opt/msys/3rdParty/bin/:$PATH
    for f in \
      /opt/msys/app/metrics-etl/config/production.json \
      /opt/msys/app/webhooks-etl/config/production.json \
      /opt/msys/app/adaptive-delivery-etl/config/production.json \
      ; do
      tmpf=$(mktemp --tmpdir=$(dirname $f) -t)
      jq ".vertica.hosts = .vertica.hosts + [\"$NEWNODE\"]" -a -M $f > $tmpf
      if [ $? = 0 ]; then
        mv -f $tmpf $f
        echo "$f updated";
      fi
    done
    ```
3.  Ensure the node name variables are set.
    ```
    export MTA2=host2.fully.qualified.name;
    export MTA3=host3.fully.qualified.name;
    ...
    export MTAn=hostN.fully.qualified.name;
    ```
4.  Copy the modified configuration files to the original Platform nodes.
    ```
    for f in \
      /opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf \
      /opt/msys/app/metrics-etl/config/production.json \
      /opt/msys/app/webhooks-etl/config/production.json \
      /opt/msys/app/adaptive-delivery-etl/config/production.json \
      ; do
      scp $f $MTA2:$f
      scp $f $MTA3:$f
      # add additional scp lines as needed for additional existing nodes
    done
    ```
5.  Restart all affected services.
    ```
    service msys-app-metrics-etl restart
    service msys-app-webhooks-etl restart
    service msys-nginx reload
    ```
| [Prev](node_remove)  | [Up](p.installing) |  [Next](node_remove_analytics) |
| 13.2. Removing a Platform Node  | [Table of Contents](index) |  14.2. Removing an Analytics Node |
