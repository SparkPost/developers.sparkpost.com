| [Prev](conf.ref.tls_ca)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.tls_ciphers.php) |

<a name="conf.ref.tls_certificate"></a>
## Name

tls_certificate — certificate to use for inbound and outbound mail

## Synopsis

`TLS_Certificate = "/path/to/cert"`

<a name="idp12066672"></a>
## Description

Specifies the filename of a file containing a PEM encoded certificate that Momentum should present to remote mail exchanges (it is a client certificate). The file may contain both a certificate and a key.

The special value `none` can be used to indicate that no certificate file should be used. This is useful to explicitly avoid using a certificate when a parent scope defines one.

<a name="idp12069872"></a>
## Scope

`tls_certificate` is valid in the binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group and peer scopes.

| [Prev](conf.ref.tls_ca)  | [Up](conf.ref.files.php) |  [Next](conf.ref.tls_ciphers.php) |
| tls_ca  | [Table of Contents](index) |  tls_ciphers |
