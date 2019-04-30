|     |     |     |
| --- | --- | --- |
| [Prev](install.riak)  | Chapter 1. Installation |  [Next](install.cluster.php) |

## 1.11. Performing a Stand-alone Installation

A stand-alone installation should be performed when you intend to install the product on a single machine.

To perform a stand-alone installation:

1.  Download and extract the installation bundle as discussed in the operating system specific installation sections.

2.  Run the **installer** script.

3.  When prompted, enter `singlenode` for the role selection. This is a shortcut for the `mta`, `database` and `web` roles.

4.  Because you are installing the database role you will be prompted for a location for storing data. The default is `/var/db/msyspg`.

5.  You will also be prompted for a web UI password for the account named 'admin'.

    The MTA needs access to the PostgreSQL database and to ecconfigd to manage authentication and replication. For this reason you must also provide a password for the service account.

6.  During installation configuration files with reasonable defaults are added to the local configuration repository for you to use as the basis for your installation. You are strongly encouraged to review the files here: `/opt/msys/ecelerity/etc/conf` before running Momentum in a production environment.

    You can view and manage configuration files from the web console. For more information on this topic see [Section 3.8, “Administration”](web3.administration "3.8. Administration").

    Copy your license to the `/opt/msys/ecelerity/etc` directory before starting the services if you are not connected to the Internet.

7.  Confirm the success of your installation by logging in to the web console supplying `admin` as the username and the password created during installation.

|     |     |     |
| --- | --- | --- |
| [Prev](install.riak)  | [Up](install.php) |  [Next](install.cluster.php) |
| 1.10. Riak Server  | [Table of Contents](index) |  1.12. Installing a Cluster |
