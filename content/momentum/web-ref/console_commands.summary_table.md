|     |     |     |
| --- | --- | --- |
| [Prev](console_commands)  | Chapter 12. Momentum System Console Commands Reference |  [Next](console.commands.non-module.php) |

## 12.1. System Console Command Summary

This table lists all system console commands alphabetically giving a brief description. Click the command name to see detailed information. A check mark appears in the `Module` column for commands that are module-specific. For module-specific commands to work, you must have the module loaded.

<a name="All-console-table"></a>

**Table 12.1. All console commands**

| Command/Description | Version | Module | Class |
| --- | --- | --- | --- |
| [\pager](console_commands.pager "\pager") – Page output of long console commands in the console | 3.0 |   | misc |
| [active](console_commands.active "active") – Show domains with active queue size bigger than threshold | 3.0 |   | queue size |
| [adaptive list](modules.adaptive#modules.adaptive.console "14.2.9. adaptive Management Using System Console Commands") – Display the value of shaping parameters | 3.0 | ✓ | module |
| [adaptive override](modules.adaptive#modules.adaptive.console "14.2.9. adaptive Management Using System Console Commands") – Override a suspension | 3.0 | ✓ | module |
| [adaptive reset](modules.adaptive#modules.adaptive.console "14.2.9. adaptive Management Using System Console Commands") – Clear the values of the shaping parameters | 3.0 | ✓ | module |
| [adaptive rules](modules.adaptive#modules.adaptive.console "14.2.9. adaptive Management Using System Console Commands") – Display the adaptive rules that are in effect for the specified domain/binding pair | 3.0 | ✓ | module |
| [adaptive suspensions](modules.adaptive#modules.adaptive.console "14.2.9. adaptive Management Using System Console Commands") – Summarize the suspensions that are currently in effect | 3.0 | ✓ | module |
| [adaptive warmup](modules.adaptive#modules.adaptive.console "14.2.9. adaptive Management Using System Console Commands") – Display the age of bindings from the perspective of the IP Warmup component | 3.0 | ✓ | module |
| [authz id](console_commands.authz_id "authz id") – Display the id of the current user | 3.0 |   | misc |
| [authz roles list](console_commands.authz_roles_list "authz roles list") – Display the currently defined roles | 3.0 |   | misc |
| [beik:instance_name reload](modules.beik#modules.beik.console "14.10.4. beik Management Using Console Commands") – Reload the beik module | 3.0.26 | ✓ | module |
| [binding active](console_commands.binding_active "binding active") – Show domains with active queue size bigger than threshold on a specified binding | 3.0 |   | queue size |
| [binding delayed](console_commands.binding_delayed "binding delayed") – Show domains with delayed queue size bigger than threshold on a specified binding | 3.0 |   | queue size |
| [binding fail domain quiet](console_commands.binding_fail_domain_quiet "binding fail domain quiet") – Fail messages for a domain on a binding without generating bounces | 3.0 |   | queue admin |
| [binding fail domain](console_commands.binding_fail_domain "binding fail domain") – Fail messages for a domain on a binding with a bounce message | 3.0 |   | queue admin |
| [binding flush domain](console_commands.binding_flush_domain "binding flush domain") – Perform delivery attempt on delayed queue of a domain on a binding | 3.0 |   | queue admin |
| [binding summary](console_commands.binding_summary "binding summary") – Show binding statistics | 3.0 |   | stats |
| [bounce_classifier:instance_name reload](modules.bounce_classifier#modules.bounce_classifier.console "14.11.2. bounce_classifier Management Using Console Commands") – Reload the bounce classification overrides | 3.0 | ✓ | module |
| [bounce_classifier_override reload](modules.bounce_classifier_override#modules.bounce_classifier_override.console "14.12.2. bounce_classifier Management Using Console Commands") – Reload the bounce classification overrides | 3.1 | ✓ | module |
| [bounce_classifier_override test](modules.bounce_classifier_override#modules.bounce_classifier_override.console "14.12.2. bounce_classifier Management Using Console Commands") – Test the classification of an SMTP reply | 3.5.7 | ✓ | module |
| [bounce_logger:instance_name reopen logs](modules.bounce_logger#modules.bounce_logger.console3 "14.13.3. bounce_logger Management Using System Console Commands") – Reopen the log files | 3.0 | ✓ | module |
| [cache list](console_commands.cache_list "cache list") – List all caches along with their associated attributes | 3.0.26 |   | stats |
| [cache stat](console_commands.cache_stat "cache stat") – Show detailed cache statistics for the specified cache | 3.0.26 |   | stats |
| [cache stats](console_commands.cache_stats "cache stats") – Show cache statistics | 3.0 |   | stats |
| [cidrdb list](modules.cidrdb#modules.cidrdb.console "14.16.2. cidrdb Management Using Console Commands") – List configured CIDR databases | 3.0 | ✓ | module |
| [cidrdb reload](modules.cidrdb#modules.cidrdb.console "14.16.2. cidrdb Management Using Console Commands") – Reload a cidrdb list | 3.0 | ✓ | module |
| [cloudmark:instance_name version](modules.cloudmark#modules.cloudmark.console "14.18.4. cloudmark Management Using Console Commands") – Output the Cloudmark version | 3.0 | ✓ | module |
| [cluster abort](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Abort the specified job | 3.0 | ✓ | module |
| [cluster arp show](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Resolve the MAC addresses of the cluster | 3.0 | ✓ | module |
| [cluster duravip announce view](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Announce a view update using the current local view | 3.0 | ✓ | module |
| [cluster duravip debug](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Turn DuraVIP™ debugging on or off | 3.0 | ✓ | module |
| [cluster duravip move](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Move a binding from one node to another | 3.0 | ✓ | module |
| [cluster duravip show tables](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Display the DuraVIP™ state tables in XML format | 3.0 | ✓ | module |
| [cluster duravip show](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Show the current state of DuraVIP™ bindings | 3.0 | ✓ | module |
| [cluster help](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Display the cluster console commands | 3.0 | ✓ | module |
| [cluster info](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Display the current operating status and parameters | 3.0 | ✓ | module |
| [cluster membership](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Display the current cluster nodes | 3.0 | ✓ | module |
| [cluster nodeaddr](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Show the cluster protocol service address | 3.0 | ✓ | module |
| [cluster nodename](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Show the name of the local node | 3.0 | ✓ | module |
| [cluster reset](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Reset the node cluster membership | 3.0 | ✓ | module |
| [cluster shared list](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – This command displays the currently managed objects | 3.0 | ✓ | module |
| [cluster shared show](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Display shared objects | 3.0 | ✓ | module |
| [cluster show logs](cluster.config.replication#cluster.logging.console "7.7.2. Cluster Management Using Console Commands") – Show the size, name and location of the cluster logs | 3.0 | ✓ | module |
| [commtouch_ctasd:instance_name pending](modules.commtouch#modules.commtouch.console "14.19.3. commtouch_ctasd Management Using Console Commands") – Output the number of pending jobs | 3.0 | ✓ | module |
| [config begin from scratch](console_commands.config "config") – Begin a transaction from scratch | 3.0 |   | config |
| [config begin](console_commands.config "config") – Begin a transaction | 3.0 |   | config |
| [config commit](console_commands.config "config") – Commit a transaction | 3.0 |   | config |
| [config eval](console_commands.config "config") – Determine configuration value | 3.0 |   | config |
| [config get](console_commands.config "config") – Get configuration setting | 3.0 |   | config |
| [config locate](console_commands.config "config") – Locate a specific scope | 3.0 |   | config |
| [config reload](console_commands.config "config") – Reload configuration options from file | 3.0 |   | config |
| [config replay](console_commands.config "config") – Show changes in a transaction | 3.0 |   | config |
| [config rollback](console_commands.config "config") – Rollback a transaction | 3.0 |   | config |
| [config set](console_commands.config "config") – Set configuration option | 3.0 |   | config |
| [config show](console_commands.config "config") – Show a specific scope | 3.0 |   | config |
| [config showrecurse](console_commands.config "config") – Show a specific scope and its child scopes | 3.0 |   | config |
| [config unset](console_commands.config "config") – Unset configuration option | 3.0 |   | config |
| [config writeback](console_commands.config "config") – Write configuration changes to ecelerity.conf | 3.0 |   | config |
| [count](console_commands.count "count") – Count open connections | 3.0 |   | connections |
| [counter add](console_commands.counter "counter") – Add the specified amount to a counter | 3.1 |   | policy |
| [counter help](console_commands.counter "counter") – Display help for the counter command | 3.1 |   | policy |
| [counter increment](console_commands.counter "counter") – Increment a counter | 3.1 |   | policy |
| [counter list](console_commands.counter "counter") – List all counters counter | 3.1 |   | policy |
| [counter reset](console_commands.counter "counter") – Reset a counter to zero | 3.1 |   | policy |
| [counter unlink](console_commands.counter "counter") – Unlink a counter | 3.1 |   | policy |
| [delay_dsn:instance_name show pending events](modules.delay_dsn#modules.delay_dsn.console "14.25.2. delay_dsn Management Using Console Commands") – List all pending events | 3.0 | ✓ | module |
| [delayed](console_commands.delayed "delayed") – Show domains with delayed queue size bigger than threshold | 3.0 |   | queue admin |
| [dig](console_commands.dig "dig") – Submit a domain for dns MX query | 3.0 |   | dns |
| [dk_sign:instance_name flush keycache](modules.domainkeys#modules.domainkeys.console "14.29.6. domainkeys Management Using Console Commands") – Flush all entries from the keycache | 3.0 | ✓ | module |
| [dk_sign:instance_name stats](modules.domainkeys#modules.domainkeys.console "14.29.6. domainkeys Management Using Console Commands") – Display statistics relating to domain key signing | 3.0 | ✓ | module |
| [dkim_sign:instance_name flush keycache](modules.dkim#modules.dkim.console "14.27.4. dkim Management Using Console Commands") – Flush all entries from the keycache | 3.0 | ✓ | module |
| [dns_cache lookup](console_commands.dns_cache "dns_cache") – Look up a query in the DNS cache | 3.0 |   | dns |
| [dns_cache refcnts](console_commands.dns_cache "dns_cache") – Show the references in the DNS cache | 3.0 |   | dns |
| [dns_cache stats](console_commands.dns_cache "dns_cache") – Show summary stats for the DNS cache | 3.0 |   | dns |
| [dns_cache submit](console_commands.dns_cache "dns_cache") – Submit a DNS query | 3.0 |   | dns |
| [dnsbuf interval](modules.dnsbuf#modules.dnsbuf.console "14.28.2. dnsbuf Management Using Console Commands") – Change how often setsockopt() operations are performed | 3.6.5 | ✓ | module |
| [dnsbuf rcvbuf_size](modules.dnsbuf#modules.dnsbuf.console "14.28.2. dnsbuf Management Using Console Commands") – Change the rcvbuf_size value on the fly | 3.6.5 | ✓ | module |
| [dnsbuf sndbuf_size](modules.dnsbuf#modules.dnsbuf.console "14.28.2. dnsbuf Management Using Console Commands") – Change the sndbuf_size value on the fly | 3.6.5 | ✓ | module |
| [dnsbuf verify](modules.dnsbuf#modules.dnsbuf.console "14.28.2. dnsbuf Management Using Console Commands") – Query active sockets for current buffer sizes and report the results | 3.6.5 |   | module |
| [domain all](console_commands.domain_all "domain all") – Show statistics for all domains | 3.0 |   | stats |
| [domain](console_commands.domain "domain") – Show domain statistics | 3.0 |   | stats |
| [ds_core flush cache_name](modules.ds_core#modules.ds_core.console "14.30.2. ds_core Management Using Console Commands") – Flush a specific cache | 3.0 | ✓ | module |
| [ds_core stats](modules.ds_core#modules.ds_core.console "14.30.2. ds_core Management Using Console Commands") – Print stats for each cache | 3.0 | ✓ | module |
| [ds_ldap flush connection cache](modules.ds_core#modules.ds_ldap.console "14.30.3.5. ds_ldap Management Using Console Commands") – Remove all entries from the connection cache | 3.0 | ✓ | module |
| [ds_ldap show connection cache stats](modules.ds_core#modules.ds_ldap.console "14.30.3.5. ds_ldap Management Using Console Commands") – Output statistics relating to the connection cache | 3.0 | ✓ | module |
| [ec_logger:instance_name help](modules.ec_logger#modules.ec_logger.console "14.31.3. ec_logger Management Using Console Commands") – Display the available commands | 3.0 | ✓ | module |
| [ec_logger:instance_name reopen logs](modules.ec_logger#modules.ec_logger.console "14.31.3. ec_logger Management Using Console Commands") – Close and reopen the logs | 3.0 | ✓ | module |
| [fail domain quiet](console_commands.fail_domain_quiet "fail domain quiet") – Fail messages for a domain without generating bounces | 3.0 |   | misc |
| [fail domain](console_commands.fail_domain "fail domain") – Fail messages for a domain with a bounce message | 3.0 |   | misc |
| [fingerprint cache summary](console_commands.fingerprint_cache_summary "fingerprint cache summary") – Display the current cache size | 3.0.26 | ✓ | policy |
| [fingerprint rejection summary](console_commands.fingerprint_rejection_summary "fingerprint rejection summary") – Display details related to the current inbound connection | 3.0.26 | ✓ | policy |
| [flush domain](console_commands.flush_domain "flush domain") – Perform delivery attempt on delayed queue of a domain | 3.0 |   | queue admin |
| [help](console_commands.help "help") – Show help information for console commands | 3.0 |   | misc |
| [inbound_audit:instance_name add](modules.inbound_audit#modules.inbound_audit.console "14.41.4. inbound_audit Management Using Console Commands") – Add a value to a CIDR in a named series | 3.0 | ✓ | module |
| [inbound_audit:instance_name delete_ip](modules.inbound_audit#modules.inbound_audit.console "14.41.4. inbound_audit Management Using Console Commands") – Delete an IP from a defined named series | 3.0 | ✓ | module |
| [inbound_audit:instance_name help](modules.inbound_audit#modules.inbound_audit.console "14.41.4. inbound_audit Management Using Console Commands") – Display the available commands | 3.0 | ✓ | module |
| [inbound_audit:instance_name ip](modules.inbound_audit#modules.inbound_audit.console "14.41.4. inbound_audit Management Using Console Commands") – Count a CIDR in a named series | 3.0 | ✓ | module |
| [inbound_audit:instance_name show all](modules.inbound_audit#modules.inbound_audit.console "14.41.4. inbound_audit Management Using Console Commands") – Display verbose statistics for all domains as a CSV list | 3.0 | ✓ | module |
| [inbound_audit:instance_name subtract](modules.inbound_audit#modules.inbound_audit.console "14.41.4. inbound_audit Management Using Console Commands") – Subtract a value from a CIDR in a named series | 3.0 | ✓ | module |
| [mailq](console_commands.mailq "mailq") – Show the status of the mail queues | 3.0 |   | stats |
| [memory](console_commands.memory "memory") – Report detailed memory usage | 3.0 |   | stats |
| [message details](console_commands.message_details "message details") – Show detailed message information | 3.0 |   | message |
| [message fail quiet](console_commands.message_fail_quiet "message fail quiet") – Fail a message and do not create a non-delivery receipt (NDR) | 3.0 |   | message |
| [message fail](console_commands.message_fail "message fail") – Fail a message | 3.0 |   | message |
| [message retry](console_commands.message_retry "message retry") – Perform an immediate delivery attempt on a message | 3.0 |   | message |
| [module hooks](console_commands.module "module") – Manage loaded module hooks | 3.0 |   | module |
| [module list](console_commands.module "module") – Show loaded modules | 3.0 |   | module |
| [outbound_audit:instance_name clear all](modules.outbound_audit#modules.outbound_audit.console "14.50.3. outbound_audit: System Console Commands") – Zero-out all statistics | 3.0 | ✓ | module |
| [outbound_audit:instance_name clear domain](modules.outbound_audit#modules.outbound_audit.console "14.50.3. outbound_audit: System Console Commands") – Zero-out a domain's statistics | 3.0 | ✓ | module |
| [outbound_audit:instance_name domain_list](modules.outbound_audit#modules.outbound_audit.console "14.50.3. outbound_audit: System Console Commands") – Runtime addition/deletion of a domain in the monitoring list | 3.0 | ✓ | module |
| [outbound_audit:instance_name show all](modules.outbound_audit#modules.outbound_audit.console "14.50.3. outbound_audit: System Console Commands") – Dump all collected time-series data for all collected domains | 3.0 | ✓ | module |
| [outbound_audit:instance_name show domain](modules.outbound_audit#modules.outbound_audit.console "14.50.3. outbound_audit: System Console Commands") – Dump all collected time-series data for the specified domain | 3.0 | ✓ | module |
| [outbound_audit:instance_name show domains](modules.outbound_audit#modules.outbound_audit.console "14.50.3. outbound_audit: System Console Commands") – List the names of all domains which have collected data | 3.0 | ✓ | module |
| [outbound_audit:instance_name show global](modules.outbound_audit#modules.outbound_audit.console "14.50.3. outbound_audit: System Console Commands") – Show the global (aggregated) time-series data | 3.0 | ✓ | module |
| [paniclog](console_commands.paniclog "paniclog") – Show last several entries written to paniclog | 3.0 |   | logs |
| [pid](console_commands.pid "pid") – Show process id of Momentum | 3.0 |   | misc |
| [rebind](console_commands.rebind "rebind") – Rebind the messages in a binding or domain | 3.0 |   | queue admin |
| [refresh domain](console_commands.refresh_domain "refresh domain") – Refresh the DNS information for a domain | 3.0 |   | dns |
| [reopen logs](console_commands.reopen_logs "reopen logs") – Close and open log files | 3.0 |   | logs |
| [reroute queue](console_commands.reroute_queue "reroute queue") – Move messages from queues of one domain to queues of the other | 3.0 |   | queue admin |
| [sched at](modules.sched#modules.sched.console "14.59.1. sched Management Using Console Commands") – Create a recurrent command that repeats at the specified interval | 3.0 | ✓ | module |
| [sched delete](modules.sched#modules.sched.console "14.59.1. sched Management Using Console Commands") – Delete a scheduled job | 3.0 | ✓ | module |
| [sched every](modules.sched#modules.sched.console "14.59.1. sched Management Using Console Commands") – Create a recurrent command that repeats at the specified interval | 3.0 | ✓ | module |
| [sched in](modules.sched#modules.sched.console "14.59.1. sched Management Using Console Commands") – Run a command at the specified number of seconds from the current time | 3.0 | ✓ | module |
| [sched list](modules.sched#modules.sched.console "14.59.1. sched Management Using Console Commands") – List any scheduled tasks | 3.0 | ✓ | module |
| [show inbound](console_commands.show_inbound "show inbound") – Show all inbound connections | 3.0 |   | connections |
| [show outbound](console_commands.show_outbound "show outbound") – Show all outbound connections | 3.0 |   | connections |
| [showqueue](console_commands.showqueue "showqueue") – Show queue information | 3.0 |   | queue admin |
| [shutdown](console_commands.shutdown "shutdown") – Shutdown Momentum | 3.0 |   | misc |
| [signing_stats reset](console_commands.signing_stats_reset "signing_stats reset") – Reset signing stats | 3.0 | ✓ | stats |
| [signing_stats](console_commands.signing_stats "signing_stats") – Show DK/DKIM signing stats | 3.0 | ✓ | stats |
| [sp_async](console_commands.sp_async "sp_async") – Access the asynchronous I/O subsystem | 3.0 |   | misc |
| [spool import_poll](console_commands.spool_import_poll "spool import_poll") – Check the status of a spool that is being imported | 3.0 |   | misc |
| [spool import](console_commands.spool_import "spool import") – Import an alternative spool | 3.0 |   | resource |
| [spool_in](console_commands.spool_in "spool_in") – Read a message from the spool to the mail queue | 3.0 |   | message |
| [summary reset](console_commands.summary_reset "summary reset") – Reset summary statistics | 3.0 |   | stats |
| [summary](console_commands.summary "summary") – Show global metrics | 3.0 |   | stats |
| [sysinfo](console_commands.sysinfo "sysinfo") – Show system information | 3.0 |   | misc |
| [threads cpu queue](console_commands.threads "threads") – Display summary statistics for the CPU thread pools | 3.0 |   | stats |
| [threads io queue](console_commands.threads "threads") – Display summary statistics for the IO thread pools | 3.0 |   | stats |
| [threads stats](console_commands.threads "threads") – Display summary statistics for thread pools | 3.0 |   | stats |
| [tls flush cache](console_commands.tls "tls") – Flush the TLS cache | 3.0 |   | tls |
| [tls rekey](console_commands.tls "tls") – Remove the temporary RSA key | 3.0 |   | tls |
| [tls show cache](console_commands.tls "tls") – Show the TLS cache | 3.0 |   | tls |
| [trace smtp add](console_commands.trace_smtp "trace smtp") – Add an SMTP trace | 3.0 |   | misc |
| [trace smtp list](console_commands.trace_smtp "trace smtp") – List smtp traces | 3.0 |   | misc |
| [trace smtp remove](console_commands.trace_smtp "trace smtp") – Remove an SMTP trace | 3.0 |   | misc |
| [unlink stats](console_commands.unlink_stats "unlink stats") – Show statistics of removing messages from the disk | 3.0 |   | stats |
| [version](console_commands.version "version") – Show version information of Momentum | 3.0 |   | misc |
| [write config](console_commands.write_config "write config") – Display current running configuration | 3.0 |   | config |

|     |     |     |
| --- | --- | --- |
| [Prev](console_commands)  | [Up](console_commands.php) |  [Next](console.commands.non-module.php) |
| Chapter 12. Momentum System Console Commands Reference  | [Table of Contents](index) |  12.2. System Console Commands |
