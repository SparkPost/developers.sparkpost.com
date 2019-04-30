|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rcptto_timeout)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.relay_domains) |

<a name="conf.ref.relay_for_sending_domains"></a>
## Name

relay_for_sending_domains — domains that may use the MTA as a relay.

## Synopsis

relay_for_sending_domains = *`(“*.example.com”)`*

<a name="idp25921520"></a>
## Description

Provides a mechanism for finer control over SMTP relaying. If specified with no parameters, it allows unrestricted use of the instance as an SMTP relay (a.k.a., open relay) from the IP ACL that was matched.

If parameters of the form `"domainname" "other_domainname"` are specified, relaying will be allowed from that IP ACL if the sender domain matches one of the specified domain names. You can also use wildcards to specify a series of domain names, for example, `"*.foo.com"`. The `relay_hosts` options will override any restrictions enacted by this option for the specified IP addresses.

<a name="idp25925664"></a>
## Scope

relay_for_sending_domains is valid in the esmtp_listener, listen, pathway, pathway_group, and peer scopes.

<a name="idp25927568"></a>
## See Also

[relay_hosts](conf.ref.relay_hosts "relay_hosts")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.rcptto_timeout)  | [Up](config.options.ref) |  [Next](conf.ref.relay_domains) |
| rcptto_timeout  | [Table of Contents](index) |  relay_domains |

