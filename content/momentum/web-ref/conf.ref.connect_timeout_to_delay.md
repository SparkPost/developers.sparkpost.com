| [Prev](conf.ref.connect_timeout)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.connection_allocation_aggressiveness.php) |

<a name="conf.ref.connect_timeout_to_delay"></a>
## Name

connect_timeout_to_delay — time interval before sweeping mail into the delayed queue

## Synopsis

`connect_timeout_to_delay = 900`

<a name="idp8675232"></a>
## Description

When Momentum detects that a domain cannot be contacted (for example, due to a network block), it will move all that domain's active messages into the delayed queue. This setting allows you to configure the sensitivity of Momentum to the time spent attempting to contact a domain before temporarily giving up and sweeping its messages into the delayed queue.

The default value for this option is 900 seconds.

<a name="idp8677680"></a>
## Scope

connect_timeout_to_delay is valid in the binding, binding_group, domain and global scopes.

| [Prev](conf.ref.connect_timeout)  | [Up](conf.ref.files.php) |  [Next](conf.ref.connection_allocation_aggressiveness.php) |
| connect_timeout  | [Table of Contents](index) |  connection_allocation_aggressiveness |
