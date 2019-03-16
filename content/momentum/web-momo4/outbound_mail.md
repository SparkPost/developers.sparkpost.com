| [Prev](multi_event_loops)  | Part III. Configuring Momentum |  [Next](outbound_mail.prohibited.hosts) |
## Chapter 25. Configuring Outbound Mail Delivery
**Table of Contents**

* [25.1\. Routing Mail](outbound_mail#outbound_mail.routing.mail)
* [25.2\. Prohibited_Hosts](outbound_mail.prohibited.hosts)
* [25.3\. MultiVIP© Interfaces](outbound_mail.multivip.interfaces)
* [25.4\. Throttling and Traffic Shaping](outbound_mail.traffic.shaping)
* [25.5\. Outbound TLS](tls_option)
* [25.6\. Outbound XCLIENT support](outbound_mail.outbound.xclient)
* [25.7\. Outbound Email Relay](outbound_mail.relay_hosts)

## 25.1. Routing Mail
By default, Momentum will use DNS to resolve the MX records for a destination domain to decide which machine(s) it will connect to when delivering the mail. You can override the use of MX records using the `Gateway` or `Routes` configuration options. When set, Momentum will attempt to resolve the gateway using MX records. If there are no MX records, it will attempt to resolve it as an A record and use the resultant list of IP addresses. The gateway option can be set per binding, per domain, or at the global level. In addition, you can configure either LMTP or SMTP for delivery methods, and specify the remote port number to use, allowing a great deal of flexibility in customizing routing.
The following is an example configuration in the `ecelerity.conf` file:
```
# route all mail to a "smart host"
Gateway = 10.10.10.50
# Except for mail for local.example.com
Domain local.example.com {
  # which is routed to this address
  Gateway = 10.10.10.20
  # using LMTP
  Delivery_Method = LMTP
}
```

| [Prev](multi_event_loops)  | [Up](p.configuration) |  [Next](outbound_mail.prohibited.hosts) |
| Chapter 24. Configuring Multiple Event Loops  | [Table of Contents](index) |  25.2. Prohibited_Hosts |
