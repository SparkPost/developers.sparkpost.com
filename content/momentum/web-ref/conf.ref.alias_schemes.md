| [Prev](conf.ref.address_metrics_lifetime)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.allow_ip_literal.php) |

<a name="conf.ref.alias_schemes"></a>
## Name

alias_schemes — Enable named alias expansion schemes

## Synopsis

`Alias_Schemes = ("ldapaliases")`

<a name="idp7442288"></a>
## Description

When the alias module is loaded, the `Alias_Schemes` option can be used to configure alias expansion on a per-domain basis, with optional global behavior.

When alias expansion is run, Momentum looks to see if `Alias_Schemes` is configured for the domain of the recipient, and applies the expansions from listed schemes, in the order that they are listed. Alias expansion is recursive; each recipient can expand to 0 or more recipients, with 0 expansions halting the process for a given recipient. Expansion loops are detected and prevented by the alias module.

An empty `Alias_Schemes` list means that no aliasing should be performed; this can be used in situations where you want to apply aliases globally, except for a handful of domains.

If a domain does not specify `Alias_Schemes`, then the value of `Alias_Schemes` is used instead.

The default global value of `Alias_Schemes` is an empty list, meaning that no alias expansion will be performed.

In the following example, mail for `example.com` recipients will expand aliases from an LDAP directory, mail for `localhost.localdomain` recipients will expand aliases from a local sqlite database and no alias expansion will be performed for any other domains.

<a name="example.alias_schemes.3"></a>

**Example 9.3. Alias_Schemes example**

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

<a name="idp7455008"></a>
## Scope

alias_schemes is valid in the domain, global, pathway and pathway_group scopes.

<a name="idp7456688"></a>
## See Also

[Section 14.4, “alias – Alias Expansion Module”](modules.alias "14.4. alias – Alias Expansion Module")

| [Prev](conf.ref.address_metrics_lifetime)  | [Up](conf.ref.files.php) |  [Next](conf.ref.allow_ip_literal.php) |
| address_metrics_lifetime  | [Table of Contents](index) |  allow_ip_literal |
