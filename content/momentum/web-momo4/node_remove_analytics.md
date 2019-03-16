| [Prev](add_remove_analytics_nodes)  | Chapter 14. Adding and Removing Analytics Nodes |  [Next](p.configuration) |

## 14.2. Removing an Analytics Node

To remove an Analytics node (Vertica+Application) from a cluster, follow the documentation provided by HP on removing a Vertica node, removing all NGINX upstream references, and removing references in API configurations.

### Note

You cannot remove nodes that are critical for K-safety. For more information, see [ HP Vertica documentation](https://my.vertica.com/docs/7.1.x/HTML/Content/Authoring/Glossary/K-Safety.htm).

### Note

These instructions apply to Momentum 4.2.1.*`x`*, where `x` > or = `11`

### 14.2.1. Update Configuration Files on all Platform/MTA/Log Aggregator Nodes

1.  From the first platform node, remove the application node from the "upstream api_webhooks" stanza in the `/opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf` file.

2.  Set the node variable to the FQDN of the application node being removed. Do the same for the other MTA nodes in the cluster. (This example assumes there are three platform nodes in the cluster, but all should be provided here.)

    ```
    export NODE=remove.app.node.fully.qualified.name;
    export MTA2=plat2.fully.qualified.name;
    export MTA3=plat3.fully.qualified.name;
    ```

3.  Update the `production.json` files on all platform nodes.

    ```
    export PATH=/opt/msys/3rdParty/bin/:$PATH
    for f in \
      /opt/msys/app/metrics-etl/config/production.json \
      /opt/msys/app/webhooks-etl/config/production.json \
      /opt/msys/app/adaptive-delivery-etl/config/production.json \
      ; do
      tmpf=$(mktemp --tmpdir=$(dirname $f) -t)
      jq "del(.vertica.hosts[] | select(.==\"$NODE\"))" -a -M $f > $tmpf
      if [ $? = 0 ]; then
        mv -f $tmpf $f
        echo "$f updated";
      fi
    done
    ```

4.  Copy the modified configuration files to all remaining platform nodes (provide more or fewer hostname variables as needed).

    ```
    for f in \
      /opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf \
      /opt/msys/app/metrics-etl/config/production.json \
      /opt/msys/app/webhooks-etl/config/production.json \
      /opt/msys/app/adaptive-delivery-etl/config/production.json \
      ; do
      scp $f $MTA2:$f
      scp $f $MTA3:$f
    done
    ```

5.  Restart all affected services on each platform node.

    ```
    service msys-app-metrics-etl restart
    service msys-app-webhooks-etl restart
    service msys-nginx reload
    ```

### 14.2.2. Update Configuration Files on Remaining Application Nodes

1.  Remove the application node from the "upstream" stanzas in the following `nginx/conf.d` files on the first application node.

    *   `/opt/msys/3rdParty/nginx/conf.d/api_adaptive_delivery_upstream.conf`

    *   `/opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf`

    *   `/opt/msys/3rdParty/nginx/conf.d/api_users_upstream.conf`

    *   `/opt/msys/3rdParty/nginx/conf.d/api_metrics_upstream.conf`

    *   `/opt/msys/3rdParty/nginx/conf.d/webui_upstream.conf`

2.  Set the node variable to the FQDN of the application node being removed. Do the same for the other application nodes in the cluster. (This example assumes there are currently four application nodes in the cluster, but all should be provided here.)

    ```
    export NODE=remove.app.node.fully.qualified.name; 
    export NODE2=app2.fully.qualified.name; 
    export NODE3=app3.fully.qualified.name;
    ```

3.  Update the `production.json` files on all application nodes.

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
      jq "del(.vertica.hosts[] | select(.==\"$NODE\"))" -a -M $f > $tmpf
      if [ $? = 0 ]; then
        mv -f $tmpf $f
        echo "$f updated";
      fi
    done
    ```

4.  Copy the modified configuration files to the original Analytics nodes.

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
    done
    ```

5.  Restart the services on all remaining application nodes.

    ```
    service msys-app-metrics-api restart
    service msys-app-users-api restart
    service msys-app-webhooks-api restart
    service msys-nginx reload
    ```

### 14.2.3. Remove the Node from the Vertica Cluster

1.  Follow [instructions provided by HP](https://my.vertica.com/docs/7.1.x/HTML/Content/Authoring/AdministratorsGuide/ManageNodes/RemovingNodesFromADatabase.htm) to remove a Vertica node from a cluster.

2.  Perform backups as necessary.

| [Prev](add_remove_analytics_nodes)  | [Up](add_remove_analytics_nodes) |  [Next](p.configuration) |
| Chapter 14. Adding and Removing Analytics Nodes  | [Table of Contents](index) |  Part III. Configuring Momentum |

