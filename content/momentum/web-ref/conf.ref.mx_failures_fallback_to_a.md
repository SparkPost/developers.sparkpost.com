|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.min_dns_ttl)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.mx_failures_to_delay.php) |

<a name="conf.ref.mx_failures_fallback_to_a"></a>
## Name

mx_failures_fallback_to_a — configure the maximum number of times an MX lookup will be attempted

## Synopsis

`mx_failures_fallback_to_a = 3`

<a name="idp10436608"></a>
## Description

The number of times an MX lookup will be attempted before attempting an A lookup. The default value is "3".

<a name="idp10438544"></a>
## Scope

mx_failures_fallback_to_a is valid in the domain and global scopes.

<a name="idp10440176"></a>
## See Also

[dns_failures_to_purge](conf.ref.dns_failures_to_purge "dns_failures_to_purge")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.min_dns_ttl)  | [Up](conf.ref.files.php) |  [Next](conf.ref.mx_failures_to_delay.php) |
| min_dns_ttl  | [Table of Contents](index) |  mx_failures_to_delay |
