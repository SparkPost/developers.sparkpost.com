|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.gateway)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.generate_bounces_for_multi_recipient_policy_rejections) |

<a name="conf.ref.generate_bounces"></a>
## Name

generate_bounces — generate MDNs if mail is failed after reception

## Synopsis

`generate_bounces = true`

`generate_bounces = false`

<a name="idp24757296"></a>
## Description

Momentum has the ability to generate failure messages to be delivered to the envelope sender of an undeliverable message. In large outbound mail systems (for example large mailing lists), it is often desirable to suppress the generation and delivery of such failure notifications and opt for a more efficient approach such as post-processing failure logs. Note that this configuration option applies only to in-band bounces.

The default value for this option is `true` for conformance with the SMTP specification.

<a name="idp24760528"></a>
## Scope

generate_bounces is valid in the binding, binding_group, domain and global scopes.

<a name="idp24762400"></a>
## See Also

[bounce_behavior](conf.ref.bounce_behavior "bounce_behavior")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.gateway)  | [Up](config.options.ref) |  [Next](conf.ref.generate_bounces_for_multi_recipient_policy_rejections) |
| gateway  | [Table of Contents](index) |  generate_bounces_for_multi_recipient_policy_rejections |

