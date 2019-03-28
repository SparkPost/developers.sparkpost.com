|     |     |     |
| --- | --- | --- |
| [Prev](riak.service)  | Chapter 30. Riak |  [Next](operations.riak.backups) |

## 30.3. Riak Ports

Riak uses the following ports:

*   `TCP 8098` – Defines the HTTP interface used to query and update the data store. By default, this is bound to the loopback interface but will need to be opened on a cluster private network so that Message Systems applications can communicate with it. The port and IP addresses used for HTTP are controlled by the `http` setting in `app.config`.

*   `TCP 8099` – Defines the cluster handoff protocol interface used by Riak to synchronize its data. This port needs to be opened on a cluster private network so that Riak nodes can talk to each other. The port and IP address used for handoff are controlled by the `handoff_port` and `handoff_ip` settings in `app.config`.

*   `TCP 8087` – Defines an alternative "Protocol Buffers" interface for querying Riak. This is not used by Message Systems and is disabled in our default packaging.

*   `TCP 4369` – In a cluster configuration Riak uses the Erlang Port Mapper daemon (epmd) to resolve node identifiers. By default epmd binds to port 4369\. For more information, see [the section called “Erlang and Firewalls”](operations.riak.ports#operations.riak.ports.erlang "Erlang and Firewalls").

None of these ports should be exposed to the public Internet; we strongly recommend that access to these ports from untrusted networks be blocked by a firewall.

### Erlang and Firewalls

The maximum number of concurrent ports used by Erlang is defined in the `/opt/msys/3rdParty/riak/etc/vm.args` file by the variable `ERL_MAX_PORTS`. If port usage needs to be restricted, we recommend defining a range of ports equal to the number of nodes in the cluster. For details on network security and firewall configurations, consult the [Riak](http://http://docs.basho.com/riak/latest/) documentation.

|     |     |     |
| --- | --- | --- |
| [Prev](riak.service)  | [Up](riak) |  [Next](operations.riak.backups) |
| 30.2. Running the Riak Service  | [Table of Contents](index) |  30.4. Backups |

