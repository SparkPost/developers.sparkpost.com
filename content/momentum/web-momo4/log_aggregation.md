|     |     |     |
| --- | --- | --- |
| [Prev](outbound_mail.relay_hosts)  | Part III. Configuring Momentum |  [Next](cluster.config.logging.centalized.logging) |
## Chapter 26. Log Aggregation
**Table of Contents**

* [26.1\. Configuring Log Aggregation](log_aggregation#log_aggregation.configuration)
* [26.2\. Centralized Logging Example](cluster.config.logging.centalized.logging)
* [26.3\. Complex Centralized Logging Deployments](cluster.config.logging.complex)
* [26.4\. Redundant Logs](cluster.config.logging.redundancy)
* [26.5\. Decommissioning a Log Aggregator](cluster.config.logging.decommissioning)

The log aggregation capability of the cluster provides a reliable, durable centralized logging facility. The default cluster configuration implements centralized logging in addition to the regular loggers and maintains its own local logs in the usual location.
There is no requirement that log aggregation be enabled. These logs are gathered for the customer's own use and are not used by any Momentum software. However, log aggregation means that you can see any log from any node on any date by going to the `/var/log/eccluster` directory on the log aggregator (if you use the default configuration).
## 26.1. Configuring Log Aggregation
The following elements are required in order to aggregate log files on the log aggregator:
*   Define logger modules in `ecelerity-cluster.conf`. See [Aggregated Cluster Node Logging](conf.ref.ecelerity_cluster.conf#conf.ref.ecelerity_cluster.conf.logging) .
*   Define the `logs` dictionary within the cluster module scope in `ecelerity-cluster.conf` See [logs](modules.cluster#option.logs.dictionary) .
    You can view the configuration by issuing the console command **config show cluster**              from the console on a cluster node.
*   Define the `Logs` stanza in `eccluster.conf`. See [Log Aggregation](conf.ref.eccluster.conf#conf.ref.eccluster.conf.logs) .

|     |     |     |
| --- | --- | --- |
| [Prev](outbound_mail.relay_hosts)  | [Up](p.configuration) |  [Next](cluster.config.logging.centalized.logging) |
| 25.7. Outbound Email Relay  | [Table of Contents](index) |  26.2. Centralized Logging Example |
