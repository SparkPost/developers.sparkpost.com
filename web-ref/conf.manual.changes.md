|     |     |     |
| --- | --- | --- |
| [Prev](conf.ecconfigd)  | Chapter 2. Configuration |  [Next](conf.adding.configuration.files.php) |

## 2.8. Best Practices for Manually Changing Configuration Files

The recommended method of making changes to your configuration is to use the web UI. [Chapter 3, *Using the Web Console*                ](web3 "Chapter 3. Using the Web Console") describes how to do this. If you wish, you can manually change your configuration by editing configuration files directly.

Since the configuration files are under revision control it is important to take steps to avoid conflicts with changes made elsewhere in the system and to be able to track changes. For this reason perform the following actions when editing `ecelerity.conf` (or other configuration or script files) directly:

1.  Familiarize yourself with the Momentum repository management tool [eccfg](executable.eccfg "eccfg"). However, in the majority of cases you will likely need to use only a small subset of the **eccfg** commands that are available. Commonly used commands are described in [Section 2.9.1, “Basic **eccfg** Commands”](conf.adding.configuration.files.php#conf.eccfg.commands "2.9.1. Basic eccfg Commands").

2.  Provision a user account for each admin user, so that the history in the repository is meaningful. For more information on creating administrative users see [Section 3.9, “Administering Users From the Web Console”](web3.users "3.9. Administering Users From the Web Console").

3.  Log out of the web UI. This is not a requirement but helps ensure that there are no conflicting changes to the configuration.

4.  Navigate to the appropriate directory. For example, if you are changing configuration options that apply to the default subcluster navigate to `/opt/msys/ecelerity/etc/conf/default` directory and edit the `ecelerity.conf` file in that directory. For editing configuration files in a subcluster see [Section 2.8.2, “Manually Editing Configuration Files in a Subcluster”](conf.manual.changes#conf.manual.changes.subcluster "2.8.2. Manually Editing Configuration Files in a Subcluster"). If you have a stand-alone configuration, you only need worry about the configuration files in the `/opt/msys/ecelerity/etc/conf/default` directory.

5.  Issue the command **eccfg pull**      to make sure that your working copy is up to date.

6.  Make the necessary changes to `ecelerity.conf` using the text editor of your choice.

7.  One way to check that your changes are valid is to reload the configuration before committing it. This is done by issuing the command **`/opt/msys/ecelerity/bin/ec_console /tmp/2025 config reload`**                         . If there are any errors the new configuration will not load and the error message, `Reconfigure failed`, will be displayed.

    ### Note

    You can also use the **validate_config** script to test the validity of your changes. For more information see [validate_config](executable.validate_config "validate_config").

8.  Once you are satisfied with your changes commit them in the following way:

    shell> /opt/msys/ecelerity/bin/eccfg commit --username *`admin_user`* \
     --password *`password`*

    If you are configuring a cluster, you should allow about a minute or so for the changes to propagate.

9.  *If you make changes to a node, your changes are not automatically loaded by the running ecelerity process.*                                                                                                         To implement your changes, open the system console and issue the command **`config reload`**        . You can view the effective configuration settings using the system console command **`config showrecurse`**             . You may want to turn the pager on first by entering the command, **`\pager`**. There is no need to restart the MTA.

    In a cluster configuration, the best practice is to make the configuration change in the file on the manager node, and then use eccfg as described in the previous step. The changes will be propagated to all of the MTAs and will be automatically loaded by the running ecelerity processes.

### Warning

Avoid leaving uncommitted changes pending, especially in the working copy on a node, as you may prevent the system from accepting changes made by someone else via the web UI.

### 2.8.1. Modifying Bindings in a Cluster Configuration File

### Warning

If in a cluster configuration using DuraVIP™ bindings, you modify bindings in the configuration file, a possible race condition means that a **config reload**        taking effect on multiple machines at the same time can cause nodes to disagree about who owns which binding. For this reason it is strongly suggested that you execute the console command **broadcast cluster duravip announce view**                               immediately after **config reload** . Doing this synchronizes ownership of the bindings and eliminates a possible race condition among the nodes.

### 2.8.2. Manually Editing Configuration Files in a Subcluster

When configuring Momentum through the Web UI, it is easy to select the subcluster you want to change. Deciding which configuration file to change manually can be difficult. Unlike a normal cluster configuration, when there are subclusters there are multiple repositories.

Additionally, the subcluster that a specific node belongs to is not readily apparent. Working copies of subcluster configurations are stored in the `/opt/msys/ecelerity/etc/default` directory and there is no overt indication of the subcluster name. From the command line you can determine the subcluster that a node belongs to by issuing the command **`/opt/msys/3rdParty/bin/svn info /opt/msys/ecelerity/etc/conf`**                                   . Examine the `Repository Root` line of the output to determine the subcluster name.

To manually change the configuration of a subcluster you can modify the configuration file on any node in the target subcluster. For instance, if you want to make configuration changes to the `east` subcluster, log into any `east` node and then perform the steps described in [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files") if you are altering an existing file or [Section 2.9, “Best Practices for Adding Configuration Files”](conf.adding.configuration.files.php "2.9. Best Practices for Adding Configuration Files") if you are adding a configuration file.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ecconfigd)  | [Up](conf.php) |  [Next](conf.adding.configuration.files.php) |
| 2.7. The Momentum Configuration Server: ecconfigd  | [Table of Contents](index) |  2.9. Best Practices for Adding Configuration Files |
