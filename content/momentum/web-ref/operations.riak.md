| [Prev](operations.postgresql)  | Chapter 4. Operations |  [Next](operations.logging) |

## 4.4. Riak

<a class="indexterm" name="idp2666208"></a>

**Configuration Change. ** This feature is available as of version 3.3.

Riak is a distributed key-value data storage technology with excellent scalability properties incorporated into the Momentum 3.3 release. It replaces the SQLite data store used with the adaptive module. It is also used by Mobile Momentum for resubmission of messages and by the Adaptive Delivery reporting capability introduced in version 3.3.

Riak is freely available for use in a LAN deployment, but WAN deployments that need to be synchronized require a commercially licensed variant. Note that multiple data centers may still use Riak if each data center has its own local Riak cluster.

Momentum uses Riak version `0.14.2`. For more information see [Riak Wiki](http://wiki.basho.com).

Use of this storage technology puts increased demands on hardware. For more information see [Section 1.1.1, “Riak Hardware Requirements”](install.requirements#install.requirements.riak "1.1.1. Riak Hardware Requirements").

### 4.4.1. Riak Overview

The Riak packages provided by Message Systems install under the path `/opt/msys/3rdParty/riak/`.

Administrative tools for riak are provided under the path `/opt/msys/3rdParty/riak/bin`. These tools are named "`riak`", "`riak-admin`" and "`search-cmd`".

The main configuration file is called `app.config` and can be found at: `/opt/msys/3rdParty/riak/etc/app.config`.

The contents of this file are formatted as an Erlang "term"; a structured file with meaningful "keys" and "values". The file is terminated with a period ‘`.`’ character.

An additional configuration file is called `vm.args` and can be found at: `/opt/msys/3rdParty/riak/etc/vm.args` The default configuration for our Riak package stores Riak state at `/var/db/riak` and log files can be found at `/var/log/riak`.

During installation there is no prompt for an alternative data storage location; instead, the system administrator may opt to partition the system such that `/var/db/riak` maps to its own set of spindles prior to installation, or may choose to mount alternative storage. In the latter case, the administrator will need to edit `app.config` and change the paths that refer to `/var/db/riak` to the alternate location.

Riak is configured to start automatically when the system boots. The service can be controlled by the script located at `/etc/init.d/msys-riak`. This initialization script has the usual stop, start and restart options. The following additional options are also available:

*   `reboot` – perform a clean restart by first terminating the Erlang VM

*   `ping` – check that the service is running

*   join *`node`* – join a Riak cluster. Equivalent to running the **riak-admin join *`riak-cluster@otherip`***                               command. Joins the running node to another running node so that they participate in the same cluster.

*   `attach` – Attaches to the console of a Riak node running in the background, giving access to the Erlang shell and runtime messages.

*   `console` – Start the Riak node in the foreground, giving access to the Erlang shell and runtime messages.

On Solaris systems, the initialization script, **/opt/msys/3rdParty/riak/smf/msys-riak.init**, is implemented in terms of SMF commands that operate on the "messagesystems/msysriak" service. Use the options shown above. For example, you can ping the server in the following way: **`/opt/msys/3rdParty/riak/smf/msys-riak.init ping`**      . The Riak service runs as the `msysriak` user, created during installation as a service account. The files under `/var/db/riak` are owned by this user.

### 4.4.2. Riak Ports

Riak uses the following ports:

*   `TCP 8098` – Defines the HTTP interface used to query and update the data store. By default, this is bound to the loopback interface, but will need to be opened on a cluster private network so that Message Systems applications can communicate with it. The port and IP addresses used for HTTP are controlled by the `http` setting in `app.config`.

*   `TCP 8099` – Defines the cluster handoff protocol interface used by Riak to synchronize its data. This port needs to be opened on a cluster private network so that Riak nodes can talk to each other. The port and IP address used for handoff are controlled by the `handoff_port` and `handoff_ip` settings in `app.config`.

*   `TCP 8087` – Defines an alternative "Protocol Buffers" interface for querying Riak. This is not used by Message Systems and is disabled in our default packaging.

*   `TCP 4369` – In a cluster configuration Riak uses the Erlang Port Mapper daemon (epmd) to resolve node identifiers. By default epmd binds to port 4369\. For more information see [the section called “Erlang and Firewalls”](operations.riak#operations.riak.ports.erlang "Erlang and Firewalls").

None of these ports should be exposed to the public Internet; we strongly recommend that access to these ports from untrusted networks be blocked by a firewall.

**Erlang and Firewalls**

The maximum number of concurrent ports used by Erlang is defined in the `/opt/msys/3rdParty/riak/etc/vm.args` file by the variable `ERL_MAX_PORTS`. If port usage needs to be restricted, we recommend defining a range of ports equal to the number of nodes in the cluster.

The Riak wiki at [Network Security and Firewall Configurations](http://wiki.basho.com/Network-Security-and-Firewall-Configurations.html) provides detailed information. For example:

> "By default, epmd binds to TCP port 4369 and listens on the wildcard interface. For inter-node communication, Erlang uses an unpredictable port by default; it binds to port 0, which means the first available port."

Also see:

> "For ease of firewall configuration, Riak can be configured via app.config to instruct the Erlang interpreter to use a limited range of ports. For example, to restrict the range of ports that Erlang will use for inter-Erlang node communication to 6000-7999, add the following lines to the app.config file on each Riak node:
> 
> ```
> {
>   kernel,
>   [
>     {
>       inet_dist_listen_min,
>       6000
>     },
>     {
>       inet_dist_listen_max,
>       7999
>     }
>   ]
> },
> ```
> 
> The above lines should be added into the top level list in `app.config`, at the same level as all the other applications (eg. riak_core). Then configure your firewall to allow incoming access to TCP ports 6000 through 7999 from whichever network(s) contain your Riak nodes."

### 4.4.3. Provisioning Considerations

Riak can be deployed as a standalone node or in a cluster of nodes. More nodes allow for improved redundancy and load distribution. It is recommended that there be a minimum of three nodes in a clustered configuration.

For most deployments, no special additional configuration is required, but if you have a larger number of Riak nodes (8-16) you may want to consider setting the "ring_creation_size" parameter to a larger value. Consult the Riak documentation for details on this parameter. It is important to note that this parameter cannot be changed once nodes are live; it must be set to the desired size and remain at that value on each and every node that participates in the Riak cluster.

### 4.4.4. Cluster Configuration

Each node requires a unique name to participate in a cluster. The installer automatically configures this during installation as described in [Section 1.10, “Riak Server”](install.riak "1.10. Riak Server").

The name is stored in the `vm.args` configuration file and specified with the "-name" parameter switch.

### Note

If the IP address or interface is changed, this parameter must be updated and the ring status updated in the following way; **`riak-admin reip riak-subcluster_name@oldip riak-subcluster_name@newip`**                                                            . The local service **must not be running**                for this to work; make sure the service is disabled and stopped while this operation is carried out.

On a singlenode installation the name defaults to riak-*`subcluster_name`*@127.0.0.1.

If a node does not join the Riak cluster during installation, you can have it join the cluster later by following the instructions in the next section.

**4.4.4.1. Configuring Riak After Installation**

To configure a node to join the Riak cluster after installation follow these steps:

1.  Shut down the ecelerity process on the node by issuing the command **`/etc/init.d/ecelerity stop`**      .

2.  In `/opt/msys/3rdParty/riak/etc/app.config`, make sure that `http` is bound to both `{127.0.0.1, 8098}` and {*`local_node_ip`*, 8098}. For example: `{http, [{127.0.0.1, 8098}, {10.70.20.131, 8098} ]}`. The installer should already have done this.

3.  Start Riak by issuing the command: **`/etc/init.d/msys-riak start`**       .

4.  Use the riak-admin command to join the MTA to the Riak cluster: **/opt/msys/3rdParty/riak/bin/riak-admin join riak-*`cluster_name@manager_IP`***                                      .

5.  Use the **/opt/msys/3rdParty/riak/bin/riak-admin status**        command to verify that all nodes are joined together by checking the `ring_members` line of the command output. It should look like the following:

    `ring_members : ['riak-default@10.70.20.129','riak-default@10.70.20.131', ... ]`
6.  Restart the ecelerity process: **`/etc/init.d/ecelerity start`**       .

### 4.4.5. Removing a Node from a Riak Cluster

### Warning

Serious performance issues can occur if inactive or misbehaving Riak nodes are not removed from the cluster.

When removing a Momentum node from a Momentum cluster, go to the command line on the node you wish to remove and issue the following Riak command:

`shell> /opt/msys/3rdParty/riak/bin/riak-admin leave`

Because of a Riak 0.14.2 bug, you must manually remove the ring files from this node:

```
shell> cd /var/db/riak/ring/
shell> rm -f *
```

When a Momentum node is being added back to a Momentum cluster without running the installer, the node must be instructed to `join` the existing Riak ring. Do this in the following way:

shell> /opt/msys/3rdParty/riak/bin/riak-admin join riak-default@*`11.22.33.44`*

You should see a message such as: `Sent join request to riak-default@11.22.33.44`.

Replace `11.22.33.44` with an IP address suitable to your circumstances. You can join any existing Riak node. Verify that the node is now a member of the ring by typing **`riak-admin ringready`**            or **`riak-admin status`**        .

In cases where the Riak node is misbehaving or unresponsive and you cannot use the `leave` command, use the `remove` command.

### Warning

The `remove` command forces removal of the target node from the ring. **Data on the removed node will not be handed off** .

From any node in the Riak cluster you can remove the offending node in the following way:

shell> /opt/msys/3rdParty/riak/bin/riak-admin remove riak-default@*`11.22.33.44`*

In this case the Riak node, `riak-default@11.22.33.44` will be removed from the node that executes this command forcing the removal of the target node from the ring. The `remove` command should only be used in cases where it is not possible to properly `leave` the cluster, as data on the removed node will not be handed off.

### 4.4.6. Riak and the adaptive Module

In a cluster configuration, by default, Riak is installed on every node. A recommended setting for the adaptive module is to point the `data_store` option to a list of Riak servers but with the local URL as the first in the list. For example, given the following nodes in a cluster:

```
mta1 192.168.1.10
mta2 192.168.1.11
mta3 192.168.1.12
mgr  192.158.1.13
```

In this case the preferred value for `data_store` would be:

```
("http://127.0.0.1:8098" "http://192.168.1.10:8098" "http://192.168.1.11:8098"
"http://192.168.1.12:8098" "http://192.168.1.13:8098")
```

The first item in the list is the "preferred" url. When the adaptive module is configured in this way, it is important that all nodes see the same set of data no matter which URL is being used to access the data. To achieve this, all Riak nodes must be joined together as described in [Section 4.4.4.1, “Configuring Riak After Installation”](operations.riak#operations.riak.cluster.configuration.details "4.4.4.1. Configuring Riak After Installation").

Use the following test to check that all nodes are joined together:

1.  Log in to any node, go to the command line and insert a record into Riak:

    ```
    shell> curl -X PUT -H "Content-Type: text/plain" \
    http://127.0.0.1:8098/riak/adctrl/test-record -d "A test"
    ```

2.  Log in to another node and retrieve the record:

    `shell> curl http://127.0.0.1:8098/riak/adctrl/test-record`

    If "A test" is output to the screen, then the two Riak servers are joined.

3.  Repeat the previous step for every node in the cluster.

4.  When you've finished testing, remove the test record:

    `shell> curl -X DELETE http://127.0.0.1:8098/riak/adctrl/test-record`

If you fail to retrieve the test record, check that the Riak nodes are joined by using the command: **`/opt/msys/3rdParty/riak/bin/riak-admin status`**        .

### Note

In a cluster configuration, messages in the panic log such as `adaptive_db_sync: Couldn't connect to server` may indicate the failure of one or more Riak servers. If you see such messages check the status of your Riak servers using the **riak-admin** command.

In the output, look for the "`ring_members`" line and verify that there is an entry "riak@*`ip_address`*" for each node in the cluster. If this is not the case, then the Riak servers may be partially joined or not joined at all. Join the missing node or nodes to the cluster as described in [Section 4.4.4.1, “Configuring Riak After Installation”](operations.riak#operations.riak.cluster.configuration.details "4.4.4.1. Configuring Riak After Installation")

**4.4.6.1. Using an Adaptive Delivery Backing Store Other than Riak**

In some circumstances Riak may not provide the required level of performance. As an alternate backing store, you can use [LevelDB](http://en.wikipedia.org/wiki/LevelDB) on Linux with Momentum 3.6 or greater. This section describes how to configure Momentum with LevelDB as the backing store for the adaptive module.

### Warning

Please consult with support before reconfiguring Momentum as described here. The LevelDB package is installed with Momentum 3.6; it can be used as a replacement backing store for the adaptive module only. If you are using Mobile Momentum, Riak continues to be used for message resubmission.

To use LevelDB add the following stanza to your `ecelerity.conf` file:

```
adaptive_backstore_leveldb {
  path = "/var/log/ecelerity/adaptive.leveldb"
}
```

The `path` option points to the LevelDB database.

### 4.4.7. Backups

Riak data is distributed across the nodes in the cluster; provided that you have enough nodes remaining online, the need to restore from a backup should be quite a rare event.

Riak offers the ability to backup all data present on a given node, or all data present in the cluster. The backup is stored in a file named by the administrator. This backup can later be used to restore the state of the node or cluster depending on the nature of the backup file.

Consult the Riak Wiki for the riak-admin "backup" and "restore" commands to learn more about this capability.

### Note

Note that some of the Message Systems use cases may result in a large volume of data being retained in Riak. Expect the backup files to be equally large.

| [Prev](operations.postgresql)  | [Up](operations) |  [Next](operations.logging) |
| 4.3. PostgreSQL  | [Table of Contents](index) |  4.5. Logging |
