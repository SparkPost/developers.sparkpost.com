## Momentum 4 Reference Manual

### Message Systems, Inc.

Copyright © 2014 Message Systems, Inc.
Confidential & Proprietary.

**Abstract**

This book documents Momentum 4.

Document generated on: 2017-Aug-09

---

**Table of Contents**

* [Preface](preface.md "test")
  * [1\. Typographical Conventions Used in This Document](preface.md#typographical)
* [I. Introduction to Momentum](p.intro.md)
  * [1\. Components](components.md)
  * [2\. Life of A Message](loam.md)
  * [3\. Roles and Behaviors](roles_behaviors.md)
  * [4\. Licensed Features](licensed_features.md)
    * [4.1\. Message Generation](licensed_features.md#licensed_features.message.generation)
    * [4.2\. Adaptive Delivery](licensed_features.adaptive.delivery.md)
    * [4.3\. Supercharger](licensed_features.supercharger.md)
* [II. Installing Momentum](p.installing)
  * [5\. Hardware Considerations](hardware.requirements)
    * [5.1\. Server Roles](hardware.requirements#hardware.server_roles)
    * [5.2\. Configuration Options](hardware.config_options)
    * [5.3\. Hardware Scaling Approach](hardware.scaling)
    * [5.4\. Environmental Considerations](hardware.environmental)
    * [5.5\. Hardware Deployment Configuration](hardware.config)
    * [5.6\. Production Environment Configurations](production.config)
    * [5.7\. Additional Configuration Notes](addl.config.notes)
  * [6\. Before You Begin](before_you_begin)
    * [6.1\. Momentum License](before_you_begin#byb.msg.gen.license)
    * [6.2\. Operating System](byb.os)
    * [6.3\. Redundancy](byb.redundancy)
    * [6.4\. Load Balancing](byb.load_balancing)
    * [6.5\. Disable SELinux](byb.disable_selinux)
    * [6.6\. Enable Network Time Protocol (NTP)](byb.ntp)
    * [6.7\. Adjusting `/etc/sysctl.conf`](byb.sysctl.conf)
    * [6.8\. Setting Hostnames](byb.set_hostnames)
    * [6.9\. Java Runtime Environment (JRE)](byb.jre)
    * [6.10\. Creating `root` and `vertica_dba` Accounts](byb.root_and_vertica_dba)
    * [6.11\. Redefining Ephemeral Ports](byb.redefine_ephemeral_ports)
    * [6.12\. Configuring Locale](byb.config_vertica_services)
    * [6.13\. Configuring SSH and SSHD](byb.config_SSH_and_SSHD)
    * [6.14\. Basic Required Packages](byb.basic_packages)
    * [6.15\. Riak Provisioning](byb.riak_provisioning)
    * [6.16\. Separate Vertica Partition](byb.vertica_partition)
    * [6.17\. Disable Postfix and QPIDD](byb.disable_postfix)
    * [6.18\. Verifying Analytics Node Requirements](byb.analytics_reqs)
  * [7\. Download the Software Bundle and Prepare](download_bundle)
  * [8\. Install / Upgrade the Packages](install_upgrade_packages)
  * [9\. New Installation - All Configurations](new_installation)
    * [9.1\. Configure Your MTA Nodes](new_installation#install.mta_node)
    * [9.2\. Configure the Cassandra Nodes](install.configure_cassandra)
    * [9.3\. Configure the Analytics Nodes](install.analytics_nodes)
    * [9.4\. Start Remaining Services](install.start_remaining_services)
  * [10\. Upgrade - Single Node](upgrade.single_node)
    * [10.1\. Preparation](upgrade.single_node#upgrade.single_node.preparation)
    * [10.2\. Vertica Updates](upgrade.single_node.vertica_updates)
    * [10.3\. Prepare and Run Flyway](upgrade.single_node.configuration.flyway)
    * [10.4\. Configuration Changes](upgrade.single_node.configuration.config_all__nodes)
    * [10.5\. Software Upgrade](upgrade.single_node.configuration.software_upgrade)
    * [10.6\. Update Web UI Configuration](upgrade.single_node.configuration.webui)
    * [10.7\. Start Services](upgrade.single_node.configuration.start_services)
    * [10.8\. Complete the Software Set Up](upgrade.single_node.complete_setup)
    * [10.9\. Next Steps](upgrade.single_node.configuration.next_steps)
  * [11\. Rolling Upgrade - Two-Tier Configuration and Combined Node](upgrade.two_tier_configuration_rolling)
    * [11.1\. Overview](upgrade.two_tier_configuration_rolling#upgrade.two_tier.preparation_rolling)
    * [11.2\. Before You Begin the Upgrade](upgrade.two_tier.preparation.prepare_all_nodes_rolling)
    * [11.3\. Perform a Cassandra Snapshot](upgrade.two_tier.preparation.snapshot_cassandra_rolling)
    * [11.4\. Upgrade Cassandra on the Platform Nodes](upgrade.two_tier.preparation.upgrade_cassandra_rolling)
    * [11.5\. Stop Transmissions to the First Platform Node](upgrade.two_tier.preparation.stop_generations_rolling)
    * [11.6\. Upgrade Ecelerity and the Cassandra Schema on the First Platform Node](upgrade.two_tier.preparation.ecelerity_rolling)
    * [11.7\. Restore Transmissions to the First Platform Node and Stop Transmissions to all other Platform Nodes](upgrade.two_tier.preparation.stop_transmissions_rolling)
    * [11.8\. Upgrade Ecelerity on the Remaining Platform Nodes](upgrade.two_tier.preparation.upgrade_ecelerity_rolling)
    * [11.9\. Restore Transmissions to the Remaining Platform Nodes](upgrade.two_tier.preparation.restore_tranmissions_rolling)
    * [11.10\. Upgrade Vertica on the Analytics Nodes](upgrade.two_tier.preparation.upgrade_vertica_rolling)
    * [11.11\. Prepare and Run Flyway](upgrade.two_tier.configuration.flyway_rolling)
    * [11.12\. Upgrade Remaining RPMs on Analytics Nodes](upgrade.two_tier.preparation.rpms_rolling)
    * [11.13\. Configuration Changes](upgrade.two_tier.configuration.config_all_nodes_rolling)
    * [11.14\. Install the Adaptive Delivery API](upgrade.two_tier.configuration.software_upgrade_rolling)
    * [11.15\. Update the Web UI Configuration](upgrade.two_tier.configuration.webui_rolling)
    * [11.16\. Start Services](upgrade.two_tier.configuration.start_services_rolling)
    * [11.17\. Complete the Software Set Up](upgrade.two_tier.complete_setup_rolling)
  * [12\. Post-Installation](post_installation)
    * [12.1\. Installing Partner Modules](post_installation#install.additional.packages)
    * [12.2\. Reviewing Configuration Files](install.post-install.config)
    * [12.3\. Rotating Logfiles](install.post-install.rotate)
    * [12.4\. Download and Install the Vertica Management Console](install.post-install.vertica_mgmt_console)
    * [12.5\. Upgrading the Vertica License](install.vertica.license)
    * [12.6\. Security Considerations](install.security_considerations)
  * [13\. Adding and Removing Platform Nodes](add_remove_platform_nodes)
    * [13.1\. Adding a Platform Node](add_remove_platform_nodes#node_add)
    * [13.2\. Removing a Platform Node](node_remove)
  * [14\. Adding and Removing Analytics Nodes](add_remove_analytics_nodes)
    * [14.1\. Adding an Analytics Node](add_remove_analytics_nodes#node_add_analytics)
    * [14.2\. Removing an Analytics Node](node_remove_analytics)
* [III. Configuring Momentum](p.configuration)
  * [15\. Configuration Overview](conf.overview)
    * [15.1\. Configuration Files](conf.overview#conf.files)
    * [15.2\. Configuration Options](conf.options)
    * [15.3\. Configuration Scopes and Fallback](ecelerity.conf.fallback)
    * [15.4\. Listeners](listeners)
    * [15.5\. Modules](module_config)
    * [15.6\. `ecelerity.conf` File](conf.ref.ecelerity.conf)
  * [16\. Cluster-specific Configuration](cluster)
    * [16.1\. Cluster-specific Configuration Files](cluster#cluster.config_files)
    * [16.2\. `eccluster.conf` File](conf.ref.eccluster.conf)
    * [16.3\. `ecelerity-cluster.conf` File](conf.ref.ecelerity_cluster.conf)
    * [16.4\. `msgc_server.conf` File](conf.ref.msgc_server.conf)
    * [16.5\. Cluster-specific Listeners](cluster.listeners)
    * [16.6\. Configuring Momentum for High Availability and Failover](cluster.config.failover)
    * [16.7\. Configuring Riak in a Cluster](cluster.riak.configuration)
  * [17\. Configuring Momentum's System Console](control_listener)
    * [17.1\. Control_Listener Configuration](control_listener#control_listener.config)
    * [17.2\. Control_Listener Authentication](control_auth)
    * [17.3\. Control_Listener Accounting](control_acct)
    * [17.4\. Control_Listener Authorization](control_authz)
  * [18\. Configuring Inbound Mail Service Using ECStream](ecstream_listener)
    * [18.1\. ECStream_Listener Configuration](ecstream_listener#ecstream_listener.config)
  * [19\. Configuring Inbound Mail Service Using SMTP](esmtp_listener)
    * [19.1\. ESMTP_Listener Configuration](esmtp_listener#esmtp_listener.config)
    * [19.2\. Inbound Email Relay or Gateway](esmtp_listener.relay_domains)
    * [19.3\. `Reconfig_Message` Option](esmtp_listener.reconfig_message)
    * [19.4\. SMTP Extensions](esmtp_listener.extensions)
    * [19.5\. ESMTP_Listener Authentication](inbound_smtp)
    * [19.6\. Inbound SSL](inbound_ssl)
    * [19.7\. Inbound TLS](inbound_tls)
  * [20\. Configuring Inbound Mail Service Using HTTP](http_listener)
    * [20.1\. HTTP_Listener Configuration](http_listener#http_listener.config)
    * [20.2\. `msg_gen.conf` File](conf.ref.msg_gen.conf)
  * [21\. Enforcing REST API/UI User Authentication](auth)
  * [22\. Using Yahoo! DomainKeys](using_domainkeys)
    * [22.1\. DomainKeys Signing](using_domainkeys#using_domainkeys.signing)
    * [22.2\. DomainKeys Validation](using_domainkeys.validation)
  * [23\. Using DomainKeys Identified Mail (DKIM) Signatures](using_dkim)
    * [23.1\. DKIM Signing](using_dkim#using_dkim.signing)
    * [23.2\. DKIM Validation](using_dkim.validation)
  * [24\. Configuring Multiple Event Loops](multi_event_loops)
  * [25\. Configuring Outbound Mail Delivery](outbound_mail)
    * [25.1\. Routing Mail](outbound_mail#outbound_mail.routing.mail)
    * [25.2\. Prohibited_Hosts](outbound_mail.prohibited.hosts)
    * [25.3\. MultiVIP© Interfaces](outbound_mail.multivip.interfaces)
    * [25.4\. Throttling and Traffic Shaping](outbound_mail.traffic.shaping)
    * [25.5\. Outbound TLS](tls_option)
    * [25.6\. Outbound XCLIENT support](outbound_mail.outbound.xclient)
    * [25.7\. Outbound Email Relay](outbound_mail.relay_hosts)
  * [26\. Log Aggregation](log_aggregation)
    * [26.1\. Configuring Log Aggregation](log_aggregation#log_aggregation.configuration)
    * [26.2\. Centralized Logging Example](cluster.config.logging.centalized.logging)
    * [26.3\. Complex Centralized Logging Deployments](cluster.config.logging.complex)
    * [26.4\. Redundant Logs](cluster.config.logging.redundancy)
    * [26.5\. Decommissioning a Log Aggregator](cluster.config.logging.decommissioning)
  * [27\. DuraVIP™: IP Fail over](cluster.config.duravip)
    * [27.1\. IP Addresses and `duravip_follow`](cluster.config.duravip#cluster.config.duravip_follow)
    * [27.2\. `duravip_follow` and the #mmove Binding](cluster.config.mmove)
    * [27.3\. Address Resolution Protocol (ARP) traffic](cluster.config.arp_all_hosts)
    * [27.4\. DuraVIP™ Configuration Conflicts and Ambiguities](cluster.duravip.conflict)
  * [28\. Data Replication](cluster.config.replication)
    * [28.1\. Replication Configurations](cluster.config.replication#cluster.replication.features)
  * [29\. PostgreSQL](postgresql)
    * [29.1\. PostgreSQL Overview](postgresql#postgresql.overview)
    * [29.2\. Running the PostgreSQL Server](postgresql.server)
    * [29.3\. Using the PostgreSQL Client Program](postgresql.client)
    * [29.4\. Dumping and Restoring the Database](postgresql.migrating)
  * [30\. Riak](riak)
    * [30.1\. Riak Overview](riak#riak.overview)
    * [30.2\. Running the Riak Service](riak.service)
    * [30.3\. Riak Ports](operations.riak.ports)
    * [30.4\. Backups](operations.riak.backups)
  * [31\. Configuring the Environment File](environment_file)
* [IV. Logging](p.logs)
  * [32\. Logging Overview](logging.overview)
    * [32.1\. Log Files](logging.overview#logging.overview.files)
    * [32.2\. Logging Configuration](logging.configuration)
  * [33\. Log Monitoring](log_monitoring)
  * [34\. Rotating Logs **ec_rotate**](log_rotating)
    * [34.1\. `ec_rotate.conf` File](log_rotating#conf.ref.ec_rotate.conf)
  * [35\. Log Formats](log_formats)
    * [35.1\. `acctlog`](log_formats#log_formats.acctlog)
    * [35.2\. `adaptive` Log](adaptive.log.format)
    * [35.3\. `bouncelog`](log_formats.bouncelog)
    * [35.4\. `fbllog`](log_formats.fbllog)
    * [35.5\. `httplog`](log_formats.httplog)
    * [35.6\. `importlog`](log_formats.importlog)
    * [35.7\. `mainlog`](log_formats.mainlog)
    * [35.8\. `paniclog`](log_formats.paniclog)
    * [35.9\. `rejectlog`](log_formats.rejectlog)
    * [35.10\. Bounce Classification Codes](bounce_logger.classification.codes)
    * [35.11\. Connection Stages](log_formats.connection.stages)
* [V. Using the System Console](p.operations)
  * [36\. Starting Momentum (**ecelerity**)](conf.starting)
    * [36.1\. Startup Scripts](conf.starting#startup.scripts)
  * [37\. Using the System Console (**ec_console**)](operations)
    * [37.1\. Connecting to the Console](operations#operations.console)
    * [37.2\. Console Commands](operations.console-commands)
    * [37.3\. Using Module-Specific Console Commands](module_specific_console_commands.using)
    * [37.4\. Setting and Getting Module Options from the Console](modules.options.console)
    * [37.5\. Creating Custom Console Commands](operations.console.lua)
  * [38\. Using the Cluster Manager (**eccmgr**)](cluster.config.operations)
    * [38.1\. Connecting to the Console on the Cluster Manager](cluster.config.operations#idp4497120)
    * [38.2\. Console Commands for the Cluster Manager](cluster.config.operations.eccmgr.console)
  * [39\. CIDR Server](cluster.cidr_server)
    * [39.1\. `cidr_cli` Utility](cluster.cidr_server#cluster.cidr_cli)
* [VI. SMTP Injection](p.smtp_injections)
  * [40\. Adjusting your Client Mail Application](smtp_injection)
  * [41\. Tracking Engagement for SMTP](engagement_tracking_smtp)
    * [41.1\. Introduction](engagement_tracking_smtp#engagement_tracking_smtp.intro)
    * [41.2\. Using the X-MSYS-API Header for Engagement Tracking](x-msys-api_header)
    * [41.3\. Using Policy for Engagement Tracking](engagement_tracking_smtp.policy)
    * [41.4\. Escaping {{ and }} in SMTP Message Body](engagement_tracking_smtp.escaping)
  * [42\. Reporting Options](smtp_reporting_options)
* [VII. Message Generation (HTTP)](p.http_rest)
  * [43\. Creating an API Key](create_apikey)
  * [44\. Managing Your API Keys](web-ui.apikeys)
    * [44.1\. Viewing Your API Keys](web-ui.apikeys#web-ui.apikeys.viewing)
    * [44.2\. Creating an API Key](web-ui.apikeys.create)
    * [44.3\. Updating an API Key](web-ui.apikeys.update)
    * [44.4\. Deleting an API Key](web-ui.apikeys.delete)
  * [45\. Generating a Transmission](message_gen)
  * [46\. Using Substitution Data](substitution_data)
  * [47\. Creating Stored Templates](stored_template)
  * [48\. Managing Your Templates in the UI](web-ui.templates)
    * [48.1\. Viewing Your Templates](web-ui.templates#web-ui.templates.view)
    * [48.2\. Creating a Template](web-ui.templates.create)
    * [48.3\. Previewing and Testing Your Template](web-ui.templates.preview)
    * [48.4\. Updating Your Template](web-ui.update.template)
    * [48.5\. Publishing Your Template](web-ui.templates.publish)
    * [48.6\. Deleting a Template](web-ui.templates.delete)
  * [49\. Using Stored Templates](using_template)
  * [50\. Creating Stored Recipient Lists](stored_list)
    * [50.1\. Managing Recipient Lists using the UI](stored_list#manage_list_ui)
  * [51\. Using Stored Recipient Lists](using_list)
  * [52\. Sending Emails as CC and BCC](sending_cc_bcc)
  * [53\. Using Complex Templates](complex_template)
* [VIII. Reporting and Engagement Tracking](p.analytics)
  * [54\. Reporting Options](http_reporting_options)
  * [55\. Getting Started with the Web-based User Interface](web-ui)
    * [55.1\. Recipient Lists](web-ui#web-ui.recipients)
  * [56\. Using the UI for Reporting](reporting_ui)
  * [57\. Reports and Engagement Tracking in the UI](web-ui.reports)
    * [57.1\. Selecting Your Metrics and Filters](web-ui.reports#web-ui.reports.selecting.metrics.filters)
    * [57.2\. Viewing Your Reports](web-ui.reports.viewing.reports)
    * [57.3\. Adaptive Delivery Report](web-ui.reports.adaptive.delivery)
    * [57.4\. Evaluating Your Campaign Performance](web-ui.reports.evaluating.campaign.performance)
  * [58\. Using the Metrics API for Reporting](reporting_metrics)
  * [59\. Using Webhooks for Event Data](reporting_webhooks)
  * [60\. Managing Your Webhooks in the UI](web-ui.webhooks)
    * [60.1\. Viewing Your Webhooks](web-ui.webhooks#web-ui.webhooks.viewing)
    * [60.2\. Creating a Webhook](web-ui.webhooks.create)
    * [60.3\. Testing Your Webhook](web-ui.webhooks.test)
    * [60.4\. Updating Your Webhook](web-ui.webhooks.update)
    * [60.5\. Deleting a Webhook](web-ui.webhooks.delete)
  * [61\. Tracking Engagement for HTTP](engagement_tracking_http)
* [IX. Writing Policy](p.policy)
  * [62\. Implementing Policy with Momentum](policy)
    * [62.1\. Validation and the Validation Context](policy#policy.validation)
    * [62.2\. Policy Scriptlets](implementing.policy.scriptlets)
  * [63\. Validation Context Variables](policy.context.variables)
    * [63.1\. Connection Context Variables](policy.context.variables#policy.predefined-context-conn)
    * [63.2\. Message Context Variables](policy.context-mess)
* [X. Reference](p.reference)
  * [64\. Lua Functions Summary](lua.summary_table)
  * [65\. Modules Summary](modules.summary.all.modules)
  * [66\. Configuration Options Summary](config.options.summary)
  * [67\. Console Commands Summary](console_commands)
  * [68\. Executable Command Summary](exe)
  * [69\. Hook Points and C Functions Reference](hooks)
    * [msg_gen_data_spool](hooks.msg_gen_data_spool) — This hook is invoked after a message has been generated by the msg_gen module
    * [config_rsrc_setup](hooks.config_rsrc_setup) — Register a resource
    * [ec_config_rsrc_get](apis.ec_config_rsrc_get) — Return a resource list blobject from the configuration system
    * [ec_httpsrv_register_auth](apis.ec_httpsrv_register_auth) — Register an HTTP handler for authenticating a URI
    * [ec_httpsrv_request_local_address](apis.ec_httpsrv_request_local_address) — Returns the local IP address from the current session
    * [ec_httpsrv_request_peer_address](apis.ec_httpsrv_request_peer_address) — Returns the remote peer address from the current session
  * [70\. Lua Functions Reference](lua.function.details)
    * [msys.db.execute](lua.ref.msys.db.execute) — Execute a query that is not expected to return data
    * [ac:esmtp_capability_add](lua.ref.ac_esmtp_capability_add) — Add a capability to the EHLO response
    * [ac:esmtp_capability_remove](lua.ref.ac_esmtp_capability_remove) — Remove a capability string from the EHLO response
    * [ac:inbound_session_count](lua.ref.ac_inbound_session_count) — Return the current inbound session count to this listener for the connecting IP
    * [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze) — Analyze a message using Cloudmark
    * [msys.cloudmark.add_af_data](lua.ref.msys.cloudmark.add_af_data) — Pass data for use with the Cloudmark ActiveFilter.
    * [msys.cloudmark.score](lua.ref.msys.cloudmark.score) — Scan messages using Cloudmark
    * [msys.cloudmark.score_af](lua.ref.msys.cloudmark.score_af) — Set the Cloudmark ActiveFilter score threshold
    * [msys.cloudmark.set_af_mode_discard](lua.ref.msys.cloudmark.set_af_mode_discard) — Set the Cloudmark ActiveFilter mode to DISCARD.
    * [msys.cloudmark.set_af_mode_keep](lua.ref.msys.cloudmark.set_af_mode_keep) — Set the Cloudmark ActiveFilter mode to KEEP.
    * [msys.cloudmark.set_af_mode_movemsg](lua.ref.msys.cloudmark.set_af_mode_movemsg) — Set the Cloudmark ActiveFilter mode to MOVEMSG.
    * [msys.cloudmark.set_af_msi_address](lua.ref.msys.cloudmark.set_af_msi_address) — Set the address for the Cloudmark ActiveFilter MSI Messages.
    * [msys.apn.apn_status_classifier](lua.ref.msys.apn.apn_status_classifier) — Determine whether the delivery status code represents a permanent or temporary failure
    * [client:do_request](lua.ref.client_do_request) — Perform an HTTP request
    * [client:get_body](lua.ref.client_get_body) — Get the body of an HTTP response
    * [client:get_headers](lua.ref.client_get_headers) — Get HTTP headers
    * [client:get_status](lua.ref.client_get_status) — Return the status of an HTTP request
    * [sess:request_add_header](lua.ref.sess_request_add_header) — Add a header to an HTTP session
    * [sess:request_delete_header](lua.ref.sess_request_delete_header) — Delete a header from an HTTP session
    * [sess:request_finalize](lua.ref.sess_request_finalize) — Finalize changes to an HTTP request
    * [sess:request_set_body](lua.ref.sess_request_set_body) — Set the body of an HTTP session
    * [msys.httpclnt.http_status_classifier](lua.ref.msys.httpclnt.http_status_classifier) — Determine the delivery status of the "DLV_Response_Status" variable
    * [msys.http.client.new](lua.ref.msys.http.client.new) — Create an HTTP client
    * [client:parse_headers](lua.ref.client_parse_headers) — Parse the headers of an HTTP response
    * [client:set_header](lua.ref.client_set_header) — Set an HTTP header
    * [client:set_timeout](lua.ref.client_set_timeout) — Set the timeout for an HTTP client
    * [c:close](lua.ref.curl.c_close) — Close a curl object
    * [c:perform](lua.ref.curl.c_perform) — Perform the file transfer
    * [c:setopt](lua.ref.curl.c_setopt) — Set the option value of a curl object
    * [curl.escape](lua.ref.curl.escape) — URL encode a string
    * [curl.new](lua.ref.curl.new) — Create a cURL object
    * [curl.unescape](lua.ref.curl.unescape) — Unescape URL encoding in strings
    * [msys.core.dns_get_domain](lua.ref.msys.core.dns_get_domain) — Get a domain record
    * [msys.core.get_now_ts](lua.ref.msys.core.get_now_ts) — Get the current time
    * [msys.core.mail_queue_delay_domain](lua.ref.msys.core.mail_queue_delay_domain) — Add a domain record to the delayed queue
    * [msys.core.string_new](lua.ref.msys.core.string_new) — Create an ec_string
    * [msg:code](lua.ref.msg_code) — Get or set the message code
    * [msg:get_envelope2](lua.ref.msg_get_envelope2) — Get envelope values
    * [msg:header](lua.ref.header) — Manipulate message headers
    * [msg:listener_addr](lua.ref.msg_listener_addr) — Get the `recv_via` IP and/or PORT.
    * [msg:reception_peer](lua.ref.msg_reception_peer) — Get the `recv_from` IP and/or PORT.
    * [msg:context_delete](lua.ref.msg_context_delete) — Delete a context variable
    * [msg:context_exists](lua.ref.msg_context_exists) — Check if a context variable exists
    * [msg:context_exists_and_get](lua.ref.msg_context_exists_and_get) — Check if a context variable exists and get it
    * [msg:context_get](lua.ref.msg_context_get) — Get a context variable
    * [msg:context_set](lua.ref.msg_context_set) — Sets a context variable
    * [msgpart:unlink](lua.ref.msgpart_unlink) — Remove the part (and its children) from the MIME tree
    * [msys.core.io_wrapper_open](lua.ref.msys.core.io_wrapper_open) — Open a handle to a resource
    * [msys.cast](lua.ref.msys.cast) — Cast an object to the specified class
    * [msys.config](lua.ref.msys.config) — Set or get configuration values
    * [msys.dnsLookup](lua.ref.msys.dnslookup) — Perform a DNS lookup
    * [msys.expandMacro](lua.ref.msys.expandMacro) — Expand macros (such as sieve, spf and custom_logger macros)
    * [msys.getClassMetaTable](lua.ref.msys.getClassMetaTable) — Return the metatable for the named class
    * [msys.httpsrv.register](lua.ref.msys.httpsrv.register) — Register a Lua function as an HTTP endpoint
    * [msys.idn.to_idn](lua.ref.msys.idn) — Attempts to convert the domain to the IDN format
    * [msys.idn.to_utf8](lua.ref.msys.idn_utf8) — Converts an IDN formatted string to unicode
    * [msys.lock](lua.ref.msys.lock) — The current running OS level thread obtains a lock on the named mutex
    * [msys.parseRFC2822Addresses](lua.ref.msys.parseRFC2822Addresses) — Parse the address string per the address parsing rules defined in RFC2822
    * [msys.readfile](lua.ref.msys.readfile) — Read the entire contents of the specified file or URI
    * [msys.registerAuth](lua.ref.msys.registerAuth) — Register an authentication/authorization scheme that can be used for SMTP or control channel authentication
    * [msys.registerControl](lua.ref.msys.registerControl) — Register a command with the control channel subsystem
    * [msys.registerModule](lua.ref.msys.registerModule) — Register a Lua module with the system.
    * [msys.runInPool](lua.ref.msys.runinpool) — Run a function in a separate threadpool
    * [msys.sleep](lua.ref.msys.sleep) — When called in the scheduler thread, suspend the current session for the specified duration
    * [msys.snmpTrap](lua.ref.msys.snmpTrap) — Issue an SNMP trap
    * [msys.type](lua.ref.msys.type) — Return the type name of the supplied parameter
    * [msys.unlock](lua.ref.msys.unlock) — Release a lock obtained via msys.lock
    * [session:request_url_get](lua.ref.session_request_url_get) — Get the request URL
    * [session:response_status_set_std](lua.ref.session_response_status_set_std) — Set the HTTP status for the session response
    * [json.decode](lua.ref.json.decode) — Create a JSON object from a JSON string
    * [json.encode](lua.ref.json.encode) — Convert a Lua variable or an expression for use with a JSON object
    * [json.new](lua.ref.json.new) — Create an empty JSON object
    * [json.strerror](lua.ref.json.strerror) — Return the description of a JSON error code
    * [msg.batch_id](lua.ref.msg.batch_id) — Return the human-readable ec_message.batch_id
    * [msg.conn_id](lua.ref.msg.conn_id) — Return the human-readable ec_message.conn_id
    * [msg.id](lua.ref.msg.id) — Return the human-readable ec_message.id
    * [msg:address_header](lua.ref.msg_address_header) — Returns address components as an array
    * [msg:binding](lua.ref.msg_binding) — Set or get the message binding
    * [msg:binding_group](lua.ref.msg_binding_group) — Sets the binding_group to the named binding, if one is provided.
    * [msg:body](lua.ref.msg_body) — Set the message body (minus headers) if provided
    * [msg:body_match](lua.ref.msg_body_match) — Streaming interface to a PCRE search of a message body (minus headers)
    * [msg:body_replace](lua.ref.msg_body_replace) — Streaming interface to a PCRE replacement of a message body (minus headers)
    * [msg:build](lua.ref.msg_build) — Create a message
    * [msg:discard](lua.ref.msg_discard) — Silently discard a message
    * [msg:forward](lua.ref.msg_forward) — Forward the current message to recipients other than the original recipients
    * [msg:get_delivery_method](lua.ref.msg_get_delivery_method) — Return the delivery method for a message
    * [msg:get_message_size](lua.ref.msg_get_message_size) — Return the size of a message
    * [msg:inject](lua.ref.msg_inject) — Use this function to send mail
    * [msg:is_mcmt](lua.ref.msg_is_mcmt) — Determine whether a message is a MCMT message
    * [msg:mailfrom](lua.ref.msg_mailfrom) — Sets the 'MAIL FROM' email address if one is provided
    * [msg:makeBoundary](lua.ref.msg_makeBoundary) — Generates a unique boundary string
    * [msg:makeContainer](lua.ref.msg_makeContainer) — Creates a new, unlinked, container message part
    * [msg:makePart](lua.ref.msg_makePart) — Creates a new, unlinked, singleton (or leaf) message part
    * [msg:mime](lua.ref.msg_mime) — Returns the top of the MIME tree for the message, a message part
    * [msg:raw](lua.ref.msg_raw) — Set or returns the message content
    * [msg:raw_match](lua.ref.msg_raw_match) — Streaming interface to a PCRE search of the message content
    * [msg:raw_replace](lua.ref.msg_raw_replace) — Streaming interface to a PCRE replacement of message content
    * [msg:rcptto](lua.ref.msg_rcptto) — Sets the 'RCPT TO' email address if one is provided
    * [msg:routing_domain](lua.ref.msg_routing_domain) — Set or return the routing domain for a message
    * [msg:text](lua.ref.msg_text) — Return the transfer decoded text for the body
    * [msg:text](lua.ref.msg_text1) — Replace the entire message body
    * [msg:text_match](lua.ref.msg_text_match) — Streaming PCRE search across the transfer-decoded, UTF-8 text version of the message body
    * [msg:text_replace](lua.ref.msg_text_replace) — Streaming interface to a PCRE replacement of textual content from the message body
    * [msgpart:addFirstChild](lua.ref.msgpart_addFirstChild) — Adds a child as the first child on this part
    * [msgpart:addLastChild](lua.ref.msgpart_addLastChild) — Adds a child as the last child on this part
    * [msgpart:address_header](lua.ref.msgpart_address_header) — Parse each instance of the named header for RFC2822 addresses
    * [msgpart:body_match](lua.ref.msgpart_body_match) — Streaming interface to a PCRE search of a message body part (minus headers)
    * [msgpart:body_replace](lua.ref.msgpart_body_replace) — Streaming interface to a PCRE replacement of a message body part (minus headers)
    * [msgpart:content_type](lua.ref.msgpart_content_type) — Returns a table of content type related information
    * [msgpart:header](lua.ref.msgpart_header) — Return an array of header values for the given name
    * [msgpart:header](lua.ref.msgpart_header2) — Unset the header name of the current message part
    * [msgpart:header](lua.ref.msgpart_header3) — If mode is replace (or unspecified): first deletes all other headers of that name before appending the new value to the message headers
    * [msgpart:insertAfter](lua.ref.msgpart_insertAfter) — Insert this part into the MIME tree after the given parameter
    * [msgpart:insertBefore](lua.ref.msgpart_insertBefore) — Insert this part into the MIME tree before the given parameter
    * [msgpart:raw_match](lua.ref.msgpart_raw_match) — Streaming interface to a PCRE search of the current message part
    * [msgpart:raw_replace](lua.ref.msgpart_raw_replace) — Streaming interface to a PCRE replacement message part content
    * [msgpart:text](lua.ref.msgpart_text2) — The entire message body part is replaced by the supplied text
    * [msgpart:text](lua.ref.msgpart_text) — Returns the transfer decoded text for the message part, in UTF-8
    * [msgpart:text_match](lua.ref.msgpart_text_match) — Streaming a PCRE search across the transfer decoded UTF-8 text version of the message body part
    * [msgpart:text_replace](lua.ref.msgpart_text_replace) — Streaming interface to a PCRE replacement of textual content from the message body parts
    * [msys.asyncOk](lua.ref.msys.asyncOk) — Check if the current execution environment is suitable for suspend/resume operations
    * [msys.audit.connections](lua.ref.msys.audit.connections) — Return the number of connections that have occurred for a CIDR block within a configured time window
    * [msys.audit.inbound_session_count](lua.ref.msys.audit.inbound_session_count) — Count connections currently established from the specified cidr to the specified service
    * [msys.audit.receptions](lua.ref.msys.audit.receptions) — Return the number of receptions that have occurred for a CIDR block within a configured time window
    * [msys.audit.rejections](lua.ref.msys.audit.rejections) — Return the number of rejections that have occurred for a CIDR block within a configured time window
    * [msys.audit_series.add](lua.ref.msys.audit_series.add) — Adjust the counter for the current time window of a named series
    * [msys.audit_series.count](lua.ref.msys.audit_series.count) — Return the total associated with the named series
    * [msys.audit_series.define](lua.ref.msys.audit_series.define) — Define an audit series
    * [msys.audit_series.remove_item](lua.ref.msys.audit_series.remove_item) — Remove a counter from a named series
    * [msys.av.engines](lua.ref.msys.av.engines) — Return a list of configured engine names in a table
    * [msys.av.scan](lua.ref.msys.av.scan) — Perform a virus scan using the named engine
    * [msys.av.scan_part](lua.ref.msys.av.scan_part) — Perform a virus scan on a specific message part using the named engine
    * [msys.base64.decode](lua.ref.msys.base64.decode) — Decode a base64 encoded string
    * [msys.base64.encode](lua.ref.msys.base64.encode) — Base64-encode a string
    * [msys.bounce.classify](lua.ref.msys.bounce.classify) — Create a bounce classification for a message
    * [msys.bounce.classify_smtp_response](lua.ref.msys.bounce.classify_smtp_response) — Create a bounce classification from SMTP response text and the domain name
    * [msys.brightmail.scan](lua.ref.msys.brightmail.scan) — Use Brightmail to scan messages
    * [msys.cidr.define](lua.ref.msys.cidr.define) — Define a named CIDR object
    * [msys.cidr.query](lua.ref.msys.cidr.query) — Look up address against the named CIDR
    * [msys.cidr.reload](lua.ref.msys.cidr.reload) — Refresh CIDRs of type `datasource` and `rbldnsd`
    * [msys.commtouch.diagnose](lua.ref.msys.commtouch.diagnose) — Scan messages using Commtouch
    * [msys.counter.add](lua.ref.msys.counter.add) — Add to the current value of the specified counter
    * [msys.counter.inc](lua.ref.msys.counter.inc) — Increment a counter
    * [msys.counter.open](lua.ref.msys.counter.open) — Create a counter object
    * [msys.counter.read](lua.ref.msys.counter.read) — Read the specified counter
    * [msys.counter.reset](lua.ref.msys.counter.reset) — Reset a counter
    * [msys.counter.unlink](lua.ref.msys.counter.unlink) — Unlink a counter
    * [msys.db.fetch_row](lua.ref.msys.db.fetch_row) — If successful, return the first row of the query result as a table
    * [msys.db.query](lua.ref.msys.db.query) — Query a datasource
    * [msys.delivery.ob_get_current_message](lua.ref.msys.delivery.ob_get_current_message) — Get the current message from the session context
    * [msys.dumper.Dumper](lua.ref.msys.dumper.Dumper) — Dump information about an object
    * [msys.expurgate.scan](lua.ref.msys.expurgate.scan) — Scan using the Eleven antivirus engine
    * [msys.gauge_cache.dec](lua.ref.msys.gauge_cache.dec) — Decrement the value associated with keystring in the named cache
    * [msys.gauge_cache.define](lua.ref.msys.gauge_cache.define) — Create a cache that can be used to maintain a set of counters
    * [msys.gauge_cache.get](lua.ref.msys.gauge_cache.get) — Look up the value associated with keystring in the named cache
    * [msys.gauge_cache.inc](lua.ref.msys.gauge_cache.inc) — Increment the value associated with `keystring` in the named cache
    * [msys.gauge_cache.remove_item](lua.ref.msys.gauge_cache.remove_item) — Remove the value associated with `keystring` from the named cache
    * [msys.gcm.gcm_classify_error](lua.ref.msys.gcm.gcm_classify_error) — Determine the delivery status of the "DLV_Response_Status" variable
    * [msys.gcm.gcm_get_result_error_code](lua.ref.msys.gcm.gcm_get_result_error_code) — Get the error code from the response results error
    * [msys.pcre.match](lua.ref.msys.pcre.match) — Perform a PCRE regex match operation
    * [msys.pcre.replace](lua.ref.msys.pcre.replace) — Perform a PCRE replace operation
    * [msys.pcre.split](lua.ref.msys.pcre.split) — Perform a PCRE split operation
    * [msys.os.statvfs_read](lua.ref.msys.os.statvfs_read) — Request a snapshot of the stream
    * [msys.os.statvfs_subscribe](lua.ref.msys.os.statvfs_subscribe) — Provide a "stream" for file system statistics (statvfs) updates
    * [msys.qp.decode](lua.ref.msys.qp.decode) — Decode a quoted-printable message
    * [msys.qp.encode](lua.ref.msys.qp.encode) — Quoted-printable encode a string
    * [msys.rfc3464.compute_delivery_status](lua.ref.msys.rfc3464.compute_delivery_status) — Generate RFC3464 compliant delivery status headers
    * [msys.rfc3464.compute_delivery_status_string](lua.ref.msys.rfc3464.compute_delivery_status_string) — Generate RFC3464 compliant delivery status headers
    * [msys.rfc3464.create_mdn](lua.ref.msys.rfc3464.create_mdn) — Generate an MDN from a message
    * [msys.rfc3464.extract_delivery_status](lua.ref.msys.rfc3464.extract_delivery_status) — Return a table of parsed email headers
    * [msys.rfc3464.send_mdn](lua.ref.msys.rfc3464.send_mdn) — Generate and enqueue an MDN
    * [msys.symantec_beik.scan](lua.ref.msys.symantec_beik.scan) — Scan using BEIK
    * [msys.threadpool.count](lua.ref.msys.threadpool.count) — Return the current number of thread pools
    * [msys.threadpool.find](lua.ref.msys.threadpool.find) — Find a thread pool name from a job class ID or a job class ID from a thread pool name
    * [msys.threadpool.stat](lua.ref.msys.threadpool.stat) — Return stats regarding a threadpool
    * [msys.timer.after](lua.ref.msys.timer.after) — execute closure after a given time
    * [msys.timer.at](lua.ref.msys.timer.at) — execute closure at a given time
    * [msys.timer.every](lua.ref.msys.timer.every) — execute closure every interval
    * [msys.validate.dk.get_responsible_domain](lua.ref.msys.validate.dk.get_responsible_domain) — Return the domain responsible for the current message
    * [msys.validate.dk.sign](lua.ref.msys.validate.dk.sign) — Sign a message using a Domain Key
    * [msys.validate.opendkim.get_num_sigs](lua.ref.msys.validate.opendkim.get_num_sigs) — Return the number of DKIM signatures
    * [msys.validate.opendkim.get_sig](lua.ref.msys.validate.opendkim.get_sig) — Get a signature from a DKIM object
    * [msys.validate.opendkim.get_sig_canons](lua.ref.msys.validate.opendkim.get_sig_canons) — Fetch the canonicalizers used for a signature
    * [msys.validate.opendkim.get_sig_domain](lua.ref.msys.validate.opendkim.get_sig_domain) — Fetch the signing domain from a DKIM_SIGINFO object
    * [msys.validate.opendkim.get_sig_errorstr](lua.ref.msys.validate.opendkim.get_sig_errorstr) — Fetch the error associated with a DKIM signature
    * [msys.validate.opendkim.get_sig_flags](lua.ref.msys.validate.opendkim.get_sig_flags) — Fetch the flags associated with a DKIM signature
    * [msys.validate.opendkim.get_sig_hdrsigned](lua.ref.msys.validate.opendkim.get_sig_hdrsigned) — Determine whether a given header was signed
    * [msys.validate.opendkim.get_sig_identity](lua.ref.msys.validate.opendkim.get_sig_identity) — Fetch the identity associated with a DKIM signature
    * [msys.validate.opendkim.get_sig_keysize](lua.ref.msys.validate.opendkim.get_sig_keysize) — Fetch the size of the key used to generate a signature
    * [msys.validate.opendkim.get_sig_selector](lua.ref.msys.validate.opendkim.get_sig_selector) — Fetch the selector associated with a DKIM signature
    * [msys.validate.opendkim.get_sig_signalg](lua.ref.msys.validate.opendkim.get_sig_signalg) — Return the signing algorithm as a string
    * [msys.validate.opendkim.sign](lua.ref.msys.validate.opendkim.sign) — Sign a message using OpenDKIM
    * [msys.validate.opendkim.verify](lua.ref.msys.validate.opendkim.verify) — Verify a DKIM signature
    * [thread.mutex](lua.ref.thread.mutex) — create a new mutex
    * [vctx:add_recipient](lua.ref.vctx_add_recipient) — Add an address to the recipient list for the inbound session
    * [vctx:disconnect](lua.ref.vctx_disconnect) — Disconnect the session associated with the current validation context
    * [vctx:get](lua.ref.vctx_get) — Get the value of a context variable
    * [vctx:recipient_list](lua.ref.vctx_recipient_list) — Return or set the current recipient list
    * [vctx:remove_recipient](lua.ref.vctx_remove_recipient) — Remove an address from the recipient list
    * [vctx:set](lua.ref.vctx_set) — Set the value of a context variable
    * [vctx:set_code](lua.ref.vctx_set_code) — Set the inbound disposition and response message
    * [vctx:tarpit](lua.ref.vctx_tarpit) — Issue a time cost on the inbound session
    * [doc:root](lua.ref.xml.doc_root) — Return the root node of an XML document
    * [doc:tostring](lua.ref.xml.doc_tostring) — Output a DOM document as a string
    * [doc:xpath](lua.ref.xml.doc_xpath) — Perform an XPath query
    * [node:addchild](lua.ref.xml.node_addchild) — Add a child node
    * [node:attribute](lua.ref.xml.node_attribute) — Set or get the attribute of a node
    * [node:children](lua.ref.xml.node_children) — Return an iterator of all child nodes
    * [node:contents](lua.ref.xml.node_contents) — Get or set a text node
    * [node:doc](lua.ref.xml.node_doc) — Return the document object that contains the specified node
    * [node:name](lua.ref.xml.node_name) — Return the name of a node
    * [node:tostring](lua.ref.xml.node_tostring) — Output a node as a string
    * [node:unlink](lua.ref.xml.node_unlink) — Unlink an XML node from its DOM container
    * [xml.parsexml](lua.ref.xml.parsexml) — Create an XML document object
  * [71\. Modules Reference](modules)
    * [71.1\. Introduction](modules#idp12311472)
    * [71.2\. ac_auth – Authentication Handler](modules.ac_auth)
    * [71.3\. adaptive – Adaptive Delivery](modules.adaptive)
    * [71.4\. alerting – Send Alerting Emails](modules.alerting)
    * [71.5\. alias – Alias Expansion](modules.alias)
    * [71.6\. antivirus – Antivirus](modules.antivirus)
    * [71.7\. as_logger – Audit Series Logger](modules.as_logger)
    * [71.8\. auth_ds – Datasource based SMTP Authentication](modules.auth_ds)
    * [71.9\. auth_radius – RADIUS based SMTP Authentication](modules.auth_radius)
    * [71.10\. beik – Symantec Brightmail™ Engine Integration Kit](modules.beik)
    * [71.11\. bind_address_secondary – Dual-stack IPv4/IPv6 Support](modules.bind_address_secondary)
    * [71.12\. bounce_classifier_override – Override/Augment Bounce Classifications](modules.bounce_classifier_override)
    * [71.13\. bounce_logger – Momentum-Style Bounce Logging](modules.bounce_logger)
    * [71.14\. brightmail – Symantec Brightmail™ Content Scanning Support](modules.brightmail)
    * [71.15\. chunk_logger Module](modules.chunk_logger)
    * [71.16\. cidrdb – CIDRDB](modules.cidrdb)
    * [71.17\. clamav – ClamAV](modules.clamav)
    * [71.18\. cloudmark – Cloudmark Authority® Content Scanning](modules.cloudmark)
    * [71.19\. cluster – Cluster](modules.cluster)
    * [71.20\. commtouch_ctasd – Commtouch Spam Protection](modules.commtouch)
    * [71.21\. compress_spool – Dynamic Spool Compression](modules.compress_spool)
    * [71.22\. conntrol – Fine-Grained Connection Control](modules.conntrol)
    * [71.23\. csapi – Symantec CSAPI Antivirus Support](modules.csapi)
    * [71.24\. custom_bounce_logger – Custom Bounce Logging](modules.custom_bounce_logger)
    * [71.25\. custom_logger – User-defined Logging](modules.custom_logger)
    * [71.26\. delay_dsn – Delay DSN Generation](modules.delay_dsn)
    * [71.27\. dnsbuf – Dynamically Set the DNS UDP Buffer Size](modules.dnsbuf)
    * [71.28\. domainkeys – Yahoo! DomainKeys](modules.domainkeys)
    * [71.29\. ds_core - Datasource Query Core](modules.ds_core)
    * [71.30\. EC_logger – Momentum-Style Logging](modules.ec_logger)
    * [71.31\. eleven – Eleven eXpurgate Content Scanning](modules.eleven)
    * [71.32\. engagement_tracker – HTTP Engagement Tracking](modules.engage_tracker)
    * [71.33\. event_hydrant – Message Tracking](modules.event_hydrant)
    * [71.34\. exim_logger – Exim Logging](modules.exim_logger)
    * [71.35\. fbl - Feedback Loop](modules.fbl)
    * [71.36\. fingerprint – Host Fingerprinting](modules.host_fingerprint)
    * [71.37\. http_logger – HTTP Requests and Responses](modules.http_logger)
    * [71.38\. httpsrv – HTTP Server](modules.httpsrv)
    * [71.39\. icu – ICU](modules.icu)
    * [71.40\. ilf_logger – Incremental License Fee Logging](modules.ilf_logger)
    * [71.41\. inbound_audit – Inbound traffic analytics](modules.inbound_audit)
    * [71.42\. ipv6_lookup – Multi-address-family MX Records](modules.ipv6_lookup)
    * [71.43\. jlog – jlog-Formatted Logging](modules.jlog)
    * [71.44\. Live Bounce Updates – Live Bounce Updates Service](modules.live.bounce.updates)
    * [71.45\. mail_loop – Mail Loop Detection](modules.mail_loop)
    * [71.46\. maildir – Maildir Delivery Support](modules.maildir)
    * [71.47\. msgc – Message Systems Group Communication](modules.msgc)
    * [71.48\. msg_gen – Message Generation](modules.msg_gen)
    * [71.49\. mxip - IP Addresses In MX Records](modules.mxip)
    * [71.50\. opendkim – Open Source DKIM](modules.opendkim)
    * [71.51\. outbound_audit – Outbound traffic analytics](modules.outbound_audit)
    * [71.52\. outbound_smtp_auth](modules.outbound_smtp_auth)
    * [71.53\. persist_io – Persistent IO Wrapper](modules.persistio)
    * [71.54\. pipe_io – Pipe IO Wrapper](modules.pipeio)
    * [71.55\. pipe_transport – Module](modules.pipe_transport)
    * [71.56\. postfix_logger – Postfix Logging](modules.postfix_logger)
    * [71.57\. reception_timing - Reception Timing Modules](modules.reception_timing)
    * [71.58\. response_transcode – Module](modules.response_transcode)
    * [71.59\. sched – The Schedule Module](modules.sched)
    * [71.60\. scriptlet - Lua Policy Scripts](modules.scriptlet)
    * [71.61\. securecreds – Password Encryption/Credential Retrieval](modules.securecreds)
    * [71.62\. seedlist – Seedlist Integration](modules.seedlist)
    * [71.63\. sendmail_logger – Sendmail Logging](modules.sendmail_logger)
    * [71.64\. smtp_auth_proxy - SMTP Authentication Proxy](modules.smtp_auth_proxy)
    * [71.65\. smtp_cbv – SMTP Callback Verification](modules.smtp_cbv)
    * [71.66\. smtp_rcptto_proxy - SMTP Recipient-To Proxy](modules.smtp_rcptto_proxy)
    * [71.67\. smtpapi – SMTP Engagement Tracking](modules.smtpapi)
    * [71.68\. spf Modules – spf_macros, spf_v1, and senderid (SPF v2)](modules.spf)
    * [71.69\. static-routes - Static Routes](modules.static_routes)
    * [71.70\. suppress_spool – Deferred Message Spooling](modules.suppress_spool)
    * [71.71\. syslog_io – The syslog_io Module](modules.syslog_io)
    * [71.72\. tls_macros – TLS-related Logging](tls_macros)
    * [71.73\. url_ripper – URL Extraction](modules.url_ripper)
  * [72\. Configuration Options Reference](config.options.ref)
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
  * [73\. Non-Module-Specific Console Commands](console.cmds.ref)
    * [active](console_commands.active) — show domains with active queue size bigger than threshold
    * [authz id](console_commands.authz_id) — display the id of the current user
    * [authz roles list](console_commands.authz_roles_list) — display the currently defined roles
    * [binding active](console_commands.binding_active) — show domains with active queue size bigger than threshold on a specified binding
    * [binding delayed](console_commands.binding_delayed) — show domains with delayed queue size bigger than threshold on a specified binding
    * [binding fail domain](console_commands.binding_fail_domain) — fail messages for a domain on a binding with a bounce message
    * [binding fail domain quiet](console_commands.binding_fail_domain_quiet) — fail messages for a domain on a binding without generating bounces
    * [binding flush domain](console_commands.binding_flush_domain) — perform delivery attempt on delayed queue of a domain on a binding
    * [binding summary](console_commands.binding_summary) — show binding statistics
    * [cache list](console_commands.cache_list) — list all caches along with their associated attributes
    * [cache stat](console_commands.cache_stat) — show detailed cache statistics for the specified cache
    * [cache stats](console_commands.cache_stats) — show cache statistics
    * [config](console_commands.config) — online configuration tuning for Momentum
    * [count](console_commands.count) — count open connections
    * [counter](console_commands.counter) — manage counters
    * [delayed](console_commands.delayed) — show domains with delayed queue size bigger than threshold
    * [dig](console_commands.dig) — submit a domain for DNS MX query
    * [dns_cache](console_commands.dns_cache) — manage Momentum's DNS cache
    * [domain](console_commands.domain) — show domain statistics
    * [domain all](console_commands.domain_all) — show statistics for all domains
    * [fail domain](console_commands.fail_domain) — fail messages for a domain with a bounce message
    * [fail domain quiet](console_commands.fail_domain_quiet) — fail messages for a domain without generating bounces
    * [fingerprint cache summary](console_commands.fingerprint_cache_summary) — display the current cache size
    * [fingerprint rejection summary](console_commands.fingerprint_rejection_summary) — display details related to the current inbound connection
    * [flush domain](console_commands.flush_domain) — perform delivery attempt on delayed queue of a domain
    * [help](console_commands.help) — show help information for console commands
    * [mailq](console_commands.mailq) — show the status of the mail queues
    * [memory](console_commands.memory) — report detailed memory usage
    * [message details](console_commands.message_details) — show detailed message information
    * [message fail](console_commands.message_fail) — fail a message
    * [message fail quiet](console_commands.message_fail_quiet) — fail a message and do not create a non-delivery receipt (NDR)
    * [message retry](console_commands.message_retry) — perform an immediate delivery attempt on a message
    * [module](console_commands.module) — manage loaded modules online
    * [\pager](console_commands.pager) — Page output of long console commands in the console.
    * [paniclog](console_commands.paniclog) — show last several entries written to paniclog
    * [pid](console_commands.pid) — show process id of Momentum
    * [rebind](console_commands.rebind) — rebind the messages in a binding or domain
    * [refresh domain](console_commands.refresh_domain) — refresh the DNS information for a domain
    * [reopen logs](console_commands.reopen_logs) — close and open log files
    * [reroute queue](console_commands.reroute_queue) — move messages from queues of one domain to queues of the other
    * [show inbound](console_commands.show_inbound) — show all inbound connections
    * [show outbound](console_commands.show_outbound) — show all outbound connections
    * [showqueue](console_commands.showqueue) — show queue information
    * [shutdown](console_commands.shutdown) — shutdown Momentum
    * [signing_stats](console_commands.signing_stats) — show DK/DKIM signing stats
    * [signing_stats reset](console_commands.signing_stats_reset) — reset signing stats
    * [sp_async](console_commands.sp_async) — Access the asynchronous I/O subsystem
    * [spool import](console_commands.spool_import) — import an alternative spool
    * [spool import_poll](console_commands.spool_import_poll) — check the status of a spool that is being imported
    * [spool_in](console_commands.spool_in) — read a message from the spool to the mail queue
    * [summary](console_commands.summary) — show global metrics
    * [summary reset](console_commands.summary_reset) — reset summary statistics
    * [sysinfo](console_commands.sysinfo) — show system information
    * [threads](console_commands.threads) — Display summary statistics for thread pools
    * [tls](console_commands.tls) — manage TLS cache used by Momentum
    * [trace smtp](console_commands.trace_smtp) — trace smtp transactions
    * [unlink stats](console_commands.unlink_stats) — show statistics of removing messages from the disk
    * [version](console_commands.version) — show version information of Momentum
    * [write config](console_commands.write_config) — display current running configuration
  * [74\. Executable Commands Reference](exec.cmds.ref)
    * [ad_summary](executable.ad_summary) — summarize the adaptive module actions
    * [create_ssl_cert](executable.create_ssl_cert) — create a self-signed SSL certificate
    * [credmgr](executable.credmgr) — manipulate credentials used with the securecreds module
    * [ec_adtool](executable.ec_adtool) — adjust adaptive parameters in a cluster configuration
    * [ec_console](executable.ec_console) — connect to Momentum to perform introspection and administration
    * [ec_ctl](executable.ec_ctl) — start, stop, or restart the Momentum Application Server
    * [ec_dkim_ctl](executable.ec_dkim_ctl) — manipulate the DK/DKIM database
    * [ec_dump_config](executable.ec_dump_config) — output the `ecelerity.conf` file as XML
    * [ec_lic](executable.ec_lic) — fetch a new license file from Message Systems
    * [ec_log_trace](executable.ec_log_trace) — parse Momentum log files
    * [ec_md5passwd](executable.ec_md5passwd) — changes the password for a system user's password
    * [ec_rotate](executable.ec_rotate) — rotate Momentum logfiles
    * [ec_sendmail](executable.ec_sendmail) — a sendmail compatibility interface
    * [ec_show](executable.ec_show) — show spool or message information
    * [eccfg](executable.eccfg) — Subversion repository management
    * [eccmgr](executable.eccmgr) — Momentum Cluster Manager
    * [eccmgr_ctl](executable.eccmgr_ctl) — start, stop, or restart the Momentum Cluster Manager
    * [ecconfigd](executable.ecconfigd) — Momentum Configuration Server
    * [ecconfigd_ctl](executable.ecconfigd_ctl) — start, stop or restart the Momentum Configuration Server
    * [ecelerity](executable.ecelerity) — Momentum Application Server
    * [jlog_change_endian](executable.jlog_change_endian) — change the endianness of a jlog
    * [jlog_sanity_check](executable.jlog_sanity_check) — validate that a jlog is free of errors
    * [jlogctl](executable.jlogctl) — analyze and maintain jlogs
    * [lu_pull](executable.lu_pull) — update the Live Updates database
    * [validate_config](executable.validate_config) — check the validity of the configuration files
* [XI. Appendix](p.appendix)
  * [A. Message Responses](message_responses)
    * [A.1\. Responses Sorted By Codes](message_responses#responses-by-code)
  * [B. MIB Files](snmp-mib)
    * [B.1\. 1.3.6.1.4.1.19552.1.2 – Per-domain Metrics](snmp-mib#snmp-mib-per-domain-metrics)
  * [B.2\. Per-group (binding) Metrics, 1.3.6.1.4.1.19552.1.3](snmp-mib.pergroup)
  * [B.3\. The `OMNITI-SNMP-MIB.txt` file](snmp-mib.omniti)
  * [C. SMTP Response Codes](smtp-response-codes)
  * [D. Key Binding Reference for ec_console](libedit)
    * [D.1\. Editor Commands](libedit#libedit.emacs.editor)
    * [D.2\. Extended Commands](libedit.extended)
  * [Glossary](glossary)
  * [E. Copyright Notices](copyrights)
    * [E.1\. Acknowledgements](copyrights#copyright.ack)
    * [E.2\. Disclaimers for Redistributed Third-Party Software](copyright.3rdparty-disclaimer)



[List of Figures](figure-toc)[List of Tables](table-toc)[List of Examples](example-toc)


|   |   |  [Next](preface) |
|   |   |  Preface |

