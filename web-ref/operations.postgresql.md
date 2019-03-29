|     |     |     |
| --- | --- | --- |
| [Prev](operations.console-commands)  | Chapter 4. Operations |  [Next](operations.riak) |

## 4.3. PostgreSQL

<a class="indexterm" name="idp2573520"></a>

A PostgreSQL database stores the real-time data displayed by the web console and it also contains the user authentication credentials for both the web console and the system console. To log in to the web console the PostgreSQL server must be running. In either a stand-alone or a cluster configuration, there can be only one instance of this database.

### Warning

We expressly recommend **against** using an NFS file system because of concerns about its performance in general and its reliability, especially on Linux.

Note the following:

*   Prior to version 3.0.15, the web console role and the database role **must** be installed on the same machine.

*   As of version 3.2.x Momentum uses PostgreSQL version 9.

*   If you are hosting PostgreSQL on Solaris see [Section 1.7.1, “Package Requirements Beyond a Core Installation”](install.solaris#install.solaris.packages "1.7.1. Package Requirements Beyond a Core Installation").

The root database directory for PostgreSQL is `/var/db`. Immediately below this directory is the `msyspg` directory which contains the configuration file and the PID file. The msyspg database contains the real-time data collected by Momentum and, since this data is retained for two years, **be sure that there is adequate space on the drive that hosts the PostgreSQL server** .

Database credentials can be found in the `/opt/msys/3rdParty/etc/php.d/ecdb.ini` file on the machine that hosts the web console.

### 4.3.1. PostgreSQL in Momentum Version 3.3

When upgrading a cluster configuration to Momentum 3.3, the database, manager and web UI roles must be upgraded prior to the MTA roles. If these roles are performed by different servers, be sure to upgrade the database role first.

### Warning

If you are migrating to Momentum 3.3, you are strongly urged to first perform a backup of your database.

The reasons for this are as follows:

*   Schema changes affect collection of statistics by the MTAs. Until the MTAs are upgraded, they will not be able to report their data to the database or the web UI. For this reason it is important to upgrade the MTAs as soon as possible after the database. The database migration will be the only time-intensive part of the upgrade, so it should be scheduled for non-work hours and only when it has completed should the MTA(s) be upgraded.

### Note

Another reason why the upgrade order is significant is that the web UI and MTA roles will be participating in a Riak cluster. The installer assumes that the web UI and/or the manager have the "first" Riak instances and the MTAs will attempt to join that existing Riak cluster. It is possible to join the cluster manually, but it is not recommended.

In version 3.3, Momentum makes use of PostgreSQL's auto-vacuuming functionality. This should help with database growth issues.

Detailed instructions for database migration follow.

**4.3.1.1. Step-by-Step Migration**

If you are performing a fresh installation of Momentum 3.3, you can ignore this section.

**Check available disk space before beginning**

The migration process will require additional free disk space of approximately the same amount of space currently in use by `/var/db/msyspg`. The installer will check for adequate disk space before starting the migration.

**Backup your database**

One backup option is to run **`/opt/msys/3rdParty/bin/pg_dump -Fc -Z9 -U msyspg ecelerity > /path/to/backup_file`**                                                    . This produces the smallest-sized backup but takes the most time to restore.

A second option is to execute the SQL statement **`SELECT pg_start_backup();`**                    , and then backup the file system (using tar, rsync, filesystem snapshots, or any other method). Next execute **`SELECT pg_stop_backup();`**                   . This backup method will be faster (depending on how quickly you can copy the data), and will require the same amount of space currently in use by `/var/db/msyspg`.

### Note

Regardless of the backup method used, the PostgreSQL software version is changing in the 3.3 release, so a rollback would require the Momentum 3.2 installer running first, to replace PostgreSQL with version 8.3 software, before a restoration of the database backup can successfully take place.

**Database migration**

1.  During installation, PostgreSQL will automatically be upgraded from 8.3 to 9.04.

2.  The installer will automatically migrate all data in the database, other than the historical statistical data used by the web console for reporting.

3.  When the initial phase of the database migration has been completed, all of the historical data will need to be migrated independently using the script: **`/opt/msys/ecwebui/scripts/33_deferred_migration`**.

    You should run this script as soon as practical after completing the upgrade. None of the reports in the Web Console will be accurate until this completes, however Momentum will continue to send and receive email during this part of the migration.

**4.3.1.2. Running the 33_deferred_migration Script**
### Warning

This script may take 8 or more hours to complete. You are strongly urged to run it using `nohup` or in a screen session, so that it cannot be interrupted accidentally.

The migration script must be run as root. Run it using nohup in the following way:

`shell> nohup /opt/msys/ecwebui/scripts/33_deferred_migration &`

This starts the script, writes all output to `nohup.out`, and does not exit if you log out.

To run the migration script in a screen session, install screen (if it isn't already installed), and then start a new session. Again, the migration script should be run as root.

```
shell> screen
shell> /opt/msys/ecwebui/scripts/33_deferred_migration
```

Typing "**CTRL-A d** " will detach you from the screen session and leave the script running. You can reconnect to that session at any time with: **`screen -r`**    .

### Note

The normal scrollback buffer is not available in screen. Type **CTRL-A esc**     to get into copy/paste mode, where PGUP and PGDN will work as you might expect. Please see the documentation for screen for more commands.

In either case, if your session is accidentally disconnected, the migration script will continue in the background.

### 4.3.2. The `postgresql.conf` File

<a class="indexterm" name="idp2617456"></a>

The PostgreSQL configuration file is found in the `/var/db/msyspg` directory.

The logging options set in the configuration file are discussed in [Section 4.3.5, “The PostgreSQL Log Files”](operations.postgresql#operations.postgres-log-files "4.3.5. The PostgreSQL Log Files").

### 4.3.3. Running the PostgreSQL Server

<a class="indexterm" name="idp2622192"></a>

The PostgreSQL server is installed as a daemon and starts up whenever the system is rebooted. To start the daemon immediately after installation you can issue the command **`/etc/init.d/msyspg start`**       .

To determine the options that can be used with the `msyspg` command go to the command line and enter **`/etc/init.d/msyspg`**. You should see the following output:

`Usage: {start|stop|restart}`

Find below a description of these options:

*   `start` – Start the PostgreSQL server

*   `stop` – Stop the PostgreSQL server

*   `restart` – Restart the PostgreSQL server

Calling this script with the `start` option starts a PostgreSQL server daemon named `msyspg` running at levels 3, 4 and 5.

### 4.3.4. Using the PostgreSQL Client Program

<a class="indexterm" name="idp2633632"></a>

There may be occasions where you wish to inspect the PostgreSQL database installed by Momentum. You can do this using the PostgreSQL client program, `psql`, found in the `/opt/msys/3rdParty/bin` directory. Log in as the user created during installation, `ecuser`.

### Warning

We strongly advise against building applications to interface with our database, and make no guarantees that the database will remain the same between minor revisions of the product.

Additionally, applications that interface directly may be incompatible with future upgrades to the version of PostgreSQL used with Momentum.

Start the PostgreSQL client by issuing the command, **`/opt/msys/3rdParty/bin/psql ecelerity ecuser`**                  . PostgreSQL is configured to run on the default port, 5432, so there is no need to specify a port when running the PostgreSQL client.

User credentials are stored in the `webconsole` schema and real-time logging statistics in the various `rt_log` schemas.

### Note

Other PostgreSQL programs such as **pg_dump** and **pg_dumpall** are also found in the `/opt/msys/3rdParty/bin/` directory.

### 4.3.5. The PostgreSQL Log Files

<a class="indexterm" name="idp2644384"></a>

The PostgreSQL log files are found in the `/var/db/msyspg/pg_log` directory. This location is determined by the `log_directory` setting of the `postgresql.conf` file. The format of the logging file name is determined by the `log_filename` setting; it has a value of `postgresql-%Y-%m-%d-%M.log`. At runtime this is resolved as a four digit representation of the year and a two digit representation of the month, day and minute.

This file can be helpful for debugging database errors.

Log rotation is controlled by the `logging_collector` and the `log_rotation_size` settings of the `postgresql.conf` file. `logging_collector` is set to `on` and `log_rotation_size` to `100MB`. With these settings a new log file will be created after 100MB have been written into a log file.

### 4.3.6. Dumping and Restoring the Database

In some circumstances you may need to change the machine that hosts Momentum and migrate your data to new hardware. When moving to a host with the same operating system, architecture and bit size you can simply archive the `/var/db/msyspg` directory and then restore it. Otherwise, you can use PostgreSQL tools to dump and restore the database.

Database dumps are plain-text files that contain the SQL commands and data required to rebuild the database. You can create a dump file by using the **pg_dump** command and then restore your database by passing the dump file to **pg_restore**. The steps are itemized in the following:

1.  Ensure that the database is not in use. Go to the command line of the machine that hosts the PostgreSQL server and issue the following command:

    `shell> /opt/msys/3rdParty/bin/pg_dump -Fc -U msyspg ecelerity -f /path/to/db.dump`

    No password is required to access the database from localhost.

    Using `-c` creates custom output making it possible to select and reorder archived items if necessary when restoring the database. It also compresses the file. The user `msyspg` is the PostgreSQL superuser; all database dumps and restorations should be performed as this user.

2.  Since the dump file is compressed, you must use the **pg_restore** to restore the database. To do this go to the command line of the destination machine and issue the command:

    `shell> /opt/msys/3rdParty/bin/pg_restore -c -U msyspg -d ecelerity /path/to/db.dump`
3.  Examine any warnings that are output. You will get errors trying to drop and create some of the schemas, but they are harmless.


|     |     |     |
| --- | --- | --- |
| [Prev](operations.console-commands)  | [Up](operations) |  [Next](operations.riak) |
| 4.2. Console Commands  | [Table of Contents](index) |  4.4. Riak |
