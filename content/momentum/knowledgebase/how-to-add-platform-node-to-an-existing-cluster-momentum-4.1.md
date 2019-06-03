# How to add Platform node to an existing cluster (Momentum 4.1)?



###Prepare the first MTA node

1) Add the new node to the Ecelerity config files:

``` 
cd /opt/msys/ecelerity/etc 
vim conf/default/msg_gen.conf conf/global/msgc_server.conf
```

2) There are two stanzas that have to be updated in msg_gen.conf:
a) cassandra_client - copy another line and change the host name
b) msg_gen - copy one of the existing "node" stanzas (4 lines) and update both the node name and set a new unique mta_id
3) There is one stanza to be updated in msgc_server.conf. Add another line for the new host to the "peers" stanza with both hostname and correct IP address.
4) Commit the new config with eccfg:

``` 
/opt/msys/ecelerity/bin/eccfg commit -u admin -p $ADMINPASS -m 'Add new Platform node to cluster'
```

5) Update the following file by editing the "seeds" parameter and append the new host:

```
vim /opt/msys/3rdParty/cassandra/conf/cassandra.yaml
```

6) Restart all affected services:

```
 service msys-cassandra restart &&
 service ecelerity restart
```
 
###Update Engagement Proxy node (may be the same as the first MTA node)

1) Add a "server" line for the new host within the nginx config:

```
vim /opt/msys/3rdParty/nginx/conf.d/click_proxy.conf
```

2) Reload the nginx config:

```
service msys-nginx reload
```

###Update remaining Platform nodes (including Log Aggregator/Manager if present)

1) Update cassandra.yaml in the same fashion as the first node.
2) Restart all affected services:

```
service msys-cassandra restart
service ecelerity restart
```

###Configure the new Platform node

1) Copy the same tarball that was used to install the rest of the cluster to the new node and unpack it.
2) Activate the included yum repo:

```
cd momentum-4.1.0.46072 # ./setrepodir -i
```

3) Install the meta package msys-role-platform:

```
yum install --enablerepo=momentum -y msys-role-platform
```

4) Bootstrap the Ecelerity config from the first server:

```
mkdir -p /opt/msys/etc/installer/ecelerity.d/ # chown -R ecuser:ecuser /opt/msys/ecelerity/etc/ # cd /opt/msys/ecelerity/etc/ # /opt/msys/ecelerity/bin/eccfg bootstrap --clustername default -u admin -p $ADMINPASS FIRST.NODE.FQDN
```

5) Copy existing config files (execute this on the first MTA node):

```
for file in \  /opt/msys/3rdParty/cassandra/conf/cassandra.yaml \  /opt/msys/3rdParty/nginx/conf.d/api_webhooks_upstream.conf \  /opt/msys/app/metrics-etl/config/production.json \  /opt/msys/app/webhooks-batch/config/production.json \  /opt/msys/app/webhooks-transmitter/config/production.json \  /opt/msys/etc/.svcpasswd \  /opt/msys/etc/.dbhost \  ; do  scp $file $NEWNODE:$file done
```

6) Update cassandra.yaml on the new node to replace the "listen_address" with the correct local IP address for the new node.

7) Then, temporarily remove the new node from the seed list:

```
cp /opt/msys/3rdParty/cassandra/conf/cassandra.yaml /opt/msys/3rdParty/cassandra/conf/cassandra.yaml.new # vi /opt/msys/3rdParty/cassandra/conf/cassandra.yaml
```

8) Start Cassandra on the new node:

```
service msys-cassandra start
```

NOTE: depending on the amount of existing data in your Cassandra database, this will fail (as the init script only waits a fixed amount of time for the service to start).
9) Check that the Cassandra database has been replicated (UN means Up Normal):

```
service msys-cassandra status 
```

Note: Ownership information does not include topology; for complete information, specify a keyspace Datacenter: 


datacenter1 ======================= Status=Up/Down | / State=Normal/Leaving/Joining/Moving --  Address      Load       Tokens  Owns   Host ID                               Rack UN  10.77.0.245  215.57 KB  256     25.8%  1b00204c-5dc4-44b8-a024-c1ba47b07233  rack1 UN  10.77.1.8    178.35 KB  256     23.7%  28e2d1b9-80f6-40f8-b399-4533b2cfb103  rack1 UN  10.77.1.12   196.56 KB  256     23.2%  4addf36b-10f9-48fb-98c9-e5acf2c19970  rack1 UN  10.77.0.227  203.12 KB  256     27.3%  5525b410-3f3e-49ec-a176-0efa2383f3f4  rack1


