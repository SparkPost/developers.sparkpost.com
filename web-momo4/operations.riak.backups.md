| [Prev](operations.riak.ports)  | Chapter 30. Riak |  [Next](environment_file) |

## 30.4. Backups

Riak data is distributed across the nodes in the cluster. Provided that you have enough nodes remaining online, the need to restore from a backup should be quite a rare event.

Riak offers the ability to backup all data present on a given node or all data present in the cluster. The backup is stored in a file named by the administrator. This backup can later be used to restore the state of the node or cluster depending on the nature of the backup file.

For details about backing up Riak, consult the [Riak](http://http://docs.basho.com/riak/latest/) documentation.

### Note

Note that some of the Message Systems use cases may result in a large volume of data being retained in Riak. Expect the backup files to be equally large.

| [Prev](operations.riak.ports)  | [Up](riak) |  [Next](environment_file) |
| 30.3. Riak Ports  | [Table of Contents](index) |  Chapter 31. Configuring the Environment File |

