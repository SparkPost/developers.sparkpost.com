|     |     |     |
| --- | --- | --- |
| [Prev](config.tls_allow_renegotiation)  | Chapter 72. Configuration Options Reference |  [Next](config.tls_certificate) |

<a name="config.tls_ca"></a>
## Name

tls_ca — certificate authority for outbound mail

## Synopsis

`TLS_Ca = "/path/to/CAlist"`

<a name="idp26941760"></a>
## Description

TLS_Ca specifies a file containing a trusted certificate authority list. These certificates should be in PEM format. This CA list will be referenced if TLS_Verify is set to either `ca` or `host`.

<a name="idp26944640"></a>
## Scope

`tls_ca` is valid in the binding, binding_group, domain and global scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](config.tls_allow_renegotiation)  | [Up](config.options.ref) |  [Next](config.tls_certificate) |
| tls_allow_renegotiation  | [Table of Contents](index) |  tls_certificate |

