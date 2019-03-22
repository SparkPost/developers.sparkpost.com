| [Prev](conf.ref.connect_timeout_to_delay)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.control_client_timeout.php) |

<a name="conf.ref.connection_allocation_aggressiveness"></a>
## Name

connection_allocation_aggressiveness — tune the aggressiveness for establishing new connections to domains

## Synopsis

`connection_allocation_aggressiveness = "normal"`

`connection_allocation_aggressiveness = "high"`

<a name="idp8687472"></a>
## Description

When set to `high`, Momentum will be more aggressive when opening up new connections to domains. Momentum achieves this by considering the max_outbound_connections setting (global or domain-specific, whichever is configured) and the size of the active queue for that domain. A setting of "normal" will produce a gradual increase in the number of connections, while "high" will result in a rapid number of new connections, up to the maximum allowed.

The following figure illustrates a typical scenario, with an active queue of 400 messages and a max_outbound_connections = 32 (the default).

<a name="conf.ref.connagg-diagram"></a>

**Figure 9.1. Connection Allocation Aggressiveness**

![](images/connagg.png)

The default value for this option is `normal`.

`normal` corresponds to the value `0.3` and high to the value `0.75`. Using the web UI you may pick a value in between to end up with a curve in between the two shown in [Figure 9.1, “Connection Allocation Aggressiveness”](conf.ref.connection_allocation_aggressiveness#conf.ref.connagg-diagram "Figure 9.1. Connection Allocation Aggressiveness"), though it is unlikely that you will need to. For more information on setting custom values see [Section 3.8.1.4, “The `Custom` Value”](web3.administration.php#web3.custom.value "3.8.1.4. The Custom Value").

<a name="idp8697712"></a>
## Scope

connection_allocation_aggressiveness is valid in the binding, binding_group, domain and global scopes.

| [Prev](conf.ref.connect_timeout_to_delay)  | [Up](conf.ref.files.php) |  [Next](conf.ref.control_client_timeout.php) |
| connect_timeout_to_delay  | [Table of Contents](index) |  control_client_timeout |
