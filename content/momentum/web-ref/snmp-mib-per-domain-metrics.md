|     |     |     |
| --- | --- | --- |
| [Prev](snmp-mib)  | Appendix B. MIB Files |  [Next](snmp-mib.pergroup) |

## B.1. 1.3.6.1.4.1.19552.1.2 – Per-domain Metrics

The per-domain MIB is defined as: `1.3.6.1.4.1.19552.1.2.L.A.B.C.S.G` where `A.B.C` indicates the domain name, and `L` represents the length of that domain. For example, `aol.com` would be represented as:

```
7.97.111.108.46.99.111.109
7  a   o   l  .  c   o   m
```

In this case `7` indicates the length of 'aol.com'. The length and the binding identifier replace `L.A.B.C` in the MIB. `G` corresponds to the MTAGroupIndexID (see RFC 2789, MTA MIB) `S` represents the metric type. We define the following metrics:

*   0: domain name

*   1: receptions

*   2: failures

*   3: deliveries

*   4: transient failures

*   5: outbound connections

*   6: active queue size

*   7: delayed queue size

For more information about Mail Monitoring MIBs see [RFC2789](http://tools.ietf.org/html/rfc2789).

The `aol.com` domain name would have the following entry on the default binding: 1.3.6.1.4.1.19552.1.2.7.97.111.108.46.99.111.109.0.1: string 'aol.com'

### B.1.1. Determining the ID for an MTAGroupIndexID

The MTAGroupIndexID can be determined by using snmpwalk and sutracting 1 from last number of the desired binding. You can also use snmpwalk to get the MTAGroupIndexID in order to determine per-domain stats.

For example:

```
shell> /opt/msys/3rdParty/bin/snmpwalk -v1 -c public
10.79.20.132:8162 1.3.6.1.4.1.19552.1.3
SNMPv2-Example::enterprises.19552.1.3.1.1 = Counter32: 0
SNMPv2-Example::enterprises.19552.1.3.1.2 = Counter32: 0
SNMPv2-Example::enterprises.19552.1.3.1.3 = Counter32: 0
SNMPv2-Example::enterprises.19552.1.3.1.4 = Counter32: 0
SNMPv2-Example::enterprises.19552.1.3.2.1 = Counter32: 0
SNMPv2-Example::enterprises.19552.1.3.2.2 = Counter32: 0
SNMPv2-Example::enterprises.19552.1.3.2.3 = Counter32: 0
SNMPv2-Example::enterprises.19552.1.3.2.4 = Counter32: 0
SNMPv2-Example::enterprises.19552.1.3.3.1 = Counter32: 0
SNMPv2-Example::enterprises.19552.1.3.3.2 = Counter32: 0
SNMPv2-Example::enterprises.19552.1.3.3.3 = Counter32: 0
SNMPv2-Example::enterprises.19552.1.3.3.4 = Counter32: 0
SNMPv2-Example::enterprises.19552.1.3.4.1 = STRING: "none/all"
SNMPv2-Example::enterprises.19552.1.3.4.2 = STRING: "none/default"
SNMPv2-Example::enterprises.19552.1.3.4.3 = STRING: "none/cdp"
SNMPv2-Example::enterprises.19552.1.3.4.4 = STRING: "none/example"
```

In the output above, `cdp` and `example` are binding names. The MTAGroupIndexID of `cdp` is `2` because `2` is one less than the last number in `SNMPv2-SMI::enterprises.19552.1.3.4.3`.


|     |     |     |
| --- | --- | --- |
| [Prev](snmp-mib)  | [Up](snmp-mib) |  [Next](snmp-mib.pergroup) |
| Appendix B. MIB Files  | [Table of Contents](index) |  B.2. Per-group (binding) Metrics, 1.3.6.1.4.1.19552.1.3 |
