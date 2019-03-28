|     |     |     |
| --- | --- | --- |
| [Prev](modules.maildir)  | Chapter 71. Modules Reference |  [Next](modules.msg_gen) |

## 71.47. msgc – Message Systems Group Communication

<a className="indexterm" name="idp22166944"></a>

The Message Systems Group Communication (msgc) consists of two modules: msgc_server and msgc_client. These modules provide for communication between nodes in a cluster configuration.

### 71.47.1. msgc_server Module

By default, the msgc_server is loaded on every cluster node and the cluster manager. This module is responsible for maintaining connections with all other msgc_servers in the network (if they exist). Using these connections, the msgc_server propagates traffic throughout the network as requested. The msgc_server has full connectivity to the entire cluster, but without any clients making requests, no traffic will flow between the servers.

In any cluster larger than seven nodes, it will be more efficient to deploy dedicated msgc_server instances. However, this will only be necessary if massive volumes of multicast traffic are expected — carrier networks with large amounts of shared data would qualify.

### Note

Momentum will work in cluster configurations with more than seven nodes. However, contact Professional Services to discuss how best to meet the needs of your specific use case. The volume of traffic on the message bus determines the optimal number of servers.

**71.47.1.1. Configuration**

In a default cluster configuration, this module is configured using the `msgc_server.conf` file referenced from the `eccluster.conf` file on the cluster manager and from the `ecelerity-cluster.conf` file on nodes. The following is an example configuration:

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

In order for the msgc_server to operate properly, a msgcserver_listener must be defined and configured. Inbound connections will generally receive membership requests from the client side of the connection, which will request subscription to various groups. For details about the msgcserver_listener, see [Section 16.5.2, “Msgcserver_Listener Configuration”](cluster.listeners#msgcserver_listener "16.5.2. Msgcserver_Listener Configuration").

The following are the configuration options defined within this module:

<dl className="variablelist">

<dt>connect_timeout</dt>

<dd>

Amount of time in seconds to spend waiting for the connect system call to return. Default value is `60`.

</dd>

<dt>debug_level</dt>

<dd>

Debug level for this module. Default value is `ERROR`. For more information, see [Table 72.1, “Debug levels”](conf.ref.debug_flags#conf.ref.debug.levels "Table 72.1. Debug levels").

</dd>

<dt>idle_timeout</dt>

<dd>

Amount of time in seconds to hold open an idle connection. Default value is `30`.

</dd>

<dt>keepalive_interval</dt>

<dd>

Defines how often a no op packet is sent over the connection. Default value is `5`.

</dd>

<dt>max_backlog</dt>

<dd>

Maximum size of the message queue before declaring the connection stuck and killing it (which will automatically restart it). Default value is `5000`.

</dd>

<dt>messages_per_iter</dt>

<dd>

How many messages to send to (or receive from) a connection before yielding for other connections. This option helps avoid starvation. Default value is `20`.

</dd>

<dt><a name="modules.msgc.msgc_server.config.peers"></a>peers</dt>

<dd>

Defines the nodes that will participate in the cluster. The `peers` dictionary is populated during installation.

### Warning

Hostnames in the peers list must be in lowercase. If they are not, `msgc` will not initialize.

</dd>

<dt><a name="modules.msgc.msgc_server.config.port"></a>port</dt>

<dd>

Port used to communicate with the msgc_listener. This value must match the port associated with the Listen scope of the msgcserver_listener. Default value is `4809`.

</dd>

<dt>reconnect_interval</dt>

<dd>

How long to wait before reconnecting after a connection fails. Default value is `5`.

</dd>

<dt>tcpbuf_size</dt>

<dd>

Size of the TCP buffer in bytes. Default value is `131072`.

</dd>

</dl>

### 71.47.2. msgc_client Module

The msgc_client module communicates with the msgc_server module over a single TCP connection defined in the msgcserver_listener. The msgc_client will be told which groups to join through Momentum hooks that it exposes and registers, which the cluster module will then call when it wishes to perform an action such as joining a group or sending a message. Furthermore, it will expose hooks that the Momentum cluster module will register in order to subscribe to multicast and membership messages. msgc_client is responsible for connecting to msgc_server in order to participate in the cluster.

The msgc_client maintains a single TCP connection to its configured msgc_server process. Over this connection, it will send join and leave messages as appropriate, based on the requests it receives from the consumers of its hooks (such as the cluster module and the eccmgr process). Once it sends a join request to its configured server, it will receive all messages sent to the requested group. Likewise, any multicast publish commands that are sent through its Momentum hooks will be forwarded over its server connection.

**71.47.2.1. Configuration**

In the default cluster configuration, the msgc_client module is configured in the `/opt/msys/ecelerity/default/ecelerity-cluster.conf` file. The following is an example configuration:

```
msgc_client {
   server = ( "127.0.0.1:4809" )
}
```

The following are the configuration options defined within this module:

<dl className="variablelist">

<dt>bind_address</dt>

<dd>

If desired, choose a specific local address to bind to for the outbound connection to msgc_server. There is no default value for this option.

</dd>

<dt>connect_timeout</dt>

<dd>

Amount of time in seconds to spend waiting for the connect system call to return. Default value is `60`.

</dd>

<dt>debug_level</dt>

<dd>

Debug level for this module. Default value is `ERROR`.

</dd>

<dt>idle_timeout</dt>

<dd>

Amount of time in seconds to hold open an idle connection. Default value is `30`.

</dd>

<dt>keepalive_interval</dt>

<dd>

Defines how often a no op packet is sent over the connection. Default value is `5`.

</dd>

<dt>max_backlog</dt>

<dd>

Maximum size of the message queue before declaring the connection stuck and killing it (which will automatically restart it). Default value is `5000`.

</dd>

<dt>messages_per_iter</dt>

<dd>

How many messages to send to (or receive from) a connection before yielding for other connections. This option helps avoid starvation. Default value is `20`.

</dd>

<dt>reconnect_interval</dt>

<dd>

How long to wait before reconnecting after a connection fails. Default value is `5`.

</dd>

<dt>tcpbuf_size</dt>

<dd>

Size of the TCP buffer in bytes. Default value is `131072`.

</dd>

<dt>server</dt>

<dd>

The msgc_server port must match the port defined for the `Listen` stanza of the msgcserver_listener. Default value is `127.0.0.1:4809`.

The loopback address is used because msgc_server is run on all managers and nodes in the cluster. The port used with this option must match the port defined in [port](modules.msgc#modules.msgc.msgc_server.config.port) .

</dd>

</dl>

|     |     |     |
| --- | --- | --- |
| [Prev](modules.maildir)  | [Up](modules) |  [Next](modules.msg_gen) |
| 71.46. maildir – Maildir Delivery Support  | [Table of Contents](index) |  71.48. msg_gen – Message Generation |

