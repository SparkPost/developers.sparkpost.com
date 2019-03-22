| [Prev](conf.ref.siv_throttle_cache_size)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.snmp) |

<a name="conf.ref.skip_hosts"></a>
## Name

skip_hosts — skip the specified host, but consider other hosts in the domain

## Synopsis

`skip_hosts = ("127.0.0.1")`

`skip_hosts = ("127.0.0.1" "fe80::a00:1")`

<a name="idp26605872"></a>
## Description

Unlike [prohibited_hosts](conf.ref.prohibited_hosts "prohibited_hosts"), `Skip_hosts` does not permanently deny a domain. Instead, it enables you to skip the specified host but still consider other hosts in the domain. For example, to prevent delivery to loopback addresses (127.0.0.0/8) or the null route 0.0.0.0, you can use the following line:

`skip_hosts = ( "127.0.0.0/8" "0.0.0.0" )`
### Note

Note: This setting does not affect where you receive mail from, only where you can deliver mail to.

<a name="idp26610720"></a>
## Scope

skip_hosts is valid in the global scope.

<a name="idp26612544"></a>
## See Also

[prohibited_hosts](conf.ref.prohibited_hosts "prohibited_hosts")

| [Prev](conf.ref.siv_throttle_cache_size)  | [Up](config.options.ref) |  [Next](conf.ref.snmp) |
| siv_throttle_cache_size  | [Table of Contents](index) |  SNMP |

