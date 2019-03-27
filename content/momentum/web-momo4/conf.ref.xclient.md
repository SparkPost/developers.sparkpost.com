| [Prev](conf.ref.user)  | Chapter 72. Configuration Options Reference |  [Next](console.cmds.ref) |

<a name="conf.ref.xclient"></a>
## Name

xclient — use the xclient extension to SMTP for outbound mail

## Synopsis

`xclient = "no|ifavailable|required"`

<a name="idp27383968"></a>
## Description

`xclient` allows information regarding the original sending host (such as the connecting IP address) to be communicated with the next hop and is useful when Momentum is deployed as a gateway device in a configuration where the internal hosts will benefit from knowing the original connecting IP address. In order to use this feature, the next-hop MTA must support xclient. More information can be found at [http://www.postfix.org/XCLIENT_README.html](http://www.postfix.org/XCLIENT_README.html)

```
Binding customer-1 {
  xclient = "ifavailable"
  Domain relay.example.com {
    xclient = "required"
  }
}
```

By enabling `xclient`, outbound messages will be preceded by an ESMTP XCLIENT negotiation. If it is required then outbound mail will be transiently failed if the remote mail exchange does not support and accept the `xclient` negotiation. If set to `ifavailable`, then Momentum will attempt to negotiate `xclient` with the remote end prior to each message in the stream if the remote mail exchange supports `xclient`. If that attempt fails, the message will be transmitted without `xclient` data.

The default value is `no`.

<a name="idp27392576"></a>
## Scope

`xclient` is valid in the binding, binding_group, domain, and global scopes.

| [Prev](conf.ref.user)  | [Up](config.options.ref) |  [Next](console.cmds.ref) |
| user  | [Table of Contents](index) |  Chapter 73. Non-Module-Specific Console Commands |

