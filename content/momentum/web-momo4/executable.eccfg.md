|     |     |     |
| --- | --- | --- |
| [Prev](executable.ec_show)  | Chapter 74. Executable Commands Reference |  [Next](executable.eccmgr) |

<a name="executable.eccfg"></a>
## Name

eccfg — Subversion repository management

## Synopsis

`/opt/msys/ecelerity/bin/eccfg` [ -h ]

`/opt/msys/ecelerity/bin/eccfg` [ bootstrap [--quiet | --debug] [--username *`name`*] [--password *`pass`*] [--wc *`path`*] --clustername *`name`* | --singlenode [*`host[:port]`*] ]

`/opt/msys/ecelerity/bin/eccfg` [ clone [--quiet | --debug] [--username *`name`*] [--password *`pass`*] [--wc *`path`*] *`source destination`*              ]

`/opt/msys/ecelerity/bin/eccfg` [ commit [--quiet | --debug] [--username *`name`*] [--password *`pass`*] [--wc *`path`*] [--add-all] [--message *`message`*] [--delete-all] [--message *`message`*] ]

`/opt/msys/ecelerity/bin/eccfg` [ delete [--quiet | --debug] [--username *`name`*] [--password *`pass`*] [--wc *`path`*] *`file [...]`*        ]

`/opt/msys/ecelerity/bin/eccfg` [ overlay [--quiet | --debug] [--username *`name`*] [--password *`pass`*] [--wc *`path`*] *`source destination`*              ]

`/opt/msys/ecelerity/bin/eccfg` [ pull [--quiet | --debug] [--username *`name`*] [--password *`pass`*] [--wc *`path`*] [--auto] [--mine | --theirs | --manual] ]

`/opt/msys/ecelerity/bin/eccfg` [ put [--quiet | --debug] [--username *`name`*] [--password *`pass`*] [--wc *`path`*] [--message *`message`*] *`source destination`*              ]

`/opt/msys/ecelerity/bin/eccfg` [ put [--quiet | --debug] [--username *`name`*] [--password *`pass`*] [--wc *`path`*] [--message *`message`*] running ]

`/opt/msys/ecelerity/bin/eccfg` [ resolve [--quiet | --debug] [--username *`name`*] [--password *`pass`*] [--wc *`path`*] [--revert] ]

`/opt/msys/ecelerity/bin/eccfg` [ revert [--quiet | --debug] [--username *`name`*] [--password *`pass`*] [--wc *`path`*] *`file ...`*      ]

`/opt/msys/ecelerity/bin/eccfg` [ status [--quiet | --debug] [--username *`name`*] [--password *`pass`*] [--wc *`path`*] *`file ...`*      ]

`/opt/msys/ecelerity/bin/eccfg` [ subcluster clusters ]

`/opt/msys/ecelerity/bin/eccfg` [ subcluster conflict *`cluster`* ]

`/opt/msys/ecelerity/bin/eccfg` [ subcluster copy [--with-history] *`cluster destination`*              ]

`/opt/msys/ecelerity/bin/eccfg` [ subcluster create *`cluster`* ]

`/opt/msys/ecelerity/bin/eccfg` [ subcluster master [*`cluster`*] ]

`/opt/msys/ecelerity/bin/eccfg` [ subcluster override *`cluster node`*       ]

`/opt/msys/ecelerity/bin/eccfg` [ subcluster resolve *`cluster`* ]

`/opt/msys/ecelerity/bin/eccfg` [ subcluster resume *`cluster node`*       ]

`/opt/msys/ecelerity/bin/eccfg` [ subcluster slaves [*`cluster`*] ]

<a name="idp11008096"></a>
## Description

**eccfg** is the Momentum version control management tool used to track and update configuration file changes. The version control management tool that Momentum uses is Subversion. When Momentum is first installed, configuration files such as `ecelerity.conf` are checked in to a repository and working copies are distributed to the nodes (if in a cluster configuration). **eccfg** interacts with the resident `ecconfigd` daemon to manage your configuration files.

Unlike Subversion, **eccfg** does not act on your current working directory. **eccfg** targets the `/opt/msys/ecelerity/etc/conf` directory and will affect any files in that directory or below that directory. If you wish to limit your interaction to files in a specific directory, use the --wc *`/path/to/directory`* option.

