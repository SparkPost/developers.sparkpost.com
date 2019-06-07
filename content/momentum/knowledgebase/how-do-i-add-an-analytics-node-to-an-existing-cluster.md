# How do I add an Analytics node to an existing cluster (Momentum 4.1)?

Set up the initial repo:

1) Unpack the same tarball that was used for the original installation

2) Activate the local yum repo:

\# cd momentum-4.1.0.46072
\# ./setrepodir

3) Install the msys-role-analytics metapackage

\# yum install -y --config=$PWD/momentum.repo --enablerepo=momentum msys-role-analytics

**Add node to Vertica cluster and database:**

1) From the first Analytics node, add the new node to the cluster:

```
# cd /var/tmp/momentum-4.1.0.46072
# export NEWNODE=new.host.fully.qualified.name
# /opt/vertica/sbin/install_vertica --add-hosts \$NEWNODE -z silent\_install
```
You can find the silent_install file in the working directory of the initial installation, or you can create a new one with the following contents:

```
accept_eula = True
data_dir = /var/db/vertica
direct_only = True
failure_threshold = FAIL
license_file = /opt/vertica/config/licensing/Message_Systems_vertica.license.key
rpm_file_name = packages/msys-vertica-7.1.0-3.rhel6.x86_64.rpm
spread_subnet = default
vertica_dba_group = verticadba
vertica_dba_user = vertica_dba
vertica_dba_user_dir = /var/db/vertica
vertica_dba_user_password_disabled = True
```
You will need the root password for the new node or have configured password-less ssh login or be running ssh-agent.

2) Change to the vertica_dba user and add the new host to the msys database:

```
# su - vertica_dba
$ export NEWNODE=new.host.fully.qualified.name
$ adminTools --tool db_add_node --database msys --add=$NEWNODE
$ adminTools --tool rebalance_data -k 1 -d msys
NOTE: that last two steps may take an extended period of time, depending on how long the database has been up and how much data is present and should be run inside a screen or tmux session.
```

3) Add the storage locations for the new node, using the following script:

```
#!/bin/bash
 
# Setup storage location grants across all hosts
for ARG in "api/webhooks/WEBHOOK_BATCHES" "etl/etl/ETL"
do
 IFS='/' ARGS=($ARG)
 USER="vertica_${ARGS[0]}"
 LOCATION="/opt/vertica/log/${ARGS[1]}"
 LABEL=${ARGS[2]}
 IFS=$'\n ' NODES=`/opt/vertica/bin/vsql -c "select node_name from v_catalog.nodes where node_name not in (select node_name from v_monitor.disk_storage where storage_path='$LOCATION') group by node_name;" -t`
 for NODE in $NODES
 do
 echo "Adding storage location $LOCATION for $NODE"
 /opt/vertica/bin/vsql -c "CREATE LOCATION '$LOCATION' NODE '$NODE' USAGE 'USER' LABEL '$LABEL';"
 /opt/vertica/bin/vsql -c "GRANT ALL ON LOCATION '$LOCATION' ON $NODE TO $USER;"
 done
done
```
**Update config files and distribute to Analytics nodes:**

1) On the first Analytics node, update the following config files with the new node:

```
/opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf
/opt/msys/3rdParty/nginx/conf.d/api_users_upstream.conf
/opt/msys/3rdParty/nginx/conf.d/api_metrics_upstream.conf
/opt/msys/3rdParty/nginx/conf.d/webui_upstream.conf
/opt/msys/app/webhooks-api/config/production.json
/opt/msys/app/cron/config/production.json
/opt/msys/app/metrics-api/config/production.json
```
2) Update the nginx/conf.d files by duplicating one of the existing lines and changing it to the new hostname.

3) Update the production.json files using the following script fragment:

```
export PATH=/opt/msys/3rdParty/bin/:$PATH
for f in \
 /opt/msys/app/webhooks-api/config/production.json \
 /opt/msys/app/metrics-api/config/production.json \
 ; do
 tmpf=$(mktemp --tmpdir=$(dirname $f) -t)
 jq ".application.vertica.hosts = .application.vertica.hosts + [\"$NEWNODE\"]" -a -M $f > $tmpf
 if [ $? = 0 ]; then
 mv -f $tmpf $f
 fi
done
for f in \
 /opt/msys/app/cron/config/production.json \
 ; do
 tmpf=$(mktemp --tmpdir=$(dirname $f) -t)
 jq ".vertica.hosts = .vertica.hosts + [\"$NEWNODE\"]" -a -M $f > $tmpf
 if [ $? = 0 ]; then
 mv -f $tmpf $f
 fi
done
```

4) Update the webui json file to make it more robust:

```
for f in \
 /opt/msys/app/webui/scripts/config/production.json \
 ; do
 tmpf=$(mktemp --tmpdir=$(dirname $f) -t)
 jq '.auth.apiPort=false | .auth.apiHost=false' $f > $tmpf
 if [ $? = 0 ]; then
 mv -f $tmpf $f
 fi
done
```

5) Copy the modified config files to all original Analytics nodes:

```
for f in \
 /opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf \
 /opt/msys/3rdParty/nginx/conf.d/api_users_upstream.conf \
 /opt/msys/3rdParty/nginx/conf.d/api_metrics_upstream.conf \
 /opt/msys/3rdParty/nginx/conf.d/webui_upstream.conf \
 /opt/msys/app/webhooks-api/config/production.json \
 /opt/msys/app/cron/config/production.json \
 /opt/msys/app/metrics-api/config/production.json \
 /opt/msys/app/webui/scripts/config/production.json \
 ; do
 scp $f $NODE2:$f
 scp $f $NODE3:$f
done
```

6) Restart the services on all existing Analytics nodes:

```
# service msys-app-metrics-api restart
# service msys-app-users-api restart
# service msys-app-webhooks-api restart
# service msys-nginx reload
```

7) Copy all of the config files to the new Analytics node:

```
for f in $(find /opt/msys/app/ -name production.json) ; do
 scp $f $NEWNODE:$f
done
scp /opt/msys/3rdParty/nginx/conf.d/* $NEWNODE:/opt/msys/3rdParty/nginx/conf.d/
```

8) Start all services on the new Analytics node:

```
# service msys-app-metrics-api start
# service msys-app-users-api start
# service msys-app-webhooks-api start
# service msys-nginx start
```

**Update all Platform/MTA nodes (not Manager or Log Aggregator):**

1) The following files must be edited on all MTA nodes:

```
/opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf
/opt/msys/app/webhooks-transmitter/config/production.json
/opt/msys/app/metrics-etl/config/production.json
/opt/msys/app/webhooks-batch/config/production.json
```

2) Update the nginx/conf.d files by duplicating one of the existing lines and changing it to the new hostname

3) Use the following scriptlet to update the production.json files:

```
export PATH=/opt/msys/3rdParty/bin/:$PATH
for f in \
 /opt/msys/app/metrics-etl/config/production.json \
 /opt/msys/app/webhooks-batch/config/production.json \
 /opt/msys/app/webhooks-transmitter/config/production.json \
 ; do
 tmpf=$(mktemp --tmpdir=$(dirname $f) -t)
 jq ".vertica.hosts = .vertica.hosts + [\"$NEWNODE\"]" -a -M $f > $tmpf
 if [ $? = 0 ]; then
 mv -f $tmpf $f
 fi
done
```

4) Restart all affected services:

```
# service msys-app-metrics-etl restart
# service msys-app-webhooks-batch restart
# service msys-app-webhooks-transmitter restart
# service msys-nginx reload
```
