|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.crypto_engine)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.debug_flags) |

<a name="config.crypto_lock_method"></a>
## Name

crypto_lock_method — set the locking method used by the TLS layer

## Synopsis

`Crypto_Lock_Method = "EC_SSL_SPINLOCK"`

`Crypto_Lock_Method = "EC_SSL_MUTEX"`

`Crypto_Lock_Method = "EC_SSL_DEFAULTLOCK"`

<a name="idp24105856"></a>
## Description

This option affects how thread-safe locking is performed. You should not need to change the default value of this setting.

The default value for option is `EC_SSL_DEFAULTLOCK`.

<a name="idp24108672"></a>
## Scope

`crypto_lock_method` is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.crypto_engine)  | [Up](config.options.ref) |  [Next](conf.ref.debug_flags) |
| crypto_engine  | [Table of Contents](index) |  debug_flags |

