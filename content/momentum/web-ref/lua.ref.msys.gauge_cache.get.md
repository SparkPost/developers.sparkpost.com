| [Prev](lua.ref.msys.gauge_cache.define)  | 15.2. Lua Functions |  [Next](lua.ref.msys.gauge_cache.inc.php) |

<a name="lua.ref.msys.gauge_cache.get"></a>
## Name

msys.gauge_cache.get — Look up the value associated with keystring in the named cache

<a name="idp26694432"></a>
## Synopsis

`msys.gauge_cache.get(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp26697104"></a>
## Description

Looks up the value associated with `keystring` in the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp26700128"></a>
## See Also

[msys.gauge_cache.define](lua.ref.msys.gauge_cache.define "msys.gauge_cache.define"), [msys.gauge_cache.inc](lua.ref.msys.gauge_cache.inc.php "msys.gauge_cache.inc"), [msys.gauge_cache.dec](lua.ref.msys.gauge_cache.dec.php "msys.gauge_cache.dec"), [Section 7.7.1.9, “Shared Gauge Caches”](cluster.config.replication.php#cluster.replication.gauge_cache "7.7.1.9. Shared Gauge Caches")

| [Prev](lua.ref.msys.gauge_cache.define)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.gauge_cache.inc.php) |
| msys.gauge_cache.define  | [Table of Contents](index) |  msys.gauge_cache.inc |
