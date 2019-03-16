| [Prev](lua.summary_table)  | Part X. Reference |  [Next](config.options.summary) |

## Chapter 65. Modules Summary

All modules are listed alphabetically with a brief description. Singleton modules are also identified. The `Version` column indicates when the module was introduced into the system. Note: all modules listed as 4.0 modules were actually introduced in prior versions of Momentum. The `Auto` column indicates whether a module is loaded automatically as required. The `Type` column indicates the MTA type of a given option. Options of type `na` do not directly apply to either a sending or receiving MTA. The `Cluster` column indicates whether a module is cluster-specific. The `Valid` column indicates whether a module is a validation module.

<a name="table-all"></a>

**Table 65.1. Modules: all**

| Name | Version | Description | Auto | Cluster | Valid | See Also |
| --- | --- | --- | --- | --- | --- | --- |
| [Section 71.2, “ac_auth – Authentication Handler”](modules.ac_auth "71.2. ac_auth – Authentication Handler") | 4.2 | Enable a Lua module to hook into the authentication mechanism |   |   |   |   |
| [Section 71.3, “adaptive – Adaptive Delivery”](modules.adaptive "71.3. adaptive – Adaptive Delivery") (*singleton*) | 4.0 | Dynamically tune delivery options |   |   |   |   |
| [Section 71.4, “alerting – Send Alerting Emails”](modules.alerting "71.4. alerting – Send Alerting Emails") (*singleton*) | 4.0 | Enable Lua policy scripts and alerts |   |   |   | [Section 71.60, “scriptlet - Lua Policy Scripts”](modules.scriptlet "71.60. scriptlet - Lua Policy Scripts") |
| [Section 71.5, “alias – Alias Expansion”](modules.alias "71.5. alias – Alias Expansion") | 4.0 | Rewrite recipient addresses |   |   |  ✓ | [Section 71.29, “ds_core - Datasource Query Core”](modules.ds_core "71.29. ds_core - Datasource Query Core") |
| [Section 71.6, “antivirus – Antivirus”](modules.antivirus "71.6. antivirus – Antivirus") | 4.0 | The antivirus framework |  ✓ |   |  ✓ | [Section 71.17, “clamav – ClamAV”](modules.clamav "71.17. clamav – ClamAV"), [Section 71.23, “csapi – Symantec CSAPI Antivirus Support”](modules.csapi "71.23. csapi – Symantec CSAPI Antivirus Support") |
| [apn](https://support.messagesystems.com/docs/web-push/apns.modules) (*singleton*) | 4.0 | Use this module to configure the Apple Push Notification service |   |   |   |   |
| [apn_logger](https://support.messagesystems.com/docs/web-push/apns.modules.apn_logger) | 4.0 | Use this module to log Apple Push notifications |   |   |   |   |
| [Section 71.7, “as_logger – Audit Series Logger”](modules.as_logger "71.7. as_logger – Audit Series Logger") (*singleton*) | 4.0 | Replicate audit series to disk |   |  ✓ |   |   |
| [Section 71.8, “auth_ds – Datasource based SMTP Authentication”](modules.auth_ds "71.8. auth_ds – Datasource based SMTP Authentication") (*singleton*) | 4.0 | Use a data source to authenticate an SMTP session |  ✓ |   |   | [Section 71.29, “ds_core - Datasource Query Core”](modules.ds_core "71.29. ds_core - Datasource Query Core") |
| [Section 71.9, “auth_radius – RADIUS based SMTP Authentication”](modules.auth_radius "71.9. auth_radius – RADIUS based SMTP Authentication") (*singleton*) | 4.0 | Authenticate SMTP sessions via SMTP AUTH using RADIUS servers |   |   |   |   |
| [Section 71.10, “beik – Symantec Brightmail™ Engine Integration Kit”](modules.beik "71.10. beik – Symantec Brightmail™ Engine Integration Kit") (*singleton*) | 4.0 | This module provides an in-process version of the brightmail module |   |   |  ✓ | [Section 71.14, “brightmail – Symantec Brightmail™ Content Scanning Support”](modules.brightmail "71.14. brightmail – Symantec Brightmail™ Content Scanning Support") |
| [Section 71.11, “bind_address_secondary – Dual-stack IPv4/IPv6 Support”](modules.bind_address_secondary "71.11. bind_address_secondary – Dual-stack IPv4/IPv6 Support") | 4.2 | This module allows a binding to attach itself to an ipv6 address |   |   |   |   |
| [Section 71.12, “bounce_classifier_override – Override/Augment Bounce Classifications”](modules.bounce_classifier_override "71.12. bounce_classifier_override – Override/Augment Bounce Classifications") (*singleton*) | 4.0 | Override the built-in bounce classification |   |   |   |   |
| [Section 71.13, “bounce_logger – Momentum-Style Bounce Logging”](modules.bounce_logger "71.13. bounce_logger – Momentum-Style Bounce Logging") | 4.0 | Log bounced messages |   |   |   |   |
| [Section 71.14, “brightmail – Symantec Brightmail™ Content Scanning Support”](modules.brightmail "71.14. brightmail – Symantec Brightmail™ Content Scanning Support") | 4.0 | Check inbound mail against a Brightmail server |   |   |  ✓ |   |
| [bzip2io](modules.compress_spool "71.21. compress_spool – Dynamic Spool Compression") (*singleton*) | 4.0 | bzip compression algorithm |  ✓ |   |   | [Section 71.21, “compress_spool – Dynamic Spool Compression”](modules.compress_spool "71.21. compress_spool – Dynamic Spool Compression") |
| [Section 71.15, “chunk_logger Module”](modules.chunk_logger "71.15. chunk_logger Module") | 4.2 | Provide an interface for logging asynchronously from Lua, C, and C++ |   |   |   |   |
| [Section 71.16, “cidrdb – CIDRDB”](modules.cidrdb "71.16. cidrdb – CIDRDB") (*singleton*) | 4.0 | Expose scripting functions for checking IP addresses |  ✓ |   |  ✓ |   |
| [Section 71.17, “clamav – ClamAV”](modules.clamav "71.17. clamav – ClamAV") | 4.0 | Support for Clam AV |   |   |  ✓ | [Section 71.6, “antivirus – Antivirus”](modules.antivirus "71.6. antivirus – Antivirus") |
| [Section 71.18, “cloudmark – Cloudmark Authority® Content Scanning”](modules.cloudmark "71.18. cloudmark – Cloudmark Authority® Content Scanning") (*singleton*) | 4.0 | Support for the Cloudmark spam technology |   |   |  ✓ |   |
| [Section 71.19, “cluster – Cluster”](modules.cluster "71.19. cluster – Cluster") (*singleton*) | 4.0 | Cluster configuration module |   |  ✓ |   | [Chapter 16, *Cluster-specific Configuration*](cluster "Chapter 16. Cluster-specific Configuration")  |
| [Section 71.20, “commtouch_ctasd – Commtouch Spam Protection”](modules.commtouch "71.20. commtouch_ctasd – Commtouch Spam Protection") | 4.0 | Spam protection technology |   |   |  ✓ |   |
| [Section 71.21, “compress_spool – Dynamic Spool Compression”](modules.compress_spool "71.21. compress_spool – Dynamic Spool Compression") (*singleton*) | 4.0 | Compress large messages before writing them to disk |  ✓ |   |   |   |
| [Section 71.22, “conntrol – Fine-Grained Connection Control”](modules.conntrol "71.22. conntrol – Fine-Grained Connection Control") | 4.0 | Control how inbound connections are established |   |   |  ✓ |   |
| [Section 71.23, “csapi – Symantec CSAPI Antivirus Support”](modules.csapi "71.23. csapi – Symantec CSAPI Antivirus Support") | 4.0 | Integration for Symantec content scanners |   |   |  ✓ |   |
| [Section 71.24, “custom_bounce_logger – Custom Bounce Logging”](modules.custom_bounce_logger "71.24. custom_bounce_logger – Custom Bounce Logging") | 4.2 | Append a "User_String" to the end of each bounce record |  ✓ |   |   | [Section 71.13, “bounce_logger – Momentum-Style Bounce Logging”](modules.bounce_logger "71.13. bounce_logger – Momentum-Style Bounce Logging") |
| [Section 71.25, “custom_logger – User-defined Logging”](modules.custom_logger "71.25. custom_logger – User-defined Logging") | 4.0 | Create custom logs |   |   |   |   |
| [Section 71.26, “delay_dsn – Delay DSN Generation”](modules.delay_dsn "71.26. delay_dsn – Delay DSN Generation") | 4.0 | Configure and send delay DSNs |   |   |   |   |
| [dk_sign](modules.domainkeys "71.28. domainkeys – Yahoo! DomainKeys") | 4.0 | Attach domain keys signatures to outbound mail |   |   |  ✓ |   |
| [dk_validate](modules.domainkeys "71.28. domainkeys – Yahoo! DomainKeys") | 4.0 | Validate inbound mail checking domain keys signatures |   |   |  ✓ |   |
| [dkim_sign](modules.opendkim "71.50. opendkim – Open Source DKIM") | 4.0 | Attach DKIM signatures to outbound mail |   |   |  ✓ |   |
| [dkim_validate](modules.opendkim "71.50. opendkim – Open Source DKIM") | 4.0 | Validate inbound mail checking DKIM signatures |   |   |  ✓ |   |
| [Section 71.27, “dnsbuf – Dynamically Set the DNS UDP Buffer Size”](modules.dnsbuf "71.27. dnsbuf – Dynamically Set the DNS UDP Buffer Size") | 4.2 | Manipulate DNS buffer sizes on demand |   |   |   |   |
| [Section 71.29, “ds_core - Datasource Query Core”](modules.ds_core "71.29. ds_core - Datasource Query Core") (*singleton*) | 4.0 | Provide modular data access and caching for use by other modules |  ✓ |   |   |   |
| [Section 71.30, “EC_logger – Momentum-Style Logging”](modules.ec_logger "71.30. EC_logger – Momentum-Style Logging") | 4.0 | Log the status of messages |   |   |   |   |
| [Section 71.31, “eleven – Eleven eXpurgate Content Scanning”](modules.eleven "71.31. eleven – Eleven eXpurgate Content Scanning") (*singleton*) | 4.0 | This module implements the eleven spam filter and categorization service |   |   |  ✓ |   |
| [Section 71.34, “exim_logger – Exim Logging”](modules.exim_logger "71.34. exim_logger – Exim Logging") | 4.0 | Support for Exim style logs |   |   |   |   |
| [Section 71.35, “fbl - Feedback Loop”](modules.fbl "71.35. fbl - Feedback Loop") (*singleton*) | 4.0 | Manage feedback loop services |   |   |   |   |
| [Section 71.36, “fingerprint – Host Fingerprinting”](modules.host_fingerprint "71.36. fingerprint – Host Fingerprinting") | 4.0 | Perform passive OS fingerprinting |   |   |  ✓ |   |
| [gcm](https://support.messagesystems.com/docs/web-push/push.gcm.modules#push.modules.gcm) (*singleton*) | 4.0 | Use this module to configure Google Cloud messaging |   |   |   |   |
| [gcm_logger](https://support.messagesystems.com/docs/web-push/push.modules.gcm_logger) | 4.0 | Use this module to log Google Cloud messages |   |   |   |   |
| [gzipio](modules.compress_spool "71.21. compress_spool – Dynamic Spool Compression") (*singleton*) | 4.0 | gzip compression algorithm |  ✓ |   |   | [Section 71.21, “compress_spool – Dynamic Spool Compression”](modules.compress_spool "71.21. compress_spool – Dynamic Spool Compression") |
| [httpsrv](https://support.messagesystems.com/docs/web-rest-injector/rest.configuring) (*singleton*) | 4.0 | The HTTP server required for using the REST injection API |   |   |   |   |
| [Section 71.39, “icu – ICU”](modules.icu "71.39. icu – ICU") (*singleton*) | 4.0 | Unicode support |  ✓ |   |   |   |
| [Section 71.40, “ilf_logger – Incremental License Fee Logging”](modules.ilf_logger "71.40. ilf_logger – Incremental License Fee Logging") (*singleton*) | 4.0 | Use this module if you have usage-based licenses |   |   |   |   |
| [Section 71.41, “inbound_audit – Inbound traffic analytics”](modules.inbound_audit "71.41. inbound_audit – Inbound traffic analytics") (*singleton*) | 4.0 | Provide analytics on sending IPs |   |  ✓ |  ✓ | [Section 71.51, “outbound_audit – Outbound traffic analytics”](modules.outbound_audit "71.51. outbound_audit – Outbound traffic analytics") |
| [Section 71.42, “ipv6_lookup – Multi-address-family MX Records”](modules.ipv6_lookup "71.42. ipv6_lookup – Multi-address-family MX Records") | 4.2 | This module supports multi-address-family MX records, enabling A record lookups for IPv6 addresses |   |   |   |   |
| [Section 71.43, “jlog – jlog-Formatted Logging”](modules.jlog "71.43. jlog – jlog-Formatted Logging") (*singleton*) | 4.0 | Create jlog formatted logs |  ✓ |   |   |   |
| [Section 71.44, “Live Bounce Updates – Live Bounce Updates Service”](modules.live.bounce.updates "71.44. Live Bounce Updates – Live Bounce Updates Service") | 4.0 | Canonicalizes bounce messages into a number of categories |   |   |   |   |
| [Section 71.45, “mail_loop – Mail Loop Detection”](modules.mail_loop "71.45. mail_loop – Mail Loop Detection") | 4.0 | Automatic suppression of potential mail loops |   |   |  ✓ |   |
| [Section 71.46, “maildir – Maildir Delivery Support”](modules.maildir "71.46. maildir – Maildir Delivery Support") | 4.0 | Store messages in maildir format as specified by qmail |   |   |   |   |
| [mm7](https://support.messagesystems.com/docs/web-mobility/mobility.mm7.mms_bounce_logger) (*singleton*) | 4.0 | Enable MM7 |  ✓ |   |   |   |
| [mm7_serv](https://support.messagesystems.com/docs/web-mobility/mobility.mm7) (*singleton*) | 4.0 | Enable the MM7 Value Added Service Provider |   |   |   |   |
| [mms_bounce_logger](https://support.messagesystems.com/docs/web-mobility/mobility.mm7.mms_bounce_logger) | 4.0 | Enable MMS bounce logging |   |   |   |   |
| [mms_logger](https://support.messagesystems.com/docs/web-mobility/mobility.mm7.mms_logger) | 4.0 | Enable MMS logging |   |   |   |   |
| [msgc_client](modules.msgc "71.47. msgc – Message Systems Group Communication") (*singleton*) | 4.0 | The client component of MSGC |   |  ✓ |   |   |
| [msgc_server](modules.msgc "71.47. msgc – Message Systems Group Communication") (*singleton*) | 4.0 | The server component of MSGC |   |  ✓ |   |   |
| [Section 71.49, “mxip - IP Addresses In MX Records”](modules.mxip "71.49. mxip - IP Addresses In MX Records") | 4.2 | Enable Momentum to deliver to domains with a textual IP address |   |   |   |   |
| [Section 71.50, “opendkim – Open Source DKIM”](modules.opendkim "71.50. opendkim – Open Source DKIM") | 4.0 | Validate/sign mail using DKIM signatures |   |   |  ✓ |   |
| [Section 71.51, “outbound_audit – Outbound traffic analytics”](modules.outbound_audit "71.51. outbound_audit – Outbound traffic analytics") | 4.0 | Provides time-series analytics on the behavior of receiving domains |   |  ✓ |   |   |
| [Section 71.52, “outbound_smtp_auth”](modules.outbound_smtp_auth "71.52. outbound_smtp_auth") | 4.2 | Enables users to specify authentication parameters for a given set of messages |   |   |   |   |
| [Section 71.53, “persist_io – Persistent IO Wrapper”](modules.persistio "71.53. persist_io – Persistent IO Wrapper") (*singleton*) | 4.0 | Provides a non-volatile cache wrapper for any other IO wrapper |  ✓ |   |   |   |
| [Section 71.54, “pipe_io – Pipe IO Wrapper”](modules.pipeio "71.54. pipe_io – Pipe IO Wrapper") (*singleton*) | 4.0 | Provides ability to writing content via an arbitrary program |  ✓ |   |   |   |
| [Section 71.55, “pipe_transport – Module”](modules.pipe_transport "71.55. pipe_transport – Module") | 4.0 | Pipe messages to a local program |   |   |   |   |
| [Section 71.56, “postfix_logger – Postfix Logging”](modules.postfix_logger "71.56. postfix_logger – Postfix Logging") | 4.0 | Log in Postfix format |   |   |   |   |
| [Section 71.57, “reception_timing - Reception Timing Modules”](modules.reception_timing "71.57. reception_timing - Reception Timing Modules") | 4.2 | Track how long it takes to receive or reject messages over SMTP |   |   |  ✓ | [Section 71.15, “chunk_logger Module”](modules.chunk_logger "71.15. chunk_logger Module") |
| [Section 71.58, “response_transcode – Module”](modules.response_transcode "71.58. response_transcode – Module") (*singleton*) | 4.0 | Work around broken remote servers |  ✓ |   |   |   |
| [restinjector](https://support.messagesystems.com/docs/web-rest-injector/rest.configuring) (*singleton*) | 4.0 | Activate the REST injection API |   |   |   |   |
| [Section 71.59, “sched – The Schedule Module”](modules.sched "71.59. sched – The Schedule Module") (*singleton*) | 4.0 | Schedule tasks to be run from the console |   |   |   | [Section 71.29, “ds_core - Datasource Query Core”](modules.ds_core "71.29. ds_core - Datasource Query Core") |
| [Section 71.60, “scriptlet - Lua Policy Scripts”](modules.scriptlet "71.60. scriptlet - Lua Policy Scripts") | 4.0 | Enable scriptlets for enforcing policy |   |   |   | [Section 71.4, “alerting – Send Alerting Emails”](modules.alerting "71.4. alerting – Send Alerting Emails") |
| [Section 71.61, “securecreds – Password Encryption/Credential Retrieval”](modules.securecreds "71.61. securecreds – Password Encryption/Credential Retrieval") (*singleton*) | 4.0 | Use encrypted credentials throughout Momentum |   |   |   | [credmgr](executable.credmgr "credmgr") |
| [Section 71.62, “seedlist – Seedlist Integration”](modules.seedlist "71.62. seedlist – Seedlist Integration") | 4.0 | Deliverability monitoring service |   |   |  ✓ |   |
| [senderid](modules.spf "71.68. spf Modules – spf_macros, spf_v1, and senderid (SPF v2)") | 4.0 | Use Sender Policy Framework (spf_v2) |   |   |  ✓ | [Section 71.60, “scriptlet - Lua Policy Scripts”](modules.scriptlet "71.60. scriptlet - Lua Policy Scripts") |
| [Section 71.63, “sendmail_logger – Sendmail Logging”](modules.sendmail_logger "71.63. sendmail_logger – Sendmail Logging") | 4.0 | Create Sendmail formatted logs |   |   |   |   |
| [smpp](https://support.messagesystems.com/docs/web-mobility/momentum.mobility#modules.mobility.smpp_logger) (*singleton*) | 4.0 | Enable SMPP |   |   |   |   |
| [smpp_bounce_logger](https://support.messagesystems.com/docs/web-mobility/modules.mobility.smpp_bounce_logger) | 4.0 | Enable SMPP bounce logging |   |   |   |   |
| [smpp_logger](https://support.messagesystems.com/docs/web-mobility/mobility.configuration.smpp) | 4.0 | Log SMPP events |   |   |   |   |
| [Section 71.64, “smtp_auth_proxy - SMTP Authentication Proxy”](modules.smtp_auth_proxy "71.64. smtp_auth_proxy - SMTP Authentication Proxy") | 4.2 | Allow edge SMTP servers to forward SMTP AUTH requests to SMTP servers |  ✓ |   |   |   |
| [Section 71.65, “smtp_cbv – SMTP Callback Verification”](modules.smtp_cbv "71.65. smtp_cbv – SMTP Callback Verification") | 4.0 | Perform SMTP Callback Verification |   |   |  ✓ |   |
| [Section 71.66, “smtp_rcptto_proxy - SMTP Recipient-To Proxy”](modules.smtp_rcptto_proxy "71.66. smtp_rcptto_proxy - SMTP Recipient-To Proxy") | 4.2 | Validate a Lua recipient by doing an SMTP call-forward |   |   |   |   |
| [spf_macros](modules.spf "71.68. spf Modules – spf_macros, spf_v1, and senderid (SPF v2)") (*singleton*) | 4.0 | Generic macro service for SPF |  ✓ |   |   |   |
| [spf_v1](modules.spf "71.68. spf Modules – spf_macros, spf_v1, and senderid (SPF v2)") | 4.0 | Use Sender Policy Framework |   |   |   | [Section 71.60, “scriptlet - Lua Policy Scripts”](modules.scriptlet "71.60. scriptlet - Lua Policy Scripts") |
| [Section 71.69, “static-routes - Static Routes”](modules.static_routes "71.69. static-routes - Static Routes") | 4.2 | Route traffic to a given server by IP address and port |  ✓ |   |   |   |
| [Section 71.70, “suppress_spool – Deferred Message Spooling”](modules.suppress_spool "71.70. suppress_spool – Deferred Message Spooling") | 4.0 | Defer spool attempts |   |   |   |   |
| [Section 71.71, “syslog_io – The syslog_io Module”](modules.syslog_io "71.71. syslog_io – The syslog_io Module") (*singleton*) | 4.0 | Use the syslog wrapper to write entries to the log |  ✓ |   |   |   |
| [Section 71.72, “tls_macros – TLS-related Logging”](tls_macros "71.72. tls_macros – TLS-related Logging") | 4.0 | Provide several macros supporting custom logging of TLS-related data |   |   |   |   |
| [Section 71.73, “url_ripper – URL Extraction”](modules.url_ripper "71.73. url_ripper – URL Extraction") | 4.0 | A toolkit for DNS-based content correlation |   |   |  ✓ |   |

| [Prev](lua.summary_table)  | [Up](p.reference) |  [Next](config.options.summary) |
| Chapter 64. Lua Functions Summary  | [Table of Contents](index) |  Chapter 66. Configuration Options Summary |

