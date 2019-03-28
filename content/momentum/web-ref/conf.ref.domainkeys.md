|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.domain_for_unqualified_sender_address)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.drop_body_after_trans_fail.php) |

<a name="conf.ref.domainkeys"></a>
## Name

domainkeys — enable or disable domainkeys signing

## Synopsis

`domainkeys = "enabled"`
`domainkeys = "disabled"`

<a name="idp9458256"></a>
## Description

### Note

This directive is only valid if the Momentum dk_sign module is loaded. See [Section 14.29, “domainkeys – Yahoo! DomainKeys”](modules.domainkeys "14.29. domainkeys – Yahoo! DomainKeys")

This directive instructs Momentum to enable (or disable) signing messages with a DomainKeys signature globally, on a specific domain, binding or domain within a binding. When the dk_sign module is loaded, signing occurs for all messages by default. This is the same as setting domainkeys = enabled at the global scope.

<a name="idp9461936"></a>
## Scope

domainkeys is valid in the binding, domain and global scope.

domainkeys is also valid in the binding group scope.

<a name="idp9464400"></a>
## See Also

[dkim](conf.ref.dkim "dkim")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.domain_for_unqualified_sender_address)  | [Up](conf.ref.files.php) |  [Next](conf.ref.drop_body_after_trans_fail.php) |
| domain_for_unqualified_sender_address  | [Table of Contents](index) |  drop_body_after_trans_fail |
