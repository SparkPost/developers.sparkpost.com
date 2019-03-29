|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.max_deliveries_per_connection)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.max_outbound_connections.php) |

<a name="conf.ref.max_dns_ttl"></a>
## Name

max_dns_ttl — set the maximum DNS TTL

## Synopsis

`max_dns_ttl = 4294967295`

<a name="idp10194720"></a>
## Description

Max_Dns_Ttl and Min_Dns_Ttl are optional overrides to the TTL values returned from DNS (only as far as resolving SMTP destinations is concerned; the DNS cache used by other parts of the system such as Sieve and DKIM is not affected by these parameters). Setting a Min_Dns_Ttl can be used to prevent excessive DNS lookups in the event that an SMTP destination you are delivering mail to has unreasonably short TTL values for its DNS records. Conversely, Max_Dns_Ttl can be used to force lookups to happen more often if a destination domain has excessively long TTL values in its DNS records. Setting this option should only be necessary in exceptional circumstances.

The default value for this option is `4294967295`.

<a name="idp10197936"></a>
## Scope

max_dns_ttl is valid in the global scope.

<a name="idp10199568"></a>
## See Also

[min_dns_ttl](conf.ref.min_dns_ttl "min_dns_ttl")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.max_deliveries_per_connection)  | [Up](conf.ref.files.php) |  [Next](conf.ref.max_outbound_connections.php) |
| max_deliveries_per_connection  | [Table of Contents](index) |  max_outbound_connections |
