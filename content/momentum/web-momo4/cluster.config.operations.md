|     |     |     |
| --- | --- | --- |
| [Prev](operations.console.lua)  | Part V. Using the System Console |  [Next](cluster.config.operations.eccmgr.console) |
## Chapter 38. Using the Cluster Manager (eccmgr)
**Table of Contents**

* [38.1\. Connecting to the Console on the Cluster Manager](cluster.config.operations#idp4497120)
* [38.2\. Console Commands for the Cluster Manager](cluster.config.operations.eccmgr.console)

**eccmgr** is the Momentum Cluster Manager, henceforth referred to as the cluster manager. On start up, the script **/etc/init.d/eccmgr start**       runs **eccmgr** as a service on the node designated as Manager. For details about the available options, see [eccmgr](executable.eccmgr "eccmgr").
Use **eccmgr_ctl** to start, stop, or restart this service. For details about this command, see [eccmgr_ctl](executable.eccmgr_ctl "eccmgr_ctl").
## 38.1. Connecting to the Console on the Cluster Manager
When **eccmgr** is running, you can log in to the console as you would any other node - by issuing the command:
`/opt/msys/ecelerity/bin/ec_console`
A successful connection will result in output similar to the following:
```
##############################################
# eccmgr version: 3.0.10.30753 r(30754)
# Copyright (c) 1999-2009 Message Systems, Inc.
# All Rights Reserved.
##############################################
12:33:15 /tmp/2025>
```
For information about the console, see [`ec_console`](operations#operations.console "37.1. Connecting to the Console").
On Unix systems, **eccmgr** listens at `/tmp/2025` by default. If you should need to change this default, you must edit the `Control_Listener` stanza in [`eccluster.conf`](conf.ref.eccluster.conf "16.2. eccluster.conf File") and perhaps also your [`/opt/msys/ecelerity/etc/environment`](environment_file "Chapter 31. Configuring the Environment File") file.
When you are logged into the console of the cluster manager, you can use any of the commands listed in [Section 38.2, “Console Commands for the Cluster Manager”](cluster.config.operations.eccmgr.console "38.2. Console Commands for the Cluster Manager")
### Note
The cluster *module* belongs to the configuration of a node. For this reason, the console commands specific to the cluster *module* can only be issued from that node and not from within the **eccmgr** service. For a list of these commands, see [Section 71.19.4, “Cluster Module-specific Console Commands”](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands").

|     |     |     |
| --- | --- | --- |
| [Prev](operations.console.lua)  | [Up](p.operations) |  [Next](cluster.config.operations.eccmgr.console) |
| 37.5. Creating Custom Console Commands  | [Table of Contents](index) |  38.2. Console Commands for the Cluster Manager |
