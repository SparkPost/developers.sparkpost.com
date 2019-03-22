| [Prev](conf.ref.tls_enable_dhe_ciphers)  | Chapter 72. Configuration Options Reference |  [Next](config.tls_ifavailable_fallback) |

<a name="config.tls_engine"></a>
## Name

tls_engine — specify the TLS library to use

## Synopsis

`TLS_Engine = "openssl|gnutls"`

<a name="idp27031808"></a>
## Description

**Configuration Change. ** Support for GNUTLS is available as of version 4.1 for SMTP reception and SMTP deliveries only.

If TLS is set to `required` or `ifavailable`, this option specifies whether to use OpenSSL or GNUTLS. This option cannot be changed at runtime. The ecelerity service must be restarted.

This option can be set to the following:

*   `openssl` – OpenSSL is used. The following components support OpenSSL:

    *   HTTP listener (including REST APIs)

    *   XMPP listener

*   `gnutls` – GNU Transport Layer Security is used. The following components support GNUTLS:

    *   ESMTP listener (SMTP reception)

    *   SMTP deliveries

The default value is `openssl`.

<a name="idp27046128"></a>
## Scope

`tls_engine` is valid in the global scope.

| [Prev](conf.ref.tls_enable_dhe_ciphers)  | [Up](config.options.ref) |  [Next](config.tls_ifavailable_fallback) |
| tls_enable_dhe_ciphers  | [Table of Contents](index) |  tls_ifavailable_fallback |

