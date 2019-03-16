| [Prev](console_commands.show_inbound)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.showqueue) |

<a name="console_commands.show_outbound"></a>
## Name

show outbound — show all outbound connections

## Synopsis

`show outbound`

<a name="idp13870832"></a>
## Description

This command shows all outbound connections. The number at the beginning of each line in the output is the file descriptor of that event.

```
17:34:28 ecelerity(/tmp/2025)> show outbound
36: [outbound/connection_handleconnect] exchange.opf.com IPv4 207.77.20.65
58: [outbound/connection_handleconnect] pe.net IPv4 64.38.64.3
61: [outbound/connection_handleconnect] mail.nctimes.net IPv4 206.171.125.194
70: [outbound/connection_handleconnect] powersurfr.com IPv4 66.116.109.60
71: [outbound/connection_handleconnect] peace.alpha.linkserve.com IPv4 195.166.237.7
72: [outbound/connection_handleconnect] lcc.net IPv4 207.70.175.16
73: [outbound/connection_handleconnect] metallica.com IPv4 64.236.242.239
74: [outbound/connection_handleconnect] ussurg.com IPv4 216.75.208.236
75: [outbound/connection_handleconnect] ttc.com IPv4 157.234.254.51
76: [outbound/connection_handleconnect] md.prestige.net IPv4 72.32.79.195
77: [outbound/connection_handleconnect] mx1.990.net IPv4 202.102.13.148
```

**HTTP Clients**

This command will also display Google Push notification connections as "http_handleconnect" connections. All modules that use the generic HTTP client will have their connections show up under this generic category.

<a name="idp13875632"></a>
## See Also

[show inbound](console_commands.show_inbound "show inbound") and [Momentum for Mobile Push Notifications](https://support.messagesystems.com/docs/web-push/)

| [Prev](console_commands.show_inbound)  | [Up](console.cmds.ref) |  [Next](console_commands.showqueue) |
| show inbound  | [Table of Contents](index) |  showqueue |

