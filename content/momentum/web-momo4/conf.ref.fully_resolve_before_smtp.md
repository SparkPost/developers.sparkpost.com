|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.force_fsync)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.gateway) |

<a name="conf.ref.fully_resolve_before_smtp"></a>
## Name

fully_resolve_before_smtp — resolve all MX and A records before attempting delivery

## Synopsis

`fully_resolve_before_smtp = true`

`fully_resolve_before_smtp = false`

<a name="idp24712832"></a>
## Description

Momentum uses an asynchronous DNS architecture that allows delivery to commence as soon as there is a valid A record for any of a given domain's MX records. This can occasionally lead to an initial delivery attempt to an MX that is not the lowest numbered.

If you need to ensure that the highest-priority MX is selected, you can enable this option; it is configurable globally as well as at the `Domain` and `Binding` level, so that you can choose where it is applied; setting this option to `true` will marginally slow down the DNS resolution process, and on aggregate, may affect performance, depending on the quantity of mail and the number of domains to which it is being delivered.

The default value is `true`.

When a domain is listed in `relay_domains`, we wait for all MXs to be resolved when opening new connections. `fully_resolve_before_smtp` controls this behavior for domains not listed in `relay_domains`.

<a name="idp24719936"></a>
## Scope

fully_resolve_before_smtp is valid in the binding, binding_group, domain, and global scopes.

<a name="idp24721824"></a>
## See Also

[relay_domains](conf.ref.relay_domains "relay_domains")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.force_fsync)  | [Up](config.options.ref) |  [Next](conf.ref.gateway) |
| force_fsync  | [Table of Contents](index) |  gateway |

