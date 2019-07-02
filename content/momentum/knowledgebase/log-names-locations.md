# Momentum 4 Log File Names and Locations 

** Please note, some of these may not apply to the MTA versions of Momentum 4.2

|Process|Description|Node|Associated Log File Name & Location|
|--- |--- |--- |--- |
|ecconfigd|Configuration server; Apache log|Platform|/var/ecconfigd/apache/error.log|
|Vertica|Distributed database that houses aggregated statistics for the UI and metrics API; Vertica log|Analytics|/opt/vertica/log/*/var/db/vertica/msys/dblog|
|Cassandra|Distributed database that houses templates and recipient data|Platform|/var/db/cassandra/var/log/msys-cassandra|
|eccmgr|Error level information for eccmgr is written here|Platform|/var/log/eccluster/paniclog.ec|
|paniclog|Error level information for ecelerity is written here|Platform|/var/log/ecelerity/paniclog.ec|
|Queues (active, delayed)|Mail Spools|Platform|/var/spool/ecelerity/|
|ecelerity|Main Momentum process - sends messages AND serves up clicks and opens|Platform||
|Adaptive ETL|Node.js Adaptive Delivery Reporting ETL process|Platform|/var/log/msys-nodejs/adaptive-delivery-etl.js.log|
|Metrics ETL|Node.js Metrics ETL process|Platform|/var/log/msys-nodejs/metrics-etl.js.log|
|Webhooks ETL|Node.js Webhooks ETL processes|Platform|/var/log/msys-nodejs/webhooks-batch.js.log/var/log/msys-nodejs/webhooks-transmitter.js.log|
|Node.js|Node.js-based APIs: metrics, users, webhooks, adaptive delivery|All|/var/log/msys-nodejs/metrics-api.js.log/var/log/msys-nodejs/users-api.js.log/var/log/msys-nodejs/webhooks-api.js.log|
|RabbitMQ|Receives event data for webhooks, metrics API and reporting database (Vertica)|Platform|/var/log/msys-rabbitmq/*.log|
|Trace files|These files exist if ecelerity is having a problem.|Platform|/var/log/ecelerity/traces/*|
|nginx|Web server - load balancer, proxy and its error log|All|/var/log/msys-nginx/error.log|
