| [Prev](hardware.config)  | Chapter 5. Hardware Considerations |  [Next](addl.config.notes) |

## 5.6. Production Environment Configurations

This section provides hardware specifications for different target volume levels. All systems are rated for use with CPU utilization at 50% in order to accommodate traffic spikes. All volumes are specified with the assumption of an average message size of 100 kB.

### Enterprise Basic Cluster

The Enterprise Basic Configuration consists of three nodes running all roles with the resources specified below. The system supports the following performance ratings.

<a name="enterprise_basic_performance_ratings"></a>

**Table 5.3. Enterprise Basic - Performance Ratings**

| Node Capacity | 

Cluster Capacity

(2 Nodes Operational)

 | 

Peak Cluster Capacity

(3 Nodes Operational)

 |
| --- | --- | --- |
| 500,000 Msg/hr | 1 M Msg/hr | 1.5 M Msg/hr |

<a name="enterprise_basic_cluster_hw_reqs"></a>

**Table 5.4. Enterprise Basic - Hardware Requirements**

| Resource | Minimum Specification |
| --- | --- |
| CPU | 8 x 2.5 GHz Cores (Min Speed) |
| Memory | 32 GB RAM |
| Network Interface | 1 GB NIC |

<a name="enterprise_basic_cluster_storage_array"></a>

**Table 5.5. Enterprise Basic - Storage Array Configuration**

| Array | Configuration | Mount Points and Notes |
| --- | --- | --- |
| All Storage | 6 x 300 GB 15k RPM HDD |   |
| Message Spools | 2 x 300 GB in RAID1 | 

/var/spool/ecelerity

Note: This array should be dedicated to the spools.

 |
| OS, App Binaries, Logs, Platform DB, Analytics DB | 2 x 300 GB in RAID1 | 

*   OS - / (root)

*   Logs - /var/log/ecelerity

*   App Binaries - /opt./msys

*   Platform DB - /var/db/cassandra

*   Analytics DB - /var/db/vertica

 |

### Enterprise Standard Cluster

The Enterprise Standard Configuration consists of three nodes running all roles with the resources specified below. The system supports the following performance ratings.

<a name="enterprise_standard_performance_ratings"></a>

**Table 5.6. Enterprise Standard - Performance Ratings**

| Node Capacity | 

Cluster Capacity

(2 Nodes Operational)

 | 

Peak Cluster Capacity

(3 Nodes Operational)

 |
| --- | --- | --- |
| 1 M Msg/hr | 2 M Msg/hr | 3 M Msg/hr |

<a name="enterprise_standard_cluster_hw_reqs"></a>

**Table 5.7. Enterprise Standard - Hardware Requirements**

| Resource | Minimum Specification |
| --- | --- |
| CPU | 16 x 2.5 GHz Cores (Min Speed) |
| Memory | 64 GB RAM |
| Network Interface | 1 GB NIC |

<a name="enterprise_standard_cluster_storage_array"></a>

**Table 5.8. Enterprise Standard - Storage Array Configuration**

| Array | Configuration | Mount Points and Notes |
| --- | --- | --- |
| All Storage | 8 x 300 GB 15k RPM HDD |   |
| Message Spools | 4 x 300 GB in RAID10 | 

/var/spool/ecelerity

Note: This array should be dedicated to the spools.

 |
| OS, App Binaries, Logs, Platform DB | 2 x 300 GB in RAID1 | 

*   OS - / (root)

*   Logs - /var/log/ecelerity

*   App Binaries - /opt./msys

*   Platform DB - /var/db/cassandra

 |
| Analytics DB | 2 x 300 GB in RAID1 | 

Analytics DB - /var/db/vertica

Note: This array should be dedicated to the Analytics DB.

 |

### Enterprise Plus Cluster

The Enterprise Plus Configuration consists of three nodes running all roles with the resources specified below. The system supports the following performance ratings.

<a name="enterprise_plus_performance_ratings"></a>

**Table 5.9. Enterprise Plus - Performance Ratings**

| Node Capacity | 

Cluster Capacity

(2 Nodes Operational)

 | 

Peak Cluster Capacity

(3 Nodes Operational)

 |
| --- | --- | --- |
| 1.5 M Msg/hr | 3 M Msg/hr | 4.5 M Msg/hr |

<a name="enterprise_plus_cluster_hw_reqs"></a>

**Table 5.10. Enterprise Plus - Hardware Requirements**

