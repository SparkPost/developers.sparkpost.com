| [Prev](conf.ref.pcre_cache_size)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.permastore_interval) |

<a name="conf.ref.pcre_cache_ttl"></a>
## Name

pcre_cache_ttl — set the maximum TTL for the ec_pcre_compile cache

## Synopsis

`pcre_cache_size = 300`

<a name="idp25848688"></a>
## Description

pcre_cache_size and pcre_cache_ttl together set the maximum size and TTL of the ec_pcre_compile cache. This cache is used by sieve, sievelib, the bounce_classifier code and the vctx_filter module to cache compiled regular expressions. It should not normally be necessary to modify these values.

The default value is `300`.

<a name="idp25851712"></a>
## Scope

pcre_cache_ttl is valid in the global scope.

<a name="idp25853552"></a>
## See Also

[pcre_cache_size](conf.ref.pcre_cache_size "pcre_cache_size")

| [Prev](conf.ref.pcre_cache_size)  | [Up](config.options.ref) |  [Next](conf.ref.permastore_interval) |
| pcre_cache_size  | [Table of Contents](index) |  permastore_interval |

