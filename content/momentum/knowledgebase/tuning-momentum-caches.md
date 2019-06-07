# Tuning Momentum Caches

### Example Output from a system in need of tuning

The data from the following two sections are from an actual customer who was in need of exactly this sort of tuning. The tables are included here for reference purposes for the sections below.

**cache stats**

```
cache name                            lookups %                  deletions %
                             elts hit  miss  pend    total  inserts    man ttl lru  total
---------------------- ---------- ------------------------ -------- ---------------------
0x2aaab8a25018
                                0   0    0    0         0        0     0   0   0        0
core:sieve_scripts
                                0   0    0    0         0        0     0   0   0        0
0x2aaac3b0d860
                                1 100    0    0    155958        7     0 100   0        5
config:match
                            16384  99    1    0  45671603   354317     0   0 100   337933
core:named_throttles
                              183  85   15    0     96074    72090     0  67  33    14158
0x2aaab8a25178
                                1  98    2    0      1987       48     0 100   0       47
adaptive_lookup:mailfrom_timeout
                             3277  91    9    0    884251    38985     0 100   0    35708
adaptive_lookup:blackhole
                            11038  54   46    0   4756052  1104696     0 100   0  1093658
adaptive_lookup:ehlo_timeout
                             3294  88   12    0    631900    39381     0 100   0    36087
adaptive_lookup:max_recipients_per_connection
                             3279  95    5    0   1722680    39002     0 100   0    35723
adaptive_lookup:suspend_delivery
                            63276  82   18    0  35292283  3098034     0 100   0  3034758
adaptive_lookup:body_timeout
                             3140  93    7    0   1000906    35318     0 100   0    32178
adaptive_lookup:max_outbound_connections
                            10886  61   39    0   5153612  1016568     0 100   0  1005682
adaptive_lookup:max_deliveries_per_connection
                             3103  92    8    0    873040    34628     0 100   0    31525
adaptive_lookup:rset_timeout
                               24  58   42    0      2607      544     0 100   0      520
adaptive_lookup:outbound_throttle_messages
                            10886  66   34    0   6053417  1028277     0 100   0  1017391
adaptive_lookup:max_retry_interval
                              937  41   59    0    580064   171742     0 100   0   170805
adaptive_lookup:rcptto_timeout
                             3273  91    9    0    883193    38708     0 100   0    35435
adaptive_lookup:max_recipients_per_batch
                             3277  91    9    0    884251    38985     0 100   0    35708
adaptive_lookup:idle_timeout
                            10926  73   27    0   7566959  1028705     0 100   0  1017779
adaptive_lookup:retry_interval
                              937  60   40    0    865157   171742     0 100   0   170805
adaptive_lookup:max_resident_active_queue
                             4166  75   25    0   1232128   151937     0 100   0   147771
adaptive_lookup:retry_fuzz
                                0 100    0    0      3940        4     0 100   0        4
adaptive_lookup:max_retries
                              937  41   59    0    580064   171742     0 100   0   170805
ds_core:mysql
                              196  99    1    0    257227     1888     0  89  11     1689
ds_core:csv
                                0   0    0    0         0        0     0   0   0        0
ds_core:ecdb
                                1  98    2    0        56        1     0   0   0        0
alerting_data
                           138694  95    5    0   5433432  2647280     0 100   0      650
0x2aaaaaaca2c8
                                0   0    0    0         0        0     0   0   0        0
0x2aaaaaaca588
                                0   0    0    0         0        0     0   0   0        0
core:bounce_classify
                              298  80   20    0    604885   121005     0  26  74   120694
core:pcre
                                1 100    0    0      3756       11     0 100   0        9
sieve:counters
                                1 100    0    0    257227       10     0 100   0        9
retry_state
                                4 100    0    0      3937        4     0   0   0        0
                             
```

                        
**cache list all**

