| [Prev](conf.ref.tls_verify)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.trace_smtp_mode.php) |

<a name="conf.ref.tls_verify_mode"></a>
## Name

tls_verify_mode — determine whether a TLS certificate is required

## Synopsis

`TLS_Verify_Mode = "none|require"`

<a name="idp12256496"></a>
## Description

This option determines whether a TLS certificate is required for inbound mail, *if* TLS is started. *It is not a means for requiring TLS* .

Momentum does have an authentication hook (core_validate_auth_hook) for Lua and Sieve scripts to handle authentication results. Additionally, if the connection has been upgraded to TLS, the vctx will contain the key `tls` with a value of `on`. Using these two methods, you should be able to require successful authentication and a TLS connection.

This option can be set to the following:

*   `none` – No client certificate is required, and any certificate presented is ignored. If an invalid certificate is presented, no action is taken.

*   `require` – A client certificate is required, and it will be verified. If an invalid certificate is presented, the policy scripts determine the action taken.

*   *not specified*           – A client certificate is optional, and any certificate presented will be verifed. However, there is no built-in action based on whether the certificate passes or fails verification. The policy scripts determine the action taken.

By default, this option is not specified.

<a name="idp12266608"></a>
## Scope

`tls_verify_mode` is valid in the listener, listen, peer and pathway scopes.

| [Prev](conf.ref.tls_verify)  | [Up](conf.ref.files.php) |  [Next](conf.ref.trace_smtp_mode.php) |
| tls_verify  | [Table of Contents](index) |  trace_smtp_mode |
