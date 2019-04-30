|     |     |     |
| --- | --- | --- |
| [Prev](config.tls_ca)  | Chapter 72. Configuration Options Reference |  [Next](config.tls_ciphers) |

<a name="config.tls_certificate"></a>
## Name

tls_certificate — certificate to use for inbound and outbound mail

## Synopsis

`TLS_Certificate = "/path/to/cert"`

<a name="idp26954464"></a>
## Description

Specifies the filename of a file containing a PEM encoded certificate that Momentum should present to remote mail exchanges (it is a client certificate). The file may contain both a certificate and a key.

The special value `none` can be used to indicate that no certificate file should be used. This is useful to explicitly avoid using a certificate when a parent scope defines one.

<a name="idp26957552"></a>
## Scope

`tls_certificate` is valid in the binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group and peer scopes.

|     |     |     |
| --- | --- | --- |
| [Prev](config.tls_ca)  | [Up](config.options.ref) |  [Next](config.tls_ciphers) |
| tls_ca  | [Table of Contents](index) |  tls_ciphers |

