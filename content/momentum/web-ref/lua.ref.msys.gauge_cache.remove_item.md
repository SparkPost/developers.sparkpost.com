|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.gauge_cache.inc)  | 15.2. Lua Functions |  [Next](lua.ref.msys.gcm.gcm_classify_error.php) |

<a name="lua.ref.msys.gauge_cache.remove_item"></a>
## Name

msys.gauge_cache.remove_item — Remove the value associated with `keystring` from the named cache

<a name="idp26719680"></a>
## Synopsis

`msys.gauge_cache.remove_item(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp26722416"></a>
## Description

Removes the value associated with `keystring` from the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp26725440"></a>
## See Also

[msys.gauge_cache.inc](lua.ref.msys.gauge_cache.inc "msys.gauge_cache.inc"), [msys.gauge_cache.dec](lua.ref.msys.gauge_cache.dec.php "msys.gauge_cache.dec"), [Section 7.7.1.9, “Shared Gauge Caches”](cluster.config.replication.php#cluster.replication.gauge_cache "7.7.1.9. Shared Gauge Caches")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.gauge_cache.inc)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.gcm.gcm_classify_error.php) |
| msys.gauge_cache.inc  | [Table of Contents](index) |  msys.gcm.gcm_classify_error |
