| [Prev](download_bundle)  | Part II. Installing Momentum |  [Next](new_installation) |

## Chapter 8. Install / Upgrade the Packages

### Warning

**The installation and upgrade instructions in Chapters 8 through 11 are only applicable in their entirety for Momentum 4.x releases prior to 4.2.28.**                                                                                                                                                 For release 4.2.28 and beyond, please refer to the installation and upgrade PDF documents available under the desired release's folder on the Message Systems Support website's [Downloads page](https://support.messagesystems.com/start/). If you are uncertain as to which document is applicable to your situation, please contact your technical support representative.

Ensure that you are in the `/var/tmp/momentum-4.2.1.50062` directory, then install the appropriate packages on each node type, as directed in the following steps.

**NOTE:** If you are installing a **three node combined (or similar) topology** , each node serves all roles: each node is an MTA node **and** a Cassandra node **and** an Analytics node.

*   First MTA Node - Identify which server will be the first MTA node you are installing. Install these packages only on that node.

    `yum install -y --config momentum.repo --enablerepo momentum msys-ecelerity-config-server msys-role-db`
*   MTA Nodes - For every node you designate as an MTA (including the first node), perform the following:

    ```
    yum install -y --config momentum.repo --enablerepo momentum \
      msys-role-mta msys-ecelerity-engagement-proxy msys-app-webhooks-cql \
      msys-app-webhooks-etl msys-app-metrics-etl msys-app-adaptive-delivery-etl
    ```

*   Cassandra Nodes - For every Cassandra node that is part of a Cassandra cluster, run the following commands. If you are combining MTA and Cassandra roles, then install packages on all MTA nodes.

    `yum install -y --config momentum.repo --enablerepo momentum msys-role-cassandra`
*   Analytics Nodes - For every node that you have designated as one that will be an Analytics node, perform the following:

    1.  Set the `IS_VERTICA_AWS` environment variable to distinguish between AWS and non-AWS environments. This environment variable indicates whether or not the current node is in AWS and running the HP Vertica AMI.

        If you ARE installing Vertica in AWS then set `export IS_VERTICA_AWS=1`

        If you are NOT installing Vertica in AWS then set `export IS_VERTICA_AWS=0`

    2.  Install the appropriate packages, depending on whether or not you are installing Vertica in AWS:

        ```
        if [ "$IS_VERTICA_AWS" == "1" ]; then
            yum install -y --config momentum.repo --enablerepo momentum --exclude=msys-vertica \
              msys-role-application msys-app-adaptive-delivery-db \
              msys-app-adaptive-delivery-api msys-app-webhooks-api msys-app-webhooks-db
        else
            yum install -y --config momentum.repo --enablerepo momentum \
              msys-role-analytics msys-app-adaptive-delivery-db \
              msys-app-adaptive-delivery-api msys-app-webhooks-api msys-app-webhooks-db
        fi
        ```

        If you have a **two-tier configuration (or similar) topology** , run this additional command. Do **not** run this command if you have a **three node combined (or similar) topology** .

        ```
        # Remove an ETL that is N/A for Analytics nodes in two-tier configurations:
        yum remove -y --config momentum.repo --enablerepo momentum msys-app-adaptive-delivery-etl
        ```

    3.  Create a file called `silent_install` by running the below script on the first Analytics or Combined node, but only if you are not installing in an AWS environment.

        ### Note

        This step ONLY needs to be done if you are NOT installing in AWS.

        # ONlY DO THIS IF YOU ARE NOT INSTALLING IN AWS
        # Skip this step if you are installing in AWS
        cd `cat /var/tmp/inst.dir`
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
    4.  Configure an environment variable on the first Analytics or Combined node prior to running the Vertica installer there.

        <a name="install_upgrade_packages.vertica_ips"></a>Use the **IP addresses**           for each Vertica (Analytics) node in your deployment.

        ### Warning

        Once you assign IP addresses to a Vertica host you can’t change them.

        export SERVERS=*`1.2.3.4`*,*`1.2.3.5`*,*`1.2.3.6`*
    5.  Run the Vertica installer once, on the first node. If the topology has mutiple Analytics or Combined nodes, enter the password for them if prompted to do so.

        **NOTE:** During the install, you can ignore any messages of `HINT` level listed under "Prerequisites not fully met ...". Just confirm receipt of a message containing text "System prerequisites passed."

        ```
        if [ "$IS_VERTICA_AWS" == "1" ]; then
            export VERT_CONF='/opt/vertica/config'
            export VERT_BIN='/opt/vertica/bin'
            export VERT_SBIN='/opt/vertica/sbin'

            $VERT_SBIN/install_vertica -s $SERVERS --point-to-point --dba-user-password-disabled \
               --dba-user vertica_dba --dba-user-home /var/db/vertica --dba-group verticadba --data-dir /var/db/vertica/data \
               --failure-threshold FAIL --accept-eula --license $VERT_CONF/licensing/vertica_community_edition.license.key
        else
            export VERT_BIN='/opt/vertica/bin'
            export VERT_SBIN='/opt/vertica/sbin'
            $VERT_SBIN/install_vertica -z ../silent_install -s $SERVERS \
              2>&1 | tee vertica_install.log
        fi
        ```

        ### Warning

        The user `vertica_dba` should now be available. If it is not, please contact support.

    6.  If you are using the Vertica Management Console, then skip this step. Otherwise, turn off the vertica-agent by performing these steps on all Analytics or Combined nodes:

        ```
        # remove unused or conflicting services from all vertica nodes
        /sbin/chkconfig vertica_agent off
        /etc/init.d/vertica_agent stop
        rm -f /etc/init.d/vertica_agent
        if [ "$IS_VERTICA_AWS" == "0" ]; then
            /sbin/chkconfig verticad off
            rm -f /etc/init.d/verticad
        fi
        ```

| [Prev](download_bundle)  | [Up](p.installing) |  [Next](new_installation) |
| Chapter 7. Download the Software Bundle and Prepare  | [Table of Contents](index) |  Chapter 9. New Installation - All Configurations |