```
  CAPACITY    ENTRIES     USED      LOADS       HITS     STORES     MISSES     FORCED    EXPIRED        LRU   REPLACED    HT/TL   RD/WR       Q/S       TTL CACHE
      1024        444   43.36%      91747      75325      72764      16422          0      13713       2265      56342   82.10%  55.77%        38         1 core:named_throttles
      1024          0    0.00%          0          0          0          0          0          0          0          0    0.00%   0.00%         0      3600 0x2aaaaffb9018
       128          0    0.00%       2713       2648         65         65          0         65          0          0   97.60%  97.66%         0        60 0x2aaaaffb9178
     16384         91    0.56%    1327391    1266005      30693      61386          0      30602          0          0   95.38%  97.74%       313       300 adaptive_lookup:mailfrom_timeout
     16384      16384  100.00%    7082251    3267707    1907272    3814544         17      68517    1822354          0   46.14%  78.78%      2075       300 adaptive_lookup:blackhole
     16384         94    0.57%    1374282    1311924      31179      62358          0      31085          0          0   95.46%  97.78%       324       300 adaptive_lookup:ehlo_timeout
     16384         92    0.56%    2618460    2557040      30710      61420          0      30618          0          0   97.65%  98.84%       611       300 adaptive_lookup:max_recipients_per_connection
     16384      16384  100.00%   46002015   34329844    5835580   11672171         18      13967    5805211          0   74.63%  88.74%     11966       300 adaptive_lookup:suspend_delivery
     16384         69    0.42%    1611193    1556201      27496      54992          0      27427          0          0   96.59%  98.32%       378       300 adaptive_lookup:body_timeout
     16384      16384  100.00%    7563143    4720709    1421217    2842434          8      58306    1346519          0   62.42%  84.18%      2073       300 adaptive_lookup:max_outbound_connections
     16384         69    0.42%    1317940    1264164      26888      53776          8      26811          0          0   95.92%  98.00%       310       300 adaptive_lookup:max_deliveries_per_connection
     16384          4    0.02%       1219        425        397        794          0        393          0          0   34.86%  75.43%         0       300 adaptive_lookup:rset_timeout
     16384      16384  100.00%    8751194    5879238    1435978    2871956          8      69284    1350302          0   67.18%  85.90%      2351       300 adaptive_lookup:outbound_throttle_messages
     16384        458    2.80%     795870     196330     299770     599540          0      28373     270939          0   24.67%  72.64%       252       300 adaptive_lookup:max_retry_interval
     16384         86    0.52%    1326962    1265828      30567      61134          0      30481          0          0   95.39%  97.75%       313       300 adaptive_lookup:rcptto_timeout
     16384         91    0.56%    1327391    1266005      30693      61386          0      30602          0          0   95.38%  97.74%       313       300 adaptive_lookup:max_recipients_per_batch
     16384      16384  100.00%   11056226    8181746    1437240    2874480          0      69477    1351379          0   74.00%  88.50%      2883       300 adaptive_lookup:idle_timeout
     16384        458    2.80%    1115442     536252     289595     579190          0      28328     260809          0   48.08%  79.39%       324       300 adaptive_lookup:retry_interval
     16384        537    3.28%    1738477    1396029     171224     342448          0      52864     117823          0   80.30%  91.03%       440       300 adaptive_lookup:max_resident_active_queue
     16384          1    0.01%      30543      30329        107        214          0        106          0          0   99.30%  99.65%         7       300 adaptive_lookup:retry_fuzz
     16384        458    2.80%     795870     196330     299770     599540          0      28373     270939          0   24.67%  72.64%       252       300 adaptive_lookup:max_retries
       256          0    0.00%     129474     125771       3703       3703          0       1425       2267         11   97.14%  97.22%        30       360 ds_core:mysql
      1024          0    0.00%          0          0          0          0          0          0          0          0    0.00%   0.00%         0      3600 ds_core:csv
      1024          1    0.10%         65         63          2          2          0          1          0          0   96.92%  97.01%         0      3600 ds_core:ecdb
    262144     138209   52.72%    8260344    7978311    3995096     282033          0       1020          0    3855867   96.59%  67.40%      2829        60 alerting_data
        16          0    0.00%          0          0          0          0          0          0          0          0    0.00%   0.00%         0        60 0x2aaaaaaca2c8
      2048          0    0.00%      81858      81843         15         15          0         13          0          2   99.98%  99.98%        18       900 0x2aaaaaaca428
        16          0    0.00%          0          0          0          0          0          0          0          0    0.00%   0.00%         0        60 0x2aaaaaaca588
       256          0    0.00%          2          0          2          2          0          2          0          0    0.00%  50.00%         0       260 core:sieve_scripts
     16384        254    1.55%     643440     514708     128732     128732          0      31908      96548         22   79.99%  83.33%       178        60 core:bounce_classify
       128          1    0.78%       1836       1822         14         14          0         13          0          0   99.24%  99.24%         0       300 core:pcre
     16384      16384  100.00%  144482217  143277965    1204252    1204252          0          0    1187868          0   99.17%  99.17%     33630         0 config:match
       256          0    0.00%     129474     129461         13         13          0         13          0          0   99.99%  99.99%        29       300 sieve:counters
      2048         25    1.22%      30451      30426         25         25          0          0          0          0   99.92%  99.92%         7         0 retry_state

34 caches listed.
```

