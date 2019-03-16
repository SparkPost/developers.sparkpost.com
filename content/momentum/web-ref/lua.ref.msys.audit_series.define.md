| [Prev](lua.ref.msys.audit_series.count)  | 15.2. Lua Functions |  [Next](lua.ref.msys.audit_series.remove_item.php) |

<a name="lua.ref.msys.audit_series.define"></a>
## Name

msys.audit_series.define — Define an audit series

<a name="idp26033728"></a>
## Synopsis

`msys.audit_series.define(name, type, interval, num_windows, options);`

```
name: string
type: string
interval: number
num_windows: number
options: table, optional
```
<a name="idp26036544"></a>
## Description

Defines an audit series. `interval` is the period over which data will be gathered, in seconds, and `num_windows` specifies the number of equally sized buckets into which the information will be distributed. The total time period covered is `num_windows` times `interval`; each bucket is `interval` seconds long. The buckets are numbered with 0 representing the current time window, `1` representing the prior time window and so on.

### Warning

An audit series is always either IPv4 or IPv6\. If you want a policy that relates to both address formats, you must define a separate series for each type.

Values for the `type` parameter are as follows:

*   `cidr` defines an IPv4 CIDR based audit series

*   `cidr_ipv6` defines an IPv6 CIDR based audit series

*   `string` defines a string based audit series.

`options` is a table with the following possible keys:

*   `serialize` write audit series to log. The value may be `true` or `false`; `false` is the default. When `true`, the log will be written to the directory defined by the `serialize_dir` option in the inbound_audit module. The default value for this option is `/var/log/ecelerity/audit_series_logs`.

*   `replicate` affects replication. Defaults to `none`, but can be `cluster` to send to all nodes, or `manager` to send only to cluster manager nodes. *This may require explicit configuration in the cluster stanza to operate correctly* .

    ### Note

    When using the msys.audit_series.define function on a singlenode installation, do not set replicate to `cluster`. If you do this the audit series will not increment.

*   `persist` if true, the audit series will be persisted. The persisted series will be reloaded when the engine restarts. The default value is `false`. The location of this file is determined by the `serialize_dir` option of the inbound_audit module. Its default value is `/var/log/ecelerity/audit_series_persist`.

This function is intended to be used from a module init function, for example:

<a name="audit_series.define.example"></a>

**Example 15.47. audit_series.define example**

```
require("msys.audit_series");

local mod = {}

function mod:init()
  msys.audit_series.define("myseries", "cidr", 300, 6);
  return true;
end

function mod:validate_data(msg, accept, vctx)
  msys.audit_series.add(myseries, accept)
  return msys.core.VALIDATE_CONT
end

msys.registerModule("mymodule", mod);
```

The series can be queried using the [msys.audit_series.count](lua.ref.msys.audit_series.count "msys.audit_series.count") function.

Enable this function with the statement `require('msys.audit_series');`.

<a name="idp26065072"></a>
## IPv6 Support

As of version 3.4, this feature supports IPv6.

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `gateway`, `routes` and `listen` options must have IPv6 addresses enclosed in brackets. Others, such as `peer`, `relay_hosts` and `prohibited_hosts` do not require the IPv6 address in brackets.

<a name="idp26070528"></a>
## See Also

[msys.audit_series.count](lua.ref.msys.audit_series.count "msys.audit_series.count"), [msys.audit_series.add](lua.ref.msys.audit_series.add.php "msys.audit_series.add"), [msys.audit_series.remove_item](lua.ref.msys.audit_series.remove_item.php "msys.audit_series.remove_item"), [Use_IPv6](conf.ref.use_ipv6.php "Use_IPv6"), [Section 14.41, “inbound_audit – Inbound traffic analytics”](modules.inbound_audit.php "14.41. inbound_audit – Inbound traffic analytics")

| [Prev](lua.ref.msys.audit_series.count)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.audit_series.remove_item.php) |
| msys.audit_series.count  | [Table of Contents](index) |  msys.audit_series.remove_item |
