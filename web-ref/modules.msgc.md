|     |     |     |
| --- | --- | --- |
| [Prev](modules.maildir)  | Chapter 14. Modules Reference |  [Next](modules.mxip) |

## 14.47. msgc – Modules

<a class="indexterm" name="idp20387168"></a>

**Configuration Change. ** This feature is available as of version 3.4.

Message Systems Group Communication is a replacement for the messaging bus used in cluster configurations in earlier versions of Momentum. It fully supports all existing Momentum features and is less susceptible to latency issues.

There are two msgc modules, msgc_server and msgc_client. These modules provide for communication between nodes in a cluster configuration.

As with other modules, you can set configuration options from the web UI, by changing configuration files or at runtime as described in [config](console_commands.config "config").

### 14.47.1. Upgrading and msgc

If you are *upgrading* to Momentum 3.4 from 3.3 and have manually changed the `mbus.conf` file after installation, you will need to create or edit the `msgc_server.conf` file manually after you upgrade. You will also need to change `msgc_server.conf` manually if you are upgrading from version 3.4 to a higher version number.

If you have multiple interfaces, for example, one for internal network usage (and blocked from the outside), and the other for external access (and unable to access the internal network), you should ensure that `msgc_server.conf` uses the names pointing to the correct network. The `-p` option to traceroute(8) may come in useful here.

### 14.47.2. The msgc_server Module

By default, the msgc_server is loaded on every cluster node and the cluster manager. For this reason both the `ecelerity-cluster.conf` and the `eccluster.conf` files include the `msgc_server.conf` file.

The msgc_server module is responsible for maintaining connections with all other msgc_servers in the network (if they exist). Using these connections, the msgc_server propagates traffic throughout the network as requested. The msgc_server has full connectivity to the entire cluster, but without any clients making requests, no traffic will flow between the servers.

In any cluster larger than seven nodes, it will be more efficient to deploy dedicated msgc_server instances. However this will only be necessary if massive volumes of multicast traffic are expected—carrier networks with large amounts of shared data would qualify.

### Note

Momentum will work in cluster configurations with more than seven nodes but you may want to discuss with Message Systems support how best to meet the needs of your specific use case. The volume of traffic on the message bus determines the optimal number of servers.

**14.47.2.1. Configuration**

In the default configuration, this module is configured using the `msgc_server.conf` file referenced from the the `eccluster.conf` file on the manager and from the `ecelerity-cluster.conf` file on nodes. The sample configuration file is as follows:

```
# NOTE: This file MUST live in the global portion of the repository, as it
# must be the same for all nodes in the cluster.

msgc_server {
   peers = [
     node1 = "192.168.0.10"
     node2 = "192.168.0.11"
     manager = "192.168.0.12"
   ]
}
```

The msgc_server options can be changed at runtime without restarting the ecelerity process. These options are as follows:

<dl className="variablelist">

<dt>connect_timeout</dt>

<dd>

The amount of time in seconds to spend waiting for the connect system call to return. The default value for this option is `60`.

</dd>

<dt>debug_level</dt>

<dd>

