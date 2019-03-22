| [Prev](conf.manual.changes)  | Chapter 2. Configuration |  [Next](conf.starting.php) |

## 2.9. Best Practices for Adding Configuration Files

Use the `include` directive if it is possible to split your Momentum configuration into any number of files. For example, the `webui-common.conf` file is included in the default `ecelerity.conf` file. For more information on using the include directive see [ecelerity.conf](ecelerity.conf "ecelerity.conf").

Files such as `webui-common.conf` that are included during installation are automatically under revision control. If you wish to make manual changes to such files, follow the procedures described in [Section 2.8, “Best Practices for Manually Changing Configuration Files”](conf.manual.changes "2.8. Best Practices for Manually Changing Configuration Files").

However, if you wish to add new configuration files you will also need to add them to the repository. The steps are as follows:

1.  Navigate to the appropriate directory for the changes you intend to make. You will save your files to a different directory on a different node depending upon how narrowly or widely your configuration applies. For more information about the repository directory structure see [Section 2.7, “The Momentum Configuration Server: ecconfigd”](conf.ecconfigd "2.7. The Momentum Configuration Server: ecconfigd"). If you are adding a configuration file for a subcluster see [Section 2.8.2, “Manually Editing Configuration Files in a Subcluster”](conf.manual.changes.php#conf.manual.changes.subcluster "2.8.2. Manually Editing Configuration Files in a Subcluster"). If you have a stand-alone configuration, you only need worry about the configuration files in the `/opt/msys/ecelerity/etc/conf/default` directory.

2.  Log out of the web UI. This is not a requirement but helps ensure that there are no conflicting changes to the configuration.

3.  Make sure that the working copy of the repository is up-to-date by issuing the command **eccfg pull --username *`name`* --password *`passwd`***                                               .

4.  Once the new file has been created and saved, open the appropriate `ecelerity.conf` file and include the new file. For information about the syntax of `include` see [ecelerity.conf](ecelerity.conf "ecelerity.conf").

5.  To check that your changes are valid reload the configuration before committing it. If there are any errors the new configuration will not load and the error message, `Reconfigure failed`, will be displayed.

6.  Once you are satisfied with your changes commit them to the repository. If you are configuring a cluster, you should allow about a minute or so for the changes to propagate.

7.  *Your changes are not automatically loaded by the running ecelerity process.*                                                                        To implement your changes, open the system console and issue the command **`config reload`**        . You can view the effective configuration settings using the system console command **`config showrecurse`**             . You may want to turn the pager on first by entering the command, **`\pager`**. There is no need to restart the MTA.

### 2.9.1. Basic eccfg Commands

The **eccfg** command is a wrapper for Subversion revision control and is described in detail in [eccfg](executable.eccfg "eccfg"). If you plan to manually change your configuration files or to add manually created policy scripts you must be familiar with this command.

### Note

Since the web UI makes use of Momentum's revision control system, before using **eccfg** it is best practice to ensure that configuration changes are not currently being made through the web UI.

Unlike Subversion, **eccfg** does not act on your current working directory. **eccfg** targets the `/opt/msys/ecelerity/etc/conf` directory and will affect any files in that directory or below that directory. If you wish to limit your interaction to files in a specific directory then use the --wc *`/path/to/directory`* option.

Two options that you must use are the --username *`name`* and --password *`password`* options. These options require the credentials of a user with administrative privileges. The administrative user created during installation is named `admin` and the password for this user is whatever you supplied during installation. To add other administrative accounts see [Section 3.9, “Administering Users From the Web Console”](web3.users "3.9. Administering Users From the Web Console"). If you don't specify a `username` then the value of this option defaults to the value of the environment variable, `USER`. If you don't supply a `password`, **eccfg** interactively requests one.

In most circumstances you will only need to use a limited number of the **eccfg** commands. The commonly used **eccfg** commands are described in the following list:

*   **eccfg pull**      – Update the local repository if required. As with any revision control system, it is best practice to update the working copy of the repository prior to making any changes. Note that this command may invalidate the current directory, requiring the use of **`cd /path/working/directory`**                         .

*   **eccfg commit -–add-all**                  – This command queues any new files below the `/opt/msys/ecelerity/etc/conf` directory for addition to the repository.

    If you are creating new configuration files or scripts, you must use this command.

    ### Note

    Files and directories that are under revision control must be owned by `ecuser`. In versions of Momentum prior to 3.0.17, it is easy to get into a state where it was impossible to add a directory, but also unclear how to get out of that state. **eccfg** always runs the actual Subversion commands as `ecuser`, but if you created a new directory as root, the following situation would arise: The directory would get scheduled to be added to the repository; but you couldn't commit the directory, because ecuser would not have permission to create the `.svn` folder under the newly added directory.

    Beginning with version 3.0.17, **eccfg** sets the ownership of all new files and directories to `ecuser`, prior to calling the actual **svn add**     command.

*   **eccfg delete *`filename | path`***                             – When a file name is specified this command queues that file for removal from the repository. If a directory is specified, that directory is queued for recursive removal from the repository. In both cases this command must be followed by a commit.

    If you wish to remove a file or directory that is under revision control do not use **rm**: instead use **eccfg delete** . For example if you wish to remove a directory named `myscripts` that is immediately below your current directory issue the commands:

    ```
    shell> /opt/msys/ecelerity/bin/eccfg delete ––username admin ––password admin_passwd myscripts
    shell> /opt/msys/ecelerity/bin/eccfg commit ––username admin ––password admin_passwd
    ```

    ### Note

    In most cases, when you are removing a file from the repository you will also need to remove references to this file from a configuration file.

*   **eccfg commit**        – This command commits any changes made to files under revision control. It also adds or removes any pending files.

    If there are no changes, you will see the message: `Nothing to commit`. Otherwise you will see a message such as the following:

    ```
    Sending        default/ecelerity.conf
    Transmitting file data.
    Committed revision 47.
    ```

    It is also important to remember what this command doesn't do: *Committing changes does not automatically load them into the running ecelerity process.*                                                                              To implement your changes, open the system console and issue the command **`config reload`**        .

| [Prev](conf.manual.changes)  | [Up](conf.php) |  [Next](conf.starting.php) |
| 2.8. Best Practices for Manually Changing Configuration Files  | [Table of Contents](index) |  2.10. Starting Momentum |
