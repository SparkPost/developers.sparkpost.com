|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.fully_resolve_before_smtp)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.generate_bounces.php) |

<a name="conf.ref.gateway"></a>
## Name

gateway — configure a static SMTP route for mail

## Synopsis

`Gateway = "10.0.0.1"`

`Gateway = "[fe80::a00]:1"`

`Gateway = "my.local.smart.host"`

<a name="idp9648976"></a>
## Description

This directive allows for what other MTAs call "smarthosting." If this option is specified at the global configuration level, all outbound connections will be made to the host name specified.

### Note

As of version 3.4, this feature supports IPv6.

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `Gateway`, `Routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.

If it is specified within a `Domain` stanza, Momentum will ignore the MXs for the domain and send mail to the gateway host name instead. Other configurations in the domain stanza for that domain will have no effects if a gateway is specified, as mails to that domain are actually sent to the gateway.

Starting with Momentum 2.2, this option is supplanted in many use case by the Routes option. See [routes](conf.ref.routes "routes") for more information.

### Note

When delivering mail via ecstream, do not use the `routes`. Use the `gateway` instead.

<a name="idp9660672"></a>
## Scope

gateway is valid in the binding, binding_group, domain and global scopes.

<a name="idp9662352"></a>
## See Also

[routes](conf.ref.routes "routes")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.fully_resolve_before_smtp)  | [Up](conf.ref.files.php) |  [Next](conf.ref.generate_bounces.php) |
| fully_resolve_before_smtp  | [Table of Contents](index) |  generate_bounces |
