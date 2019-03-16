| [Prev](conf.ref.mime_parse_large_messages_during_reception)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.mx_failures_fallback_to_a.php) |

<a name="conf.ref.min_dns_ttl"></a>
## Name

min_dns_ttl — override DNS TTLs smaller than this value

## Synopsis

`min_dns_ttl = 0`

<a name="idp10422768"></a>
## Description

Any DNS response with a TTL of less than the value of `Min_DNS_TTL` will be increased to the value of `Min_DNS_TTL`. The default value for this option is `0`.

<a name="idp10425664"></a>
## Scope

min_dns_ttl is valid in the global scope.

<a name="idp10427264"></a>
## See Also

[max_dns_ttl](conf.ref.max_dns_ttl "max_dns_ttl")

| [Prev](conf.ref.mime_parse_large_messages_during_reception)  | [Up](conf.ref.files.php) |  [Next](conf.ref.mx_failures_fallback_to_a.php) |
| mime_parse_large_messages_during_reception  | [Table of Contents](index) |  mx_failures_fallback_to_a |
