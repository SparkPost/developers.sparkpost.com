|     |     |     |
| --- | --- | --- |
| [Prev](webui-common.conf)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.adaptive_backstore_riak.php) |

<a name="conf.ref.adaptive_backstore_leveldb"></a>
## Name

adaptive_backstore_leveldb — use LevelDB as the backing store for Adaptive Delivery

## Synopsis

`adaptive_backstore_leveldb { path = "/var/log/ecelerity/adaptive.leveldb" }`

<a name="idp7344480"></a>
## Description

**Configuration Change. ** This feature is available as of version 3.6.

Riak is the default backing store for the adaptive module. In some circumstances it may not provide the required level of performance. As an alternate backing store, you can use [LevelDB](http://en.wikipedia.org/wiki/LevelDB) on Linux with Momentum 3.6 or greater. To use LevelDB you must add an `adaptive_backstore_leveldb` stanza to your `ecelerity.conf` file.

### Warning

Please consult with support before reconfiguring Momentum as described here. The LevelDB package is installed with Momentum 3.6; it can be used only as a replacement backing store for the adaptive module. If you are using Mobile Momentum, Riak continues to be used for message resubmission. *LevelDB is not cluster aware.*

`path` identifies the LevelDB database and is the only option in the `adaptive_backstore_leveldb` scope. The default value for this option is `/var/log/ecelerity/adaptive.leveldb`.

<a name="idp7352544"></a>
## Scope

`adaptive_backstore_leveldb` is valid in the global scope.

<a name="idp7354608"></a>
## See Also

[Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive "14.2. adaptive – Adaptive Delivery") and [Section 4.4.6.1, “Using an Adaptive Delivery Backing Store Other than Riak”](operations.riak.php#operations.riak.alternate "4.4.6.1. Using an Adaptive Delivery Backing Store Other than Riak")

|     |     |     |
| --- | --- | --- |
| [Prev](webui-common.conf)  | [Up](conf.ref.files.php) |  [Next](conf.ref.adaptive_backstore_riak.php) |
| webui-common.conf  | [Table of Contents](index) |  adaptive_backstore_riak |
