| [Prev](conf.ref.gateway)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.generate_bounces_for_multi_recipient_policy_rejections.php) |

<a name="conf.ref.generate_bounces"></a>
## Name

generate_bounces — generate MDNs if mail is failed after reception

## Synopsis

`generate_bounces = true`

`generate_bounces = false`

<a name="idp9671952"></a>
## Description

Momentum has the ability to generate failure messages to be delivered to the envelope sender of an undeliverable message. In large outbound mail systems (for example large mailing lists), it is often desirable to suppress the generation and delivery of such failure notifications and opt for a more efficient approach such as post-processing failure logs. Note that this configuration option applies only to in-band bounces.

The default value for this option is `true` for conformance with the SMTP specification.

<a name="idp9674960"></a>
## Scope

generate_bounces is valid in the binding, binding_group, domain and global scopes.

<a name="idp9676640"></a>
## See Also

[bounce_behavior](conf.ref.bounce_behavior "bounce_behavior")

| [Prev](conf.ref.gateway)  | [Up](conf.ref.files.php) |  [Next](conf.ref.generate_bounces_for_multi_recipient_policy_rejections.php) |
| gateway  | [Table of Contents](index) |  generate_bounces_for_multi_recipient_policy_rejections |
