| [Prev](conf.ref.hostname)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.http_basic_auth) |

<a name="conf.ref.host_failure_retry"></a>
## Name

host_failure_retry — time to wait before attempting a retry

## Synopsis

`Host_Failure_Retry = 120`

<a name="idp24876064"></a>
## Description

The amount of time in seconds to wait after a connect or protocol failure on a connection to a specific IP address before attempting deliveries to that IP address again. The default value is `120`.

<a name="idp24878512"></a>
## Scope

host_failure_retry is valid in the domain and global scopes.

| [Prev](conf.ref.hostname)  | [Up](config.options.ref) |  [Next](conf.ref.http_basic_auth) |
| hostname  | [Table of Contents](index) |  http_basic_auth |

