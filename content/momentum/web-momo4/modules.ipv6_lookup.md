|     |     |     |
| --- | --- | --- |
| [Prev](modules.inbound_audit)  | Chapter 71. Modules Reference |  [Next](modules.jlog) |

## 71.42. ipv6_lookup – Multi-address-family MX Records

<a className="indexterm" name="idp22041776"></a>

**Configuration Change. ** This feature is available in Momentum 4.2 and later.

The ipv6_lookup module supports multi-address-family MX records, enabling A record lookups for IPv6 addresses. This module keeps track of whether the A record query succeeded, and if it did when getting the AAAA records back when making a new list of addresses, it copies the existing set of addresses and then adds the new ones to the end of the list.

### 71.42.1. Configuration

The ipv6_lookup module is enabled as follows:

<a name="modules.ipv6_lookup.example"></a>

**Example 71.67. ipv6_lookup Configuration**

`ipv6_lookup {}`

|     |     |     |
| --- | --- | --- |
| [Prev](modules.inbound_audit)  | [Up](modules) |  [Next](modules.jlog) |
| 71.41. inbound_audit – Inbound traffic analytics  | [Table of Contents](index) |  71.43. jlog – jlog-Formatted Logging |

