| [Prev](conf.ref.dns_failures_to_purge)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.domain.php) |

<a name="conf.ref.dns_fallback_to_tcp"></a>
## Name

dns_fallback_to_tcp — whether or not to fail over to TCP in place of UDP

## Synopsis

`dns_fallback_to_tcp = false`

<a name="idp9038944"></a>
## Description

Momentum uses User Datagram Protocol (UDP) for DNS queries. However, the size of a UDP packet is limited and a DNS query can exceed it. Set this option to `true` and Momentum tries first with UDP then fails over to TCP if the query response is too large. This avoids having lengthy DNS responses truncated.

The default value for this option is `false`.

<a name="idp9041808"></a>
## Scope

`dns_fallback_to_tcp` is valid in the global scope.

| [Prev](conf.ref.dns_failures_to_purge)  | [Up](conf.ref.files.php) |  [Next](conf.ref.domain.php) |
| dns_failures_to_purge  | [Table of Contents](index) |  domain |
