| [Prev](conf.ref.max_deliveries_per_connection)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.max_outbound_connections) |

<a name="conf.ref.max_dns_ttl"></a>
## Name

max_dns_ttl — set the maximum DNS TTL

## Synopsis

`max_dns_ttl = 4294967295`

<a name="idp25300944"></a>
## Description

`max_dns_ttl` and `min_dns_ttl` are optional overrides to the TTL values returned from DNS (only as far as resolving SMTP destinations is concerned; the DNS cache used by other parts of the system such as DKIM is not affected by these parameters). Setting a `min_dns_ttl` can be used to prevent excessive DNS lookups in the event that an SMTP destination you are delivering mail to has unreasonably short TTL values for its DNS records. Conversely, `max_dns_ttl` can be used to force lookups to happen more often if a destination domain has excessively long TTL values in its DNS records. Setting this option should only be necessary in exceptional circumstances.

Default value is `4294967295`.

<a name="idp25306080"></a>
## Scope

max_dns_ttl is valid in the global scope.

<a name="idp25307904"></a>
## See Also

[min_dns_ttl](conf.ref.min_dns_ttl "min_dns_ttl")

| [Prev](conf.ref.max_deliveries_per_connection)  | [Up](config.options.ref) |  [Next](conf.ref.max_outbound_connections) |
| max_deliveries_per_connection  | [Table of Contents](index) |  max_outbound_connections |

