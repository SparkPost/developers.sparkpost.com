|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.control_client_timeout)  | Chapter 72. Configuration Options Reference |  [Next](config.crypto_lock_method) |

<a name="conf.ref.crypto_engine"></a>
## Name

crypto_engine — enable hardware cryptography acceleration

## Synopsis

crypto_engine = "*`engine_name`*"

<a name="idp24089264"></a>
## Description

`crypto_engine` is an option to allow hardware acceleration of the cryptographic processes in Momentum. The right hand side takes the value of the specific hardware acceleration engine present. There is no default value for this option.

The example below shows how to configure Momentum to use the pkcs12 engine.

<a name="example.crypto_engine"></a>

**Example 72.5. crypto_engine example**

`crypto_engine = "pkcs12"`
<a name="idp24094704"></a>
## Scope

crypto_engine is valid in the global scope.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.control_client_timeout)  | [Up](config.options.ref) |  [Next](config.crypto_lock_method) |
| control_client_timeout  | [Table of Contents](index) |  crypto_lock_method |

