|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.bounce_cache_size)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.bounce_domains.php) |

<a name="conf.ref.bounce_cache_ttl"></a>
## Name

bounce_cache_ttl — set the maximum TTL for the bounce classification cache

## Synopsis

`bounce_cache_size = 300`

<a name="idp8402080"></a>
## Description

**Configuration Change. ** This feature is available as of version 3.6.9.

`bounce_cache_size` and `bounce_cache_ttl` together set the maximum size and TTL of the `bounce_classify` and `bounce_classify2` caches. These caches are used to cache bounce classifications. It should not normally be necessary to modify these values.

The default value for this option is `60`.

<a name="idp8407632"></a>
## Scope

bounce_cache_ttl is valid in the global scope.

<a name="idp8409280"></a>
## See Also

[bounce_cache_size](conf.ref.bounce_cache_size "bounce_cache_size")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.bounce_cache_size)  | [Up](conf.ref.files.php) |  [Next](conf.ref.bounce_domains.php) |
| bounce_cache_size  | [Table of Contents](index) |  bounce_domains |
