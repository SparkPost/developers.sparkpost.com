| [Prev](lua.ref.msys.asyncOk)  | 15.2. Lua Functions |  [Next](lua.ref.msys.audit.inbound_session_count.php) |

<a name="lua.ref.msys.audit.connections"></a>
## Name

msys.audit.connections — Return the number of connections that have occurred for a CIDR block within a configured time window

<a name="idp25875920"></a>
## Synopsis

`msys.audit.connections(monitor, options);`

```
monitor: string
options: table, optional
```
<a name="idp25878656"></a>
## Description

Returns the number of connections that have occurred for a CIDR block within a configured time window.

**As of version 3.4, this feature supports IPv6.**

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `gateway`, `routes` and `listen` options must have IPv6 addresses enclosed in brackets. Others, such as `peer`, `relay_hosts` and `prohibited_hosts` do not require the IPv6 address in brackets.

`monitor` corresponds to one of the monitors defined in the inbound_audit module. If this module is not configured, an error is raised.

`options` is a table that can contain the following keys:

*   `startv` the starting window (default 0) to query across.

*   `endv` the ending window (default 0) to query across.

*   `cidr` an IP/mask specifying the address of interest. If not specified, the current connected IP is assumed.

*   `cluster` use the cluster wide metrics, rather than the local node metrics.

If options is not a table, it is interpreted as though it was the cidr value of interest. When specifying a window range, the aggregate sum over the specified range will be returned instead of the value from the current time window.

<a name="lua.ref.msys.audit.connections.example"></a>

**Example 15.46. msys.audit.connections example**

```
require("msys.core");
require("msys.audit");
require("msys.extended.message");

local mod = {};

function mod:validate_mailfrom(str, ac, vctx)
  local conn = msys.audit.connections("60,1");
  local rcpt = msys.audit.receptions("60,1");
  local rejn = msys.audit.rejections("60,1");
  return msys.core.VALIDATE_DONE;
end

msys.registerModule("validate_mailfrom", mod);
```

Enable this function with the statement `require('msys.audit');`.

<a name="idp25897088"></a>
## See Also

[msys.audit.inbound_session_count](lua.ref.msys.audit.inbound_session_count "msys.audit.inbound_session_count"), [msys.audit.rejections](lua.ref.msys.audit.rejections.php "msys.audit.rejections"), [msys.audit.receptions](lua.ref.msys.audit.receptions.php "msys.audit.receptions")

| [Prev](lua.ref.msys.asyncOk)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.audit.inbound_session_count.php) |
| msys.asyncOk  | [Table of Contents](index) |  msys.audit.inbound_session_count |
