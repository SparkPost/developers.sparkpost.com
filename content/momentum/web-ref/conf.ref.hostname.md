|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.host_failure_retry)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.http_basic_auth.php) |

<a name="conf.ref.hostname"></a>
## Name

hostname — override the system configured hostname

## Synopsis

`Hostname = "my.alternate.host.name"`

<a name="idp9780224"></a>
## Description

This configuration directive is used to override the default hostname as determined by the `gethostname` system call. If this value is unset, Momentum will use the system's hostname as the default.

<a name="idp9782464"></a>
## Scope

hostname is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.host_failure_retry)  | [Up](conf.ref.files.php) |  [Next](conf.ref.http_basic_auth.php) |
| host_failure_retry  | [Table of Contents](index) |  http_basic_auth |
