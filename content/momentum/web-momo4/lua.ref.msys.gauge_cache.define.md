|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.gauge_cache.dec)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.gauge_cache.get) |

<a name="lua.ref.msys.gauge_cache.define"></a>
## Name

msys.gauge_cache.define — Create a cache that can be used to maintain a set of counters

<a name="idp18121088"></a>
## Synopsis

`msys.gauge_cache.define(name, maxelems, ttl, replicated);`

```
name: string
maxelems: number
ttl: number
replicated: boolean, optional
```
<a name="idp18124160"></a>
## Description

Creates a cache that can be used to maintain a set of counters based on a string key. The `ttl` parameter is the number of seconds that a given entry will be maintained after it was last modified, and `maxelems` is the maximum number of named entries that will be stored in the cache. If a new entry is added, the oldest entry in the cache will be dropped to make room for the new entry. If replicated is set to `true`, (the default is `false`), then increments and decrements will be broadcast across the cluster.

Enable this function with the statement `require(' msys.gauge_cache ');`.

<a name="idp18129152"></a>
## See Also

[msys.gauge_cache.inc](lua.ref.msys.gauge_cache.inc "msys.gauge_cache.inc"), [msys.gauge_cache.dec](lua.ref.msys.gauge_cache.dec "msys.gauge_cache.dec"), [Section 28.1.9, “Shared Gauge Caches”](cluster.config.replication#cluster.replication.gauge_cache "28.1.9. Shared Gauge Caches")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.gauge_cache.dec)  | [Up](lua.function.details) |  [Next](lua.ref.msys.gauge_cache.get) |
| msys.gauge_cache.dec  | [Table of Contents](index) |  msys.gauge_cache.get |

