| [Prev](conf.ref.disable_nagle_algorithm)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.dkim.php) |

<a name="conf.ref.disk_queue_drain_rate"></a>
## Name

disk_queue_drain_rate — control the rate at which messages are spooled in on start-up

## Synopsis

`Disk_Queue_Drain_Rate = 100`

<a name="idp8975680"></a>
## Description

Every iteration through the system, messages are taken from the disk queue. The disk queue's asynchronous population commences at Momentum's startup. As messages are ready (swapped in), they are pushed onto the "disk queue". This configuration directive dictates the maximum number of messages that will be pulled off the disk queue in a single iteration of the scheduler. The default value for this option is `100`.

### Warning

This is an advanced option. Setting this value too high could saturate a server's I/O subsystem. Thorough testing is recommended before deployment in a production environment.

<a name="idp8979120"></a>
## Scope

disk_queue_drain_rate is valid in the global scope.

| [Prev](conf.ref.disable_nagle_algorithm)  | [Up](conf.ref.files.php) |  [Next](conf.ref.dkim.php) |
| disable_nagle_algorithm  | [Table of Contents](index) |  dkim |
