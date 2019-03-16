| [Prev](sieve.ref.ec_ceil)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_cluster_cache_set) |

<a name="sieve.ref.ec_cluster_cache_get"></a>
## Name

ec_cluster_cache_get — Retrieve a value from a cluster-wide replicated cache

## Synopsis

`ec_cluster_cache_get` { *`replication_name`* } { *`key`* }

<a name="idp29256016"></a>
## Description

`ec_cluster_cache_get` retrieves the value for the given key and cache name.

### Note

This feature requires the cluster module. The cluster configuration stanza must include a `replicate` directive that names this cache. See [Section 7.7.1.6, “Replicated Caches”](cluster.config.replication#cluster.replicatedcache "7.7.1.6. Replicated Caches").

<a name="example.ec_cluster_cache_get"></a>

**Example 16.30. ec_cluster_cache_get example**

```
$value = ec_cluster_cache_get "mycache" "mykey";
ec_log "mykey: ${value}";
```

| [Prev](sieve.ref.ec_ceil)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_cluster_cache_set) |
| ec_ceil  | [Table of Contents](index) |  ec_cluster_cache_set |
