|     |     |     |
| --- | --- | --- |
| [Prev](config.options.summary)  | Part X. Reference |  [Next](exe) |

## Chapter 67. Console Commands Summary

This table lists all console commands alphabetically giving a brief description. Click the command name to see detailed information. A module name appears in the `Module` column for commands that are module-specific. For module-specific commands to work, you must have the module loaded.

<a name="All-console-table"></a>

**Table 67.1. All console commands**

| Command/Description | Version | Module | Class |
| --- | --- | --- | --- |
| [\pager](console_commands.pager "\pager") – Page output of long console commands in the console | 4.0 |   | misc |
| [active](console_commands.active "active") – Show domains with active queue size bigger than threshold | 4.0 |   | queue size |
| [adaptive list](modules.adaptive#modules.adaptive.console "71.3.6. Console Commands") – Display the value of shaping parameters | 4.0 | adaptive | module |
| [adaptive override](modules.adaptive#modules.adaptive.console "71.3.6. Console Commands") – Override a suspension | 4.0 | adaptive | module |
| [adaptive reset](modules.adaptive#modules.adaptive.console "71.3.6. Console Commands") – Clear the values of the shaping parameters | 4.0 | adaptive | module |
| [adaptive rules](modules.adaptive#modules.adaptive.console "71.3.6. Console Commands") – Display the adaptive rules that are in effect for the specified domain/binding pair | 4.0 | adaptive | module |
| [adaptive suspensions](modules.adaptive#modules.adaptive.console "71.3.6. Console Commands") – Summarize the suspensions that are currently in effect | 4.0 | adaptive | module |
| [adaptive warmup](modules.adaptive#modules.adaptive.console "71.3.6. Console Commands") – Display the age of bindings from the perspective of the IP Warmup component | 4.0 | adaptive | module |
| [authz id](console_commands.authz_id "authz id") – Display the id of the current user | 4.0 |   | misc |
| [authz roles list](console_commands.authz_roles_list "authz roles list") – Display the currently defined roles | 4.0 |   | misc |
| [beik reload](modules.beik#modules.beik.console "71.10.4. Console Commands") – Reload the beik module | 4.0 | beik | module |
| [binding active](console_commands.binding_active "binding active") – Show domains with active queue size bigger than threshold on a specified binding | 4.0 |   | queue size |
| [binding delayed](console_commands.binding_delayed "binding delayed") – Show domains with delayed queue size bigger than threshold on a specified binding | 4.0 |   | queue size |
| [binding fail domain quiet](console_commands.binding_fail_domain_quiet "binding fail domain quiet") – Fail messages for a domain on a binding without generating bounces | 4.0 |   | queue admin |
| [binding fail domain](console_commands.binding_fail_domain "binding fail domain") – Fail messages for a domain on a binding with a bounce message | 4.0 |   | queue admin |
| [binding flush domain](console_commands.binding_flush_domain "binding flush domain") – Perform delivery attempt on delayed queue of a domain on a binding | 4.0 |   | queue admin |
| [binding summary](console_commands.binding_summary "binding summary") – Show binding statistics | 4.0 |   | stats |
| [bounce_classifier_override reload](modules.bounce_classifier_override#modules.bounce_classifier_override.console "71.12.2. Console Commands") – Reload the bounce classification overrides | 4.0 | bounce_classifier_override | module |
| [bounce_classifier_override test](modules.bounce_classifier_override#modules.bounce_classifier_override.console "71.12.2. Console Commands") – Test the classification of an SMTP reply | 4.0 | bounce_classifier_override | module |
| [bounce_logger:instance_name reopen logs](modules.bounce_logger#modules.bounce_logger.console "71.13.4. Console Commands") – Reopen the log files | 4.0 | bounce_logger | module |
| [cache list](console_commands.cache_list "cache list") – List all caches along with their associated attributes | 4.0 |   | stats |
| [cache stat](console_commands.cache_stat "cache stat") – Show detailed cache statistics for the specified cache | 4.0 |   | stats |
| [cache stats](console_commands.cache_stats "cache stats") – Show cache statistics | 4.0 |   | stats |
| [cidrdb list](modules.cidrdb#modules.cidrdb.console "71.16.4. Console Commands") – List configured CIDR databases | 4.0 | cidrdb | module |
| [cidrdb reload](modules.cidrdb#modules.cidrdb.console "71.16.4. Console Commands") – Reload a cidrdb list | 4.0 | cidrdb | module |
| [cloudmark version](modules.cloudmark#modules.cloudmark.console "71.18.5. Console Commands") – Output the Cloudmark version | 4.0 | cloudmark | module |
| [cluster abort](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Abort the specified job | 4.0 | cluster | module |
| [cluster arp show](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Resolve the MAC addresses of the cluster | 4.0 | cluster | module |
| [cluster duravip announce view](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Announce a view update using the current local view | 4.0 | cluster | module |
| [cluster duravip debug](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Turn DuraVIP™ debugging on or off | 4.0 | cluster | module |
| [cluster duravip move](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Move a binding from one node to another | 4.0 | cluster | module |
| [cluster duravip show](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Show the current state of DuraVIP™ bindings | 4.0 | cluster | module |
| [cluster duravip show tables](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Display the DuraVIP™ state tables in XML format | 4.0 | cluster | module |
| [cluster help](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Display the cluster console commands | 4.0 | cluster | module |
| [cluster info](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Display the current operating status and parameters | 4.0 | cluster | module |
| [cluster membership](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Display the current cluster nodes | 4.0 | cluster | module |
| [cluster nodeaddr](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Show the cluster protocol service address | 4.0 | cluster | module |
| [cluster nodename](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Show the name of the local node | 4.0 | cluster | module |
| [cluster reset](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Reset the node cluster membership | 4.0 | cluster | module |
| [cluster shared list](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – This command displays the currently managed objects | 4.0 | cluster | module |
| [cluster shared show](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Display shared objects | 4.0 | cluster | module |
| [cluster show logs](modules.cluster#modules.cluster.console "71.19.4. Cluster Module-specific Console Commands") – Show the size, name and location of the cluster logs | 4.0 | cluster | module |
| [commtouch_ctasd:instance_name pending](modules.commtouch#modules.commtouch.console "71.20.4. Console Commands") – Output the number of pending jobs | 4.0 | commtouch_ctasd | module |
| [config begin from scratch](console_commands.config "config") – Begin a transaction from scratch | 4.0 |   | config |
| [config begin](console_commands.config "config") – Begin a transaction | 4.0 |   | config |
| [config commit](console_commands.config "config") – Commit a transaction | 4.0 |   | config |
| [config eval](console_commands.config "config") – Determine configuration value | 4.0 |   | config |
| [config get](console_commands.config "config") – Get configuration setting | 4.0 |   | config |
| [config locate](console_commands.config "config") – Locate a specific scope | 4.0 |   | config |
| [config reload](console_commands.config "config") – Reload configuration options from file | 4.0 |   | config |
| [config replay](console_commands.config "config") – Show changes in a transaction | 4.0 |   | config |
| [config rollback](console_commands.config "config") – Rollback a transaction | 4.0 |   | config |
| [config set](console_commands.config "config") – Set configuration option | 4.0 |   | config |
| [config show](console_commands.config "config") – Show a specific scope | 4.0 |   | config |
| [config showrecurse](console_commands.config "config") – Show a specific scope and its child scopes | 4.0 |   | config |
| [config unset](console_commands.config "config") – Unset configuration option | 4.0 |   | config |
| [config writeback](console_commands.config "config") – Write configuration changes to ecelerity.conf | 4.0 |   | config |
| [count](console_commands.count "count") – Count open connections | 4.0 |   | connections |
| [counter add](console_commands.counter "counter") – Add the specified amount to a counter | 4.0 |   | policy |
| [counter help](console_commands.counter "counter") – Display help for the counter command | 4.0 |   | policy |
| [counter increment](console_commands.counter "counter") – Increment a counter | 4.0 |   | policy |
| [counter list](console_commands.counter "counter") – List all counters counter | 4.0 |   | policy |
| [counter reset](console_commands.counter "counter") – Reset a counter to zero | 4.0 |   | policy |
| [counter unlink](console_commands.counter "counter") – Unlink a counter | 4.0 |   | policy |
| [delay_dsn:instance_name show pending events](modules.delay_dsn#modules.delay_dsn.console "71.26.2. Console Commands") – List all pending events | 4.0 | delay_dsn | module |
| [delayed](console_commands.delayed "delayed") – Show domains with delayed queue size bigger than threshold | 4.0 |   | queue admin |
| [dig](console_commands.dig "dig") – Submit a domain for dns MX query | 4.0 |   | dns |
| [dk_sign:instance_name flush keycache](modules.domainkeys#modules.domainkeys.console "71.28.5. Console Commands") – Flush all entries from the keycache | 4.0 | domainkeys | module |
| [dk_sign:instance_name stats](modules.domainkeys#modules.domainkeys.console "71.28.5. Console Commands") – Display statistics relating to domain key signing | 4.0 | domainkeys | module |
| [dns_cache lookup](console_commands.dns_cache "dns_cache") – Look up a query in the DNS cache | 4.0 |   | dns |
| [dns_cache refcnts](console_commands.dns_cache "dns_cache") – Show the references in the DNS cache | 4.0 |   | dns |
| [dns_cache stats](console_commands.dns_cache "dns_cache") – Show summary stats for the DNS cache | 4.0 |   | dns |
| [dns_cache submit](console_commands.dns_cache "dns_cache") – Submit a DNS query | 4.0 |   | dns |
| [dnsbuf interval](modules.dnsbuf#modules.dnsbuf.console "71.27.2. dnsbuf Management Using Console Commands") – Change how often setsockopt() operations are performed | 4.2 | dnsbuf | module |
| [dnsbuf rcvbuf_size](modules.dnsbuf#modules.dnsbuf.console "71.27.2. dnsbuf Management Using Console Commands") – Change the rcvbuf_size value on the fly | 4.2 | dnsbuf | module |
| [dnsbuf sndbuf_size](modules.dnsbuf#modules.dnsbuf.console "71.27.2. dnsbuf Management Using Console Commands") – Change the sndbuf_size value on the fly | 4.2 | dnsbuf | module |
| [dnsbuf verify](modules.dnsbuf#modules.dnsbuf.console "71.27.2. dnsbuf Management Using Console Commands") – Query active sockets for current buffer sizes and report the results | 4.2 | dnsbuf | module |
| [domain all](console_commands.domain_all "domain all") – Show statistics for all domains | 4.0 |   | stats |
| [domain](console_commands.domain "domain") – Show domain statistics | 4.0 |   | stats |
| [ds_core flush cache_name](modules.ds_core#modules.ds_core.console "71.29.2.2. ds_core Management Using Console Commands") – Flush a specific cache | 4.0 | ds_core | module |
| [ds_core stats](modules.ds_core#modules.ds_core.console "71.29.2.2. ds_core Management Using Console Commands") – Print stats for each cache | 4.0 | ds_core | module |
| [ds_ldap flush connection cache](modules.ds_core#modules.ds_ldap.console "71.29.2.1.3.2. Console Commands") – Remove all entries from the connection cache | 4.0 | ds_ldap | module |
| [ds_ldap show connection cache stats](modules.ds_core#modules.ds_ldap.console "71.29.2.1.3.2. Console Commands") – Output statistics relating to the connection cache | 4.0 | ds_ldap | module |
| [ec_logger:instance_name help](modules.ec_logger#modules.ec_logger.console "71.30.4. Console Commands") – Display the available commands | 4.0 | ec_logger | module |
| [ec_logger:instance_name reopen logs](modules.ec_logger#modules.ec_logger.console "71.30.4. Console Commands") – Close and reopen the logs | 4.0 | ec_logger | module |
| [fail domain quiet](console_commands.fail_domain_quiet "fail domain quiet") – Fail messages for a domain without generating bounces | 4.0 |   | misc |
| [fail domain](console_commands.fail_domain "fail domain") – Fail messages for a domain with a bounce message | 4.0 |   | misc |
| [fingerprint cache summary](console_commands.fingerprint_cache_summary "fingerprint cache summary") – Display the current cache size | 4.0 | fingerprint | policy |
| [fingerprint rejection summary](console_commands.fingerprint_rejection_summary "fingerprint rejection summary") – Display details related to the current inbound connection | 4.0 | fingerprint | policy |
| [flush domain](console_commands.flush_domain "flush domain") – Perform delivery attempt on delayed queue of a domain | 4.0 |   | queue admin |
| [help](console_commands.help "help") – Show help information for console commands | 4.0 |   | misc |
| [inbound_audit add](modules.inbound_audit#modules.inbound_audit.console "71.41.3. Console Commands") – Add a value to a CIDR in a named series | 4.0 | inbound_audit | module |
| [inbound_audit count_cidr](modules.inbound_audit#modules.inbound_audit.console "71.41.3. Console Commands") – Count a CIDR in a named series | 4.0 | inbound_audit | module |
| [inbound_audit delete_ip](modules.inbound_audit#modules.inbound_audit.console "71.41.3. Console Commands") – Delete an IP from a defined named series | 4.0 | inbound_audit | module |
| [inbound_audit help](modules.inbound_audit#modules.inbound_audit.console "71.41.3. Console Commands") – Display the available commands | 4.0 | inbound_audit | module |
| [inbound_audit load](modules.inbound_audit#modules.inbound_audit.console "71.41.3. Console Commands") – Load a series from a file | 4.0 | inbound_audit | module |
| [inbound_audit show all](modules.inbound_audit#modules.inbound_audit.console "71.41.3. Console Commands") – Display verbose statistics for all domains as a CSV list | 4.0 | inbound_audit | module |
| [inbound_audit show ip](modules.inbound_audit#modules.inbound_audit.console "71.41.3. Console Commands") --> – Dump all collected time-series data for the specified IP/netblock | 4.0 | inbound_audit | module |
| [inbound_audit subtract](modules.inbound_audit#modules.inbound_audit.console "71.41.3. Console Commands") – Subtract a value from a CIDR in a named series | 4.0 | inbound_audit | module |
| [mailq](console_commands.mailq "mailq") – Show the status of the mail queues | 4.0 |   | stats |
| [memory](console_commands.memory "memory") – Report detailed memory usage | 4.0 |   | stats |
| [message details](console_commands.message_details "message details") – Show detailed message information | 4.0 |   | message |
| [message fail quiet](console_commands.message_fail_quiet "message fail quiet") – Fail a message and do not create a non-delivery receipt (NDR) | 4.0 |   | message |
| [message fail](console_commands.message_fail "message fail") – Fail a message | 4.0 |   | message |
| [message retry](console_commands.message_retry "message retry") – Perform an immediate delivery attempt on a message | 4.0 |   | message |
| [module hooks](console_commands.module "module") – Manage loaded module hooks | 4.0 |   | module |
| [module list](console_commands.module "module") – Show loaded modules | 4.0 |   | module |
| [outbound_audit:instance_name clear all](modules.outbound_audit#modules.outbound_audit.console "71.51.2. Console Commands") – Zero-out all statistics | 4.0 | outbound_audit | module |
| [outbound_audit:instance_name clear domain](modules.outbound_audit#modules.outbound_audit.console "71.51.2. Console Commands") – Zero-out a domain's statistics | 4.0 | outbound_audit | module |
| [outbound_audit:instance_name domain_list](modules.outbound_audit#modules.outbound_audit.console "71.51.2. Console Commands") – Runtime addition/deletion of a domain in the monitoring list | 4.0 | outbound_audit | module |
| [outbound_audit:instance_name show all](modules.outbound_audit#modules.outbound_audit.console "71.51.2. Console Commands") – Dump all collected time-series data for all collected domains | 4.0 | outbound_audit | module |
| [outbound_audit:instance_name show domain](modules.outbound_audit#modules.outbound_audit.console "71.51.2. Console Commands") – Dump all collected time-series data for the specified domain | 4.0 | outbound_audit | module |
| [outbound_audit:instance_name show domains](modules.outbound_audit#modules.outbound_audit.console "71.51.2. Console Commands") – List the names of all domains which have collected data | 4.0 | outbound_audit | module |
| [outbound_audit:instance_name show global](modules.outbound_audit#modules.outbound_audit.console "71.51.2. Console Commands") – Show the global (aggregated) time-series data | 4.0 | outbound_audit | module |
| [paniclog](console_commands.paniclog "paniclog") – Show last several entries written to paniclog | 4.0 |   | logs |
| [pid](console_commands.pid "pid") – Show process id of Momentum | 4.0 |   | misc |
| [rebind](console_commands.rebind "rebind") – Rebind the messages in a binding or domain | 4.0 |   | queue admin |
| [refresh domain](console_commands.refresh_domain "refresh domain") – Refresh the DNS information for a domain | 4.0 |   | dns |
| [reopen logs](console_commands.reopen_logs "reopen logs") – Close and open log files | 4.0 |   | logs |
| [reroute queue](console_commands.reroute_queue "reroute queue") – Move messages from queues of one domain to queues of the other | 4.0 |   | queue admin |
| [sched at](modules.sched#modules.sched.console "71.59.1.1. sched Management Using Console Commands") – Create a recurrent command that repeats at the specified interval | 4.0 | sched | module |
| [sched delete](modules.sched#modules.sched.console "71.59.1.1. sched Management Using Console Commands") – Delete a scheduled job | 4.0 | sched | module |
| [sched every](modules.sched#modules.sched.console "71.59.1.1. sched Management Using Console Commands") – Create a recurrent command that repeats at the specified interval | 4.0 | sched | module |
| [sched in](modules.sched#modules.sched.console "71.59.1.1. sched Management Using Console Commands") – Run a command at the specified number of seconds from the current time | 4.0 | sched | module |
| [sched list](modules.sched#modules.sched.console "71.59.1.1. sched Management Using Console Commands") – List any scheduled tasks | 4.0 | sched | module |
| [show inbound](console_commands.show_inbound "show inbound") – Show all inbound connections | 4.0 |   | connections |
| [show outbound](console_commands.show_outbound "show outbound") – Show all outbound connections | 4.0 |   | connections |
| [showqueue](console_commands.showqueue "showqueue") – Show queue information | 4.0 |   | queue admin |
| [shutdown](console_commands.shutdown "shutdown") – Shutdown Momentum | 4.0 |   | misc |
| [signing_stats reset](console_commands.signing_stats_reset "signing_stats reset") – Reset signing stats | 4.0 | domainkeys or opendkim | stats |
| [signing_stats](console_commands.signing_stats "signing_stats") – Show DK/DKIM signing stats | 4.0 | domainkeys or opendkim | stats |
| [sp_async](console_commands.sp_async "sp_async") – Access the asynchronous I/O subsystem | 4.0 |   | misc |
| [spool import_poll](console_commands.spool_import_poll "spool import_poll") – Check the status of a spool that is being imported | 4.0 |   | misc |
| [spool import](console_commands.spool_import "spool import") – Import an alternative spool | 4.0 |   | resource |
| [spool_in](console_commands.spool_in "spool_in") – Read a message from the spool to the mail queue | 4.0 |   | message |
| [summary reset](console_commands.summary_reset "summary reset") – Reset summary statistics | 4.0 |   | stats |
| [summary](console_commands.summary "summary") – Show global metrics | 4.0 |   | stats |
| [sysinfo](console_commands.sysinfo "sysinfo") – Show system information | 4.0 |   | misc |
| [threads cpu queue](console_commands.threads "threads") – Display summary statistics for the CPU thread pools | 4.0 |   | stats |
| [threads io queue](console_commands.threads "threads") – Display summary statistics for the IO thread pools | 4.0 |   | stats |
| [threads stats](console_commands.threads "threads") – Display summary statistics for thread pools | 4.0 |   | stats |
| [tls flush cache](console_commands.tls "tls") – Flush the TLS cache | 4.0 |   | tls |
| [tls rekey](console_commands.tls "tls") – Remove the temporary RSA key | 4.0 |   | tls |
| [tls show cache](console_commands.tls "tls") – Show the TLS cache | 4.0 |   | tls |
| [trace smtp add](console_commands.trace_smtp "trace smtp") – Add an SMTP trace | 4.0 |   | misc |
| [trace smtp list](console_commands.trace_smtp "trace smtp") – List smtp traces | 4.0 |   | misc |
| [trace smtp remove](console_commands.trace_smtp "trace smtp") – Remove an SMTP trace | 4.0 |   | misc |
| [unlink stats](console_commands.unlink_stats "unlink stats") – Show statistics of removing messages from the disk | 4.0 |   | stats |
| [version](console_commands.version "version") – Show version information of Momentum | 4.0 |   | misc |
| [write config](console_commands.write_config "write config") – Display current running configuration | 4.0 |   | config |

|     |     |     |
| --- | --- | --- |
| [Prev](config.options.summary)  | [Up](p.reference) |  [Next](exe) |
| Chapter 66. Configuration Options Summary  | [Table of Contents](index) |  Chapter 68. Executable Command Summary |