10) Stop Cassandra and restore the saved cassandra.yaml.new to re-add this node to the seed list.
11) Configure RabbitMQ using the attached script setup_rabbitmq.pl:

```
    service msys-rabbitmq start    
    chmod +x setup_rabbitmq.pl    
    ./setup_rabbitmq.pl    
    service msys-rabbitmq stop
```

```
#START OF FILE #!/opt/msys/3rdParty/bin/perl
use 5.16.3;
my $prefix = "/opt/msys"; my $thirdparty = "$prefix/3rdParty";
say STDERR 'Configuring RabbitMQ'; # first we need to configure the rabbitmq-server instance my $rabbitmqctl = "$thirdparty/sbin/rabbitmqctl"; my $rabbitmqadmin = "$thirdparty/sbin/rabbitmqadmin"; my $rabbitpw = decrypt(')<#$M5FLP;%AY'); qx|/etc/init.d/msys-rabbitmq start|; qx|$rabbitmqadmin declare exchange name=momentum_metrics type=topic|; qx|$rabbitmqadmin declare queue name=msg_events|; qx|$rabbitmqadmin declare binding source=momentum_metrics destination=msg_events routing_key=msys.*|; qx|$rabbitmqctl add_user rabbitmq $rabbitpw|; qx|$rabbitmqctl set_user_tags rabbitmq administrator|; qx|$rabbitmqctl set_permissions -p '/' rabbitmq '.*' '.*' '.*'|; qx|$rabbitmqctl delete_user guest|; qx|/etc/init.d/msys-rabbitmq stop|;
sub decrypt {  return unpack(chr(ord('a') + 19 + print ''),shift); } 
#END OF FILE 
```

12) Start all services on the new node:

```
/etc/init.d/msys-riak start 
/etc/init.d/msys-rabbitmq start 
/etc/init.d/msys-app-metrics-etl start 
/etc/init.d/msys-cassandra start 
/etc/init.d/ecelerity start 
/etc/init.d/msys-nginx start 
/etc/init.d/msys-app-webhooks-batch start 
/etc/init.d/msys-app-webhooks-transmitter start
```
 
###Update Analytics Node(s):
1) On the first Analytics node, the following files need to be updated:

```
/opt/msys/3rdParty/nginx/conf.d/momo_upstream.conf /opt/msys/app/users-api/config/production.json /opt/msys/app/webhooks-api/config/production.json /opt/msys/app/cron/config/production.json
```

The momo_upstream.conf file just needs another "server" line for the new node.

2) The following script fragment can be used to update the various production.json files:

```
# START OF FILE 
export PATH=/opt/msys/3rdParty/bin/:$PATH for f in \  /opt/msys/app/users-api/config/production.json \  /opt/msys/app/webhooks-api/config/production.json \  ; do  tmpf=$(mktemp --tmpdir=$(dirname $f) -t)  jq ".cassandra.hosts = .cassandra.hosts + [\"$NEWNODE\"]" -a -M $f > $tmpf  if [ $? = 0 ]; then  mv -f $tmpf $f  fi done for f in \  /opt/msys/app/cron/config/production.json \  ; do  tmpf=$(mktemp --tmpdir=$(dirname $f) -t)  jq ".cassandra.contactPoints = .cassandra.contactPoints + [\"$NEWNODE\"]" -a -M $f > $tmpf  if [ $? = 0 ]; then  mv -f $tmpf $f  fi done 
# END OF FILE
```

3) Restart all applicable services on the Analytics node:

```
service msys-app-metrics-api restart 
service msys-app-users-api restart 
service msys-app-webhooks-api restart 
service msys-nginx reload
```
 
Post-Install Cleanup
On all of the original Platform nodes, the Cassandra database will have duplicate keys that have now been distributed to the added node. At some point after deployment, run the following command on each Platform/Cassandra node:

``` 
/opt/msys/3rdParty/cassandra/bin/nodetool cleanup
```