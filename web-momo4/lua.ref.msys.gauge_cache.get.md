| [Prev](lua.ref.msys.gauge_cache.define)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.gauge_cache.inc) |

<a name="lua.ref.msys.gauge_cache.get"></a>
## Name

msys.gauge_cache.get — Look up the value associated with keystring in the named cache

<a name="idp18135920"></a>
## Synopsis

`msys.gauge_cache.get(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp18138880"></a>
## Description

Looks up the value associated with `keystring` in the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp18142128"></a>
## See Also

[msys.gauge_cache.define](lua.ref.msys.gauge_cache.define "msys.gauge_cache.define"), [msys.gauge_cache.inc](lua.ref.msys.gauge_cache.inc "msys.gauge_cache.inc"), [msys.gauge_cache.dec](lua.ref.msys.gauge_cache.dec "msys.gauge_cache.dec"), [Section 28.1.9, “Shared Gauge Caches”](cluster.config.replication#cluster.replication.gauge_cache "28.1.9. Shared Gauge Caches")

| [Prev](lua.ref.msys.gauge_cache.define)  | [Up](lua.function.details) |  [Next](lua.ref.msys.gauge_cache.inc) |
| msys.gauge_cache.define  | [Table of Contents](index) |  msys.gauge_cache.inc |

