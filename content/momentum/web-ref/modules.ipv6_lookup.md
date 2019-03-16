| [Prev](modules.inbound_audit)  | Chapter 14. Modules Reference |  [Next](modules.jlog.php) |

## 14.42. ipv6_lookup – Multi-address-family MX Records

<a class="indexterm" name="idp20256496"></a>

**Configuration Change. ** This feature is available as beta in Momentum 3.6.10 and later.

The ipv6_lookup module supports multi-address-family MX records, enabling A record lookups for IPv6 addresses. This module keeps track of whether the A record query succeeded, and if it did when getting the AAAA records back when making a new list of addresses, it copies the existing set of addresses and then adds the new ones to the end of the list.

### 14.42.1. Configuration

The ipv6_lookup module is enabled as follows:

<a name="modules.ipv6_lookup.example"></a>

**Example 14.70. ipv6_lookup module**

`ipv6_lookup {}`

| [Prev](modules.inbound_audit)  | [Up](modules.php) |  [Next](modules.jlog.php) |
| 14.41. inbound_audit – Inbound traffic analytics  | [Table of Contents](index) |  14.43. jlog – The jlog Module |
