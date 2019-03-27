| [Prev](conf.ref.ecstream_timeout)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.ehlo_timeout) |

<a name="conf.ref.ehlo_hostname"></a>
## Name

ehlo_hostname — set the hostname used for EHLO in outbound mail

## Synopsis

`EHLO_Hostname = "example.com"`

`EHLO_Hostname = "__message__"`

`EHLO_Hostname = "__hostname__"`

<a name="idp24545488"></a>
## Description

```
EHLO_Hostname = <string>
EHLO_Hostname = __message__
EHLO_Hostname = __hostname__

Domain example.com {
  EHLO_Hostname = <string>
  EHLO_Hostname = __message__
  EHLO_Hostname = __hostname__
}

Binding example {
  EHLO_Hostname = <string>
  EHLO_Hostname = __message__
  EHLO_Hostname = __hostname__

  Domain example.com {
    EHLO_Hostname = <string>
    EHLO_Hostname = __message__
    EHLO_Hostname = __hostname__
  }
}
```

When delivering messages to remote mail exchanges, Momentum uses the SMTP protocol. This requires initiating the conversation with the remote server using the `EHLO` or `HELO` command. Both commands are followed by the canonical name of the initiator.

When EHLO_Hostname is set to `__message__`, Momentum will extract the domain name from the envelope sender of the outbound message. If you prefer to use the hostname of the local machine (as returned by the `gethostname()` system call, then you may specify the special value `__hostname__`.

Otherwise, an arbitrary hostname may be specified using the first syntax listed above.

The default value for this option is `__hostname__`.

<a name="idp24553024"></a>
## Scope

ehlo_hostname is valid in the binding, binding_group, domain and global scopes.

| [Prev](conf.ref.ecstream_timeout)  | [Up](config.options.ref) |  [Next](conf.ref.ehlo_timeout) |
| ecstream_timeout  | [Table of Contents](index) |  ehlo_timeout |

