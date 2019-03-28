|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.host)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.hostname.php) |

<a name="conf.ref.host_failure_retry"></a>
## Name

host_failure_retry — time to wait before attempting a retry

## Synopsis

`Host_Failure_Retry = 120`

<a name="idp9769264"></a>
## Description

The amount of time in seconds to wait after a connect or protocol failure on a connection to a specific IP address before attempting deliveries to that IP address again. The default value for option is `120`.

<a name="idp9771488"></a>
## Scope

host_failure_retry is valid in the domain and global scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.host)  | [Up](conf.ref.files.php) |  [Next](conf.ref.hostname.php) |
| host  | [Table of Contents](index) |  hostname |
