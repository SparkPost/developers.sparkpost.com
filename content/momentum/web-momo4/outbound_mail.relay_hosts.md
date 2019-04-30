|     |     |     |
| --- | --- | --- |
| [Prev](outbound_mail.outbound.xclient)  | Chapter 25. Configuring Outbound Mail Delivery |  [Next](log_aggregation) |

## 25.7. Outbound Email Relay

When configuring Momentum as an outbound e-mail relay, you must take care to not expose your system to abuse by allowing unauthorized machines to send e-mail to domains for which the local instance does not provide mail service. Doing so makes your system an "open relay." Only trusted machines should be allowed to connect and inject mails. The `relay_hosts` option controls this setting. For details, see [relay_hosts](conf.ref.relay_hosts "relay_hosts").

|     |     |     |
| --- | --- | --- |
| [Prev](outbound_mail.outbound.xclient)  | [Up](outbound_mail) |  [Next](log_aggregation) |
| 25.6. Outbound XCLIENT support  | [Table of Contents](index) |  Chapter 26. Log Aggregation |

