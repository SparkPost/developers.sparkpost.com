|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.dns_fallback_to_tcp)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.domain_for_unqualified_recipient_addresses.php) |

<a name="conf.ref.domain"></a>
## Name

domain — configure domain specific options

<a name="idp9048784"></a>
## Description

```
domain "example.com" {
  # domain specific settings
}

binding example {
  domain "example.com" {
    # domain specific settings for the "example" binding
  }
}
```

Use the `domain` stanza to define per-domain configuration options. `domain` stanzas can be nested beneath `binding` stanzas creating a binding:domain configuration.

In addition to defining domain stanzas using domain names, you can also use IP addresses, for example `domain "192.0.43.10" { }`. When declaring IPv6 domains use the following syntax:

```
domain "[IPv6:fd82:7796:815b:be0:222:19ff:fe52:3629]" {
  # domain specific settings
}
```

<a name="conf.ref.domain.regex"></a>**Regex Domains. ** In addition to specifying a domain by domain name, you may use Perl compatible regular expression syntax to define a "Regex Domain". Using regex domains you can define common rules for domains that have similar configurations, without needing to specify the rules for every possible matching domain.

```
domain "example.com" {
  max_outbound_connections = 20
}

domain "/(?:^|[.])example[.](?:com|co[.]uk)$/" {
  max_outbound_connections = 15
  max_deliveries_per_connection = 5
}
```

In the example above, mail for `example.com` will use no more than 20 connections, and will send no more than 5 messages on a given connection before tearing it down. Mail for `example.co.uk` will have `max_deliveries_per_connection` set to 5 and `max_outbound_connections` set to 15, as would mail for any sub-domain of `example.com` or `example.co.uk`.

Option resolution will always match a value defined in a normal `domain` stanza before looking for a matching regex domain stanza in the same container, which is why `example.com` would have max_outbound_connections set to 20, despite it being set to 15 in the regex domain stanza that matches.

If multiple regex domain stanzas are declared in the same container, then normal domain stanzas are checked first before finding a match from the regex domain stanzas in the order that the regex domain stanzas were declared in the configuration file.

### Note

You almost always want to anchor the start and end of your regular expressions when using them for regex domains, otherwise they will perform substring matching which might have unexpected side effects, such as matching subdomains of "bad guy" domains and routing unwanted mail via trusted interfaces.

