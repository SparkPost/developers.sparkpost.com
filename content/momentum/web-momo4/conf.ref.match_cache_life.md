|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.masterdb_file)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.match_cache_size) |

<a name="conf.ref.match_cache_life"></a>
## Name

match_cache_life — set the maximum number of seconds that the match cache will be valid

## Synopsis

`match_cache_life = 0`

<a name="idp25251872"></a>
## Description

`match_cache_life` determines the maximum validity for cache entries in the match cache. With a default match_cache_life of `0`, cache entries will be kept for as long as they are still usable and the cache size hasn't been exceeded. Normally it is not necessary to set this option to a value other than `0`.

<a name="idp25255280"></a>
## Scope

`match_cache_life` is valid in the global scope.

<a name="idp25257536"></a>
## See Also

[match_cache_size](conf.ref.match_cache_size "match_cache_size"), [domain](conf.ref.domain "domain")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.masterdb_file)  | [Up](config.options.ref) |  [Next](conf.ref.match_cache_size) |
| masterdb_file  | [Table of Contents](index) |  match_cache_size |

