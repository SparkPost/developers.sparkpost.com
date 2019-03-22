| [Prev](conf.ref.masterdb_file)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.match_cache_size.php) |

<a name="conf.ref.match_cache_life"></a>
## Name

match_cache_life — set the maximum number of seconds that the match cache will be valid

## Synopsis

`match_cache_life = 0`

<a name="idp10142432"></a>
## Description

`match_cache_life` determines the maximum validity for cache entries in the match cache. With a default match_cache_life of `0`, cache entries will be kept for as long as they are still usable and the cache size hasn't been exceeded. Normally it is not necessary to set this option to a value other than `0`.

<a name="idp10145552"></a>
## Scope

`match_cache_life` is valid in the global scope.

<a name="idp10147584"></a>
## See Also

[match_cache_size](conf.ref.match_cache_size "match_cache_size"), [cache stats](console_commands.cache_stats.php "cache stats") and [domain](conf.ref.domain.php "domain")

| [Prev](conf.ref.masterdb_file)  | [Up](conf.ref.files.php) |  [Next](conf.ref.match_cache_size.php) |
| masterdb_file  | [Table of Contents](index) |  match_cache_size |
