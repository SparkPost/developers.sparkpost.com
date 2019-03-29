|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.adaptive_backstore_leveldb)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.adaptive_enabled.php) |

<a name="conf.ref.adaptive_backstore_riak"></a>
## Name

adaptive_backstore_riak — set characteristics of the Riak backing store

<a name="idp7362112"></a>
## Description

**Configuration Change. ** This feature is available as of version 3.6.

Riak is the default backing store for the adaptive module. Use the `adaptive_backstore_riak` scope to set the timeout and the connect timeout:

```
adaptive_backstore_riak {
  timeout = 5
  connect_timeout = 5
}
```

`timeout` defines the amount of time in seconds that the adaptive module will wait for a response from the adaptive backing store. The default setting is `5` seconds. `connect_timeout` defines the amount of time in seconds that the adaptive module will wait for a connection to the backing store server. This occurs in the connection phase only and also defaults to `5` seconds.

### Note

The options in this scope replace the `backing_store_connect_timeout` and the `backing_store_timeout` options defined in the adaptive module scope.

<a name="idp7370368"></a>
## Scope

`adaptive_backstore_riak` is valid in the global scope.

<a name="idp7372416"></a>
## See Also

[Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive "14.2. adaptive – Adaptive Delivery"), [adaptive_backstore_leveldb](conf.ref.adaptive_backstore_leveldb.php "adaptive_backstore_leveldb") and [Section 4.4.6.1, “Using an Adaptive Delivery Backing Store Other than Riak”](operations.riak.php#operations.riak.alternate "4.4.6.1. Using an Adaptive Delivery Backing Store Other than Riak")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.adaptive_backstore_leveldb)  | [Up](conf.ref.files.php) |  [Next](conf.ref.adaptive_enabled.php) |
| adaptive_backstore_leveldb  | [Table of Contents](index) |  adaptive_enabled |
