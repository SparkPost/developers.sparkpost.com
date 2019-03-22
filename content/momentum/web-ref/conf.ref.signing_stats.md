| [Prev](conf.ref.server_reserve_outbound_connections)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.siv_throttle_cache_size.php) |

<a name="conf.ref.signing_stats"></a>
## Name

signing_stats — control how signing statistics are recorded

## Synopsis

`Signing_Stats = "all"`

`Signing_Stats = "global"`

`Signing_Stats = "off"`

<a name="idp11737312"></a>
## Description

This option is used to control whether signing statistics are recorded per binding, as a global summary only, or disabled entirely. You might consider setting this option to `global` or `off` if you have a very large number of bindings and don't need to track message signing statistics such as DKIM on a per-binding basis.

**Configuration Change. ** This feature is available starting from Momentum 3.0.17.

The default value for this option is `all`.

<a name="idp11744064"></a>
## Scope

Signing_Stats is valid in the global scope.

<a name="idp11745696"></a>
## See Also

[Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim "14.27. dkim – DomainKeys Identified Mail Signatures"), [Section 14.29, “domainkeys – Yahoo! DomainKeys”](modules.domainkeys.php "14.29. domainkeys – Yahoo! DomainKeys") , [signing_stats](console_commands.signing_stats.php "signing_stats"), [Section 14.49, “opendkim – OpenDKIM module”](modules.opendkim.php "14.49. opendkim – OpenDKIM module") and [signing_stats reset](console_commands.signing_stats_reset.php "signing_stats reset")

| [Prev](conf.ref.server_reserve_outbound_connections)  | [Up](conf.ref.files.php) |  [Next](conf.ref.siv_throttle_cache_size.php) |
| server_reserve_outbound_connections  | [Table of Contents](index) |  siv_throttle_cache_size |
