|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.connect_timeout_to_delay)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.context) |

<a name="conf.ref.connection_allocation_aggressiveness"></a>
## Name

connection_allocation_aggressiveness — tune the aggressiveness for establishing new connections to domains

## Synopsis

`connection_allocation_aggressiveness = "normal"`

`connection_allocation_aggressiveness = "high"`

<a name="idp24045120"></a>
## Description

When set to `high`, Momentum will be more aggressive when opening up new connections to domains. Momentum achieves this by considering the max_outbound_connections setting (global or domain-specific, whichever is configured) and the size of the active queue for that domain. A setting of "normal" will produce a gradual increase in the number of connections, while "high" will result in a rapid number of new connections, up to the maximum allowed.

The following figure illustrates a typical scenario, with an active queue of 400 messages and a max_outbound_connections = 32 (the default).

<a name="conf.ref.connagg-diagram"></a>

**Figure 72.1. Connection Allocation Aggressiveness**

![](/momentum/web-momo4/images/connagg.png)

The default value is `normal`.

<a name="idp24052608"></a>
## Scope

connection_allocation_aggressiveness is valid in the binding, binding_group, domain, and global scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.connect_timeout_to_delay)  | [Up](config.options.ref) |  [Next](conf.ref.context) |
| connect_timeout_to_delay  | [Table of Contents](index) |  context |

