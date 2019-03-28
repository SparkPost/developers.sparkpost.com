| [Prev](upgrade.two_tier.preparation.restore_tranmissions_rolling)  | Chapter 11. Rolling Upgrade - Two-Tier Configuration and Combined Node |  [Next](upgrade.two_tier.configuration.flyway_rolling) |

## 11.10. Upgrade Vertica on the Analytics Nodes

1.  Stop services.

    1.  Ensure ETLs are stopped on **all Platform nodes** . (Some ETLS may already be stopped.) For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

        ```
        service msys-app-metrics-etl stop
        service msys-app-webhooks-batch stop
        service msys-app-webhooks-transmitter stop
        ```

    2.  Stop the Webhooks API on **all Analytics nodes** . For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

        `service msys-app-webhooks-api stop`

2.  Backup the database.

    1.  Get the Vertica node hosts from the **first Analytics node** .

        `echo "select node_name, host_name from node_resources;" |  /opt/vertica/bin/vsql -U vertica_dba`

        Your results should look something like this:

        #Output:
        #  node_name      |  host_name
        #-----------------+-------------
        # v_msys_node0001 | *`10.77.0.158`*
        # v_msys_node0002 | *`10.77.0.206`*
        # v_msys_node0003 | *`10.77.0.157`*

        Use the IP addresses displayed in your output in the following commands.

    2.  Create a `backups` directory and set up `known_hosts` on **all Analytics nodes** . For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

        sudo su - vertica_dba <<EOJ
        mkdir backups;
        ssh-keyscan *`10.77.0.158`* *`10.77.0.206`* *`10.77.0.157`* > .ssh/kh2
        cat .ssh/known_hosts >> .ssh/kh2
        cat .ssh/kh2 | sort | uniq > .ssh/known_hosts
        rm  .ssh/kh2
        EOJ
    3.  Create a configuration file for backup (**first Analytics node only** ).

        ```
        su vertica_dba
        cd ~
        /opt/vertica/bin/vbr.py --setupconfig
        ```

        ### Note

        If you run into issues or need to restore the backup, please refer to the [HP Vertica Administrators Guide](http://my.vertica.com/docs/7.1.x/PDF/HP_Vertica_7.1.x_AdministratorsGuide.pdf)

    4.  Answer the following prompts, substituting your IP addresses where appropriate (**first Analytics node only** ).

        Please note that host names must be entered as IP addresses. Hit Enter to accept the default value.

        Snapshot name (backup_snapshot): upgrade-backup
        Backup vertica configurations? (n) [y/n]: y
        Number of restore points (1):
        Specify objects (no default):
        Vertica user name (vertica_dba):
        Save password to avoid runtime prompt? (n) [y/n]: y
        Password to save in vbr config file (no default):
        Node v_msys_node0001
        Backup host name (no default): *`10.77.0.158`*
        Backup directory (no default): /var/db/vertica/backups
        Node v_msys_node0002
        Backup host name (no default): *`10.77.0.206`*
        Backup directory (no default): /var/db/vertica/backups
        Node v_msys_node0003
        Backup host name (no default): *`10.77.0.157`*
        Backup directory (no default): /var/db/vertica/backups
        Config file name (upgrade-backup.ini):
        Change advanced settings? (n) [y/n]: n
    5.  Verify the `upgrade-backup.ini` file (with your host names included) (**first Analytics node only** ).

        `cat upgrade-backup.ini`

        Your results should look something like this:

        [Misc]
        snapshotName = upgrade-backup
        verticaConfig = True
        restorePointLimit = 1

        [Database]
        dbName = msys
        dbUser = vertica_dba

        [Transmission]

        [Mapping]
        v_msys_node0001 = *`42upgrade-1.dev.int.messagesystems.com`*:/var/db/vertica/backups
        v_msys_node0002 = *`42upgrade-2.dev.int.messagesystems.com`*:/var/db/vertica/backups
        v_msys_node0003 = *`42upgrade-3.dev.int.messagesystems.com`*:/var/db/vertica/backups
    6.  Run the backup (**first Analytics node only** ).

        `/opt/vertica/bin/vbr.py -t backup --config-file upgrade-backup.ini`

3.  Stop the Vertica process on **all Analytics nodes (as root)** . For a combined cluster upgrade, perform this action on **all nodes in the cluster** .

    ```
    exit #if running as vertica_dba, exit to get to root
    service msys-vertica stop
    ```

    ### Note

    From the **first Analytics node** , run `exit` to exit to root.

4.  Ensure all files are configured for the minimum mode.

    ```
    find /opt/vertica /var/db/vertica \
       -name .ssh -prune -o \
       -type f -not -perm -755 \
       -exec chmod go+rx,u+rwx {} +
    ```

5.  Upgrade Vertica on the **first Analytics node** .

    1.  Upgrade the Vertica RPM (substituting the appropriate package number). Answer `yes` when prompted.

        ```
        cd /var/tmp/momentum-4.2.1.50062
        yum --disablerepo=* --config momentum.repo --enablerepo=momentum upgrade msys-vertica
        ```

    2.  Set up the upgrade options.

        export VERT_CONF='/opt/vertica/config'
        export RPMFILE=`/bin/ls $PWD/packages/msys-vertica* | fgrep -v client`
        cat &lt;&lt; EOF > ../silent_install
        accept_eula = True
        data_dir = /var/db/vertica
        direct_only = True
        failure_threshold = FAIL
        license_file = $VERT_CONF/licensing/Message_Systems_vertica.license.key
        rpm_file_name = $RPMFILE
        spread_subnet = default
        vertica_dba_group = verticadba
        vertica_dba_user = vertica_dba
        vertica_dba_user_dir = /var/db/vertica
        vertica_dba_user_password_disabled = True
        EOF
    3.  Run the Vertica upgrade utility.

        ```
        export VERT_BIN='/opt/vertica/bin'
        export VERT_SBIN='/opt/vertica/sbin'
        $VERT_SBIN/update_vertica -z ../silent_install 2>&1 | tee ../vertica_update.log
        ```

    4.  Start Vertica. Enter your password when prompted.

        `service msys-vertica start`

|     |     |     |
| --- | --- | --- |
| [Prev](upgrade.two_tier.preparation.restore_tranmissions_rolling)  | [Up](upgrade.two_tier_configuration_rolling) |  [Next](upgrade.two_tier.configuration.flyway_rolling) |
| 11.9. Restore Transmissions to the Remaining Platform Nodes  | [Table of Contents](index) |  11.11. Prepare and Run Flyway |

