| [Prev](conf.ref.require_ehlo)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.resolv_conf.php) |

<a name="conf.ref.reserve_maintenance_interval"></a>
## Name

reserve_maintenance_interval — how often to perform mail queue maintenance

## Synopsis

`reserve_maintenance_interval = 15`

<a name="idp11171472"></a>
## Description

This option specifies how often to perform mail queue maintenance to evaluate whether reserved connections should be established to get mail out of the system.

The system will usually limit the number of connections to `server_max_outbound_connections`, but during the reserve sweep, will allow up to `server_max_outbound` plus `reserve_outbound connections` to be established.

The system will respect any limits that have been defined, the reserve mechanism will not cause more connections to be established beyond a defined limit for a particular domain.

The default value for this option is `15`.

<a name="idp11176624"></a>
## Scope

reserve_maintenance_interval is valid in the global scope.

<a name="idp11178272"></a>
## See Also

[server_max_outbound_connections](conf.ref.server_max_outbound_connections "server_max_outbound_connections")

| [Prev](conf.ref.require_ehlo)  | [Up](conf.ref.files.php) |  [Next](conf.ref.resolv_conf.php) |
| require_ehlo  | [Table of Contents](index) |  resolv_conf |
