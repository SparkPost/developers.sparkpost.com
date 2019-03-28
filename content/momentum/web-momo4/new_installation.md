|     |     |     |
| --- | --- | --- |
| [Prev](install_upgrade_packages)  | Part II. Installing Momentum |  [Next](install.configure_cassandra) |
## Chapter 9. New Installation - All Configurations
**Table of Contents**

* [9.1\. Configure Your MTA Nodes](new_installation#install.mta_node)
* [9.2\. Configure the Cassandra Nodes](install.configure_cassandra)
* [9.3\. Configure the Analytics Nodes](install.analytics_nodes)
* [9.4\. Start Remaining Services](install.start_remaining_services)

### Warning
**The installation and upgrade instructions in Chapters 8 through 11 are only applicable in their entirety for Momentum 4.x releases prior to 4.2.28.**                                                                                                                                                 For release 4.2.28 and beyond, please refer to the installation and upgrade PDF documents available under the desired release's folder on the Message Systems Support website's [Downloads page](https://support.messagesystems.com/start/). If you are uncertain as to which document is applicable to your situation, please contact your technical support representative.
This section documents the installation procedures for use in either a local or Amazon Web Services (AWS) environment. This installation can be scaled for a variety of installation configurations, including singlenode, a cluster with three combined Platform and Analytics nodes, and two-tiered topologies that have multiple Platform and multiple, separate Analytics nodes.
**NOTE:** If you are installing a **three node combined (or similar) topology** , each node serves all roles: each node is an MTA node **and** a Cassandra node **and** an Analytics node.
## 9.1. Configure Your MTA Nodes
### 9.1.1. Configuration Preparation Steps for the First MTA
The first node in a cluster requires the installation and configuration of some additional services. It is also a convenient place to set up stub files that will make the rest of the configuration go much faster.
1.  Ensure you have valid Momentum licenses installed on each system in `/opt/msys/ecelerity/etc/license`. If your license has been issued and your server has external connectivity, you can run the following command to pull your license:
    `/opt/msys/ecelerity/bin/ec_lic`
    For more information, see [Section 6.1, “Momentum License”](before_you_begin#byb.msg.gen.license "6.1. Momentum License").
2.  Execute the commands below to create a random service password file named `.svcpasswd` that can be used by the various services to access the database. The commands will store the password in a file on the disk on the first node, then have you copy it to **all** Platform nodes (in the same location).
    Additionally, logging into the console remotely or making manual changes and committing them to the shared config repository requires an additional username/password combination. By convention, this user is "admin" but you can use any username you want by making the appropriate change in the below `export ADMINPASS` commands:
    Execute the following commands on the first MTA node only:
    mkdir -p /opt/msys/etc
    < /dev/urandom tr -dc _A-Z-a-z-0-9 | head -c8 \
      > /opt/msys/etc/.svcpasswd
    export SVCPASSWD=`cat /opt/msys/etc/.svcpasswd`
    export ADMINPASS=admin
    Execute the following commands on each of the remaining MTA nodes::
    mkdir -p /opt/msys/etc
    scp -p *`mta1.yourdomain.com`*:/opt/msys/etc/.svcpasswd /opt/msys/etc
    export SVCPASSWD=`cat /opt/msys/etc/.svcpasswd`
    export ADMINPASS=admin
3.  Create the PostgreSQL database host file. Ecelerity requires a PostgreSQL database for console authentication and other minor modules. This is a very low usage database that is installed on the first node for simplicity.
    `echo $HOSTNAME > /opt/msys/etc/.dbhost`
4.  Configure PostgreSQL with the `ecelerity` schema.
    ```
    service msyspg start
    sleep 40
    cd /opt/msys/ecelerity/etc
    ../bin/init_schema --password $SVCPASSWD --admin-password $ADMINPASS
    ```
    You should see something like this:
    ```
    Loading sql/common.sql into common...done!
    Loading sql/console.sql into console...done!
    Loading sql/returnpath.sql into returnpath...done!
    Loading sql/seedlist.sql into seedlist...done!
    Loading sql/adaptive.sql into adaptive...done!
    ```
    ### Note
    If there were any problems creating the ecelerity database in PostgreSQL invoke:
    `/opt/msys/3rdParty/bin/dropdb -U ecuser ecelerity`
    Then try to run `init_schema` again.
### 9.1.2. Configure Ecelerity
In this section's following numbered steps, you will configure Ecelerity **on the first node only** .
*   Start the Ecelerity configuration server, `ecconfigd`.
    `ecconfigd` is used with `eccfg` to maintain a clusterwide configuration using Subversion (and Apache). The ecconfigd server is installed on the first MTA node and does not rely on any other service being installed or active.
*   Check out (bootstrap) the initial ecelerity configuration.
*   Modify the cluster configuration (unless you are installing a Single Node).
*   Configure message generation.
*   Create the ecdb datasource.
    ### Note
    If you are going to manage the cluster-wide configuration with your own management tools, continue with the instructions to configure the first Platform node using `ecconfigd`. Then disable `eccfg` and `ecconfigd`, import the files into your management package, and ensure that the configuration is identical on all Platform nodes.
1.  Configure and start ecconfigd.
    1.  Edit `/opt/msys/ecelerity/etc/ecconfigd.conf`.
        Replace
        `UseCanonicalName DNS`
        with
        ServerName *`mta1.yourdomain.com`*
        and comment out the following line:
        `Include "/opt/msys/etc/installer/ecconfigd.d/*.conf"`
    2.  Copy the service password to your clipboard so that is it easily accessible for upcoming commands.
        `echo $SVCPASSWD`
    3.  Format the password for Subversion. Enter or paste the service password when prompted.
        ```
        /opt/msys/ecelerity/bin/create_ssl_cert ecconfigd $HOSTNAME /var/ecconfigd/apache
        # htdigest prompts for the password twice and does not support shell redirection
        # make sure you copied the service password into your clipboard, i.e. the
        # contents of $SVCPASSWD, which we just copied above
        /opt/msys/3rdParty/apache/sbin/htdigest -c /var/ecconfigd/repo/svn-auth.htdigest \
          "ecconfigd repo" ecuser
        ```
    4.  Configure the admin user. Enter or paste the admin password when prompted.
        ```
        # Use your admin password here (typically "admin", i.e. the contents of $ADMINPASS)
        echo $ADMINPASS
        /opt/msys/3rdParty/apache/sbin/htdigest /var/ecconfigd/repo/svn-auth.htdigest \
          "ecconfigd repo" admin
        ```
    5.  Start up the ecconfigd service to complete the ecconfigd setup.
        `service ecconfigd start`
2.  Bootstrap the initial ecelerity configuration repository.
    1.  Set the proper permissions on the directory
        ```
        cd /opt/msys/ecelerity/etc
        chmod g+ws .
        ```
    2.  If you are installing multiple MTA nodes, then invoke
        ```
        /opt/msys/ecelerity/bin/eccfg bootstrap --clustername default \
          --username admin --password $ADMINPASS
        ```
        Otherwise, if you are installing a singlenode instance, then invoke
        ```
        /opt/msys/ecelerity/bin/eccfg bootstrap --singlenode \
          --username admin --password $ADMINPASS
        ```
        Your results should look like this:
        ```
        A    /opt/msys/ecelerity/etc/conf/default
        A    /opt/msys/ecelerity/etc/conf/default/ecelerity.conf
        A    /opt/msys/ecelerity/etc/conf/default/mobile.conf
        A    /opt/msys/ecelerity/etc/conf/default/common.conf
        A    /opt/msys/ecelerity/etc/conf/default/eccluster.conf
        A    /opt/msys/ecelerity/etc/conf/default/messagescope.conf
        A    /opt/msys/ecelerity/etc/conf/default/messagescope_remediation.conf
        A    /opt/msys/ecelerity/etc/conf/default/ecelerity-cluster.conf
        ```
        ### Note
        If there is an error during this step, you can move the `/opt/msys/ecelerity/etc/conf` to a different location such as `/tmp`, try to correct possible errors above and try to bootstrap a second time.
3.  Update the `msgc_server.conf` cluster configuration file.
    ### Note
    Skip this step if you are installing a single node instance.
    1.  Copy the `msgc_server.conf` file to the appropriate location.
        `cp /opt/msys/ecelerity/etc/sample-configs/default/msgc_server.conf /opt/msys/ecelerity/etc/conf/global/`
    2.  Edit the following lines in `/opt/msys/ecelerity/etc/conf/global/msgc_server.conf`. For EACH MTA node that you are installing, substitute the hostnames and IP addresses as appropriate.
        ```
        msgc_server {
           peers = [
             mta1.yourdomain.com = "10.77.0.219"
             mta2.yourdomain.com = "10.77.1.6"
               ...
             mtaN.yourdomain.com = "10.77.1.10"
           ]
        }
        ```
4.  Update the `msg_gen.conf` configuration file.
    1.  Copy the `msg_gen.conf` file to the appropriate location.
        `cp /opt/msys/ecelerity/etc/sample-configs/default/msg_gen.conf /opt/msys/ecelerity/etc/conf/default/`
    2.  Edit the following lines in the `cassandra_client` stanza in `/opt/msys/ecelerity/etc/conf/default/msg_gen.conf`, substituting your **Cassandra hostnames**           (which may be the same hostnames as your MTA nodes) as appropriate.
        cassandra_client {
          uri = (
                 "name=cassandra_db;host=*`cass1.yourdomain.com`*;port=9160"
                 "name=cassandra_db;host=*`cass2.yourdomain.com`*;port=9160"
                    ...
                 "name=cassandra_db;host=*`cassN.yourdomain.com`*;port=9160"
          )
        }
        In the same file, edit the following lines in the `msg_gen` stanza, again substituting your hostnames as appropriate.
        msg_gen {
          engagement_tracking_host = "__EXTERNAL_DNS_HOSTNAME__:81"
          cluster_cfg = true
          node *`mta1.yourdomain.com`* { mta_id = 1  votes = 1 }
          node *`mta2.yourdomain.com`* { mta_id = 2  votes = 1 }
             ...
          node *`mtaN.yourdomain.com`* { mta_id = n  votes = 1 }
        }
5.  Update the `eccluster.conf` file.
    1.  Create an `/opt/msys/ecelerity/etc/conf/default/ecdb.conf` with the database source information.
        ```
        cat << EOT > /opt/msys/ecelerity/etc/conf/default/ecdb.conf
        Datasource "ecdb" { uri = ( "pgsql:host=$HOSTNAME;dbname=ecelerity;user=ecuser;password=$SVCPASSWD" ) }
        EOT
        ```
    2.  Replace the following line in the `/opt/msys/ecelerity/etc/conf/default/eccluster.conf` file:
        `readonly_include "/opt/msys/etc/installer/eccmgr.d/ecdb.conf"`
        With this line:
        `readonly_include "ecdb.conf"`
6.  Update the `/opt/msys/ecelerity/etc/conf/default/ecelerity.conf` configuration file and commit to the repository.
    1.  Replace this line:
        `readonly_include "/opt/msys/etc/installer/ecelerity.d/"`
        With this line:
        `readonly_include "ecdb.conf"`
    2.  Remove the comment character (#) in these TWO lines.
        ### Note
        If you are performing a singlenode install, then you should only uncomment the `msg_gen.conf` line.
        ```
        # include “msg_gen.conf"
        # include "ecelerity-cluster.conf”
        ```
    3.  Commit the changes.
        ```
        /opt/msys/ecelerity/bin/eccfg commit --username admin --password $ADMINPASS \
            --add-all --message "Including cluster config and msg_gen config"
        ```
7.  Test the ecelerity configuration. Hit Enter at the first Password: prompt, then enter your admin/ADMINPASS user name and password when prompted.
    ```
    $  /opt/msys/ecelerity/bin/ec_console shim://
    # hit enter to get a Username: prompt and use admin/ADMINPASS
    # Once you are logged-in you should get a ">" prompt, and be able to type many commands such
    # as "version" and "summary"
    quit
    ```
### 9.1.3. Configure RabbitMQ
Configure RabbitMQ **on all MTA nodes** .
1.  Configure RabbitMQ.
    ```
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
### 9.1.4. Configure NGINX
On the MTA nodes, an NGINX process acts as a proxy/load balancer for various API endpoints. In this section, you will configure NGINX for the MTAs. You will create and/or edit the following files on the first MTA node, and then copy selected ones to the remaining MTA nodes. If you are installing on combined (MTA + Analytics) nodes, remember that every node in the cluster is both an MTA and an Analytics node.
*   `/opt/msys/3rdParty/nginx/conf.d/click_proxy_upstream.conf` (port 2081)
*   `/opt/msys/3rdParty/nginx/conf.d/momo_upstream.conf` (port 2081)
*   `/opt/msys/3rdParty/nginx/conf.d/webui_upstream.conf` (port 2082)
*   `/opt/msys/3rdParty/nginx/conf.d/api_metrics_upstream.conf` (port 2083)
*   `/opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf` (port 2084)
*   `/opt/msys/3rdParty/nginx/conf.d/api_users_upstream.conf` (port 2085)
*   `/opt/msys/3rdParty/nginx/conf.d/api_adaptive_delivery_upstream.conf` (port 2086)
In each file, you will edit the associated “upstream stanza”. **Take special note of the corresponding ports that are used in each configuration file** .
1.  Copy the files above from the `/opt/msys/ecelerity/etc/sample-configs/nginx/` directory to the `/opt/msys/3rdParty/nginx/conf.d` directory. These provide templates for your changes and already have the correct upstream stanza names and ports.
2.  The `click_proxy_upstream.conf` file determines the routing for incoming click and open requests. Edit the `upstream click_proxy` stanza to point to **all MTA nodes**           on **port 2081**      that are participating in click and open tracking.
    # Example
    # cat > /opt/msys/3rdParty/nginx/conf.d/click_proxy_upstream.conf
    upstream click_proxy {
       server *`mta1.yourdomain.com`*:2081;
       server *`mta2.yourdomain.com`*:2081;
           ...
       server mtaN.yourdomain.com:2081;
       least_conn;
    }
3.  Edit the remaining `*_upstream.conf` files as follows. Configure the associated `upstream *` stanzas by listing all the Analytics nodes in your cluster, along with the proper port (shown in parentheses above). These configuration files determine the routing for incoming API calls.
    For example, edit the `upstream api_webhooks` stanza to include **all Analytics nodes**                 so that the MTA ETL processes can make Webhooks API requests on **port 2084** . The remaining files are nearly identical except for the name of the upstream stanza and the port associated with the server. The name of the upstream stanza for each file is same as the leading portion of the filenaming convention, i.e. *`upstream_stanza_name`*`_upstream.conf`. `momo_upstream.conf` is the exception, where the stanza is `momo-rest`.
    # Example
    # cat > /opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf
    upstream api_webhooks {
       server *`analytics1.yourdomain.com`*:2084;
       server *`analytics2.yourdomain.com`*:2084;
           ...
       server analyticsN.yourdomain.com:2084;
       least_conn;
    }
4.  When using the client IP address feature for reporting, add any external load balancer's IP addresses to the `external.lb` file, one per line quoted.
5.  If not installing a combined node and `/opt/msys/3rdParty/nginx/conf.d/api_webhooks.conf` does not exist, create it with the following contents.
    ```
    server {
                listen 2084;
                server_name _;
                location /api/v1/webhooks {
                  proxy_pass http://api_webhooks;
                }
              }
    ```
    ### Note
    Before starting nginx on a combined node, you must remove the `/opt/msys/3rdParty/nginx/conf.d/api_webhooks.conf` file (if it exists), which contains `listen 2084`.
6.  Test the nginx configuration.
    `service msys-nginx configtest`
    Your results should look like this:
    ```
    nginx: the configuration file /opt/msys/3rdParty/nginx/conf/nginx.conf syntax is ok
    nginx: configuration file /opt/msys/3rdParty/nginx/conf/nginx.conf test is successful
    ```
### 9.1.5. Configure ETL and Webhooks Agents
There are several agents on the MTA nodes that transfer data to the Analytics nodes for further processing and storage.
1.  Configure the ETL processes on the MTAs.
    Create the ETL `production.json` files, as shown below (substituting appropriate Analytics hostnames) in these directories on the first MTA node:
    *   `/opt/msys/app/adaptive-delivery-etl/config`
    *   `/opt/msys/app/metrics-etl/config`
    *   `/opt/msys/app/webhooks-etl/config`
    ```
    # Example
    # cat > /opt/msys/app/metrics-etl/config/production.json
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
    ### Note
    Your final `production.json` files must not have any comment lines in them, and the last line within the `hosts` stanza must not have a comma at the end.
### 9.1.6. Configure Remaining MTA Nodes
### Note
Be sure to repeat the steps in this section on **all** remaining platform nodes.
1.  <a name="install.copy_config_files"></a>To ease configuration of remaining MTA nodes, copy the following configuration files to ALL remaining MTA nodes FROM the first MTA node
    1.  Create and copy `initialnode.txt` to each of the remaining MTAs:
        ```
        echo $HOSTNAME >/var/tmp/initialnode.txt
        scp /var/tmp/initialnode.txt mtaN.yourdomain.com:/var/tmp
        ```
    2.  Copy the Ecelerity configuration files to the remaining MTA nodes.
        `scp -r /opt/msys/ecelerity/etc mtaN.yourdomain.com:/opt/msys/ecelerity`
        ### Note
        Because this overwrites the license files on the target nodes, you may need to then remove the files and then re-pull them using the command
        `/opt/msys/ecelerity/bin/ec_lic -f`
    3.  Copy two NGINX configuration files to the remaining MTA nodes.
        ### Note
        Combined nodes will ultimately require additional of the NGINX configuration files to be copied to the remaining nodes in order to support their Anaytics functions. You may choose to do that now, if applicable, or when those steps are covered in section [Section 9.3.2, “Configure the Remaining Analytics Nodes by Copying Files”](install.analytics_nodes#install.remaining_analytics_nodes "9.3.2. Configure the Remaining Analytics Nodes by Copying Files")
        ```
        cd /opt/msys/3rdParty/nginx/conf.d
        scp click_proxy_upstream.conf api_webhooks_upstream.conf mtaN.yourdomain.com:/opt/msys/3rdParty/nginx/conf.d
        ```
    4.  Copy the `production.json` configuration files to all remaining MTA nodes.
        ```
        # Do this for EACH MTA HOSTNAME
         cd /opt/msys/app
         find . -name production.json | xargs tar cf - | ssh -l root mta2.yourdomain.com cd $PWD \; tar xf -
        ```
2.  Log onto each remaining MTA node in the cluster and bootstrap the ecelerity configuration repo.
    export INITIALNODE=`cat /var/tmp/initialnode.txt`
    export ADMINPASS=admin
    cd /opt/msys/ecelerity/etc
    chgrp -R ecuser .
    chmod g+ws .
    chmod -R g+w .
    /opt/msys/ecelerity/bin/eccfg bootstrap --clustername default -u admin -p $ADMINPASS $INITIALNODE
3.  For each remaining MTA node, test Ecelerity configuration exactly as you did on the first MTA node as described in Step #7 of section [Section 9.1.2, “Configure Ecelerity”](new_installation#install.two_tier.configuration.ecelerity "9.1.2. Configure Ecelerity").
4.  If not already done so in section [Section 9.1.3, “Configure RabbitMQ”](new_installation#install.two_tier.configuration.rabbitmq "9.1.3. Configure RabbitMQ"), log onto each remaining MTA node and configure RabbitMQ exactly as you did on the first MTA node as described in that section.

|     |     |     |
| --- | --- | --- |
| [Prev](install_upgrade_packages)  | [Up](p.installing) |  [Next](install.configure_cassandra) |
| Chapter 8. Install / Upgrade the Packages  | [Table of Contents](index) |  9.2. Configure the Cassandra Nodes |
