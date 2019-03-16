| [Prev](conf.ref.pathway)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.pcre_cache_size.php) |

<a name="conf.ref.pathway_group"></a>
## Name

pathway_group — a container for pathways

<a name="idp10779312"></a>
## Description

### Warning

Currently, ESMTP_Listener options used in the Pathway_Group scope are not recognized by ecelerity. For this reason, do not use Pathway_Group as a configuration container. As a workaround, use the Pathway scope only.

**Configuration Change. ** This feature is available starting from Momentum 3.0.24.

The `Pathway_Group` scope is used to logically group Pathways so that common configuration options need not be repeated throughout a configuration file.

```
Pathway_Group "group1" {
  idle_time = 400
  Pathway "example1" {
    banner_hostname = "example1.mail.server"
  }

  Pathway "example2" {
    banner_hostname = "example2.mail.server"
  }
}
```

In the example above, both Pathways will have the same `idle_time` but different `banner_hostname`s.

<a name="idp10787536"></a>
## Scope

Pathway_Group is valid in the global scope.

Options valid within the Pathway_Group scope are listed in the following section.

<a name="pathway_group-options-table"></a>

**Table 9.32. pathway_group options**

| Option/Description | Default | Scopes |
| --- | --- | --- |
| **[alias_schemes](conf.ref.alias_schemes "alias_schemes")** – Enable named alias expansion schemes |   | domain, global, pathway, pathway_group |
| **[allow_ip_literal](conf.ref.allow_ip_literal "allow_ip_literal")** – Allow IP addresses in email addresses | true | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[allow_null_envelope_sender](conf.ref.allow_null_envelope_sender "allow_null_envelope_sender")** – Allow the null envelope sender in email addresses | true | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[allow_trailing_whitespace_in_commands](conf.ref.allow_trailing_whitespace_in_commands "allow_trailing_whitespace_in_commands")** – Allow trailing white space at the end of an SMTP command | false | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[always_allow](conf.aaa#conf.control_authen.overriding "2.2.2.3. Overriding Authentication")** – When set to true, authentication is considered to have succeeded, unless always_deny is set | false | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[always_deny](conf.aaa#conf.control_authen.overriding "2.2.2.3. Overriding Authentication")** – If set to true, authentication is considered to have failed | false | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[authcrammd5parameters](conf.aaa#conf.inbound-auth.cram-md5 "2.2.1.2. CRAM-MD5 authentication")** – Configure CRAM-MD5 authentication |   | control_listener, esmtp_listener, listen, pathway, pathway_group |
| **[authdigestmd5parameters](conf.aaa#conf.inbound-authdigest-md5 "2.2.1.1. DIGEST-MD5 Authentication")** – Configure DIGEST-MD5 authentication |   | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[authloginparameters](conf.aaa#conf.control_authen.clear.text "2.2.2.1. Clear Text LOGIN authentication for a Control_Listener")** – Configure clear text login authentication |   | control_listener, esmtp_listener, listen, pathway, pathway_group |
| **[authplainparameters](conf.aaa#conf.inbound-auth.plain.text "2.2.1.4. Plain Text Authentication")** – Configure plain text login authentication |   | esmtp_listener, http_listener, listen, pathway, pathway_group, xmpp_listener |
| **[banner_hostname](ecelerity.conf#ecelerity.conf3.listener.options.banner_hostname)** – Specifies the banner hostname that will be displayed to the remote client upon connecting |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[bounce_domains](conf.ref.bounce_domains "bounce_domains")** – Configure the list of domains eligible for bounce processing |   | global, pathway, pathway_group |
| **[context](ecelerity.conf#ecelerity.conf3.listener.options.context)** – Use to set arbitrary connection context key value pairs |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[default_charset](conf.ref.default_charset "default_charset")** – Control the character set | us-ascii | global, pathway, pathway_group |
| **[disable_chunked](https://support.messagesystems.com/docs/web-mobility/mobility.mm7.listener)** – An option used with aggregators who do not support chunked transfer-coding (Mobile Momentum) | false | http_listener, listen, pathway, pathway_group, peer |
| **[domain_for_unqualified_recipient_addresses](conf.ref.domain_for_unqualified_recipient_addresses "domain_for_unqualified_recipient_addresses")** – Configure a domain which will be used to resolve delivery for unqualified addresses |   | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[domain_for_unqualified_sender_address](conf.ref.domain_for_unqualified_sender_address "domain_for_unqualified_sender_address")** – Configure a domain which will be used to substitute for unqualified sender addresses |   | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[ecstream_idle_time](ecelerity.conf#ecelerity.conf.ecstream_listener "ECStream_Listener")** – The number of seconds of inactivity before a client is disconnected (ECStream only) | 300 | ecstream_listener, listen, pathway, pathway_group, peer |
| **[ecstream_max_batch_size](ecelerity.conf#ecelerity.conf.ecstream_listener "ECStream_Listener")** – The maximum number of ECStream messages to accept before dropping back into the scheduler (ECStream only) | 10000 | ecstream_listener, listen, pathway, pathway_group, peer |
| **[enable_authentication](conf.ecelerity.conf#conf.inbound-mail "2.1.2. Configuring Inbound Mail Service and a Control Listener")** – Whether or not to enable authentication |   | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[generate_bounces_for_multi_recipient_policy_rejections](conf.ref.generate_bounces_for_multi_recipient_policy_rejections "generate_bounces_for_multi_recipient_policy_rejections")** – Generate MDNs after reception for policy rejections | true | global, pathway, pathway_group |
| **[idle_time](ecelerity.conf#ecelerity.conf3.listener.options.idle_time)** – The number of seconds of inactivity before a client is disconnected | 0 | esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[inbound_throttle_messages](conf.ref.inbound_throttle_messages "inbound_throttle_messages")** – Rate limit inbound mail |   | global, pathway, pathway_group |
| **[listener_sessions](ecelerity.conf#ecelerity.conf3.listener.options.listener_sessions)** – Specifies the maximum number of concurrent sessions that can be established to a listener | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[log_requests_to_paniclog](https://support.messagesystems.com/docs/web-rest-injector/rest.http_listener)** – Whether to log REST injection requests | false | http_listener, listen, pathway, pathway_group, peer |
| **[max_message_size](ecelerity.conf#ecelerity.conf3.listener.options.max_message_size)** – The maximum number of bytes allowed in a single message | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[max_receptions_per_connection](ecelerity.conf#ecelerity.conf3.listener.options.max_receptions_per_connection)** – The maximum number of messages allowed in a single session | 0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[max_recipients_per_message](ecelerity.conf#ecelerity.conf3.listener.options.max_recipients_per_message)** – The maximum number of recipients allowed in a message | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[max_request_size](https://support.messagesystems.com/docs/web-rest-injector/rest.http_listener)** – Limit the size of an HTTP request |   | http_listener, listen, pathway, pathway_group, peer |
| **[mcmt_reception](https://support.messagesystems.com/docs/web-mobility/mm7.mcmt_reception)** – Configure a listener to accept the Multi-Channel Message Type (Mobile Momentum) | passthru | esmtp_listener, listen, pathway, pathway_group, peer |
| **[open_relay](ecelerity.conf#ecelerity.conf3.listener.options.open_relay)** – Whether the MTA is an open relay or not | false | esmtp_listener, listen, pathway, pathway_group, peer |
| **[pathway](conf.ref.pathway "pathway")** *(scope)* – A grouping of inbound configuration options |   | global, pathway_group |
| **[received_hostname](ecelerity.conf#ecelerity.conf3.listener.options.received_hostname)** – The hostname that is placed in the received headers |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[relay_domains](conf.ref.relay_domains "relay_domains")** – Configure the list of domains for which Momentum relays mail |   | global, pathway, pathway_group |
| **[relay_for_sending_domains](ecelerity.conf#ecelerity.conf3.listener.options.relay_for_sending_domains)** – Domains that may use the MTA as a relay |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[relay_hosts](conf.ref.relay_hosts "relay_hosts")** – Configure the list of hosts for which Momentum relays mail |   | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[require_ehlo](conf.ref.require_ehlo "require_ehlo")** – Reject mail from clients that do not say HELO | false | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope "rfc2821_allow_whitespace_in_envelope")** – Permit trailing white space before the final CRLF | false | global, pathway, pathway_group |
| **[rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules "rfc2821_pedantic_address_rules")** – Allow relaxation of enforcement of the rfc2821 address rules | true | global, pathway, pathway_group |
| **[rfc2822_date_header](conf.ref.rfc2822_date_header "rfc2822_date_header")** – Allow relaxation of enforcement of the rfc2822 address rules | ifneeded | global, pathway, pathway_group |
| **[rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body")** – Allow relaxation of enforcement of the rfc2822 address rules | ignore | global, pathway, pathway_group |
| **[rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers "rfc2822_lone_lf_in_headers")** – Allow relaxation of enforcement of the rfc2822 address rules | pedantic | global, pathway, pathway_group |
| **[rfc2822_max_line_length](conf.ref.rfc2822_max_line_length "rfc2822_max_line_length")** – Allow relaxation of enforcement of the rfc2822 address rules | ignore | global, pathway, pathway_group |
| **[rfc2822_max_line_length_policy](conf.ref.rfc2822_max_line_length_policy "rfc2822_max_line_length_policy")** – Determine how non-RFC-compliant line lengths are handled | none | global, pathway, pathway_group |
| **[rfc2822_messageid_header](conf.ref.rfc2822_messageid_header "rfc2822_messageid_header")** – Allow relaxation of enforcement of the rfc2822 address rules | ifneeded | global, pathway, pathway_group |
| **[rfc2822_missing_headers](conf.ref.rfc2822_missing_headers "rfc2822_missing_headers")** – Allow relaxation of enforcement of the rfc2822 address rules | reject | global, pathway, pathway_group |
| **[rfc2822_trace_headers](conf.ref.rfc2822_trace_headers "rfc2822_trace_headers")** – Allow relaxation of enforcement of the rfc2822 address rules | true | global, pathway, pathway_group |
| **[service_sessions](ecelerity.conf#ecelerity.conf3.listener.options.service_sessions)** – The maximum number of concurrent sessions that can be established to all listeners | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[smtp_extensions](ecelerity.conf#ecelerity.conf3.extensions "SMTP Extensions")** – Array of SMTP extensions |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[starttls_injection_policy](conf.ref.starttls_injection_policy "starttls_injection_policy")** – Protect against SMTP injections prior to TLS | reject | esmtp_listener, listen, pathway, pathway_group, peer |
| **[static_banner](ecelerity.conf#ecelerity.conf3.listener.options.static_banner)** – The banner that is displayed to the remote client |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[tls_allow_renegotiation](conf.ref.tls_allow_renegotiation "tls_allow_renegotiation")** – Whether to enable OpenSSL TLS renegotiation | true | ecstream_listener, esmtp_listener, http_listener, listen, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_certificate](conf.ref.tls_certificate "tls_certificate")** – Certificate to use for inbound and outbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_ciphers](conf.ref.tls_ciphers "tls_ciphers")** – Allowable ciphers for a TLS session |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_client_ca](conf.ref.tls_client_ca "tls_client_ca")** – Certificate authority for inbound mail |   | ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_key](conf.ref.tls_key "tls_key")** – the TLS key to use for outbound mail or inbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_protocols](conf.ref.tls_protocols "tls_protocols")** – Allowable ciphers for TLS inbound and outbound sessions |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer |
| **[tls_verified_peer_can_relay](ecelerity.conf#ecelerity.conf3.listener.options "Listener Options")** – Verification that peer can relay | false | ecstream_listener, esmtp_listener, listen, pathway, pathway_group, peer |
| **[tls_verify_mode](conf.ref.tls_verify_mode "tls_verify_mode")** – Determine whether a TLS certificates is required |   | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[use_ssl](ecelerity.conf#ecelerity.conf3.listener.options.use_ssl)** – Whether to use SSL verification | false | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |

<a name="idp10973296"></a>
## See Also

[pathway](conf.ref.pathway "pathway")

| [Prev](conf.ref.pathway)  | [Up](conf.ref.files.php) |  [Next](conf.ref.pcre_cache_size.php) |
| pathway  | [Table of Contents](index) |  pcre_cache_size |
