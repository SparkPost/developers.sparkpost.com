|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_iflist_cache)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.use_mmap) |

<a name="conf.ref.use_ipv6"></a>
## Name

use_ipv6 — Affects the selection of IPv6 hosts in the SMTP client

## Synopsis

`use_ipv6 = false`

`use_ipv6 = true`

<a name="idp27307568"></a>
## Description

When set to false, Momentum will ignore `AAAA` records in the list of hosts resolved from MX lookups. This will effectively prevent the use of outbound IPv6 SMTP connections. The AAAA records will not be visible in the output of the **dig** console command either.

The default is `false`.

For a discussion of using IPv6 addresses with listeners, see [Section 15.4.5, “Listeners and IPv6 Addresses”](listeners#listeners.ipv6 "15.4.5. Listeners and IPv6 Addresses").

<a name="idp27312464"></a>
## Scope

use_ipv6 is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_iflist_cache)  | [Up](config.options.ref) |  [Next](conf.ref.use_mmap) |
| use_iflist_cache  | [Table of Contents](index) |  use_mmap |

