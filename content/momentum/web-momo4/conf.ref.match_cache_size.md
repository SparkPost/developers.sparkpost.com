|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.match_cache_life)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.max_deliveries_per_connection) |

<a name="conf.ref.match_cache_size"></a>
## Name

match_cache_size — the size of the cache that holds the results of looking up matching scopes

## Synopsis

`match_cache_size = 16384`

<a name="idp25267984"></a>
## Description

This option determines the maximum number of elements in a cache that holds the results of looking up matching scopes. It applies to regex domains, Peer scopes in listeners, and any user-defined scopes that use matching.

For example, if your configuration uses regex domains, then, for best performance, the cache size should be larger than the number of unique queries. This should be at least the number of unique destination domains to which you send.

It is not necessary to restart the MTA if changes are made to this option using **config set** .

The default value is `16384`.

### Warning

The Match_Cache_Size **MUST NOT**     be set to `0`; doing so will result in undefined behavior.

<a name="idp25274736"></a>
## Scope

match_cache_size is valid in the global scope.

<a name="idp25276576"></a>
## See Also

[match_cache_life](conf.ref.match_cache_life "match_cache_life") and [domain](conf.ref.domain "domain")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.match_cache_life)  | [Up](config.options.ref) |  [Next](conf.ref.max_deliveries_per_connection) |
| match_cache_life  | [Table of Contents](index) |  max_deliveries_per_connection |

