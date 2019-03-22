| [Prev](sieve.ref.ec_forward)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_get_message_code) |

<a name="sieve.ref.ec_gauge_cache"></a>
## Name

ec_gauge_cache_init, ec_gauge_cache_inc, ec_gauge_cache_dec, ec_gauge_cache_get — gauge cache functions for Sieve

## Synopsis

`ec_gauge_cache_init` { *`name for the cache`*                } { *`max number of elements`*                     } { *`time to expiration of an element`*                              } [ *`replicate`* ]

`ec_gauge_cache_inc` { *`name for the cache`*                } { *`name for the key to inc`*                     }

`ec_gauge_cache_dec` { *`name for the cache`*                } { *`name for the key to dec`*                     }

`ec_gauge_cache_get` { *`name for the cache`*                } { *`name for the key to get`*                     }

<a name="idp29598912"></a>
## Description

`ec_gauge_cache_init` creates the cache with the given max number of elements and max time in seconds before an element automatically expires out of the cache. The final, optional argument is an integer replication flag. If non-zero, it indicates that increments and decrements for this cache should be broadcast among all nodes on a cluster. For this to be used, gauge cache replication must first be enabled; see [Section 7.7.1.9, “Shared Gauge Caches”](cluster.config.replication#cluster.replication.gauge_cache "7.7.1.9. Shared Gauge Caches").

`ec_gauge_cache_inc` creates the given key in a given cache if it does not exist and increments it.

`ec_gauge_cache_dec` creates the given key in a given cache if it does not exist and decrements it.

`ec_gauge_cache_get` returns the value of the specified key in the specified cache.

<a name="example.ec_guage_cache"></a>

**Example 16.44. ec_gauge_cache example**

```
$user = vctx_conn_get "auth_user";
ec_gauge_cache_init "cache1" 10 300;
ec_gauge_cache_inc "cache1" "${user}";
$test = ec_gauge_cache_get "cache1" "${user}";
if ec_test :value "gt" :comparator "i;ascii-numeric""${test}" "10" {
  ec_action "550" "Too much spamming";
}
```

| [Prev](sieve.ref.ec_forward)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_get_message_code) |
| ec_forward  | [Table of Contents](index) |  ec_get_message_code |
