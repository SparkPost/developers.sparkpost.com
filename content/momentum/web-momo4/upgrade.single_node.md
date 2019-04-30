|     |     |     |
| --- | --- | --- |
| [Prev](install.start_remaining_services)  | Part II. Installing Momentum |  [Next](upgrade.single_node.vertica_updates) |
## Chapter 10. Upgrade - Single Node
**Table of Contents**

* [10.1\. Preparation](upgrade.single_node#upgrade.single_node.preparation)
* [10.2\. Vertica Updates](upgrade.single_node.vertica_updates)
* [10.3\. Prepare and Run Flyway](upgrade.single_node.configuration.flyway)
* [10.4\. Configuration Changes](upgrade.single_node.configuration.config_all__nodes)
* [10.5\. Software Upgrade](upgrade.single_node.configuration.software_upgrade)
* [10.6\. Update Web UI Configuration](upgrade.single_node.configuration.webui)
* [10.7\. Start Services](upgrade.single_node.configuration.start_services)
* [10.8\. Complete the Software Set Up](upgrade.single_node.complete_setup)
* [10.9\. Next Steps](upgrade.single_node.configuration.next_steps)

### Warning
**The installation and upgrade instructions in Chapters 8 through 11 are only applicable in their entirety for Momentum 4.x releases prior to 4.2.28.**                                                                                                                                                 For release 4.2.28 and beyond, please refer to the installation and upgrade PDF documents available under the desired release's folder on the Message Systems Support website's [Downloads page](https://support.messagesystems.com/start/). If you are uncertain as to which document is applicable to your situation, please contact your technical support representative.
<a class="indexterm" name="idp1218512"></a>
This section documents the upgrade procedures for a local single node with both Platform and Analytics functionality.
### Note
Although this is a single node installation, the documentation will sometimes refer to Platform and Analytics nodes as if there were more than one. This helps the function of each NGINX file remain clear in this single node context.
This documentation is primarily intended for users who want to upgrade Momentum on their own cluster using a copy-and-paste procedure.
If you have properly prepared for the upgrade and follow all instructions carefully, the copy-and-paste procedure should take approximately two hours to complete.
### Warning
You can only perform the upgrade from Momentum 4.1-HF4\. If you are running a version of Momentum prior to 4.1-HF4, you must first upgrade to that version, then upgrade to Momentum 4.2\. In addition, you must complete the upgrade in a single session.
## 10.1. Preparation
This installation type assumes your node is offline until the upgrade completes.
### Note
You must ensure all generation submissions are stopped and wait for the in progress generations to complete. Then continue with the upgrade steps.
Perform the following steps to prepare for the Momentum upgrade and to upgrade Cassandra and Ecelerity.
### 10.1.1. Prepare the Node
1.  Ensure that you have downloaded and installed the software on the node. For more information, refer to [Chapter 7, *Download the Software Bundle and Prepare*](download_bundle "Chapter 7. Download the Software Bundle and Prepare") .
2.  Untar/unzip the bundle.
    `tar -xvzf momentum-bundle-4.2.1.50062.rhel6.x86_64.tar.gz`
3.  Change to the bundle directory.
    `cd momentum-4.2.1.50062`
4.  Add the local yum repository to upgrade Momentum.
    `./setrepodir -i`
### 10.1.2. Upgrade Cassandra
Upgrade Cassandra from version 2.0.8 to 2.0.15.
1.  Prepare the database for a snapshot.
    ### Note
    The size of your snapshot will depend on the size of your instance. If you do not have enough space available to create a snapshot, this command will fail.
    1.  Check the Cassandra node status and confirm the cassandra node is up and normal.
        `/opt/msys/3rdParty/cassandra/bin/nodetool status`
    2.  Compact and flush the database.
        ```
        /opt/msys/3rdParty/cassandra/bin/nodetool flush
        /opt/msys/3rdParty/cassandra/bin/nodetool compact
        /opt/msys/3rdParty/cassandra/bin/nodetool flush
        /opt/msys/3rdParty/cassandra/bin/nodetool enableautocompaction
        ```
2.  Perform a Cassandra global snapshot of all keyspaces.
    `/opt/msys/3rdParty/cassandra/bin/nodetool snapshot`
3.  Perform the remaining Cassandra upgrade steps.
    1.  Drain and remove the node from the Cassandra cluster.
        `/opt/msys/3rdParty/cassandra/bin/nodetool drain`
    2.  Stop the Cassandra service.
        `service msys-cassandra stop`
    3.  Backup the Cassandra configuration files. This is an optional step; no changes should need to be merged into the new configuration files, but it is good practice to perform a backup.
        ```
        pushd /opt/msys/3rdParty/cassandra
        tar -cf ~/cassandra_conf_2_0_8.tar conf
        popd
        ```
    4.  Upgrade the Cassandra Redhat Package Manager (RPM). Be sure to run this command from the directory containing the bundle.
        `yum --disablerepo=* --enablerepo=momentum upgrade msys-cassandra`
    5.  Compare the new configuration with the backup. Differences such as comments, jmver, and JVM variables are fine, and you should not have to merge or replace anything at this point.
        ### Note
        Significant differences indicate a problem. If this occurs, you need to correct the issue before continuing. If you cannot correct the issue, revert to your backup.
        ```
        pushd ~
        tar -xvf cassandra_conf_2_0_8.tar
        diff -r conf /opt/msys/3rdParty/cassandra/conf
        popd
        ```
    6.  Start Cassandra.
        `service msys-cassandra start`
### 10.1.3. Upgrade DB RPMs
1.  Uninstall `msys-app-users`. Erasing the old RPM ensures there will be no conflict with the new RPM.
    `yum erase msys-app-users`
2.  Install the DB RPMs.
    ```
    yum install --disablerepo=* --enablerepo=momentum msys-app msys-app-users-db msys-app-users-api  \
    msys-app-metrics-db msys-app-webhooks-batch-db msys-app-webhooks-db msys-app-adaptive-delivery-db
    ```
    ### Note
    If you receive a message indicating that boost-devel is not installed, run the following command and then repeat the command to install the DB RPMs.
    `yum install boost-devel`
### 10.1.4. Upgrade Vertica
1.  Stop services.
    1.  Stop metrics.
        `service msys-app-metrics-etl stop`
    2.  Stop the Webhooks API.
        `service msys-app-webhooks-api stop`
2.  Backup the database.
    1.  Get the Vertica node hosts.
        `echo "select node_name, host_name from node_resources;" |  /opt/vertica/bin/vsql -U vertica_dba`
        Your results should look something like this:
        #Output:
        #  node_name      |  host_name
        #-----------------+-------------
        # v_msys_node0001 | *`10.77.0.158`*
        Use the IP address displayed in your output in the following commands.
    2.  Create a `backups` directory and set up `known_hosts`.
        su vertica_dba
        cd ~
        mkdir backups
        ssh *`10.77.0.158`* # answer yes and exit right away
        exit # go back to the root user
    3.  Create a configuration file for backup.
        ```
        su vertica_dba
        cd ~
        /opt/vertica/bin/vbr.py --setupconfig
        ```
        ### Note
        If you run into issues or need to restore the backup, please refer to the [HP Vertica Administrators Guide](http://my.vertica.com/docs/7.1.x/PDF/HP_Vertica_7.1.x_AdministratorsGuide.pdf)
    4.  Answer the following prompts, substituting your IP addresses where appropriate. Please note that host names must be entered as IP addresses. Hit Enter to accept the default value.
        Snapshot name (backup_snapshot): upgrade-backup
        Backup vertica configurations? (n) [y/n]: y
        Number of restore points (1):
        Specify objects (no default):
        Vertica user name (vertica_dba):
        Save password to avoid runtime prompt? (n) [y/n]: y
        Password to save in vbr config file (no default):
        Node v_msys_node0001
        Backup host name (no default): *`10.77.0.125`*
        Backup directory (no default): /var/db/vertica/backups
        Config file name (upgrade-backup.ini):
        Change advanced settings? (n) [y/n]: n
    5.  Verify the `upgrade-backup.ini` file (with your host names included).
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
    6.  Ensure the `/var/db/vertica/backups` directory was created by user vertica_dba, then run the backup.
        `/opt/vertica/bin/vbr.py -t backup --config-file upgrade-backup.ini`
3.  Stop the Vertica process (as root).
    ```
    # exit #if running as vertica_dba, exit to get to root
    service msys-vertica stop
    ```
4.  Upgrade Vertica.
    1.  Upgrade the RPM (substituting the appropriate package number). Answer `yes` when prompted.
        ```
        cd /var/tmp/momentum-4.2.1.50062
        yum --disablerepo=* --enablerepo=momentum upgrade msys-vertica
        ```
    2.  Set up the upgrade options.
        export VERT_CONF='/opt/vertica/config'
        export RPMFILE=`/bin/ls $PWD/packages/msys-vertica* | fgrep -v client`
        cat << EOF > ../silent_install
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
### 10.1.5. Upgrade Ecelerity and the Cassandra Interface
1.  The following steps connect Ecelerity and Cassandra. Perform them in the order shown below.
    1.  Upgrade the RPM packages with yum (this includes all Momentum and third party packages).
        `yum --disablerepo=* --enablerepo=momentum upgrade`
    2.  Set up Cassandra-Momentum compatibility (i.e, the Cassandra schema to be used).
        `/opt/msys/ecelerity/bin/cassandra_momo_setup.sh --singlenode /opt/msys/ecelerity/etc`
    3.  Start ecconfigd.
        `service ecconfigd start`
    4.  Start Momentum.
        `service ecelerity start`
        ### Note
        If Ecelerity fails to start due to a licensing issue, copy your license to the `/opt/msys/ecelerity/etc/license` file on all nodes.
2.  Modify the `populate_customer_metadata.cql` file to apply the Cassandra schema.
    `sed -i 's/, sending_disabled//' /opt/msys/app/users-api/cql/upgrades/V2015.01.20_02.00.00__populate_customer_metadata.cql`
3.  Apply the Users API schema changes.
    ```
    export UPG=/opt/msys/app/users-api/cql/upgrades
    export CQLSH=/opt/msys/3rdParty/bin/cqlsh
    $CQLSH -k authentication -f $UPG/V2015.01.20_00.00.00__create_customer_metadata.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.01.20_01.00.00__extract_customers.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.01.20_02.00.00__populate_customer_metadata.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.01.21_00.00.00__add_terms_of_use_column.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.04.09_00.00.00__create_unsuccessful_logins.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.04.10_00.00.00__two_factor.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.04.28_00.00.00__add_is_sso_column.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.04.28_00.00.00__add_tou_last_updated.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.05.21_00.00.00__add_email_verified_column.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.05.21_00.00.00__create_email_verification_tokens.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.06.16_00.00.00__add_saml_column.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.06.17_00.00.00__add_valid_ip_column.cql 2>&1 >> cassandra_schema.log
    $CQLSH -k authentication -f $UPG/V2015.06.22_00.00.00__add_last_login_column.cql 2>&1 >> cassandra_schema.log
    ```

|     |     |     |
| --- | --- | --- |
| [Prev](install.start_remaining_services)  | [Up](p.installing) |  [Next](upgrade.single_node.vertica_updates) |
| 9.4. Start Remaining Services  | [Table of Contents](index) |  10.2. Vertica Updates |
