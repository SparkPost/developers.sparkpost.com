| [Prev](lua.ref.msys.policyeditor.send_email)  | 15.2. Lua Functions |  [Next](lua.ref.msys.policyeditor.set_binding.php) |

<a name="lua.ref.msys.policyeditor.send_trap"></a>
## Name

msys.policyeditor.send_trap — Send an SNMP trap

<a name="idp25017296"></a>
## Synopsis

`msys.policyeditor.send_trap(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `msys.snmpTrap()` to send an SNMP trap. For more information see [msys.snmpTrap](lua.ref.msys.snmpTrap "msys.snmpTrap").

<a name="idp25022592"></a>
## Description

Send an SNMP trap

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

Defined parameters for `params` are:

*   `type` specifies the data type of the payload. Can be one of "string", "counter", "gauge" or "ip"

*   `payload` the data to be sent with the trap. For "string" data, this must be a string. For "ip" data, this must be a string rendition of an IPv4 address. For "counter" and "gauge" types, it must be numeric.

*   `address` the trap server address; an IPv4 address string.

*   `port` the port number of the trap server

*   `community` the community for authorization purposes with the trap daemon

*   `mib` the mib for the trap. If not specified, defaults to the Ecelerity enterprise MIB ("1.3.6.1.4.1.19552.1.4.7")

*   `trapvarmib` the Object Identifier (OID) to use for the trap variable. If unspecified, defaults to "1.3.6.1.4.1.19552.1.4.1.0".

*   `throttle` if non-zero, limits sending to one trap every "throttle" seconds.

<a name="idp25037824"></a>
## See Also

[Section 3.11, “Automated Alerting Configuration”](web3.automated.alerting "3.11. Automated Alerting Configuration")

| [Prev](lua.ref.msys.policyeditor.send_email)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.policyeditor.set_binding.php) |
| msys.policyeditor.send_email  | [Table of Contents](index) |  msys.policyeditor.set_binding |
