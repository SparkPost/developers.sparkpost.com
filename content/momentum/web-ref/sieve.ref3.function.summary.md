| [Prev](sieve.ref3)  | Chapter 16. Sieve++ Function Reference |  [Next](sieve.ref.files) |

## 16.1. Sieve Function Summary

This table lists all Sieve functions alphabetically giving a brief description. Click the function name to see detailed information.

<a name="table-sieve-functions"></a>

**Table 16.1. Sieve functions**

| Name | Description | Class | Type | Phases |
| --- | --- | --- | --- | --- |
| **[add_recipient](sieve.ref.add_recipient "add_recipient")**  | Add a new envelope recipient to the mail | misc | receiving | data, mailfrom, rcptto, spool |
| **[address](sieve.ref.address "address")**  | Return the address from a header | misc | both | data, each_rcpt, mailfrom, rcptto, set_binding |
| **[advertize_esmtp_capability](sieve.ref.advertize_esmtp_capability "advertize_esmtp_capability")**  | Add a string to the EHLO response | misc | receiving | connect, ehlo |
| **[audit_connections_on_listener](sieve.ref.audit_connections_on_listener "audit_connections_on_listener")**  | Return the number of connections currently established from a CIDR block | cidr | receiving | any |
| **[audit_connections_on_service](sieve.ref.audit_connections_on_service "audit_connections_on_service")**  | Return the number of connections currently established from a CIDR block | cidr | receiving | any |
| **[audit_series](sieve.ref.audit_series "audit_series")**  | Return the audit series count associated with an IP address or CIDR block over a window range | cidr | receiving | any |
| **[audit_series_add](sieve.ref.audit_series_add "audit_series_add")**  | Add to a named audit series | cidr | receiving | any |
| **[audit_service](sieve.ref.audit_service "audit_service")**  | Return how many connections currently are established from a CIDR block to an arbitrary service | cidr | receiving | any |
| **[beik_scan](modules.beik#modules.beik.runtime "14.10.2. Runtime Usage")**  | Analyze a message using BEIK | av | receiving | data |
| **[brightmail](sieve.ref.brightmail "brightmail")**  | Scan using Brightmail | av | receiving | data |
| **[cidrdb](sieve.ref.cidrdb "cidrdb")**  | Check the CIDR information pathway specified by the first argument | cidr | receiving | any |
| **[antivirus](sieve.ref.antivirus "antivirus")**  | Scan with Clamav | av | receiving | data |
| **[cloudmark_score](sieve.ref.cloudmark_score "cloudmark_score")**  | Analyze a message with Cloudmark Authority | av | both | data |
| **[commtouch_scan](sieve.ref.commtouch_scan "commtouch_scan")**  | Scan using the commtouch module | av | receiving | data |
| **[antivirus](sieve.ref.antivirus "antivirus")**  | Scan with the csapi antivirus engine | av | receiving | data |
| **[cidrdb](sieve.ref.cidrdb "cidrdb")**  | Create the pathway for CIDR information | cidr | receiving | each_rcpt |
| **[disable_esmtp_capability](sieve.ref.disable_esmtp_capability "disable_esmtp_capability")**  | Remove a string from the EHLO response | misc | receiving | connect, ehlo |
| **[discard](sieve.ref.discard "discard")**  | Silently throw away a message | misc | receiving | data, each_rcpt, rcptto, spool |
| **[disclaimer_add](sieve.ref.disclaimer_add "disclaimer_add")**  | Add a disclaimer to an email | misc | receiving | data, each_rcpt, spool |
| **[ds_execute](sieve.ref.ds_execute "ds_execute")**  | Execute a query on a datasource | ds | na | any |
| **[ds_fetch](sieve.ref.ds_fetch "ds_fetch")**  | Query and fetch a row from a datasource | ds | na | any |
| **[ds_fetch_flat](sieve.ref.ds_fetch_flat "ds_fetch_flat")**  | Query and fetch all rows from a datasource | ds | na | any |
| **[ds_fetch_hash](sieve.ref.ds_fetch_hash "ds_fetch_hash")**  | Query and fetch a row from a datasource | ds | na | any |
| **[ec_action](sieve.ref.ec_action "ec_action")**  | Set SMTP status code | misc | receiving | any |
| **[ec_add](sieve.ref.ec_add "ec_add")**  | Add two numbers | math | na | any |
| **[ec_base64_decode](sieve.ref.ec_base64_decode "ec_base64_decode")**  | Decode base64 encoded text | misc | na | any |
| **[ec_base64_encode](sieve.ref.ec_base64_encode "ec_base64_encode")**  | Encode text as base64 | misc | na | any |
| **[ec_bounce_classify](sieve.ref.ec_bounce_classify "ec_bounce_classify")**  | Perform bounce classification on the message | bounce | receiving | data, each_rcpt, set_binding, spool |
| **[ec_ceil](sieve.ref.ec_ceil "ec_ceil")**  | Round up to the nearest integer | math | na | any |
| **[ec_cluster_cache_get](sieve.ref.ec_cluster_cache_get "ec_cluster_cache_get")**  | Retrieve a value from a cluster-wide replicated cache | cidr | both | accept, connect, data, ehlo, mailfrom, rcptto |
| **[ec_cluster_cache_set](sieve.ref.ec_cluster_cache_set "ec_cluster_cache_set")**  | Set a value in a cluster-wide replicated cache | cidr | both | accept, connect, data, ehlo, mailfrom, rcptto |
| **[ec_config](sieve.ref.ec_config "ec_config")**  | Get Momentum configuration from Sieve | misc | na | any |
| **[discard](sieve.ref.discard "discard")**  | Silently throw away a message (alias for discard) | misc | receiving | data, each_rcpt, rcptto, spool |
| **[ec_disconnect](sieve.ref.ec_disconnect "ec_disconnect")**  | Set SMTP status and close the SMTP connection | misc | receiving | any |
| **[ec_div](sieve.ref.ec_div "ec_div")**  | Divide two numbers | math | na | any |
| **[ec_dk_responsible_domain](sieve.ref.ec_dk_responsible_domain "ec_dk_responsible_domain")**  | Return the domain responsible for the current message | dk | sending | data, each_rcpt, set_binding, spool |
| **[ec_dk_sign](sieve.ref.ec_dk_sign "ec_dk_sign")**  | Sign a message with the DomainKeys protocol | dk | sending | core_final_validation |
| **[ec_dkim_domains](sieve.ref.ec_dkim_domains "ec_dkim_domains")**  | Return a list of valid signing domains | dkim | sending | data, each_rcpt, set_binding, spool |
| **[ec_dkim_responsible_domain](sieve.ref.ec_dkim_responsible_domain "ec_dkim_responsible_domain")**  | Return the domain responsible for the current message | dkim | sending | data, each_rcpt, set_binding, spool |
| **[ec_dkim_sign](sieve.ref.ec_dkim_sign "ec_dkim_sign")**  | Sign a message with the DKIM protocol | dkim | sending | core_final_validation |
| **[ec_dns_lookup](sieve.ref.ec_dns_lookup "ec_dns_lookup")**  | Perform a DNS record lookup | misc | both | any |
| **[ec_error_mode](sieve.ref.ec_error_mode "ec_error_mode")**  | Set the error mode to "fail" or "continue" | misc | na | any |
| **[split](sieve.ref.split "split")**  | Explode a string into a stringlist, a synonym for split | string | na | any |
| **[ec_floor](sieve.ref.ec_floor "ec_floor")**  | Round down to the nearest integer | math | na | any |
| **[ec_forward](sieve.ref.ec_forward "ec_forward")**  | Forward a message | misc | both | data, each_rcpt, set_binding, spool |
| **[ec_gauge_cache](sieve.ref.ec_gauge_cache "ec_gauge_cache")**  | Create the given key in a given cache and decrement it | misc | na | any |
| **[ec_gauge_cache](sieve.ref.ec_gauge_cache "ec_gauge_cache")**  | Return the value of the specified key | misc | na | any |
| **[ec_gauge_cache](sieve.ref.ec_gauge_cache "ec_gauge_cache")**  | Create the given key in a given cache and increment it | misc | na | any |
| **[ec_gauge_cache](sieve.ref.ec_gauge_cache "ec_gauge_cache")**  | Create a cache with the given max number of elements | misc | na | any |
| **[ec_get_message_code](sieve.ref.ec_get_message_code "ec_get_message_code")**  | Return the current SMTP status code for a message | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_creation_time](sieve.ref.ec_get_message_creation_time "ec_get_message_creation_time")**  | Return the creation_time of the current message | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_id](sieve.ref.ec_get_message_id "ec_get_message_id")**  | Return the message's unique ID | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_mailfrom](sieve.ref.ec_get_message_mailfrom "ec_get_message_mailfrom")**  | Return the mailfrom of the current message | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_num_retries](sieve.ref.ec_get_message_num_retries "ec_get_message_num_retries")**  | Return the num_retries of the current message | misc | sending | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_protocol](sieve.ref.ec_get_message_protocol "ec_get_message_protocol")**  | Return the protocol of the current message | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_rcptto](sieve.ref.ec_get_message_rcptto "ec_get_message_rcptto")**  | Return the rcptto of the current message | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_received_from](sieve.ref.ec_get_message_received_from "ec_get_message_received_from")**  | Return the IP address that the message was received from | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_received_from_port](sieve.ref.ec_get_message_received_from_port "ec_get_message_received_from_port")**  | Return the port that the message was received from | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_received_via](sieve.ref.ec_get_message_received_via "ec_get_message_received_via")**  | Return the IP address that the message was received via | misc | receiving | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_received_via_port](sieve.ref.ec_get_message_received_via_port "ec_get_message_received_via_port")**  | Return the local port that the message was received on | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_size](sieve.ref.ec_get_message_size "ec_get_message_size")**  | Return the size of the current message in bytes | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_spool_name](sieve.ref.ec_get_message_spool_name "ec_get_message_spool_name")**  | Return the filename of the message spool | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_header_add](sieve.ref.ec_header_add "ec_header_add")**  | Prepend a header to the current message | misc | both | data, each_rcpt, spool |
| **[ec_header_delete](sieve.ref.ec_header_delete "ec_header_delete")**  | Remove a header from the current message | misc | both | data, each_rcpt, set_binding, spool |
| **[ec_header_get](sieve.ref.ec_header_get "ec_header_get")**  | Obtain the values for a particular header | misc | both | data, each_rcpt, set_binding, spool |
| **[ec_header_postfix](sieve.ref.ec_header_postfix "ec_header_postfix")**  | Append to a header of the current message | misc | both | data, each_rcpt, spool |
| **[ec_header_prefix](sieve.ref.ec_header_prefix "ec_header_prefix")**  | Prepend to a header of the current message | misc | both | data, each_rcpt, spool |
| **[ec_host_fingerprint](sieve.ref.ec_host_fingerprint "ec_host_fingerprint")**  | Return genre and detail of the passive host fingerprinting operation | misc | receiving | any |
| **[ec_inc_counter](sieve.ref.ec_inc_counter "ec_inc_counter")**  | Increment a Sieve counter | misc | na | any |
| **[ec_include](sieve.ref.ec_include "ec_include")**  | Include and run a Sieve script | meta | na | any |
| **[ec_interfaces](sieve.ref.ec_interfaces "ec_interfaces")**  | Obtain a list of network interfaces | resource | na | any |
| **[ec_ip_connections](sieve.ref.ec_ip_connections "ec_ip_connections")**  | Audit how many connections an IP address has made | audit | receiving | any |
| **[ec_ip_connections_cluster](sieve.ref.ec_ip_connections_cluster "ec_ip_connections_cluster")**  | Audit how many connections an IP address has made cluster-wide | audit | receiving | any |
| **[ec_ip_receptions](sieve.ref.ec_ip_receptions "ec_ip_receptions")**  | Audit how many receivings an IP address has made | audit | receiving | any |
| **[ec_ip_receptions_cluster](sieve.ref.ec_ip_receptions_cluster "ec_ip_receptions_cluster")**  | Audit how many receivings an IP address has made cluster-wide | audit | receiving | any |
| **[ec_ip_rejections](sieve.ref.ec_ip_rejections "ec_ip_rejections")**  | Audit how many rejections an IP address has made | audit | receiving | any |
| **[ec_ip_rejections_cluster](sieve.ref.ec_ip_rejections_cluster "ec_ip_rejections_cluster")**  | Audit how many rejections an IP address has made cluster-wide | audit | receiving | any |
| **[keep](sieve.ref.keep "keep")**  | Keep the current message, a synonym for keep | misc | receiving | any |
| **[ec_log](sieve.ref.ec_log "ec_log")**  | Log to the paniclog | misc | na | any |
| **[ec_log_file](sieve.ref.ec_log_file "ec_log_file")**  | Log to a file/io wrapper | log | na | each_rcpt, set_binding, spool |
| **[ec_maildir](sieve.ref.ec_maildir "ec_maildir")**  | Write the current message into a maildir mailbox | misc | receiving | each_rcpt |
| **[ec_mem_usage](sieve.ref.ec_mem_usage "ec_mem_usage")**  | Return the amount of memory used by Momentum | resource | na | any |
| **[ec_mime_boundary_create](sieve.ref.ec_mime_boundary_create "ec_mime_boundary_create")**  | Return a string to be used as a boundary when creating a MIME message | string | sending | any |
| **[ec_mime_parts](sieve.ref.ec_mime_parts "ec_mime_parts")**  | Test against metadata for each MIME part in a message | misc | both | data, each_rcpt, set_binding, spool |
| **[ec_mod](sieve.ref.ec_mod "ec_mod")**  | Calculate the modulus of two numbers | math | na | any |
| **[ec_mul](sieve.ref.ec_mul "ec_mul")**  | Perform multiplication of two numbers | math | na | any |
| **[ec_nearbyint](sieve.ref.ec_nearbyint "ec_nearbyint")**  | Round to the nearest integer based on rounding direction | math | na | any |
| **[ec_pcre_match](sieve.ref.ec_pcre_match "ec_pcre_match")**  | Perform a regular expression match | pcre | na | any |
| **[ec_rand](sieve.ref.ec_rand "ec_rand")**  | Generate a random number no larger than max or a random string from a list | math | na | any |
| **[redirect](sieve.ref.redirect "redirect")**  | Change the envelope recipient, a synonym for redirect | misc | both | data, each_rcpt, rcptto, spool |
| **[reject](sieve.ref.reject "reject")**  | Reject the message, returning an MDN to the sender, a synonym for reject | misc | receiving | any |
| **[ec_rewrite_mailfrom](sieve.ref.ec_rewrite_mailfrom "ec_rewrite_mailfrom")**  | Change the envelope sender | misc | both | data, each_rcpt, rcptto, spool |
| **[ec_rfc2047_encode_addresses](sieve.ref.ec_rfc2047_encode_addresses "ec_rfc2047_encode_addresses")**  | Create an RFC2047-compliant address | rfc | sending | data, each_rcpt, spool |
| **[ec_rfc2047_encode_header](sieve.ref.ec_rfc2047_encode_header "ec_rfc2047_encode_header")**  | Encode a string for use in a RFC2047-compliant header | rfc | sending | any |
| **[ec_rfc3464_delivery_status](sieve.ref.ec_rfc3464_delivery_status "ec_rfc3464_delivery_status")**  | Return a string containing fields for a RFC3464 DSN | rfc | sending | data, each_rcpt, set_binding, spool |
| **[ec_round](sieve.ref.ec_round "ec_round")**  | Round away from zero | math | na | any |
| **[ec_set_binding](sieve.ref.ec_set_binding "ec_set_binding")**  | Assign a message to a MultiVIP© binding | virtual | both | set_binding |
| **[ec_set_binding](sieve.ref.ec_set_binding "ec_set_binding")**  | Assign a message to a MultiVIP© binding group | virtual | both | set_binding |
| **[ec_set_routing_gateway](sieve.ref.ec_set_routing_gateway "ec_set_routing_gateway")**  | Dynamically change the gateway based on recipient | misc | sending | each_rcpt |
| **[ec_shared_throttle](sieve.ref.ec_shared_throttle "ec_shared_throttle")**  | Check to see if the specified throttle currently exceeds its quota | shaping | both | any |
| **[ec_shared_throttle](sieve.ref.ec_shared_throttle "ec_shared_throttle")**  | Create a shared throttle | shaping | both | any |
| **[ec_shared_throttle](sieve.ref.ec_shared_throttle "ec_shared_throttle")**  | Indicate to the specified throttle that it has received a message to be counted | shaping | both | any |
| **[ec_shared_throttle](sieve.ref.ec_shared_throttle "ec_shared_throttle")**  | Increment the named throttle, and tarpit for a length of time | shaping | both | any |
| **[ec_spool_space](sieve.ref.ec_spool_space "ec_spool_space")**  | Return information about the free space on the spool partition | resource | na | any |
| **[ec_sub](sieve.ref.ec_sub "ec_sub")**  | Perform subtraction of two numbers | math | na | any |
| **[ec_tarpit](sieve.ref.ec_tarpit "ec_tarpit")**  | Impose a time penalty | shaping | receiving | any |
| **[ec_test](sieve.ref.ec_test "ec_test")**  | Function for using comparators | misc | na | any |
| **[ec_thread_pool_get_queue_size](sieve.ref.ec_thread_pool_get_queue_size "ec_thread_pool_get_queue_size")**  | Get the number of jobs queued against a job class | resource | both | any |
| **[ec_throttle](sieve.ref.ec_throttle "ec_throttle")**  | Indicate to the specified throttle that it should remove a message from being counted | shaping | both | any |
| **[ec_throttle](sieve.ref.ec_throttle "ec_throttle")**  | Create a throttle of the specified name | shaping | both | any |
| **[ec_throttle](sieve.ref.ec_throttle "ec_throttle")**  | Indicate to the specified throttle that it should remove a message from being counted | shaping | both | any |
| **[ec_throttle](sieve.ref.ec_throttle "ec_throttle")**  | Indicate to the specified throttle that it has received a message to be counted | shaping | both | any |
| **[ec_throttle](sieve.ref.ec_throttle "ec_throttle")**  | Wait for the specified length of time | shaping | both | any |
| **[ec_tolower](sieve.ref.ec_tolower "ec_tolower")**  | Change all characters to lower case | string | na | any |
| **[ec_trace_context](sieve.ref.ec_trace_context "ec_trace_context")**  | Add X-Trace-Context header to the current message | misc | both | data, each_rcpt, spool |
| **[ec_trunc](sieve.ref.ec_trunc "ec_trunc")**  | Round toward zero | math | na | any |
| **[ec_url_ripper](sieve.ref.ec_url_ripper "ec_url_ripper")**  | Extract domains and urls for lookup in DNSBL | misc | receiving | data |
| **[ec_valid_binding](sieve.ref.ec_valid_binding "ec_valid_binding")**  | Check whether a named MultiVIP© binding exists | virtual | both | any |
| **[ec_valid_binding](sieve.ref.ec_valid_binding "ec_valid_binding")**  | Check whether a named MultiVIP© binding group exists | virtual | both | any |
| **[ec_valid_mime](sieve.ref.ec_valid_mime "ec_valid_mime")**  | Determine if the message is valid MIME | misc | both | data, each_rcpt, set_binding, spool |
| **[eleven_scan](sieve.ref.eleven_scan "eleven_scan")**  | Scan with eleven | av | receiving | data |
| **[envelope](sieve.ref.envelope "envelope")**  | Return the envelope sender or recipient | misc | both | any |
| **[antivirus](sieve.ref.antivirus "antivirus")**  | Scan with F-Secure | av | receiving | data |
| **[generate_mail_raw](sieve.ref.generate_mail_raw "generate_mail_raw")**  | Generate and send out a message | misc | sending | any |
| **[hash_create](sieve.ref.hash_create "hash_create")**  | Create a hash | hash | na | any |
| **[hash_dump](sieve.ref.hash_dump "hash_dump")**  | Dump the contents of a hash to the panic log | hash | na | any |
| **[hash_get](sieve.ref.hash_get "hash_get")**  | Get the value associated with the specified key | hash | na | any |
| **[hash_keys](sieve.ref.hash_keys "hash_keys")**  | Return all the keys of a hash as a string list | hash | na | any |
| **[hash_set](sieve.ref.hash_set "hash_set")**  | Set an element in a hash | hash | na | any |
| **[hash_values](sieve.ref.hash_values "hash_values")**  | Return all the string values of a hash as a string list | hash | na | any |
| **[is_true](sieve.ref.is_true "is_true")**  | Provides a simple logical test on the value of a variable | misc | na | any |
| **[join](sieve.ref.join "join")**  | Join stringlist elements into a single string | string | na | any |
| **[keep](sieve.ref.keep "keep")**  | Keep the current message | misc | receiving | any |
| **[pe2_mark_bounced](sieve.ref.pe2_mark_bounced "pe2_mark_bounced")**  | Log bounce events when the pe2_logger module is loaded passively | log | receiving | data |
| **[pe2_mark_unsubscribed](sieve.ref.pe2_mark_unsubscribed "pe2_mark_unsubscribed")**  | Log unsubscribe events when the pe2_logger module is loaded passively | log | receiving | data |
| **[qp_encode](sieve.ref.qp_encode "qp_encode")**  | Quoted-printable encode a string | string | both | any |
| **[cidrdb](sieve.ref.cidrdb "cidrdb")**  | Obtain data associated with the CIDR information pathway | cidr | receiving | any |
| **[redirect](sieve.ref.redirect "redirect")**  | Change the envelope recipient | misc | both | data, each_rcpt, rcptto, spool |
| **[reject](sieve.ref.reject "reject")**  | Reject the message, returning an MDN to the sender | bounce | receiving | any |
| **[cidrdb](sieve.ref.cidrdb "cidrdb")**  | Reload the information from the pathway specified by the argument | cidr | receiving | any |
| **[reverse](sieve.ref.reverse "reverse")**  | Reverse a string or a stringlist | string | na | any |
| **[reverse_delim](sieve.ref.reverse_delim "reverse_delim")**  | Reverse a string based on a delimiter | string | na | any |
| **[smtp_callback_verify](sieve.ref.smtp_callback_verify "smtp_callback_verify")**  | Perform SMTP callback on an email address | misc | receiving | mailfrom, rcptto |
| **[snmp_trap](sieve.ref.snmp_trap "snmp_trap")**  | Send SNMP traps from a Sieve script | snmp | na | any |
| **[split](sieve.ref.split "split")**  | Split a string into a stringlist | string | na | any |
| **[stop](sieve.ref.stop "stop")**  | Stop processing the current script | control | na | any |
| **[thread_pool_stats](sieve.ref.thread_pool_stats "thread_pool_stats")**  | Obtain information about thread pools | resource | na | any |
| **[type](sieve.ref.type "type")**  | Test the type of the value in a Sieve variable | misc | na | any |
| **[vctx_conn_delete](sieve.ref.vctx_conn_delete "vctx_conn_delete")**  | Delete a key from the connection context | vctx | both | any |
| **[vctx_conn_get](sieve.ref.vctx_conn_get "vctx_conn_get")**  | Obtain the value of a connection context key | vctx | both | any |
| **[vctx_conn_set](sieve.ref.vctx_conn_set "vctx_conn_set")**  | Set a value in the connection context | vctx | both | any |
| **[vctx_mess_delete](sieve.ref.vctx_mess_delete "vctx_mess_delete")**  | Delete a key from the message context | vctx | both | any |
| **[vctx_mess_get](sieve.ref.vctx_mess_get "vctx_mess_get")**  | Obtain the value of a message context key | vctx | both | any |
| **[vctx_mess_set](sieve.ref.vctx_mess_set "vctx_mess_set")**  | Set a value in the message context | vctx | both | any |

| [Prev](sieve.ref3)  | [Up](sieve.ref3) |  [Next](sieve.ref.files) |
| Chapter 16. Sieve++ Function Reference  | [Table of Contents](index) |  16.2. Sieve Function Details |
