|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.config)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.counter) |

<a name="console_commands.count"></a>
## Name

count — count open connections

## Synopsis

`count` { *`connection_type`* } { *`CIDR`* }

<a name="idp12978176"></a>
## Description

The **count** counts open connections grouped by IP addresses. It needs two arguments. The first argument specifies the type of the connection. It could be `outbound`, `outbound/binding-name` for outbound connections over all bindings or outbound connections of a specified binding respectively. It could also be a connection type to count inbound connections, for example "SMTP". The second argument is an IP address, a CIDR IP address, a CIDR mask or a range of CIDR mask separated by "-", for example, 8-32\. Number of connections will be shown grouped by the IP addresses. CIDR masks give you flexibility to choose the level of granularity of the report.

```
15:30:30 ecelerity(/tmp/2025)> count outbound 16-32
      1                 216.200.0.0/16
      1                                 216.200.145.35/32
      1                 216.220.0.0/16
      1                                 216.220.128.9/32
      1                 216.237.0.0/16
      1                                 216.237.12.147/32
      5                 217.117.0.0/16
      5                                 217.117.146.233/32

15:30:39 ecelerity(/tmp/2025)> count outbound 217.117.146.233/32
5 sessions
15:30:48 ecelerity(/tmp/2025)> count SMTP 32
Displaying 'SMTP' from /32 to /32
      1                                 127.0.0.1/32
```

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.config)  | [Up](console.cmds.ref) |  [Next](console_commands.counter) |
| config  | [Table of Contents](index) |  counter |

