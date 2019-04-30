|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.address_metrics_lifetime)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.allow_ip_literal) |

<a name="conf.ref.alias_schemes"></a>
## Name

alias_schemes — enable named alias expansion schemes

## Synopsis

`Alias_Schemes = ("ldapaliases")`

<a name="idp23470544"></a>
## Description

When the alias module is loaded, the `Alias_Schemes` option can be used to configure alias expansion on a per-domain basis, with optional global behavior.

When alias expansion is run, Momentum looks to see if `Alias_Schemes` is configured for the domain of the recipient, and applies the expansions from listed schemes, in the order that they are listed. Alias expansion is recursive; each recipient can expand to 0 or more recipients, with 0 expansions halting the process for a given recipient. Expansion loops are detected and prevented by the alias module.

An empty `Alias_Schemes` list means that no aliasing should be performed; this can be used in situations where you want to apply aliases globally, except for a handful of domains.

If a domain does not specify `Alias_Schemes`, then the value of `Alias_Schemes` is used instead.

The default global value of `Alias_Schemes` is an empty list, meaning that no alias expansion will be performed.

In the following example, mail for `example.com` recipients will expand aliases from an LDAP directory, mail for `localhost.localdomain` recipients will expand aliases from a local sqlite database and no alias expansion will be performed for any other domains.

<a name="example.alias_schemes.3"></a>

**Example 72.1. Alias_Schemes example**

```
Datasource "sqlitedb" {
  uri = ("sqlite:/path/to/sqlite.db")
}
Datasource "ldap" {
  uri = ("ldap://ldaphost")
}

alias "alias1" {
  Scheme "local" {
    cache = "sqlitedb"
    query = "SELECT expansion FROM foo WHERE address = :address"
    column = "expansion"
    map [
     address = "%{rcptto}"
     local = "%{localpart}"
     domain = "%{domain}"
    ]
  }
  Scheme "ldapaliases" {
    cache = "ldap"
    query = "ldap:///cn=$local%2Cou=mailAliases%2Cdc= ’
    example%2Cdc=com?mgrpRFC822MailMember?sub?(objectClass=mailGroup)?"
    map [
      local = "%{localpart}"
      domain = "%{domain}"
    ]
  }
}

Domain localhost.localdomain {
  Alias_Schemes = ( "local" )
}

Domain example.com {
  Alias_Schemes = ( "ldapaliases" )
}
```

<a name="idp23482208"></a>
## Scope

alias_schemes is valid in the domain, global, pathway, and pathway_group scopes.

<a name="idp23484080"></a>
## See Also

[Section 71.5, “alias – Alias Expansion”](modules.alias "71.5. alias – Alias Expansion")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.address_metrics_lifetime)  | [Up](config.options.ref) |  [Next](conf.ref.allow_ip_literal) |
| address_metrics_lifetime  | [Table of Contents](index) |  allow_ip_literal |

