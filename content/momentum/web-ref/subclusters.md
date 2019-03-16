| [Prev](cluster)  | Chapter 7. Clustering |  [Next](cluster.config.management) |

## 7.1. Subclusters

The cluster may be further divided into subclusters, which enables the following use-cases:

*   Geographically disparate data centers connected via a WAN link that need to share traffic metrics, but want to avoid moving other data across the WAN link because it is either unneccessary or too expensive.

*   Staging and production environments, where new configurations are tested in a replica of the intended production environment before they are rolled out.

Subclusters are logical divisions of the cluster and need not have any direct relationship to network topology. You may run multiple subclusters on the same subnet, have them on separate subnets, or have a subcluster span subnets, provided that you configure the messaging bus so that it knows how to route to all the nodes that are part of the overall cluster. A given node is associated with one and only one subcluster.

### Note

When installing a multi-cluster environment, any non-default subclusters (subclusters that the manager does not belong to) are not preconfigured by the installer. In particular, a subcluster configuration file is generated, but the line that activates the clustering is not uncommented: `# include ecelerity-cluster.conf`.

*You must manually uncomment this line on nodes that do not belong to the same subcluster as the manager.*                                                                                                      See [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files") for instructions on manually changing configuration files.

DuraVIP™ does not work across different subnets, meaning you cannot have a DuraVIP™ migrate between servers on different LAN segments, because there is no way to alter the underlying networking. The system will allow you to configure DuraVIP™s across segments, but such configurations will not work properly.

### 7.1.1. Using Subclusters

Installing subclusters is essentially the same as a normal cluster installation with the exception: Subcluster names **must** be lower case and **must** be a single word.

The subcluster names that you assigned during installation will *not* appear in the file system under the `/opt/msys/ecelerity/etc` directory. Working copies of subcluster configurations are stored in the `/opt/msys/ecelerity/etc/default` directory.

If you are unsure of the subcluster name of a specific node, you can determine it from the command line by issuing the command **`/opt/msys/3rdParty/bin/svn info /opt/msys/ecelerity/etc/conf`**                                   . This should result in output similar to the following:

```
Path: /opt/msys/ecelerity/etc/conf
URL: http://scmgr:2027/config/west/boot
Repository Root: http://scmgr:2027/config/west
Repository UUID: 1fd6f902-c58e-4964-bfd7-c624aa062895
Revision: 4
Node Kind: directory
Schedule: normal
Last Changed Author: admin
Last Changed Rev: 4
Last Changed Date: 2009-11-23 12:09:41 -0700 (Mon, 23 Nov 2009)
```

The subcluster name can be determined by looking at the `Repository Root` line. In this particular case, the name is `west`.

| [Prev](cluster)  | [Up](cluster) |  [Next](cluster.config.management) |
| Chapter 7. Clustering  | [Table of Contents](index) |  7.2. Configuration Management |
