| [Prev](lua.ref.msys.gauge_cache.get)  | 15.2. Lua Functions |  [Next](lua.ref.msys.gauge_cache.remove_item.php) |

<a name="lua.ref.msys.gauge_cache.inc"></a>
## Name

msys.gauge_cache.inc — Increment the value associated with `keystring` in the named cache

<a name="idp26707312"></a>
## Synopsis

`msys.gauge_cache.inc(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp26710032"></a>
## Description

Increments the value associated with `keystring` in the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp26713056"></a>
## See Also

[msys.gauge_cache.define](lua.ref.msys.gauge_cache.define "msys.gauge_cache.define"), [msys.gauge_cache.dec](lua.ref.msys.gauge_cache.dec.php "msys.gauge_cache.dec"), [Section 7.7.1.9, “Shared Gauge Caches”](cluster.config.replication.php#cluster.replication.gauge_cache "7.7.1.9. Shared Gauge Caches")

| [Prev](lua.ref.msys.gauge_cache.get)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.gauge_cache.remove_item.php) |
| msys.gauge_cache.get  | [Table of Contents](index) |  msys.gauge_cache.remove_item |
