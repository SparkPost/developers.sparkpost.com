| [Prev](conf.ref.only_use_best_mx_for_relay_domains)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.outbound_throttle_connections.php) |

<a name="conf.ref.opendkim_sign"></a>
## Name

opendkim_sign — whether or not to enable OpenDKIM signing

## Synopsis

`opendkim_sign = "true"`

<a name="idp10504160"></a>
## Description

Use this option to enable or disable OpenDKIM signing. For more information about OpenDKIM see [OpenDKIM](http://www.opendkim.org/). To use OpenDKIM you must also configure [opendkim](modules.opendkim "14.49. opendkim – OpenDKIM module").

**Configuration Change. ** This is option is available as of version 3.6.

The default value for this option is `true`.

### Note

You cannot sign using both OpenDKIM and DKIM; you must use one or the other.

<a name="idp10510192"></a>
## Scope

`opendkim_sign` is valid in the binding, binding_group, domain and global scopes.

<a name="idp10511792"></a>
## See Also

[Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim "14.27. dkim – DomainKeys Identified Mail Signatures") and [Section 14.49, “opendkim – OpenDKIM module”](modules.opendkim.php "14.49. opendkim – OpenDKIM module")

| [Prev](conf.ref.only_use_best_mx_for_relay_domains)  | [Up](conf.ref.files.php) |  [Next](conf.ref.outbound_throttle_connections.php) |
| only_use_best_mx_for_relay_domains  | [Table of Contents](index) |  outbound_throttle_connections |
