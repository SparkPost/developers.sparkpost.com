|     |     |     |
| --- | --- | --- |
| [Prev](install.linux)  | Chapter 1. Installation |  [Next](install.options.php) |

## 1.7. Installation on Solaris

Momentum is packaged for 64-bit Intel and Sparc Solaris systems. You must download the package for your architecture, or you will not be able to run Momentum.

If you are making use of DuraVIP™ then You must install Ecelerity in a Solaris global zone. Additionally, the `privileges` option requires the `net_rawaccess` privilege which only works in a global zone.

The installation package for Solaris is distributed as a single compressed tar file, one for Sparc and one for Intel systems. The file can be found on the Message Systems support web site, named momentum-*`type`*-bundle-*`version`*-sol5.10.arch.tar.gz

The `version` here is the product version, and `arch` is the architecture you're running on. The `type` indicates whether the package is for sending or receiving.

### Note

As of version 3.4, mbus is no longer used so you do not need to issue the **svcadm enable mbus**             command.

### 1.7.1. Package Requirements Beyond a Core Installation

This section documents the packages that are required above and beyond a Solaris "core" install for installation of Momentum 3.0.15 for sending on 64-bit Intel and Sparc Solaris systems.

This following profile includes the smallest consistent installation that allows all of the Momentum-Sending roles to be installed. You may also exclude the packages labelled "webui" for an MTA-only install.

**UTF-8 Locales**

The default system locale must be UTF-8 or C (but if C an en_US.UTF-8 locale is also installed). In particular, you cannot have en_US.ISO8859-1, the so-called Latin1 set, as the system locale; this is not a complete locale and it will prevent the database from being initialized.

If you have any UTF-8 locales installed, PostgeSQL wants to have a complete set so it can store the data as UTF-8 and then convert it correctly for output.

For this reason make sure you have the following packages installed:

*   system SUNWeu8os American English/UTF-8 L10N

*   system SUNWeuluf UTF-8 L10N For Language

*   system SUNWeuodf UTF-8 Core OPENLOOK Desktop Files

The setting `LANG=en_US.UTF-8`is also recommended rather than `LANG=c`. This helps ensure that PostgreSQL won't object during installation. You can do this for installation only; it need not be the system default.

**Other Packages**

The Solaris core installation ships with the sendmail packages. Remove SUNWsndmr and SUNWsndmu using **pkgrm**. Otherwise you must disable these packages with **svcadm** before you start Momentum.

For cluster support install:

*   SUNWCreq

*   SUNWCssh

*   SUNWCntp

For diagnostic tools support install:

*   SUNWtoo

For core Momentum support install:

*   SUNWgccruntime

For UT8 locale support install:

*   SUNWeu8os

*   SUNWeuodf

*   SUNWeuluf

To support the web UI install:

*   SUNWpng

*   SUNWjpg

*   SUNWfreetype2

*   SUNWicu

Optional packages that you may need to install are as follows:

*   SUNWgcmn

*   SUNWwgetr

*   SUNWwgetu

*   SUNWless

*   SUNWbash

*   SUNWbind

*   SUNWbindr

*   SUNWdoc

*   SUNWman

*   SUNWtcsh

### 1.7.2. Installation

To unpack and install after downloading the file, perform the following commands:

**gzip -dc momentum-*`type`*-bundle-*`version`*-sol5.10.arch.tar.gz | tar xf -**

  **cd delivery-manager-VERSION**

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

### Note

Installation will fail if either of the following conditions is met:

*   `/etc/cron.d/cron.allow` exists and the user's name is not in it

*   `/etc/cron.d/cron.allow` does not exist and the user's name is in `/etc/cron.d/cron.deny`

If you use `cron.allow` or `cron.deny`, add `ecuser` to `/etc/cron.d/cron.allow` before starting the installer. In future, the installer will be amended to check for an existing `/etc/cron.d/cron.allow` and add `ecuser` to it.

During installation a service account and an admin account are created. Be sure to record the passwords that you use for these accounts; they are required when installing different roles. If you forget these passwords and need to retrieve them, navigate to the `/opt/mys/etc/installer` directory and open the `lastinstall` file.

This will start the Momentum installation procedure. You will be asked a series of questions. At the end of the installation you will be told how to start the Momentum server. Before you do this you should read the [configuration guide](conf "Chapter 2. Configuration") and modify your `/opt/msys/ecelerity/etc/conf/default/ecelerity.conf` file appropriately.

### 1.7.3. Solaris and the Web UI

In version 3.2, if you enable SSL for the web UI the web console may not start up.

To resolve this problem change `/opt/msys/ecwebui/config/httpd.conf` from:

`<VirtualHost _default_:443>`

to:

`<VirtualHost *:443>`

Alternately, nscd can be disabled in the following way: **`svcadm disable name-service-cache`**                            .

|     |     |     |
| --- | --- | --- |
| [Prev](install.linux)  | [Up](install.php) |  [Next](install.options.php) |
| 1.6. Installation on Linux  | [Table of Contents](index) |  1.8. Installer Options |
