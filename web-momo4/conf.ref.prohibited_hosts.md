| [Prev](conf.ref.pidfile)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.rcptto_timeout) |

<a name="conf.ref.prohibited_hosts"></a>
## Name

prohibited_hosts — prevent mail from being delivered to invalid destinations

## Synopsis

`prohibited_hosts = ("127.0.0.1")`

`prohibited_hosts = ("127.0.0.1" "fe80::a00:1")`

<a name="idp25892896"></a>
## Description

Some providers use DNS tricks to deter systems they feel are abusing their resources. One technique is to return a loopback or other local address to you when you query their MX records.

There are some addresses you may never want to deliver mail to. For example, when configured as an outbound e-mail relay you have no reason to deliver mail to your own ip, or any loopback addresses on your machine. To prevent delivery to loopback addresses (127.0.0.0/8) or the null route 0.0.0.0, you can use the following line:

`prohibited_hosts = ( "127.0.0.0/8" "0.0.0.0" )`
### Note

Note: This setting does not in any way affect where you can receive mail from, only where you can deliver mail to.

<a name="idp25897456"></a>
## Scope

prohibited_hosts is valid in the global scope.

<a name="idp25899296"></a>
## See Also

[skip_hosts](conf.ref.skip_hosts "skip_hosts")

| [Prev](conf.ref.pidfile)  | [Up](config.options.ref) |  [Next](conf.ref.rcptto_timeout) |
| pidfile  | [Table of Contents](index) |  rcptto_timeout |

