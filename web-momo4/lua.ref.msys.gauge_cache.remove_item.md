| [Prev](lua.ref.msys.gauge_cache.inc)  | Chapter 70. Lua Functions Reference |  [Next](lua.ref.msys.gcm.gcm_classify_error) |

<a name="lua.ref.msys.gauge_cache.remove_item"></a>
## Name

msys.gauge_cache.remove_item — Remove the value associated with `keystring` from the named cache

<a name="idp18163232"></a>
## Synopsis

`msys.gauge_cache.remove_item(cachename, keystring);`

```
cachename: string
keystring: string
```
<a name="idp18166256"></a>
## Description

Removes the value associated with `keystring` from the named cache.

Enable this function with the statement `require('msys.gauge_cache');`.

<a name="idp18169504"></a>
## See Also

[msys.gauge_cache.inc](lua.ref.msys.gauge_cache.inc "msys.gauge_cache.inc"), [msys.gauge_cache.dec](lua.ref.msys.gauge_cache.dec "msys.gauge_cache.dec"), [Section 28.1.9, “Shared Gauge Caches”](cluster.config.replication#cluster.replication.gauge_cache "28.1.9. Shared Gauge Caches")

| [Prev](lua.ref.msys.gauge_cache.inc)  | [Up](lua.function.details) |  [Next](lua.ref.msys.gcm.gcm_classify_error) |
| msys.gauge_cache.inc  | [Table of Contents](index) |  msys.gcm.gcm_classify_error |

