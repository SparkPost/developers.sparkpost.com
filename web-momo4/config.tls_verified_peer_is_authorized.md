| [Prev](config.tls_protocols)  | Chapter 72. Configuration Options Reference |  [Next](config.tls_verify) |

<a name="config.tls_verified_peer_is_authorized"></a>
## Name

tls_verified_peer_is_authorized — Marks requests that use a verified SSL Client certificate as being authorized

## Synopsis

`TLS_Verified_Peer_Is_Authorized = "true|false"`

<a name="idp27104800"></a>
## Description

This option marks requests that use a verified SSL Client certificate as being authorized.

The default value is `false`.

<a name="idp27107600"></a>
## Scope

`tls_verified_peer_is_authorized` is valid in the http_listener, listen, pathway, and peer scopes.

| [Prev](config.tls_protocols)  | [Up](config.options.ref) |  [Next](config.tls_verify) |
| tls_protocols  | [Table of Contents](index) |  tls_verify |

