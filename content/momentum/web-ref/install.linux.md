|     |     |     |
| --- | --- | --- |
| [Prev](install.os-specific)  | Chapter 1. Installation |  [Next](install.solaris.php) |

## 1.6. Installation on Linux

Momentum is packaged for a number of Linux distributions. Choosing the correct package for your OS is critical to Momentum performing correctly, as different Linux distributions utilize different versions of critical system libraries and Momentum also uses certain platform-specific optimizations.

The installation package for Linux is distributed as a single compressed tar file, one for each supported Linux distribution. The file can be found on the Message Systems support web site, named momentum-*`type`*-bundle-*`version-platform.arch`*.tar.gz .

`version` indicates the product version, `platform` the platform you're running on (for example, rhel5 for RedHat Enterprise Linux 5), and `arch` indicates the architecture. `type` indicates whether the package is for sending or receiving.

To unpack and install after downloading the file, perform the following commands:

**tar xzf momentum-*`type`*-bundle-*`version-platform.arch`*.tar.gz.tar.gz**

**cd momentum-*`type-version`***

**./installer**
### Note

For the options available with the **installer** command see [Section 1.8, “Installer Options”](install.options "1.8. Installer Options").

During installation the following roles are available:

*   `database` – data store (max 1 per deployment)

*   `manager` – cluster service manager for a cluster of MTAs

*   `mta` – for sending/receiving email

*   `singlenode` – shortcut for the mta, database and web roles

*   `web` – browser driven control panel

When running the installer you will be asked a series of questions that vary depending upon the roles chosen. If you are installing the database on a separate machine, you *must* install this role first. Additionally, if you are installing a cluster configuration, the manager must be installed before the nodes.

During installation a service account and an admin account are created. Be sure to record the passwords that you use for these accounts; they are required when installing different roles.

At the end of the installation you will be told how to start the Momentum server. Before you do this you should read the [configuration guide](conf "Chapter 2. Configuration") and modify your `/opt/msys/ecelerity/etc/conf/default/ecelerity.conf` file appropriately.

|     |     |     |
| --- | --- | --- |
| [Prev](install.os-specific)  | [Up](install.php) |  [Next](install.solaris.php) |
| 1.5. Operating System Specific Preparation  | [Table of Contents](index) |  1.7. Installation on Solaris |
