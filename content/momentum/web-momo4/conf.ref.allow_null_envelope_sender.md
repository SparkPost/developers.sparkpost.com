|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.allow_ip_literal)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.allow_trailing_whitespace_in_commands) |

<a name="conf.ref.allow_null_envelope_sender"></a>
## Name

allow_null_envelope_sender — allow the null envelope sender in e-mail addresses

## Synopsis

`allow_null_envelope_sender = true`

<a name="idp23510336"></a>
## Description

This directive instructs Momentum to respect (or reject) null envelope senders. Null envelope senders (`MAIL FROM:<>`) are used by systems to send Delivery Status Notifications (DSNs) and Message Disposition Notifications (MDNs). These are messages about a previous message, and are used for non-delivery reports, among other things. Note that RFC 1123 requires null sender support, and that if you disable this feature, your senders will never receive any bounce notification when their messages are undeliverable.

<a name="idp23513088"></a>
## Scope

allow_null_envelope_sender is valid in the global, listener, listen, peer, pathway_group, and pathway scopes.

<a name="idp23514992"></a>
## See Also

[allow_ip_literal](conf.ref.allow_ip_literal "allow_ip_literal")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.allow_ip_literal)  | [Up](config.options.ref) |  [Next](conf.ref.allow_trailing_whitespace_in_commands) |
| allow_ip_literal  | [Table of Contents](index) |  allow_trailing_whitespace_in_commands |

