| [Prev](conf.ref.pathway_group)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.pcre_cache_ttl.php) |

<a name="conf.ref.pcre_cache_size"></a>
## Name

pcre_cache_size — set the maximum size of the ec_pcre_compile cache

## Synopsis

`pcre_cache_size = 0`

<a name="idp10982032"></a>
## Description

Pcre_Cache_Size and Pcre_Cache_Ttl together set the maximum size and TTL of the ec_pcre_compile cache. This cache is used by sieve, sievelib, the bounce_classifier code and the vctx_filter module to cache compiled regular expressions. It should not normally be necessary to modify these values.

The default value for this option is `100`.

<a name="idp10984816"></a>
## Scope

pcre_cache_size is valid in the global scope.

<a name="idp10986464"></a>
## See Also

[pcre_cache_ttl](conf.ref.pcre_cache_ttl "pcre_cache_ttl")

| [Prev](conf.ref.pathway_group)  | [Up](conf.ref.files.php) |  [Next](conf.ref.pcre_cache_ttl.php) |
| pathway_group  | [Table of Contents](index) |  pcre_cache_ttl |
