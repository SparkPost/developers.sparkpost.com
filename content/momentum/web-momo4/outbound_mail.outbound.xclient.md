| [Prev](tls_option)  | Chapter 25. Configuring Outbound Mail Delivery |  [Next](outbound_mail.relay_hosts) |

## 25.6. Outbound XCLIENT support

It is often useful for a relay to be able to propagate the original sender IP address to a remote relay so that it can apply more intelligent policy rules to the message. The XCLIENT SMTP extension specifies a protocol for doing exactly that. The `XCLIENT` configuration option allows you to specify whether Momentum should use XCLIENT when the remote host advertises support for it.

Configuration is similar to TLS configuration, with possible values being `no` to not use XCLIENT (the default), `ifavailable` to use it if it is advertised and `required` to prevent delivery if the remote host does not support XCLIENT.

### Warning

Setting XCLIENT to `required` causes Momentum to deliver the mail only if the remote client supports XCLIENT.

The following is an example configuration in the `ecelerity.conf` file:

```
binding "customer-1" {
  XCLIENT = "ifavailable"

  domain "relay.example.com" {
    XCLIENT = "required"
  }
}
```

| [Prev](tls_option)  | [Up](outbound_mail) |  [Next](outbound_mail.relay_hosts) |
| 25.5. Outbound TLS  | [Table of Contents](index) |  25.7. Outbound Email Relay |

