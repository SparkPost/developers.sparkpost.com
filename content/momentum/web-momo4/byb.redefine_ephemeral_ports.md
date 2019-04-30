|     |     |     |
| --- | --- | --- |
| [Prev](byb.root_and_vertica_dba)  | Chapter 6. Before You Begin |  [Next](byb.config_vertica_services) |

## 6.11. Redefining Ephemeral Ports

The lower limits of the port range as currently defined on Centos are too low as Vertica listens on 5433 and Riak listens on 8099. Redefine the Ephemeral Ports lower limit to a safer value, for example:

`echo "49152 65535" > /proc/sys/net/ipv4/ip_local_port_range`

Confirm the new port range:

`cat /proc/sys/net/ipv4/ip_local_port_range`
### Warning

If you are installing Momentum in AWS, do not use ephemeral disks in your production environment as this can potentially cause a loss of messages.

|     |     |     |
| --- | --- | --- |
| [Prev](byb.root_and_vertica_dba)  | [Up](before_you_begin) |  [Next](byb.config_vertica_services) |
| 6.10. Creating `root` and `vertica_dba` Accounts  | [Table of Contents](index) |  6.12. Configuring Locale |

