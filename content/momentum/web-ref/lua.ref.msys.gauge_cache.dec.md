| [Prev](lua.ref.msys.expurgate.scan)  | 15.2. Lua Functions |  [Next](lua.ref.msys.gauge_cache.define.php) |

<a name="lua.ref.msys.gauge_cache.dec"></a>
## Name

msys.gauge_cache.dec — Decrement the value associated with keystring in the named cache

<a name="idp26669760"></a>
## Synopsis

`msys.gauge_cache.dec(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp26672432"></a>
## Description

Decrements the value associated with keystring in the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp26675040"></a>
## See Also

[msys.gauge_cache.define](lua.ref.msys.gauge_cache.define "msys.gauge_cache.define") [Section 7.7.1.9, “Shared Gauge Caches”](cluster.config.replication.php#cluster.replication.gauge_cache "7.7.1.9. Shared Gauge Caches")

| [Prev](lua.ref.msys.expurgate.scan)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.gauge_cache.define.php) |
| msys.expurgate.scan  | [Table of Contents](index) |  msys.gauge_cache.define |
