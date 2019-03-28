|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.disk_queue_drain_rate)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.dns_cache_purge_interval.php) |

<a name="conf.ref.dkim"></a>
## Name

dkim — enable or disable dkim signing

## Synopsis

`dkim = "enabled"`
`dkim = "disabled"`

<a name="idp8988256"></a>
## Description

### Note

This directive is only valid if the Momentum dkim_sign module is loaded. See [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim "14.27. dkim – DomainKeys Identified Mail Signatures")

This directive instructs Momentum to enable (or disable) signing messages with a DKIM signature globally, on a specific domain, binding or domain within a binding. When the dkim_sign module is loaded signing occurs for all messages by default. This is the same as setting `dkim = "enabled"` at the global scope.

Note that you would not normally need to change this, since even when signing is enabled globally you also need to have a valid key and selector configured for a domain. For this reason signing is usually "enabled" by defining selectors and keys for the signing domains in the dkim_sign module.

<a name="idp8993088"></a>
## Scope

dkim is valid in the binding, domain and global scope.

dkim is also valid in the binding_group scope.

<a name="idp8995536"></a>
## See Also

[domainkeys](conf.ref.domainkeys "domainkeys") and [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim.php "14.27. dkim – DomainKeys Identified Mail Signatures")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.disk_queue_drain_rate)  | [Up](conf.ref.files.php) |  [Next](conf.ref.dns_cache_purge_interval.php) |
| disk_queue_drain_rate  | [Table of Contents](index) |  dns_cache_purge_interval |
