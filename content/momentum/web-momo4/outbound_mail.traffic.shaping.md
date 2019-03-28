|     |     |     |
| --- | --- | --- |
| [Prev](outbound_mail.multivip.interfaces)  | Chapter 25. Configuring Outbound Mail Delivery |  [Next](tls_option) |

## 25.4. Throttling and Traffic Shaping

Momentum provides a variety of options that allows you to control its network traffic profile, such as the rate at which outbound connections are established, the rate at which messages are transmitted, and the number of connections that are established to a given domain. These options can be set per-binding and per-domain, following the usual fall-back rules allowing a great deal of flexibility. (see [Section 15.3, “Configuration Scopes and Fallback”](ecelerity.conf.fallback "15.3. Configuration Scopes and Fallback"))

The following is an example configuration in the `ecelerity.conf` file:

```
# limit customer-1 to sending 60 messages every 3 seconds
binding "customer-1" {
  outbound_throttle_messages = "60/3"
}

# Customer-2 rules
binding "customer-2" {
  # make no more than 20 concurrent connections to a given domain
  max_outbound_connections = 20

  # make no more than 40 concurrent connections to example.com
  domain "example.com" {
    max_outbound_connections = 40
  }
}
```

|     |     |     |
| --- | --- | --- |
| [Prev](outbound_mail.multivip.interfaces)  | [Up](outbound_mail) |  [Next](tls_option) |
| 25.3. MultiVIP© Interfaces  | [Table of Contents](index) |  25.5. Outbound TLS |