###Tuning

**Adaptive Delivery**

Under heavy workloads (particularly clients with broad destinations and poor deliverability) Adaptive Delivery may begin to cause performance issues. When we see this, the first thing we want to look at is "cache stats'. Lets pull out two specific adaptive caches that are indicative of the larger problem, as can be seen in the output for the other adaptive caches above:

```
cache name                            lookups %                  deletions %
                             elts hit  miss  pend    total  inserts    man ttl lru  total
---------------------- ---------- ------------------------ -------- ---------------------
adaptive_lookup:blackhole
                            11038  54   46    0   4756052  1104696     0 100   0  1093658
adaptive_lookup:suspend_delivery
                            63276  82   18    0  35292283  3098034     0 100   0  3034758
```
The key columns we want to look at here are hit/miss. Looking at suspend_delivery for example, we see that 18% of the requests against this cache had no entry. Taken against the 35 million in the total, that means that over six million calls against this cache failed to hit the cache. This is extremely inefficient. The percentage itself is really pretty high, but the problem becomes particularly serious in light of the volume of attempts, as pulling this without the cache can be an extremely costly process.

Once we've identified caching as a potential (or contributing) source of the problem, we need to figure out why. Doing a 'cache list all' can help to nail this down. Looking at the above example, we can see several key pain points in this environment under the adaptive subsystem, but we'll stick with the two we're already dealing with.

```
  CAPACITY    ENTRIES     USED      LOADS       HITS     STORES     MISSES     FORCED    EXPIRED        LRU   REPLACED    HT/TL   RD/WR       Q/S       TTL CACHE
     16384      16384  100.00%    7082251    3267707    1907272    3814544         17      68517    1822354          0   46.14%  78.78%      2075       300 adaptive_lookup:blackhole
     16384      16384  100.00%   46002015   34329844    5835580   11672171         18      13967    5805211          0   74.63%  88.74%     11966       300 adaptive_lookup:suspend_delivery
```
What we see here is that the problem appears to be focused in LRU (Least Recently Used). The high number here indicates that the cache is way too small, causing nearly every lookup to expire something off the cache to make room for a new entry. 16384 is a decent default, but for this particular customer it is clearly not sufficient for their workload. Bumping this up to more accurately reflect the number of entries being used in these caches will dramatically improve the performance of the cache and thus of the system. In this case, we need to increase adaptive\_cache\_size.


> Increasing Adaptive\_Cache\_Size

>There is no magic formula for finding the right number for this setting. Generally speaking, you can just set Adaptive_Cache_Size to 102400 or 1536000 (in the adaptive{} stanza) and that should do it. The latter will push it up over the line for essentially "infinite" cache size. In cache list all you'll see the value go to 4294967295.

>Note: This is no longer true as of Momentum 3.6.0. 

**Regular Expression Cache**

In addition to the Adaptive Delivery issue, we can see that there is a similar problem with config:match:

```
cache name                            lookups %                  deletions %
                             elts hit  miss  pend    total  inserts    man ttl lru  total
---------------------- ---------- ------------------------ -------- ---------------------
config:match
                            16384  99    1    0  45671603   354317     0   0 100   337933
```
And from cache list:

```
  CAPACITY    ENTRIES     USED      LOADS       HITS     STORES     MISSES     FORCED    EXPIRED        LRU   REPLACED    HT/TL   RD/WR       Q/S       TTL CACHE
     16384      16384  100.00%  144482217  143277965    1204252    1204252          0          0    1187868          0   99.17%  99.17%     33630         0 config:match
```
Once again we see that while only 1% missed, that's still 1% of 45 million, which is still almost 500,000 times. This is a single global cache (Match\_Cache\_Size) that is used by the regular expression subsystem, and caches matching data for any scopes that uses regular expressions. Set this value high enough to cover the number of unique queries.
