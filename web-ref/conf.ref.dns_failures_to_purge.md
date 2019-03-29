|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.dns_expire_interval)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.dns_fallback_to_tcp.php) |

<a name="conf.ref.dns_failures_to_purge"></a>
## Name

dns_failures_to_purge — configure the maximum number of DNS lookups

## Synopsis

`dns_failures_to_purge = 10`

<a name="idp9027120"></a>
## Description

After the specified number of failed DNS lookups, a message will be failed permanently. The default value is `10`.

<a name="idp9029248"></a>
## Scope

`dns_failures_to_purge` is valid in the domain and global scopes.

<a name="idp9031296"></a>
## See Also

[mx_failures_fallback_to_a](conf.ref.mx_failures_fallback_to_a "mx_failures_fallback_to_a")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.dns_expire_interval)  | [Up](conf.ref.files.php) |  [Next](conf.ref.dns_fallback_to_tcp.php) |
| dns_expire_interval  | [Table of Contents](index) |  dns_fallback_to_tcp |
