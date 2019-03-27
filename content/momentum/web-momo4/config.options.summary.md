| [Prev](modules.summary.all.modules)  | Part X. Reference |  [Next](console_commands) |

## Chapter 66. Configuration Options Summary

This chapter lists all configuration options visible in the following scopes; global, domain, host, binding, binding_group, security, pathway, pathway_group, listener, listen, peer, threadpool, debug_flags, and cluster, as well as in the listener-specific scope. Module-specific options are documented in the module documentation and options specific to Mobile Momentum are documented in the Mobile Momentum documents. Options are sorted alphabetically by name. If an option functions as a scope, this is indicated by `(scope)`.

The `Type` column indicates the MTA type of a given option. Options of type `na` do not directly apply to either a sending or receiving MTA.

If an option has a default value, it is shown in the `Default` column followed by a version number, if there has been a change to the default value. If the value of an option cannot be changed at runtime, the `Default` column will show `(non-dynamic)`.

The `Version` column indicated the version(s) of Momentum that support the option.

<a name="all-options-table"></a>

**Table 66.1. All options**

| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [_unsafe_spool](conf.ref.unsafe_spool "_unsafe_spool") – Allow dangerous spool semantics to be used | na | false | 4.0 and later | global |
| **accept_queue_backlog** – Accept queue backlog | receiving | 0 | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [adaptive_adjustment_interval](modules.adaptive#modules.adaptive.adaptive_adjustment_interval) – Throttle the adaptive adjustment interval | sending | 60 | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_alert_email_destination](modules.adaptive#modules.adaptive.adaptive_alert_email_destination) – Address where adaptive alerts should be sent | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_notification_events](modules.adaptive#modules.adaptive.adaptive_notification_events) – Set the sender address of the alert email | sending | NULL | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_attempt_threshold](modules.adaptive#modules.adaptive.adaptive_attempt_threshold) – Minimum delivery attempts over a period during which bounce stats are collected and suspensions attempted | sending | 2000 (*3.2*) | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_backstore_leveldb](conf.ref.adaptive_backstore_leveldb "adaptive_backstore_leveldb") *(scope)* – Use LevelDB as the backing store for Adaptive Delivery | sending |   | 4.0 and later | global |
| [adaptive_backstore_riak](conf.ref.adaptive_backstore_riak "adaptive_backstore_riak") *(scope)* – Define the characteristics of the Riak backing store | sending |   | 4.0 and later | global |
| [adaptive_body_timeout](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_default_suspension](modules.adaptive#modules.adaptive.adaptive_default_suspension) – Amount of time to suspend a domain | sending | 4 hours | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_ehlo_timeout](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_enabled](conf.ref.adaptive_enabled "adaptive_enabled") – Whether to enable the adaptive module for a specific scope | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_fbl_volume_threshold](modules.adaptive#modules.adaptive.adaptive_fbl_volume_threshold) – Minimum total delivered mail count over a period during which FBL stats are collected | sending | 20000 | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_idle_timeout](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_mailfrom_timeout](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_deliveries_per_connection](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_outbound_connections](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_recipients_per_batch](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_recipients_per_connection](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_resident_active_queue](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_retries](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_retry_interval](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_notification_events](modules.adaptive#modules.adaptive.adaptive_notification_events) – Configure the events that will trigger an email notification | sending | throttle suspension blackhole | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_notification_interval](modules.adaptive#modules.adaptive.adaptive_notification_interval) – Throttle for adaptive alert notification emails | sending | 3600 | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_outbound_throttle_messages](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_positive_adjustment_interval](modules.adaptive#modules.adaptive.adaptive_positive_adjustment_interval) – Throttle positive adjustments to adaptive changes | sending | 3600 | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_rcptto_timeout](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_rejection_rate_suspension_percentage](modules.adaptive#modules.adaptive.adaptive_rejection_rate_suspension_percentage) – Rate at which messages are rejected | sending | 20 | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_retry_fuzz](modules.adaptive#modules.adaptive.adaptive_retry_fuzz) – Allow greater control over bulk message retries in cases where all messages for a domain have to be retried | sending | 4096 | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_retry_interval](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_rset_timeout](modules.adaptive "71.3. adaptive – Adaptive Delivery") – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_scope](conf.ref.adaptive_scope "adaptive_scope") – Define the scope applicable to adaptive delivery | sending | auto | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_sweep_rule](modules.adaptive#modules.adaptive.adaptive_sweep_rule) *(scope)* – Set the thresholds and actions for adaptive fbl and bounce rules | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_sweep_rule_enabled](modules.adaptive#modules.adaptive.adaptive_sweep_rule_enabled) – Enable or disable adaptive_sweep_rule in a specified scope | sending | 1 | 4.0 and later | binding, binding_group, domain, global |
| [address](conf.ref.snmp#conf.ref.snmp.address) – Set the SNMP IP address and port | na | (*non-dynamic*) | 4.0 and later | snmp |
| [address_metrics_cleanse_interval](conf.ref.address_metrics_cleanse_interval "address_metrics_cleanse_interval") – Interval for refreshing address metrics | sending | 3600 | 4.0 and later | global |
| [address_metrics_lifetime](conf.ref.address_metrics_lifetime "address_metrics_lifetime") – TTL of address metrics | sending | 1800 | 4.0 and later | global |
| [alias_schemes](conf.ref.alias_schemes "alias_schemes") – Enable named alias expansion schemes | both |   | 4.0 and later | domain, global, pathway, pathway_group |
| [allow_ip_literal](conf.ref.allow_ip_literal "allow_ip_literal") – Allow IP addresses in email addresses | receiving | true | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [allow_null_envelope_sender](conf.ref.allow_null_envelope_sender "allow_null_envelope_sender") – Allow the null envelope sender in email addresses | receiving | true | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [allow_trailing_whitespace_in_commands](conf.ref.allow_trailing_whitespace_in_commands "allow_trailing_whitespace_in_commands") – Allow trailing white space at the end of an SMTP command | receiving | false | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [always_allow](control_auth#control_auth.overriding "17.2.4. Overriding Authentication") – When set to true, authentication is considered to have succeeded, unless always_deny is set | receiving | false | 4.0 and later | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [always_deny](control_auth#control_auth.overriding "17.2.4. Overriding Authentication") – If set to true, authentication is considered to have failed | receiving | false | 4.0 and later | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [apn_expiry](https://support.messagesystems.com/docs/web-push/apns.apn_expiry) – Define the number of seconds after which an APNs notification is no longer valid | sending | yes (*non-dynamic*) | 4.0 and later | binding, binding_group, domain, global |
| [arp_all_hosts](modules.cluster#option.arp_all_hosts) – Whether or not to aggressively send out ARP information to ensure that the network knows about the IP address assignment (cluster-specific) | na | true | 4.0 and later | cluster |
| [async_bounce_rendering](conf.ref.async_bounce_rendering "async_bounce_rendering") – Which thread pool to use for bounce rendering | sending | true | 4.0 and later | global |
| [authcrammd5parameters](inbound_smtp#inbound_smtp.cram-md5 "19.5.2. CRAM-MD5 Authentication") – Configure CRAM-MD5 authentication | receiving |   | 4.0 and later | control_listener, esmtp_listener, listen, pathway, pathway_group |
| [authdigestmd5parameters](inbound_smtp#inbound_smtp.digest-md5 "19.5.1. DIGEST-MD5 Authentication") – Configure DIGEST-MD5 authentication | receiving |   | 4.0 and later | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [authloginparameters](control_auth#control_auth.clear.text "17.2.2. Clear Text LOGIN Authentication") – Configure clear text login authentication | receiving |   | 4.0 and later | control_listener, esmtp_listener, listen, pathway, pathway_group |
| [authorization](conf.ref.authorization "authorization") *(scope)* – Configure the console commands applicable to users | na |   | 4.0 and later | global |
| [authorizationparameters](control_authz#control_authz.ecauth "17.4.1. Authorization Using the ecauth Scheme") – AuthorizationParameters dictionary points to authorization information | receiving |   | 4.0 and later | control_listener, esmtp_listener, listen |
| [authplainparameters](inbound_smtp#inbound_smtp.plain.text "19.5.4. Plain Text Authentication") – Configure plain text login authentication | receiving |   | 4.0 and later | esmtp_listener, http_listener, listen, pathway, pathway_group, xmpp_listener |
| [backlog](conf.ref.threadpool "threadpool") – Maximum number of jobs that can be queued up for a pool | na | 0 (*non-dynamic*) | 4.0 and later | threadpool |
| **banner_hostname** – Specifies the banner hostname that will be displayed to the remote client upon connecting | receiving |   | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [bind_address](conf.ref.bind_address "bind_address") – Source address for outbound connections | sending |   | 4.0 and later | binding, binding_group, global |
| [binding](conf.ref.binding "binding") *(scope)* – Configure binding-specific options | sending |   | 4.0 and later | binding_group, global |
| [binding_auto_replumb](conf.ref.binding_auto_replumb "binding_auto_replumb") *(scope)* – Enable or disable the auto replumber | sending and receiving |   | 4.2.1.11 and later | global |
| [binding_auto_replumb_interval](conf.ref.binding_auto_replumb_interval "binding_auto_replumb_interval") *(scope)* – Sets the time interval to check the plumbed state of statically plumbed bindings | sending and receiving |   | 4.2.1.11 and later | global |
| [binding_group](conf.ref.binding_group "binding_group") *(scope)* – Logically group a set of bindings | sending |   | 4.0 and later | global |
| [blackhole](conf.ref.blackhole "blackhole") – Blackhole mail | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [body_timeout](conf.ref.body_timeout "body_timeout") – Network timeout once the DATA phase is complete | sending | 600 | 4.0 and later | binding, binding_group, domain, global |
| [bounce_behavior](conf.ref.bounce_behavior "bounce_behavior") – Configure the action taken when a message is classified as a bounce | sending | pass | 4.0 and later | domain, global |
| [bounce_domains](conf.ref.bounce_domains "bounce_domains") – Configure the list of domains eligible for bounce processing | receiving |   | 4.0 and later | global, pathway, pathway_group |
| [bounce_pattern](conf.ref.bounce_pattern "bounce_pattern") – Configure the pattern that inbound email addresses must match to be considered bounces | sending |   | 4.0 and later | domain, global |
| [bounce_suppress_list](conf.ref.bounce_suppress_list "bounce_suppress_list") – Configure a list of email addresses that may not be considered original recipients | sending |   | 4.0 and later | global |
| [bounces_inline_original](conf.ref.bounces_inline_original "bounces_inline_original") – How much of the original message to include in MDNs | sending | headers | 4.0 and later | binding, binding_group, domain, global |
| [capabilities](conf.ref.capabilities "capabilities") – Selectively retain root capabilities | na | (*non-dynamic*) | 4.0 and later | security |
| [chroot](conf.ref.chroot "chroot") – chroot to a secure environment | na | (*non-dynamic*) | 4.0 and later | security |
| [clear_mail_queue_maintainers](conf.ref.clear_mail_queue_maintainers "clear_mail_queue_maintainers") – Reschedule the mail queue maintainer | both | true | 4.0 and later | global |
| [click_tracking_enabled](config.click_tracking_enabled "click_tracking_enabled") – Enable or disable click tracking for SMTP injections | boolean | false | 4.1-HF4 (beta) | esmtp_listener, listen, pathway, pathway_group, peer |
| [click_tracking_scheme](config.click_tracking_scheme "click_tracking_scheme") – Set the hyperlink scheme to use for click tracking links in SMTP injections | string | http | 4.1-HF4 (beta) | esmtp_listener, listen, pathway, pathway_group, peer |
| **cluster_group** – The DuraVIP™ system coordinates IP ownership responsibilities via the cluster_group extended virtual synchrony group (cluster-specific) | na | ec_cluster | 4.0 and later | cluster |
| [cluster_max_outbound_connections](conf.ref.cluster_max_outbound_connections "cluster_max_outbound_connections") – Set the maximum number of outbound connections for a domain (cluster-specific) | sending | -1 | 4.0 and later | binding, domain, global, host |
| [cluster_outbound_throttle_connections](conf.ref.cluster_outbound_throttle_connections "cluster_outbound_throttle_connections") – Limit the rate at which connections are established (cluster-specific) | sending |   | 4.0 and later | binding_group, domain, global |
| [cluster_outbound_throttle_messages](conf.ref.cluster_outbound_throttle_messages "cluster_outbound_throttle_messages") – Limit the rate at which messages are delivered (cluster-specific) | sending |   | 4.0 and later | binding_group, domain, global |
| [cluster_scope_max_outbound_connections](conf.ref.cluster_scope_max_outbound_connections "cluster_scope_max_outbound_connections") – Provide traffic shaping for outbound connections (cluster-specific) | sending |   | 4.0 and later | binding, binding_group, domain, global, host |
| [cluster_server_max_outbound_connections](conf.ref.cluster_server_max_outbound_connections "cluster_server_max_outbound_connections") – Set the maximum number of outbound connections (cluster-specific) | sending |   | 4.0 and later | binding, binding_group, global |
| [codes](modules.adaptive#modules.adaptive.codes) – adaptive_sweep_rule bounce or fbl codes | sending |   | 4.0 and later | adaptive_sweep_rule |
| [community](conf.ref.snmp#conf.ref.snmp.community) – Set the SNMP Community option value to the desired SNMP community the agent is to join | na | public (*non-dynamic*) | 4.0 and later | snmp |
| [concurrency](esmtp_listener#esmtp_listener.config "19.1. ESMTP_Listener Configuration") – Define number of available threads | receiving | 0 | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, threadpool, xmpp_listener |
| [connect_timeout](conf.ref.connect_timeout "connect_timeout") – Set the connection timeout | sending | 300 | 4.0 and later | binding, binding_group, domain, global |
| [connect_timeout_to_delay](conf.ref.connect_timeout_to_delay "connect_timeout_to_delay") – Time interval before moving mail into the delayed queue | sending | 900 | 4.0 and later | binding, binding_group, domain, global |
| [connection_allocation_aggressiveness](conf.ref.connection_allocation_aggressiveness "connection_allocation_aggressiveness") – Tune the aggressiveness for establishing new connections to domains | sending | normal | 4.0 and later | binding, binding_group, domain, global |
| [context](conf.ref.context "context") – Use to set arbitrary connection context key value pairs | receiving |   | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [control_cache](conf.ref.eccluster.conf#eccluster.conf.logs.control_cache) – Name of the cache file storing asynchronous responses | na |   | 4.0 and later | logs |
| [control_client_timeout](conf.ref.control_client_timeout "control_client_timeout") – Network timeout for Momentum control client connections | na | 60 | 4.0 and later | global |
| [control_group](conf.ref.ecelerity_cluster.conf "16.3. ecelerity-cluster.conf File") – Cluster manager utilizes this group to issue cluster-wide configuration commands (cluster-specific) | na | ec_console | 4.0 and later | cluster |
| [control_listener](control_listener#control_listener.config "17.1. Control_Listener Configuration") *(scope)* – Listener for incoming control connections | na |   | 4.0 and later | global |
| [critical](conf.ref.debug_flags "debug_flags") – Set the debug level | na | ALL | 4.0 and later | debug_flags |
| [crypto_engine](conf.ref.crypto_engine "crypto_engine") – Enable hardware cryptography acceleration | both |   | 4.0 and later | global |
| [crypto_lock_method](config.crypto_lock_method "crypto_lock_method") – Set the locking method used by the TLS layer | receiving and sending | EC_SSL_DEFAULTLOCK (*non-dynamic*) | 4.0 and later | global |
| [debug](conf.ref.debug_flags "debug_flags") – Set the debug level | na |   | 4.0 and later | debug_flags |
| [debug_flags](conf.ref.debug_flags "debug_flags") *(scope)* – Configure debug verbosity | na |   | 4.0 and later | global |
| [debug_level](module_config "15.5. Modules") – Set the module debug level (applicable to all modules) (cluster-specific) | na | error | 4.0 and later | cluster |
| [default_binding](conf.ref.default_binding "default_binding") – Control the default binding | sending | normal | 4.0 and later | global |
| [default_charset](conf.ref.default_charset "default_charset") – Control the character set | both | us-ascii | 4.0 and later | global, pathway, pathway_group |
| [delay_dsn_max_retry_interval](conf.ref.delay_dsn_max_retry_interval "delay_dsn_max_retry_interval") – Maximum interval for sending DSNs to the sender of a message that has not yet been delivered | sending | 43200 | 4.0 and later | binding, binding_group, domain, global |
| [delay_dsn_retry_interval](conf.ref.delay_dsn_retry_interval "delay_dsn_retry_interval") – Base interval for sending DSNs to the sender of a message that has not yet been delivered | sending | 3600 | 4.0 and later | binding, binding_group, domain, global |
| [delayed_binding_domain_fuzz](conf.ref.delayed_binding_domain_fuzz "delayed_binding_domain_fuzz") – Time period to spread scheduled messages over when a bulk requeue is necessary | sending | 0 | 4.0 and later | binding, binding_group, global |
| [delayed_queue_scan_interval](conf.ref.delayed_queue_scan_interval "delayed_queue_scan_interval") – How often to call the maintainer for a domain | sending | 15 | 4.0 and later | global |
| [delivery_method](conf.ref.delivery_method "delivery_method") – Set the delivery method | sending | ESMTP (*3.0*), SMTP (*2.2*) | 4.0 and later | binding, binding_group, domain, global |
| [delivery_pool](config.ref.delivery_pool "delivery_pool") – Associate an eventloop with mail delivery | sending | (*non-dynamic*) | 4.0 and later | global |
| [delivery_response_timeout](conf.ref.delivery_response_timeout "delivery_response_timeout") – Time to wait for a response to an outbound request | sending | 5000 | 4.0 and later | binding, domain, global |
| [dir_mode](conf.ref.eccluster.conf#eccluster.conf.logs.dir_mode) – Octal representation of the file permissions | na |   | 4.0 and later | logs |
| [disable_chunked](https://support.messagesystems.com/docs/web-mobility/mobility.mm7.listener) – Option used with aggregators who do not support chunked transfer-coding (Mobile Momentum) | both | false | 4.0 and later | http_listener, listen, pathway, pathway_group, peer |
| [disable_nagle_algorithm](conf.ref.disable_nagle_algorithm "disable_nagle_algorithm") – Disable nagle algorithm on sockets | both | false | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, global, http_listener, listen, xmpp_listener |
| [disk_queue_drain_rate](conf.ref.disk_queue_drain_rate "disk_queue_drain_rate") – Control the rate at which messages are spooled in on start-up | both | 100 | 4.0 and later | global |
| [dns_cache_purge_interval](conf.ref.dns_cache_purge_interval "dns_cache_purge_interval") – How often the DNS response cache is scanned for stale entries | sending | 60 | 4.0 and later | global |
| [dns_expire_interval](conf.ref.dns_expire_interval "dns_expire_interval") – How often to check for domains with expired DNS information | sending | 10 | 4.0 and later | global |
| [dns_failures_to_purge](conf.ref.dns_failures_to_purge "dns_failures_to_purge") – Configure the maximum number of DNS lookups | sending | 10 | 4.0 and later | domain, global |
| [dns_fallback_to_tcp](conf.ref.dns_fallback_to_tcp "dns_fallback_to_tcp") – Whether or not to fail over to TCP in place of UDP | both | false | 4.0 and later | global |
| [domain](conf.ref.domain "domain") *(scope)* – Configure domain-specific options | sending |   | 4.0 and later | binding, binding_group, global |
| [domain_for_unqualified_recipient_addresses](conf.ref.domain_for_unqualified_recipient_addresses "domain_for_unqualified_recipient_addresses") – Configure a domain which will be used to resolve delivery for unqualified addresses | receiving |   | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [domain_for_unqualified_sender_address](conf.ref.domain_for_unqualified_sender_address "domain_for_unqualified_sender_address") – Configure a domain which will be used to substitute for unqualified sender addresses | receiving |   | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [domainkeys](conf.ref.domainkeys "domainkeys") – Enable or disable domainkeys signing | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [drop_body_after_trans_fail](conf.ref.drop_body_after_trans_fail "drop_body_after_trans_fail") – Number of retry attempts before freeing message memory | sending | 3 | 4.0 and later | binding, binding_group, domain, global |
| [duravip_balance_set_size](modules.cluster#option.duravip_balance_set_size) – When balancing DuraVIP™s, how many to process as a batch in response to a balance request (cluster-specific) | na | 1 | 4.0 and later | cluster |
| [duravip_follow](cluster.config.duravip "Chapter 27. DuraVIP™: IP Fail over") – Specify the binding a listener should follow (cluster-specific) | receiving |   | 4.0 and later | listen |
| [duravip_preference](cluster.config.duravip "Chapter 27. DuraVIP™: IP Fail over") – Specify a DuraVIP™ preference (cluster-specific) | both |   | 4.0 and later | binding, listen |
| [eccluster_listener](cluster.listeners#eccluster_listener "16.5.1. ECCluster_Listener Configuration") *(scope)* – Control communication between cluster nodes (cluster-specific) | na |   | 4.0 and later | global |
| [ecstream_idle_time](ecstream_listener "Chapter 18. Configuring Inbound Mail Service Using ECStream") – Number of seconds of inactivity before a client is disconnected (ECStream only) | receiving | 300 | 4.0 and later | ecstream_listener, listen, pathway, pathway_group, peer |
| [ecstream_listener](ecstream_listener "Chapter 18. Configuring Inbound Mail Service Using ECStream") *(scope)* – Listener for incoming ECSTREAM connections | receiving |   | 4.0 and later | global |
| [ecstream_max_batch_size](ecstream_listener "Chapter 18. Configuring Inbound Mail Service Using ECStream") – Maximum number of ECStream messages to accept before dropping back into the scheduler (ECStream only) | receiving | 10000 | 4.0 and later | ecstream_listener, listen, pathway, pathway_group, peer |
| [ecstream_port](conf.ref.ecstream_port "ecstream_port") – Configure the port for ecstream deliveries | sending | 1825 | 4.0 and later | binding, binding_group, domain, global |
| [ecstream_timeout](conf.ref.ecstream_timeout "ecstream_timeout") – Amount of time to wait for an ecstream connection to be established | sending | 600 | 4.0 and later | binding, binding_group, domain, global |
| [ehlo_hostname](conf.ref.ehlo_hostname "ehlo_hostname") – Set the hostname used for EHLO in outbound mail | sending | __hostname__ | 4.0 and later | binding, binding_group, domain, global |
| [ehlo_timeout](conf.ref.ehlo_timeout "ehlo_timeout") – Network timeout for EHLO | sending | 300 | 4.0 and later | binding, binding_group, domain, global |
| [enable](listeners#listeners.enable.option "15.4.2. Listener Enable Option") – Enable or disable a listener scope | receiving | true | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [enable_authentication](control_auth "17.2. Control_Listener Authentication") – Whether or not to enable authentication | receiving |   | 4.0 and later | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [enable_authorization](control_authz "17.4. Control_Listener Authorization") – Whether or not to enable authorization for console commands | receiving |   | 4.0 and later | control_listener, listen, peer |
| [enable_duravip](cluster.config.duravip "Chapter 27. DuraVIP™: IP Fail over") – Whether to enable Durable MultiVIP© bindings (cluster-specific) | both |   | 4.0 and later | binding, listen |
| [enable_fbl_header_insertion](conf.ref.enable_fbl_header_insertion "enable_fbl_header_insertion") – Enable or disable fbl header insertion | sending |   | 4.0 and later | binding, binding_group, domain, global |
| **enabled** – Whether or not the module is enabled (cluster-specific) | na | true | 4.0 and later | cluster |
| [error](conf.ref.debug_flags "debug_flags") – Set the debug level | na | ALL | 4.0 and later | debug_flags |
| [esmtp_listener](esmtp_listener "Chapter 19. Configuring Inbound Mail Service Using SMTP") *(scope)* – Listener for incoming SMTP connections | receiving |   | 4.0 and later | global |
| [event_loop](config.ref.event_loop "event_loop") – Associate a listener with an eventloop | sending | (*non-dynamic*) | 4.0 and later | ecstream_listener, esmtp_listener, listen |
| [eventloop](config.ref.eventloop "eventloop") *(scope)* – Define a pool of event loops to enable multiple event loop configuration | both | (*non-dynamic*) | 4.0 and later | global |
| [events_per_iter](conf.ref.events_per_iter "events_per_iter") – Employ when using a Concurrency greater than 1 | receiving | 0 | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [exclude_vctx_conn](conf.ref.exclude_vctx_conn "exclude_vctx_conn") – Exclude validation connection context keys from being journaled in the spool metadata | both |   | 4.0 and later | binding, binding_group, domain, global |
| [exclude_vctx_mess](conf.ref.exclude_vctx_mess "exclude_vctx_mess") – Exclude validation message context keys from being journaled in the spool metadata | both |   | 4.0 and later | binding, binding_group, domain, global |
| [expensive_batch_assessment](conf.ref.expensive_batch_assessment "expensive_batch_assessment") – Treat messages as equal even if the bodies or headers have been modified since reception | receiving | false | 4.0 and later | global |
| [File_Mode](conf.ref.eccluster.conf#eccluster.conf.logs.file_mode) – File access rights in octal notation | na | 0660 | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [file_mode](conf.ref.eccluster.conf#eccluster.conf.logs.logfile) – Octal representation of the file permissions (cluster logs) | na |   | 4.0 and later | logs |
| [force_fsync](conf.ref.force_fsync "force_fsync") – Ensure that data is synced to disk on reception | receiving | false | 4.0 and later | global |
| [fully_resolve_before_smtp](conf.ref.fully_resolve_before_smtp "fully_resolve_before_smtp") – Resolve all MX and A records before attempting delivery | sending | true | 4.0 and later | binding, binding_group, domain, global |
| [gateway](conf.ref.gateway "gateway") – Configure a static SMTP route for mail | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [gcm_application_id](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_application_id) – Define the package name of the Android application allowed to received notifications | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [gcm_authorization_token_id](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_authorization_token_id) – Authorization token that permits sending Google push notifications | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [gcm_delay_while_idle](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_delay_while_idle) – Whether or not to send the notification immediately if a device is idle | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [gcm_dry_run](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_dry_run) – Test a request without actually sending a message | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [gcm_ttl](https://support.messagesystems.com/docs/web-push/push.gcm.gcm_ttl) – Default Time To Live for notifications | sending | -1 | 4.0 and later | binding, binding_group, domain, global |
| [generate_bounces](conf.ref.generate_bounces "generate_bounces") – Generate MDNs if mail is failed after reception | sending | true | 4.0 and later | binding, binding_group, domain, global |
| [generate_bounces_for_multi_recipient_policy_rejections](conf.ref.generate_bounces_for_multi_recipient_policy_rejections "generate_bounces_for_multi_recipient_policy_rejections") – Generate MDNs after reception for policy rejections | receiving | true | 4.0 and later | global, pathway, pathway_group |
| [generate_delay_dsn](conf.ref.generate_delay_dsn "generate_delay_dsn") – Generate DSNs if mail is delayed | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [group](conf.ref.user "user") – Group identity to assume after startup | na | ecuser (*non-dynamic*) | 4.0 and later | security |
| [growbuf_size](conf.ref.growbuf_size "growbuf_size") – Size of an element in a growbuf chain | na | 16384 | 4.0 and later | global |
| [heartbeat_start_delay](modules.cluster#option.heartbeat_start_delay) – Seconds to wait after startup before the cluster heartbeat is activated (cluster-specific) | na | 15 | 4.0 and later | cluster |
| [heartbeats_per_sec](modules.cluster#option.heartbeats_per_sec) – How often to send a heartbeat (cluster-specific) | na | 1 | 4.0 and later | cluster |
| [high_action](modules.adaptive#modules.adaptive.high_action) – Action when the high threshold is met and the number of delivery attempts exceeds the adaptive_attempt_threshold | sending | "suspend" "4 hours" | 4.0 and later | adaptive_sweep_rule |
| [high_threshold](modules.adaptive#modules.adaptive.high_threshold) – High threshold value for the sum of the rates of the bounce codes or FBL categories | sending | 10 | 4.0 and later | adaptive_sweep_rule |
| [host](conf.ref.host "host") *(scope)* – Configure host-specific options | sending |   | 4.0 and later | binding, binding_group, global |
| [host_failure_retry](conf.ref.host_failure_retry "host_failure_retry") – Time to wait before attempting a retry | sending | 120 | 4.0 and later | domain, global |
| [hostname](conf.ref.hostname "hostname") – Override the system configured hostname | both |   | 4.0 and later | global |
| [http_basic_auth](conf.ref.http_basic_auth "http_basic_auth") – Define the user credentials when using basic HTTP authentication | both |   | 4.0 and later | binding, binding_group, domain, global |
| [http_host](conf.ref.http_host "http_host") – Define the HTTP host | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [http_listener](https://support.messagesystems.com/docs/web-rest-injector/rest.http_listener) *(scope)* – Listener used with the REST injector | sending |   | 4.0 and later | global |
| [http_method](conf.ref.http_method "http_method") – Define the HTTP method to use | sending | POST | 4.0 and later | binding, binding_group, domain, global |
| [http_uri](conf.ref.http_uri "http_uri") – Define the HTTP URI that you wish to connect to | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [http_version](conf.ref.http_version "http_version") – Define the HTTP version to use | sending | 1.1 | 4.0 and later | binding, binding_group, domain, global |
| **idle_time** – Number of seconds of inactivity before a client is disconnected | receiving | 300 | 4.0 and later | esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [idle_timeout](conf.ref.idle_timeout "idle_timeout") – Time to maintain idle outbound connections | sending | 5 | 4.0 and later | binding, binding_group, domain, global |
| [if_check_interval](modules.cluster#option.if_check_interval) – How often to run through a maintenance cycle (cluster-specific) | na | 30 | 4.0 and later | cluster |
| [if_down_limit](modules.cluster#option.if_down_limit) – How long to wait before deciding to bring an IP online (cluster-specific) | na | 4 | 4.0 and later | cluster |
| [inbound_throttle_messages](conf.ref.inbound_throttle_messages "inbound_throttle_messages") – Rate limit inbound mail | receiving |   | 4.0 and later | global, pathway, pathway_group |
| [info](conf.ref.debug_flags "debug_flags") – Set the debug level | na |   | 4.0 and later | debug_flags |
| [initial_hash_buckets](conf.ref.initial_hash_buckets "initial_hash_buckets") – Set the number of hash buckets used by the system | na | 32 | 4.0 and later | global |
| [inline_transfail_processing](conf.ref.inline_transfail_processing "inline_transfail_processing") – How to handle transient failure processing | sending | 1 | 4.0 and later | global |
| [keep_message_dicts_in_memory](conf.ref.keep_message_dicts_in_memory "keep_message_dicts_in_memory") – Preserve memory representation of metadata when memory is low | both | false (*non-dynamic*) | 4.0 and later | global |
| [large_message_threshold](conf.ref.large_message_threshold "large_message_threshold") – Consider a message large when its size exceeds this amount | both | 131072 | 4.0 and later | global |
| [legacy_message_threshold](conf.ref.legacy_message_threshold "legacy_message_threshold") – Maximum size allowed for messages being passed to legacy modules | both | 1048576 | 4.0 and later | global |
| [license](conf.ref.license "license") – Specify an alternate license location | na | /opt/msys/ecelerity/etc (*non-dynamic*) | 4.0 and later | global |
| [listen](listeners#listeners.enable.option "15.4.2. Listener Enable Option") *(scope)* – Specify the socket that a listener listens on | receiving |   | 4.0 and later | control_listener, ecstream_listener, esmtp_listener, http_listener, msgcserver_listener, xmpp_listener |
| **listen_backlog** – Listen backlog | receiving | 500 (*3.0*) | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **listener_sessions** – Specifies the maximum number of concurrent sessions that can be established to this listener | receiving | 0 | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [lmtp_port](conf.ref.lmtp_port "lmtp_port") – Configure the port for LMTP deliveries | sending | 2003 | 4.0 and later | binding, binding_group, domain, global |
| [local_changes_file](conf.ref.local_changes_file "local_changes_file") – File for writing local configuration changes | na | /opt/msys/ecelerity/etc/local_changes.conf | 4.0 and later | global |
| [local_changes_only](conf.ref.local_changes_only "local_changes_only") – Whether there is a file for writing local configuration change | na | false | 4.0 and later | global |
| [log_active_interval](modules.cluster#option.log_active_interval) – Used to tune centralized logging (cluster-specific) | na | 1 | 4.0 and later | cluster |
| [log_group](modules.cluster#option.log_group) – Whether or not panic log messages are broadcast over spread (cluster-specific) | na |   | 4.0 and later | cluster |
| [log_idle_interval](modules.cluster#option.log_idle_interval) – Amount of time to sleep before looking for another segment (cluster-specific) | na | 10 | 4.0 and later | cluster |
| [log_requests_to_paniclog](https://support.messagesystems.com/docs/web-rest-injector/rest.http_listener) – Whether to log REST injection requests | sending | false | 4.0 and later | http_listener, listen, pathway, pathway_group, peer |
| [Logfile](conf.ref.eccluster.conf#eccluster.conf.logs.logfile) – Describe the full path to the log file | na |   | 4.0 and later | logs |
| [logs](conf.ref.ecelerity_cluster.conf "16.3. ecelerity-cluster.conf File") – Define the location of the cluster manager logs (cluster-specific) | na |   | 4.0 and later | cluster |
| [logs](conf.ref.eccluster.conf "16.2. eccluster.conf File") *(scope)* – Configure centralized log files on the cluster manager | na |   | 4.0 and later | global |
| [low_action](modules.adaptive#modules.adaptive.low_action) – Action when the high threshold is not met but the low threshold is met | sending | "throttle" "down" | 4.0 and later | adaptive_sweep_rule |
| [low_threshold](modules.adaptive#modules.adaptive.low_threshold) – Low threshold value for the sum of the rates of the bounce codes or FBL categories | sending | 5 | 4.0 and later | adaptive_sweep_rule |
| [mail_queue_check_vm_interval](conf.ref.mail_queue_check_vm_interval "mail_queue_check_vm_interval") – How often to apply memory management reduction on mail queues | both | 60 | 4.0 and later | global |
| [mailerdaemon](conf.ref.mailerdaemon "mailerdaemon") – Set the From: address for MDNs | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [mailfrom_timeout](conf.ref.mailfrom_timeout "mailfrom_timeout") – Timeout after MAIL FROM | sending | 300 | 4.0 and later | binding, binding_group, domain, global |
| [maintainer_pool](config.ref.maintainer_pool "maintainer_pool") – Create an eventloop for maintainers | both | (*non-dynamic*) | 4.0 and later | global |
| [malloc2mmap_threshold](conf.ref.malloc2mmap_threshold "malloc2mmap_threshold") – Use mmap when allocations exceed this amount | na | 4092 | 4.0 and later | global |
| [manager](cluster.config.logging.complex "26.3. Complex Centralized Logging Deployments") *(scope)* – Define managers for subclusters | na |   | 4.0 and later | logs |
| [masterdb_file](conf.ref.masterdb_file "masterdb_file") – Specify an alternate path for the statistics permastore | na | /var/log/ecelerity/ecdb (*non-dynamic*) | 4.0 and later | global |
| [match_cache_life](conf.ref.match_cache_life "match_cache_life") – Set the maximum number of seconds that the match cache will be valid | na | 0 | 4.0 and later | global |
| [match_cache_size](conf.ref.match_cache_size "match_cache_size") – Size of the cache that holds the results of looking up matching scopes | na | 16384 | 4.0 and later | global |
| [max_deliveries_per_connection](conf.ref.max_deliveries_per_connection "max_deliveries_per_connection") – Maximum number of messages to deliver before closing a connection | sending | 0 | 4.0 and later | binding, binding_group, domain, global |
| [max_dns_ttl](conf.ref.max_dns_ttl "max_dns_ttl") – Set the maximum DNS TTL | sending | 4294967295 | 4.0 and later | global |
| [max_idle](conf.ref.eccluster.conf#eccluster.conf.logs.max_idle) – Maximum number of seconds a log file may be left open | na |   | 4.0 and later | logs |
| **max_message_size** – Maximum number of bytes allowed in a single message before a "resources exhausted" message is returned to the client | receiving | 0 | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_open](conf.ref.eccluster.conf#eccluster.conf.logs.max_open) – Maximum number of concurrently open log files | na |   | 4.0 and later | logs |
| [max_outbound_connections](conf.ref.max_outbound_connections "max_outbound_connections") – Set the maximum number of outbound connections | sending | 32 | 4.0 and later | binding, binding_group, domain, global, host |
| **max_receptions_per_connection** – Maximum number of messages allowed in a single session, after which a 421 error will be returned | receiving | 0 | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [max_recipients_per_batch](conf.ref.max_recipients_per_batch "max_recipients_per_batch") – Maximum number of recipients to send in a single outbound message transaction | sending | 100 | 4.0 and later | binding, binding_group, domain, global |
| **max_recipients_per_connection** – Maximum number of recipients allowed in a single session, after which a 421 error will be returned | sending | 0 | 4.0 and later | binding, binding_group, domain, esmtp_listener, global, listen, peer |
| **max_recipients_per_message** – Maximum number of recipients allowed in a message, after which a 421 error will be returned | receiving | 0 | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_request_size](config.max_request_size "max_request_size") – Limit the size of an HTTP request | both |   | 4.0 and later | http_listener, listen, pathway, pathway_group, peer |
| [max_resident_active_queue](conf.ref.max_resident_active_queue "max_resident_active_queue") – Threshold above which messages are not held in memory | sending | 250 | 4.0 and later | binding, binding_group, domain, global |
| [max_resident_messages](conf.ref.max_resident_messages "max_resident_messages") – Threshold above which messages are not held in memory | sending | 32768 | 4.0 and later | binding, binding_group, global |
| [max_resident_transfails](conf.ref.max_resident_transfails "max_resident_transfails") – If the transient failure queue grows beyond this size, messages are swapped out of memory | sending | 100 | 4.0 and later | global |
| [max_retries](conf.ref.max_retries "max_retries") – Override the system configured max_retries | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [max_retry_interval](conf.ref.max_retry_interval "max_retry_interval") – Maximum retry interval | sending | 43200 | 4.0 and later | binding, binding_group, domain, global |
| [max_timed_events_per_iter](conf.ref.max_timed_events_per_iter "max_timed_events_per_iter") – Maximum numer of timed events per scheduler iteration | na | 1024 | 4.0 and later | global |
| [mcmt_reception](https://support.messagesystems.com/docs/web-mobility/mm7.mcmt_reception) – Configure a listener to accept the Multi-Channel Message Type (Mobile Momentum) | both | passthru | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [mdn_failures_notify](conf.ref.mdn_failures_notify "mdn_failures_notify") – Mailbox to which to send null recipient MDNs | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [memory_goal](conf.ref.memory_goal "memory_goal") – Configure physical memory usage goal | na | 90 | 4.0 and later | global |
| [memory_hwm](conf.ref.memory_hwm "memory_hwm") – Configure physical memory usage high-water mark | na | 95 | 4.0 and later | global |
| [message_expiration](conf.ref.message_expiration "message_expiration") – Time to live for messages | sending | 86400 | 4.0 and later | binding, binding_group, domain, global |
| [migrate_connections_between_sibling_domains](conf.ref.migrate_connections_between_sibling_domains "migrate_connections_between_sibling_domains") – Optimize connections for sibling domains | both | true | 4.0 and later | global |
| [mime_parse_large_messages_during_reception](conf.ref.mime_parse_large_messages_during_reception "mime_parse_large_messages_during_reception") – Configure whether large messages are parsed upon reception or just in time | receiving | true | 4.0 and later | global |
| [min_dns_ttl](conf.ref.min_dns_ttl "min_dns_ttl") – Override DNS TTLs smaller than this value | sending | 0 | 4.0 and later | global |
| [mx_failures_fallback_to_a](conf.ref.mx_failures_fallback_to_a "mx_failures_fallback_to_a") – Configure the maximum number of times an MX lookup will be attempted | sending | 3 | 4.0 and later | domain, global |
| [mx_failures_to_delay](conf.ref.mx_failures_to_delay "mx_failures_to_delay") – Number of consecutive failures before a domain is auto-delayed | sending | 50 | 4.0 and later | domain, global |
| [never_attempt_expired_messages](conf.ref.never_attempt_expired_messages "never_attempt_expired_messages") – Never attempt delivery of expired messages | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [never_retry](conf.ref.never_retry "never_retry") – Whether or not to retry delivery of failed messages | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [nodeaddr](modules.cluster#option.nodeaddr) – Canonical cluster address for the node (cluster-specific) | na |   | 4.0 and later | cluster |
| [nodename](modules.cluster#option.nodename) – Override the node name that is used to canonically identify this cluster node (cluster-specific) | na |   | 4.0 and later | cluster |
| [notice](conf.ref.debug_flags "debug_flags") – Set the debug level | na |   | 4.0 and later | debug_flags |
| [only_use_best_mx_for_relay_domains](conf.ref.only_use_best_mx_for_relay_domains "only_use_best_mx_for_relay_domains") – If this is set to true only the lowest numerical priority MXs are used | sending | true | 4.0 and later | global |
| [open_tracking_enabled](config.open_tracking_enabled "open_tracking_enabled") – Enable or disable open tracking for SMTP injections | boolean | false | 4.1-HF4 (beta) | esmtp_listener, listen, pathway, pathway_group, peer |
| [open_tracking_scheme](config.open_tracking_scheme "open_tracking_scheme") – Set the hyperlink scheme to use for open tracking links in SMTP injections | string | http | 4.1-HF4 (beta) | esmtp_listener, listen, pathway, pathway_group, peer |
| [open_relay](conf.ref.open_relay "open_relay") – Whether the MTA is an open relay or not | receiving | false | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [opendkim_sign](conf.ref.opendkim_sign "opendkim_sign") – Whether or not to enable OpenDKIM signing | sending | true (*non-dynamic*) | 4.0 and later | binding, binding_group, domain, global |
| [outbound_throttle_connections](conf.ref.outbound_throttle_connections "outbound_throttle_connections") – Limit the rate at which connections are established | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [outbound_throttle_messages](conf.ref.outbound_throttle_messages "outbound_throttle_messages") – Limit the rate at which messages are delivered | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [pathway](conf.ref.pathway "pathway") *(scope)* – Grouping of inbound configuration options | receiving |   | 4.0 and later | global, pathway_group |
| [pathway](conf.ref.pathway "pathway") – Means for associating a Listener with a pathway scope | receiving |   | 4.0 and later | ecstream_listener, esmtp_listener, listen, peer |
| [pathway_group](conf.ref.pathway_group "pathway_group") *(scope)* – Container for pathway scopes | receiving |   | 4.0 and later | global |
| [pcre_cache_size](conf.ref.pcre_cache_size "pcre_cache_size") – Set the maximum size of the ec_pcre_compile cache | na | 100 | 4.0 and later | global |
| [pcre_cache_ttl](conf.ref.pcre_cache_ttl "pcre_cache_ttl") – Set the maximum TTL for the ec_pcre_compile cache | na | 300 | 4.0 and later | global |
| [peer](listeners#listeners.acls "15.4.1. Extended Listener Configuration Using Access Control Lists (ACLs)") *(scope)* – Create an ACL within a specific listener | receiving |   | 4.0 and later | control_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [permastore_interval](conf.ref.permastore_interval "permastore_interval") – Frequency for saving various statistics | na | 300 | 4.0 and later | global |
| [pidfile](conf.ref.pidfile "pidfile") – Set the PID file path | na | /var/run/ecelerity.pid (*non-dynamic*) | 4.0 and later | global |
| [pool_name](esmtp_listener#esmtp_listener.config "19.1. ESMTP_Listener Configuration") – Associate a threadpool with a listener | receiving |   | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [prohibited_hosts](conf.ref.prohibited_hosts "prohibited_hosts") – Prevent mail from being delivered to invalid destinations | sending |   | 4.0 and later | global |
| [rcptto_timeout](conf.ref.rcptto_timeout "rcptto_timeout") – Timeout after RCPT TO | sending | 300 | 4.0 and later | binding, binding_group, domain, global |
| **received_hostname** – Hostname that is placed in the received headers; these are added to the messages as it transits Momentum | receiving |   | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [reconfig_message](esmtp_listener.reconfig_message "19.3. Reconfig_Message Option") – Message if the configuration has changed | receiving | 4.3.2 Reconfiguration in progress | 4.0 and later | esmtp_listener |
| [relay_domains](conf.ref.relay_domains "relay_domains") – Configure the list of domains for which Momentum relays mail | receiving |   | 4.0 and later | global, pathway, pathway_group |
| [relay_for_sending_domains](conf.ref.relay_for_sending_domains "relay_for_sending_domains") – Domains that may use the MTA as a relay | receiving |   | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [relay_hosts](conf.ref.relay_hosts "relay_hosts") – Configure the list of hosts for which Momentum relays mail | receiving |   | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [remote_smtp_port](conf.ref.remote_smtp_port "remote_smtp_port") – Set the port to be used for SMTP deliveries | sending | 25 | 4.0 and later | binding, binding_group, domain, global |
| [replicate](conf.ref.ecelerity_cluster.conf "16.3. ecelerity-cluster.conf File") *(scope)* – Define the cluster replication framework (cluster-specific) | na |   | 4.0 and later | cluster |
| [require_ehlo](conf.ref.require_ehlo "require_ehlo") – Reject mail from clients that do not say HELO | receiving | false | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [reserve_maintenance_interval](conf.ref.reserve_maintenance_interval "reserve_maintenance_interval") – How often to perform mail queue maintenance | sending | 15 | 4.0 and later | global |
| [resolv_conf](conf.ref.resolv_conf "resolv_conf") – Specify a custom resolv.conf file | sending |   | 4.0 and later | global |
| [response_transcode_pattern](conf.ref.response_transcode_pattern "response_transcode_pattern") – Regex pattern for comparison to a server response | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [response_transcode_replace](conf.ref.response_transcode_replace "response_transcode_replace") – Replacement string for a server response | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [retry_interval](conf.ref.retry_interval "retry_interval") – Base retry interval | sending | 1200 | 4.0 and later | binding, binding_group, domain, global |
| [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope "rfc2821_allow_whitespace_in_envelope") – Permit trailing white space before the final CRLF | receiving | false | 4.0 and later | global, pathway, pathway_group |
| [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules "rfc2821_pedantic_address_rules") – Allow relaxation of enforcement of the rfc2821 address rules | receiving | true | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_date_header](conf.ref.rfc2822_date_header "rfc2822_date_header") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ifneeded | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ignore | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers "rfc2822_lone_lf_in_headers") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | pedantic | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_max_line_length](conf.ref.rfc2822_max_line_length "rfc2822_max_line_length") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ignore | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_max_line_length_policy](conf.ref.rfc2822_max_line_length_policy "rfc2822_max_line_length_policy") – Determine how non-RFC-compliant line lengths are handled | receiving | none | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_messageid_header](conf.ref.rfc2822_messageid_header "rfc2822_messageid_header") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ifneeded | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_missing_headers](conf.ref.rfc2822_missing_headers "rfc2822_missing_headers") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | reject | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers "rfc2822_trace_headers") – Allow relaxation of enforcement of the rfc2822 address rules | receiving | true | 4.0 and later | global, pathway, pathway_group |
| [replicate](conf.ref.authorization "authorization") *(scope)* – Define a role within an authorization stanza | na |   | 4.0 and later | authorization |
| [routes](conf.ref.routes "routes") – Configure message routing | sending |   | 4.0 and later | domain, global |
| [rset_timeout](conf.ref.rset_timeout "rset_timeout") – Set the timeout after RSET | sending | 30 | 4.0 and later | binding, binding_group, domain, global |
| [scheduler](conf.ref.scheduler "scheduler") – Override the default IO scheduler | na | (*non-dynamic*) | 4.0 and later | global |
| [scope_max_outbound_connections](conf.ref.scope_max_outbound_connections "scope_max_outbound_connections") – Provide traffic shaping for outbound connections | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [security](conf.ref.security "security") *(scope)* – Scope for defining which permissions are retained by which user | na | (*non-dynamic*) | 4.0 and later | global |
| [send_8bitmime](conf.ref.send_8bitmime "send_8bitmime") – Enable advertising of 8BITMIME when sending mail | sending | no | 4.0 and later | binding, binding_group, domain, global |
| [server_max_file_descriptors](conf.ref.server_max_file_descriptors "server_max_file_descriptors") – Sets the maximum number of file descriptors usable by the system | na | 3000000 | 4.0 and later | global |
| [server_max_outbound_connections](conf.ref.server_max_outbound_connections "server_max_outbound_connections") – Sets the maximum number of outbound connections | sending | 20000 | 4.0 and later | binding, binding_group, global |
| [server_reserve_outbound_connections](conf.ref.server_reserve_outbound_connections "server_reserve_outbound_connections") – Sets the server-wide connection limit reserve | sending | 200 | 4.0 and later | global |
| **service_sessions** – Specifies the maximum number of concurrent sessions that can be established to all listeners for this service (e.g., ESMTP, ECStream) | receiving | 0 | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [signing_stats](conf.ref.signing_stats "signing_stats") – Control how signing statistics are recorded | sending | all | 4.0 and later | global |
| [siv_throttle_cache_size](conf.ref.siv_throttle_cache_size "siv_throttle_cache_size") – Set the maximum number of named throttles | both | 100, 1000 (*3.0.24*) | 4.0 and later | global |
| [skip_hosts](conf.ref.skip_hosts "skip_hosts") – Skip the specified host, but consider other hosts in the domain | sending |   | 4.2.1.6 and later | global |
| [smtp_extensions](esmtp_listener.extensions "19.4. SMTP Extensions") – Array of SMTP extensions | receiving |   | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [SNMP](conf.ref.snmp "SNMP") *(scope)* – Simple Network Management Protocol Support scope options | na | (*non-dynamic*) | 4.0 and later | global |
| [snmp_traps](conf.ref.snmp "SNMP") *(scope)* – Enable and configure generation of SNMP traps | na | (*non-dynamic*) | 4.0 and later | global |
| [soft_bounce_drain_rate](conf.ref.soft_bounce_drain_rate "soft_bounce_drain_rate") – How many soft bounces to place into the mail queues in a single scheduler iteration | sending | 100 | 4.0 and later | global |
| [spool_mode](conf.ref.spool_mode "spool_mode") – Set the file mode for newly created spool files | na | 0640 (*non-dynamic*) | 4.0 and later | global |
| [spoolbase](conf.ref.spoolbase "spoolbase") – Set the base directory for the spool | na | /var/spool/ecelerity (*non-dynamic*) | 4.0 and later | global |
| [ssl_lock_method](config.ssl_lock_method "ssl_lock_method") – Specify the SSL lock method | na | mutex (*non-dynamic*) | 4.0 and later | global |
| [stack_size](conf.ref.threadpool "threadpool") – Stack space for a threadpool | na | 0 (*non-dynamic*) | 4.0 and later | threadpool |
| [starttls_injection_policy](config.starttls_injection_policy "starttls_injection_policy") – Protect against SMTP injections prior to TLS | receiving | reject | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [state](conf.ref.snmp "SNMP") – Whether to enable the SNMP agent | na | 1 (*non-dynamic*) | 4.0 and later | snmp |
| [state](conf.ref.snmp "SNMP") – Whether to enable generation of SNMP traps | na | 0 (*non-dynamic*) | 4.0 and later | snmp_traps |
| **static_banner** – Specifies the banner that will be displayed to the remote client upon connecting. You must include 220 as the beginning of your replacement string; e.g., 220 my.mail.server ESMTP | receiving |   | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [supplemental_groups](conf.ref.supplemental_groups "supplemental_groups") – Supplemental groups to assume after startup | na | (*non-dynamic*) | 4.0 and later | security |
| [suspend_delivery](conf.ref.suspend_delivery "suspend_delivery") – Prevent outbound mail delivery | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [syscontact](conf.ref.snmp "SNMP") – Set the SNMP SysContact option value | na | (*non-dynamic*) | 4.0 and later | snmp |
| [sysdescription](conf.ref.snmp "SNMP") – Set the SNMP SysDescription option value | na | (*non-dynamic*) | 4.0 and later | snmp |
| [syslocation](conf.ref.snmp "SNMP") – Set the SNMP SysLocation option value | na | (*non-dynamic*) | 4.0 and later | snmp |
| [tcp_buffer_size](conf.ref.tcp_buffer_size "tcp_buffer_size") – Maximum tcp buffer size for outbound connections | sending | 32768 | 4.0 and later | cluster, global |
| **tcp_recv_buffer_size** – Sets the TCP receive buffer size. When set to 0, the operating system automatically manages the buffer size. | receiving | 

4096 (ESMTP_Listener)

32768 (HTTP_Listener)

 | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **tcp_send_buffer_size** – Sets the TCP send buffer size. When set to 0, the operating system automatically manages the buffer size. | receiving | 

4096 (ESMTP_Listener)

32768 (HTTP_Listener)

 | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [threadpool](conf.ref.threadpool "threadpool") *(scope)* – Configure thread pool specific options | na |   | 4.0 and later | global |
| [timeout](control_listener#control_listener.config "17.1. Control_Listener Configuration") – Timeout for idle control connections on Control_Listeners | receiving | 60 | 4.0 and later | control_listener |
| [timestampformat](conf.ref.timestampformat "timestampformat") – Set the timestamp format used when logging to stderr | na | [%a %d %b %Y %H:%M:%S] | 4.0 and later | global |
| [tls](config.ref.tls "tls") – Determine whether to use a TLS connection for outbound mail | sending | no | 4.0 and later | binding, binding_group, domain, global |
| [tls_allow_renegotiation](config.tls_allow_renegotiation "tls_allow_renegotiation") – Determine whether to enable TLS renegotiation | receiving and sending | true | 4.0 and later | ecstream_listener, esmtp_listener, http_listener, listen, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_ca](config.tls_ca "tls_ca") – Specify certificate authority for outbound mail | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [tls_certificate](config.tls_certificate "tls_certificate") – Specify certificate to use for inbound and outbound mail | receiving and sending |   | 4.0 and later | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_ciphers](config.tls_ciphers "tls_ciphers") – Specify allowable ciphers for TLS inbound and outbound sessions | receiving and sending |   | 4.0 and later | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_client_ca](config.tls_client_ca "tls_client_ca") – Specify certificate authority for inbound mail | receiving |   | 4.0 and later | ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_dhparams_file](conf.ref.tls_dhparams_file "tls_dhparams_file") – Specifies DHE parameters that add per-session randomness to the encryption | both |   | 4.0 and later | global |
| [tls_enable_dhe_ciphers](conf.ref.tls_enable_dhe_ciphers "tls_enable_dhe_ciphers") – Controls whether or not DHE ciphers are available | both | true | 4.0 and later | global |
| [tls_engine](config.tls_engine "tls_engine") – Specify the TLS library to use (OpenSSL or GNUTLS) | sending | openssl | 4.0 and later | global |
| [tls_ifavailable_fallback](config.tls_ifavailable_fallback "tls_ifavailable_fallback") – Determine the behavior if TLS negotiation fails | sending | true | 4.1 and later | binding, binding_group, domain, global |
| [tls_key](config.tls_key "tls_key") – Specify the TLS key to use for outbound mail or inbound mail | receiving and sending |   | 4.0 and later | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_protocols](config.tls_protocols "tls_protocols") – Allowable ciphers for TLS inbound and outbound sessions | receiving and sending |   | 4.1.0.2 and later | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer |
| **tls_verified_peer_can_relay** – Verification that peer can relay | receiving | false | 4.0 and later | ecstream_listener, esmtp_listener, listen, pathway, pathway_group, peer |
| [tls_verified_peer_is_authorized](config.tls_verified_peer_is_authorized "tls_verified_peer_is_authorized") – Mark requests that use a verified SSL Client certificate as being authorized | sending | false | 4.0 and later | http_listener, listen, pathway, peer |
| [tls_verify](config.tls_verify "tls_verify") – Specify how to handle the remote presented certificate | sending | no | 4.0 and later | binding, binding_group, domain, global |
| [tls_verify_mode](config.tls_verify_mode "tls_verify_mode") – Determine whether a TLS certificates is required | receiving |   | 4.0 and later | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [topology](cluster.config.duravip "Chapter 27. DuraVIP™: IP Fail over") *(scope)* – Define the cluster network topology (cluster-specific) | na |   | 4.0 and later | cluster |
| [trace_smtp_mode](conf.ref.trace_smtp_mode "trace_smtp_mode") – Set the default permissions of trace files | sending | 0640 (*non-dynamic*) | 4.0 and later | global |
| [tracking_domain](config.tracking_domain "tracking_domain") – Set the tracking domain to use for engagement tracking in SMTP injections | string | localhost:8080 | 4.1-HF4 (beta) | esmtp_listener, listen, pathway, pathway_group, peer |
| [tracking_link_expiry](config.tracking_link_expiry "tracking_link_expiry") – Set the expiration time, in seconds, for engagement tracking for SMTP injections | integer | 31536000 | 4.1-HF4 (beta) | esmtp_listener, listen, pathway, pathway_group, peer |
| [transfail_drain_rate](conf.ref.transfail_drain_rate "transfail_drain_rate") – Maximum number of messages to pop off the transient failure queue in a single scheduler iteration | sending | 100 | 4.0 and later | global |
| [transform_8bitmime_content](conf.ref.transform_8bitmime_content "transform_8bitmime_content") – Enable 8BITMIME downconversion when sending mail | sending | ifneeded (*3.1.6*) | 4.0 and later | binding, binding_group, domain, global |
| [trap_destination](conf.ref.snmp#example.snmp.3 "Example 72.9. Trap_Destination") – Destination for SNMP trap | na | (*non-dynamic*) | 4.0 and later | snmp_traps |
| [trap_interval](conf.ref.snmp#conf.ref.snmp.trap_interval) – Frequency of SNMP trap generation | na | 60 (*non-dynamic*) | 4.0 and later | snmp_traps |
| [umem_reap_interval](conf.ref.umem_reap_interval "umem_reap_interval") – How often to release unused memory | na | 1800 | 4.0 and later | global |
| [unconditional_rebind](modules.cluster#option.unconditional_rebind) – Whether the full set_binding logic is invoked or not (cluster-specific) | na | true | 4.0 and later | cluster |
| [unlink_on_spool_in_failure](conf.ref.unlink_on_spool_in_failure "unlink_on_spool_in_failure") – Whether or not to remove malformed messages | receiving | true | 4.0 and later | global |
| [use_iflist_cache](conf.ref.use_iflist_cache "use_iflist_cache") – Whether or not to cache the list of interfaces configured by the system | sending | 0 (*non-dynamic*) | 4.0 and later | global |
| [use_ipv6](conf.ref.use_ipv6 "use_ipv6") – Affects the selection of IPv6 hosts in the SMTP client | sending | false | 4.0 and later | global |
| [use_mmap](conf.ref.use_mmap "use_mmap") – Use mmap when spooling messages from disk | na | false | 4.0 and later | global |
| [use_sendfile](conf.ref.use_sendfile "use_sendfile") – Use sendfile() when sending mail | sending | false | 4.0 and later | global |
| **use_ssl** – Whether or not to use SSL verification | receiving | false | 4.0 and later | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [user](conf.ref.user "user") – User identity to assume after startup | na | ecuser (*non-dynamic*) | 4.0 and later | security |
| [view_balance_interval](modules.cluster#option.view_balance_interval) – How often DuraVIP™ views are subject to balancing (cluster-specific) | na | 10 | 4.0 and later | cluster |
| [view_broadcast_interval](modules.cluster#option.view_broadcast_interval) – How often to speculatively broadcast a view announcement to the cluster (cluster-specific) | na | 0 | 4.0 and later | cluster |
| [view_mature_time](modules.cluster#option.view_mature_time) – How long a DuraVIP™ view needs to remain unchanged before considering it "mature" (cluster-specific) | na | 5 | 4.0 and later | cluster |
| [warning](conf.ref.debug_flags "debug_flags") – Set the debug level | na |   | 4.0 and later | debug_flags |
| [trap_interval](conf.ref.snmp#conf.ref.snmp.watch_interval) – Interval for watched system variables for SNMP traps | na | 10 (*non-dynamic*) | 4.0 and later | snmp_traps |
| [watch_variables](conf.ref.snmp#conf.ref.snmp.watch_variables) – SNMP traps watch variables | na | (*non-dynamic*) | 4.0 and later | snmp_traps |
| [xclient](conf.ref.xclient "xclient") – Use the XCLIENT extension to SMTP for outbound mail | sending | no | 4.0 and later | binding, binding_group, domain, global |
| [xmpp_dialback_secret](https://support.messagesystems.com/docs/web-mobility/mobility.xmpp.modules#mobility.xmpp.modules.xmpp_role) – Use when verifying the XMPP server dialback key (Mobile Momentum) | both |   | 4.0 and later | domain |
| [xmpp_listener](https://support.messagesystems.com/docs/web-mobility/mobility.xmpp.modules#modules.xmpp.xmpp_listener) *(scope)* – The listener for incoming XMPP connections (Mobile Momentum) | receiving |   | 4.0 and later | global |
| [xmpp_role](https://support.messagesystems.com/docs/web-mobility/mobility.xmpp.modules#mobility.xmpp.modules.xmpp_role) – Define whether a domain is an XMPP server or client (Mobile Momentum) | both |   | 4.0 and later | domain |

| [Prev](modules.summary.all.modules)  | [Up](p.reference) |  [Next](console_commands) |
| Chapter 65. Modules Summary  | [Table of Contents](index) |  Chapter 67. Console Commands Summary |

