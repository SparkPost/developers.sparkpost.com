| [Prev](byb.ntp)  | Chapter 6. Before You Begin |  [Next](byb.set_hostnames) |

## 6.7. Adjusting `/etc/sysctl.conf`

Momentum 4 uses a large number of connections and is able to establish them quickly. This can overwhelm the operating system if special parameters are not used. These issues can be addressed by configuring the following lines in `/etc/sysctl.conf`:

```
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_tw_recycle = 1
net.core.somaxconn = 1024
net.core.rmem_max = 262144
vm.max_map_count = 768000
net.core.wmem_max = 262144
```

These options are described below:

*   `net.ipv4.tcp_tw_reuse` – Reuse sockets in the TIME_WAIT state for new connections when it is safe from a protocol viewpoint. Setting this to `1` enables reuse of open connections, increasing efficiency.

*   `net.ipv4.tcp_tw_recycle` – This kernel parameter enables fast recycling of TIME_WAIT sockets. A setting of `1` enables the reuse of sockets without the normal wait time.

*   `net.core.somaxconn = 1024` – This kernel parameter controls the number of incoming connections. Increasing it to `1024` allows Momentum to process more open connections.

*   `net.core.rmem_max` – This kernel parameter raises the maximum operating system receive buffer size for all types of connections.

*   `vm.max_map_count` – This kernel parameter controls mapped areas and needs to be increased.

*   `net.core.wmem_max` – This kernel parameter raises the maximum operating system send buffer size for all types of connections.

| [Prev](byb.ntp)  | [Up](before_you_begin) |  [Next](byb.set_hostnames) |
| 6.6. Enable Network Time Protocol (NTP)  | [Table of Contents](index) |  6.8. Setting Hostnames |

