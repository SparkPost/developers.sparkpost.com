| [Prev](conf.ref.crypto_engine)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.debug_flags.php) |

<a name="conf.ref.crypto_lock_method"></a>
## Name

crypto_lock_method — change the locking method used by the TLS layer

## Synopsis

`Crypto_Lock_Method = "EC_SSL_SPINLOCK"`

`Crypto_Lock_Method = "EC_SSL_MUTEX"`

`Crypto_Lock_Method = "EC_SSL_DEFAULTLOCK"`

<a name="idp8733984"></a>
## Description

This option affects how thread-safe locking is performed. You should not need to change the default value of this setting. The default value for option is `EC_SSL_DEFAULTLOCK`.

<a name="idp8736192"></a>
## Scope

crypto_lock_method is valid in the global scope.

| [Prev](conf.ref.crypto_engine)  | [Up](conf.ref.files.php) |  [Next](conf.ref.debug_flags.php) |
| crypto_engine  | [Table of Contents](index) |  debug_flags |
