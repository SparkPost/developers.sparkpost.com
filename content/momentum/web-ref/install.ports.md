| [Prev](install.requirements)  | Chapter 1. Installation |  [Next](install.security.php) |

## 1.2. Ports Used by Momentum

Depending upon the options you choose during installation and how you configure the application, various ports are used by Momentum. Find below a listing of the services along with the typical or default port setting.

<a name="idp216560"></a>

**Table 1.1. Momentum ports**

| Service | Port | Description | Required | Link |
| --- | --- | --- | --- | --- |
| Adaptive Delivery Rules Update | 443 | The port used for adaptive rule updates |   | See [Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive "14.2. adaptive – Adaptive Delivery") |
| Antivirus engines | various | Antivirus engines connect to external daemons on specific ports |   | See [Section 14.5, “antivirus – Antivirus Modules”](modules.antivirus "14.5. antivirus – Antivirus Modules") |
| Apache | 80 | Used by the web UI |   | See [Chapter 3, *Using the Web Console*](web3 "Chapter 3. Using the Web Console")  |
| cidr_server | 9000 | Used by the cidr_server |   | See [Section 7.10, “The `cidr_server`”](cluster.cidr_server "7.10. The cidr_server") |
| cluster_listener | 4802 | Used in a cluster installation. Replaced by the ECCluster_Listener stanza as of version 3.0.15. |   | See [Chapter 7, *Clustering*](cluster "Chapter 7. Clustering") |
| control_listener | 2025 | Used to connect to the Momentum console |  ✓ | See [Section 4.1, “The Momentum System Console”](operations.console "4.1. The Momentum System Console") |
| Databases | various | Optional databases use their default ports |   | See [Section 14.30, “ds_core – Datasource Query Core”](modules.ds_core "14.30. ds_core – Datasource Query Core") |
| ec_cmd | 2028 | The process that allows the web UI to manage cluster nodes |   | See [ec_cmd](executable.ec_cmd "ec_cmd") |
| ECCluster_Listener | 4802 | Replaces `cluster_listener` as of version 3.0.15. |   | See [the section called “ECCluster_Listener”](ecelerity-cluster.conf#ecelerity-cluster.conf.eccluster_listener "ECCluster_Listener") |
| ECStream | 1825 | Incoming ECStream connections |   | See [the section called “ECStream_Listener”](ecelerity.conf#ecelerity.conf.ecstream_listener "ECStream_Listener") |
| Erlang (Riak) | 4369 | Riak port mapper |   | See [Section 4.4.2, “Riak Ports”](operations.riak#operations.riak.ports "4.4.2. Riak Ports") |
| HTTP_Listener | 8081 | The listener used by the REST injector |   | See "[The Momentum REST Injector](https://support.messagesystems.com/docs/web-rest-injector/index)" |
| Live Bounce Updates | 443 | The port used to submit unclassified bounces |   | See [Section 14.44, “Live Bounce Updates – Module”](modules.live.bounce.updates "14.44. Live Bounce Updates – Module") |
| LMTP | 2003 | The port for Local Mail Transport Protocol |   | See [lmtp_port](conf.ref.lmtp_port "lmtp_port") |
| MSGC | 4809 | Used for cluster communication as of version 3.4 |   | See [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules") |
| PostgreSQL | 5432 | Used to authenticate users and for web UI data storage |  ✓ | See [Section 4.3, “PostgreSQL”](operations.postgresql "4.3. PostgreSQL") |
| Riak | 8098, 8099 | Used by the Riak data store (as of version 3.3) |  ✓ | See [Section 4.4.2, “Riak Ports”](operations.riak#operations.riak.ports "4.4.2. Riak Ports") |
| SMTP | 25 | Incoming SMTP connections |  ✓ | See [the section called “Listeners”](ecelerity.conf#ecelerity.conf3.listeners "Listeners") |
| SNMP | 8162 | Port used by Simple Network Management Protocol |   | See [SNMP](conf.ref.snmp "SNMP") |
| Spread (mbus_daemon) | 4803, 4804 | Used for cluster communication prior to version 3.4 |   | See [mbus.conf](mbus.conf "mbus.conf") |
| Subversion | 2027 | Used for version control of configuration files |  ✓ | See [Section 2.7, “The Momentum Configuration Server: ecconfigd”](conf.ecconfigd "2.7. The Momentum Configuration Server: ecconfigd") |

| [Prev](install.requirements)  | [Up](install.php) |  [Next](install.security.php) |
| 1.1. System Requirements  | [Table of Contents](index) |  1.3. Security Considerations |
