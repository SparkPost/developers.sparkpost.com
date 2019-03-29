|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.unsafe_spool)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.use_ipv6.php) |

<a name="conf.ref.use_iflist_cache"></a>
## Name

use_iflist_cache — Whether or not to cache the list of network interfaces configured by the system

## Synopsis

`use_iflist_cache = 0`

<a name="idp12363504"></a>
## Description

This option determines whether or not to use cached information about the state of the network interfaces; namely which ones are in use and their state.

The default value for this option is `0`. When this option is off and DuraVIP™ is in use, Momentum must traverse the entire list of interfaces. Enable this option if you are using a large number of DuraVIP™s.

Changing the value of this options at runtime requires restarting the ecelerity process–issuing the ec_console command **config reload**        will not suffice.

<a name="idp12368304"></a>
## Scope

`use_iflist_cache` is valid in the global scope.

<a name="idp12370336"></a>
## See Also

[Section 7.5, “DuraVIP™: IP Fail over”](cluster.config.duravip "7.5. DuraVIP™: IP Fail over")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.unsafe_spool)  | [Up](conf.ref.files.php) |  [Next](conf.ref.use_ipv6.php) |
| _unsafe_spool  | [Table of Contents](index) |  Use_IPv6 |
