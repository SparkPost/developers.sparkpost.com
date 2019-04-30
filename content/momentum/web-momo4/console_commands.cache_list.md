|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.binding_summary)  | Chapter 73. Non-Module-Specific Console Commands |  [Next](console_commands.cache_stat) |

<a name="console_commands.cache_list"></a>
## Name

cache list — list all caches along with their associated attributes

## Synopsis

`cache list` [ *`attribute`* ...]

<a name="idp13791280"></a>
## Description

This command lists caches and related statistics. When specific parameters such as the query rate are passed in, this command displays usage by cache.

```
20:02:48 /tmp/2025> cache list
 alerting_data
 scpt_root
 core:bounce_classify
 core:pcre
 config:match

 5 caches listed.
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
20:03:17 /tmp/2025> cache list entries workload
     10179  80.45% alerting_data
        22  99.97% scpt_root
     10238  51.94% core:bounce_classify
         0   0.00% core:pcre
         0   0.00% config:match

 5 caches listed.
20:03:20 /tmp/2025> cache list query-rate
       501 alerting_data
       792 scpt_root
       379 core:bounce_classify
         0 core:pcre
         0 config:match

 5 caches listed.
20:03:29 /tmp/2025> cache list xxx
Valid attributes are [capacity,entries,utilization,loads,stores,hits,misses,
 forced,expired,lru,hit-rate,workload,query-rate]
```

The **cache list**      command is useful for determining the cache names to use with the [cache stat](console_commands.cache_stat "cache stat") command.

The optional cache attribute parameters are:

*   capacity

*   entries

*   utilization

*   loads

*   stores

*   hits

*   misses

*   forced

*   expired

*   lru (least recently used)

*   hit-rate

*   workload

*   query-rate

Optional cache attribute parameters are:

*   all

*   summary

*   capacity

*   entries

*   used

*   loads

*   stores

*   hits

*   misses

*   forced

*   expired

*   lru (least recently used)

*   replaced

*   hitratio

*   workload

*   queryrate

The `all` parameter shows all attributes. The `summary` parameter displays the following output:

```
07:07:00 /tmp/2025> cache list summary
CAPACITY    ENTRIES     USED    HT/TL   RD/WR CACHE
1048576       3507     0.33%   93.72%  57.82% core:named_throttles
1024          1        0.10%   99.75%  99.75% ds_core:ecdb
1024          0        0.00%    0.00%   0.00% ds_core:adaptivedb
16            0        0.00%    0.00%   0.00% 0x2aaabb19f858
16384         312      1.90%   99.96%  99.98% adaptive_lookup:retry_fuzz
16384         16384  100.00%   96.53%  98.30% adaptive_lookup:blackhole
16384         16384  100.00%   99.34%  99.67% adaptive_lookup:max_retry_interval
16384         16384  100.00%   97.62%  98.82% adaptive_lookup:idle_timeout
16384         16384  100.00%   95.67%  97.88% adaptive_lookup:max_resident_active_queue
16384         16384  100.00%   88.47%  94.55% adaptive_lookup:mailfrom_timeout
16384         16384  100.00%   88.47%  94.55% adaptive_lookup:max_recipients_per_batch
16384         16384  100.00%   92.33%  96.31% adaptive_lookup:max_recipients_per_connection
16384         16384  100.00%   96.77%  98.41% adaptive_lookup:outbound_throttle_messages
16384         16384  100.00%   86.54%  93.69% adaptive_lookup:ehlo_timeout
16384         16384  100.00%   98.64%  99.32% adaptive_lookup:max_retries
16384         16384  100.00%   96.96%  98.50% adaptive_lookup:max_outbound_connections
16384         16384  100.00%   97.01%  98.53% adaptive_lookup:suspend_delivery
16384         16384  100.00%   98.63%  99.32% adaptive_lookup:retry_interval
16384         16384  100.00%   87.58%  94.15% adaptive_lookup:body_timeout
16384         16384  100.00%   87.13%  93.95% adaptive_lookup:max_deliveries_per_connection
16384         16384  100.00%   86.27%  93.58% adaptive_lookup:rcptto_timeout
16384         2761    16.85%   95.82%  97.95% adaptive_lookup:rset_timeout
262144        65179   24.86%   98.33%  70.61% alerting_data
2048          653     31.88%   99.96%  99.96% 0x2b59ee386588
4294967295    17       0.00%  100.00% 100.00% scpt_root
256           2        0.78%  100.00% 100.00% core:sieve_scripts
16384         16384  100.00%   15.89%  54.32% core:bounce_classify
128           0        0.00%    0.00%   0.00% core:pcre
4294967295    390289   0.01%   99.93%  99.93% config:match
65536         374      0.57%   99.99%  99.99% retry_state

  30 caches listed.
```
<a name="idp7330528"></a>
## See Also

[cache stat](console_commands.cache_stat "cache stat"), [cache stats](console_commands.cache_stats "cache stats"), [match_cache_life](conf.ref.match_cache_life "match_cache_life")

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands.binding_summary)  | [Up](console.cmds.ref) |  [Next](console_commands.cache_stat) |
| binding summary  | [Table of Contents](index) |  cache stat |

