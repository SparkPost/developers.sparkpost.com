| [Prev](install.configure_cassandra)  | Chapter 9. New Installation - All Configurations |  [Next](install.start_remaining_services) |

## 9.3. Configure the Analytics Nodes

### 9.3.1. Configure the First Analytics Node

1.  To help configure NGINX on Application nodes, copy the sample configuration files **from any MTA node** to the **first Application node**                  only (which is arbitrary).

    ```
    ssh -l root analytics1.yourdomain.com mkdir -p /opt/msys/ecelerity/etc
    scp -r /opt/msys/ecelerity/etc/sample-configs analytics1.yourdomain.com:/opt/msys/ecelerity/etc
    ```

**9.3.1.1. Provide Database Configuration for APIs**

1.  On the first Analytics node, configure the files that provide server information about Vertica and/or Cassandra nodes for use by various APIs. These four files, along with the database host that they need to provide, are listed below:

    *   `/opt/msys/app/adaptive-delivery-api/config/production.json` - Provides Vertica host names.

    *   `/opt/msys/app/metrics-api/config/production.json` - Provides Vertica host names.

    *   `/opt/msys/app/webhooks-api/config/production.json` - Provides Vertica and Cassandra host names.

    *   `/opt/msys/app/users-api/config/production.json` - Provides Vertica and Cassandra host names.

    Be sure each of your files look like the samples below, with appropriate servers substituted.

    ### Note

    Your final `production.json` files must not have any comment lines in them, and the last line within the `hosts` stanzas must not have a comma at the end.

    ```
    #  Configure Vertica hosts for the adaptive-delivery-api and metrics-api
    #  Example for metrics-api
    #  Repeat for adaptive-delivery-api
    #  cat > /opt/msys/app/metrics-api/config/production.json
    {
      "vertica": {
        "hosts": [
          "analytics1.yourdomain.com",
          "analytics2.yourdomain.com",
          ...
          "analyticsN.yourdomain.com"      
        ]
      }
    }
    ```

    ```
    #  Configure Cassandra and Vertica hosts for the webhooks-api
    #  cat > /opt/msys/app/webhooks-api/config/production.json
    {
      "vertica": {
        "hosts": [
          "analytics1.yourdomain.com",
          "analytics2.yourdomain.com",
          ...
          "analyticsN.yourdomain.com"      
        ]
      },
      "cql": {
        "contactPoints": [
          "cassnode1.yourdomain.com",
          "cassnode2.yourdomain.com",
           ...
          "cassnodeN.yourdomain.com"
        ]
      }
    }
    ```

    ```
    #  Configure Cassandra hosts for the users-api
    #  cat > /opt/msys/app/users-api/config/production.json
    {
      "cassandra": {
        "hosts": [
          "cassnode1.yourdomain.com",
          "cassnode2.yourdomain.com",
           ...
          "cassnodeN.yourdomain.com"
        ]
      }
    }
    ```

2.  Configure the Web UI.

    1.  Copy `default.json` to `production.json`.

        `cp /opt/msys/app/webui/scripts/config/default.json /opt/msys/app/webui/scripts/config/production.json`
    2.  Edit `production.json` to be sure that the following options are set in the `auth` stanza:

        `enabled=true, apiHost=false, apiPort=false`
    3.  Ensure that `enabled=true` is set in the `adaptiveDelivery` stanza. The auth and adaptiveDelivery stanzas should look like this:

        ```
        "auth" : {
            "enabled": true,
            "cookieDuration": 1209600,
            "apiPort" : false,
            "apiHost" : false,
            "apiPrefix" : "/api/v1"
          },
          "adaptiveDelivery" : {
            "enabled": true,
            "apiPort" : false,
            "apiHost" : false,
            "apiPrefix" : "/api/v1/adaptive-delivery"
          }
        ```

**9.3.1.2. Configure NGINX Analytics Routing**

On the Application nodes, an NGINX process acts as a proxy/load balancer for various API endpoints.

In the following steps you will create and/or edit the following files:

*   `/opt/msys/3rdParty/nginx/conf.d/momo_upstream.conf`(port 2081)

