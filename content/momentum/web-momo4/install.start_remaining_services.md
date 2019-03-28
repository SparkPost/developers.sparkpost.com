| [Prev](install.analytics_nodes)  | Chapter 9. New Installation - All Configurations |  [Next](upgrade.single_node) |

## 9.4. Start Remaining Services

### 9.4.1. Analytics Nodes

1.  Start the remaining services on each of the Analytics nodes.

    ### Note

    You will see errors logged if you start the ETL and Webhooks services before the matching API endpoints are configured on the Analytics node(s). These are a result of the back-end API being unavailable and can be safely ignored.

    ```
    # You can check to see what services are currently running using:
    # chkconfig --list

    service msys-nginx start
    service msys-app-metrics-api start
    service msys-app-adaptive-delivery-api start
    service msys-app-users-api start
    service msys-app-webhooks-api start
    ```

2.  On your Analytics nodes, you can check that the Users, Metrics, and Adaptive Delivery APIs are running by using `netstat`.

    ```
    netstat -tulpn | grep 208

    # Should see something like this, with a row for each API/port:
    tcp        0      0 0.0.0.0:2082                0.0.0.0:*                   LISTEN      21416/nginx
    tcp        0      0 0.0.0.0:2083                0.0.0.0:*                   LISTEN      21686/node
    tcp        0      0 0.0.0.0:2084                0.0.0.0:*                   LISTEN      21856/node
    tcp        0      0 0.0.0.0:2085                0.0.0.0:*                   LISTEN      21812/node
    tcp        0      0 0.0.0.0:2086                0.0.0.0:*                   LISTEN      21756/node
    ```

    If you're missing one of the ports/services, then inspect this log directory for the appropriate API log `/var/log/msys-nodejs/`.

### 9.4.2. MTA Nodes

1.  Start the remaining services on each MTA node.

    ```
    # You can check to see what services are currently running using:
    # chkconfig --list
    service msys-app-adaptive-delivery-etl start
    service msys-app-metrics-etl start
    service msys-app-webhooks-etl start
    service msys-riak start
    service ecelerity start
    service msys-nginx start
    ```

### 9.4.3. Create an Administrative User

1.  Create the following administrative user on the first Analytics node. Be sure to substitute appropriate names and a valid email address, and change the password. You may also change the username ("msys_admin") if you wish.

    ```
    export LINE1='"username" : "admin", "password": "EDITME", "access" : "admin"'
    export LINE2='"firstName" : "EDITME", "lastName" : "EDITME", "email" : "EDITME@EDITdomain.com"'
    curl -XPOST -H "X-MSYS-CUSTOMER: 1" -H "Content-Type: application/json" -d \
       "{ $LINE1, $LINE2 }" http://localhost:2085/api/v1/users
    ```

### 9.4.4. Complete the Cassandra Configuration

1.  Modify the `populate_customer_metadata.cql` file on the **first** Cassandra node only.

    Edit `/opt/msys/app/users-api/cql/upgrades/V2015.01.20_02.00.00__populate_customer_metadata.cql`. Remove the `sending_disabled` column. So, the file should look like this:

    `copy customer_meta(customer_id) from '/tmp/customerMetaDataMigration.csv';`
2.  Perform Cassandra schema Application-related updates.

    ```
    export UPG=/opt/msys/app/users-api/cql/upgrades
    export CQLSH=/opt/msys/3rdParty/bin/cqlsh
    $CQLSH -k authentication -f $UPG/V2014.06.11_00.00.00__add_oauth_clients.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2014.12.21_00.00.00__create_user_emails.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2014.12.22_00.00.00__populate_email_users.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.01.20_01.00.00__extract_customers.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.01.20_02.00.00__populate_customer_metadata.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.04.09_00.00.00__create_unsuccessful_logins.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.04.10_00.00.00__two_factor.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.04.28_00.00.00__add_is_sso_column.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.04.28_00.00.00__add_tou_last_updated.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.05.21_00.00.00__create_email_verification_tokens.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.06.16_00.00.00__add_saml_column.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.06.17_00.00.00__add_valid_ip_column.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.06.22_00.00.00__add_last_login_column.cql 2>&1 >> cassandra_schema.log
    ```

3.  You should now be able to login to the UI by placing the IP address of the first Analytics node into a browser's address bar.

|     |     |     |
| --- | --- | --- |
| [Prev](install.analytics_nodes)  | [Up](new_installation) |  [Next](upgrade.single_node) |
| 9.3. Configure the Analytics Nodes  | [Table of Contents](index) |  Chapter 10. Upgrade - Single Node |

