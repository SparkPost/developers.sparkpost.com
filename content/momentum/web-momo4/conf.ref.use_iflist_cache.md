| [Prev](conf.ref.unsafe_spool)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.use_ipv6) |

<a name="conf.ref.use_iflist_cache"></a>
## Name

use_iflist_cache — Whether or not to cache the list of network interfaces configured by the system

## Synopsis

`use_iflist_cache = 0`

<a name="idp27289968"></a>
## Description

This option determines whether or not to use cached information about the state of the network interfaces; namely which ones are in use and their state.

The default value is `0`. When this option is off and DuraVIP™ is in use, Momentum must traverse the entire list of interfaces. Enable this option if you are using a large number of DuraVIP™s.

Changing the value of this options at runtime requires restarting the ecelerity process–issuing the ec_console command **config reload**        will not suffice.

<a name="idp27294896"></a>
## Scope

`use_iflist_cache` is valid in the global scope.

<a name="idp27297152"></a>
## See Also

[Chapter 27, *DuraVIP™: IP Fail over*](cluster.config.duravip "Chapter 27. DuraVIP™: IP Fail over") 

| [Prev](conf.ref.unsafe_spool)  | [Up](config.options.ref) |  [Next](conf.ref.use_ipv6) |
| _unsafe_spool  | [Table of Contents](index) |  use_ipv6 |

