|     |     |     |
| --- | --- | --- |
| [Prev](modules.auth_radius)  | Chapter 14. Modules Reference |  [Next](modules.beik.php) |

## 14.9. bind_address_secondary – Dual-stack IPv4/IPv6 Support

<a class="indexterm" name="idp17992240"></a>

**Configuration Change. ** This feature is available as beta in Momentum 3.6.10 and later.

The bind_address_secondary module allows a binding to attach itself to an ipv6 address as well as a ipv4 one, supporting multiple IP addresses for dual stack. The secondary could be ipv6 or ipv4\. In the dual stack case, it is desirable to select the appropriate address family for a given downstream destination (ie, MX). This module supports one IP address per address family per binding.

### 14.9.1. Configuration

The bind_address_secondary module is enabled as follows:

<a name="modules.bind_address_secondary.example"></a>

**Example 14.17. bind_address_secondary module**

bind_address_secondary {}
binding "whatever" {
  bind_address_secondary = *`whatever`*
}

|     |     |     |
| --- | --- | --- |
| [Prev](modules.auth_radius)  | [Up](modules.php) |  [Next](modules.beik.php) |
| 14.8. auth_radius – RADIUS based SMTP Authentication  | [Table of Contents](index) |  14.10. beik – BEIK Module |
