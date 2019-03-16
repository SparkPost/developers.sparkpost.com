| [Prev](conf.ref.alias_schemes)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.allow_null_envelope_sender.php) |

<a name="conf.ref.allow_ip_literal"></a>
## Name

allow_ip_literal — allow IP addresses in email addresses

## Synopsis

`allow_ip_literal = true`

<a name="idp7465456"></a>
## Description

This directive instructs Momentum to respect (or reject) IP addresses in e-mail addresses. If this option is set to `false` email addresses such as jimsmith@[192.168.0.1] will not deliver successfully as the DNS system will not allow 192.168.0.1 to resolve to an email address. If this option is set to `true`, the DNS system will resolve any domain in IPv4 form to the email address that it represents and messages addressed to that "domain" will be attempted normally.

The default value for this option is `true`.

This option is checked at reception time, rather than at delivery time. Once accepted and spooled, messages with a literal IP domain will never be subject to the Allow_IP_Literal check.

<a name="idp7470192"></a>
## Scope

allow_ip_literal is valid in the global, listener, listen, peer, pathway and pathway_group scopes.

<a name="idp7471888"></a>
## See Also

[allow_null_envelope_sender](conf.ref.allow_null_envelope_sender "allow_null_envelope_sender")

| [Prev](conf.ref.alias_schemes)  | [Up](conf.ref.files.php) |  [Next](conf.ref.allow_null_envelope_sender.php) |
| alias_schemes  | [Table of Contents](index) |  allow_null_envelope_sender |
