|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_iflist_cache)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.use_mmap.php) |

<a name="conf.ref.use_ipv6"></a>
## Name

Use_IPv6 — Affects the selection of IPv6 hosts in the SMTP client

## Synopsis

`Use_IPv6 = false`

`Use_IPv6 = true`

<a name="idp12379888"></a>
## Description

When set to false, Momentum will ignore `AAAA` records in the list of hosts resolved from MX lookups. This will effectively prevent the use of outbound IPv6 SMTP connections. The AAAA records will not be visible in the output of the **dig** console command either.

For a discussion of using IPv6 addresses with listeners, see [the section called “Listeners and IPv6 Addresses”](ecelerity.conf#ecelerity.conf.ipv6 "Listeners and IPv6 Addresses").

<a name="idp12384976"></a>
## Scope

use_ipv6 is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.use_iflist_cache)  | [Up](conf.ref.files.php) |  [Next](conf.ref.use_mmap.php) |
| use_iflist_cache  | [Table of Contents](index) |  Use_MMAP |
