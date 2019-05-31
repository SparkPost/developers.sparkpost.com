# Troubleshooting RabbitMQ issues

### Hostname mismatch and diagnostics
When you run the following status command and see something along the likes of this, ensure that the hostname is present in `/etc/hosts`. Add or create a hostname (that matches what Rabbit is looking for) if necessary: 

`/opt/msys/3rdParty/sbin/rabbitmqctl status`

```
attempted to contact: [rabbit@hostname01]

rabbit@hostname01:
* connected to epmd (port 4369) on hostname01
* epmd reports node 'rabbit' running on port 25672
* TCP connection succeeded but Erlang distribution failed
* suggestion: hostname mismatch?
* suggestion: is the cookie set correctly?

current node details:
- node name: meow@hostname01
- home dir: /home/something
- cookie hash: z123123123123==
```

### RabbitMQ process doesn't start
Try starting/stopping/restarting the process using the following command:
`sudo /etc/init.d/msys-rabbitmq start|stop|restart`
Check the `/var/log/msys-rabbitmq/startup_err` and the `/var/log/msys-rabbitmq/startup_log` log files for information on what the issue is.
All the RabbitMQ logs can be found in the `/var/log/msys-rabbitmq/` folder.

### Check the events in the queues
Use the following command to verify if events are being added into the RabbitMQ:
`/opt/msys/3rdParty/sbin/rabbitmqctl list_queues`
The output would be similar to:
```
[root@momo42 msys]# /opt/msys/3rdParty/sbin/rabbitmqctl list_queues  
Listing queues ...  
batch_queue	3  
msys_1_minute_delay	0  
msys_30_minute_delay	0  
msys_5_minute_delay	0  
msys_60_minute_delay	0  
msys_webhook_1_1	86  
...done.
```