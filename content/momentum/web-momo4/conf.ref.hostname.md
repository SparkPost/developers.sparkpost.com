|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.host)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.host_failure_retry) |

<a name="conf.ref.hostname"></a>
## Name

hostname — override the system configured hostname

## Synopsis

`hostname = "my.alternate.host.name"`

<a name="idp24863920"></a>
## Description

This configuration directive is used to override the default hostname as determined by the `gethostname` system call. If this value is unset, Momentum will use the system's hostname as the default.

<a name="idp24866352"></a>
## Scope

hostname is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.host)  | [Up](config.options.ref) |  [Next](conf.ref.host_failure_retry) |
| host  | [Table of Contents](index) |  host_failure_retry |