For domain naming when using Momentum Mobile, see [Multi-protocol Domain Naming](https://support.messagesystems.com/docs/web-mobility/mobility.mm7.multiprotocol).

<a name="idp9066288"></a>
## Scope and Valid Options

`domain` is valid in the binding, binding_group and global scopes.

<a name="idp9068352"></a>
## Options Valid in the domain Scope

The options valid in the `domain` scope are as follows:

<a name="domain-options-table"></a>

**Table 9.30. domain options**

| Option/Description | Default | Scopes |
| --- | --- | --- |
| **[adaptive_adjustment_interval](modules.adaptive#modules.adaptive.adaptive_adjustment_interval)** – Throttle the adaptive adjustment interval | 60 | binding, binding_group, domain, global |
| **[adaptive_alert_email_destination](modules.adaptive#modules.adaptive.adaptive_alert_email_destination)** – The address where adaptive alerts should be sent |   | binding, binding_group, domain, global |
| **[adaptive_alert_email_sender](modules.adaptive#modules.adaptive.adaptive_alert_email_sender)** – Set the sender address of the alert email | NULL | binding, binding_group, domain, global |
| **[adaptive_attempt_threshold](modules.adaptive#modules.adaptive.adaptive_attempt_threshold)** – The minimum delivery attempts over a period during which bounce stats are collected and suspensions attempted | 2000 | binding, binding_group, domain, global |
| **[adaptive_body_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_default_suspension](modules.adaptive#modules.adaptive.adaptive_default_suspension)** – The amount of time to suspend a domain | 4 hours | binding, binding_group, domain, global |
| **[adaptive_default_suspension_enabled](modules.adaptive#modules.adaptive.adaptive_default_suspension_enabled)** – Enables and disables adaptive_rejection_rate_suspension_percentage | false | binding, binding_group, domain, global |
| **[adaptive_ehlo_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_enabled](conf.ref.adaptive_enabled "adaptive_enabled")** – Whether to enable the adaptive module for a specific scope | false | binding, binding_group, domain, global |
| **[adaptive_fbl_volume_threshold](modules.adaptive#modules.adaptive.adaptive_fbl_volume_threshold "14.2.5.2.4. adaptive_fbl_volume_threshold and adaptive_attempt_threshold")** – The minimum total delivered mail count over a period during which FBL stats are collected | 20000 | binding, binding_group, domain, global |
| **[adaptive_idle_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_mailfrom_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_deliveries_per_connection](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_outbound_connections](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_recipients_per_batch](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_recipients_per_connection](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_resident_active_queue](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_retries](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_retry_interval](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_notification_events](modules.adaptive#modules.adaptive.adaptive_notification_events)** – Configure the events that will trigger an email notification | throttle suspension blackhole | binding, binding_group, domain, global |
| **[adaptive_notification_events](modules.adaptive#modules.adaptive.adaptive_notification_events)** – Configure the events that will trigger an email notification | throttle suspension blackhole | binding, binding_group, domain, global |
| **[adaptive_notification_interval](modules.adaptive#modules.adaptive.adaptive_notification_interval)** – The throttle for adaptive alert notification emails | 3600 | binding, binding_group, domain, global |
| **[adaptive_outbound_throttle_messages](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_positive_adjustment_interval](modules.adaptive#modules.adaptive.adaptive_positive_adjustment_interval)** – Throttle positive adjustments to adaptive changes | 3600 | binding, binding_group, domain, global |
| **[adaptive_rcptto_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_rejection_rate_suspension_percentage](modules.adaptive#modules.adaptive.adaptive_rejection_rate_suspension_percentage)** – The rate at which messages are rejected | 20 | binding, binding_group, domain, global |
| **[adaptive_retry_fuzz](modules.adaptive#modules.adaptive.adaptive_retry_fuzz)** – Allow greater control over bulk message retries in cases where all messages for a domain have to be retried | 4096 | binding, binding_group, domain, global |
| **[adaptive_retry_interval](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_rset_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains")** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_scope](conf.ref.adaptive_scope "adaptive_scope")** – Define the scope applicable to adaptive delivery | auto | binding, binding_group, domain, global |
| **[adaptive_sweep_rule](modules.adaptive#modules.adaptive.adaptive_sweep_rule "14.2.5.2. adaptive_sweep_rule Scope")** *(scope)* – Set the thresholds and actions for adaptive fbl and bounce rules |   | binding, binding_group, domain, global |
| **[adaptive_sweep_rule_enabled](modules.adaptive#modules.adaptive.adaptive_sweep_rule_enabled "14.2.5.2.3. The adaptive_sweep_rule_enabled Option")** – Enable or disable adaptive_sweep_rule in a specified scope | 1 | binding, binding_group, domain, global |
| **[alias_schemes](conf.ref.alias_schemes "alias_schemes")** – Enable named alias expansion schemes |   | domain, global, pathway, pathway_group |
| **[apn_expiry](https://support.messagesystems.com/docs/web-push/apns.apn_expiry)** – Define the number of seconds after which an APNs notification is no longer valid | yes | binding, binding_group, domain, global |
| **[blackhole](conf.ref.blackhole "blackhole")** – Blackhole mail | false | binding, binding_group, domain, global |
| **[body_timeout](conf.ref.body_timeout "body_timeout")** – Network timeout once the DATA phase is complete | 600 | binding, binding_group, domain, global |
| **[bounce_behavior](conf.ref.bounce_behavior "bounce_behavior")** – Configure the action taken when a message is classified as a bounce | pass | domain, global |
| **[bounce_pattern](conf.ref.bounce_pattern "bounce_pattern")** – Configure the pattern that inbound email addresses must match to be considered bounces |   | domain, global |
| **[bounces_inline_original](conf.ref.bounces_inline_original "bounces_inline_original")** – How much of the original message to include in MDNs | headers | binding, binding_group, domain, global |
| **[cluster_max_outbound_connections](conf.ref.cluster_max_outbound_connections "cluster_max_outbound_connections")** – Set the maximum number of outbound connections for a domain | -1 | binding, domain, global, host |
| **[cluster_outbound_throttle_connections](conf.ref.cluster_outbound_throttle_connections "cluster_outbound_throttle_connections")** – Limit the rate at which connections are established |   | binding_group, domain, global |
| **[cluster_outbound_throttle_messages](conf.ref.cluster_outbound_throttle_messages "cluster_outbound_throttle_messages")** – Limit the rate at which messages are delivered |   | binding_group, domain, global |
| **[cluster_scope_max_outbound_connections](conf.ref.cluster_scope_max_outbound_connections "cluster_scope_max_outbound_connections")** – Provide traffic shaping for outbound connections |   | binding, binding_group, domain, global, host |
| **[connect_timeout](conf.ref.connect_timeout "connect_timeout")** – Set the connection timeout | 300 | binding, binding_group, domain, global |
| **[connect_timeout_to_delay](conf.ref.connect_timeout_to_delay "connect_timeout_to_delay")** – Time interval before moving mail into the delayed queue | 900 | binding, binding_group, domain, global |
| **[connection_allocation_aggressiveness](conf.ref.connection_allocation_aggressiveness "connection_allocation_aggressiveness")** – Tune the aggressiveness for establishing new connections to domains | normal | binding, binding_group, domain, global |
| **[delay_dsn_max_retry_interval](conf.ref.delay_dsn_max_retry_interval "delay_dsn_max_retry_interval")** – Maximum interval for sending DSNs to the sender of a message that has not yet been delivered | 43200 | binding, binding_group, domain, global |
| **[delay_dsn_retry_interval](conf.ref.delay_dsn_retry_interval "delay_dsn_retry_interval")** – Base interval for sending DSNs to the sender of a message that has not yet been delivered | 3600 | binding, binding_group, domain, global |
| **[delivery_method](conf.ref.delivery_method "delivery_method")** – Set the delivery method | ESMTP, SMTP | binding, binding_group, domain, global |
| **[delivery_response_timeout](conf.ref.delivery_response_timeout "delivery_response_timeout")** – Time to wait for a response to an outbound request | 5000 | binding, domain, global |
| **[dkim](conf.ref.dkim "dkim")** – Enable or disable signing messages |   | binding, binding_group, domain, global |
| **[dns_failures_to_purge](conf.ref.dns_failures_to_purge "dns_failures_to_purge")** – Configure the maximum number of DNS lookups | 10 | domain, global |
| **[domainkeys](conf.ref.domainkeys "domainkeys")** – Enable or disable domainkeys signing |   | binding, binding_group, domain, global |
| **[drop_body_after_trans_fail](conf.ref.drop_body_after_trans_fail "drop_body_after_trans_fail")** – Number of retry attempts before freeing message memory | 3 | binding, binding_group, domain, global |
| **[ecstream_port](conf.ref.ecstream_port "ecstream_port")** – Configure the port for ecstream deliveries | 1825 | binding, binding_group, domain, global |
| **[ecstream_timeout](conf.ref.ecstream_timeout "ecstream_timeout")** – The amount of time to wait for an ecstream connection to be established | 600 | binding, binding_group, domain, global |
| **[ehlo_hostname](conf.ref.ehlo_hostname "ehlo_hostname")** – Set the hostname used for EHLO in outbound mail | __hostname__ | binding, binding_group, domain, global |
| **[ehlo_timeout](conf.ref.ehlo_timeout "ehlo_timeout")** – Network timeout for EHLO | 300 | binding, binding_group, domain, global |
| **[enable_fbl_header_insertion](conf.ref.enable_fbl_header_insertion "enable_fbl_header_insertion")** – Enable or disable fbl header insertion |   | binding, binding_group, domain, global |
| **[exclude_vctx](conf.ref.exclude_vctx "exclude_vctx")** – Exclude validation connection context keys from being journaled in the spool metadata |   | binding, binding_group, domain, global |
| **[exclude_vctx](conf.ref.exclude_vctx "exclude_vctx")** – Exclude validation message context keys from being journaled in the spool metadata |   | binding, binding_group, domain, global |
| **[fully_resolve_before_smtp](conf.ref.fully_resolve_before_smtp "fully_resolve_before_smtp")** – Resolve all MX and A records before attempting delivery | true | binding, binding_group, domain, global |
| **[gateway](conf.ref.gateway "gateway")** – Configure a static SMTP route for mail |   | binding, binding_group, domain, global |
| **[gcm_application_id](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_application_id)** – Define the package name of the Android application allowed to received notifications |   | binding, binding_group, domain, global |
| **[gcm_authorization_token_id](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_authorization_token_id)** – The authorization token that permits sending Google push notifications |   | binding, binding_group, domain, global |
| **[gcm_delay_while_idle](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_delay_while_idle)** – Whether or not to send the notification immediately if a device is idle | false | binding, binding_group, domain, global |
| **[gcm_dry_run](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_dry_run)** – Test a request without actually sending a message | false | binding, binding_group, domain, global |
| **[gcm_ttl](https://support.messagesystems.com/docs/web-push/push.gcm.ttl)** – Default Time To Live for notifications | -1 | binding, binding_group, domain, global |
| **[generate_bounces](conf.ref.generate_bounces "generate_bounces")** – Generate MDNs if mail is failed after reception | true | binding, binding_group, domain, global |
| **[generate_delay_dsn](conf.ref.generate_delay_dsn "generate_delay_dsn")** – Generate DSNs if mail is delayed | false | binding, binding_group, domain, global |
| **[host_failure_retry](conf.ref.host_failure_retry "host_failure_retry")** – Time to wait before attempting a retry | 120 | domain, global |
| **[http_basic_auth](conf.ref.http_basic_auth "http_basic_auth")** – Define the user credentials when using basic HTTP authentication |   | binding, binding_group, domain, global |
| **[http_host](conf.ref.http_host "http_host")** – Define the HTTP host |   | binding, binding_group, domain, global |
| **[http_method](conf.ref.http_method "http_method")** – Define the HTTP method to use | POST | binding, binding_group, domain, global |
| **[http_uri](conf.ref.http_uri "http_uri")** – Define the HTTP URI that you wish to connect to |   | binding, binding_group, domain, global |
| **[http_version](conf.ref.http_version "http_version")** – Define the HTTP version to use | 1.1 | binding, binding_group, domain, global |
| **[idle_timeout](conf.ref.idle_timeout "idle_timeout")** – Time to maintain idle outbound connections | 5 | binding, binding_group, domain, global |
| **[lmtp_port](conf.ref.lmtp_port "lmtp_port")** – Configure the port for LMTP deliveries | 2003 | binding, binding_group, domain, global |
| **[mailerdaemon](conf.ref.mailerdaemon "mailerdaemon")** – Set the From: address for MDNs |   | binding, binding_group, domain, global |
| **[mailfrom_timeout](conf.ref.mailfrom_timeout "mailfrom_timeout")** – Timeout after MAIL FROM | 300 | binding, binding_group, domain, global |
| **[max_deliveries_per_connection](conf.ref.max_deliveries_per_connection "max_deliveries_per_connection")** – Maximum number of messages to deliver before closing a connection | 0 | binding, binding_group, domain, global |
| **[max_outbound_connections](conf.ref.max_outbound_connections "max_outbound_connections")** – Set the maximum number of outbound connections | 32 | binding, binding_group, domain, global, host |
| **[max_recipients_per_batch](conf.ref.max_recipients_per_batch "max_recipients_per_batch")** – The maximum number of recipients to send in a single outbound message transaction | 100 | binding, binding_group, domain, global |
| **[max_recipients_per_connection](conf.ref.max_recipients_per_connection "max_recipients_per_connection")** – The maximum number of recipients to send on a connection | 0 | binding, binding_group, domain, esmtp_listener, global, listen, peer |
| **[max_resident_active_queue](conf.ref.max_resident_active_queue "max_resident_active_queue")** – Threshold above which messages are not held in memory | 250 | binding, binding_group, domain, global |
| **[max_retries](conf.ref.max_retries "max_retries")** – Override the system configured max_retries |   | binding, binding_group, domain, global |
| **[max_retry_interval](conf.ref.max_retry_interval "max_retry_interval")** – Maximum retry interval | 43200 | binding, binding_group, domain, global |
| **[mdn_failures_notify](conf.ref.mdn_failures_notify "mdn_failures_notify")** – Mailbox to which to send null recipient MDNs |   | binding, binding_group, domain, global |
| **[message_expiration](conf.ref.message_expiration "message_expiration")** – Time to live for messages | 86400 | binding, binding_group, domain, global |
| **[mx_failures_fallback_to_a](conf.ref.mx_failures_fallback_to_a "mx_failures_fallback_to_a")** – Configure the maximum number of times an MX lookup will be attempted | 3 | domain, global |
| **[mx_failures_to_delay](conf.ref.mx_failures_to_delay "mx_failures_to_delay")** – Number of consecutive failures before a domain is auto-delayed | 50 | domain, global |
| **[never_attempt_expired_messages](conf.ref.never_attempt_expired_messages "never_attempt_expired_messages")** – Never attempt delivery of expired messages | false | binding, binding_group, domain, global |
| **[never_retry](conf.ref.never_retry "never_retry")** – Whether or not to retry delivery of failed messages | false | binding, binding_group, domain, global |
| **[opendkim_sign](conf.ref.opendkim_sign "opendkim_sign")** – Whether or not to enable OpenDKIM signing | true | binding, binding_group, domain, global |
| **[outbound_throttle_connections](conf.ref.outbound_throttle_connections "outbound_throttle_connections")** – Limit the rate at which connections are established |   | binding, binding_group, domain, global |
| **[outbound_throttle_messages](conf.ref.outbound_throttle_messages "outbound_throttle_messages")** – Limit the rate at which messages are delivered |   | binding, binding_group, domain, global |
| **[rcptto_timeout](conf.ref.rcptto_timeout "rcptto_timeout")** – Timeout after RCPT TO | 300 | binding, binding_group, domain, global |
| **[remote_smtp_port](conf.ref.remote_smtp_port "remote_smtp_port")** – Set the port to be used for SMTP deliveries | 25 | binding, binding_group, domain, global |
| **[response_transcode_pattern](conf.ref.response_transcode_pattern "response_transcode_pattern")** – The regex pattern for comparison to a server response |   | binding, binding_group, domain, global |
| **[response_transcode_replace](conf.ref.response_transcode_replace "response_transcode_replace")** – The replacement string for a server response |   | binding, binding_group, domain, global |
| **[retry_interval](conf.ref.retry_interval "retry_interval")** – Base retry interval | 1200 | binding, binding_group, domain, global |
| **[routes](conf.ref.routes "routes")** – Configure message routing |   | domain, global |
| **[rset_timeout](conf.ref.rset_timeout "rset_timeout")** – Set the timeout after RSET | 30 | binding, binding_group, domain, global |
| **[scope_max_outbound_connections](conf.ref.scope_max_outbound_connections "scope_max_outbound_connections")** – Provide traffic shaping for outbound connections |   | binding, binding_group, domain, global |
| **[send_8bitmime](conf.ref.send_8bitmime "send_8bitmime")** – Enable advertising of 8BITMIME when sending mail | no | binding, binding_group, domain, global |
| **[suspend_delivery](conf.ref.suspend_delivery "suspend_delivery")** – Prevent outbound mail delivery | false | binding, binding_group, domain, global |
| **[tls](conf.ref.tls "tls")** – Determine whether to use a TLS connection for outbound mail | no | binding, binding_group, domain, global |
| **[tls_ca](conf.ref.tls_ca "tls_ca")** – Certificate authority for outbound mail |   | binding, binding_group, domain, global |
| **[tls_certificate](conf.ref.tls_certificate "tls_certificate")** – Certificate to use for inbound and outbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_ciphers](conf.ref.tls_ciphers "tls_ciphers")** – Allowable ciphers for a TLS session |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_ifavailable_fallback](conf.ref.tls_ifavailable_fallback "tls_ifavailable_fallback")** – Determine the behavior if TLS negotiation fails | true | binding, binding_group, domain, global |
| **[tls_key](conf.ref.tls_key "tls_key")** – the TLS key to use for outbound mail or inbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_protocols](conf.ref.tls_protocols "tls_protocols")** – Allowable ciphers for TLS inbound and outbound sessions |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer |
| **[tls_verify](conf.ref.tls_verify "tls_verify")** – Specify how to handle the remote certificates | no | binding, binding_group, domain, global |
| **[transform_8bitmime_content](conf.ref.transform_8bitmime_content "transform_8bitmime_content")** – Enable 8BITMIME downconversion when sending mail | ifneeded | binding, binding_group, domain, global |
| **[xclient](conf.ref.xclient "xclient")** – Use the XCLIENT extension to SMTP for outbound mail | no | binding, binding_group, domain, global |
| **[xmpp_dialback_secret](https://support.messagesystems.com/docs/web-mobility/mobility.xmpp.modules#mobility.xmpp.modules.xmpp_role)** – Use when verifying the XMPP server dialback key (Mobile Momentum) |   | domain |
| **[xmpp_role](https://support.messagesystems.com/docs/web-mobility/mobility.xmpp.modules#mobility.xmpp.modules.xmpp_role)** – Define whether a domain is an XMPP server or client (Mobile Momentum) |   | domain |

<a name="idp9416944"></a>
## See Also

[binding](conf.ref.binding "binding"), [host](conf.ref.host.php "host"), [match_cache_life](conf.ref.match_cache_life.php "match_cache_life"), [match_cache_size](conf.ref.match_cache_size.php "match_cache_size"), [Section 2.6, “Configuration Scopes and Fallback”](ecelerity.conf.fallback.php "2.6. Configuration Scopes and Fallback")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.dns_fallback_to_tcp)  | [Up](conf.ref.files.php) |  [Next](conf.ref.domain_for_unqualified_recipient_addresses.php) |
| dns_fallback_to_tcp  | [Table of Contents](index) |  domain_for_unqualified_recipient_addresses |
