| [Prev](conf.ref.timestampformat)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.tls_allow_renegotiation.php) |

<a name="conf.ref.tls"></a>
## Name

tls — determine whether to use TLS connection for outbound mail

## Synopsis

`TLS = "no|ifavailable|required"`

<a name="idp12018592"></a>
## Description

**Configuration Change. ** Support for opportunistic TLS is available as of version 3.5.10 for Momentum 3.5 and as of version 3.6.4 for Momentum 3.6.

This directive determines whether or not Transport Layer Security should be used when delivering email. Note that this does not guarantee end-to-end security but only that of the first hop from the MTA.

This option can be set to the following:

*   `no` – Disables the negotiation of TLS for outbound deliveries regardless of whether it is available.

*   `ifavailable` – Enables opportunistic TLS. If the remote mail exchange supports TLS and the TLS negotiation succeeds, the mail will be delivered over TLS.

    *   For versions prior to Momentum 3.5.10 or Momentum 3.6.4 – If the negotiation fails, the message is put back into the delayed queue and retried later.

    *   For versions later than Momentum 3.5.10 or Momentum 3.6.4 – If the negotiation fails, the value of the TLS_Ifavailable_fallback option determines the behavior, which defaults to Momentum immediately trying to send the message as plain-text.

*   `required` – Disables the sending of mail unless a successful TLS negotiation takes place with the remote mail exchange.

The default value is `no`.

<a name="idp12031808"></a>
## Scope

tls is valid in the binding, binding_group, domain, and global scopes.

| [Prev](conf.ref.timestampformat)  | [Up](conf.ref.files.php) |  [Next](conf.ref.tls_allow_renegotiation.php) |
| timestampformat  | [Table of Contents](index) |  tls_allow_renegotiation |
