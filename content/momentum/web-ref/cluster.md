|     |     |     |
| --- | --- | --- |
| [Prev](policy.context-mess)  | Part I. Configuration Guide |  [Next](subclusters.php) |
## Chapter 7. Clustering
**Table of Contents**

* [7.1\. Subclusters](subclusters)
* [7.2\. Configuration Management](cluster.config.management)
* [7.3\. Message Bus](cluster.config.mbus)
* [7.4\. Cluster Deployment](cluster.config.deployment)
* [7.5\. DuraVIP™: IP Fail over](cluster.config.duravip)
* [7.6\. Log Aggregation](cluster.config.logging)
* [7.7\. Data Replication](cluster.config.replication)
* [7.8\. Using the Cluster Manager](cluster.config.operations)
* [7.9\. Configuring Momentum for High Availability and Failover](cluster.config.failover)
* [7.10\. The `cidr_server`](cluster.cidr_server)

The clustering capabilities of the product enable the following features:
*   Centralized management of configuration for multiple MTA nodes
*   Replicated, redundant, configuration repository with revision control
*   Log aggregation pulls log files from MTA nodes to centralized location(s) on the network
*   Replication of a variety of real-time metrics to allow cluster-wide coordination for inbound and outbound traffic shaping
*   DuraVIP™, our IP Failover mechanism.
Clustering is based on the concept of having a cluster of machines that communicate using a group communication message bus. Ideally, a cluster will have a dedicated gigabit network for transmission of replicated data and internal message moves.
The product assumes that the cluster network is a trusted network, meaning that it leaves host based authentication to be implemented by the network administrator at an appropriate firewall on the network.

|     |     |     |
| --- | --- | --- |
| [Prev](policy.context-mess)  | [Up](p.guide.php) |  [Next](subclusters.php) |
| 6.2. Message Context Variables  | [Table of Contents](index) |  7.1. Subclusters |
