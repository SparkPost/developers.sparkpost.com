# Momentum 4 Directories and Mounts

## Platform Nodes

|MountPoint / Directory|Description|User:Group|Permissions|
|--- |--- |--- |--- |
|/opt/msys|Message Systems software|root:root|775|
|/opt/msys/ecelerity/etc|Message Systems configuration.Needs separate FS for HA.|ecuser:ecuser|755|
|/var/log/eccluster|Application log base directory formsys clustering|root:root|755|
|/var/log/ecelerity|Application log base directory forMomentum|root:ecuser|2775 (0775+setgid)|
|/var/log/riak|Application log base directory forRiak storage technology|msysriak:msysriak|755|
|/var/run|Dynamic runtime data forrunning msys processes|root:root|755|
|/var/lock|Lock files for running msys processes|root:lock|775|
|/var/ecconfigd|Message Systems cluster repo|ecuser:ecuser|755|
|/var/eccluster|Message Systems cluster data|root:ecuser|775|
|/var/db/rabbitmq|RabbitMQ data|msysrabbitmq:msysrabbitmq|750|
|/var/db/msyspg|Postgres data|msyspg:msyspg|700|
|/var/db/riak|Riak data|msysriak:msysriak|755|
|/var/log/msys-nodejs|Node.js logging|msysnodejs:msysnodejs|755|
|/var/log/msys-nginx|NGINX logging|msysnginx:msysnginx|755|
|/var/log/msys-rabbitmq|RabbitMQ logging|msysrabbitmq:msysrabbitmq|755|
|/var/log/msys-cassandra|Cassandra logging|msys-cass:msys-cass|755|
|/var/spool/ecelerity|Mail spool|ecuser:ecuser|2775 (0775+setgid)|
|/var/spool/ecelerity/msg_gen|Checkpoint files for message generation|ecuser:ecuser|2754 (0754+setgid)|
|/var/db/cassandra|Cassandra data|msys-cass:msys-cass|755|
|/var/log/msys-cassandra|Cassandra logging|msys-cass:msys-cass|755|

## Analytics Nodes  

|Directory|Description|User:Group|Permissions|
|--- |--- |--- |--- |
|/var/log/msys-nodejs|Node.js logging|msysnodejs:msysnodejs|755|
|/var/log/msys-nginx|NGINX logging|msysnginx:msysnginx|755|
|/opt/msys|Message Systems software|root:root|775|
|/opt/vertica|Vertica Software|root:root|755|
|/var/db/vertica/msys|Vertica data|vertica_dba:verticadba|755|
