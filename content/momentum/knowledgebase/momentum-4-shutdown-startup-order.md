# Momentum 4 Shutdown/Startup Order

## Controlled Shutdown of Momentum 4
To shut down all processes associated with the Momentum application suite, issue the following commands in this order:

- /etc/init.d/msys-nginx stop
- /etc/init.d/ecelerity stop  (if the node will be down for a while, allow the rabbitmq queues to drain before proceeding)
- /etc/init.d/msys-app-webhooks-api stop
- /etc/init.d/msys-app-users-api stop
- /etc/init.d/msys-app-metrics-api stop
- /etc/init.d/msys-app-adaptive-delivery-api stop
- /opt/msys/3rdParty/cassandra/bin/nodetool drain
- /etc/init.d/msys-cassandra stop
- /etc/init.d/msys-vertica stop
- /etc/init.d/msys-riak stop
- /etc/init.d/msys-app-webhooks-transmitter stop
- /etc/init.d/msys-app-webhooks-batch stop
- /etc/init.d/msys-app-metrics-etl stop
- /etc/init.d/msys-app-adaptive-delivery-etl stop
- /etc/init.d/msys-rabbitmq stop
- /etc/init.d/eccmgr stop  (exists only on the first platform/manager/log aggregator node)
- /etc/init.d/ecconfigd stop  (exists only on the first platform/manager/log aggregator node)

## Controlled Startup of Momentum 4
To start all processes associated with the Momentum application suite, issue the following commands in this order:

- /etc/init.d/ecconfigd start   (exists only on the first platform/manager/log aggregator node) 
- /etc/init.d/eccmgr start   (exists only on the first platform/manager/log aggregator node) 
- /etc/init.d/msys-rabbitmq start
- /etc/init.d/msys-app-metrics-etl start
- /etc/init.d/msys-app-webhooks-transmitter start
- /etc/init.d/msys-app-adaptive-delivery-etl start
- /etc/init.d/msys-riak start
- /etc/init.d/msys-vertica start
- /etc/init.d/msys-cassandra start
- /etc/init.d/msys-app-adaptive-delivery-api start
- /etc/init.d/msys-app-metrics-api start
- /etc/init.d/msys-app-users-api start
- /etc/init.d/msys-app-webhooks-api start
- /etc/init.d/ecelerity start  (all services started so far should be up prior to starting ecelerity)
- /etc/init.d/msys-nginx start
- /etc/init.d/msys-app-webhooks-batch start
