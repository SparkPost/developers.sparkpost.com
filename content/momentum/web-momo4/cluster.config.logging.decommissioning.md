|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.logging.redundancy)  | Chapter 26. Log Aggregation |  [Next](cluster.config.duravip) |

## 26.5. Decommissioning a Log Aggregator

To decommission a log aggregator, complete the following operational procedure:

1.  Modify the `ecelerity-cluster.conf` file(s) for the affected subclusters and remove the log aggregator from the subscriber list(s) in the log file names.

2.  Apply that configuration to the cluster.

3.  Allow time for the log aggregator to drain any remaining log data from the node(s). You may opt to skip this part if you have no plan to retain this data.

4.  Remove the log aggregator from your cluster.

5.  On each of the nodes that was journalling data for that log aggregator, use the [jlogctl](executable.jlogctl "jlogctl") tool to erase the now redundant subscriber checkpoint information from each of the jlog files.

|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.logging.redundancy)  | [Up](log_aggregation) |  [Next](cluster.config.duravip) |
| 26.4. Redundant Logs  | [Table of Contents](index) |  Chapter 27. DuraVIP™: IP Fail over |

