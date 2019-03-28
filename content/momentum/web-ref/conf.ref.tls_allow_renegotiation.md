|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.tls)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.tls_ca.php) |

<a name="conf.ref.tls_allow_renegotiation"></a>
## Name

tls_allow_renegotiation — whether to enable OpenSSL TLS renegotiation

## Synopsis

`tls_allow_renegotiation = true`

<a name="idp12038640"></a>
## Description

This option determines whether OpenSSL TLS renegotiation is enabled or not. The default value for this option is `true`.

**Configuration Change. ** This option is available as of version 3.5.4.

### Note

SSL/TLS renegotiation has a known, inherent, vulnerability to DoS attacks that openSSL views as the responsibility of the higher level application to mitigate. `tls_allow_renegotiation` addresses this issue by making it possible to deny renegotiation requests.

If you have C policy scripts that incorporate calls to `ec_ssl_renegotiate` please note this new behavior. In some circumstances, setting this option to `false` may shut down valid attempts at renegotiation and needlessly drop connections.

In Centos/RHEL 5, Solaris AMD and SPARC distributions when renegotiation is disabled and a renegotiation is attempted from the peer, the openSSL session doesn't close immediately and waits for the SSL connection to timeout.

<a name="idp12045552"></a>
## Scope

`tls_allow_renegotiation` is valid in the ecstream_listener, esmtp_listener, http_listener, pathway, pathway_group and xmpp_listener scopes and the listen and peer scopes within those listeners.

<a name="idp12047360"></a>
## See Also

[tls](conf.ref.tls "tls")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.tls)  | [Up](conf.ref.files.php) |  [Next](conf.ref.tls_ca.php) |
| tls  | [Table of Contents](index) |  tls_ca |
