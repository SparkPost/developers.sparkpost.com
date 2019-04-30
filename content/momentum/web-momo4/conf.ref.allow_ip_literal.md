|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.alias_schemes)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.allow_null_envelope_sender) |

<a name="conf.ref.allow_ip_literal"></a>
## Name

allow_ip_literal — allow IP addresses in email addresses

## Synopsis

`allow_ip_literal = true`

<a name="idp23493760"></a>
## Description

This directive instructs Momentum to respect (or reject) IP addresses in e-mail addresses. If this option is set to `false`, email addresses such as jimsmith@[192.168.0.1] will not deliver successfully as the DNS system will not allow 192.168.0.1 to resolve to an email address. If this option is set to `true`, the DNS system will resolve any domain in IPv4 form to the email address that it represents and messages addressed to that "domain" will be attempted normally.

The default value for this option is `true`.

This option is checked at reception time, rather than at delivery time. Once accepted and spooled, messages with a literal IP domain will never be subject to the `allow_ip_literal` check.

<a name="idp23498832"></a>
## Scope

allow_ip_literal is valid in the global, listener, listen, peer, pathway, and pathway_group scopes.

<a name="idp23500720"></a>
## See Also

[allow_null_envelope_sender](conf.ref.allow_null_envelope_sender "allow_null_envelope_sender")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.alias_schemes)  | [Up](config.options.ref) |  [Next](conf.ref.allow_null_envelope_sender) |
| alias_schemes  | [Table of Contents](index) |  allow_null_envelope_sender |

