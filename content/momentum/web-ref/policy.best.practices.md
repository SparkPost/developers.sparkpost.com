|     |     |     |
| --- | --- | --- |
| [Prev](policy.context-based-on-ip)  | Chapter 5. Implementing Policy with Momentum |  [Next](policy.conclusion) |

## 5.6. Best Practices for Manually Created Policy Scripts

Following best practices when manually creating policy scripts is important especially in a cluster environment when scripts are used on more than one node. Making use of the revision control system built in to Momentum is the best way to easily maintain policy scripts shared by different nodes.

If you plan to create your own Sieve or Lua scripts review the documentation at [eccfg](executable.eccfg "eccfg") and [Section 2.9.1, “Basic **eccfg** Commands”](conf.adding.configuration.files#conf.eccfg.commands "2.9.1. Basic eccfg Commands"); these sections describe the Subversion repository management wrapper, **eccfg**. This command is used to commit changes to the repository and to pull the latest configuration. Files added to the repository can be shared by all nodes or limited to specific nodes or subclusters.

When working with files that are under revision control it is important to take steps to avoid conflicts with changes made elsewhere in the system and to be able to track changes. For this reason perform the following actions before creating any policy scripts:

1.  Provision a user account for each admin user, so that the history in the repository is meaningful. For more information on creating administrative users see [Section 3.9, “Administering Users From the Web Console”](web3.users "3.9. Administering Users From the Web Console").

2.  Since changes made through the web UI are committed to the repository, make sure that it is not in use; commit or rollback any pending configuration changes and ensure that no-one is logged in to the web UI.

3.  Ensure that you have the latest updates on the node where you are creating the scripts by running **`/opt/msys/ecelerity/bin/eccfg pull`**      .

    ### Note

    Pay special attention to the instructions for using the **pull** command—if the configuration is updated your current directory may be invalidated. For more information see [eccfg](executable.eccfg "eccfg").

Scripts should be created in a directory that is under revision control. You should create a directory for your scripts in the working copy of the repository on a node where you intend to run the script. Create this directory under the `/opt/msys/ecelerity/etc/conf/default` directory if your scripts apply to all nodes in the subcluster. Otherwise, store them in the `global` directory if they apply to all nodes across the entire cluster, or use a node-specific directory. If you use both Sieve and Lua scripts you should create separate directories for each. If you are using Momentum version 3.0.16 or earlier, make sure to change the ownership of this directory and any scripts it contains, to `ecuser`. For example, to change the ownership of a directory named `lua_scripts` located below the `default` directory, navigate to `/opt/msys/ecelerity/etc/conf/default` and issue the command **chown -R ecuser:ecuser *`lua_scripts`***                                 .

### Note

Files and directories that are under revision control must be owned by `ecuser`. In versions of Momentum prior to 3.0.17, it is easy to get into a state where it was impossible to add a directory, but also unclear how to get out of that state. **eccfg** always runs the actual Subversion commands as `ecuser`, but if you created a new directory as root, the following situation would arise:

1.  The directory would get scheduled to be added to the repo; but you couldn't commit the directory, because ecuser would not have permission to create the `.svn` folder under the newly added directory.

2.  None of the files under the new directory would get added to the repository.

3.  The cron job `eccfg pull` would fail to update from the repository.

4.  The cron job `eccfg put running` would fail to commit as well.

Beginning with version 3.0.17, **eccfg** sets the ownership of all new files and directories to `ecuser`, prior to calling the actual **svn add**     command.

Once your script is complete, Update the configuration file by properly referencing your scripts. For instructions on manually changing your configuration file see [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files").

You can check the validity of your scripts by reloading the configuration. After your configuration has been changed, issue the command: **`/opt/msys/ecelerity/bin/ec_console /tmp/2025 config reload`**                         . If there are errors in your script the reload may fail and display a message such as the following:

```
Module 'scriptlet' instance 'scriptlet' initialization failed while
preparing to commit. Consult your vendor.
```

If the configuration fails to reload, Momentum continues to function using the running configuration and ignoring your changes.

Successfully reloading the configuration file does not guarantee that your script will run. Your script may be syntactically correct but have semantic errors. As always, you should test the functionality of scripts before implementing them in a production environment.

In a cluster, if you commit before you test on the local node, you risk pushing out a broken configuration across your cluster/subcluster. Therefore it is best practice to try the **config reload**        locally until you are happy that the configuration operates as expected, before making a commit. This may need to be staged; for instance, you will likely need to push out DuraVIP™ or binding configuration changes before policy script changes can be made.

Once you are satisfied that your scripts function correctly, if you are adding a new script, issue the command **eccfg commit ––username *`admin_user`* ––password *`passwd`* ––add-all --message *`message here`***                                                                                             . If you are editing a script you need not use the `––add-all` option. Doing this updates the repository. In all cases, edits made to the local configuration will need to be manually applied to the node via **config reload** ; the **eccfg commit**        command will not do it for you. Reload the configuration by issuing the system console command **`/opt/msys/ecelerity/bin/ec_console /tmp/2025 config reload`**                         . Reloading the configuration also takes care of flushing the Sieve cache. If your changes affect more than one node, each node will check for an updated configuration each minute and automatically check out your changes and issue a **config reload** .


|     |     |     |
| --- | --- | --- |
| [Prev](policy.context-based-on-ip)  | [Up](policy) |  [Next](policy.conclusion) |
| 5.5. Setting Context Based on Connecting IP  | [Table of Contents](index) |  5.7. Conclusion |
