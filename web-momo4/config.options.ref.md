| [Prev](modules.url_ripper)  | Part X. Reference |  [Next](conf.ref.adaptive_backstore_leveldb) |
## Chapter 72. Configuration Options Reference
**Table of Contents**

* [adaptive_backstore_leveldb](conf.ref.adaptive_backstore_leveldb) — use LevelDB as the backing store for Adaptive Delivery
* [adaptive_backstore_riak](conf.ref.adaptive_backstore_riak) — set characteristics of the Riak backing store
* [adaptive_enabled](conf.ref.adaptive_enabled) — enable or disable the adaptive module
* [adaptive_scope](conf.ref.adaptive_scope) — define the scope applicable to adaptive delivery (AD)
* [address_metrics_cleanse_interval](conf.ref.address_metrics_cleanse_interval) — the interval for refreshing address metrics
* [address_metrics_lifetime](conf.ref.address_metrics_lifetime) — the TTL of address metrics
* [alias_schemes](conf.ref.alias_schemes) — enable named alias expansion schemes
* [allow_ip_literal](conf.ref.allow_ip_literal) — allow IP addresses in email addresses
* [allow_null_envelope_sender](conf.ref.allow_null_envelope_sender) — allow the null envelope sender in e-mail addresses
* [allow_trailing_whitespace_in_commands](conf.ref.allow_trailing_whitespace_in_commands) — permit trailing whitespace at the end of an SMTP command
* [async_bounce_rendering](conf.ref.async_bounce_rendering) — which thread pool to use for bounce rendering
* [authorization](conf.ref.authorization) — configure the console commands applicable to users
* [bind_address](conf.ref.bind_address) — source address for outbound connections
* [binding](conf.ref.binding) — configure binding specific options
* [binding_auto_replumb](conf.ref.binding_auto_replumb) — enable or disable the auto replumber
* [binding_auto_replumb_interval](conf.ref.binding_auto_replumb_interval) — sets the time interval to check the plumbed state of statically plumbed bindings
* [binding_group](conf.ref.binding_group) — logically group a set of bindings
* [blackhole](conf.ref.blackhole) — blackhole mail
* [body_timeout](conf.ref.body_timeout) — network timeout once the DATA phase is complete
* [bounce_behavior](conf.ref.bounce_behavior) — configure the action taken when a message is classified as a bounce
* [bounce_domains](conf.ref.bounce_domains) — configure the list of domains eligible for bounce processing by Momentum.
* [bounce_pattern](conf.ref.bounce_pattern) — configure the pattern that inbound email addresses must match in order to be considered bounces.
* [bounce_suppress_list](conf.ref.bounce_suppress_list) — configure a list of email addresses that may not be considered original recipients.
* [bounces_inline_original](conf.ref.bounces_inline_original) — how much of the original message to include in MDNs
* [capabilities](conf.ref.capabilities) — selectively retain "root" capabilities
* [chroot](conf.ref.chroot) — chroot to a secure environment
* [clear_mail_queue_maintainers](conf.ref.clear_mail_queue_maintainers) — reschedule the mail queue maintainer
* [click_tracking_enabled](config.click_tracking_enabled) — enable or disable click tracking for SMTP injections
* [click_tracking_scheme](config.click_tracking_scheme) — set the hyperlink scheme to use for click tracking links in SMTP injections
* [cluster_max_outbound_connections](conf.ref.cluster_max_outbound_connections) — set the maximum number of outbound connections for a scope and enforce it across a cluster
* [cluster_outbound_throttle_connections](conf.ref.cluster_outbound_throttle_connections) — limit the rate at which connections are established, and enforce it across a cluster of systems
* [cluster_outbound_throttle_messages](conf.ref.cluster_outbound_throttle_messages) — limit the rate at which messages are delivered, and enforce it across the cluster
* [cluster_scope_max_outbound_connections](conf.ref.cluster_scope_max_outbound_connections) — provide traffic shaping for outbound connections in a cluster configuration
* [cluster_server_max_outbound_connections](conf.ref.cluster_server_max_outbound_connections) — set the maximum number of outbound connections, and enforce it across a cluster
* [connect_timeout](conf.ref.connect_timeout) — set the connection timeout
* [connect_timeout_to_delay](conf.ref.connect_timeout_to_delay) — time interval before sweeping mail into the delayed queue
* [connection_allocation_aggressiveness](conf.ref.connection_allocation_aggressiveness) — tune the aggressiveness for establishing new connections to domains
* [context](conf.ref.context) — use to set arbitrary connection context key value pairs.
* [control_client_timeout](conf.ref.control_client_timeout) — network timeout for Momentum control client connections
* [crypto_engine](conf.ref.crypto_engine) — enable hardware cryptography acceleration
* [crypto_lock_method](config.crypto_lock_method) — set the locking method used by the TLS layer
* [debug_flags](conf.ref.debug_flags) — configure debug verbosity
* [default_binding](conf.ref.default_binding) — control usage of the "default" binding
* [default_charset](conf.ref.default_charset) — control usage of the "default" character set
* [delay_dsn_max_retry_interval](conf.ref.delay_dsn_max_retry_interval) — maximum interval for sending DSNs to the sender of a message that has not yet been delivered
* [delay_dsn_retry_interval](conf.ref.delay_dsn_retry_interval) — base interval for sending DSNs to the sender of a message that has not yet been delivered
* [delayed_binding_domain_fuzz](conf.ref.delayed_binding_domain_fuzz) — length of time to spread scheduled messages over when a bulk requeue is necessary
* [delayed_queue_scan_interval](conf.ref.delayed_queue_scan_interval) — how often to call the maintainer for a domain
* [delivery_method](conf.ref.delivery_method) — set the delivery method
* [delivery_pool](config.ref.delivery_pool) — associate a pool of event loops with email delivery to use multiple threads
* [delivery_response_timeout](conf.ref.delivery_response_timeout) — time to wait for a response to an outbound request
* [disable_nagle_algorithm](conf.ref.disable_nagle_algorithm) — disable nagle algorithm on sockets
* [disk_queue_drain_rate](conf.ref.disk_queue_drain_rate) — control the rate at which messages are spooled in on start-up
* [dns_cache_purge_interval](conf.ref.dns_cache_purge_interval) — how often the DNS response cache is scanned for stale entries
* [dns_expire_interval](conf.ref.dns_expire_interval) — how often to check for domains with expired DNS information
* [dns_failures_to_purge](conf.ref.dns_failures_to_purge) — configure the maximum number of DNS lookups
* [dns_fallback_to_tcp](conf.ref.dns_fallback_to_tcp) — whether or not to fail over to TCP in place of UDP
* [domain_for_unqualified_recipient_addresses](conf.ref.domain_for_unqualified_recipient_addresses) — configure a domain which will be used to resolve delivery for unqualified addresses
* [domain_for_unqualified_sender_address](conf.ref.domain_for_unqualified_sender_address) — configure a domain which will be used to substitute for unqualified sender addresses
* [domain](conf.ref.domain) — configure domain specific options
* [domainkeys](conf.ref.domainkeys) — enable or disable domainkeys signing
* [drop_body_after_trans_fail](conf.ref.drop_body_after_trans_fail) — number of retry attempts before freeing message memory
* [ecstream_port](conf.ref.ecstream_port) — configure the port for ecstream deliveries
* [ecstream_timeout](conf.ref.ecstream_timeout) — the amount of time to wait for an ecstream connection to be established
* [ehlo_hostname](conf.ref.ehlo_hostname) — set the hostname used for EHLO in outbound mail
* [ehlo_timeout](conf.ref.ehlo_timeout) — network timeout for EHLO
* [enable_fbl_header_insertion](conf.ref.enable_fbl_header_insertion) — enable or disable fbl header insertion
* [event_loop](config.ref.event_loop) — associate a pool of event loops within a listener scope to use multiple threads
* [eventloop](config.ref.eventloop) — define a pool of event loops to enable multiple event loop configuration
* [events_per_iter](conf.ref.events_per_iter) — employ when using a concurrency greater than 1.
* [exclude_vctx_conn](conf.ref.exclude_vctx_conn) — exclude validation context keys from being journaled in the spool metadata.
* [exclude_vctx_mess](conf.ref.exclude_vctx_mess) — exclude validation context keys from being journaled in the spool metadata.
* [expensive_batch_assessment](conf.ref.expensive_batch_assessment) — only treat messages as different if the headers are rendered differently
* [force_fsync](conf.ref.force_fsync) — ensure that data is synced to disk on reception
* [fully_resolve_before_smtp](conf.ref.fully_resolve_before_smtp) — resolve all MX and A records before attempting delivery
* [gateway](conf.ref.gateway) — configure a static SMTP route for mail
* [generate_bounces](conf.ref.generate_bounces) — generate MDNs if mail is failed after reception
* [generate_bounces_for_multi_recipient_policy_rejections](conf.ref.generate_bounces_for_multi_recipient_policy_rejections) — generate MDNs after reception for policy rejections
* [generate_delay_dsn](conf.ref.generate_delay_dsn) — generate DSNs if mail is delayed
* [growbuf_size](conf.ref.growbuf_size) — The size of an element in a growbuf chain
* [host](conf.ref.host) — configure host specific options
* [hostname](conf.ref.hostname) — override the system configured hostname
* [host_failure_retry](conf.ref.host_failure_retry) — time to wait before attempting a retry
* [http_basic_auth](conf.ref.http_basic_auth) — Define the user credentials when using basic HTTP authentication
* [http_host](conf.ref.http_host) — Define the HTTP host
* [http_method](conf.ref.http_method) — Define the HTTP method to use
* [http_uri](conf.ref.http_uri) — Define the HTTP URI that you wish to connect to
* [http_version](conf.ref.http_version) — Define the HTTP version to use
* [idle_timeout](conf.ref.idle_timeout) — time to maintain idle outbound connections
* [inbound_throttle_messages](conf.ref.inbound_throttle_messages) — rate limit inbound mail
* [initial_hash_buckets](conf.ref.initial_hash_buckets) — Set the number of hash buckets used by the system
* [inline_transfail_processing](conf.ref.inline_transfail_processing) — how to handle transient failure processing
* [keep_message_dicts_in_memory](conf.ref.keep_message_dicts_in_memory) — preserve memory representation of metadata when memory is low
* [large_message_threshold](conf.ref.large_message_threshold) — Consider a message large when its size exceeds this amount
* [legacy_message_threshold](conf.ref.legacy_message_threshold) — The maximum size allowed for messages being passed to legacy modules
* [license](conf.ref.license) — specify an alternate license location
* [lmtp_port](conf.ref.lmtp_port) — configure the port for LMTP deliveries
* [local_changes_file](conf.ref.local_changes_file) — the file for writing local configuration changes
* [local_changes_only](conf.ref.local_changes_only) — whether there is a file for writing local configuration changes
* [mail_queue_check_vm_interval](conf.ref.mail_queue_check_vm_interval) — how often to apply memory management reduction on mail queues
* [mailerdaemon](conf.ref.mailerdaemon) — set the From: address for MDNs
* [mailfrom_timeout](conf.ref.mailfrom_timeout) — timeout after MAIL FROM
* [maintainer_pool](config.ref.maintainer_pool) — associate a pool of event loops with mail queues, DNS lookup, and module events to use multiple threads
* [malloc2mmap_threshold](conf.ref.malloc2mmap_threshold) — use mmap when allocations exceed this amount
* [masterdb_file](conf.ref.masterdb_file) — specify an alternate path for the statistics permastore
* [match_cache_life](conf.ref.match_cache_life) — set the maximum number of seconds that the match cache will be valid
* [match_cache_size](conf.ref.match_cache_size) — the size of the cache that holds the results of looking up matching scopes
* [max_deliveries_per_connection](conf.ref.max_deliveries_per_connection) — maximum number of messages to deliver before closing a connection
* [max_dns_ttl](conf.ref.max_dns_ttl) — set the maximum DNS TTL
* [max_outbound_connections](conf.ref.max_outbound_connections) — set the maximum number of outbound connections for a domain
* [max_recipients_per_batch](conf.ref.max_recipients_per_batch) — maximum number of recipients to send in a single outbound message transaction
* [max_request_size](config.max_request_size) — maximum size of an HTTP request
* [max_resident_active_queue](conf.ref.max_resident_active_queue) — threshold above which messages are not held in memory
* [max_resident_messages](conf.ref.max_resident_messages) — threshold above which messages are not held in memory
* [max_resident_transfails](conf.ref.max_resident_transfails) — the threshold for swapping transient failures out of memory
* [max_retries](conf.ref.max_retries) — override the system configured max_retries
* [max_retry_interval](conf.ref.max_retry_interval) — maximum retry interval
* [max_timed_events_per_iter](conf.ref.max_timed_events_per_iter) — the maximum numer of timed events per scheduler iteration
* [mdn_failures_notify](conf.ref.mdn_failures_notify) — mailbox to which to send null recipient MDNs
* [memory_goal](conf.ref.memory_goal) — configure physical memory usage goal
* [memory_hwm](conf.ref.memory_hwm) — configure physical memory usage high-water mark
* [message_expiration](conf.ref.message_expiration) — the time to live for messages
* [migrate_connections_between_sibling_domains](conf.ref.migrate_connections_between_sibling_domains) — optimize connections for sibling domains
* [mime_parse_large_messages_during_reception](conf.ref.mime_parse_large_messages_during_reception) — configure whether large messages are parsed upon reception or just in time.
* [min_dns_ttl](conf.ref.min_dns_ttl) — override DNS TTLs smaller than this value
* [mx_failures_fallback_to_a](conf.ref.mx_failures_fallback_to_a) — configure the maximum number of times an MX lookup will be attempted
* [mx_failures_to_delay](conf.ref.mx_failures_to_delay) — number of consecutive failures before a domain is auto-delayed
* [never_attempt_expired_messages](conf.ref.never_attempt_expired_messages) — Never attempt delivery of expired messages
* [never_retry](conf.ref.never_retry) — whether or not to retry delivery of failed messages
* [only_use_best_mx_for_relay_domains](conf.ref.only_use_best_mx_for_relay_domains) — If this is set to `true`, only the lowest numerical priority MXs are used when sending to domains listed in `bounce_domains` or `relay_domains`.
* [open_relay](conf.ref.open_relay) — whether the MTA is an open relay or not
* [open_tracking_enabled](config.open_tracking_enabled) — enable or disable open tracking for SMTP injections
* [open_tracking_scheme](config.open_tracking_scheme) — set the hyperlink scheme to use for open tracking links in SMTP injections
* [opendkim_sign](conf.ref.opendkim_sign) — whether or not to enable OpenDKIM signing
* [outbound_throttle_connections](conf.ref.outbound_throttle_connections) — limit the rate at which connections are established
* [outbound_throttle_messages](conf.ref.outbound_throttle_messages) — limit the rate at which messages are delivered
* [pathway](conf.ref.pathway) — a grouping of inbound configuration options
* [pathway_group](conf.ref.pathway_group) — a container for pathways
* [pcre_cache_size](conf.ref.pcre_cache_size) — set the maximum size of the ec_pcre_compile cache
* [pcre_cache_ttl](conf.ref.pcre_cache_ttl) — set the maximum TTL for the ec_pcre_compile cache
* [permastore_interval](conf.ref.permastore_interval) — the frequency for saving various statistics
* [pidfile](conf.ref.pidfile) — set the PID file path
* [prohibited_hosts](conf.ref.prohibited_hosts) — prevent mail from being delivered to invalid destinations
* [rcptto_timeout](conf.ref.rcptto_timeout) — timeout after RCPT TO
* [relay_for_sending_domains](conf.ref.relay_for_sending_domains) — domains that may use the MTA as a relay.
* [relay_domains](conf.ref.relay_domains) — configure the list of domains for which Momentum relays mail
* [relay_hosts](conf.ref.relay_hosts) — configure the list of hosts for which Momentum relays mail
* [remote_smtp_port](conf.ref.remote_smtp_port) — set the port to be used for SMTP deliveries
* [require_ehlo](conf.ref.require_ehlo) — reject mail from clients that don't say HELO
* [reserve_maintenance_interval](conf.ref.reserve_maintenance_interval) — how often to perform mail queue maintenance
* [resolv_conf](conf.ref.resolv_conf) — specify a custom resolv.conf
* [response_transcode_pattern](conf.ref.response_transcode_pattern) — the regex pattern for comparison to a server response
* [response_transcode_replace](conf.ref.response_transcode_replace) — the replacement string for a server response
* [retry_interval](conf.ref.retry_interval) — base retry interval
* [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope) — permit trailing whitespace before the final CRLF
* [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules) — Allow relaxation of enforcement of the rfc2821 address rules.
* [rfc2822_date_header](conf.ref.rfc2822_date_header) — rfc2822 conformance
* [rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body) — rfc2822 conformance
* [rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers) — rfc2822 conformance
* [rfc2822_max_line_length](conf.ref.rfc2822_max_line_length) — rfc2822 conformance
* [rfc2822_max_line_length_policy](conf.ref.rfc2822_max_line_length_policy) — determine how non-RFC-compliant line lengths are handled
* [rfc2822_messageid_header](conf.ref.rfc2822_messageid_header) — rfc2822 conformance
* [rfc2822_missing_headers](conf.ref.rfc2822_missing_headers) — rfc2822 conformance
* [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers) — rfc2822 conformance
* [routes](conf.ref.routes) — configure message routing
* [rset_timeout](conf.ref.rset_timeout) — set the timeout after RSET
* [scope_max_outbound_connections](conf.ref.scope_max_outbound_connections) — provide traffic shaping for outbound connections
* [scheduler](conf.ref.scheduler) — override the default IO scheduler
* [security](conf.ref.security) — Scope for defining which permissions are retained by which user
* [send_8bitmime](conf.ref.send_8bitmime) — Enable advertising of 8BITMIME when sending mail
* [server_max_file_descriptors](conf.ref.server_max_file_descriptors) — sets the maximum number of file descriptors usable by the system
* [server_max_outbound_connections](conf.ref.server_max_outbound_connections) — sets the maximum number of outbound connections
* [server_reserve_outbound_connections](conf.ref.server_reserve_outbound_connections) — sets the server-wide connection limit reserve
* [signing_stats](conf.ref.signing_stats) — control how signing statistics are recorded
* [siv_throttle_cache_size](conf.ref.siv_throttle_cache_size) — set the maximum number of named throttles
* [skip_hosts](conf.ref.skip_hosts) — skip the specified host, but consider other hosts in the domain
* [SNMP](conf.ref.snmp) — Simple Network Management Protocol Support
* [soft_bounce_drain_rate](conf.ref.soft_bounce_drain_rate) — how many soft bounces to place into the mail queues in a single scheduler iteration
* [spool_mode](conf.ref.spool_mode) — set the file mode for newly created spool files
* [spoolbase](conf.ref.spoolbase) — set the base directory for the spool
* [ssl_lock_method](config.ssl_lock_method) — the SSL lock method
* [starttls_injection_policy](config.starttls_injection_policy) — protect against SMTP injections prior to TLS
* [supplemental_groups](conf.ref.supplemental_groups) — security: supplemental groups to assume after startup
* [suspend_delivery](conf.ref.suspend_delivery) — prevent outbound mail delivery
* [tcp_buffer_size](conf.ref.tcp_buffer_size) — maximum tcp buffer size for outbound connections
* [threadpool](conf.ref.threadpool) — configure thread pool specific options
* [timestampformat](conf.ref.timestampformat) — set the timestamp format used when logging to stderr
* [tls](config.ref.tls) — determine whether to use TLS connection for outbound mail
* [tls_allow_renegotiation](config.tls_allow_renegotiation) — determine whether to enable TLS renegotiation
* [tls_ca](config.tls_ca) — certificate authority for outbound mail
* [tls_certificate](config.tls_certificate) — certificate to use for inbound and outbound mail
* [tls_ciphers](config.tls_ciphers) — specify allowable ciphers for TLS inbound and outbound sessions
* [tls_client_ca](config.tls_client_ca) — certificate authority for inbound mail
* [tls_dhparams_file](conf.ref.tls_dhparams_file) — specifies the file of Diffie Hellman (DHE) parameters that add per-session randomness to the encryption. Default parameters are built in the product if none are specified.
* [tls_enable_dhe_ciphers](conf.ref.tls_enable_dhe_ciphers) — controls whether or not Diffie Hellman (DHE) ciphers are available
* [tls_engine](config.tls_engine) — specify the TLS library to use
* [tls_ifavailable_fallback](config.tls_ifavailable_fallback) — determine the behavior if TLS negotiation fails
* [tls_key](config.tls_key) — TLS key to use for outbound or inbound mail
* [tls_protocols](config.tls_protocols) — allowable ciphers for TLS inbound and outbound sessions
* [tls_verified_peer_is_authorized](config.tls_verified_peer_is_authorized) — Marks requests that use a verified SSL Client certificate as being authorized
* [tls_verify](config.tls_verify) — specify how to handle the remote presented certificate
* [tls_verify_mode](config.tls_verify_mode) — determine whether a TLS certificate is required
* [trace_smtp_mode](conf.ref.trace_smtp_mode) — set the default permissions of trace files
* [tracking_domain](config.tracking_domain) — set the tracking domain to use for engagement tracking in SMTP injections
* [tracking_link_expiry](config.tracking_link_expiry) — set the expiration time for engagement tracking for SMTP injections
* [transfail_drain_rate](conf.ref.transfail_drain_rate) — the maximum number of messages to pop off the transient failure queue in a single scheduler iteration
* [transform_8bitmime_content](conf.ref.transform_8bitmime_content) — Enable 8BITMIME downconversion when sending mail
* [umem_reap_interval](conf.ref.umem_reap_interval) — how often to release unused memory
* [unlink_on_spool_in_failure](conf.ref.unlink_on_spool_in_failure) — Whether or not to remove malformed messages
* [_unsafe_spool](conf.ref.unsafe_spool) — allow dangerous spool semantics to be used
* [use_iflist_cache](conf.ref.use_iflist_cache) — Whether or not to cache the list of network interfaces configured by the system
* [use_ipv6](conf.ref.use_ipv6) — Affects the selection of IPv6 hosts in the SMTP client
* [use_mmap](conf.ref.use_mmap) — use mmap when spooling messages from disk
* [use_sendfile](conf.ref.use_sendfile) — use sendfile() when sending mail
* [user](conf.ref.user) — security: user identity to assume after startup
* [xclient](conf.ref.xclient) — use the xclient extension to SMTP for outbound mail

This chapter provides the definitions of the configuration options for the configuration files that are referenced in this document.
Most options that are common to Momentum 4 and Momentum 3 are documented in the Momentum 3.x Reference Manual. See the [Chapter 66, *Configuration Options Summary*](config.options.summary "Chapter 66. Configuration Options Summary") .

| [Prev](modules.url_ripper)  | [Up](p.reference) |  [Next](conf.ref.adaptive_backstore_leveldb) |
| 71.73. url_ripper – URL Extraction  | [Table of Contents](index) |  adaptive_backstore_leveldb |
