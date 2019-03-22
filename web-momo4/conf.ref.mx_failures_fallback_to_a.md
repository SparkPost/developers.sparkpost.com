| [Prev](conf.ref.min_dns_ttl)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.mx_failures_to_delay) |

<a name="conf.ref.mx_failures_fallback_to_a"></a>
## Name

mx_failures_fallback_to_a — configure the maximum number of times an MX lookup will be attempted

## Synopsis

`mx_failures_fallback_to_a = 3`

<a name="idp25592096"></a>
## Description

The number of times an MX lookup will be attempted before attempting an A lookup. The default value is "3".

<a name="idp25594000"></a>
## Scope

mx_failures_fallback_to_a is valid in the domain and global scopes.

<a name="idp25595856"></a>
## See Also

[dns_failures_to_purge](conf.ref.dns_failures_to_purge "dns_failures_to_purge")

| [Prev](conf.ref.min_dns_ttl)  | [Up](config.options.ref) |  [Next](conf.ref.mx_failures_to_delay) |
| min_dns_ttl  | [Table of Contents](index) |  mx_failures_to_delay |

