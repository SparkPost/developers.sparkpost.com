|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.mbus)  | Chapter 7. Clustering |  [Next](cluster.config.duravip.php) |

## 7.4. Cluster Deployment

A cluster is comprised of at least one Manager node and one or more MTA nodes. The Manager node in the cluster must be installed with the database role via the installer; this will be your central point of management for the cluster.

The installer will create a default cluster-enabled configuration for you; this is the default configuration with an include line that references the `ecelerity-cluster.conf` configuration file. This can be found in `/opt/msys/ecelerity/etc/conf/default/ecelerity-cluster.conf`.

Simple deployments will not typically need to edit the cluster portions of this configuration. If you intend to use DuraVIP™ or to more tightly control the scope of replicate data, you will need to edit the configuration in the "cluster" stanza of the `ecelerity-cluster.conf` file (more details on this later).

Once you are happy with your configuration, you will commit it to the ecconfigd service by clicking the commit button in the webconsole (or by running the **eccfg commit**        command if you were working from the command line). For more information about this command see [eccfg](executable.eccfg "eccfg").

Bringing the MTA node online is then a simple matter of specifying the name of the subcluster that you'd like the MTA node to belong to and the installer will bootstrap that node, pull the configuration files and start services for you.

|     |     |     |
| --- | --- | --- |
| [Prev](cluster.config.mbus)  | [Up](cluster.php) |  [Next](cluster.config.duravip.php) |
| 7.3. Message Bus  | [Table of Contents](index) |  7.5. DuraVIP™: IP Fail over |
