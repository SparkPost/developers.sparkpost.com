| [Prev](conf.ref.generate_bounces)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.generate_delay_dsn.php) |

<a name="conf.ref.generate_bounces_for_multi_recipient_policy_rejections"></a>
## Name

generate_bounces_for_multi_recipient_policy_rejections — generate MDNs after reception for policy rejections

## Synopsis

`generate_bounces_for_multi_recipient_policy_rejections = true`

`generate_bounces_for_multi_recipient_policy_rejections = false`

<a name="idp9686480"></a>
## Description

If you have configured a module or a policy script to reject mail in the each_rcpt phase of the validation process, then it is possible that you don't want to generate an MDN for that rejected mail, on the grounds that it was unwanted mail and likely has a bogus sender. If that is the case, setting `Generate_Bounces_For_Multi_Recipient_Policy_Rejections` to `false` will cause Momentum to suppress MDN generation for multi-recipient mail when some, but not all, recipients were rejected.

When all recipients reject the mail, Momentum will respond with a failure code to the sender; an MDN does not need to be generated in this case.

The default value for this option is `true` for conformance with the SMTP specification.

<a name="idp9691312"></a>
## Scope

generate_bounces_for_multi_recipient_policy_rejections is valid in the global, pathway_group and pathway scopes.

| [Prev](conf.ref.generate_bounces)  | [Up](conf.ref.files.php) |  [Next](conf.ref.generate_delay_dsn.php) |
| generate_bounces  | [Table of Contents](index) |  generate_delay_dsn |
