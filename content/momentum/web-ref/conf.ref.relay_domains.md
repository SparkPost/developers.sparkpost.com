| [Prev](conf.ref.rcptto_timeout)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.relay_hosts.php) |

<a name="conf.ref.relay_domains"></a>
## Name

relay_domains — configure the list of domains for which Momentum relays mail

## Synopsis

`Relay_Domains = ( "*.example.com" "example.net" )`

<a name="idp11096080"></a>
## Description

When Momentum is configured as an inbound mail relay or gateway, it is necessary to specify for which domains you are willing to accept mail. Accepting mail from anyone for any destination would make you an open relay and vulnerable to abuse.

### Note

Any addresses set in the `addresses` option of the [Section 14.34, “fbl – Feedback Loop Module”](modules.fbl "14.34. fbl – Feedback Loop Module") must be set in the `relay_domains` option.

With the `Relay_Domains` option, you may specify a list of domains and left-globbed domains for which the instance will relay mail (accept for delivery). Left-globbed domains are of the form `*fixed.ending`. `*.example.com` would **not** match example.com (as the dot is required), but would match test.example.com, mail.example.com, foo.example.com, etc. `*example.com` would match example.com. However, it would also match badexample.com, which is usually undesirable, so in most cases the asterisk should be followed by a period.

If a domain is specified as a relay domain any incoming message that has its `envelope to` set to that domain, will be relayed. This setting works independently of the `relay_hosts` setting.

To accept mail for the domain example.com and all subdomains under it, one would specify:

`Relay_Domains = ( example.com *.example.com )`<a name="idp11106560"></a>
## Scope

`Relay_Domains` is valid in the global, pathway_group and pathway scopes.

<a name="idp11109056"></a>
## See Also

[relay_hosts](conf.ref.relay_hosts "relay_hosts"), [only_use_best_mx_for_relay_domains](conf.ref.only_use_best_mx_for_relay_domains.php "only_use_best_mx_for_relay_domains")

| [Prev](conf.ref.rcptto_timeout)  | [Up](conf.ref.files.php) |  [Next](conf.ref.relay_hosts.php) |
| rcptto_timeout  | [Table of Contents](index) |  relay_hosts |
