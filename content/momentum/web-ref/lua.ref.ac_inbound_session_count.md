| [Prev](lua.ref.ac_esmtp_capability_remove)  | 15.2. Lua Functions |  [Next](lua.ref.msys.cloudmark.analyze.php) |

<a name="lua.ref.ac_inbound_session_count"></a>
## Name

ac:inbound_session_count — Return the current inbound session count to this listener for the connecting IP

<a name="idp23400656"></a>
## Synopsis

`require('msys.extended.ac')`

`ac:inbound_session_count(cidr, service_type);`

```
cidr: string (optional)
service_type: string (optional)
```
<a name="idp23404112"></a>
## Description

`ac` is an accept construct userdata data type. For a description of the C struct see [accept_construct](https://support.messagesystems.com/docs/web-c-api/structs.accept_construct).

If called with no arguments, this function returns the current inbound session count to this listener for the connecting IP. Otherwise it returns the count for the defined IP or CIDR. It is used as shown below:

`local count = ac:inbound_session_count("localhost/32");`

If called with one argument, that argument should be in one of the following forms:

*   `/24` evaluates to connecting IP/24

*   `/32` evaluates to exactly the connecting IP

*   `addr/mask` evaluates to a specific address and mask

*   `addr` evaluates to a specific address

**As of version 3.4, this feature supports IPv6.**

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `gateway`, `routes` and `listen` options must have IPv6 addresses enclosed in brackets. Others, such as `peer`, `relay_hosts` and `prohibited_hosts` do not require the IPv6 address in brackets.

This Lua function is equivalent to the Sieve function [audit_service](sieve.ref.audit_service "audit_service"). To use this function you must configure the inbound_audit module.

The second argument returns the count for the specified service type. Service types are:

*   SMTP

*   ECStream

*   Control

*   ECmmove2 (The service that handles duravip message moves.)

*   ECCluster

*   inbound_cidr

Service type names are case sensitive. If no type is specified, the default is `SMTP`. If you wish to specify the second parameter only, call this function in the following way: `local count = ac:inbound_session_count(nil, "Control");`.

<a name="idp23427648"></a>
## See Also

[Section 14.41, “inbound_audit – Inbound traffic analytics”](modules.inbound_audit "14.41. inbound_audit – Inbound traffic analytics")

| [Prev](lua.ref.ac_esmtp_capability_remove)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.cloudmark.analyze.php) |
| ac:esmtp_capability_remove  | [Table of Contents](index) |  msys.cloudmark.analyze |
