| [Prev](conf.ref.match_cache_life)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.max_deliveries_per_connection.php) |

<a name="conf.ref.match_cache_size"></a>
## Name

match_cache_size — the size of the cache that holds the results of looking up matching scopes

## Synopsis

`match_cache_size = 16384`

<a name="idp10157840"></a>
## Description

In version 2.2, Momentum creates a separate cache for every scope instance that contains regex domains. Consider the following configuration snippet:

```
Binding_Group group {
  Binding foo {
    Domain /yahoo\.co(m|\.uk)$/ {
    }
    Domain /google\.(com|es|ru)$/{
    }
  }
  Domain /yahoo\.co(m|\.uk)$/ {
  }
  Domain /google\.(com|es|ru)$/{
  }
}

Domain /yahoo\.co(m|\.uk)$/ {
}

Domain /google\.(com|es|ru)$/{
}
```

Three caches would be created: one for the global scope, one for the Binding_Group `group` scope, and one for the Binding `foo` scope. match_cache_size determines the maximum number of elements in *each* cache. If your configuration uses regex domains, then, for best performance, the cache size should be larger than the number of unique queries. This should be at least the number of unique destination domains you send to.

### Warning

The Match_Cache_Size **MUST NOT**     be set to `0`; doing so will result in undefined behavior.

<a name="idp10164400"></a>
## Changes in Version 3

Version 3.0 uses a single global cache. For this reason the default value has increased to `16384`.

In 2.2 `match_cache_size` applied only to regex domains, but in 3.0 it also applies to Peer scopes in listeners, and any user-defined scopes that use matching.

In Momentum version 3.0 it is not necessary to restart the MTA if changes are made to this option using **config set** .

<a name="idp10168768"></a>
## Scope

match_cache_size is valid in the global scope.

<a name="idp10170416"></a>
## See Also

[match_cache_life](conf.ref.match_cache_life "match_cache_life") and [domain](conf.ref.domain.php "domain")

| [Prev](conf.ref.match_cache_life)  | [Up](conf.ref.files.php) |  [Next](conf.ref.max_deliveries_per_connection.php) |
| match_cache_life  | [Table of Contents](index) |  max_deliveries_per_connection |
