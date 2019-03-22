| [Prev](conf.ref.tls_allow_renegotiation)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.tls_certificate.php) |

<a name="conf.ref.tls_ca"></a>
## Name

tls_ca — certificate authority for outbound mail

## Synopsis

`TLS_Ca = "/path/to/CAlist"`

<a name="idp12055680"></a>
## Description

TLS_Ca specifies a file containing a trusted certificate authority list. These certificates should be in PEM format. This CA list will be referenced if TLS_Verify is set to either `ca` or `host`.

<a name="idp12058336"></a>
## Scope

tls_ca is valid in the binding, binding_group, domain and global scopes.

| [Prev](conf.ref.tls_allow_renegotiation)  | [Up](conf.ref.files.php) |  [Next](conf.ref.tls_certificate.php) |
| tls_allow_renegotiation  | [Table of Contents](index) |  tls_certificate |
