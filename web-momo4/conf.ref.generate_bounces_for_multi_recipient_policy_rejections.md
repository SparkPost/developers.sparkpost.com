| [Prev](conf.ref.generate_bounces)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.generate_delay_dsn) |

<a name="conf.ref.generate_bounces_for_multi_recipient_policy_rejections"></a>
## Name

generate_bounces_for_multi_recipient_policy_rejections — generate MDNs after reception for policy rejections

## Synopsis

`generate_bounces_for_multi_recipient_policy_rejections = true`

`generate_bounces_for_multi_recipient_policy_rejections = false`

<a name="idp24773552"></a>
## Description

If you have configured a module or a policy script to reject mail in the each_rcpt phase of the validation process, then it is possible that you don't want to generate an MDN for that rejected mail, on the grounds that it was unwanted mail and likely has a bogus sender. If that is the case, setting `generate_bounces_for_multi_recipient_policy_rejections` to `false` will cause Momentum to suppress MDN generation for multi-recipient mail when some, but not all, recipients were rejected.

When all recipients reject the mail, Momentum will respond with a failure code to the sender; an MDN does not need to be generated in this case.

The default value is `true` for conformance with the SMTP specification.

<a name="idp24778288"></a>
## Scope

generate_bounces_for_multi_recipient_policy_rejections is valid in the global, pathway_group, and pathway scopes.

| [Prev](conf.ref.generate_bounces)  | [Up](config.options.ref) |  [Next](conf.ref.generate_delay_dsn) |
| generate_bounces  | [Table of Contents](index) |  generate_delay_dsn |

