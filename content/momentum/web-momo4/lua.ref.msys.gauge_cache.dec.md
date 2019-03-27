| [Prev](lua.ref.msys.expurgate.scan)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.gauge_cache.define) |

<a name="lua.ref.msys.gauge_cache.dec"></a>
## Name

msys.gauge_cache.dec — Decrement the value associated with keystring in the named cache

<a name="idp18109104"></a>
## Synopsis

`msys.gauge_cache.dec(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp18112064"></a>
## Description

Decrements the value associated with keystring in the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp18114896"></a>
## See Also

[msys.gauge_cache.define](lua.ref.msys.gauge_cache.define "msys.gauge_cache.define"), [Section 28.1.9, “Shared Gauge Caches”](cluster.config.replication#cluster.replication.gauge_cache "28.1.9. Shared Gauge Caches")

| [Prev](lua.ref.msys.expurgate.scan)  | [Up](lua.function.details) |  [Next](lua.ref.msys.gauge_cache.define) |
| msys.expurgate.scan  | [Table of Contents](index) |  msys.gauge_cache.define |

