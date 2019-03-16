| [Prev](install.standalone)  | Chapter 1. Installation |  [Next](conf.php) |

## 1.12. Installing a Cluster

The clustering capabilities of the product enable the following features:

*   Centralized management of configuration for multiple MTA nodes

*   Replicated, redundant, configuration repository with revision control

*   Log aggregation pulls log files from MTA nodes to centralized location(s) on the network

*   Replication of a variety of real-time metrics to allow cluster-wide coordination for inbound and outbound traffic shaping

*   DuraVIP™ , our IP Failover mechanism.

Before performing a clustered installation, we recommend that you read through [Chapter 7, *Clustering*](cluster "Chapter 7. Clustering"), which discusses key concepts for clustering and goes into more detail than this section.

A cluster is comprised of one or more Manager nodes and one or more MTA nodes. You must install the Manager node before installing MTA nodes. If you are installing the database role on a stand-alone machine, you must install this role before any others.

### 1.12.1. Installing the Cluster Manager

The first Manager node that you install must also be provisioned with the `database` and `web` roles. If you have a more complex deployment with multiple Manager nodes, those secondary managers must not be installed with the `database` and `web` roles.

To perform a cluster manager installation:

1.  Download and extract the installation bundle as discussed in the operating system specific installation sections.

2.  Run the **installer** script.

3.  When prompted, enter the role or roles that you intend to install on the specific machine.

4.  If you are installing the database role you will be prompted for a location for storing data. The default is `/var/db/msyspg`.

5.  If you are installing the web UI you will also be prompted for a password for the account named 'admin'.

    **Configuration Change. ** Prior to version 3.0.15, the web console role and the database role **must** be installed on the same machine.

6.  The MTA needs access to the database and to ecconfigd to manage authentication and replication. For this reason you must also provide a password for a service account. Record this password. It will be required when installing cluster nodes.

7.  If you are creating a subcluster, note that subcluster names must be lower case and must be one word. If you enter more than one word, the first word will be taken as the cluster name.

    Pay special attention to the instructions:

    In order to configure a cluster, you must create an `mbus.conf` file,
    to describe the nodes and manager(s) in each subcluster.

    A basic cluster install comprises a single subcluster (normally called
    "default") with a single manager node and one or more MTA nodes.

    More complex environments may have multiple subclusters to represent
    differences in location (WAN) or staging vs. production environments.

    Each node must belong to one and only one subcluster, but is aware of
    all the nodes across all subclusters.  The manager must be a member node
    of one and only one subcluster.

    For a description of a subcluster see [Section 7.1, “Subclusters”](subclusters "7.1. Subclusters"). You will be asked for the cluster node names and then, subcluster node names

    **Configuration Change. ** As of version 3.4, cluster communication is handled by the msgc modules rather than by mbus so you should not create an `mbus.conf` file. For more information see [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules").

8.  Enter node names (including the cluster manager) as prompted. The node names must be DNS-resolvable otherwise you will see the message:

    That hostname is not DNS resolvable: *`illegal_name`*
9.  If you are creating a subcluster, enter the subcluster node names when prompted. Any manager nodes that are part of the subcluster need to be entered too.

10.  When the installation completes you will be prompted to start the following services:

    ```
    shell> /etc/init.d/mbusd_monitor start
    shell> /etc/init.d/ecconfigd restart
    shell> /etc/init.d/eccmgr start
    shell> /etc/init.d/ecwebconsole start
    ```

### 1.12.2. Upgrading and msgc

You can only upgrade to Momentum 3.4 from Momentum 3.3.

As of version 3.4, cluster communication is handled by the msgc modules rather than by mbus so you do not need to use the **`mbusd_monitor`** command. For more information see [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules").

If you are *upgrading* to Momentum 3.4 from 3.3 and have manually changed the `mbus.conf` file after installation, you will need to manually create or edit the `msgc_server.conf` file after you upgrade. For more information see [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules"). You will also need to change `msgc_server.conf` manually if you are upgrading from version 3.4 to a higher version number.

If you have multiple interfaces, for example, one for internal network usage (and blocked from the outside), and the other for external access (and unable to access the internal network), you should ensure that `msgc_server.conf` uses the names pointing to the correct network. The `-p` option to traceroute(8) may come in useful here.

### 1.12.3. Installing a Clustered MTA Node

Clustered MTA nodes must be installed after you have brought the Manager node online. The procedure is:

1.  Download and extract the installation bundle as discussed in the operating system specific installation sections.

2.  Run the **installer** script.

3.  When prompted, enter `mta` for the role selection.

4.  Answer "y" when asked if the mta belongs to a cluster.

5.  Enter the hostname or the IP address of the database machine when prompted.

6.  Enter the password associated with the `admin` account and the service account password.

7.  If you have already configured the manager node and committed your configuration files, choose `yes` if you wish to automatically configure the node using the bootstrap process. To do this you will need to know the subcluster name, typically `default` and the IP address of the cluster manager.

    If you decline to run the bootstrap process, you cannot immediately start up the node. Before starting up the node you must run the command:

    shell> /opt/msys/ecelerity/bin/eccfg bootstrap --clustername *`name`* --username=admin --password=*`admin cluster_host`*
8.  When the installation completes you will be prompted to start the following services:

    ```
    shell> /etc/init.d/mbusd_monitor start
    shell> /etc/init.d/ecelerity start
    ```

    ### Note

    As of version 3.4, cluster communication is handled by the msgc modules rather than by mbus so you do not need to use the **`mbusd_monitor`** command. For more information see [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules").

    Copy your license to the `/opt/msys/ecelerity/etc` directory before starting the services if you are not connected to the Internet.

| [Prev](install.standalone)  | [Up](install.php) |  [Next](conf.php) |
| 1.11. Performing a Stand-alone Installation  | [Table of Contents](index) |  Chapter 2. Configuration |
