|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.domain_for_unqualified_sender_address)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.domainkeys) |

<a name="conf.ref.domain"></a>
## Name

domain — configure domain specific options

<a name="idp24451232"></a>
## Description

```
domain "example.com" {
  # domain-specific settings
}

binding example {
  domain "example.com" {
    # domain-specific settings for the "example" binding
  }
}
```

Use the `domain` stanza to define per-domain configuration options. You can nest `domain` stanzas beneath `binding` stanzas creating a binding:domain configuration. For additional details, see [Section 15.3, “Configuration Scopes and Fallback”](ecelerity.conf.fallback "15.3. Configuration Scopes and Fallback").

In addition to defining `domain` stanzas using domain names, you can also use IP addresses:

```
domain "192.0.43.10" {
}
```

When declaring IPv6 domains, use the following syntax:

```
domain "[IPv6:fd82:7796:815b:be0:222:19ff:fe52:3629]" {
  # domain specific settings
}
```

<a name="conf.ref.domain.regex"></a>**Regex Domains. ** In addition to specifying a domain by domain name, you may use Perl-compatible regular expression (PCRE) syntax to define a "Regex Domain". Using regex domains, you can define common rules for domains that have similar configurations, without needing to specify the rules for every possible matching domain.

```
domain "example.com" {
  max_outbound_connections = 20
}

domain "/(?:^|[.])example[.](?:com|co[.]uk)$/" {
  max_outbound_connections = 15
  max_deliveries_per_connection = 5
}
```

In the example above, mail for `example.com` will use no more than 20 connections, and will send no more than 5 messages on a given connection before tearing it down. Mail for `example.co.uk` will have `max_deliveries_per_connection` set to 5 and `max_outbound_connections` set to 15, as would mail for any sub-domain of `example.com` or `example.co.uk`.

Option resolution will always match a value defined in a normal `domain` stanza before looking for a matching regex domain stanza in the same container, which is why `example.com` would have `max_outbound_connections` set to 20, despite it being set to 15 in the regex domain stanza that matches.

If multiple regex domain stanzas are declared in the same container, normal domain stanzas are checked first before finding a match from the regex domain stanzas in the order that the regex domain stanzas were declared in the configuration file.

### Note

You almost always want to anchor the start and end of your regular expressions when using them for regex domains, otherwise they will perform substring matching which might have unexpected side effects, such as matching subdomains of "bad guy" domains and routing unwanted mail via trusted interfaces.

For domain naming when using Momentum Mobile, see [Multi-protocol Domain Naming](https://support.messagesystems.com/docs/web-mobility/mobility.mm7.multiprotocol).

<a name="idp24470704"></a>
## Scope and Valid Options

`domain` is valid in the binding, binding_group, and global scopes.

For a complete list of options valid in the domain scope, refer to [Chapter 66, *Configuration Options Summary*](config.options.summary "Chapter 66. Configuration Options Summary") .

<a name="idp24474672"></a>
## See Also

[binding](conf.ref.binding "binding"), [host](conf.ref.host "host"), [match_cache_life](conf.ref.match_cache_life "match_cache_life"), [match_cache_size](conf.ref.match_cache_size "match_cache_size")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.domain_for_unqualified_sender_address)  | [Up](config.options.ref) |  [Next](conf.ref.domainkeys) |
| domain_for_unqualified_sender_address  | [Table of Contents](index) |  domainkeys |