*   `/opt/msys/3rdParty/nginx/conf.d/webui_upstream.conf`(port 2082)

*   `/opt/msys/3rdParty/nginx/conf.d/api_metrics_upstream.conf`(port 2083)

*   `/opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf`(port 2084)

*   `/opt/msys/3rdParty/nginx/conf.d/api_users_upstream.conf`(port 2085)

*   `/opt/msys/3rdParty/nginx/conf.d/api_adaptive_delivery_upstream.conf`(port 2086)

In each file, you will edit the associated “upstream stanza.” Take special note of the corresponding ports that are used in each configuration file in parentheses above.

### Note

If you are installing a Combined nodes cluster, you will already have performed some of these steps during the [Section 9.1, “Configure Your MTA Nodes”](new_installation#install.mta_node "9.1. Configure Your MTA Nodes") section.

1.  Copy the files above from the `/opt/msys/ecelerity/etc/sample-configs/nginx/` directory to the `/opt/msys/3rdParty/nginx/conf.d` directory.

2.  The `momo_upstream.conf` file determines the routing for incoming REST requests that need to be routed to Platform/MTA nodes. Edit the `upstream momo` stanza to point to **all MTA nodes**           on port 2081.

    # Example
    # cat > /opt/msys/3rdParty/nginx/conf.d/momo_upstream.conf
    upstream momo-rest {
       server *`mta1.yourdomain.com`*:2081;
       server *`mta2.yourdomain.com`*:2081;
           ...
       server mtaN.yourdomain.com:2081;
       least_conn;
    }
3.  Edit the remaining `*_upstream.conf` files as follows. Configure the associated `upstream *` stanzas by listing all the Analytics nodes in your cluster, along with the proper port (shown in parentheses above). These configuration files determine the routing for incoming API calls.

    For example, edit the `upstream api_webhooks` stanza to include **all Analytics nodes**                 so that incoming Webhooks API requests get properly routed to Analytics nodes on port 2084\. The remaining files are nearly identical except for the name of the upstream stanza and the port associated with the server.

    # Example
    # cat > /opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf
    upstream api_webhooks {
       server *`analytics1.yourdomain.com`*:2084;
       server *`analytics2.yourdomain.com`*:2084;
           ...
       server analyticsN.yourdomain.com:2084;
       least_conn;
    }
4.  After you have properly configured the NGINX files above, test the nginx configuration.

    `service msys-nginx configtest`

    Your results should look like this:

    ```
    nginx: the configuration file /opt/msys/3rdParty/nginx/conf/nginx.conf syntax is ok
    nginx: configuration file /opt/msys/3rdParty/nginx/conf/nginx.conf test is successful
    ```

### 9.3.2. Configure the Remaining Analytics Nodes by Copying Files

Copy these configuration files from the FIRST Analytics node to each of the remaining Analytics nodes.

*   `/opt/msys/3rdParty/nginx/conf.d/momo_upstream.conf`

*   `/opt/msys/3rdParty/nginx/conf.d/webui_upstream.conf`

*   `/opt/msys/3rdParty/nginx/conf.d/api_metrics_upstream.conf`

*   `/opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf`

*   `/opt/msys/3rdParty/nginx/conf.d/api_users_upstream.conf`

*   `/opt/msys/3rdParty/nginx/conf.d/api_adaptive_delivery_upstream.conf`

*   `/opt/msys/app/webui/scripts/config/production.json`

*   `/opt/msys/app/adaptive-delivery-api/config/production.json`

*   `/opt/msys/app/metrics-api/config/production.json`

*   `/opt/msys/app/webhooks-api/config/production.json`

*   `/opt/msys/app/users-api/config/production.json`

### 9.3.3. Configure Vertica

Follow the steps below to create the Vertica database on the first Analytics node.

1.  Configure an environment variable prior to running the Vertica installer. Use the **IP addresses**           for each Vertica node in your deployment. These should be the same IP addresses that you configured in step [4](install_upgrade_packages#install_upgrade_packages.vertica_ips) of [Chapter 8, *Install / Upgrade the Packages*](install_upgrade_packages "Chapter 8. Install / Upgrade the Packages") .

    export SERVERS=*`1.2.3.1`*,*`1.2.3.2`*, ... ,*`1.2.3.n`*
2.  Create the database.

    ```
    su -l vertica_dba -c "/opt/vertica/bin/admintools --tool create_db \
    --hosts=$SERVERS --database=msys" 2>&1 | tee -a vertica_install.log
    ```

    ### Note

    This may take a few minutes.

3.  Go to the database directory.

    ```
    cd /opt/msys/app/db
    chmod 777 scripts/*.sh
    su vertica_dba
    ```

4.  Configure the tables by running the Flyway data migration tool.

    ```
    /opt/msys/app/db/flyway migrate -user=vertica_dba \
      -configFile=/opt/msys/app/db/conf/flyway.properties \
      -outOfOrder=true -schemas=momo -placeholders.schema=momo \
      -placeholders.api_user=vertica_api -placeholders.etl_user=vertica_etl \
      -locations=filesystem:/opt/msys/app/db/schema -jarDirs= -q
    ```

    ### Note

    Flyway will run a series of scripts, after which you may receive warnings of type 'Error SQL State: 42611 - Error Code: 6100' and/or regarding using `outOfOrder` mode. These are about best practices from Vertica and can safely be ignored as they do not apply once the scripts have run.

5.  Configure the storage locations.

    ```
    ./scripts/metrics_storage_location.sh
    ./scripts/webhooks_storage_location.sh
    ```

6.  Set a configuration parameter.

    `/opt/vertica/bin/vsql -U vertica_dba -c "SELECT set_config_parameter('MergeOutInterval', 180);"`
7.  Run the updates to the tuple mover.

    `/opt/vertica/bin/vsql -U vertica_dba -f /opt/msys/app/db/scripts/V2015.07.09_14.35.00__update_tuple_mover.sql`
8.  Trigger move out.

    `/opt/vertica/bin/vsql -U vertica_dba -c "select do_tm_task('moveout');"`
9.  Monitor and verify the move out (all rows in `region_in_use_size_kb` should contain zeroes).

    `/opt/vertica/bin/vsql -U vertica_dba -c "select * from wos_container_storage;"`
10.  Run the Write Optimize Store (WOS) resource pool update.

    `/opt/vertica/bin/vsql -U vertica_dba -f /opt/msys/app/db/scripts/V2015.07.09_14.45.00__update_wos.sql`
11.  Run the repartition.

    ```
    echo "set search_path='momo';\\i /opt/msys/app/db/data-migrations/V2015.01.27_14.30.00__repartition_msg_events.sql" | \
        /opt/vertica/bin/vsql -U vertica_dba
    ```

12.  Configure projections.

    If you have **more than one Vertica node** , run the following command:

    `export VERT_MULTI_OR_SINGLE=multinode`

    If you are running a **single Vertica node** , run this command:

    `export VERT_MULTI_OR_SINGLE=singlenode`

    Configure the projections:

    ```
    echo "set search_path='momo';\\i /opt/msys/app/db/projections/${VERT_MULTI_OR_SINGLE}_sql/latest_metrics_projection.sql" | \
       /opt/vertica/bin/vsql -U vertica_dba
    echo "set search_path='momo';\\i /opt/msys/app/db/projections/${VERT_MULTI_OR_SINGLE}_sql/latest_webhooks_projection.sql" | \
       /opt/vertica/bin/vsql -U vertica_dba
    echo "set search_path='momo';\\i /opt/msys/app/db/projections/${VERT_MULTI_OR_SINGLE}_sql/latest_ad_projections.sql" | \
       /opt/vertica/bin/vsql -U vertica_dba
    ```

13.  Ensure that Vertica will successfully restart during future system reboots.

    `/opt/vertica/bin/admintools -t set_restart_policy -d msys --policy always`
14.  Exit the Vertica database administrator user bash session.

    `exit`

| [Prev](install.configure_cassandra)  | [Up](new_installation) |  [Next](install.start_remaining_services) |
| 9.2. Configure the Cassandra Nodes  | [Table of Contents](index) |  9.4. Start Remaining Services |

