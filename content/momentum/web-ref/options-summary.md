|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref)  | Chapter 9. Ecelerity.conf Configuration Reference |  [Next](conf.ref.files) |

## 9.1. Options Summary

This section displays all configuration file options visible in the following scopes; global, domain, host, binding, binding_group, security, pathway, pathway_group, listener, listen, peer, threadpool, debug_flags and cluster. Module-specific options are documented in the module documentation and options specific to Mobile Momentum are documented in the Mobile Momentum documents. Listener options are listed here but for a separate table of listener-specific options see [Table 9.25, “listener options”](ecelerity.conf#table-listener-options "Table 9.25. listener options") and for a separate list of cluster options see [Table 7.1, “ Cluster options ”](cluster.config.management#table-cluster-options "Table 7.1.  Cluster options"). Options are sorted alphabetically by name. If an option functions as a scope, this is indicated by `(scope)`. The `Type` column indicates the MTA type of a given option. Options of type `na` do not directly apply to either a sending or receiving MTA. If an option has a default value, it is shown in the `Default` column followed by a version number, if there has been a change to the default value. If the value of an option cannot be changed at runtime, the `Default` column will show `(non-dynamic)`. The `Version` column shows when an option was introduced. Options that are not valid in version 3.0 or higher are not shown.

<a name="All-options-table"></a>

**Table 9.1. All options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [_unsafe_spool](conf.ref.unsafe_spool "_unsafe_spool") – Allow dangerous spool semantics to be used | na | false | 3.0 | global |
| [accept_queue_backlog](ecelerity.conf#ecelerity.conf3.listener.options.accept_queue_backlog) – The accept queue backlog | receiving | 0 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [adaptive_adjustment_interval](modules.adaptive#modules.adaptive.adaptive_adjustment_interval) – Throttle the adaptive adjustment interval | sending | 60 | 3.0 | binding, binding_group, domain, global |
| [adaptive_alert_email_destination](modules.adaptive#modules.adaptive.adaptive_alert_email_destination) – The address where adaptive alerts should be sent | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_alert_email_sender](modules.adaptive#modules.adaptive.adaptive_alert_email_sender) – Set the sender address of the alert email | sending | NULL | 3.0.17 | binding, binding_group, domain, global |
| [adaptive_attempt_threshold](modules.adaptive#modules.adaptive.adaptive_attempt_threshold) – The minimum delivery attempts over a period during which bounce stats are collected and suspensions attempted | sending | 2000 (*3.2*) | 3.0 | binding, binding_group, domain, global |
| [adaptive_backstore_leveldb](conf.ref.adaptive_backstore_leveldb "adaptive_backstore_leveldb") *(scope)* – Use LevelDB as the backing store for Adaptive Delivery | sending |   | 3.6 | global |
| [adaptive_backstore_riak](conf.ref.adaptive_backstore_riak "adaptive_backstore_riak") *(scope)* – Define the characteristics of the Riak backing store | sending |   | 3.6 | global |
| [adaptive_body_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_default_suspension](modules.adaptive#modules.adaptive.adaptive_default_suspension) – The amount of time to suspend a domain | sending | 4 hours | 3.0 | binding, binding_group, domain, global |
| [adaptive_default_suspension_enabled](modules.adaptive#modules.adaptive.adaptive_default_suspension_enabled) – Enables and disables adaptive_rejection_rate_suspension_percentage | sending | false | 3.6.11 | binding, binding_group, domain, global |
| [adaptive_ehlo_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_enabled](conf.ref.adaptive_enabled "adaptive_enabled") – Whether to enable the adaptive module for a specific scope | sending | false | 3.0 | binding, binding_group, domain, global |
| [adaptive_fbl_volume_threshold](modules.adaptive#modules.adaptive.adaptive_fbl_volume_threshold "14.2.5.2.4. adaptive_fbl_volume_threshold and adaptive_attempt_threshold") – The minimum total delivered mail count over a period during which FBL stats are collected | sending | 20000 | 3.2 | binding, binding_group, domain, global |
| [adaptive_idle_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_mailfrom_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_deliveries_per_connection](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_outbound_connections](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_recipients_per_batch](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_recipients_per_connection](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_resident_active_queue](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_retries](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_retry_interval](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0.17 | binding, binding_group, domain, global |
| [adaptive_notification_events](modules.adaptive#modules.adaptive.adaptive_notification_events) – Configure the events that will trigger an email notification | sending | throttle suspension blackhole | 3.5.6, 3.6.1 | binding, binding_group, domain, global |
| [adaptive_notification_interval](modules.adaptive#modules.adaptive.adaptive_notification_interval) – The throttle for adaptive alert notification emails | sending | 3600 | 3.0 | binding, binding_group, domain, global |
| [adaptive_outbound_throttle_messages](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_positive_adjustment_interval](modules.adaptive#modules.adaptive.adaptive_positive_adjustment_interval) – Throttle positive adjustments to adaptive changes | sending | 3600 | 3.0 | binding, binding_group, domain, global |
| [adaptive_rcptto_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_rejection_rate_suspension_percentage](modules.adaptive#modules.adaptive.adaptive_rejection_rate_suspension_percentage) – The rate at which messages are rejected | sending | 20 | 3.0 | binding, binding_group, domain, global |
| [adaptive_retry_fuzz](modules.adaptive#modules.adaptive.adaptive_retry_fuzz) – Allow greater control over bulk message retries in cases where all messages for a domain have to be retried | sending | 4096 | 3.0.26 | binding, binding_group, domain, global |
| [adaptive_retry_interval](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_rset_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_scope](conf.ref.adaptive_scope "adaptive_scope") – Define the scope applicable to adaptive delivery | sending | auto | 3.3 | binding, binding_group, domain, global |
| [adaptive_sweep_rule](modules.adaptive#modules.adaptive.adaptive_sweep_rule "14.2.5.2. adaptive_sweep_rule Scope") *(scope)* – Set the thresholds and actions for adaptive fbl and bounce rules | sending |   | 3.2 | binding, binding_group, domain, global |
| [adaptive_sweep_rule_enabled](modules.adaptive#modules.adaptive.adaptive_sweep_rule_enabled "14.2.5.2.3. The adaptive_sweep_rule_enabled Option") – Enable or disable adaptive_sweep_rule in a specified scope | sending | 1 | 3.2 | binding, binding_group, domain, global |
| [address](conf.ref.snmp "SNMP") – Set the SNMP IP address and port | na | (*non-dynamic*) | 3.0 | snmp |
| [address_metrics_cleanse_interval](conf.ref.address_metrics_cleanse_interval "address_metrics_cleanse_interval") – The interval for refreshing address metrics | sending | 3600 | 3.0 | global |
| [address_metrics_lifetime](conf.ref.address_metrics_lifetime "address_metrics_lifetime") – The TTL of address metrics | sending | 1800 | 3.0 | global |
| [alias_schemes](conf.ref.alias_schemes "alias_schemes") – Enable named alias expansion schemes | both |   | 3.0 | domain, global, pathway, pathway_group |
| [allow_ip_literal](conf.ref.allow_ip_literal "allow_ip_literal") – Allow IP addresses in email addresses | receiving | true | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [allow_null_envelope_sender](conf.ref.allow_null_envelope_sender "allow_null_envelope_sender") – Allow the null envelope sender in email addresses | receiving | true | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [allow_trailing_whitespace_in_commands](conf.ref.allow_trailing_whitespace_in_commands "allow_trailing_whitespace_in_commands") – Allow trailing white space at the end of an SMTP command | receiving | false | 3.0.26 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [always_allow](conf.aaa#conf.control_authen.overriding "2.2.2.3. Overriding Authentication") – When set to true, authentication is considered to have succeeded, unless always_deny is set | receiving | false | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [always_deny](conf.aaa#conf.control_authen.overriding "2.2.2.3. Overriding Authentication") – If set to true, authentication is considered to have failed | receiving | false | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [apn_expiry](https://support.messagesystems.com/docs/web-push/apns.apn_expiry) – Define the number of seconds after which an APNs notification is no longer valid | sending | yes (*non-dynamic*) | 3.5.5 | binding, binding_group, domain, global |
| [arp_all_hosts](ecelerity-cluster.conf#option.arp_all_hosts) – Whether or not to aggressively send out ARP information to ensure that the network knows about the IP address assignment (cluster-specific) | na | true | 3.0.13 | cluster |
| [async_bounce_rendering](conf.ref.async_bounce_rendering "async_bounce_rendering") – Which thread pool to use for bounce rendering | sending | true | 3.0 | global |
| [authcrammd5parameters](conf.aaa#conf.inbound-auth.cram-md5 "2.2.1.2. CRAM-MD5 authentication") – Configure CRAM-MD5 authentication | receiving |   | 3.0 | control_listener, esmtp_listener, listen, pathway, pathway_group |
| [authdigestmd5parameters](conf.aaa#conf.inbound-authdigest-md5 "2.2.1.1. DIGEST-MD5 Authentication") – Configure DIGEST-MD5 authentication | receiving |   | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [authloginparameters](conf.aaa#conf.control_authen.clear.text "2.2.2.1. Clear Text LOGIN authentication for a Control_Listener") – Configure clear text login authentication | receiving |   | 3.0 | control_listener, esmtp_listener, listen, pathway, pathway_group |
| [authorization](conf.ref.authorization "authorization") *(scope)* – Configure the console commands applicable to users | na |   | 3.0 | global |
| [authorizationparameters](conf.aaa#conf.control_authz.ecauth "2.2.3.1. Authorization Using the ecauth Scheme") – AuthorizationParameters dictionary points to authorization information | receiving |   | 3.0 | control_listener, esmtp_listener, listen |
| [authplainparameters](conf.aaa#conf.inbound-auth.plain.text "2.2.1.4. Plain Text Authentication") – Configure plain text login authentication | receiving |   | 3.0 | esmtp_listener, http_listener, listen, pathway, pathway_group, xmpp_listener |
| [backlog](conf.ref.threadpool "threadpool") – The maximum number of jobs that can be queued up for a pool | na | 0 (*non-dynamic*) | 3.0 | threadpool |
| [banner_hostname](ecelerity.conf#ecelerity.conf3.listener.options.banner_hostname) – Specifies the banner hostname that will be displayed to the remote client upon connecting | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [bind_address](conf.ref.bind_address "bind_address") – Source address for outbound connections | sending |   | 3.0 | binding, binding_group, global |
| [binding](conf.ref.binding "binding") *(scope)* – Configure binding-specific options | sending |   | 3.0 | binding_group, global |
| [binding_group](conf.ref.binding_group "binding_group") *(scope)* – Logically group a set of bindings | sending |   | 3.0 | global |
| [blackhole](conf.ref.blackhole "blackhole") – Blackhole mail | sending | false | 3.0 | binding, binding_group, domain, global |
| [body_timeout](conf.ref.body_timeout "body_timeout") – Network timeout once the DATA phase is complete | sending | 600 | 3.0 | binding, binding_group, domain, global |
| [bounce_behavior](conf.ref.bounce_behavior "bounce_behavior") – Configure the action taken when a message is classified as a bounce | sending | pass | 3.0 | domain, global |
| [bounce_cache_size](conf.ref.bounce_cache_size "bounce_cache_size") – Set the maximum size of the bounce classification cache | na | 16384 | 3.6.9 | global |
| [bounce_cache_ttl](conf.ref.bounce_cache_ttl "bounce_cache_ttl") – Set the maximum TTL for the bounce classification cache | na | 60 | 3.6.9 | global |
| [bounce_domains](conf.ref.bounce_domains "bounce_domains") – Configure the list of domains eligible for bounce processing | receiving |   | 3.0 | global, pathway, pathway_group |
| [bounce_pattern](conf.ref.bounce_pattern "bounce_pattern") – Configure the pattern that inbound email addresses must match to be considered bounces | sending |   | 3.0 | domain, global |
| [bounce_suppress_list](conf.ref.bounce_suppress_list "bounce_suppress_list") – Configure a list of email addresses that may not be considered original recipients | sending |   | 3.0 | global |
| [bounces_inline_original](conf.ref.bounces_inline_original "bounces_inline_original") – How much of the original message to include in MDNs | sending | headers | 3.0 | binding, binding_group, domain, global |
| [capabilities](conf.ref.capabilities "capabilities") – Selectively retain root capabilities | na | (*non-dynamic*) | 3.0 | security |
| [chroot](conf.ref.chroot "chroot") – chroot to a secure environment | na | (*non-dynamic*) | 3.0 | security |
| [clear_mail_queue_maintainers](conf.ref.clear_mail_queue_maintainers "clear_mail_queue_maintainers") – Reschedule the mail queue maintainer | both | false, true (*3.6*) | 3.0 | global |
| [cluster_group](ecelerity-cluster.conf#option.cluster_group) – The DuraVIP™ system coordinates IP ownership responsibilities via the cluster_group extended virtual synchrony group (cluster-specific) | na | ec_cluster | 3.0 | cluster |
| [cluster_max_outbound_connections](conf.ref.cluster_max_outbound_connections "cluster_max_outbound_connections") – Set the maximum number of outbound connections for a domain (cluster-specific) | sending | -1 | 3.0 | binding, domain, global, host |
| [cluster_outbound_throttle_connections](conf.ref.cluster_outbound_throttle_connections "cluster_outbound_throttle_connections") – Limit the rate at which connections are established (cluster-specific) | sending |   | 3.0 | binding_group, domain, global |
| [cluster_outbound_throttle_messages](conf.ref.cluster_outbound_throttle_messages "cluster_outbound_throttle_messages") – Limit the rate at which messages are delivered (cluster-specific) | sending |   | 3.0 | binding_group, domain, global |
| [cluster_scope_max_outbound_connections](conf.ref.cluster_scope_max_outbound_connections "cluster_scope_max_outbound_connections") – Provide traffic shaping for outbound connections (cluster-specific) | sending |   | 3.0.16 | binding, binding_group, domain, global, host |
| [cluster_server_max_outbound_connections](conf.ref.cluster_server_max_outbound_connections "cluster_server_max_outbound_connections") – Set the maximum number of outbound connections (cluster-specific) | sending |   | 3.0 | binding, binding_group, global |
| [codes](modules.adaptive#modules.adaptive.codes) – adaptive_sweep_rule bounce or fbl codes | sending |   | 3.2 | adaptive_sweep_rule |
| [community](conf.ref.snmp "SNMP") – Set the SNMP Community option value to the desired SNMP community the agent is to join | na | public (*non-dynamic*) | 3.0 | snmp |
| [concurrency](ecelerity.conf#esmtp_listener_example3 "Example 9.1. ESMTP_Listener") – Define number of available threads | receiving | 0 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, threadpool, xmpp_listener |
| [connect_timeout](conf.ref.connect_timeout "connect_timeout") – Set the connection timeout | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [connect_timeout_to_delay](conf.ref.connect_timeout_to_delay "connect_timeout_to_delay") – Time interval before moving mail into the delayed queue | sending | 900 | 3.0 | binding, binding_group, domain, global |
| [connection_allocation_aggressiveness](conf.ref.connection_allocation_aggressiveness "connection_allocation_aggressiveness") – Tune the aggressiveness for establishing new connections to domains | sending | normal | 3.0 | binding, binding_group, domain, global |
| [context](ecelerity.conf#ecelerity.conf3.listener.options.context) – Use to set arbitrary connection context key value pairs | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [control_cache](eccluster.conf3#eccluster.conf3.logs "Logs") – The name of the cache file storing asynchronous responses | na |   | 3.0 | logs |
| [control_client_timeout](conf.ref.control_client_timeout "control_client_timeout") – Network timeout for Momentum control client connections | na | 60 | 3.0 | global |
| [control_group](ecelerity-cluster.conf#option.control_group) – The cluster console manager utilizes this group to issue cluster-wide configuration commands (cluster-specific) | na | ec_console | 3.0 | cluster |
| [control_listener](ecelerity.conf#ecelerity.conf3.control_listener "Control_Listener") *(scope)* – The listener for incoming control connections | na |   | 3.0 | global |
| [critical](conf.ref.debug_flags "debug_flags") – Set the debug level | na | ALL | 3.0 | debug_flags |
| [crypto_engine](conf.ref.crypto_engine "crypto_engine") – Enable hardware cryptography acceleration | both |   | 3.0 | global |
| [crypto_lock_method](conf.ref.crypto_lock_method "crypto_lock_method") – Change the locking method used by the TLS layer | both | EC_SSL_DEFAULTLOCK (*non-dynamic*) | 3.0 | global |
| [debug](conf.ref.debug_flags "debug_flags") – Set the debug level | na |   | 3.0 | debug_flags |
| [debug_flags](conf.ref.debug_flags "debug_flags") *(scope)* – Configure debug verbosity | na |   | 3.0 | global |
| [debug_level](modules.overview.implicit "13.1. Module Overview") – Set the module debug level (applicable to all modules) (cluster-specific) | na | error | 3.0 | cluster |
| [default_binding](conf.ref.default_binding "default_binding") – Control the default binding | sending | normal | 3.0 | global |
| [default_charset](conf.ref.default_charset "default_charset") – Control the character set | both | us-ascii | 3.0 | global, pathway, pathway_group |
| [delay_dsn_max_retry_interval](conf.ref.delay_dsn_max_retry_interval "delay_dsn_max_retry_interval") – Maximum interval for sending DSNs to the sender of a message that has not yet been delivered | sending | 43200 | 3.0 | binding, binding_group, domain, global |
| [delay_dsn_retry_interval](conf.ref.delay_dsn_retry_interval "delay_dsn_retry_interval") – Base interval for sending DSNs to the sender of a message that has not yet been delivered | sending | 3600 | 3.0 | binding, binding_group, domain, global |
| [delayed_binding_domain_fuzz](conf.ref.delayed_binding_domain_fuzz "delayed_binding_domain_fuzz") – The time period to spread scheduled messages over when a bulk requeue is necessary | sending | 0 | 3.0.26 | binding, binding_group, global |
| [delayed_queue_scan_interval](conf.ref.delayed_queue_scan_interval "delayed_queue_scan_interval") – How often to call the maintainer for a domain | sending | 15 | 3.0 | global |
| [delivery_method](conf.ref.delivery_method "delivery_method") – Set the delivery method | sending | ESMTP (*3.0*), SMTP (*2.2*) | 3.0 | binding, binding_group, domain, global |
| [delivery_pool](conf.ref.delivery_pool "delivery_pool") – Associate an eventloop with mail delivery | sending | (*non-dynamic*) | 3.6 | global |
| [delivery_response_timeout](conf.ref.delivery_response_timeout "delivery_response_timeout") – Time to wait for a response to an outbound request | sending | 5000 | 3.5.6 | binding, domain, global |
| [dir_mode](eccluster.conf3#eccluster.conf3.logs "Logs") – The octal representation of the file permissions | na |   | 3.0 | logs |
| [disable_chunked](https://support.messagesystems.com/docs/web-mobility/mobility.mm7.listener) – An option used with aggregators who do not support chunked transfer-coding (Mobile Momentum) | both | false | 3.1.4 | http_listener, listen, pathway, pathway_group, peer |
| [disable_nagle_algorithm](conf.ref.disable_nagle_algorithm "disable_nagle_algorithm") – Disable nagle algorithm on sockets | both | false | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, global, http_listener, listen, xmpp_listener |
| [disk_queue_drain_rate](conf.ref.disk_queue_drain_rate "disk_queue_drain_rate") – Control the rate at which messages are spooled in on start-up | both | 100 | 3.0 | global |
| [dkim](conf.ref.dkim "dkim") – Enable or disable signing messages | sending |   | 3.0 | binding, binding_group, domain, global |
| [dns_cache_purge_interval](conf.ref.dns_cache_purge_interval "dns_cache_purge_interval") – How often the DNS response cache is scanned for stale entries | sending | 60 | 3.0 | global |
| [dns_expire_interval](conf.ref.dns_expire_interval "dns_expire_interval") – How often to check for domains with expired DNS information | sending | 10 | 3.0 | global |
| [dns_failures_to_purge](conf.ref.dns_failures_to_purge "dns_failures_to_purge") – Configure the maximum number of DNS lookups | sending | 10 | 3.0 | domain, global |
| [dns_fallback_to_tcp](conf.ref.dns_fallback_to_tcp "dns_fallback_to_tcp") – Whether or not to fail over to TCP in place of UDP | both | false | 3.0.22 | global |
| [domain](conf.ref.domain "domain") *(scope)* – Configure domain-specific options | sending |   | 3.0 | binding, binding_group, global |
| [domain_for_unqualified_recipient_addresses](conf.ref.domain_for_unqualified_recipient_addresses "domain_for_unqualified_recipient_addresses") – Configure a domain which will be used to resolve delivery for unqualified addresses | receiving |   | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [domain_for_unqualified_sender_address](conf.ref.domain_for_unqualified_sender_address "domain_for_unqualified_sender_address") – Configure a domain which will be used to substitute for unqualified sender addresses | receiving |   | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [domainkeys](conf.ref.domainkeys "domainkeys") – Enable or disable domainkeys signing | sending |   | 3.0 | binding, binding_group, domain, global |
| [drop_body_after_trans_fail](conf.ref.drop_body_after_trans_fail "drop_body_after_trans_fail") – Number of retry attempts before freeing message memory | sending | 3 | 3.0 | binding, binding_group, domain, global |
| [duravip_balance_set_size](ecelerity-cluster.conf#option.duravip_balance_set_size) – When balancing DuraVIP™s, how many to process as a batch in response to a balance request (cluster-specific) | na | 1 | 3.0 | cluster |
| [duravip_follow](cluster.config.duravip "7.5. DuraVIP™: IP Fail over") – Specify the binding a listener should follow (cluster-specific) | receiving |   | 3.0 | listen |
| [duravip_preference](cluster.config.duravip "7.5. DuraVIP™: IP Fail over") – Specify a DuraVIP™ preference (cluster-specific) | both |   | 3.0 | binding, listen |
| [eccluster_listener](ecelerity-cluster.conf#ecelerity-cluster.conf.eccluster_listener "ECCluster_Listener") *(scope)* – Control communication between cluster nodes (cluster-specific) | na |   | 3.0.15 | global |
| [ecstream_idle_time](ecelerity.conf#ecelerity.conf.ecstream_listener "ECStream_Listener") – The number of seconds of inactivity before a client is disconnected (ECStream only) | receiving | 300 | 3.0 | ecstream_listener, listen, pathway, pathway_group, peer |
| [ecstream_listener](ecelerity.conf#ecelerity.conf.ecstream_listener "ECStream_Listener") *(scope)* – The listener for incoming ECSTREAM connections | receiving |   | 3.0 | global |
| [ecstream_max_batch_size](ecelerity.conf#ecelerity.conf.ecstream_listener "ECStream_Listener") – The maximum number of ECStream messages to accept before dropping back into the scheduler (ECStream only) | receiving | 10000 | 3.0 | ecstream_listener, listen, pathway, pathway_group, peer |
| [ecstream_port](conf.ref.ecstream_port "ecstream_port") – Configure the port for ecstream deliveries | sending | 1825 | 3.2 | binding, binding_group, domain, global |
| [ecstream_timeout](conf.ref.ecstream_timeout "ecstream_timeout") – The amount of time to wait for an ecstream connection to be established | sending | 600 | 3.2 | binding, binding_group, domain, global |
| [ehlo_hostname](conf.ref.ehlo_hostname "ehlo_hostname") – Set the hostname used for EHLO in outbound mail | sending | __hostname__ | 3.0 | binding, binding_group, domain, global |
| [ehlo_timeout](conf.ref.ehlo_timeout "ehlo_timeout") – Network timeout for EHLO | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [enable](ecelerity.conf#esmtp_listener_example3 "Example 9.1. ESMTP_Listener") – Enable or disable a listener scope | receiving | true | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [enable_authentication](conf.ecelerity.conf#conf.inbound-mail "2.1.2. Configuring Inbound Mail Service and a Control Listener") – Whether or not to enable authentication | receiving |   | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [enable_authorization](conf.aaa#conf.control_authz "2.2.3. Control Listener Authorization") – Whether or not to enable authorization for console commands | receiving |   | 3.0 | control_listener, listen, peer |
| [enable_duravip](cluster.config.duravip "7.5. DuraVIP™: IP Fail over") – Whether to enable Durable MultiVIP© bindings (cluster-specific) | both |   | 3.0 | binding, listen |
| [enable_fbl_header_insertion](conf.ref.enable_fbl_header_insertion "enable_fbl_header_insertion") – Enable or disable fbl header insertion | sending |   | 3.0 | binding, binding_group, domain, global |
| [enabled](modules.overview "Chapter 13. Modules") – Whether or not the module is enabled (cluster-specific) | na | true | 3.0 | cluster |
| [error](conf.ref.debug_flags "debug_flags") – Set the debug level | na | ALL | 3.0 | debug_flags |
| [esmtp_listener](ecelerity.conf#ecelerity.conf3.esmtp_listener "ESMTP_Listener") *(scope)* – The listener for incoming SMTP connections | receiving |   | 3.0 | global |
| [event_loop](ecelerity.conf#ecelerity.conf3.listeners.multi-core "Listener Options and Multiple Event Loops") – Associate a listener with an eventloop | sending | (*non-dynamic*) | 3.6 | ecstream_listener, esmtp_listener, listen |
| [eventloop](conf.ref.eventloop "eventloop") *(scope)* – Define a pool of event loops to enable multiple event loop configuration | both | (*non-dynamic*) | 3.6 | global |
| [events_per_iter](ecelerity.conf#ecelerity.conf3.listener.options.events_per_iter) – Employ when using a Concurrency greater than 1 | receiving | 0 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [exclude_vctx_conn](conf.ref.exclude_vctx "exclude_vctx") – Exclude validation connection context keys from being journaled in the spool metadata | both |   | 3.0 | binding, binding_group, domain, global |
| [exclude_vctx_mess](conf.ref.exclude_vctx "exclude_vctx") – Exclude validation message context keys from being journaled in the spool metadata | both |   | 3.0 | binding, binding_group, domain, global |
| [expensive_batch_assessment](conf.ref.expensive_batch_assessment "expensive_batch_assessment") – Treat messages as equal even if the bodies or headers have been modified since reception | receiving | false | 3.0 | global |
| [file_mode](ecelerity.conf#ecelerity.conf3.control_listener "Control_Listener") – File access rights in octal notation | na | 0660 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [file_mode](eccluster.conf3#eccluster.conf3.logs "Logs") – The octal representation of the file permissions (cluster logs) | na |   | 3.0 | logs |
| [force_fsync](conf.ref.force_fsync "force_fsync") – Ensure that data is synced to disk on reception | receiving | false | 3.0 | global |
| [fully_resolve_before_smtp](conf.ref.fully_resolve_before_smtp "fully_resolve_before_smtp") – Resolve all MX and A records before attempting delivery | sending | true | 3.0 | binding, binding_group, domain, global |
| [gateway](conf.ref.gateway "gateway") – Configure a static SMTP route for mail | sending |   | 3.0 | binding, binding_group, domain, global |
| [gcm_application_id](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_application_id) – Define the package name of the Android application allowed to received notifications | sending |   | 3.5.5 | binding, binding_group, domain, global |
| [gcm_authorization_token_id](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_authorization_token_id) – The authorization token that permits sending Google push notifications | sending |   | 3.5.5 | binding, binding_group, domain, global |
| [gcm_delay_while_idle](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_delay_while_idle) – Whether or not to send the notification immediately if a device is idle | sending | false | 3.5.5 | binding, binding_group, domain, global |
| [gcm_dry_run](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_dry_run) – Test a request without actually sending a message | sending | false | 3.5.5 | binding, binding_group, domain, global |
| [gcm_ttl](https://support.messagesystems.com/docs/web-push/push.gcm.ttl) – Default Time To Live for notifications | sending | -1 | 3.5.5 | binding, binding_group, domain, global |
| [generate_bounces](conf.ref.generate_bounces "generate_bounces") – Generate MDNs if mail is failed after reception | sending | true | 3.0 | binding, binding_group, domain, global |
| [generate_bounces_for_multi_recipient_policy_rejections](conf.ref.generate_bounces_for_multi_recipient_policy_rejections "generate_bounces_for_multi_recipient_policy_rejections") – Generate MDNs after reception for policy rejections | receiving | true | 3.0 | global, pathway, pathway_group |
| [generate_delay_dsn](conf.ref.generate_delay_dsn "generate_delay_dsn") – Generate DSNs if mail is delayed | sending | false | 3.0 | binding, binding_group, domain, global |
| [group](conf.ref.user "user") – Group identity to assume after startup | na | ecuser (*non-dynamic*) | 3.0 | security |
| [growbuf_size](conf.ref.growbuf_size "growbuf_size") – The size of an element in a growbuf chain | na | 16384 | 3.0 | global |
| [heartbeat_start_delay](ecelerity-cluster.conf#option.heartbeat_start_delay) – Seconds to wait after startup before the cluster heartbeat is activated (cluster-specific) | na | 15 | 3.0 | cluster |
| [heartbeats_per_sec](ecelerity-cluster.conf#option.heartbeats_per_sec) – How often to send a heartbeat (cluster-specific) | na | 1 | 3.0 | cluster |
| [high_action](modules.adaptive#modules.adaptive.high_action) – The action when the high threshold is met and the number of delivery attempts exceeds the adaptive_attempt_threshold | sending | "suspend" "4 hours" | 3.2 | adaptive_sweep_rule |
| [high_threshold](modules.adaptive#modules.adaptive.high_threshold) – The high threshold value for the sum of the rates of the bounce codes or FBL categories | sending | 10 | 3.2 | adaptive_sweep_rule |
| [host](conf.ref.host "host") *(scope)* – Configure host-specific options | sending |   | 3.0 | binding, binding_group, global |
| [host_failure_retry](conf.ref.host_failure_retry "host_failure_retry") – Time to wait before attempting a retry | sending | 120 | 3.0 | domain, global |
| [hostname](conf.ref.hostname "hostname") – Override the system configured hostname | both |   | 3.0 | global |
| [http_basic_auth](conf.ref.http_basic_auth "http_basic_auth") – Define the user credentials when using basic HTTP authentication | both |   | 3.5.6 | binding, binding_group, domain, global |
| [http_host](conf.ref.http_host "http_host") – Define the HTTP host | sending |   | 3.5.6 | binding, binding_group, domain, global |
| [http_listener](https://support.messagesystems.com/docs/web-rest-injector/rest.http_listener) *(scope)* – The listener used with the REST injector | sending |   | 3.1.4 | global |
| [http_method](conf.ref.http_method "http_method") – Define the HTTP method to use | sending | POST | 3.5.6 | binding, binding_group, domain, global |
| [http_uri](conf.ref.http_uri "http_uri") – Define the HTTP URI that you wish to connect to | sending |   | 3.5.6 | binding, binding_group, domain, global |
| [http_version](conf.ref.http_version "http_version") – Define the HTTP version to use | sending | 1.1 | 3.5.6 | binding, binding_group, domain, global |
| [idle_time](ecelerity.conf#ecelerity.conf3.listener.options.idle_time) – The number of seconds of inactivity before a client is disconnected | receiving | 0 | 3.0 | esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [idle_timeout](conf.ref.idle_timeout "idle_timeout") – Time to maintain idle outbound connections | sending | 5 | 3.0 | binding, binding_group, domain, global |
| [if_check_interval](ecelerity-cluster.conf#option.if_check_interval) – How often to run through a maintenance cycle (cluster-specific) | na | 30 | 3.0 | cluster |
| [if_down_limit](ecelerity-cluster.conf#option.if_down_limit) – How long to wait before deciding to bring an IP online (cluster-specific) | na | 4 | 3.0 | cluster |
| [inbound_throttle_messages](conf.ref.inbound_throttle_messages "inbound_throttle_messages") – Rate limit inbound mail | receiving |   | 3.0 | global, pathway, pathway_group |
| [info](conf.ref.debug_flags "debug_flags") – Set the debug level | na |   | 3.0 | debug_flags |
| [initial_hash_buckets](conf.ref.initial_hash_buckets "initial_hash_buckets") – Set the number of hash buckets used by the system | na | 32 | 3.1 | global |
| [inline_transfail_processing](conf.ref.inline_transfail_processing "inline_transfail_processing") – How to handle transient failure processing | sending | 1 | 3.0 | global |
| [keep_message_dicts_in_memory](conf.ref.keep_message_dicts_in_memory "keep_message_dicts_in_memory") – Preserve memory representation of metadata when memory is low | both | false (*non-dynamic*) | 3.0 | global |
| [large_message_threshold](conf.ref.large_message_threshold "large_message_threshold") – Consider a message large when its size exceeds this amount | both | 131072 | 3.0 | global |
| [legacy_message_threshold](conf.ref.legacy_message_threshold "legacy_message_threshold") – The maximum size allowed for messages being passed to legacy modules | both | 1048576 | 3.0 | global |
| [license](conf.ref.license "license") – Specify an alternate license location | na | /opt/msys/ecelerity/etc (*non-dynamic*) | 3.0 | global |
| [listen](ecelerity.conf#ecelerity.conf3.listener.attributes "Listener Enable Option") *(scope)* – Specify the socket that a listener listens on | receiving |   | 3.0 | control_listener, ecstream_listener, esmtp_listener, http_listener, msgcserver_listener, xmpp_listener |
| [listen_backlog](ecelerity.conf#ecelerity.conf3.listener.options.listen_backlog) – The listen backlog | receiving | 500 (*3.0*) | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [listener_sessions](ecelerity.conf#ecelerity.conf3.listener.options.listener_sessions) – Specifies the maximum number of concurrent sessions that can be established to a listener | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [lmtp_port](conf.ref.lmtp_port "lmtp_port") – Configure the port for LMTP deliveries | sending | 2003 | 3.0 | binding, binding_group, domain, global |
| [local_changes_file](conf.ref.local_changes_file "local_changes_file") – The file for writing local configuration changes | na | /opt/msys/ecelerity/etc/local_changes.conf | 3.0 | global |
| [local_changes_only](conf.ref.local_changes_only "local_changes_only") – Whether there is a file for writing local configuration change | na | false | 3.0 | global |
| [log_active_interval](ecelerity-cluster.conf#option.log_active_interval) – Used to tune centralized logging (cluster-specific) | na | 1 | 3.0 | cluster |
| [log_group](ecelerity-cluster.conf#option.log_group) – Whether or not panic log messages are broadcast over spread (cluster-specific) | na |   | 3.0 | cluster |
| [log_idle_interval](ecelerity-cluster.conf#option.log_idle_interval) – The amount of time to sleep before looking for another segment (cluster-specific) | na | 10 | 3.0 | cluster |
| [log_requests_to_paniclog](https://support.messagesystems.com/docs/web-rest-injector/rest.http_listener) – Whether to log REST injection requests | sending | false | 3.1.4 | http_listener, listen, pathway, pathway_group, peer |
| [logfile](eccluster.conf3#eccluster.conf3.logs.logfile) – Describe the full path to the log file | na |   | 3.0 | logs |
| [logs](ecelerity-cluster.conf "ecelerity-cluster.conf") – Define the location of the cluster manager logs (cluster-specific) | na |   | 3.0 | cluster |
| [logs](eccluster.conf3#eccluster.conf3.logs "Logs") *(scope)* – Configure centralized log files on the cluster manager | na |   | 3.0 | global |
| [low_action](modules.adaptive#modules.adaptive.low_action) – The action when the high threshold is not met but the low threshold is met | sending | "throttle" "down" | 3.2 | adaptive_sweep_rule |
| [low_threshold](modules.adaptive#modules.adaptive.low_threshold) – The low threshold value for the sum of the rates of the bounce codes or FBL categories | sending | 5 | 3.2 | adaptive_sweep_rule |
| [mail_queue_check_vm_interval](conf.ref.mail_queue_check_vm_interval "mail_queue_check_vm_interval") – How often to apply memory management reduction on mail queues | both | 60 | 3.0 | global |
| [mailerdaemon](conf.ref.mailerdaemon "mailerdaemon") – Set the From: address for MDNs | sending |   | 3.0 | binding, binding_group, domain, global |
| [mailfrom_timeout](conf.ref.mailfrom_timeout "mailfrom_timeout") – Timeout after MAIL FROM | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [maintainer_pool](conf.ref.maintainer_pool "maintainer_pool") – Create an eventloop for maintainers | both | (*non-dynamic*) | 3.6 | global |
| [malloc2mmap_threshold](conf.ref.malloc2mmap_threshold "malloc2mmap_threshold") – Use mmap when allocations exceed this amount | na | 4092 | 3.0 | global |
| [manager](cluster.config.logging#cluster.config.logging.complex "7.6.5. More Complex Deployments") *(scope)* – Define managers for subclusters | na |   | 3.0 | logs |
| [masterdb_file](conf.ref.masterdb_file "masterdb_file") – Specify an alternate path for the statistics permastore | na | /var/log/ecelerity/ecdb (*non-dynamic*) | 3.0 | global |
| [match_cache_life](conf.ref.match_cache_life "match_cache_life") – Set the maximum number of seconds that the match cache will be valid | na | 0 | 3.0 | global |
| [match_cache_size](conf.ref.match_cache_size "match_cache_size") – The size of the cache that holds the results of looking up matching scopes | na | 16384 | 3.0 | global |
| [max_deliveries_per_connection](conf.ref.max_deliveries_per_connection "max_deliveries_per_connection") – Maximum number of messages to deliver before closing a connection | sending | 0 | 3.0 | binding, binding_group, domain, global |
| [max_dns_ttl](conf.ref.max_dns_ttl "max_dns_ttl") – Set the maximum DNS TTL | sending | 4294967295 | 3.0 | global |
| [max_idle](eccluster.conf3#eccluster.conf3.logs.max_idle) – The maximum number of seconds a log file may be left open | na |   | 3.0 | logs |
| [max_message_size](ecelerity.conf#ecelerity.conf3.listener.options.max_message_size) – The maximum number of bytes allowed in a single message | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_open](eccluster.conf3#eccluster.conf3.logs.max_open) – The maximum number of concurrently open log files | na |   | 3.0 | logs |
| [max_outbound_connections](conf.ref.max_outbound_connections "max_outbound_connections") – Set the maximum number of outbound connections | sending | 32 | 3.0 | binding, binding_group, domain, global, host |
| [max_receptions_per_connection](ecelerity.conf#ecelerity.conf3.listener.options.max_receptions_per_connection) – The maximum number of messages allowed in a single session | receiving | 0 | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [max_recipients_per_batch](conf.ref.max_recipients_per_batch "max_recipients_per_batch") – The maximum number of recipients to send in a single outbound message transaction | sending | 100 | 3.0 | binding, binding_group, domain, global |
| [max_recipients_per_connection](conf.ref.max_recipients_per_connection "max_recipients_per_connection") – The maximum number of recipients to send on a connection | sending | 0 | 3.0 | binding, binding_group, domain, esmtp_listener, global, listen, peer |
| [max_recipients_per_message](ecelerity.conf#ecelerity.conf3.listener.options.max_recipients_per_message) – The maximum number of recipients allowed in a message | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_request_size](https://support.messagesystems.com/docs/web-rest-injector/rest.http_listener) – Limit the size of an HTTP request | both |   | 3.1.4 | http_listener, listen, pathway, pathway_group, peer |
| [max_resident_active_queue](conf.ref.max_resident_active_queue "max_resident_active_queue") – Threshold above which messages are not held in memory | sending | 250 | 3.0 | binding, binding_group, domain, global |
| [max_resident_messages](conf.ref.max_resident_messages "max_resident_messages") – Threshold above which messages are not held in memory | sending | 32768 | 3.0 | binding, binding_group, global |
| [max_resident_transfails](conf.ref.max_resident_transfails "max_resident_transfails") – If the transient failure queue grows beyond this size, messages are swapped out of memory | sending | 100 | 3.0 | global |
| [max_retries](conf.ref.max_retries "max_retries") – Override the system configured max_retries | sending |   | 3.0 | binding, binding_group, domain, global |
| [max_retry_interval](conf.ref.max_retry_interval "max_retry_interval") – Maximum retry interval | sending | 43200 | 3.0 | binding, binding_group, domain, global |
| [max_timed_events_per_iter](conf.ref.max_timed_events_per_iter "max_timed_events_per_iter") – The maximum numer of timed events per scheduler iteration | na | 1024 | 3.0.22 | global |
| [mbus_daemon](ecelerity-cluster.conf "ecelerity-cluster.conf") *(deprecated)* – The port that the messaging bus listens on (cluster-specific) | na | 4803 | 3.0 | cluster |
| [mcmt_reception](https://support.messagesystems.com/docs/web-mobility/mm7.mcmt_reception) – Configure a listener to accept the Multi-Channel Message Type (Mobile Momentum) | both | passthru | 3.1.4 | esmtp_listener, listen, pathway, pathway_group, peer |
| [mdn_failures_notify](conf.ref.mdn_failures_notify "mdn_failures_notify") – Mailbox to which to send null recipient MDNs | sending |   | 3.0 | binding, binding_group, domain, global |
| [memory_goal](conf.ref.memory_goal "memory_goal") – Configure physical memory usage goal | na | 90 | 3.0 | global |
| [memory_hwm](conf.ref.memory_hwm "memory_hwm") – Configure physical memory usage high-water mark | na | 95 | 3.0 | global |
| [message_expiration](conf.ref.message_expiration "message_expiration") – Time to live for messages | sending | 86400 | 3.0 | binding, binding_group, domain, global |
| [migrate_connections_between_sibling_domains](conf.ref.migrate_connections_between_sibling_domains "migrate_connections_between_sibling_domains") – Optimize connections for sibling domains | both | true | 3.4 | global |
| [mime_parse_large_messages_during_reception](conf.ref.mime_parse_large_messages_during_reception "mime_parse_large_messages_during_reception") – Configure whether large messages are parsed upon reception or just in time | receiving | true | 3.0 | global |
| [min_dns_ttl](conf.ref.min_dns_ttl "min_dns_ttl") – Override DNS TTLs smaller than this value | sending | 0 | 3.0 | global |
| [mx_failures_fallback_to_a](conf.ref.mx_failures_fallback_to_a "mx_failures_fallback_to_a") – Configure the maximum number of times an MX lookup will be attempted | sending | 3 | 3.0 | domain, global |
| [mx_failures_to_delay](conf.ref.mx_failures_to_delay "mx_failures_to_delay") – Number of consecutive failures before a domain is auto-delayed | sending | 50 | 3.0 | domain, global |
| [never_attempt_expired_messages](conf.ref.never_attempt_expired_messages "never_attempt_expired_messages") – Never attempt delivery of expired messages | sending | false | 3.0 | binding, binding_group, domain, global |
| [never_retry](conf.ref.never_retry "never_retry") – Whether or not to retry delivery of failed messages | sending | false | 3.0 | binding, binding_group, domain, global |
| [nodeaddr](ecelerity-cluster.conf#option.nodeaddr) – The canonical cluster address for the node (cluster-specific) | na |   | 3.0 | cluster |
| [nodename](ecelerity-cluster.conf#option.nodename) – Override the node name that is used to canonically identify this cluster node (cluster-specific) | na |   | 3.0 | cluster |
| [notice](conf.ref.debug_flags "debug_flags") – Set the debug level | na |   | 3.0 | debug_flags |
| [only_use_best_mx_for_relay_domains](conf.ref.only_use_best_mx_for_relay_domains "only_use_best_mx_for_relay_domains") – If this is set to true only the lowest numerical priority MXs are used | sending | true | 3.0 | global |
| [open_relay](ecelerity.conf#ecelerity.conf3.listener.options.open_relay) – Whether the MTA is an open relay or not | receiving | false | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [opendkim_sign](conf.ref.opendkim_sign "opendkim_sign") – Whether or not to enable OpenDKIM signing | sending | true (*non-dynamic*) | 3.6 | binding, binding_group, domain, global |
| [outbound_throttle_connections](conf.ref.outbound_throttle_connections "outbound_throttle_connections") – Limit the rate at which connections are established | sending |   | 3.0 | binding, binding_group, domain, global |
| [outbound_throttle_messages](conf.ref.outbound_throttle_messages "outbound_throttle_messages") – Limit the rate at which messages are delivered | sending |   | 3.0 | binding, binding_group, domain, global |
| [pathway](conf.ref.pathway "pathway") *(scope)* – A grouping of inbound configuration options | receiving |   | 3.0.23 | global, pathway_group |
| [pathway](conf.ref.pathway "pathway") – A means for associating a Listener with a pathway scope | receiving |   | 3.0.23 | ecstream_listener, esmtp_listener, listen, peer |
| [pathway_group](conf.ref.pathway_group "pathway_group") *(scope)* – A container for pathway scopes | receiving |   | 3.0.23 | global |
| [pcre_cache_size](conf.ref.pcre_cache_size "pcre_cache_size") – Set the maximum size of the ec_pcre_compile cache | na | 100 | 3.0 | global |
| [pcre_cache_ttl](conf.ref.pcre_cache_ttl "pcre_cache_ttl") – Set the maximum TTL for the ec_pcre_compile cache | na | 300 | 3.0 | global |
| [peer](ecelerity.conf#ecelerity.conf3.listener.config.acls "Extended Listener Configuration Using Access Control Lists (ACLs)") *(scope)* – Create an ACL within a specific listener | receiving |   | 3.0 | control_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [permastore_interval](conf.ref.permastore_interval "permastore_interval") – The frequency for saving various statistics | na | 300 | 3.0 | global |
| [pidfile](conf.ref.pidfile "pidfile") – Set the PID file path | na | /var/run/ecelerity.pid (*non-dynamic*) | 3.0 | global |
| [pool_name](ecelerity.conf#esmtp_listener_example3 "Example 9.1. ESMTP_Listener") – Associate a threadpool with a listener | receiving |   | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [privileges](conf.ref.capabilities "capabilities") – Selectively retain root capabilities (Solaris) | na | (*non-dynamic*) | 3.0 | security |
| [prohibited_hosts](conf.ref.prohibited_hosts "prohibited_hosts") – Prevent mail from being delivered to invalid destinations | sending |   | 3.0 | global |
| [rcptto_timeout](conf.ref.rcptto_timeout "rcptto_timeout") – Timeout after RCPT TO | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [received_hostname](ecelerity.conf#ecelerity.conf3.listener.options.received_hostname) – The hostname that is placed in the received headers | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [reconfig_message](ecelerity.conf#reconfig_message "The Reconfig_Message Option") – The message if the configuration has changed | receiving | 4.3.2 Reconfiguration in progress | 3.0 | esmtp_listener |
| [relay_domains](conf.ref.relay_domains "relay_domains") – Configure the list of domains for which Momentum relays mail | receiving |   | 3.0 | global, pathway, pathway_group |
| [relay_for_sending_domains](ecelerity.conf#ecelerity.conf3.listener.options.relay_for_sending_domains) – Domains that may use the MTA as a relay | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [relay_hosts](conf.ref.relay_hosts "relay_hosts") – Configure the list of hosts for which Momentum relays mail | receiving |   | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [remote_smtp_port](conf.ref.remote_smtp_port "remote_smtp_port") – Set the port to be used for SMTP deliveries | sending | 25 | 3.0 | binding, binding_group, domain, global |
| [replicate](ecelerity-cluster.conf "ecelerity-cluster.conf") *(scope)* – Define the cluster replication framework (cluster-specific) | na |   | 3.0 | cluster |
| [require_ehlo](conf.ref.require_ehlo "require_ehlo") – Reject mail from clients that do not say HELO | receiving | false | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [reserve_maintenance_interval](conf.ref.reserve_maintenance_interval "reserve_maintenance_interval") – How often to perform mail queue maintenance | sending | 15 | 3.0 | global |
| [resolv_conf](conf.ref.resolv_conf "resolv_conf") – Specify a custom resolv.conf file | sending |   | 3.0 | global |
| [response_transcode_pattern](conf.ref.response_transcode_pattern "response_transcode_pattern") – The regex pattern for comparison to a server response | sending |   | 3.0 | binding, binding_group, domain, global |
| [response_transcode_replace](conf.ref.response_transcode_replace "response_transcode_replace") – The replacement string for a server response | sending |   | 3.0 | binding, binding_group, domain, global |
| [retry_interval](conf.ref.retry_interval "retry_interval") – Base retry interval | sending | 1200 | 3.0 | binding, binding_group, domain, global |
| [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope "rfc2821_allow_whitespace_in_envelope") – Permit trailing white space before the final CRLF | receiving | false | 3.0.26 | global, pathway, pathway_group |
| [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules "rfc2821_pedantic_address_rules") – Allow relaxation of enforcement of the rfc2821 address rules | receiving | true | 3.0 | global, pathway, pathway_group |
| [rfc2822_date_header](conf.ref.rfc2822_date_header "rfc2822_date_header") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ifneeded | 3.0 | global, pathway, pathway_group |
| [rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ignore | 3.0 | global, pathway, pathway_group |
| [rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers "rfc2822_lone_lf_in_headers") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | pedantic | 3.0 | global, pathway, pathway_group |
| [rfc2822_max_line_length](conf.ref.rfc2822_max_line_length "rfc2822_max_line_length") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ignore | 3.0 | global, pathway, pathway_group |
| [rfc2822_max_line_length_policy](conf.ref.rfc2822_max_line_length_policy "rfc2822_max_line_length_policy") – Determine how non-RFC-compliant line lengths are handled | receiving | none | 3.0.26 | global, pathway, pathway_group |
| [rfc2822_messageid_header](conf.ref.rfc2822_messageid_header "rfc2822_messageid_header") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ifneeded | 3.0 | global, pathway, pathway_group |
| [rfc2822_missing_headers](conf.ref.rfc2822_missing_headers "rfc2822_missing_headers") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | reject | 3.0 | global, pathway, pathway_group |
| [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers "rfc2822_trace_headers") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | true | 3.0 | global, pathway, pathway_group |
| [role](conf.ref.authorization "authorization") *(scope)* – Define a role within an authorization stanza | na |   | 3.0 | authorization |
| [routes](conf.ref.routes "routes") – Configure message routing | sending |   | 3.0 | domain, global |
| [rset_timeout](conf.ref.rset_timeout "rset_timeout") – Set the timeout after RSET | sending | 30 | 3.0 | binding, binding_group, domain, global |
| [scheduler](conf.ref.scheduler "scheduler") – Override the default IO scheduler | na | (*non-dynamic*) | 3.0 | global |
| [scope_max_outbound_connections](conf.ref.scope_max_outbound_connections "scope_max_outbound_connections") – Provide traffic shaping for outbound connections | sending |   | 3.2 | binding, binding_group, domain, global |
| [security](conf.ref.security "security") *(scope)* – Scope for defining which permissions are retained by which user | na | (*non-dynamic*) | 3.0 | global |
| [send_8bitmime](conf.ref.send_8bitmime "send_8bitmime") – Enable advertising of 8BITMIME when sending mail | sending | no | 3.0 | binding, binding_group, domain, global |
| [server_max_file_descriptors](conf.ref.server_max_file_descriptors "server_max_file_descriptors") – Sets the maximum number of file descriptors usable by the system | na | 3000000 | 3.0 | global |
| [server_max_outbound_connections](conf.ref.server_max_outbound_connections "server_max_outbound_connections") – Sets the maximum number of outbound connections | sending | 20000 | 3.0 | binding, binding_group, global |
| [server_reserve_outbound_connections](conf.ref.server_reserve_outbound_connections "server_reserve_outbound_connections") – Sets the server-wide connection limit reserve | sending | 200 | 3.0 | global |
| [service_sessions](ecelerity.conf#ecelerity.conf3.listener.options.service_sessions) – The maximum number of concurrent sessions that can be established to all listeners | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [signing_stats](conf.ref.signing_stats "signing_stats") – Control how signing statistics are recorded | sending | all | 3.0.17 | global |
| [siv_throttle_cache_size](conf.ref.siv_throttle_cache_size "siv_throttle_cache_size") – Set the maximum number of named throttles | both | 100, 1000 (*3.0.24*) | 3.0 | global |
| [smtp_extensions](ecelerity.conf#ecelerity.conf3.extensions "SMTP Extensions") – Array of SMTP extensions | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [snmp](conf.ref.snmp "SNMP") *(scope)* – Simple Network Management Protocol Support scope options | na | (*non-dynamic*) | 3.0 | global |
| [snmp_traps](conf.ref.snmp "SNMP") *(scope)* – Enable and configure generation of SNMP traps | na | (*non-dynamic*) | 3.0 | global |
| [soft_bounce_drain_rate](conf.ref.soft_bounce_drain_rate "soft_bounce_drain_rate") – How many soft bounces to place into the mail queues in a single scheduler iteration | sending | 100 | 3.0 | global |
| [spool_mode](conf.ref.spool_mode "spool_mode") – Set the file mode for newly created spool files | na | 0640 (*non-dynamic*) | 3.0 | global |
| [spoolbase](conf.ref.spoolbase "spoolbase") – Set the base directory for the spool | na | /var/spool/ecelerity (*non-dynamic*) | 3.0 | global |
| [ssl_lock_method](conf.ref.ssl_lock_method "ssl_lock_method") – The SSL lock method | na | mutex (*3.0.17*) (*non-dynamic*) | 3.0 | global |
| [stack_size](conf.ref.threadpool "threadpool") – The stack space for a threadpool | na | 0 (*non-dynamic*) | 3.0 | threadpool |
| [starttls_injection_policy](conf.ref.starttls_injection_policy "starttls_injection_policy") – Protect against SMTP injections prior to TLS | receiving | reject | 3.3 | esmtp_listener, listen, pathway, pathway_group, peer |
| [state](conf.ref.snmp "SNMP") – Whether to enable the SNMP agent | na | 1 (*non-dynamic*) | 3.0 | snmp |
| [state](conf.ref.snmp "SNMP") – Whether to enable generation of SNMP traps | na | 0 (*non-dynamic*) | 3.0 | snmp_traps |
| [static_banner](ecelerity.conf#ecelerity.conf3.listener.options.static_banner) – The banner that is displayed to the remote client | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [subcluster](mbus.conf "mbus.conf") *(deprecated)* – The name of the subcluster (cluster-specific) | na |   | 3.0 | cluster |
| [supplemental_groups](conf.ref.supplemental_groups "supplemental_groups") – Supplemental groups to assume after startup | na | (*non-dynamic*) | 3.0 | security |
| [suspend_delivery](conf.ref.suspend_delivery "suspend_delivery") – Prevent outbound mail delivery | sending | false | 3.0 | binding, binding_group, domain, global |
| [syscontact](conf.ref.snmp "SNMP") – Set the SNMP SysContact option value | na | (*non-dynamic*) | 3.0 | snmp |
| [sysdescription](conf.ref.snmp "SNMP") – Set the SNMP SysDescription option value | na | (*non-dynamic*) | 3.0 | snmp |
| [syslocation](conf.ref.snmp "SNMP") – Set the SNMP SysLocation option value | na | (*non-dynamic*) | 3.0 | snmp |
| [tcp_buffer_size](conf.ref.tcp_buffer_size "tcp_buffer_size") – Maximum tcp buffer size for outbound connections | sending | 32768 | 3.0 | cluster, global |
| [tcp_recv_buffer_size](ecelerity.conf#ecelerity.conf3.listener.options.tcp_recv_buffer_size) – The size of the TCP receive buffer size | receiving | 4096 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [tcp_send_buffer_size](ecelerity.conf#ecelerity.conf3.listener.options.tcp_send_buffer_size) – The size of the TCP send buffer | receiving | 4096 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [threadpool](conf.ref.threadpool "threadpool") *(scope)* – Configure thread pool specific options | na |   | 3.0 | global |
| [timeout](ecelerity.conf#ecelerity.conf3.timeout "Timeout Option") – The timeout for idle control connections on Control_Listeners | receiving | 60 | 3.0 | control_listener |
| [timestampformat](conf.ref.timestampformat "timestampformat") – Set the timestamp format used when logging to stderr | na | [%a %d %b %Y %H:%M:%S] | 3.0 | global |
| [tls](conf.ref.tls "tls") – Determine whether to use a TLS connection for outbound mail | sending | no | 3.0 | binding, binding_group, domain, global |
| [tls_allow_renegotiation](conf.ref.tls_allow_renegotiation "tls_allow_renegotiation") – Whether to enable OpenSSL TLS renegotiation | both | true | 3.5.4 | ecstream_listener, esmtp_listener, http_listener, listen, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_ca](conf.ref.tls_ca "tls_ca") – Certificate authority for outbound mail | sending |   | 3.0 | binding, binding_group, domain, global |
| [tls_certificate](conf.ref.tls_certificate "tls_certificate") – Certificate to use for inbound and outbound mail | both |   | 3.0 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_ciphers](conf.ref.tls_ciphers "tls_ciphers") – Allowable ciphers for a TLS session | both |   | 3.0 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_client_ca](conf.ref.tls_client_ca "tls_client_ca") – Certificate authority for inbound mail | receiving |   | 3.0 | ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_dhparams_file](conf.ref.tls_dhparams_file "tls_dhparams_file") – Specifies DHE parameters that add per-session randomness to the encryption | both |   | 3.6.6 | global |
| [tls_enable_dhe_ciphers](conf.ref.tls_enable_dhe_ciphers "tls_enable_dhe_ciphers") – Controls whether or not DHE ciphers are available | both | true | 3.6.6 | global |
| [tls_ifavailable_fallback](conf.ref.tls_ifavailable_fallback "tls_ifavailable_fallback") – Determine the behavior if TLS negotiation fails | sending | true | 3.5.10, 3.6.4 | binding, binding_group, domain, global |
| [tls_key](conf.ref.tls_key "tls_key") – the TLS key to use for outbound mail or inbound mail | both |   | 3.0 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_protocols](conf.ref.tls_protocols "tls_protocols") – Allowable ciphers for TLS inbound and outbound sessions | both |   | 3.6.6 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer |
| [tls_verified_peer_can_relay](ecelerity.conf#ecelerity.conf3.listener.options "Listener Options") – Verification that peer can relay | receiving | false | 3.0 | ecstream_listener, esmtp_listener, listen, pathway, pathway_group, peer |
| [tls_verified_peer_is_authorized](https://support.messagesystems.com/docs/web-rest-injector/rest.http_listener) – Mark requests that use a verified SSL Client certificate as being authorized | sending | false | 3.1.4 | http_listener, listen, pathway, peer |
| [tls_verify](conf.ref.tls_verify "tls_verify") – Specify how to handle the remote certificates | sending | no | 3.0 | binding, binding_group, domain, global |
| [tls_verify_mode](conf.ref.tls_verify_mode "tls_verify_mode") – Determine whether a TLS certificates is required | receiving |   | 3.0 | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [topology](cluster.config.duravip "7.5. DuraVIP™: IP Fail over") *(scope)* – Define the cluster network topology (cluster-specific) | na |   | 3.0 | cluster |
| [trace_smtp_mode](conf.ref.trace_smtp_mode "trace_smtp_mode") – Set the default permissions of trace files | sending | 0640 (*non-dynamic*) | 3.0 | global |
| [transfail_drain_rate](conf.ref.transfail_drain_rate "transfail_drain_rate") – The maximum number of messages to pop off the transient failure queue in a single scheduler iteration | sending | 100 | 3.0 | global |
| [transform_8bitmime_content](conf.ref.transform_8bitmime_content "transform_8bitmime_content") – Enable 8BITMIME downconversion when sending mail | sending | ifneeded (*3.1.6*) | 3.0 | binding, binding_group, domain, global |
| [trap_destination](conf.ref.snmp "SNMP") – Destination for SNMP trap | na | (*non-dynamic*) | 3.0 | snmp_traps |
| [trap_interval](conf.ref.snmp "SNMP") – Frequency of SNMP trap generation | na | 60 (*non-dynamic*) | 3.0 | snmp_traps |
| [umem_reap_interval](conf.ref.umem_reap_interval "umem_reap_interval") – How often to release unused memory | na | 1800 | 3.0 | global |
| [unconditional_rebind](ecelerity-cluster.conf#option.unconditional_rebind) – Whether the full set_binding logic is invoked or not (cluster-specific) | na | true | 3.0 | cluster |
| [unlink_on_spool_in_failure](conf.ref.unlink_on_spool_in_failure "unlink_on_spool_in_failure") – Whether or not to remove malformed messages | receiving | true | 3.0 | global |
| [use_iflist_cache](conf.ref.use_iflist_cache "use_iflist_cache") – Whether or not to cache the list of interfaces configured by the system | sending | 0 (*non-dynamic*) | 3.0 | global |
| [use_ipv6](conf.ref.use_ipv6 "Use_IPv6") – Affects the selection of IPv6 hosts in the SMTP client | sending | false | 3.0 | global |
| [use_mmap](conf.ref.use_mmap "Use_MMAP") – Use mmap when spooling messages from disk | na | false | 3.0 | global |
| [use_sendfile](conf.ref.use_sendfile "Use_SendFile") – Use sendfile() when sending mail | sending | false | 3.0 | global |
| [use_ssl](ecelerity.conf#ecelerity.conf3.listener.options.use_ssl) – Whether to use SSL verification | receiving | false | 3.0 | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [user](conf.ref.user "user") – User identity to assume after startup | na | ecuser (*non-dynamic*) | 3.0 | security |
| [view_balance_interval](ecelerity-cluster.conf#option.view_balance_interval) – How often DuraVIP™ views are subject to balancing (cluster-specific) | na | 10 | 3.0 | cluster |
| [view_broadcast_interval](ecelerity-cluster.conf#option.view_broadcast_interval) – How often to speculatively broadcast a view announcement to the cluster (cluster-specific) | na | 0 | 3.0 | cluster |
| [view_mature_time](ecelerity-cluster.conf#option.view_mature_time) – How long a DuraVIP™ view needs to remain unchanged before considering it "mature" (cluster-specific) | na | 5 | 3.0 | cluster |
| [warning](conf.ref.debug_flags "debug_flags") – Set the debug level | na |   | 3.0 | debug_flags |
| [watch_interval](conf.ref.snmp "SNMP") – Interval for watched system variables for SNMP traps | na | 10 (*non-dynamic*) | 3.0 | snmp_traps |
| [watch_variables](conf.ref.snmp "SNMP") – SNMP traps watch variables | na | (*non-dynamic*) | 3.0 | snmp_traps |
| [watchdog_interval](conf.ref.watchdog_interval "watchdog_interval") *(deprecated)* – If Momentum is unresponsive for this length of time, it will be restarted | na | 60 | 3.0 | global |
| [xclient](conf.ref.xclient "xclient") – Use the XCLIENT extension to SMTP for outbound mail | sending | no | 3.0 | binding, binding_group, domain, global |
| [xmpp_dialback_secret](https://support.messagesystems.com/docs/web-mobility/mobility.xmpp.modules#mobility.xmpp.modules.xmpp_role) – Use when verifying the XMPP server dialback key (Mobile Momentum) | both |   | 3.4 | domain |
| [xmpp_listener](https://support.messagesystems.com/docs/web-mobility/mobility.xmpp.modules#modules.xmpp.xmpp_listener) *(scope)* – The listener for incoming XMPP connections (Mobile Momentum) | receiving |   | 3.4 | global |
| [xmpp_role](https://support.messagesystems.com/docs/web-mobility/mobility.xmpp.modules#mobility.xmpp.modules.xmpp_role) – Define whether a domain is an XMPP server or client (Mobile Momentum) | both |   | 3.4 | domain |

### 9.1.1. Adaptive Options

This section displays all options of the specified type sorted alphabetically.

<a name="adaptive-options-table"></a>

**Table 9.2. adaptive options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [adaptive_adjustment_interval](modules.adaptive#modules.adaptive.adaptive_adjustment_interval) – Throttle the adaptive adjustment interval | sending | 60 | 3.0 | binding, binding_group, domain, global |
| [adaptive_alert_email_destination](modules.adaptive#modules.adaptive.adaptive_alert_email_destination) – The address where adaptive alerts should be sent | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_alert_email_sender](modules.adaptive#modules.adaptive.adaptive_alert_email_sender) – Set the sender address of the alert email | sending | NULL | 3.0.17 | binding, binding_group, domain, global |
| [adaptive_attempt_threshold](modules.adaptive#modules.adaptive.adaptive_attempt_threshold) – The minimum delivery attempts over a period during which bounce stats are collected and suspensions attempted | sending | 2000 (*3.2*) | 3.0 | binding, binding_group, domain, global |
| [adaptive_backstore_leveldb](conf.ref.adaptive_backstore_leveldb "adaptive_backstore_leveldb") *(scope)* – Use LevelDB as the backing store for Adaptive Delivery | sending |   | 3.6 | global |
| [adaptive_backstore_riak](conf.ref.adaptive_backstore_riak "adaptive_backstore_riak") *(scope)* – Define the characteristics of the Riak backing store | sending |   | 3.6 | global |
| [adaptive_body_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_default_suspension](modules.adaptive#modules.adaptive.adaptive_default_suspension) – The amount of time to suspend a domain | sending | 4 hours | 3.0 | binding, binding_group, domain, global |
| [adaptive_default_suspension_enabled](modules.adaptive#modules.adaptive.adaptive_default_suspension_enabled) – Enables and disables adaptive_rejection_rate_suspension_percentage | sending | false | 3.6.11 | binding, binding_group, domain, global |
| [adaptive_ehlo_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_enabled](conf.ref.adaptive_enabled "adaptive_enabled") – Whether to enable the adaptive module for a specific scope | sending | false | 3.0 | binding, binding_group, domain, global |
| [adaptive_fbl_volume_threshold](modules.adaptive#modules.adaptive.adaptive_fbl_volume_threshold "14.2.5.2.4. adaptive_fbl_volume_threshold and adaptive_attempt_threshold") – The minimum total delivered mail count over a period during which FBL stats are collected | sending | 20000 | 3.2 | binding, binding_group, domain, global |
| [adaptive_idle_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_mailfrom_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_deliveries_per_connection](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_outbound_connections](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_recipients_per_batch](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_recipients_per_connection](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_resident_active_queue](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_retries](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_retry_interval](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0.17 | binding, binding_group, domain, global |
| [adaptive_notification_events](modules.adaptive#modules.adaptive.adaptive_notification_events) – Configure the events that will trigger an email notification | sending | throttle suspension blackhole | 3.5.6, 3.6.1 | binding, binding_group, domain, global |
| [adaptive_notification_interval](modules.adaptive#modules.adaptive.adaptive_notification_interval) – The throttle for adaptive alert notification emails | sending | 3600 | 3.0 | binding, binding_group, domain, global |
| [adaptive_outbound_throttle_messages](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_positive_adjustment_interval](modules.adaptive#modules.adaptive.adaptive_positive_adjustment_interval) – Throttle positive adjustments to adaptive changes | sending | 3600 | 3.0 | binding, binding_group, domain, global |
| [adaptive_rcptto_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_rejection_rate_suspension_percentage](modules.adaptive#modules.adaptive.adaptive_rejection_rate_suspension_percentage) – The rate at which messages are rejected | sending | 20 | 3.0 | binding, binding_group, domain, global |
| [adaptive_retry_fuzz](modules.adaptive#modules.adaptive.adaptive_retry_fuzz) – Allow greater control over bulk message retries in cases where all messages for a domain have to be retried | sending | 4096 | 3.0.26 | binding, binding_group, domain, global |
| [adaptive_retry_interval](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_rset_timeout](modules.adaptive#modules.adaptive.options "14.2.4. Options That Affect Specific Domains") – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_scope](conf.ref.adaptive_scope "adaptive_scope") – Define the scope applicable to adaptive delivery | sending | auto | 3.3 | binding, binding_group, domain, global |
| [adaptive_sweep_rule](modules.adaptive#modules.adaptive.adaptive_sweep_rule "14.2.5.2. adaptive_sweep_rule Scope") *(scope)* – Set the thresholds and actions for adaptive fbl and bounce rules | sending |   | 3.2 | binding, binding_group, domain, global |
| [adaptive_sweep_rule_enabled](modules.adaptive#modules.adaptive.adaptive_sweep_rule_enabled "14.2.5.2.3. The adaptive_sweep_rule_enabled Option") – Enable or disable adaptive_sweep_rule in a specified scope | sending | 1 | 3.2 | binding, binding_group, domain, global |
| [codes](modules.adaptive#modules.adaptive.codes) – adaptive_sweep_rule bounce or fbl codes | sending |   | 3.2 | adaptive_sweep_rule |
| [high_action](modules.adaptive#modules.adaptive.high_action) – The action when the high threshold is met and the number of delivery attempts exceeds the adaptive_attempt_threshold | sending | "suspend" "4 hours" | 3.2 | adaptive_sweep_rule |
| [high_threshold](modules.adaptive#modules.adaptive.high_threshold) – The high threshold value for the sum of the rates of the bounce codes or FBL categories | sending | 10 | 3.2 | adaptive_sweep_rule |
| [low_action](modules.adaptive#modules.adaptive.low_action) – The action when the high threshold is not met but the low threshold is met | sending | "throttle" "down" | 3.2 | adaptive_sweep_rule |
| [low_threshold](modules.adaptive#modules.adaptive.low_threshold) – The low threshold value for the sum of the rates of the bounce codes or FBL categories | sending | 5 | 3.2 | adaptive_sweep_rule |

### 9.1.2. Bounce Options

This section displays all options of the specified type sorted alphabetically.

<a name="bounce-options-table"></a>

**Table 9.3. bounce options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [async_bounce_rendering](conf.ref.async_bounce_rendering "async_bounce_rendering") – Which thread pool to use for bounce rendering | sending | true | 3.0 | global |
| [bounce_behavior](conf.ref.bounce_behavior "bounce_behavior") – Configure the action taken when a message is classified as a bounce | sending | pass | 3.0 | domain, global |
| [bounce_cache_size](conf.ref.bounce_cache_size "bounce_cache_size") – Set the maximum size of the bounce classification cache | na | 16384 | 3.6.9 | global |
| [bounce_cache_ttl](conf.ref.bounce_cache_ttl "bounce_cache_ttl") – Set the maximum TTL for the bounce classification cache | na | 60 | 3.6.9 | global |
| [bounce_domains](conf.ref.bounce_domains "bounce_domains") – Configure the list of domains eligible for bounce processing | receiving |   | 3.0 | global, pathway, pathway_group |
| [bounce_pattern](conf.ref.bounce_pattern "bounce_pattern") – Configure the pattern that inbound email addresses must match to be considered bounces | sending |   | 3.0 | domain, global |
| [bounce_suppress_list](conf.ref.bounce_suppress_list "bounce_suppress_list") – Configure a list of email addresses that may not be considered original recipients | sending |   | 3.0 | global |
| [bounces_inline_original](conf.ref.bounces_inline_original "bounces_inline_original") – How much of the original message to include in MDNs | sending | headers | 3.0 | binding, binding_group, domain, global |
| [generate_bounces](conf.ref.generate_bounces "generate_bounces") – Generate MDNs if mail is failed after reception | sending | true | 3.0 | binding, binding_group, domain, global |
| [generate_bounces_for_multi_recipient_policy_rejections](conf.ref.generate_bounces_for_multi_recipient_policy_rejections "generate_bounces_for_multi_recipient_policy_rejections") – Generate MDNs after reception for policy rejections | receiving | true | 3.0 | global, pathway, pathway_group |
| [generate_delay_dsn](conf.ref.generate_delay_dsn "generate_delay_dsn") – Generate DSNs if mail is delayed | sending | false | 3.0 | binding, binding_group, domain, global |
| [inline_transfail_processing](conf.ref.inline_transfail_processing "inline_transfail_processing") – How to handle transient failure processing | sending | 1 | 3.0 | global |
| [mailerdaemon](conf.ref.mailerdaemon "mailerdaemon") – Set the From: address for MDNs | sending |   | 3.0 | binding, binding_group, domain, global |
| [mdn_failures_notify](conf.ref.mdn_failures_notify "mdn_failures_notify") – Mailbox to which to send null recipient MDNs | sending |   | 3.0 | binding, binding_group, domain, global |
| [never_retry](conf.ref.never_retry "never_retry") – Whether or not to retry delivery of failed messages | sending | false | 3.0 | binding, binding_group, domain, global |
| [soft_bounce_drain_rate](conf.ref.soft_bounce_drain_rate "soft_bounce_drain_rate") – How many soft bounces to place into the mail queues in a single scheduler iteration | sending | 100 | 3.0 | global |
| [transfail_drain_rate](conf.ref.transfail_drain_rate "transfail_drain_rate") – The maximum number of messages to pop off the transient failure queue in a single scheduler iteration | sending | 100 | 3.0 | global |

### 9.1.3. Cluster Options

This section displays all options of the specified type sorted alphabetically.

<a name="cluster-options-table"></a>

**Table 9.4. cluster options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [arp_all_hosts](ecelerity-cluster.conf#option.arp_all_hosts) – Whether or not to aggressively send out ARP information to ensure that the network knows about the IP address assignment (cluster-specific) | na | true | 3.0.13 | cluster |
| [control_cache](eccluster.conf3#eccluster.conf3.logs "Logs") – The name of the cache file storing asynchronous responses | na |   | 3.0 | logs |
| [control_group](ecelerity-cluster.conf#option.control_group) – The cluster console manager utilizes this group to issue cluster-wide configuration commands (cluster-specific) | na | ec_console | 3.0 | cluster |
| [debug_level](modules.overview.implicit "13.1. Module Overview") – Set the module debug level (applicable to all modules) (cluster-specific) | na | error | 3.0 | cluster |
| [dir_mode](eccluster.conf3#eccluster.conf3.logs "Logs") – The octal representation of the file permissions | na |   | 3.0 | logs |
| [duravip_balance_set_size](ecelerity-cluster.conf#option.duravip_balance_set_size) – When balancing DuraVIP™s, how many to process as a batch in response to a balance request (cluster-specific) | na | 1 | 3.0 | cluster |
| [enabled](modules.overview "Chapter 13. Modules") – Whether or not the module is enabled (cluster-specific) | na | true | 3.0 | cluster |
| [file_mode](eccluster.conf3#eccluster.conf3.logs "Logs") – The octal representation of the file permissions (cluster logs) | na |   | 3.0 | logs |
| [heartbeat_start_delay](ecelerity-cluster.conf#option.heartbeat_start_delay) – Seconds to wait after startup before the cluster heartbeat is activated (cluster-specific) | na | 15 | 3.0 | cluster |
| [heartbeats_per_sec](ecelerity-cluster.conf#option.heartbeats_per_sec) – How often to send a heartbeat (cluster-specific) | na | 1 | 3.0 | cluster |
| [if_check_interval](ecelerity-cluster.conf#option.if_check_interval) – How often to run through a maintenance cycle (cluster-specific) | na | 30 | 3.0 | cluster |
| [if_down_limit](ecelerity-cluster.conf#option.if_down_limit) – How long to wait before deciding to bring an IP online (cluster-specific) | na | 4 | 3.0 | cluster |
| [log_active_interval](ecelerity-cluster.conf#option.log_active_interval) – Used to tune centralized logging (cluster-specific) | na | 1 | 3.0 | cluster |
| [log_group](ecelerity-cluster.conf#option.log_group) – Whether or not panic log messages are broadcast over spread (cluster-specific) | na |   | 3.0 | cluster |
| [log_idle_interval](ecelerity-cluster.conf#option.log_idle_interval) – The amount of time to sleep before looking for another segment (cluster-specific) | na | 10 | 3.0 | cluster |
| [logfile](eccluster.conf3#eccluster.conf3.logs.logfile) – Describe the full path to the log file | na |   | 3.0 | logs |
| [logs](ecelerity-cluster.conf "ecelerity-cluster.conf") – Define the location of the cluster manager logs (cluster-specific) | na |   | 3.0 | cluster |
| [logs](eccluster.conf3#eccluster.conf3.logs "Logs") *(scope)* – Configure centralized log files on the cluster manager | na |   | 3.0 | global |
| [manager](cluster.config.logging#cluster.config.logging.complex "7.6.5. More Complex Deployments") *(scope)* – Define managers for subclusters | na |   | 3.0 | logs |
| [max_idle](eccluster.conf3#eccluster.conf3.logs.max_idle) – The maximum number of seconds a log file may be left open | na |   | 3.0 | logs |
| [max_open](eccluster.conf3#eccluster.conf3.logs.max_open) – The maximum number of concurrently open log files | na |   | 3.0 | logs |
| [mbus_daemon](ecelerity-cluster.conf "ecelerity-cluster.conf") *(deprecated)* – The port that the messaging bus listens on (cluster-specific) | na | 4803 | 3.0 | cluster |
| [nodeaddr](ecelerity-cluster.conf#option.nodeaddr) – The canonical cluster address for the node (cluster-specific) | na |   | 3.0 | cluster |
| [nodename](ecelerity-cluster.conf#option.nodename) – Override the node name that is used to canonically identify this cluster node (cluster-specific) | na |   | 3.0 | cluster |
| [replicate](ecelerity-cluster.conf "ecelerity-cluster.conf") *(scope)* – Define the cluster replication framework (cluster-specific) | na |   | 3.0 | cluster |
| [subcluster](mbus.conf "mbus.conf") *(deprecated)* – The name of the subcluster (cluster-specific) | na |   | 3.0 | cluster |
| [topology](cluster.config.duravip "7.5. DuraVIP™: IP Fail over") *(scope)* – Define the cluster network topology (cluster-specific) | na |   | 3.0 | cluster |
| [unconditional_rebind](ecelerity-cluster.conf#option.unconditional_rebind) – Whether the full set_binding logic is invoked or not (cluster-specific) | na | true | 3.0 | cluster |
| [view_balance_interval](ecelerity-cluster.conf#option.view_balance_interval) – How often DuraVIP™ views are subject to balancing (cluster-specific) | na | 10 | 3.0 | cluster |
| [view_broadcast_interval](ecelerity-cluster.conf#option.view_broadcast_interval) – How often to speculatively broadcast a view announcement to the cluster (cluster-specific) | na | 0 | 3.0 | cluster |
| [view_mature_time](ecelerity-cluster.conf#option.view_mature_time) – How long a DuraVIP™ view needs to remain unchanged before considering it "mature" (cluster-specific) | na | 5 | 3.0 | cluster |

### 9.1.4. HTTP Options

This section displays all options of the specified type sorted alphabetically.

<a name="http-options-table"></a>

**Table 9.5. http options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [delivery_response_timeout](conf.ref.delivery_response_timeout "delivery_response_timeout") – Time to wait for a response to an outbound request | sending | 5000 | 3.5.6 | binding, domain, global |
| [http_basic_auth](conf.ref.http_basic_auth "http_basic_auth") – Define the user credentials when using basic HTTP authentication | both |   | 3.5.6 | binding, binding_group, domain, global |
| [http_host](conf.ref.http_host "http_host") – Define the HTTP host | sending |   | 3.5.6 | binding, binding_group, domain, global |
| [http_method](conf.ref.http_method "http_method") – Define the HTTP method to use | sending | POST | 3.5.6 | binding, binding_group, domain, global |
| [http_uri](conf.ref.http_uri "http_uri") – Define the HTTP URI that you wish to connect to | sending |   | 3.5.6 | binding, binding_group, domain, global |
| [http_version](conf.ref.http_version "http_version") – Define the HTTP version to use | sending | 1.1 | 3.5.6 | binding, binding_group, domain, global |

### 9.1.5. Listen Options

This section displays all options of the specified type sorted alphabetically.

<a name="listen-options-table"></a>

**Table 9.6. listen options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [accept_queue_backlog](ecelerity.conf#ecelerity.conf3.listener.options.accept_queue_backlog) – The accept queue backlog | receiving | 0 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [context](ecelerity.conf#ecelerity.conf3.listener.options.context) – Use to set arbitrary connection context key value pairs | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [control_listener](ecelerity.conf#ecelerity.conf3.control_listener "Control_Listener") *(scope)* – The listener for incoming control connections | na |   | 3.0 | global |
| [disable_chunked](https://support.messagesystems.com/docs/web-mobility/mobility.mm7.listener) – An option used with aggregators who do not support chunked transfer-coding (Mobile Momentum) | both | false | 3.1.4 | http_listener, listen, pathway, pathway_group, peer |
| [eccluster_listener](ecelerity-cluster.conf#ecelerity-cluster.conf.eccluster_listener "ECCluster_Listener") *(scope)* – Control communication between cluster nodes (cluster-specific) | na |   | 3.0.15 | global |
| [ecstream_listener](ecelerity.conf#ecelerity.conf.ecstream_listener "ECStream_Listener") *(scope)* – The listener for incoming ECSTREAM connections | receiving |   | 3.0 | global |
| [esmtp_listener](ecelerity.conf#ecelerity.conf3.esmtp_listener "ESMTP_Listener") *(scope)* – The listener for incoming SMTP connections | receiving |   | 3.0 | global |
| [http_listener](https://support.messagesystems.com/docs/web-rest-injector/rest.http_listener) *(scope)* – The listener used with the REST injector | sending |   | 3.1.4 | global |
| [listen](ecelerity.conf#ecelerity.conf3.listener.attributes "Listener Enable Option") *(scope)* – Specify the socket that a listener listens on | receiving |   | 3.0 | control_listener, ecstream_listener, esmtp_listener, http_listener, msgcserver_listener, xmpp_listener |
| [listen_backlog](ecelerity.conf#ecelerity.conf3.listener.options.listen_backlog) – The listen backlog | receiving | 500 (*3.0*) | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [listener_sessions](ecelerity.conf#ecelerity.conf3.listener.options.listener_sessions) – Specifies the maximum number of concurrent sessions that can be established to a listener | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_request_size](https://support.messagesystems.com/docs/web-rest-injector/rest.http_listener) – Limit the size of an HTTP request | both |   | 3.1.4 | http_listener, listen, pathway, pathway_group, peer |
| [mcmt_reception](https://support.messagesystems.com/docs/web-mobility/mm7.mcmt_reception) – Configure a listener to accept the Multi-Channel Message Type (Mobile Momentum) | both | passthru | 3.1.4 | esmtp_listener, listen, pathway, pathway_group, peer |
| [timeout](ecelerity.conf#ecelerity.conf3.timeout "Timeout Option") – The timeout for idle control connections on Control_Listeners | receiving | 60 | 3.0 | control_listener |
| [tls_verified_peer_is_authorized](https://support.messagesystems.com/docs/web-rest-injector/rest.http_listener) – Mark requests that use a verified SSL Client certificate as being authorized | sending | false | 3.1.4 | http_listener, listen, pathway, peer |

### 9.1.6. Logging Options

This section displays all options of the specified type sorted alphabetically.

<a name="logging-options-table"></a>

**Table 9.7. logging options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [critical](conf.ref.debug_flags "debug_flags") – Set the debug level | na | ALL | 3.0 | debug_flags |
| [debug](conf.ref.debug_flags "debug_flags") – Set the debug level | na |   | 3.0 | debug_flags |
| [debug_flags](conf.ref.debug_flags "debug_flags") *(scope)* – Configure debug verbosity | na |   | 3.0 | global |
| [error](conf.ref.debug_flags "debug_flags") – Set the debug level | na | ALL | 3.0 | debug_flags |
| [info](conf.ref.debug_flags "debug_flags") – Set the debug level | na |   | 3.0 | debug_flags |
| [log_requests_to_paniclog](https://support.messagesystems.com/docs/web-rest-injector/rest.http_listener) – Whether to log REST injection requests | sending | false | 3.1.4 | http_listener, listen, pathway, pathway_group, peer |
| [notice](conf.ref.debug_flags "debug_flags") – Set the debug level | na |   | 3.0 | debug_flags |
| [response_transcode_pattern](conf.ref.response_transcode_pattern "response_transcode_pattern") – The regex pattern for comparison to a server response | sending |   | 3.0 | binding, binding_group, domain, global |
| [response_transcode_replace](conf.ref.response_transcode_replace "response_transcode_replace") – The replacement string for a server response | sending |   | 3.0 | binding, binding_group, domain, global |
| [signing_stats](conf.ref.signing_stats "signing_stats") – Control how signing statistics are recorded | sending | all | 3.0.17 | global |
| [timestampformat](conf.ref.timestampformat "timestampformat") – Set the timestamp format used when logging to stderr | na | [%a %d %b %Y %H:%M:%S] | 3.0 | global |
| [warning](conf.ref.debug_flags "debug_flags") – Set the debug level | na |   | 3.0 | debug_flags |

### 9.1.7. Misc Options

This section displays all options of the specified type sorted alphabetically.

<a name="misc-options-table"></a>

**Table 9.8. misc options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [default_charset](conf.ref.default_charset "default_charset") – Control the character set | both | us-ascii | 3.0 | global, pathway, pathway_group |
| [delayed_queue_scan_interval](conf.ref.delayed_queue_scan_interval "delayed_queue_scan_interval") – How often to call the maintainer for a domain | sending | 15 | 3.0 | global |
| [disable_nagle_algorithm](conf.ref.disable_nagle_algorithm "disable_nagle_algorithm") – Disable nagle algorithm on sockets | both | false | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, global, http_listener, listen, xmpp_listener |
| [enable](ecelerity.conf#esmtp_listener_example3 "Example 9.1. ESMTP_Listener") – Enable or disable a listener scope | receiving | true | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [events_per_iter](ecelerity.conf#ecelerity.conf3.listener.options.events_per_iter) – Employ when using a Concurrency greater than 1 | receiving | 0 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [file_mode](ecelerity.conf#ecelerity.conf3.control_listener "Control_Listener") – File access rights in octal notation | na | 0660 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [license](conf.ref.license "license") – Specify an alternate license location | na | /opt/msys/ecelerity/etc (*non-dynamic*) | 3.0 | global |
| [local_changes_file](conf.ref.local_changes_file "local_changes_file") – The file for writing local configuration changes | na | /opt/msys/ecelerity/etc/local_changes.conf | 3.0 | global |
| [local_changes_only](conf.ref.local_changes_only "local_changes_only") – Whether there is a file for writing local configuration change | na | false | 3.0 | global |
| [permastore_interval](conf.ref.permastore_interval "permastore_interval") – The frequency for saving various statistics | na | 300 | 3.0 | global |
| [pidfile](conf.ref.pidfile "pidfile") – Set the PID file path | na | /var/run/ecelerity.pid (*non-dynamic*) | 3.0 | global |
| [reconfig_message](ecelerity.conf#reconfig_message "The Reconfig_Message Option") – The message if the configuration has changed | receiving | 4.3.2 Reconfiguration in progress | 3.0 | esmtp_listener |
| [reserve_maintenance_interval](conf.ref.reserve_maintenance_interval "reserve_maintenance_interval") – How often to perform mail queue maintenance | sending | 15 | 3.0 | global |
| [send_8bitmime](conf.ref.send_8bitmime "send_8bitmime") – Enable advertising of 8BITMIME when sending mail | sending | no | 3.0 | binding, binding_group, domain, global |
| [smtp_extensions](ecelerity.conf#ecelerity.conf3.extensions "SMTP Extensions") – Array of SMTP extensions | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [tcp_recv_buffer_size](ecelerity.conf#ecelerity.conf3.listener.options.tcp_recv_buffer_size) – The size of the TCP receive buffer size | receiving | 4096 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [tcp_send_buffer_size](ecelerity.conf#ecelerity.conf3.listener.options.tcp_send_buffer_size) – The size of the TCP send buffer | receiving | 4096 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [transform_8bitmime_content](conf.ref.transform_8bitmime_content "transform_8bitmime_content") – Enable 8BITMIME downconversion when sending mail | sending | ifneeded (*3.1.6*) | 3.0 | binding, binding_group, domain, global |
| [unlink_on_spool_in_failure](conf.ref.unlink_on_spool_in_failure "unlink_on_spool_in_failure") – Whether or not to remove malformed messages | receiving | true | 3.0 | global |
| [watchdog_interval](conf.ref.watchdog_interval "watchdog_interval") *(deprecated)* – If Momentum is unresponsive for this length of time, it will be restarted | na | 60 | 3.0 | global |
| [xclient](conf.ref.xclient "xclient") – Use the XCLIENT extension to SMTP for outbound mail | sending | no | 3.0 | binding, binding_group, domain, global |

### 9.1.8. Module Options

This section displays all options of the specified type sorted alphabetically.

<a name="module-options-table"></a>

**Table 9.9. module options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [dkim](conf.ref.dkim "dkim") – Enable or disable signing messages | sending |   | 3.0 | binding, binding_group, domain, global |
| [domainkeys](conf.ref.domainkeys "domainkeys") – Enable or disable domainkeys signing | sending |   | 3.0 | binding, binding_group, domain, global |
| [enable_fbl_header_insertion](conf.ref.enable_fbl_header_insertion "enable_fbl_header_insertion") – Enable or disable fbl header insertion | sending |   | 3.0 | binding, binding_group, domain, global |
| [opendkim_sign](conf.ref.opendkim_sign "opendkim_sign") – Whether or not to enable OpenDKIM signing | sending | true (*non-dynamic*) | 3.6 | binding, binding_group, domain, global |

### 9.1.9. Multiple-event Options

This section displays all options of the specified type sorted alphabetically.

<a name="multiple-event-options-table"></a>

**Table 9.10. multiple-event options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [delivery_pool](conf.ref.delivery_pool "delivery_pool") – Associate an eventloop with mail delivery | sending | (*non-dynamic*) | 3.6 | global |
| [event_loop](ecelerity.conf#ecelerity.conf3.listeners.multi-core "Listener Options and Multiple Event Loops") – Associate a listener with an eventloop | sending | (*non-dynamic*) | 3.6 | ecstream_listener, esmtp_listener, listen |
| [eventloop](conf.ref.eventloop "eventloop") *(scope)* – Define a pool of event loops to enable multiple event loop configuration | both | (*non-dynamic*) | 3.6 | global |
| [maintainer_pool](conf.ref.maintainer_pool "maintainer_pool") – Create an eventloop for maintainers | both | (*non-dynamic*) | 3.6 | global |

### 9.1.10. Push Options

This section displays all options of the specified type sorted alphabetically.

<a name="push-options-table"></a>

**Table 9.11. push options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [apn_expiry](https://support.messagesystems.com/docs/web-push/apns.apn_expiry) – Define the number of seconds after which an APNs notification is no longer valid | sending | yes (*non-dynamic*) | 3.5.5 | binding, binding_group, domain, global |
| [gcm_application_id](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_application_id) – Define the package name of the Android application allowed to received notifications | sending |   | 3.5.5 | binding, binding_group, domain, global |
| [gcm_authorization_token_id](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_authorization_token_id) – The authorization token that permits sending Google push notifications | sending |   | 3.5.5 | binding, binding_group, domain, global |
| [gcm_delay_while_idle](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_delay_while_idle) – Whether or not to send the notification immediately if a device is idle | sending | false | 3.5.5 | binding, binding_group, domain, global |
| [gcm_dry_run](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_dry_run) – Test a request without actually sending a message | sending | false | 3.5.5 | binding, binding_group, domain, global |
| [gcm_ttl](https://support.messagesystems.com/docs/web-push/push.gcm.ttl) – Default Time To Live for notifications | sending | -1 | 3.5.5 | binding, binding_group, domain, global |

### 9.1.11. Resource Options

This section displays all options of the specified type sorted alphabetically.

<a name="resource-options-table"></a>

**Table 9.12. resource options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [_unsafe_spool](conf.ref.unsafe_spool "_unsafe_spool") – Allow dangerous spool semantics to be used | na | false | 3.0 | global |
| [address_metrics_cleanse_interval](conf.ref.address_metrics_cleanse_interval "address_metrics_cleanse_interval") – The interval for refreshing address metrics | sending | 3600 | 3.0 | global |
| [address_metrics_lifetime](conf.ref.address_metrics_lifetime "address_metrics_lifetime") – The TTL of address metrics | sending | 1800 | 3.0 | global |
| [backlog](conf.ref.threadpool "threadpool") – The maximum number of jobs that can be queued up for a pool | na | 0 (*non-dynamic*) | 3.0 | threadpool |
| [clear_mail_queue_maintainers](conf.ref.clear_mail_queue_maintainers "clear_mail_queue_maintainers") – Reschedule the mail queue maintainer | both | false, true (*3.6*) | 3.0 | global |
| [concurrency](ecelerity.conf#esmtp_listener_example3 "Example 9.1. ESMTP_Listener") – Define number of available threads | receiving | 0 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, threadpool, xmpp_listener |
| [crypto_engine](conf.ref.crypto_engine "crypto_engine") – Enable hardware cryptography acceleration | both |   | 3.0 | global |
| [delayed_binding_domain_fuzz](conf.ref.delayed_binding_domain_fuzz "delayed_binding_domain_fuzz") – The time period to spread scheduled messages over when a bulk requeue is necessary | sending | 0 | 3.0.26 | binding, binding_group, global |
| [disk_queue_drain_rate](conf.ref.disk_queue_drain_rate "disk_queue_drain_rate") – Control the rate at which messages are spooled in on start-up | both | 100 | 3.0 | global |
| [dns_cache_purge_interval](conf.ref.dns_cache_purge_interval "dns_cache_purge_interval") – How often the DNS response cache is scanned for stale entries | sending | 60 | 3.0 | global |
| [drop_body_after_trans_fail](conf.ref.drop_body_after_trans_fail "drop_body_after_trans_fail") – Number of retry attempts before freeing message memory | sending | 3 | 3.0 | binding, binding_group, domain, global |
| [exclude_vctx_conn](conf.ref.exclude_vctx "exclude_vctx") – Exclude validation connection context keys from being journaled in the spool metadata | both |   | 3.0 | binding, binding_group, domain, global |
| [exclude_vctx_mess](conf.ref.exclude_vctx "exclude_vctx") – Exclude validation message context keys from being journaled in the spool metadata | both |   | 3.0 | binding, binding_group, domain, global |
| [expensive_batch_assessment](conf.ref.expensive_batch_assessment "expensive_batch_assessment") – Treat messages as equal even if the bodies or headers have been modified since reception | receiving | false | 3.0 | global |
| [force_fsync](conf.ref.force_fsync "force_fsync") – Ensure that data is synced to disk on reception | receiving | false | 3.0 | global |
| [growbuf_size](conf.ref.growbuf_size "growbuf_size") – The size of an element in a growbuf chain | na | 16384 | 3.0 | global |
| [initial_hash_buckets](conf.ref.initial_hash_buckets "initial_hash_buckets") – Set the number of hash buckets used by the system | na | 32 | 3.1 | global |
| [keep_message_dicts_in_memory](conf.ref.keep_message_dicts_in_memory "keep_message_dicts_in_memory") – Preserve memory representation of metadata when memory is low | both | false (*non-dynamic*) | 3.0 | global |
| [large_message_threshold](conf.ref.large_message_threshold "large_message_threshold") – Consider a message large when its size exceeds this amount | both | 131072 | 3.0 | global |
| [legacy_message_threshold](conf.ref.legacy_message_threshold "legacy_message_threshold") – The maximum size allowed for messages being passed to legacy modules | both | 1048576 | 3.0 | global |
| [mail_queue_check_vm_interval](conf.ref.mail_queue_check_vm_interval "mail_queue_check_vm_interval") – How often to apply memory management reduction on mail queues | both | 60 | 3.0 | global |
| [malloc2mmap_threshold](conf.ref.malloc2mmap_threshold "malloc2mmap_threshold") – Use mmap when allocations exceed this amount | na | 4092 | 3.0 | global |
| [masterdb_file](conf.ref.masterdb_file "masterdb_file") – Specify an alternate path for the statistics permastore | na | /var/log/ecelerity/ecdb (*non-dynamic*) | 3.0 | global |
| [match_cache_life](conf.ref.match_cache_life "match_cache_life") – Set the maximum number of seconds that the match cache will be valid | na | 0 | 3.0 | global |
| [match_cache_size](conf.ref.match_cache_size "match_cache_size") – The size of the cache that holds the results of looking up matching scopes | na | 16384 | 3.0 | global |
| [max_message_size](ecelerity.conf#ecelerity.conf3.listener.options.max_message_size) – The maximum number of bytes allowed in a single message | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_resident_active_queue](conf.ref.max_resident_active_queue "max_resident_active_queue") – Threshold above which messages are not held in memory | sending | 250 | 3.0 | binding, binding_group, domain, global |
| [max_resident_messages](conf.ref.max_resident_messages "max_resident_messages") – Threshold above which messages are not held in memory | sending | 32768 | 3.0 | binding, binding_group, global |
| [max_resident_transfails](conf.ref.max_resident_transfails "max_resident_transfails") – If the transient failure queue grows beyond this size, messages are swapped out of memory | sending | 100 | 3.0 | global |
| [max_timed_events_per_iter](conf.ref.max_timed_events_per_iter "max_timed_events_per_iter") – The maximum numer of timed events per scheduler iteration | na | 1024 | 3.0.22 | global |
| [memory_goal](conf.ref.memory_goal "memory_goal") – Configure physical memory usage goal | na | 90 | 3.0 | global |
| [memory_hwm](conf.ref.memory_hwm "memory_hwm") – Configure physical memory usage high-water mark | na | 95 | 3.0 | global |
| [migrate_connections_between_sibling_domains](conf.ref.migrate_connections_between_sibling_domains "migrate_connections_between_sibling_domains") – Optimize connections for sibling domains | both | true | 3.4 | global |
| [mime_parse_large_messages_during_reception](conf.ref.mime_parse_large_messages_during_reception "mime_parse_large_messages_during_reception") – Configure whether large messages are parsed upon reception or just in time | receiving | true | 3.0 | global |
| [pcre_cache_size](conf.ref.pcre_cache_size "pcre_cache_size") – Set the maximum size of the ec_pcre_compile cache | na | 100 | 3.0 | global |
| [pcre_cache_ttl](conf.ref.pcre_cache_ttl "pcre_cache_ttl") – Set the maximum TTL for the ec_pcre_compile cache | na | 300 | 3.0 | global |
| [pool_name](ecelerity.conf#esmtp_listener_example3 "Example 9.1. ESMTP_Listener") – Associate a threadpool with a listener | receiving |   | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [scheduler](conf.ref.scheduler "scheduler") – Override the default IO scheduler | na | (*non-dynamic*) | 3.0 | global |
| [spool_mode](conf.ref.spool_mode "spool_mode") – Set the file mode for newly created spool files | na | 0640 (*non-dynamic*) | 3.0 | global |
| [spoolbase](conf.ref.spoolbase "spoolbase") – Set the base directory for the spool | na | /var/spool/ecelerity (*non-dynamic*) | 3.0 | global |
| [stack_size](conf.ref.threadpool "threadpool") – The stack space for a threadpool | na | 0 (*non-dynamic*) | 3.0 | threadpool |
| [tcp_buffer_size](conf.ref.tcp_buffer_size "tcp_buffer_size") – Maximum tcp buffer size for outbound connections | sending | 32768 | 3.0 | cluster, global |
| [threadpool](conf.ref.threadpool "threadpool") *(scope)* – Configure thread pool specific options | na |   | 3.0 | global |
| [trace_smtp_mode](conf.ref.trace_smtp_mode "trace_smtp_mode") – Set the default permissions of trace files | sending | 0640 (*non-dynamic*) | 3.0 | global |
| [umem_reap_interval](conf.ref.umem_reap_interval "umem_reap_interval") – How often to release unused memory | na | 1800 | 3.0 | global |
| [use_iflist_cache](conf.ref.use_iflist_cache "use_iflist_cache") – Whether or not to cache the list of interfaces configured by the system | sending | 0 (*non-dynamic*) | 3.0 | global |
| [use_mmap](conf.ref.use_mmap "Use_MMAP") – Use mmap when spooling messages from disk | na | false | 3.0 | global |
| [use_sendfile](conf.ref.use_sendfile "Use_SendFile") – Use sendfile() when sending mail | sending | false | 3.0 | global |

### 9.1.12. RFC Options

This section displays all options of the specified type sorted alphabetically.

<a name="rfc-options-table"></a>

**Table 9.13. RFC options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [allow_null_envelope_sender](conf.ref.allow_null_envelope_sender "allow_null_envelope_sender") – Allow the null envelope sender in email addresses | receiving | true | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [allow_trailing_whitespace_in_commands](conf.ref.allow_trailing_whitespace_in_commands "allow_trailing_whitespace_in_commands") – Allow trailing white space at the end of an SMTP command | receiving | false | 3.0.26 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [require_ehlo](conf.ref.require_ehlo "require_ehlo") – Reject mail from clients that do not say HELO | receiving | false | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope "rfc2821_allow_whitespace_in_envelope") – Permit trailing white space before the final CRLF | receiving | false | 3.0.26 | global, pathway, pathway_group |
| [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules "rfc2821_pedantic_address_rules") – Allow relaxation of enforcement of the rfc2821 address rules | receiving | true | 3.0 | global, pathway, pathway_group |
| [rfc2822_date_header](conf.ref.rfc2822_date_header "rfc2822_date_header") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ifneeded | 3.0 | global, pathway, pathway_group |
| [rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ignore | 3.0 | global, pathway, pathway_group |
| [rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers "rfc2822_lone_lf_in_headers") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | pedantic | 3.0 | global, pathway, pathway_group |
| [rfc2822_max_line_length](conf.ref.rfc2822_max_line_length "rfc2822_max_line_length") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ignore | 3.0 | global, pathway, pathway_group |
| [rfc2822_max_line_length_policy](conf.ref.rfc2822_max_line_length_policy "rfc2822_max_line_length_policy") – Determine how non-RFC-compliant line lengths are handled | receiving | none | 3.0.26 | global, pathway, pathway_group |
| [rfc2822_messageid_header](conf.ref.rfc2822_messageid_header "rfc2822_messageid_header") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ifneeded | 3.0 | global, pathway, pathway_group |
| [rfc2822_missing_headers](conf.ref.rfc2822_missing_headers "rfc2822_missing_headers") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | reject | 3.0 | global, pathway, pathway_group |
| [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers "rfc2822_trace_headers") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | true | 3.0 | global, pathway, pathway_group |

### 9.1.13. Routing Options

This section displays all options of the specified type sorted alphabetically.

<a name="routing-options-table"></a>

**Table 9.14. routing options**


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [allow_ip_literal](conf.ref.allow_ip_literal "allow_ip_literal") – Allow IP addresses in email addresses | receiving | true | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [blackhole](conf.ref.blackhole "blackhole") – Blackhole mail | sending | false | 3.0 | binding, binding_group, domain, global |
| [delivery_method](conf.ref.delivery_method "delivery_method") – Set the delivery method | sending | ESMTP (*3.0*), SMTP (*2.2*) | 3.0 | binding, binding_group, domain, global |
| [dns_fallback_to_tcp](conf.ref.dns_fallback_to_tcp "dns_fallback_to_tcp") – Whether or not to fail over to TCP in place of UDP | both | false | 3.0.22 | global |
| [domain_for_unqualified_recipient_addresses](conf.ref.domain_for_unqualified_recipient_addresses "domain_for_unqualified_recipient_addresses") – Configure a domain which will be used to resolve delivery for unqualified addresses | receiving |   | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [domain_for_unqualified_sender_address](conf.ref.domain_for_unqualified_sender_address "domain_for_unqualified_sender_address") – Configure a domain which will be used to substitute for unqualified sender addresses | receiving |   | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [ecstream_port](conf.ref.ecstream_port "ecstream_port") – Configure the port for ecstream deliveries | sending | 1825 | 3.2 | binding, binding_group, domain, global |
| [fully_resolve_before_smtp](conf.ref.fully_resolve_before_smtp "fully_resolve_before_smtp") – Resolve all MX and A records before attempting delivery | sending | true | 3.0 | binding, binding_group, domain, global |
| [gateway](conf.ref.gateway "gateway") – Configure a static SMTP route for mail | sending |   | 3.0 | binding, binding_group, domain, global |
| [lmtp_port](conf.ref.lmtp_port "lmtp_port") – Configure the port for LMTP deliveries | sending | 2003 | 3.0 | binding, binding_group, domain, global |
| [only_use_best_mx_for_relay_domains](conf.ref.only_use_best_mx_for_relay_domains "only_use_best_mx_for_relay_domains") – If this is set to true only the lowest numerical priority MXs are used | sending | true | 3.0 | global |
| [open_relay](ecelerity.conf#ecelerity.conf3.listener.options.open_relay) – Whether the MTA is an open relay or not | receiving | false | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [prohibited_hosts](conf.ref.prohibited_hosts "prohibited_hosts") – Prevent mail from being delivered to invalid destinations | sending |   | 3.0 | global |
| [relay_domains](conf.ref.relay_domains "relay_domains") – Configure the list of domains for which Momentum relays mail | receiving |   | 3.0 | global, pathway, pathway_group |
| [relay_for_sending_domains](ecelerity.conf#ecelerity.conf3.listener.options.relay_for_sending_domains) – Domains that may use the MTA as a relay | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [relay_hosts](conf.ref.relay_hosts "relay_hosts") – Configure the list of hosts for which Momentum relays mail | receiving |   | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [remote_smtp_port](conf.ref.remote_smtp_port "remote_smtp_port") – Set the port to be used for SMTP deliveries | sending | 25 | 3.0 | binding, binding_group, domain, global |
| [resolv_conf](conf.ref.resolv_conf "resolv_conf") – Specify a custom resolv.conf file | sending |   | 3.0 | global |
| [routes](conf.ref.routes "routes") – Configure message routing | sending |   | 3.0 | domain, global |
| [use_ipv6](conf.ref.use_ipv6 "Use_IPv6") – Affects the selection of IPv6 hosts in the SMTP client | sending | false | 3.0 | global |

### 9.1.14. Security Options

This section displays all options of the specified type sorted alphabetically.

<a name="security-options-table"></a>

**Table 9.15. security options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [always_allow](conf.aaa#conf.control_authen.overriding "2.2.2.3. Overriding Authentication") – When set to true, authentication is considered to have succeeded, unless always_deny is set | receiving | false | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [always_deny](conf.aaa#conf.control_authen.overriding "2.2.2.3. Overriding Authentication") – If set to true, authentication is considered to have failed | receiving | false | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [authcrammd5parameters](conf.aaa#conf.inbound-auth.cram-md5 "2.2.1.2. CRAM-MD5 authentication") – Configure CRAM-MD5 authentication | receiving |   | 3.0 | control_listener, esmtp_listener, listen, pathway, pathway_group |
| [authdigestmd5parameters](conf.aaa#conf.inbound-authdigest-md5 "2.2.1.1. DIGEST-MD5 Authentication") – Configure DIGEST-MD5 authentication | receiving |   | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [authloginparameters](conf.aaa#conf.control_authen.clear.text "2.2.2.1. Clear Text LOGIN authentication for a Control_Listener") – Configure clear text login authentication | receiving |   | 3.0 | control_listener, esmtp_listener, listen, pathway, pathway_group |
| [authorization](conf.ref.authorization "authorization") *(scope)* – Configure the console commands applicable to users | na |   | 3.0 | global |
| [authorizationparameters](conf.aaa#conf.control_authz.ecauth "2.2.3.1. Authorization Using the ecauth Scheme") – AuthorizationParameters dictionary points to authorization information | receiving |   | 3.0 | control_listener, esmtp_listener, listen |
| [authplainparameters](conf.aaa#conf.inbound-auth.plain.text "2.2.1.4. Plain Text Authentication") – Configure plain text login authentication | receiving |   | 3.0 | esmtp_listener, http_listener, listen, pathway, pathway_group, xmpp_listener |
| [capabilities](conf.ref.capabilities "capabilities") – Selectively retain root capabilities | na | (*non-dynamic*) | 3.0 | security |
| [chroot](conf.ref.chroot "chroot") – chroot to a secure environment | na | (*non-dynamic*) | 3.0 | security |
| [enable_authentication](conf.ecelerity.conf#conf.inbound-mail "2.1.2. Configuring Inbound Mail Service and a Control Listener") – Whether or not to enable authentication | receiving |   | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [enable_authorization](conf.aaa#conf.control_authz "2.2.3. Control Listener Authorization") – Whether or not to enable authorization for console commands | receiving |   | 3.0 | control_listener, listen, peer |
| [group](conf.ref.user "user") – Group identity to assume after startup | na | ecuser (*non-dynamic*) | 3.0 | security |
| [peer](ecelerity.conf#ecelerity.conf3.listener.config.acls "Extended Listener Configuration Using Access Control Lists (ACLs)") *(scope)* – Create an ACL within a specific listener | receiving |   | 3.0 | control_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [privileges](conf.ref.capabilities "capabilities") – Selectively retain root capabilities (Solaris) | na | (*non-dynamic*) | 3.0 | security |
| [role](conf.ref.authorization "authorization") *(scope)* – Define a role within an authorization stanza | na |   | 3.0 | authorization |
| [security](conf.ref.security "security") *(scope)* – Scope for defining which permissions are retained by which user | na | (*non-dynamic*) | 3.0 | global |
| [supplemental_groups](conf.ref.supplemental_groups "supplemental_groups") – Supplemental groups to assume after startup | na | (*non-dynamic*) | 3.0 | security |
| [use_ssl](ecelerity.conf#ecelerity.conf3.listener.options.use_ssl) – Whether to use SSL verification | receiving | false | 3.0 | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [user](conf.ref.user "user") – User identity to assume after startup | na | ecuser (*non-dynamic*) | 3.0 | security |

### 9.1.15. Shaping Options

This section displays all options of the specified type sorted alphabetically.

<a name="shaping-options-table"></a>

**Table 9.16. shaping options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [cluster_max_outbound_connections](conf.ref.cluster_max_outbound_connections "cluster_max_outbound_connections") – Set the maximum number of outbound connections for a domain (cluster-specific) | sending | -1 | 3.0 | binding, domain, global, host |
| [cluster_outbound_throttle_connections](conf.ref.cluster_outbound_throttle_connections "cluster_outbound_throttle_connections") – Limit the rate at which connections are established (cluster-specific) | sending |   | 3.0 | binding_group, domain, global |
| [cluster_outbound_throttle_messages](conf.ref.cluster_outbound_throttle_messages "cluster_outbound_throttle_messages") – Limit the rate at which messages are delivered (cluster-specific) | sending |   | 3.0 | binding_group, domain, global |
| [cluster_scope_max_outbound_connections](conf.ref.cluster_scope_max_outbound_connections "cluster_scope_max_outbound_connections") – Provide traffic shaping for outbound connections (cluster-specific) | sending |   | 3.0.16 | binding, binding_group, domain, global, host |
| [cluster_server_max_outbound_connections](conf.ref.cluster_server_max_outbound_connections "cluster_server_max_outbound_connections") – Set the maximum number of outbound connections (cluster-specific) | sending |   | 3.0 | binding, binding_group, global |
| [connection_allocation_aggressiveness](conf.ref.connection_allocation_aggressiveness "connection_allocation_aggressiveness") – Tune the aggressiveness for establishing new connections to domains | sending | normal | 3.0 | binding, binding_group, domain, global |
| [ecstream_max_batch_size](ecelerity.conf#ecelerity.conf.ecstream_listener "ECStream_Listener") – The maximum number of ECStream messages to accept before dropping back into the scheduler (ECStream only) | receiving | 10000 | 3.0 | ecstream_listener, listen, pathway, pathway_group, peer |
| [inbound_throttle_messages](conf.ref.inbound_throttle_messages "inbound_throttle_messages") – Rate limit inbound mail | receiving |   | 3.0 | global, pathway, pathway_group |
| [max_deliveries_per_connection](conf.ref.max_deliveries_per_connection "max_deliveries_per_connection") – Maximum number of messages to deliver before closing a connection | sending | 0 | 3.0 | binding, binding_group, domain, global |
| [max_outbound_connections](conf.ref.max_outbound_connections "max_outbound_connections") – Set the maximum number of outbound connections | sending | 32 | 3.0 | binding, binding_group, domain, global, host |
| [max_receptions_per_connection](ecelerity.conf#ecelerity.conf3.listener.options.max_receptions_per_connection) – The maximum number of messages allowed in a single session | receiving | 0 | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [max_recipients_per_batch](conf.ref.max_recipients_per_batch "max_recipients_per_batch") – The maximum number of recipients to send in a single outbound message transaction | sending | 100 | 3.0 | binding, binding_group, domain, global |
| [max_recipients_per_connection](conf.ref.max_recipients_per_connection "max_recipients_per_connection") – The maximum number of recipients to send on a connection | sending | 0 | 3.0 | binding, binding_group, domain, esmtp_listener, global, listen, peer |
| [max_recipients_per_message](ecelerity.conf#ecelerity.conf3.listener.options.max_recipients_per_message) – The maximum number of recipients allowed in a message | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_retries](conf.ref.max_retries "max_retries") – Override the system configured max_retries | sending |   | 3.0 | binding, binding_group, domain, global |
| [max_retry_interval](conf.ref.max_retry_interval "max_retry_interval") – Maximum retry interval | sending | 43200 | 3.0 | binding, binding_group, domain, global |
| [never_attempt_expired_messages](conf.ref.never_attempt_expired_messages "never_attempt_expired_messages") – Never attempt delivery of expired messages | sending | false | 3.0 | binding, binding_group, domain, global |
| [outbound_throttle_connections](conf.ref.outbound_throttle_connections "outbound_throttle_connections") – Limit the rate at which connections are established | sending |   | 3.0 | binding, binding_group, domain, global |
| [outbound_throttle_messages](conf.ref.outbound_throttle_messages "outbound_throttle_messages") – Limit the rate at which messages are delivered | sending |   | 3.0 | binding, binding_group, domain, global |
| [scope_max_outbound_connections](conf.ref.scope_max_outbound_connections "scope_max_outbound_connections") – Provide traffic shaping for outbound connections | sending |   | 3.2 | binding, binding_group, domain, global |
| [server_max_file_descriptors](conf.ref.server_max_file_descriptors "server_max_file_descriptors") – Sets the maximum number of file descriptors usable by the system | na | 3000000 | 3.0 | global |
| [server_max_outbound_connections](conf.ref.server_max_outbound_connections "server_max_outbound_connections") – Sets the maximum number of outbound connections | sending | 20000 | 3.0 | binding, binding_group, global |
| [server_reserve_outbound_connections](conf.ref.server_reserve_outbound_connections "server_reserve_outbound_connections") – Sets the server-wide connection limit reserve | sending | 200 | 3.0 | global |
| [service_sessions](ecelerity.conf#ecelerity.conf3.listener.options.service_sessions) – The maximum number of concurrent sessions that can be established to all listeners | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [siv_throttle_cache_size](conf.ref.siv_throttle_cache_size "siv_throttle_cache_size") – Set the maximum number of named throttles | both | 100, 1000 (*3.0.24*) | 3.0 | global |
| [suspend_delivery](conf.ref.suspend_delivery "suspend_delivery") – Prevent outbound mail delivery | sending | false | 3.0 | binding, binding_group, domain, global |

### 9.1.16. SNMP Options

This section displays all options of the specified type sorted alphabetically.

<a name="snmp-options-table"></a>

**Table 9.17. SNMP options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [address](conf.ref.snmp "SNMP") – Set the SNMP IP address and port | na | (*non-dynamic*) | 3.0 | snmp |
| [community](conf.ref.snmp "SNMP") – Set the SNMP Community option value to the desired SNMP community the agent is to join | na | public (*non-dynamic*) | 3.0 | snmp |
| [snmp](conf.ref.snmp "SNMP") *(scope)* – Simple Network Management Protocol Support scope options | na | (*non-dynamic*) | 3.0 | global |
| [snmp_traps](conf.ref.snmp "SNMP") *(scope)* – Enable and configure generation of SNMP traps | na | (*non-dynamic*) | 3.0 | global |
| [state](conf.ref.snmp "SNMP") – Whether to enable the SNMP agent | na | 1 (*non-dynamic*) | 3.0 | snmp |
| [state](conf.ref.snmp "SNMP") – Whether to enable generation of SNMP traps | na | 0 (*non-dynamic*) | 3.0 | snmp_traps |
| [syscontact](conf.ref.snmp "SNMP") – Set the SNMP SysContact option value | na | (*non-dynamic*) | 3.0 | snmp |
| [sysdescription](conf.ref.snmp "SNMP") – Set the SNMP SysDescription option value | na | (*non-dynamic*) | 3.0 | snmp |
| [syslocation](conf.ref.snmp "SNMP") – Set the SNMP SysLocation option value | na | (*non-dynamic*) | 3.0 | snmp |
| [trap_destination](conf.ref.snmp "SNMP") – Destination for SNMP trap | na | (*non-dynamic*) | 3.0 | snmp_traps |
| [trap_interval](conf.ref.snmp "SNMP") – Frequency of SNMP trap generation | na | 60 (*non-dynamic*) | 3.0 | snmp_traps |
| [watch_interval](conf.ref.snmp "SNMP") – Interval for watched system variables for SNMP traps | na | 10 (*non-dynamic*) | 3.0 | snmp_traps |
| [watch_variables](conf.ref.snmp "SNMP") – SNMP traps watch variables | na | (*non-dynamic*) | 3.0 | snmp_traps |

### 9.1.17. Timeout Options

This section displays all options of the specified type sorted alphabetically.

<a name="timeout-options-table"></a>

**Table 9.18. timeout options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [body_timeout](conf.ref.body_timeout "body_timeout") – Network timeout once the DATA phase is complete | sending | 600 | 3.0 | binding, binding_group, domain, global |
| [connect_timeout](conf.ref.connect_timeout "connect_timeout") – Set the connection timeout | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [connect_timeout_to_delay](conf.ref.connect_timeout_to_delay "connect_timeout_to_delay") – Time interval before moving mail into the delayed queue | sending | 900 | 3.0 | binding, binding_group, domain, global |
| [control_client_timeout](conf.ref.control_client_timeout "control_client_timeout") – Network timeout for Momentum control client connections | na | 60 | 3.0 | global |
| [delay_dsn_max_retry_interval](conf.ref.delay_dsn_max_retry_interval "delay_dsn_max_retry_interval") – Maximum interval for sending DSNs to the sender of a message that has not yet been delivered | sending | 43200 | 3.0 | binding, binding_group, domain, global |
| [delay_dsn_retry_interval](conf.ref.delay_dsn_retry_interval "delay_dsn_retry_interval") – Base interval for sending DSNs to the sender of a message that has not yet been delivered | sending | 3600 | 3.0 | binding, binding_group, domain, global |
| [dns_expire_interval](conf.ref.dns_expire_interval "dns_expire_interval") – How often to check for domains with expired DNS information | sending | 10 | 3.0 | global |
| [dns_failures_to_purge](conf.ref.dns_failures_to_purge "dns_failures_to_purge") – Configure the maximum number of DNS lookups | sending | 10 | 3.0 | domain, global |
| [ecstream_idle_time](ecelerity.conf#ecelerity.conf.ecstream_listener "ECStream_Listener") – The number of seconds of inactivity before a client is disconnected (ECStream only) | receiving | 300 | 3.0 | ecstream_listener, listen, pathway, pathway_group, peer |
| [ecstream_timeout](conf.ref.ecstream_timeout "ecstream_timeout") – The amount of time to wait for an ecstream connection to be established | sending | 600 | 3.2 | binding, binding_group, domain, global |
| [ehlo_timeout](conf.ref.ehlo_timeout "ehlo_timeout") – Network timeout for EHLO | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [host_failure_retry](conf.ref.host_failure_retry "host_failure_retry") – Time to wait before attempting a retry | sending | 120 | 3.0 | domain, global |
| [idle_time](ecelerity.conf#ecelerity.conf3.listener.options.idle_time) – The number of seconds of inactivity before a client is disconnected | receiving | 0 | 3.0 | esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [idle_timeout](conf.ref.idle_timeout "idle_timeout") – Time to maintain idle outbound connections | sending | 5 | 3.0 | binding, binding_group, domain, global |
| [mailfrom_timeout](conf.ref.mailfrom_timeout "mailfrom_timeout") – Timeout after MAIL FROM | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [max_dns_ttl](conf.ref.max_dns_ttl "max_dns_ttl") – Set the maximum DNS TTL | sending | 4294967295 | 3.0 | global |
| [message_expiration](conf.ref.message_expiration "message_expiration") – Time to live for messages | sending | 86400 | 3.0 | binding, binding_group, domain, global |
| [min_dns_ttl](conf.ref.min_dns_ttl "min_dns_ttl") – Override DNS TTLs smaller than this value | sending | 0 | 3.0 | global |
| [mx_failures_fallback_to_a](conf.ref.mx_failures_fallback_to_a "mx_failures_fallback_to_a") – Configure the maximum number of times an MX lookup will be attempted | sending | 3 | 3.0 | domain, global |
| [mx_failures_to_delay](conf.ref.mx_failures_to_delay "mx_failures_to_delay") – Number of consecutive failures before a domain is auto-delayed | sending | 50 | 3.0 | domain, global |
| [rcptto_timeout](conf.ref.rcptto_timeout "rcptto_timeout") – Timeout after RCPT TO | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [retry_interval](conf.ref.retry_interval "retry_interval") – Base retry interval | sending | 1200 | 3.0 | binding, binding_group, domain, global |
| [rset_timeout](conf.ref.rset_timeout "rset_timeout") – Set the timeout after RSET | sending | 30 | 3.0 | binding, binding_group, domain, global |

### 9.1.18. TLS Options

This section displays all options of the specified type sorted alphabetically.

<a name="tls-options-table"></a>

**Table 9.19. TLS options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [crypto_lock_method](conf.ref.crypto_lock_method "crypto_lock_method") – Change the locking method used by the TLS layer | both | EC_SSL_DEFAULTLOCK (*non-dynamic*) | 3.0 | global |
| [ssl_lock_method](conf.ref.ssl_lock_method "ssl_lock_method") – The SSL lock method | na | mutex (*3.0.17*) (*non-dynamic*) | 3.0 | global |
| [starttls_injection_policy](conf.ref.starttls_injection_policy "starttls_injection_policy") – Protect against SMTP injections prior to TLS | receiving | reject | 3.3 | esmtp_listener, listen, pathway, pathway_group, peer |
| [tls](conf.ref.tls "tls") – Determine whether to use a TLS connection for outbound mail | sending | no | 3.0 | binding, binding_group, domain, global |
| [tls_allow_renegotiation](conf.ref.tls_allow_renegotiation "tls_allow_renegotiation") – Whether to enable OpenSSL TLS renegotiation | both | true | 3.5.4 | ecstream_listener, esmtp_listener, http_listener, listen, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_ca](conf.ref.tls_ca "tls_ca") – Certificate authority for outbound mail | sending |   | 3.0 | binding, binding_group, domain, global |
| [tls_certificate](conf.ref.tls_certificate "tls_certificate") – Certificate to use for inbound and outbound mail | both |   | 3.0 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_ciphers](conf.ref.tls_ciphers "tls_ciphers") – Allowable ciphers for a TLS session | both |   | 3.0 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_client_ca](conf.ref.tls_client_ca "tls_client_ca") – Certificate authority for inbound mail | receiving |   | 3.0 | ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_dhparams_file](conf.ref.tls_dhparams_file "tls_dhparams_file") – Specifies DHE parameters that add per-session randomness to the encryption | both |   | 3.6.6 | global |
| [tls_enable_dhe_ciphers](conf.ref.tls_enable_dhe_ciphers "tls_enable_dhe_ciphers") – Controls whether or not DHE ciphers are available | both | true | 3.6.6 | global |
| [tls_ifavailable_fallback](conf.ref.tls_ifavailable_fallback "tls_ifavailable_fallback") – Determine the behavior if TLS negotiation fails | sending | true | 3.5.10, 3.6.4 | binding, binding_group, domain, global |
| [tls_key](conf.ref.tls_key "tls_key") – the TLS key to use for outbound mail or inbound mail | both |   | 3.0 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_protocols](conf.ref.tls_protocols "tls_protocols") – Allowable ciphers for TLS inbound and outbound sessions | both |   | 3.6.6 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer |
| [tls_verified_peer_can_relay](ecelerity.conf#ecelerity.conf3.listener.options "Listener Options") – Verification that peer can relay | receiving | false | 3.0 | ecstream_listener, esmtp_listener, listen, pathway, pathway_group, peer |
| [tls_verify](conf.ref.tls_verify "tls_verify") – Specify how to handle the remote certificates | sending | no | 3.0 | binding, binding_group, domain, global |
| [tls_verify_mode](conf.ref.tls_verify_mode "tls_verify_mode") – Determine whether a TLS certificates is required | receiving |   | 3.0 | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |

### 9.1.19. Virtual Options

This section displays all options of the specified type sorted alphabetically.

<a name="virtual-options-table"></a>

**Table 9.20. virtual options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [alias_schemes](conf.ref.alias_schemes "alias_schemes") – Enable named alias expansion schemes | both |   | 3.0 | domain, global, pathway, pathway_group |
| [banner_hostname](ecelerity.conf#ecelerity.conf3.listener.options.banner_hostname) – Specifies the banner hostname that will be displayed to the remote client upon connecting | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [bind_address](conf.ref.bind_address "bind_address") – Source address for outbound connections | sending |   | 3.0 | binding, binding_group, global |
| [binding](conf.ref.binding "binding") *(scope)* – Configure binding-specific options | sending |   | 3.0 | binding_group, global |
| [binding_group](conf.ref.binding_group "binding_group") *(scope)* – Logically group a set of bindings | sending |   | 3.0 | global |
| [cluster_group](ecelerity-cluster.conf#option.cluster_group) – The DuraVIP™ system coordinates IP ownership responsibilities via the cluster_group extended virtual synchrony group (cluster-specific) | na | ec_cluster | 3.0 | cluster |
| [default_binding](conf.ref.default_binding "default_binding") – Control the default binding | sending | normal | 3.0 | global |
| [domain](conf.ref.domain "domain") *(scope)* – Configure domain-specific options | sending |   | 3.0 | binding, binding_group, global |
| [duravip_follow](cluster.config.duravip "7.5. DuraVIP™: IP Fail over") – Specify the binding a listener should follow (cluster-specific) | receiving |   | 3.0 | listen |
| [duravip_preference](cluster.config.duravip "7.5. DuraVIP™: IP Fail over") – Specify a DuraVIP™ preference (cluster-specific) | both |   | 3.0 | binding, listen |
| [ehlo_hostname](conf.ref.ehlo_hostname "ehlo_hostname") – Set the hostname used for EHLO in outbound mail | sending | __hostname__ | 3.0 | binding, binding_group, domain, global |
| [enable_duravip](cluster.config.duravip "7.5. DuraVIP™: IP Fail over") – Whether to enable Durable MultiVIP© bindings (cluster-specific) | both |   | 3.0 | binding, listen |
| [host](conf.ref.host "host") *(scope)* – Configure host-specific options | sending |   | 3.0 | binding, binding_group, global |
| [hostname](conf.ref.hostname "hostname") – Override the system configured hostname | both |   | 3.0 | global |
| [pathway](conf.ref.pathway "pathway") *(scope)* – A grouping of inbound configuration options | receiving |   | 3.0.23 | global, pathway_group |
| [pathway](conf.ref.pathway "pathway") – A means for associating a Listener with a pathway scope | receiving |   | 3.0.23 | ecstream_listener, esmtp_listener, listen, peer |
| [pathway_group](conf.ref.pathway_group "pathway_group") *(scope)* – A container for pathway scopes | receiving |   | 3.0.23 | global |
| [received_hostname](ecelerity.conf#ecelerity.conf3.listener.options.received_hostname) – The hostname that is placed in the received headers | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [static_banner](ecelerity.conf#ecelerity.conf3.listener.options.static_banner) – The banner that is displayed to the remote client | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |

### 9.1.20. XMPP Options

This section displays all options of the specified type sorted alphabetically.

<a name="xmpp-options-table"></a>

**Table 9.21. xmpp options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [xmpp_dialback_secret](https://support.messagesystems.com/docs/web-mobility/mobility.xmpp.modules#mobility.xmpp.modules.xmpp_role) – Use when verifying the XMPP server dialback key (Mobile Momentum) | both |   | 3.4 | domain |
| [xmpp_listener](https://support.messagesystems.com/docs/web-mobility/mobility.xmpp.modules#modules.xmpp.xmpp_listener) *(scope)* – The listener for incoming XMPP connections (Mobile Momentum) | receiving |   | 3.4 | global |
| [xmpp_role](https://support.messagesystems.com/docs/web-mobility/mobility.xmpp.modules#mobility.xmpp.modules.xmpp_role) – Define whether a domain is an XMPP server or client (Mobile Momentum) | both |   | 3.4 | domain |


|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref)  | [Up](conf.ref) |  [Next](conf.ref.files) |
| Chapter 9. Ecelerity.conf Configuration Reference  | [Table of Contents](index) |  9.2. Configuration Files and Option Details |
