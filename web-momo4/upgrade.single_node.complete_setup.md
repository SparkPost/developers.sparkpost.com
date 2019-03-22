| [Prev](upgrade.single_node.configuration.start_services)  | Chapter 10. Upgrade - Single Node |  [Next](upgrade.single_node.configuration.next_steps) |

## 10.8. Complete the Software Set Up

1.  Complete the Vertica setup.

    1.  Open vsql.

        `/opt/vertica/bin/vsql -U vertica_dba`
    2.  Run the following commands. This creates projections in Vertica so that queries can be optimized and executed more quickly, and also converts domain names to lowercase to simplify searching.

        ```
        set search_path='momo';
        \i /opt/msys/app/db/projections/multinode_sql/latest_metrics_projection.sql
        \i /opt/msys/app/db/projections/multinode_sql/latest_ad_projections.sql
        \i /opt/msys/app/db/data-migrations/V2015.02.17_14.21.00__migrate_lc_domain.sql
        ```

    3.  Quit vsql.

        `\q`

2.  Complete the Adaptive Delivery API setup.

    1.  Create or update the `/opt/msys/app/adaptive-delivery-api/config/production.json` file to configure the Adaptive Delivery API.

        ```
        {
           "vertica": {
             "hosts": [
              "127.0.0.1"
             ]
           }
        }
        ```

    2.  Create or update the `/opt/msys/3rdParty/nginx/conf.d/api_adaptive_delivery_upstream.conf` file to configure nginx. Enter your password when prompted.

        # This example configures nginx on 2 nodes to listen on port 2086
         upstream api_adaptive_delivery {
          server <*`node 1 hostname`*            >:2086;
          least_conn;
        }
    3.  Edit the nginx `/opt/msys/3rdParty/nginx/conf.d/web_proxy.conf` configuration file. Find these lines of code...

        ```
        location /api/v1/metrics {
            proxy_pass http://api_metrics;
            include "../conf.d/default.cors";
        }
        ```

        ...and add these lines immediately after:

        ```
        location /api/v1/adaptive-delivery {
            proxy_pass http://api_adaptive_delivery;
            include "../conf.d/default.cors";
        }

        location /api/v1/metrics/domains {
            more_set_headers 'Cache-Control: public, max-age=86400';
            proxy_pass http://api_metrics;
            include "../conf.d/default.cors";
        }
        ```

    4.  Start the Adaptive Delivery API.

        `/etc/init.d/msys-app-adaptive-delivery-api start`
    5.  Test the nginx configuration.

        `/etc/init.d/msys-nginx configtest`

        If there are no errors, restart nginx.

        `/etc/init.d/msys-nginx restart`

3.  Complete the Adaptive Delivery ETL setup.

    1.  Start the Adaptive Delivery ETL.

        ### Note

        There are no configuration steps for the Adaptive Delivery ETL for the single node install.

        `/etc/init.d/msys-app-adaptive-delivery-etl start`
    2.  Test the nginx configuration.

        `service msys-nginx configtest`

        If there are no errors, restart nginx.

        `service msys-nginx restart`

4.  Clean up your configuration files. Remove all occurrences of `application.vertica|cassandra` from the following files (this is now in the root of all configurations).

    *   `/opt/msys/app/webhooks-api/config/production.json`

    *   `/opt/msys/app/metrics-api/config/production.json`

    *   `/opt/msys/app/metrics-etl/config/production.json`

    ```
    {
        "application": {
            //if this exists, remove it
            "vertica": {
                "hosts": [
                    //host names
                    ]
                }
            , 
            //if this exists, remove it
            "cassandra": {
                "hosts": [
                    //host names
                    ]
                }
        },

        "vertica": {
            //this stanza was added earlier and is now relied on.
        }
    }
    ```

| [Prev](upgrade.single_node.configuration.start_services)  | [Up](upgrade.single_node) |  [Next](upgrade.single_node.configuration.next_steps) |
| 10.7. Start Services  | [Table of Contents](index) |  10.9. Next Steps |

