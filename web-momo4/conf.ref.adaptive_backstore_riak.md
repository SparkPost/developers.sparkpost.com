| [Prev](conf.ref.adaptive_backstore_leveldb)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.adaptive_enabled) |

<a name="conf.ref.adaptive_backstore_riak"></a>
## Name

adaptive_backstore_riak — set characteristics of the Riak backing store

<a name="idp23347280"></a>
## Description

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

<a name="idp23354144"></a>
## Scope

`adaptive_backstore_riak` is valid in the global scope.

<a name="idp23356352"></a>
## See Also

[Section 71.3, “adaptive – Adaptive Delivery”](modules.adaptive "71.3. adaptive – Adaptive Delivery") and [adaptive_backstore_leveldb](conf.ref.adaptive_backstore_leveldb "adaptive_backstore_leveldb")

| [Prev](conf.ref.adaptive_backstore_leveldb)  | [Up](config.options.ref) |  [Next](conf.ref.adaptive_enabled) |
| adaptive_backstore_leveldb  | [Table of Contents](index) |  adaptive_enabled |

