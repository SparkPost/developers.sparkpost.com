|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.control_client_timeout)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.crypto_lock_method.php) |

<a name="conf.ref.crypto_engine"></a>
## Name

crypto_engine — Enable hardware cryptography acceleration

## Synopsis

Crypto_Engine = "*`engine_name`*"

<a name="idp8718944"></a>
## Description

`crypto_engine` is an option to allow hardware acceleration of the cryptographic processes in Momentum. The right hand side takes the value of the specific hardware acceleration engine present. There is no default value for this option.

The example below shows how to configure Momentum to use the pkcs12 engine.

<a name="example.crypto_engine"></a>

**Example 9.8. crypto_engine example**

`crypto_engine = "pkcs12"`
<a name="idp8724048"></a>
## Scope

crypto_engine is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.control_client_timeout)  | [Up](conf.ref.files.php) |  [Next](conf.ref.crypto_lock_method.php) |
| control_client_timeout  | [Table of Contents](index) |  crypto_lock_method |
