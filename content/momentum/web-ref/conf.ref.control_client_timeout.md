| [Prev](conf.ref.connection_allocation_aggressiveness)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.crypto_engine.php) |

<a name="conf.ref.control_client_timeout"></a>
## Name

control_client_timeout — network timeout for Momentum control client connections

## Synopsis

`Control_Client_Timeout = 60`

<a name="idp8706112"></a>
## Description

Specifies the timeout in seconds that will be used for control client connections. The `eccmgrio://` wrapper used in clustered configurations is one example of a control client connection. The default value for option is `60`.

<a name="idp8709120"></a>
## Scope

control_client_timeout is valid in the global scope.

| [Prev](conf.ref.connection_allocation_aggressiveness)  | [Up](conf.ref.files.php) |  [Next](conf.ref.crypto_engine.php) |
| connection_allocation_aggressiveness  | [Table of Contents](index) |  crypto_engine |
