| [Prev](conf.ref.connect_timeout)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.connection_allocation_aggressiveness) |

<a name="conf.ref.connect_timeout_to_delay"></a>
## Name

connect_timeout_to_delay — time interval before sweeping mail into the delayed queue

## Synopsis

`connect_timeout_to_delay = 900`

<a name="idp24031584"></a>
## Description

When Momentum detects that a domain cannot be contacted (for example, due to a network block), it will move all that domain's active messages into the delayed queue. This setting allows you to configure the sensitivity of Momentum to the time spent attempting to contact a domain before temporarily giving up and sweeping its messages into the delayed queue.

The default value is 900 seconds.

<a name="idp24034240"></a>
## Scope

connect_timeout_to_delay is valid in the binding, binding_group, domain, and global scopes.

| [Prev](conf.ref.connect_timeout)  | [Up](config.options.ref) |  [Next](conf.ref.connection_allocation_aggressiveness) |
| connect_timeout  | [Table of Contents](index) |  connection_allocation_aggressiveness |

