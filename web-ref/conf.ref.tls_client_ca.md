|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.tls_enable_dhe_ciphers)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.tls_ifavailable_fallback.php) |

<a name="conf.ref.tls_client_ca"></a>
## Name

tls_client_ca — certificate authority for inbound mail

## Synopsis

`TLS_Client_Ca = "/path/to/CAlist"`

<a name="idp12121152"></a>
## Description

TLS_Client_Ca specifies a file containing a trusted certificate authority list. These certificates should be in PEM format. This CA list will be referenced if TLS_Verify is set to either `ca` or `host`.

<a name="idp12123808"></a>
## Scope

`tls_client_ca` is valid in the ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group and peer scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.tls_enable_dhe_ciphers)  | [Up](conf.ref.files.php) |  [Next](conf.ref.tls_ifavailable_fallback.php) |
| tls_enable_dhe_ciphers  | [Table of Contents](index) |  tls_ifavailable_fallback |
