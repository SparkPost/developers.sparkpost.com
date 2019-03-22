| [Prev](conf.ref.tls_protocols)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.tls_verify_mode.php) |

<a name="conf.ref.tls_verify"></a>
## Name

tls_verify — specify how to handle the remote presented certificate

## Synopsis

`tls_verify = "no"`

<a name="idp12175616"></a>
## Description

If TLS is set to `required` or `ifavailable` and TLS is negotiated with the remote mail exchange, this option will specify how the remote presented certificate should be handled. If this option is set to `no`, then no checking of the certificate will be performed. Given the number of self-signed certificates used on mail hosts, this setting is probably the most useful. If this setting is `ca`, then the connection will only proceed if the certificate presented is signed by a valid certificate authority listed in the CA list specified by TLS_CA. If this setting is `host`, then in addition to requiring that the certificate be signed by a valid certificate authority, the common name presented in the certificate must either exactly match the domain or mail exchange to which we are connected.

### Note

For custom behavior create a C module that uses the outbound_smtp_tls_verify_callback and inbound_smtp_tls_verify_callback hooks. For more information see [outbound_smtp_tls_verify_callback](https://support.messagesystems.com/docs/web-c-api/hooks.core.outbound_smtp_tls_verify_callback) and [inbound_smtp_tls_verify_callback](https://support.messagesystems.com/docs/web-c-api/hooks.core.inbound_smtp_tls_verify_callback.php).

The default value is `no`.

<a name="idp12183904"></a>
## Scope

`tls_verify` is valid in the binding, binding_group, domain and global scopes.

| [Prev](conf.ref.tls_protocols)  | [Up](conf.ref.files.php) |  [Next](conf.ref.tls_verify_mode.php) |
| tls_protocols  | [Table of Contents](index) |  tls_verify_mode |