| Resource | Minimum Specification |
| --- | --- |
| CPU | 20 x 2.5 GHz Cores (Min Speed) |
| Memory | 64 GB RAM |
| Network Interface | 1 GB NIC |

<a name="enterprise_plus_cluster_storage_array"></a>

**Table 5.11. Enterprise Plus - Storage Array Configuration**

| Array | Configuration | Mount Points and Notes |
| --- | --- | --- |
| All Storage | 8 x 600 GB 15k RPM HDD |   |
| Message Spools | 4 x 600 GB in RAID10 | 

/var/spool/ecelerity

Note: This array should be dedicated to the spools.

 |
| OS, App Binaries, Logs, Platform DB | 2 x 600 GB in RAID1 | 

*   OS - / (root)

*   Logs - /var/log/ecelerity

*   App Binaries - /opt./msys

*   Platform DB - /var/db/cassandra

 |
| Analytics DB | 2 x 600 GB in RAID1 | 

Analytics DB - /var/db/vertica

Note: This array should be dedicated to the Analytics DB.

 |

### Enterprise Scaling Cluster

The Enterprise Scaling Configuration consists of both an Analytics Cluster and a Platform Cluster. Because large volume deployments require more resources for sending than for analytics, Message Systems recommends separating the Platform and Analytics roles to separate clusters. This configuration allows you to scale the Platform cluster independent of the analytics cluster. The baseline configuration consists of a three-node Analytics Cluster and a three-node Platform Cluster. You may scale sending capacity by incrementally adding Platform nodes to the cluster as needed.

The baseline system supports the following performance ratings.

<a name="enterprise_scaling_performance_ratings"></a>

**Table 5.12. Enterprise Scaling - Performance Ratings**

| 

Baseline Cluster Capacity

(2 Nodes Operational)

 | 

Baseline Peak Cluster Capacity

(3 Nodes Operational)

 | Incremental Platform Node Capacity |
| --- | --- | --- |
| 3 M Msg/hr | 4.5 M Msg/hr | 1.5 M Msg/hr |

<a name="enterprise_scaling_platform_node_cluster_hw_reqs"></a>

**Table 5.13. Enterprise Scaling - Hardware Requirements for Platform Node**

| Resource | Minimum Specification |
| --- | --- |
| CPU | 20 x 2.5 GHz Cores (Min Speed) |
| Memory | 64 GB RAM |
| Network Interface | 1 GB NIC |

<a name="enterprise_scaling_platform_node_cluster_storage_array"></a>

**Table 5.14. Enterprise Scaling - Storage Array Configuration for Platform Node**

| Array | Configuration | Mount Points and Notes |
| --- | --- | --- |
| All Storage | 8 x 600 GB 15k RPM HDD |   |
| Message Spools | 4 x 600 GB in RAID10 | 

/var/spool/ecelerity

Note: This array should be dedicated to the spools.

 |
| OS, App Binaries, Logs, Platform DB | 2 x 600 GB in RAID1 | 

*   OS - / (root)

*   Logs - /var/log/ecelerity

*   App Binaries - /opt./msys

*   Platform DB - /var/db/cassandra

 |

<a name="enterprise_scaling_analytics_node_cluster_hw_reqs"></a>

**Table 5.15. Enterprise Scaling - Hardware Requirements for Analytics Node**

| Resource | Minimum Specification |
| --- | --- |
| CPU | 20 x 2.5 GHz Cores (Min Speed) |
| Memory | 64 GB RAM |
| Network Interface | 1 GB NIC |

<a name="enterprise_scaling_analytics_node_cluster_storage_array"></a>

**Table 5.16. Enterprise Scaling - Storage Array Configuration for Analytics Node**

| Array | Configuration | Mount Points and Notes |
| --- | --- | --- |
| All Storage | 4 x 600 GB 15k RPM HDD |   |
| OS, App Binaries, Logs | 2 x 600 GB in RAID1 | 

*   OS - / (root)

*   Logs - /var/log/ecelerity

*   App Binaries - /opt./msys

 |
| Analytics DB | 2 x 600 GB in RAID1 | 

Analytics DB - /var/db/vertica

Note: This array should be dedicated to the Analytics DB.

 |

| [Prev](hardware.config)  | [Up](hardware.requirements) |  [Next](addl.config.notes) |
| 5.5. Hardware Deployment Configuration  | [Table of Contents](index) |  5.7. Additional Configuration Notes |

