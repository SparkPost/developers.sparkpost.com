| [Prev](conf.ref.dns_cache_purge_interval)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.dns_failures_to_purge.php) |

<a name="conf.ref.dns_expire_interval"></a>
## Name

dns_expire_interval — how often to check for domains with expired DNS information

## Synopsis

`dns_expire_interval = 10`

<a name="idp9016064"></a>
## Description

How often the garbage collector should check for domains with expired DNS entries and resubmit them for lookup.

The default is `10` seconds.

<a name="idp9018608"></a>
## Scope

`dns_expire_interval` is valid in the global scope.

| [Prev](conf.ref.dns_cache_purge_interval)  | [Up](conf.ref.files.php) |  [Next](conf.ref.dns_failures_to_purge.php) |
| dns_cache_purge_interval  | [Table of Contents](index) |  dns_failures_to_purge |
