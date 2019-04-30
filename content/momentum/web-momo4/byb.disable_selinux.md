|     |     |     |
| --- | --- | --- |
| [Prev](byb.load_balancing)  | Chapter 6. Before You Begin |  [Next](byb.ntp) |

## 6.5. Disable SELinux

Red Hat uses the Security-Enhanced Linux (SELinux) security policies. Running Momentum 4 with SELinux enabled is not supported. To disable SELinux, edit `/etc/selinux/config` and set `SELINUX=disabled` then run **`setenforce 0`**   .

|     |     |     |
| --- | --- | --- |
| [Prev](byb.load_balancing)  | [Up](before_you_begin) |  [Next](byb.ntp) |
| 6.4. Load Balancing  | [Table of Contents](index) |  6.6. Enable Network Time Protocol (NTP) |

