|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.binding)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.blackhole.php) |

<a name="conf.ref.binding_group"></a>
## Name

binding_group — logically group a set of bindings

<a name="idp7964480"></a>
## Description

The `Binding_Group` option allows you to logically group bindings together so that they can be more easily referenced from the `regex_binding2` module. The group name is an arbitrary string and holds no particular semantic value beyond being a symbolic identifier for the group. In Momentum version 3.0 the regex_binding modules are discontinued. Use Sieve or scriptlets instead.

Prior to Momentum version 2.2.1.26 a Binding_Group was set within a Binding stanza as follows:

```
binding "example" {
  binding_group = "group1"
  bind_address = "10.10.10.10"
  max_outbound_connections = 5
}
```

**Configuration Change. ** Placement of binding groups within bindings is deprecated starting with Momentum 2.2.1.26 and is no longer valid in version 3.0.

### Note

Binding group names are case-sensitive and spaces are not allowed in binding group names.

There is no upper limit to the number of bindings that can be in a binding group. When Adaptive Delivery is enabled, a large number of bindings in a binding group will affect performance since significant CPU time is spent checking for suspended bindings. For this reason the recommended best practice, when using the adaptive module, is not to exceed 32 bindings per binding group.

Since version 2.2.1.26, `Binding_Group` is implemented as a logical container, which allows you to more conveniently collect common configuration options without repeating them throughout your configuration file. The example above should be written as follows:

```
binding_group "group1" {
  max_outbound_connections = 5

  binding "example" {
    bind_address = "10.10.10.10"
  }

  binding "example2" {
    bind_address = "10.10.10.11"
  }
}
```

Note that you can specify the same group multiple times, which is useful if you have structured your configuration into a series of include files:

```
binding_group "group1" {
  max_outbound_connections = 5

  binding "example" {
    bind_address = "10.10.10.10"
  }
}
# Perhaps this piece is included from an auxillary configuration file
binding_group "group1" {
  binding "example2" {
    bind_address = "10.10.10.11"
  }
}
```
<a name="conf.ref.bindinggroup.default"></a>
## The "default" Binding Group

The `default` Binding_Group is a special case of a binding group scope. This binding group exists without being explicitly defined.

However, if you wish, you can explicitly create the default binding scope and set options in that scope. Do this in the following way:

```
binding_group "default" {
  ehlo_hostname = "example.com"
}
```

