| [Prev](implementing.policy.scriptlets)  | Part IX. Writing Policy |  [Next](policy.context-mess) |
## Chapter 63. Validation Context Variables
**Table of Contents**

* [63.1\. Connection Context Variables](policy.context.variables#policy.predefined-context-conn)
* [63.2\. Message Context Variables](policy.context-mess)

As mentioned in [Section 62.1, “Validation and the Validation Context”](policy#policy.validation "62.1. Validation and the Validation Context"), context variables play a significant role when policy is enforced using scripts. In addition to user-defined variables, there are predefined validation context variables accessible in both the connection context and the message context. Not all context variables will be set in all cases; some, for example, depend on TLS settings and others on which modules are loaded into Momentum. Some context variables are defined in a global scope and some in a module scope.
## 63.1. Connection Context Variables
Connection context variables are set upon the creation of a successful connection and contain information regarding the remote client. Connection context variables are predefined, either in a global context or within a module. The following tables list the global and module-specific variables.
### 63.1.1. Global Predefined Connection Context Variables
This table lists all connection context variables that are predefined globally by Momentum.
<a name="predefined-context-conn-global"></a>
**Table 63.1. Global Predefined Connection Context Variables**
| Connection Context Variable | Description |
| --- | --- |
| [auth_name](inbound_smtp "19.5. ESMTP_Listener Authentication") – Type of authentication | 
Description of the form of authentication that was attempted (e.g. PLAIN, LOGIN, CRAM-MD5, DIGEST-MD5).
This variable is available as of the [validate_auth](https://support.messagesystems.com/docs/web-c-api/hooks.core.validate_auth) hook. For scripting, use the `core_validate_auth_hook` callout.
 |
| [auth_status](inbound_smtp "19.5. ESMTP_Listener Authentication") – Authentication status | 
When an SMTP client performs an SMTP AUTH action, `auth_status` cwill be set to one of "pass", "fail", or "error".
This variable is available as of the [validate_auth](https://support.messagesystems.com/docs/web-c-api/hooks.core.validate_auth) hook. For scripting, use the `core_validate_auth_hook` callout.
 |
| [auth_user](inbound_smtp "19.5. ESMTP_Listener Authentication") – Authenticated username | 
When an SMTP client performs an SMTP AUTH action, `auth_user` will be set to the username used during authorization.
This variable is available as of the [validate_auth](https://support.messagesystems.com/docs/web-c-api/hooks.core.validate_auth) hook. For scripting, use the `core_validate_auth_hook` callout.
 |
| [can_relay](inbound_smtp "19.5. ESMTP_Listener Authentication") – Whether relaying is allowed | 
When an SMTP client is allowed to relay through Momentum because of an entry in [`relay_hosts`](conf.ref.relay_hosts "relay_hosts") or a relaying declaration in an ESMTP_Listener IP access control list, `can_relay` is set to "true".
Accessible as of the [config_get_domain_relay](https://support.messagesystems.com/docs/web-c-api/hooks.core.config_get_domain_relay) hook.
 |
| connection_message_count – Number of messages on the connection |  |
| connection_rcpt_count – Number of recipients on the connection | 
This variable counts the *total* number of RCPT TOs on this open connection, while `message_rcpt_count` counts the number of RCPT TOs since the last MAIL FROM.
 |
| ehlo_domain – Domain from the EHLO phase | 
Accessible as of the EHLO phase.
 |
| ehlo_string – Complete EHLO string | 
Accessible as of the EHLO phase.
 |
| message_rcpt_count – Number of recipients for the current message | 
Since a given message "object" can only have one recipient, multiple recipients are a property of the current session and are tracked at the connection level not the message level. This variable counts the number of RCPT TOs since the last MAIL FROM, while `connection_rcpt_count` counts the *total* number of RCPT TOs on this open connection.
Accessible as of the [validate_data_spool_each_rcpt](https://support.messagesystems.com/docs/web-c-api/hooks.core.validate_data_spool_each_rcpt) hook.
 |
| tls – Whether TLS is in use |   |
| tls_cipher – Identifies the cipher in use for a TLS enabled session | 
Accessible from the [outbound_tls_ciphers](https://support.messagesystems.com/docs/web-c-api/hooks.core.outbound_tls_ciphers) hook.
 |
| tls_cipher_algbits – Number of bits the algorithm is based on | 
For example, `128`.
 |
| tls_cipher_usebits – Number of bits used | 
For example, `40`.
 |
| tls_client_cert_subject – Holds the subject of the peer certificate for a TLS enabled session |   |
| tls_client_cert_subject_cn – Common name of the subject of the peer certificate |   |
| tls_client_cert_issuer – Holds the issuer of the peer certificate for a TLS enabled session |   |
| tls_client_cert_issuer_cn – Common name of the issuer of the peer certificate |   |
| tls_client_verified | 
Set to the string `yes` if the peer certificate was verified against the configured Certificate Authorities.
 |
### 63.1.2. Predefined Module-Specific Connection Context Variables
Modules that support predefined module-specific connection context variables are listed below:
*   [conntrol – Fine-Grained Connection Control](modules.conntrol#modules.conntrol.context.variables "71.22.2. Connection Context Variables")
*   [mail_loop – Mail Loop Detection](modules.mail_loop#modules.mail_loop.context.variables "71.45.2. Connection Context Variables")

| [Prev](implementing.policy.scriptlets)  | [Up](p.policy) |  [Next](policy.context-mess) |
| 62.2. Policy Scriptlets  | [Table of Contents](index) |  63.2. Message Context Variables |
