| [Prev](config.tls_ciphers)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.tls_dhparams_file) |

<a name="config.tls_client_ca"></a>
## Name

tls_client_ca — certificate authority for inbound mail

## Synopsis

`TLS_Client_Ca = "/path/to/CAlist"`

<a name="idp26995184"></a>
## Description

TLS_Client_Ca specifies a file containing a trusted certificate authority list. These certificates should be in PEM format. This CA list will be referenced if TLS_Verify is set to either `ca` or `host`.

<a name="idp26998064"></a>
## Scope

`tls_client_ca` is valid in the ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group and peer scopes.

| [Prev](config.tls_ciphers)  | [Up](config.options.ref) |  [Next](conf.ref.tls_dhparams_file) |
| tls_ciphers  | [Table of Contents](index) |  tls_dhparams_file |

