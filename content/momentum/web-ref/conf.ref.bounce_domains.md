| [Prev](conf.ref.bounce_cache_ttl)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.bounce_pattern.php) |

<a name="conf.ref.bounce_domains"></a>
## Name

bounce_domains — configure the list of domains eligible for bounce processing by Momentum.

## Synopsis

`Bounce_Domains = ("*.example.com" "example.net")`

<a name="idp8418064"></a>
## Description

When configured as an inbound mail relay, it is necessary to set this option to have mail delivery notifications be reported as bounces. Momentum will treat the listed domains as relay domains in that it will accept mail destined for them and offer them up to internal bounce classification systems and/or loggers. This option can be further qualified with the `Bounce_Pattern` configuration setting and the ultimate behavior of bounce handling is dictated by the the `Bounce_Behavior` configuration setting.

With the `Bounce_Domains` option, you may specify a list of domains and left-globbed domains for which the instance will process as possible bounces. Left-globbed domains are of the form `*fixed.ending`. `*.omniti.com` would **not** match omniti.com (as the dot is required), but would match test.omniti.com, mail.omniti.com, foo.omniti.com, etc. `*omniti.com` would match omniti.com. However, it would also match badomniti.com, which is usually undesirable, so in most cases the asterisk should be followed by a period.

To accept mail for the domain example.com and all subdomains under it, one would specify

`Bounce_Domains = ( "example.com" "*.example.com" )`<a name="idp8425904"></a>
## Scope

bounce_domains is valid in the global, pathway_group and pathway scopes.

<a name="idp8427856"></a>
## See Also

[bounce_pattern](conf.ref.bounce_pattern "bounce_pattern") [bounce_behavior](conf.ref.bounce_behavior.php "bounce_behavior") [bounce_suppress_list](conf.ref.bounce_suppress_list.php "bounce_suppress_list") [Section 14.13, “bounce_logger – Momentum-Style Bounce Logging”](modules.bounce_logger.php "14.13. bounce_logger – Momentum-Style Bounce Logging")

| [Prev](conf.ref.bounce_cache_ttl)  | [Up](conf.ref.files.php) |  [Next](conf.ref.bounce_pattern.php) |
| bounce_cache_ttl  | [Table of Contents](index) |  bounce_pattern |
