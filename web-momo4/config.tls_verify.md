| [Prev](config.tls_verified_peer_is_authorized)  | Chapter 72. Configuration Options Reference |  [Next](config.tls_verify_mode) |

<a name="config.tls_verify"></a>
## Name

tls_verify — specify how to handle the remote presented certificate

## Synopsis

`TLS_Verify = "no|ca|host|optional"`

<a name="idp27117136"></a>
## Description

**Configuration Change. ** Support for GNUTLS is available as of version 4.1 for SMTP reception and SMTP deliveries only.

If TLS is set to `required` or `ifavailable` and TLS is negotiated with the remote mail exchange, this option specifies how the remote presented certificate should be handled.

This option can be set to the following:

*   `no` – The certificate will not be checked. Given the number of self-signed certificates used on mail hosts, this setting is probably the most useful.

*   `ca` – The connection will only proceed if the certificate presented is signed by a valid certificate authority listed in the CA list specified by TLS_Ca.

*   `host` – In addition to requiring that the certificate be signed by a valid certificate authority, the common name presented in the certificate must either exactly match the domain or mail exchange to which we are connected. If this verification fails, delivery fails.

*   `optional` – Performs the same verification as the `host` setting but allows delivery if the verification fails.

### Note

For custom behavior create a C module that uses the [outbound_smtp_tls_verify_callback](https://support.messagesystems.com/docs/web-c-api/hooks.core.outbound_smtp_tls_verify_callback) and [inbound_smtp_tls_verify_callback](https://support.messagesystems.com/docs/web-c-api/hooks.core.inbound_smtp_tls_verify_callback) hooks.

The default value is `no`.

<a name="idp27132576"></a>
## Scope

`tls_verify` is valid in the binding, binding_group, domain and global scopes.

| [Prev](config.tls_verified_peer_is_authorized)  | [Up](config.options.ref) |  [Next](config.tls_verify_mode) |
| tls_verified_peer_is_authorized  | [Table of Contents](index) |  tls_verify_mode |

