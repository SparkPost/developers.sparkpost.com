| [Prev](lua.ref.msys.sleep)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.type) |

<a name="lua.ref.msys.snmpTrap"></a>
## Name

msys.snmpTrap — Issue an SNMP trap

<a name="idp16398880"></a>
## Synopsis

`msys.snmpTrap(traptable);`

`traptable: table`<a name="idp16401856"></a>
## Description

Issue an SNMP trap. `traptable` has the following permitted keys:

*   `type` specifies the type of the payload. Can be one of string, counter, gauge or IP.

*   `payload` if `type` is a string, `payload` must be a string. If `type` is a counter or gauge, then this must be a number. If `type` is an IP, then it must be a valid IPv4 address.

*   `address` the IPv4 destination address for the trap. If unspecified, the trap will be sent to all configured `Trap_Destination` stanzas in the config file.

*   `port` the target port number. If not specified, defaults to the SNMP standard port assigned by IANA.

*   `community` the community name. If not specified, this parameter defaults to `public`.

*   `mib` the OID identifying the trap.

*   `trapvar.mib` the OID identifying the trap variable. If not specified, 1.3.6.1.4.1.19552.1.4.1.0 is used (the OmniTI Enterprise MIB assignment). For more information, see [Appendix B, *MIB Files*](snmp-mib "Appendix B. MIB Files") .

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp16419344"></a>
## See Also

[SNMP](conf.ref.snmp "SNMP")

| [Prev](lua.ref.msys.sleep)  | [Up](lua.function.details) |  [Next](lua.ref.msys.type) |
| msys.sleep  | [Table of Contents](index) |  msys.type |