The default binding group behaves in the same way as the default binding. For more information see [the section called “The "default" Binding”](conf.ref.binding#conf.ref.binding.default "The "default" Binding").

<a name="idp7981408"></a>
## Scope and Valid Options

binding_group is valid in the global scope. As noted above, the use of binding_group in the binding scope is deprecated and is no longer valid in version 3.0.

<a name="idp7983168"></a>
## Options Valid in the Binding Group Scope

The options valid in the binding scope are as follows:

<a name="binding_group-options-table"></a>

**Table 9.27. binding_group options**

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
| **[apn_expiry](https://support.messagesystems.com/docs/web-push/apns.apn_expiry)** – Define the number of seconds after which an APNs notification is no longer valid | yes | binding, binding_group, domain, global |
| **[bind_address](conf.ref.bind_address "bind_address")** – Source address for outbound connections |   | binding, binding_group, global |
| **[binding](conf.ref.binding "binding")** *(scope)* – Configure binding-specific options |   | binding_group, global |
| **[blackhole](conf.ref.blackhole "blackhole")** – Blackhole mail | false | binding, binding_group, domain, global |
| **[body_timeout](conf.ref.body_timeout "body_timeout")** – Network timeout once the DATA phase is complete | 600 | binding, binding_group, domain, global |
| **[bounces_inline_original](conf.ref.bounces_inline_original "bounces_inline_original")** – How much of the original message to include in MDNs | headers | binding, binding_group, domain, global |
| **[cluster_outbound_throttle_connections](conf.ref.cluster_outbound_throttle_connections "cluster_outbound_throttle_connections")** – Limit the rate at which connections are established |   | binding_group, domain, global |
| **[cluster_outbound_throttle_messages](conf.ref.cluster_outbound_throttle_messages "cluster_outbound_throttle_messages")** – Limit the rate at which messages are delivered |   | binding_group, domain, global |
| **[cluster_scope_max_outbound_connections](conf.ref.cluster_scope_max_outbound_connections "cluster_scope_max_outbound_connections")** – Provide traffic shaping for outbound connections |   | binding, binding_group, domain, global, host |
| **[cluster_server_max_outbound_connections](conf.ref.cluster_server_max_outbound_connections "cluster_server_max_outbound_connections")** – Set the maximum number of outbound connections |   | binding, binding_group, global |
| **[connect_timeout](conf.ref.connect_timeout "connect_timeout")** – Set the connection timeout | 300 | binding, binding_group, domain, global |
| **[connect_timeout_to_delay](conf.ref.connect_timeout_to_delay "connect_timeout_to_delay")** – Time interval before moving mail into the delayed queue | 900 | binding, binding_group, domain, global |
| **[connection_allocation_aggressiveness](conf.ref.connection_allocation_aggressiveness "connection_allocation_aggressiveness")** – Tune the aggressiveness for establishing new connections to domains | normal | binding, binding_group, domain, global |
| **[delay_dsn_max_retry_interval](conf.ref.delay_dsn_max_retry_interval "delay_dsn_max_retry_interval")** – Maximum interval for sending DSNs to the sender of a message that has not yet been delivered | 43200 | binding, binding_group, domain, global |
| **[delay_dsn_retry_interval](conf.ref.delay_dsn_retry_interval "delay_dsn_retry_interval")** – Base interval for sending DSNs to the sender of a message that has not yet been delivered | 3600 | binding, binding_group, domain, global |
| **[delayed_binding_domain_fuzz](conf.ref.delayed_binding_domain_fuzz "delayed_binding_domain_fuzz")** – The time period to spread scheduled messages over when a bulk requeue is necessary | 0 | binding, binding_group, global |
| **[delivery_method](conf.ref.delivery_method "delivery_method")** – Set the delivery method | ESMTP, SMTP | binding, binding_group, domain, global |
| **[dkim](conf.ref.dkim "dkim")** – Enable or disable signing messages |   | binding, binding_group, domain, global |
| **[domain](conf.ref.domain "domain")** *(scope)* – Configure domain-specific options |   | binding, binding_group, global |
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
| **[host](conf.ref.host "host")** *(scope)* – Configure host-specific options |   | binding, binding_group, global |
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
| **[max_resident_messages](conf.ref.max_resident_messages "max_resident_messages")** – Threshold above which messages are not held in memory | 32768 | binding, binding_group, global |
| **[max_retries](conf.ref.max_retries "max_retries")** – Override the system configured max_retries |   | binding, binding_group, domain, global |
| **[max_retry_interval](conf.ref.max_retry_interval "max_retry_interval")** – Maximum retry interval | 43200 | binding, binding_group, domain, global |
| **[mdn_failures_notify](conf.ref.mdn_failures_notify "mdn_failures_notify")** – Mailbox to which to send null recipient MDNs |   | binding, binding_group, domain, global |
| **[message_expiration](conf.ref.message_expiration "message_expiration")** – Time to live for messages | 86400 | binding, binding_group, domain, global |
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
| **[rset_timeout](conf.ref.rset_timeout "rset_timeout")** – Set the timeout after RSET | 30 | binding, binding_group, domain, global |
| **[scope_max_outbound_connections](conf.ref.scope_max_outbound_connections "scope_max_outbound_connections")** – Provide traffic shaping for outbound connections |   | binding, binding_group, domain, global |
| **[send_8bitmime](conf.ref.send_8bitmime "send_8bitmime")** – Enable advertising of 8BITMIME when sending mail | no | binding, binding_group, domain, global |
| **[server_max_outbound_connections](conf.ref.server_max_outbound_connections "server_max_outbound_connections")** – Sets the maximum number of outbound connections | 20000 | binding, binding_group, global |
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

<a name="idp8320784"></a>
## See Also

[Section 4.6, “MultiVIP© Interfaces”](operations.multivip "4.6. MultiVIP© Interfaces"), [binding](conf.ref.binding.php "binding"),

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.binding)  | [Up](conf.ref.files.php) |  [Next](conf.ref.blackhole.php) |
| binding  | [Table of Contents](index) |  blackhole |
