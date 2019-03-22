| [Prev](sieve.ref.ec_cluster_cache_get)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_config) |

<a name="sieve.ref.ec_cluster_cache_set"></a>
## Name

ec_cluster_cache_set — Set a value in a cluster-wide replicated cache

## Synopsis

`ec_cluster_cache_set` { *`replication_name`* } { *`key`* } { *`value`* } { *`ttl`* }

<a name="idp29275936"></a>
## Description

`ec_cluster_cache_set` sets the value for the given key and cache name. The `ttl` is a string specifying the number of seconds until the value expires (unless it ends with "H" or "M" for hours or minutes). The value will not expire if the `ttl` is "0".

### Note

This feature requires the cluster module. The cluster configuration stanza must include a `replicate` directive that names this cache. See [Section 7.7.1.6, “Replicated Caches”](cluster.config.replication#cluster.replicatedcache "7.7.1.6. Replicated Caches").

<a name="example.ec_cluster_cache_set"></a>

**Example 16.31. ec_cluster_cache_set example**

`ec_cluster_cache_set "mycache" "mykey" "myvalue" "0";`

| [Prev](sieve.ref.ec_cluster_cache_get)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_config) |
| ec_cluster_cache_get  | [Table of Contents](index) |  ec_config |