In a Momentum cluster, where a number of nodes share the same configuration, version control management is especially important for ensuring that configuration changes are synchronized out across all nodes. In a single-node configuration or a cluster where the configuration of each node is relatively unique, the more important role for version control management is tracking changes. If a new configuration is not working as expected, it's easy to revert changes.

If you change any configuration files or add configuration files, it is strongly recommended that you track such changes using the revision control system. Reverting changes and distributing them is most easily managed in this way. Files and directories that are under revision control must be owned by `ecuser`. **eccfg** sets the ownership of all new files and directories to `ecuser`, prior to calling the actual **svn add**     command.

Situations such as the following typically require the use of this command:

*   Updating any configuration files that are under revision control – See [Section 15.1.4, “Changing Configuration Files”](conf.overview#conf.manual.changes "15.1.4. Changing Configuration Files").

*   Adding new configuration files that are "included" using the `include` directive – See [Section 15.1.5, “Adding Configuration Files”](conf.overview#conf.adding.configuration.files "15.1.5. Adding Configuration Files").

*   Adding Lua policy scripts – See [Section 62.2.4, “Creating Policy Scripts”](implementing.policy.scriptlets#policy.best.practices "62.2.4. Creating Policy Scripts").

In most circumstances, you will only need to use a limited number of the **eccfg** commands. The commonly used **eccfg** commands are highlighted in the following sections.

**eccfg** has two different modes of operation:

*   working-copy – This mode interacts with the local working copy and is used to checkout, checkin, and update your configuration files. It is also used to clone or overlay one path with another path in a single subcluster. Each node can be part of at most one subcluster.

*   subcluster – This mode allows configuration of multiple subclusters, as well as creation of new subclusters (as empty or as a copy of an existing subcluster). This mode does not affect files on disk.

### Note

All options (with leading hyphens) can be shortened as long as they are still unique and can be specified with a single hyphen. So --message can be shortened to -m for every command except pull, where -pul is sufficient.

<a name="idp11030576"></a>
### Working Copy Commands

All of the following commands interact with a working copy or the current subcluster files only. There are a number of common options that can be use; some of the options are actually required for correct operation (e.g. `--username` and `--password` are required to commit changes). The default username is `admin` and the password is whatever you assigned during installation.

<a name="idp11033904"></a>**Common Options**

<dl className="variablelist">

<dt>--quiet</dt>

<dd>

Can be used in scripts to eliminate most of the details output by the eccfg script. Errors will still be printed.

</dd>

<dt>--debug</dt>

<dd>

If this option is passed to any working-copy command, the script will output detailed information about the actions performed by each command. This can be very useful when diagnosing problems. --quiet and --debug are mutually exclusive.

</dd>

<dt>--username and --password</dt>

<dd>

When performing actions that require authentication to the repository, you must pass both of these options.These options require the credentials of a user with administrative privileges. *Note*: The administrative user created during installation is named `admin` and the password for this user is whatever you supplied during installation. If you don't specify a `username`, the value of this option defaults to the value of the environment variable, `USER`. If you don't supply a `password`, **eccfg** interactively requests one.

</dd>

<dt>--working-copy</dt>

<dd>

If you do not pass this option, any command that acts on a working copy path will target the `/opt/msys/ecelerity/etc/conf` directory.

</dd>

</dl>

<a name="idp14295824"></a>**Subcommands**

<dl className="variablelist">

<dt>**bootstrap** --clustername *`name`* | --singlenode *`[host[:port]]`*</dt>

<dd>

Check out the cluster-wide config from a specific server. Can only be done once (without deleting the resulting working copy).

This step is normally performed by the installation script and checks out the configuration files from the ecconfigd repository into a standard location on disk: `/opt/msys/ecelerity/etc/conf`.

The `--clustername` and `--singlenode` options are mutually exclusive. The former configures this node to be a member of a subcluster and also causes the node to require Spread to be running before `ecconfigd` can be started.

</dd>

<dt>**commit** [--add-all] [--message *`"message"`*]</dt>

<dd>

*Commonly Used Command*

Commit local changes back to the repo. Commits any changed files in the standard location, `/opt/msys/ecelerity/etc/conf`, unless a different location was specified with the `--working-copy` option.

If there are files not present in the repository, the script will prompt as to whether they should be added unless the `--add-all` option was specified. *Note*: the commit message must be in quotation marks if the message includes whitespace.

If there are no changes, you will see the message: `Nothing to commit`. Otherwise, you will see a message such as the following:

```
Sending        default/ecelerity.conf
Transmitting file data.
Committed revision 47.
```

### Note

*Committing changes does not automatically load them into the running ecelerity process.*                                                                              For details, see See [Section 15.1.4, “Changing Configuration Files”](conf.overview#conf.manual.changes "15.1.4. Changing Configuration Files") and [Section 15.1.5, “Adding Configuration Files”](conf.overview#conf.adding.configuration.files "15.1.5. Adding Configuration Files").

</dd>

<dt>**commit** [--delete-all] [--message *`"message"`*]</dt>

<dd>

Commit local changes back to the repo. Commits any changed files in the standard location, `/opt/msys/ecelerity/etc/conf`, unless a different location was specified with the `--working-copy` option.

If the `--delete-all` option is not specified and files have been removed from the repository using a file system command such as **rm**, the script will prompt as to whether such files should be deleted. *Note*: the commit message must be in quotation marks if the message includes whitespace.

</dd>

<dt>**clone** *`source`* *`destination`*</dt>

<dd>

Copy one directory in the repository to another in a single transaction, replacing the target if it exists.

This is used, for example, to make a copy of the node-specific configuration from one node to another node. The destination files are completely deleted and/or replaced by the source files. If there are additional files in the destination path, they are not retained. See the command overlay for a different mode of operation.

</dd>

<dt>**delete** *`file ...`* </dt>

<dd>

*Commonly Used Command*

Delete one or more files from the repo. Changes do not take effect until an **eccfg** `commit` is performed.

When a file name is specified, this command queues that file for removal from the repository. If a directory is specified, that directory is queued for recursive removal from the repository. In both cases this command must be followed by a commit.

If you wish to remove a file or directory that is under revision control, do not use **rm**: instead use **eccfg delete** . For example, if you wish to remove a directory named `myscripts` that is immediately below your current directory, issue the commands:

```
shell> /opt/msys/ecelerity/bin/eccfg delete ––username admin ––password admin_passwd myscripts
shell> /opt/msys/ecelerity/bin/eccfg commit ––username admin ––password admin_passwd
```

In most cases, when you are removing a file from the repository, you will also need to remove references to this file from a configuration file.

</dd>

<dt>**overlay** *`source destination`* </dt>

<dd>

Merge one directory in the repo into another, overwriting any existing files in the destination directory with those from the source, but retaining any files in the destination not present in the source.

See the clone command for a method to replace the destination entirely with the source.

</dd>

<dt>**pull** [--auto] [--mine | --theirs | --manual]</dt>

<dd>

*Commonly Used Command*

Pull client config from the repository. Requires write access on `/opt/msys/ecelerity/etc` for initial checkout and to rename the directory on pull. As with any revision control system, it is best practice to update the working copy of the repository prior to making any changes.

**eccfg pull**      does not do a subversion update in place; instead, it does a new checkout to another directory, and if successful replaces the original directory with the new one. This causes the directory you used to be in to become unlinked and for this reason you will see the message:

```
OK
Note: your current working directory has been invalidated by the "pull"
command.  You will need to run "cd /opt/msys/ecelerity/etc/conf"
to return to the same location in the file system.
```

Follow the instructions to 'return' to the repository working directory.

<dl className="variablelist">

<dt>--auto</dt>

<dd>

Used by the cron scripts to authenticate using the service password, in order to keep the local working copy in sync with the repo.

</dd>

<dt>--mine --theirs --manual</dt>

<dd>

If an update or pull would cause a conflict (due to local changes that overlap with changes already committed to the repo), pull will normally refuse to proceed. These three flags can be used to mediate the update process. "--mine" means that local changes will always be preferred; "--theirs" will prefer the upstream changes from the repository. If you want to manually resolve conflicts, the "--manual" flag will use Subversion's normal conflict handling to produce conflict files.

*Note*: if you use any of these switches, please make sure to commit your changes (after resolving any conflicts), since the working copy will no longer be in sync with the repository. You will then need to send a "config reload" to the Momentum process.

</dd>

</dl>

If and only if the pull operation is completed without conflict, then eccfg will automatically issue a "config reload" to the running Momentum process.

</dd>

<dt>**put**</dt>

<dd>

Copy a single file into the repo if and only if it is different from the version already in the repo. Not used during normal operation; use commit instead.

There is one special case where put is used -- a cron job is configured during installation to automatically save the entire running config of a node (if it has changed) to a parallel path in the repo. This happens every 5 minutes by default and can be used to make sure that any local, uncommitted, changes made to a node will not be lost due to a disk failure if the changes are not committed to the normal path.

</dd>

<dt>**resolve** *`file ...`* </dt>

<dd>

Clear the conflict state on files that have been manually resolved. This command must be used after resolving conflicts created by **pull** `--manual`.

</dd>

<dt>**revert** *`file ...`* </dt>

<dd>

Undo local changes (including deletion) to files in the local checkout.

</dd>

<dt>**status**</dt>

<dd>

Print a status summary of changes made to the local checkout.

</dd>

</dl>

<a name="idp14685584"></a>
### Subcluster Commands

The following subcommands all interact directly with the ecconfigd daemon and effect changes to the collection of subclusters as a whole. All of the subcluster commands are prefaced with the "subcluster" keyword.

<a name="idp14687456"></a>**Subcommands**

<dl className="variablelist">

<dt>**clusters**</dt>

<dd>

Outputs a single line containing a space-separated list of all subclusters known to the local ecconfigd server. If any of the subclusters are in a *CONFLICT* state, the clustername will be prefixed with a "!" character.

</dd>

<dt>**conflict** *`cluster`*</dt>

<dd>

Force the specified subcluster into a CONFLICT state. When this occurs, no working copies can be updated and no changes can be committed. This only affects this single subcluster to be affected; any other subcluster can continue to operate normally.

</dd>

<dt>**copy** [--with-history] *`source destination`* </dt>

<dd>

Duplicate one repository's contents to another. There are two modes of operation:

If the `--with-history` option is passed, the destination subcluster must not already exist. A new subcluster repository will be created and the entire source repository history will be duplicated. This is probably most useful when creating a geographically distributed cluster, where the new subcluster will be managed independently of the original subcluster.

Without the **--with-history** flag, the tip of the source cluster will be copied over the top of the tip of the destination cluster. This is most useful when copying a test subcluster to a production subcluster, where the end result of all configuration changes is all that is important.

</dd>

<dt>**create** *`cluster`*</dt>

<dd>

Creates a new subcluster, populated with the configuration template files provided in the package. This is exactly the same behavior as occurs during a fresh install. This is most useful when creating a new subcluster which is nothing like any of the existing subclusters.

</dd>

<dt>**master** [*`cluster`*]</dt>

<dd>

An informational command, it shows the hostname of the current MASTER repository for the specified cluster. If you do not pass a cluster name, it returns the MASTER for the first subcluster listed (which usually means the first subcluster in alphabetical order).

</dd>

<dt>**override** *`cluster node`* </dt>

<dd>

Force a specific node to become the MASTER for the specifed subcluster. This choice is sticky (survives reboots, etc) and can be used to mandate a specific node to stay MASTER, regardless of normal election rules. This state can be reversed with the resume subcommand.

</dd>

<dt>**resume** *`cluster node`* </dt>

<dd>

Restore the subcluster to normal/election operation. This option is also sticky, so that nodes that were in override mode when they went offline will be able to recover when they reconnect. The node that is passed to this subcommand is merely forced to become MASTER for the moment. If anything that would normally trigger an election occurs, any node could potentially be elected the next MASTER.

</dd>

<dt>**slaves** [*`cluster`*]</dt>

<dd>

Returns a space-delimited list of all SLAVE nodes for the specified subcluster.

</dd>

<dt>**resolve** *`cluster`*</dt>

<dd>

Request that the cluster's nominal MASTER attempt to resolve the CONFLICT state. If the CONFLICT was caused by a missing sync to a slave, the master will attempt to resync the slave. If the conflict can be resolved automatically, then the entire subcluster will switch back to a normal state. See the online documentation for more details.

</dd>

</dl>

<a name="idp14721088"></a>
## See Also

[ecconfigd](executable.ecconfigd "ecconfigd"), [Section 15.1.3, “Configuration Management (**ecconfigd**)”](conf.overview#conf.ecconfigd "15.1.3. Configuration Management (ecconfigd)")

|     |     |     |
| --- | --- | --- |
| [Prev](executable.ec_show)  | [Up](exec.cmds.ref) |  [Next](executable.eccmgr) |
| ec_show  | [Table of Contents](index) |  eccmgr |

