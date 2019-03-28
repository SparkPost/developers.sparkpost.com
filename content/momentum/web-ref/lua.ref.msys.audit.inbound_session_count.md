|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.audit.connections)  | 15.2. Lua Functions |  [Next](lua.ref.msys.audit.receptions.php) |

<a name="lua.ref.msys.audit.inbound_session_count"></a>
## Name

msys.audit.inbound_session_count — Count connections currently established from the specified cidr to the specified service

<a name="idp25903376"></a>
## Synopsis

`msys.audit.inbound_session_count(cidr, servicename);`

```
cidr: string
servicename: string
```
<a name="idp25906112"></a>
## Description

This function counts connections currently established from the specified cidr to the specified service. `cidr` is of the form:

*   `/24` evaluates to connecting IP/24

*   `/32` evaluates exactly to the connecting IP

*   `addr/mask` evaluates to a specific address and mask

*   `addr` evaluates to a specific address

Available service names include:

*   `SMTP`

*   `ECStream`

*   `Control`

*   `ECmmove2` (the service that handles duravip message moves, only available when clustering is enabled)

*   `ECCluster` (only available when clustering is enabled)

*   `inbound_cidr` (only available when clustering is enabled)

This method is equivalent to the Sieve function, [audit_service](sieve.ref.audit_service "audit_service").

**As of version 3.4, this feature supports IPv6.**

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `gateway`, `routes` and `listen` options must have IPv6 addresses enclosed in brackets. Others, such as `peer`, `relay_hosts` and `prohibited_hosts` do not require the IPv6 address in brackets.

Enable this function with the statement `require('msys.audit');`.

<a name="idp25928800"></a>
## See Also

[msys.audit.rejections](lua.ref.msys.audit.rejections "msys.audit.rejections"), [msys.audit.connections](lua.ref.msys.audit.connections.php "msys.audit.connections"), [msys.audit.receptions](lua.ref.msys.audit.receptions.php "msys.audit.receptions")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.audit.connections)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.audit.receptions.php) |
| msys.audit.connections  | [Table of Contents](index) |  msys.audit.receptions |
