|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.gauge_cache.get)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.gauge_cache.remove_item) |

<a name="lua.ref.msys.gauge_cache.inc"></a>
## Name

msys.gauge_cache.inc — Increment the value associated with `keystring` in the named cache

<a name="idp18149792"></a>
## Synopsis

`msys.gauge_cache.inc(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp18152800"></a>
## Description

Increments the value associated with `keystring` in the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp18156048"></a>
## See Also

[msys.gauge_cache.define](lua.ref.msys.gauge_cache.define "msys.gauge_cache.define"), [msys.gauge_cache.dec](lua.ref.msys.gauge_cache.dec "msys.gauge_cache.dec"), [Section 28.1.9, “Shared Gauge Caches”](cluster.config.replication#cluster.replication.gauge_cache "28.1.9. Shared Gauge Caches")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.gauge_cache.get)  | [Up](lua.function.details) |  [Next](lua.ref.msys.gauge_cache.remove_item) |
| msys.gauge_cache.get  | [Table of Contents](index) |  msys.gauge_cache.remove_item |