The debug level for this module. The default value for this option is `ERROR`. For more information see [Table 9.28, “Debug levels”](conf.ref.debug_flags#conf.ref.debug.levels "Table 9.28. Debug levels").

</dd>

<dt>idle_timeout</dt>

<dd>

The amount of time in seconds to hold open an idle connection. The default value for this option is `30`.

</dd>

<dt>keepalive_interval</dt>

<dd>

This option defines how often a no op packet is sent over the connection. The default value for this option is `5`.

</dd>

<dt>max_backlog</dt>

<dd>

The maximum size of the message queue before declaring the connection stuck and killing it (which will automatically restart it). The default value for this option is `5000`.

</dd>

<dt>messages_per_iter</dt>

<dd>

How many messages to send to (or receive from) a connection before yielding for other connections. This option helps avoid starvation. The default value for this option is `20`.

</dd>

<dt><a name="modules.msgc.msgc_server.config.peers"></a>peers</dt>

<dd>

This option defines the nodes that will participate in the cluster. The `peers` dictionary is populated during installation.

This option corresponds to the `spread_segment` of the `mbus.conf` file in earlier versions of Momentum. However, there is no nineteen character node name limit and you may use the long or the short node name as well as an IP address.

If you upgraded to Momentum 3.4 from an earlier version and manually changed the `mbus.conf` file after installation, you will need to manually create or edit the `msgc_server.conf` file after you upgrade.

</dd>

<dt><a name="modules.msgc.msgc_server.config.port"></a>port</dt>

<dd>

The port used to communicate with the msgc_listener. This value must match the port associated with the listen scope of the msgcserver_listener. The default value for this option is `4809`.

</dd>

<dt>reconnect_interval</dt>

<dd>

How long to wait before reconnecting after a connection fails. The default value for this option is `5`

</dd>

<dt>tcpbuf_size</dt>

<dd>

The size of the TCP buffer in bytes. The default value for this option is `131072`

</dd>

</dl>

In order for the msgc_server to operate properly, a msgcserver_listener must be defined and configured. Inbound connections will generally receive membership requests from the client side of the connection, which will request subscription to various groups.

### Note

It is advisable to restart **ecconfigd** after making extensive changes to `mbus.conf` or `msgc_server.conf`, such as adding multiple nodes. Use the command **`/etc/init.d/ecconfigd restart`**         .

**14.47.2.2. The msgcserver Listener**

The msgcserver_listener mediates between msgc_servers and between msgc_servers and their clients. It is an internal service for msgc communication.

The typical configuration is as follows:

```
msgcserver_listener {
   listen ":4809" { }
}
```

As with other listeners, a listen scope is defined within the msgcserver_listener. This scope defines the port that the listener listens on. For more information about listen scopes see [the section called “Listeners”](ecelerity.conf#ecelerity.conf3.listeners "Listeners").

From the web UI other options show up as "valid" within the msgcserver_listener but they are meaningless so you can ignore them.

### 14.47.3. The msgc_client

The MSGC client module communicates to the MSGC server over a single TCP connection defined in the MSGC server listener. The msgc_client will be told which groups to join through Momentum hooks that it exposes and registers, which the cluster module will then call when it wishes to perform an action such as joining a group or sending a message. Furthermore, it will expose hooks that the Momentum cluster module will register in order to subscribe to multicast and membership messages. msgc_client is responsible for connecting to msgc_server in order to participate in the cluster.

The msgc_client maintains a single TCP connection to its configured msgc_server process. Over this connection, it will send join and leave messages as appropriate, based on the requests it receives from the consumers of its hooks (such as the cluster module and the eccmgr process). Once it sends a join request to its configured server, it will receive all messages sent to the requested group. Likewise, any multicast publish commands that are sent through its Momentum hooks will be forwarded over its server connection.

**14.47.3.1. Configuration**

When using the default subcluster, the msgc_client configuration file is found in the `/opt/msys/ecelerity/default/ecelerity-cluster.conf` file. It is as follows:

```
msgc_client {
   server = ( "127.0.0.1:4809" )
}
```

The configuration options are:

<dl className="variablelist">

<dt>bind_address</dt>

<dd>

If desired, choose a specific local address to bind to for the outbound connection to msgc_server. There is no default value for this option.

</dd>

<dt>connect_timeout</dt>

<dd>

The amount of time in seconds to spend waiting for the connect system call to return. The default value for this option is `60`.

</dd>

<dt>debug_level</dt>

<dd>

The debug level for this module. The default value of this option is `ERROR`.

</dd>

<dt>idle_timeout</dt>

<dd>

The amount of time in seconds to hold open an idle connection. The default value for this option is `30`.

</dd>

<dt>keepalive_interval</dt>

<dd>

This option defines how often a no op packet is sent over the connection. The default value for this option is `5`.

</dd>

<dt>max_backlog</dt>

<dd>

The maximum size of the message queue before declaring the connection stuck and killing it (which will automatically restart it). The default value for this option is `5000`.

</dd>

<dt>messages_per_iter</dt>

<dd>

How many messages to send to (or receive from) a connection before yielding for other connections. This option helps avoid starvation. The default value for this option is `20`.

</dd>

<dt>reconnect_interval</dt>

<dd>

How long to wait before reconnecting after a connection fails. The default value for this option is `5`.

</dd>

<dt>tcpbuf_size</dt>

<dd>

The size of the TCP buffer in bytes. The default value for this option is `131072`.

</dd>

<dt>server</dt>

<dd>

The msgc_server port must match the port defined for the `Listen` stanza of the msgcserver_listener. The default value for this option is `127.0.0.1:4809`.

The loopback address is used because msgc_server is run on all managers and nodes in the cluster. The port used with this option must match the port defined in [port](modules.msgc#modules.msgc.msgc_server.config.port) .

</dd>

</dl>


|     |     |     |
| --- | --- | --- |
| [Prev](modules.maildir)  | [Up](modules) |  [Next](modules.mxip) |
| 14.46. maildir – Maildir Delivery Support  | [Table of Contents](index) |  14.48. mxip - IP Addresses In MX Records |
