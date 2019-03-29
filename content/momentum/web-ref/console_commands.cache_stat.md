|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.cache_list)  | 12.2. System Console Commands |  [Next](console_commands.cache_stats.php) |

<a name="console_commands.cache_stat"></a>
## Name

cache stat — show detailed cache statistics for the specified cache

## Synopsis

`cache stat` { *`cache_name`* }

<a name="idp15560080"></a>
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.26.

This command shows statistics for the specified cache. Use the [cache list](console_commands.cache_list "cache list") command to determine the available caches.

Find sample output below:

```
20:02:49 /tmp/2025> cache stat core:bounce_classify
Name          : core:bounce_classify
Capacity      : 16384
Entries       : 10238
Utilization   :  62.49%
Query Rate    : 1271 q/s
Loads         : 20476
  Hits        : 1527
  Misses      : 18949
  Pending     : 0
Stores        : 18949
Invalidations : 8711
  Forced      : 0
  Expired     : 0
  Capacity    : 8711
Hit Rate      :   7.46%
Workload (R/W):  51.94%
  Reads       : 20476
  Writes      : 18949
```

This command shows much more detail than the [cache stats](console_commands.cache_stats "cache stats") command.

<a name="idp15567968"></a>
## See Also

[cache list](console_commands.cache_list "cache list"), [cache stats](console_commands.cache_stats.php "cache stats"), [match_cache_life](conf.ref.match_cache_life.php "match_cache_life")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.cache_list)  | [Up](console.commands.non-module.php) |  [Next](console_commands.cache_stats.php) |
| cache list  | [Table of Contents](index) |  cache stats |
