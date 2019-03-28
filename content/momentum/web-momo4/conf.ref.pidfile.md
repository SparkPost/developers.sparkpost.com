|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.permastore_interval)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.prohibited_hosts) |

<a name="conf.ref.pidfile"></a>
## Name

pidfile — set the PID file path

## Synopsis

`pidfile = "/path/to/ecelerity.pid"`

<a name="idp25877936"></a>
## Description

Sets the path to the PID file. This is used by **ec_ctl** to determine whether Momentum is running.

The PID file can be used by other processes to determine if the instance is running; therefore, each instance must have its own PID file.

<a name="idp25880848"></a>
## Scope

pidfile is valid in the global scope.

<a name="idp25882672"></a>
## See Also

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.permastore_interval)  | [Up](config.options.ref) |  [Next](conf.ref.prohibited_hosts) |
| permastore_interval  | [Table of Contents](index) |  prohibited_hosts |

