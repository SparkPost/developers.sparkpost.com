| [Prev](conf.ref.pcre_cache_size)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.permastore_interval.php) |

<a name="conf.ref.pcre_cache_ttl"></a>
## Name

pcre_cache_ttl — set the maximum TTL for the ec_pcre_compile cache

## Synopsis

`pcre_cache_size = 300`

<a name="idp10995168"></a>
## Description

Pcre_Cache_Size and Pcre_Cache_Ttl together set the maximum size and TTL of the ec_pcre_compile cache. This cache is used by sieve, sievelib, the bounce_classifier code and the vctx_filter module to cache compiled regular expressions. It should not normally be necessary to modify these values.

The default value for this option is `300`.

<a name="idp10997952"></a>
## Scope

pcre_cache_ttl is valid in the global scope.

<a name="idp10999600"></a>
## See Also

[pcre_cache_size](conf.ref.pcre_cache_size "pcre_cache_size")

| [Prev](conf.ref.pcre_cache_size)  | [Up](conf.ref.files.php) |  [Next](conf.ref.permastore_interval.php) |
| pcre_cache_size  | [Table of Contents](index) |  permastore_interval |
