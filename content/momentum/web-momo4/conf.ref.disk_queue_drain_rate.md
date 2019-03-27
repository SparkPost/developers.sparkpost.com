| [Prev](conf.ref.disable_nagle_algorithm)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.dns_cache_purge_interval) |

<a name="conf.ref.disk_queue_drain_rate"></a>
## Name

disk_queue_drain_rate — control the rate at which messages are spooled in on start-up

## Synopsis

`disk_queue_drain_rate = 100`

<a name="idp24357056"></a>
## Description

Every iteration through the system, messages are taken from the disk queue. The disk queue's asynchronous population commences at Momentum's startup. As messages are ready (swapped in), they are pushed onto the "disk queue". This configuration directive dictates the maximum number of messages that will be pulled off the disk queue in a single iteration of the scheduler. The default value is `100`.

### Warning

This is an advanced option. Setting this value too high could saturate a server's I/O subsystem. Thorough testing is recommended before deployment in a production environment.

<a name="idp24360800"></a>
## Scope

disk_queue_drain_rate is valid in the global scope.

| [Prev](conf.ref.disable_nagle_algorithm)  | [Up](config.options.ref) |  [Next](conf.ref.dns_cache_purge_interval) |
| disable_nagle_algorithm  | [Table of Contents](index) |  dns_cache_purge_interval |

