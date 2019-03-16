| [Prev](config.ref.tls)  | Chapter 72. Configuration Options Reference |  [Next](config.tls_ca) |

<a name="config.tls_allow_renegotiation"></a>
## Name

tls_allow_renegotiation — determine whether to enable TLS renegotiation

## Synopsis

`TLS_Allow_Renegotiation = true|false`

<a name="idp26911296"></a>
## Description

**Configuration Change. ** Support for GNUTLS is available as of version 4.1 for SMTP reception and SMTP deliveries only.

This option determines whether TLS renegotiation is enabled or disabled.

**OpenSSL**

When TLS_Engine is set to `openssl`, this option is supported by the ESMTP, HTTP, and ECStream listeners. SSL/TLS renegotiation has a known, inherent, vulnerability to DoS attacks that openSSL views as the responsibility of the higher level application to mitigate. TLS_Allow_Renegotiation addresses this issue by making it possible to deny renegotiation requests.

### Note

If you have C policy scripts that incorporate calls to `ec_ssl_renegotiate` please note this behavior. In some circumstances, setting this option to `false` may shut down valid attempts at renegotiation and needlessly drop connections.

This option can be set to the following:

*   `true` – Renegotiations are allowed.

*   `false` – Renegotiations are not allowed at all. When renegotiation is disabled and a renegotiation is attempted from the peer, the openSSL session does not close immediately and waits for the SSL connection to timeout.

**GNUTLS**

When TLS_Engine is set to `gnutls`, this option is supported by the ESMTP listener only.

This option can be set to the following:

*   `true` – Renegotiations are allowed when the Safe Renegotiation extension has been negotiated. For additional details about Safe Renegotiation, see [http://www.gnutls.org/manual/gnutls.html#Safe-renegotiation](http://www.gnutls.org/manual/gnutls.html#Safe-renegotiation).

*   `false` – Renegotiations are not allowed at all.

The default value is `true`.

<a name="idp26930448"></a>
## Scope

`tls_allow_renegotiation` is valid in the ecstream_listener, esmtp_listener, http_listener, pathway, pathway_group and xmpp_listener scopes and the listen and peer scopes within those listeners.

<a name="idp26932416"></a>
## See Also

[tls](config.ref.tls "tls")

| [Prev](config.ref.tls)  | [Up](config.options.ref) |  [Next](config.tls_ca) |
| tls  | [Table of Contents](index) |  tls_ca |

