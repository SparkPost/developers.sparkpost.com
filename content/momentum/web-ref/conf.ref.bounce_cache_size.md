|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.bounce_behavior)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.bounce_cache_ttl.php) |

<a name="conf.ref.bounce_cache_size"></a>
## Name

bounce_cache_size — set the maximum size of the bounce classification cache

## Synopsis

`bounce_cache_size = 0`

<a name="idp8385952"></a>
## Description

**Configuration Change. ** This feature is available as of version 3.6.9.

`bounce_cache_size` and `bounce_cache_ttl` together set the maximum size and TTL of the `bounce_classify` and `bounce_classify2` caches. These caches are used to cache bounce classifications. It should not normally be necessary to modify these values.

The default value for this option is `16384`.

<a name="idp8391584"></a>
## Scope

bounce_cache_size is valid in the global scope.

<a name="idp8393232"></a>
## See Also

[bounce_cache_ttl](conf.ref.bounce_cache_ttl "bounce_cache_ttl")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.bounce_behavior)  | [Up](conf.ref.files.php) |  [Next](conf.ref.bounce_cache_ttl.php) |
| bounce_behavior  | [Table of Contents](index) |  bounce_cache_ttl |
