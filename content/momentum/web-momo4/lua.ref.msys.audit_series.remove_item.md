|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.audit_series.define)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.av.engines) |

<a name="lua.ref.msys.audit_series.remove_item"></a>
## Name

msys.audit_series.remove_item — Remove a counter from a named series

<a name="idp17446448"></a>
## Synopsis

`msys.audit_series.remove_item(name, key);`

```
name: string
key: string, optional
```
<a name="idp17449456"></a>
## Description

Removes a counter from a named series. The interpretation of `key` depends on the key type. For a CIDR series, the `key` is interpreted as an IP specifying the address of interest. If `accept_construct` is used as `key`, the remote IP of the accept construct is used. If not specified, the current connected IP is assumed. For string series, the key is the string key to associate the count with. If it is not specified, an error is thrown.

**This feature supports IPv6.**

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `gateway`, `routes` and `listen` options must have IPv6 addresses enclosed in brackets. Others, such as `peer`, `relay_hosts` and `prohibited_hosts` do not require the IPv6 address in brackets.

Enable this function with the statement `require('msys.audit_series');`.

<a name="idp17459648"></a>
## See Also

[msys.audit_series.define](lua.ref.msys.audit_series.define "msys.audit_series.define") [msys.audit_series.count](lua.ref.msys.audit_series.count "msys.audit_series.count"), [msys.audit_series.add](lua.ref.msys.audit_series.add "msys.audit_series.add"), [use_ipv6](conf.ref.use_ipv6 "use_ipv6"), [Section 71.41, “inbound_audit – Inbound traffic analytics”](modules.inbound_audit "71.41. inbound_audit – Inbound traffic analytics")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.audit_series.define)  | [Up](lua.function.details) |  [Next](lua.ref.msys.av.engines) |
| msys.audit_series.define  | [Table of Contents](index) |  msys.av.engines |

