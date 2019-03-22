| [Prev](cluster.listeners)  | Chapter 16. Cluster-specific Configuration |  [Next](cluster.riak.configuration) |

## 16.6. Configuring Momentum for High Availability and Failover

Momentum's architecture supports fault-tolerant configurations. This means that you can operate in an environment that is readily configured to support failing over automatically.

Components that support high availability and fault tolerance include the following:

*   [`ecconfigd`](conf.overview#conf.ecconfigd "15.1.3. Configuration Management (ecconfigd)")

*   [DuraVIP™ bindings](cluster.config.duravip "Chapter 27. DuraVIP™: IP Fail over")

*   [Centralized logging and Aggregration](log_aggregation "Chapter 26. Log Aggregation")

*   Per-node data

    Per-node logs can be made redundant by storing the node-specific data on a SAN. Locking semantics must be checked for the log: spool locks are currently enforced and safe.

    On the SAN, the paths to directories should be unique per node and each node should be able to mount the SAN directory at its unique location.

*   [cidr_server](cluster.cidr_server "Chapter 39. CIDR Server") and [as_logger](modules.as_logger "71.7. as_logger – Audit Series Logger")

    The **cidr_server** queries the data created by an as_logger module and displays the result in the cluster console. The **cidr_server** and as_logger can be configured to log data to a SAN. Locking semantics must be checked.

| [Prev](cluster.listeners)  | [Up](cluster) |  [Next](cluster.riak.configuration) |
| 16.5. Cluster-specific Listeners  | [Table of Contents](index) |  16.7. Configuring Riak in a Cluster |

