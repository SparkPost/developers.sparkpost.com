|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.xclient)  | Part X. Reference |  [Next](console_commands.active) |
## Chapter 73. Non-Module-Specific Console Commands
**Table of Contents**

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

This section documents all the non-module-specific console commands. Module-specific console commands are documented with their module. See [Chapter 71, *Modules Reference*](modules "Chapter 71. Modules Reference") .
Preceding a command with `xml` will output the results in XML format.

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.xclient)  | [Up](p.reference) |  [Next](console_commands.active) |
| xclient  | [Table of Contents](index) |  active |
