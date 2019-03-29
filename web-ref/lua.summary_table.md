|     |     |     |
| --- | --- | --- |
| [Prev](lua)  | Chapter 15. Lua Function Reference |  [Next](lua.function.details.php) |

## 15.1. Lua Functions List

This section contains tables of Lua functions. The first table contains all Lua functions and the following tables show functions by type. All tables are sorted alphabetically by function name and give a brief description. Click the function name for details.

### Note

The Mobile-specific Lua functions are listed here but link to external documents.

<a name="lua_functions-all"></a>

**Table 15.1. Lua functions – all**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [ac:esmtp_capability_add](lua.ref.ac_esmtp_capability_add "ac:esmtp_capability_add") – Add a capability to the EHLO response | name | msys.extended.ac | 3.1 | connect, ehlo |
| [ac:esmtp_capability_remove](lua.ref.ac_esmtp_capability_remove "ac:esmtp_capability_remove") – Removes a capability string from the EHLO response | name | msys.extended.ac | 3.1 | connect, ehlo |
| [ac:inbound_session_count](lua.ref.ac_inbound_session_count "ac:inbound_session_count") – If called with no arguments, returns the current inbound session count to this listener for the connecting IP | [cidr], [service_type] | msys.extended.ac | 3.1 | any |
| [client:do_request](lua.ref.client_do_request "client:do_request") – Perform an HTTP request | type, url, [data] | msys.http.client | 3.5 | any |
| [client:get_body](lua.ref.client_get_body "client:get_body") – Get the body of a web page |   | msys.http.client | 3.5 | any |
| [client:get_headers](lua.ref.client_get_headers "client:get_headers") – Get a client's headers |   | msys.http.client | 3.5 | any |
| [client:get_status](lua.ref.client_get_status "client:get_status") – Return the status of an HTTP request |   | msys.http.client | 3.5 | any |
| [client:parse_headers](lua.ref.client_parse_headers "client:parse_headers") – Parse the headers of an HTTP response | headers | msys.http.client | 3.5 | any |
| [client:set_header](lua.ref.client_set_header "client:set_header") – Set a client's header | [header] | msys.http.client | 3.5 | any |
| [client:set_timeout](lua.ref.client_set_timeout "client:set_timeout") – Set the timeout for an HTTP client | [number] | msys.http.client | 3.5 | any |
| [json.decode](lua.ref.json.decode "json.decode") – Create a JSON object from a JSON string | str | json | 3.1 | any |
| [json.encode](lua.ref.json.encode "json.encode") – Convert a Lua variable or expression so that it can be added to a JSON object | obj | json | 3.1 | any |
| [json.new](lua.ref.json.new "json.new") – Create an empty JSON object |   | json | 3.1 | any |
| [json.strerror](lua.ref.json.strerror "json.strerror") – Return the description of a JSON error code | code | json | 3.1 | any |
| [msg.batch_id](lua.ref.msg.batch_id "msg.batch_id") – Returns the human-readable ec_message.batch_id |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg.conn_id](lua.ref.msg.conn_id "msg.conn_id") – Returns the human-readable ec_message.conn_id |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg.id](lua.ref.msg.id "msg.id") – Returns the human-readable ec_message.id |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:binding](lua.ref.msg_binding "msg:binding") – Sets the binding to the named binding, if one is provided | [value] | msys.extended.message | 3.0 | set_binding |
| [msg:binding_group](lua.ref.msg_binding_group "msg:binding_group") – Sets the binding_group to the named binding, if one is provided | [value] | msys.extended.message | 3.0 | set_binding |
| [msg:body](lua.ref.msg_body "msg:body") – Set or get the message body (minus headers) | [...] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:body_match](lua.ref.msg_body_match "msg:body_match") – Streaming interface to a PCRE search of a message body (minus headers) | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:body_replace](lua.ref.msg_body_replace "msg:body_replace") – Streaming interface to a PCRE replacement of a message body (minus headers) | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:build](lua.ref.msg_build "msg:build") – Create a message | headers, parts, attachments | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:code](lua.ref.msg_code "msg:code") – Get or set the message code | [number], [string] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:context_delete](lua.ref.msg_context_delete "msg:context_delete") – Delete a context variable | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_exists](lua.ref.msg_context_exists "msg:context_exists") – Check if a context variable exists | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_exists_and_get](lua.ref.msg_context_exists_and_get "msg:context_exists_and_get") – Check if a context variable exists and get it | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_get](lua.ref.msg_context_get "msg:context_get") – Get a context variable | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_set](lua.ref.msg_context_set "msg:context_set") – Set a context variable | type, key, value | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:discard](lua.ref.msg_discard "msg:discard") – Silently discard a message | [reason] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:forward](lua.ref.msg_forward "msg:forward") – Forward current message to recipients other than the original recipients. A new message is created and the original message is attached to it | sender, rcptto, text, [subject], [charset] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msg:get_delivery_method](lua.ref.msg_get_delivery_method "msg:get_delivery_method") – Return the delivery method for a message |   | msys.core | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:get_envelope2](lua.ref.msg_get_envelope2 "msg:get_envelope2") – Get envelope values | flags, localpart_str, domain_str | msys.extended.message | 3.0.9 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:get_message_size](lua.ref.msg_get_message_size "msg:get_message_size") – Get the size of a message |   | msys.core | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:header](lua.ref.header "msg:header") – Manipulate message headers | hdr, [value], [mode] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:inject](lua.ref.msg_inject "msg:inject") – Use this function to send mail | mailfrom, rcptto | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:listener_addr](lua.ref.msg_listener_addr "msg:listener_addr") – Gets the recv_via IP and/or PORT | [flag] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:mailfrom](lua.ref.msg_mailfrom "msg:mailfrom") – Sets the 'MAIL FROM' email address if one is provided. Returns the current/new value | [value] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msg:makeBoundary](lua.ref.msg_makeBoundary "msg:makeBoundary") – Generates a unique boundary string | ... | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:makeContainer](lua.ref.msg_makeContainer "msg:makeContainer") – Creates a new, unlinked, container message part | mimetype, [boundary], [add_terminator] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:makePart](lua.ref.msg_makePart "msg:makePart") – Creates a new, unlinked, singleton (or leaf) message part | mimetype, [body], [encoding] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:mime](lua.ref.msg_mime "msg:mime") – Returns the top of the MIME tree for the message, a message part | [readonly] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:raw](lua.ref.msg_raw "msg:raw") – Sets the message content if value is provided | [value] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:raw_match](lua.ref.msg_raw_match "msg:raw_match") – Streaming interface to PCRE search message content | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:raw_replace](lua.ref.msg_raw_replace "msg:raw_replace") – Streaming interface to a PCRE replacement of message content | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:rcptto](lua.ref.msg_rcptto "msg:rcptto") – Sets the 'RCPT TO' email address if one is provided. Returns the current/new value | [value] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msg:reception_peer](lua.ref.msg_reception_peer "msg:reception_peer") – Returns the IP and/or PORT of the remote injection source | [flag] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:routing_domain](lua.ref.msg_routing_domain "msg:routing_domain") – Returns the routing domain for the message | [...] | msys.extended.message_routing | 3.0 | data_spool_each_rcpt, rcptto |
| [msg:text](lua.ref.msg_text "msg:text") – Returns the transfer decoded text for the body | ... | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:text](lua.ref.msg_text1 "msg:text") – The entire message body is replaced by the supplied text | value, [type], [charset] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:text_match](lua.ref.msg_text_match "msg:text_match") – Streaming PCRE search across the transfer-decoded, UTF-8 text version of the message body | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:text_replace](lua.ref.msg_text_replace "msg:text_replace") – Streaming interface to PCRE replacement of textual content from the message body | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:addFirstChild](lua.ref.msgpart_addFirstChild "msgpart:addFirstChild") – Adds a child as the first child on this part | child | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:addLastChild](lua.ref.msgpart_addLastChild "msgpart:addLastChild") – Adds a child as the last child on this part | child | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:address_header](lua.ref.msgpart_address_header "msgpart:address_header") – Parse each instance of the named header for RFC2822 addresses | headername, [component] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:body_match](lua.ref.msgpart_body_match "msgpart:body_match") – Streaming interface to PCRE search a message body part (minus headers) | pattern | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:body_replace](lua.ref.msgpart_body_replace "msgpart:body_replace") – Streaming interface to a PCRE replacement of a message body part (minus headers) | pattern, replacement | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:content_type](lua.ref.msgpart_content_type "msgpart:content_type") – Returns a table of content type related information |   | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:header](lua.ref.msgpart_header "msgpart:header") – Returns an array of headers values for the given name | name | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:header](lua.ref.msgpart_header "msgpart:header") – Unset the header name of the current message part | name, nil | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:header](lua.ref.msgpart_header "msgpart:header") – If mode is replace (or unspecified): first deletes all other headers of that name before appending the new value to the message headers | name, value, [mode] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:insertAfter](lua.ref.msgpart_insertAfter "msgpart:insertAfter") – Insert this part into the MIME tree after the given parameter | after | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:insertBefore](lua.ref.msgpart_insertBefore "msgpart:insertBefore") – Insert this part into the MIME tree before the given parameter | before | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:raw_match](lua.ref.msgpart_raw_match "msgpart:raw_match") – Streaming interface to PCRE search of the current message part | pattern | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:raw_replace](lua.ref.msgpart_raw_replace "msgpart:raw_replace") – Streaming interface to PCRE replacement of message part content | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text](lua.ref.msgpart_text "msgpart:text") – Returns the transfer decoded text for the message part, in UTF-8 | ... | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text](lua.ref.msgpart_text "msgpart:text") – The entire message body part is replaced by the supplied text | value, [type], [charset] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text_match](lua.ref.msgpart_text_match "msgpart:text_match") – Streaming PCRE search across the transfer-decoded UTF-8 text version of the message body part | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text_replace](lua.ref.msgpart_text_replace "msgpart:text_replace") – Streaming interface to a PCRE replacement of textual content from the message body parts. Only parts that have a 'text' mime type will be included in the search | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:unlink](lua.ref.msgpart_unlink "msgpart:unlink") – Removes the part (and its children) from the MIME tree |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.adaptive.registerRules](https://support.messagesystems.com/docs/web-ad/ad.custom.rules) – Register adaptive rules | rules, [type] | msys.adaptive | 3.2 | adaptive |
| [msys.apn.apn_status_classifier](lua.ref.msys.apn.apn_status_classifier "msys.apn.apn_status_classifier") – Determine whether the status code indicates a permanent or temporary failure | status | msys.apn | 3.5.5 | apn_response_eval, msg_dispose |
| [msys.asyncOk](lua.ref.msys.asyncOk "msys.asyncOk") – Returns true if the current execution environment is suitable for suspend/resume operation |   | msys | 3.1 | any |
| [msys.audit.connections](lua.ref.msys.audit.connections "msys.audit.connections") – Returns the number of connections that have occurred for a CIDR block within a configured time window | monitor, [options] | msys.audit | 3.1 | any |
| [msys.audit.inbound_session_count](lua.ref.msys.audit.inbound_session_count "msys.audit.inbound_session_count") – Counts connections currently established from the specified cidr to the specified service | cidr, servicename | msys.audit | 3.1 | any |
| [msys.audit.receptions](lua.ref.msys.audit.receptions "msys.audit.receptions") – Returns the number of receptions that have occurred for a CIDR block within a configured time window | monitor, [options] | msys.audit | 3.1 | any |
| [msys.audit.rejections](lua.ref.msys.audit.rejections "msys.audit.rejections") – Returns the number of rejections that have occurred for a CIDR block within a configured time window | monitor, [options] | msys.audit | 3.1 | any |
| [msys.audit_series.add](lua.ref.msys.audit_series.add "msys.audit_series.add") – Adjusts the counter for the current time window of a named series | name, [options] | msys.audit_series | 3.1 | any |
| [msys.audit_series.count](lua.ref.msys.audit_series.count "msys.audit_series.count") – Returns the total associated with the named series | name, [options] | msys.audit_series | 3.1 | any |
| [msys.audit_series.define](lua.ref.msys.audit_series.define "msys.audit_series.define") – Define an audit series | name, type, interval, num_windows, [options] | msys.audit_series | 3.1 | init |
| [msys.audit_series.remove_item](lua.ref.msys.audit_series.remove_item "msys.audit_series.remove_item") – Removes a counter from a named series | name, [key] | msys.audit_series | 3.1 | any |
| [msys.av.engines](lua.ref.msys.av.engines "msys.av.engines") – Returns a list of configured engine names in a table |   | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.av.scan](lua.ref.msys.av.scan "msys.av.scan") – This function performs a virus scan | [av_engine_name], [msg], [validate_context] | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.av.scan_part](lua.ref.msys.av.scan_part "msys.av.scan_part") – This function takes an optional msg (msys.core:_ec_message), an optional engine name and performs a virus scan on a specific part | msg_part, [av_engine_name], [validate_context] | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.base64.decode](lua.ref.msys.base64.decode "msys.base64.decode") – Decode a base64 encoded string | encoded_text, [charset] | msys.base64 | 3.1 | any |
| [msys.base64.encode](lua.ref.msys.base64.encode "msys.base64.encode") – Base64-encode a string | original, [fold], [charset] | msys.base64 | 3.1 | any |
| [msys.bounce.classify](lua.ref.msys.bounce.classify "msys.bounce.classify") – Create a bounce classification for a message | msg | msys.bounce | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.bounce.classify_smtp_response](lua.ref.msys.bounce.classify_smtp_response "msys.bounce.classify_smtp_response") – Create a bounce classification from SMTP response text and domain name | response_text, domain | msys.bounce | 3.1 | any |
| [msys.brightmail.scan](lua.ref.msys.brightmail.scan "msys.brightmail.scan") – Use Brightmail to scan messages | msg, accept, vctx | msys.brightmail | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.cast](lua.ref.msys.cast "msys.cast") – Cast an object to the specified class | object, classnamestring | msys | 3.1 | any |
| [msys.cidr.define](lua.ref.msys.cidr.define "msys.cidr.define") – Define a named CIDR object | name, options | msys.cidr | 3.1 | init |
| [msys.cidr.query](lua.ref.msys.cidr.query "msys.cidr.query") – Look up address against the named CIDR | name, [address] | msys.cidr | 3.1 | any |
| [msys.cidr.reload](lua.ref.msys.cidr.reload "msys.cidr.reload") – Refreshes CIDRs of type 'datasource' and 'rbldnsd' | name | msys.cidr | 3.0 | any |
| [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze "msys.cloudmark.analyze") – Analyze a message using Cloudmark | hdr, [msg], [vctx] | msys.cloudmark | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.cloudmark.score](lua.ref.msys.cloudmark.score "msys.cloudmark.score") – Scan messages using Cloudmark | [msg], [accept], [vctx] | msys.cloudmark | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.commtouch.diagnose](lua.ref.msys.commtouch.diagnose "msys.commtouch.diagnose") – Scan message using Commtouch | [msg], [accept], [vctx] | msys.commtouch | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.config](lua.ref.msys.config "msys.config") – Set or get configuration values | action, parameters | msys | 3.1 | any |
| [msys.core.dns_get_domain](lua.ref.msys.core.dns_get_domain "msys.core.dns_get_domain") – Get a domain record | domain | msys.core | 3.1 | any |
| [msys.core.get_now_ts](lua.ref.msys.core.get_now_ts "msys.core.get_now_ts") – Get the current time |   | msys.core | 3.1 | any |
| [msys.core.io_wrapper_open](lua.ref.msys.core.io_wrapper_open "msys.core.io_wrapper_open") – Open a handle to a resource | filename, [options], [mode] | msys.core | 3.3 | any |
| [msys.core.mail_queue_delay_domain](lua.ref.msys.core.mail_queue_delay_domain "msys.core.mail_queue_delay_domain") – Add a domain record to the delayed queue | dr, note | msys.core | 3.1 | any |
| [msys.core.string_new](lua.ref.msys.core.string_new "msys.core.string_new") – Create an ec_string data type |   | msys.core | 3.0 | any |
| [msys.counter.add](lua.ref.msys.counter.add "msys.counter.add") – Add to the current value of the specified counter | object_or_path, delta | msys.counter | 3.1 | any |
| [msys.counter.inc](lua.ref.msys.counter.inc "msys.counter.inc") – Increment a counter | object_or_path | msys.counter | 3.1 | any |
| [msys.counter.open](lua.ref.msys.counter.open "msys.counter.open") – Create a counter object | counter_path, [semantics] | msys.counter | 3.1 | any |
| [msys.counter.read](lua.ref.msys.counter.read "msys.counter.read") – Read the specified counter | object_or_path | msys.counter | 3.1 | any |
| [msys.counter.reset](lua.ref.msys.counter.reset "msys.counter.reset") – Reset a counter | object_or_path | msys.counter | 3.1 | any |
| [msys.counter.unlink](lua.ref.msys.counter.unlink "msys.counter.unlink") – Unlink a counter | counter_path | msys.counter | 3.1 | any |
| [msys.db.execute](lua.ref.msys.db.execute "msys.db.execute") – Executes a query that is not expected to return data (such as an insert or an update query) | cachename, query, [queryparams], [options] | msys.db | 3.1 | any |
| [msys.db.fetch_row](lua.ref.msys.db.fetch_row "msys.db.fetch_row") – If successful, return the first row of the query result as a table | cachename, query, [queryparams], [options] | msys.db | 3.1 | any |
| [msys.db.query](lua.ref.msys.db.query "msys.db.query") – Query a datasource | cachename, query, [queryparams], [options] | msys.db | 3.0 | any |
| [msys.delivery.ob_get_current_message](lua.ref.msys.delivery.ob_get_current_message "msys.delivery.ob_get_current_message") – Get the current message from the session context | sess | msys.delivery | 3.5.5 | http_response_eval |
| [msys.dnsLookup](lua.ref.msys.dnslookup "msys.dnsLookup") – Perform a DNS lookup | name, [recordtype], [options] | msys | 3.0 | any |
| [msys.dumper.Dumper](lua.ref.msys.dumper.Dumper "msys.dumper.Dumper") – Dump information about an object | res | msys.dumper | 3.0 | any |
| [msys.expandMacro](lua.ref.msys.expandMacro "msys.expandMacro") – Expand macros (such as sieve, spf and custom_logger macros) | string | msys | 3.0 | any |
| [msys.expurgate.scan](lua.ref.msys.expurgate.scan "msys.expurgate.scan") – Scan using the Eleven antivirus engine | msg, accept, vctx | msys.expurgate | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.gauge_cache.dec](lua.ref.msys.gauge_cache.dec "msys.gauge_cache.dec") – Decrements the value associated with keystring in the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.define](lua.ref.msys.gauge_cache.define "msys.gauge_cache.define") – Create a cache that can be used to maintain a set of counters | name, maxelems, ttl, [replicated] | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.get](lua.ref.msys.gauge_cache.get "msys.gauge_cache.get") – Looks up the value associated with keystring in the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.inc](lua.ref.msys.gauge_cache.inc "msys.gauge_cache.inc") – Increments the value associated with keystring in the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.remove_item](lua.ref.msys.gauge_cache.remove_item "msys.gauge_cache.remove_item") – Removes the value associated with keystring from the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gcm.gcm_classify_error](lua.ref.msys.gcm.gcm_classify_error "msys.gcm.gcm_classify_error") – Determine the delivery status of the "DLV_Response_Status" variable | status | msys.gcm | 3.5.5 | gcm_response_eval, http_response_eval, msg_dispose |
| [msys.gcm.gcm_get_result_error_code](lua.ref.msys.gcm.gcm_get_result_error_code "msys.gcm.gcm_get_result_error_code") – Get the error code from the response results error | error | msys.gcm | 3.5.5 | gcm_response_eval, http_response_eval, msg_dispose |
| [msys.getClassMetaTable](lua.ref.msys.getClassMetaTable "msys.getClassMetaTable") – Returns the metatable for the named class | classnamestring | msys | 3.1 | any |
| [msys.http.client.new](lua.ref.msys.http.client.new "msys.http.client.new") – Create an HTTP client |   | msys.http.client | 3.5 | any |
| [msys.httpclnt.http_status_classifier](lua.ref.msys.httpclnt.http_status_classifier "msys.httpclnt.http_status_classifier") – Determine the delivery status of the "DLV_Response_Status" variable | status | msys.httpclnt | 3.6 | http_response_eval |
| [msys.idn.to_idn](lua.ref.msys.idn "msys.idn.to_idn") – Attempts to convert the domain to the IDN format | name | msys.idn | 3.6.12 | any |
| [msys.idn.to_utf8](lua.ref.msys.idn_utf8 "msys.idn.to_utf8") – Converts an IDN formatted string to unicode | name | msys.idn | 3.6.12 | any |
| [msys.lock](lua.ref.msys.lock "msys.lock") – The current running OS level thread obtains a lock on the named mutex | mutexname | msys | 3.1 | any |
| [msys.mstore.load](https://support.messagesystems.com/docs/web-mobility/mobility.message.retry) – Retrieve a message from Riak data storage | bucket_id, msgid | msys.mstore | 3.3 | SMPP |
| [msys.os.statvfs_read](lua.ref.msys.os.statvfs_read "msys.os.statvfs_read") – Request a snapshot of the stream | path | msys.os | 3.2 | any |
| [msys.os.statvfs_subscribe](lua.ref.msys.os.statvfs_subscribe "msys.os.statvfs_subscribe") – Provide a "stream" for statvfs updates | path, interval | msys.os | 3.2 | any |
| [msys.parseRFC2822Addresses](lua.ref.msys.parseRFC2822Addresses "msys.parseRFC2822Addresses") – Parse the address string per the address parsing rules defined in RFC2822 | addressstring, component | msys | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msys.pcre.match](lua.ref.msys.pcre.match "msys.pcre.match") – Perform a PCRE regex match operation | str, pattern | msys.pcre | 3.0 | any |
| [msys.pcre.replace](lua.ref.msys.pcre.replace "msys.pcre.replace") – Perform a PCRE replace operation | subject, pattern, replacement | msys.pcre | 3.0 | any |
| [msys.pcre.split](lua.ref.msys.pcre.split "msys.pcre.split") – Perform a PCRE split operation | subject, pattern | msys.pcre | 3.0 | any |
| [msys.policyeditor.del_header](lua.ref.msys.policyeditor.del_header "msys.policyeditor.del_header") *(deprecated)* – Removes a header from the message | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_binding_domain_failure_rate](lua.ref.msys.policyeditor.get_binding_domain_failure_rate "msys.policyeditor.get_binding_domain_failure_rate") *(deprecated)* – Get the failure rate for a particular domain and binding combination | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.get_header](lua.ref.msys.policyeditor.get_header "msys.policyeditor.get_header") *(deprecated)* – Returns the value of a header field | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_mailfrom](lua.ref.msys.policyeditor.get_mailfrom "msys.policyeditor.get_mailfrom") *(deprecated)* – Returns the envelope sender | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.get_mess_recv_from](lua.ref.msys.policyeditor.get_mess_recv_from "msys.policyeditor.get_mess_recv_from") *(deprecated)* – Returns the IP:port combination from which the message was received | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_mess_recv_via](lua.ref.msys.policyeditor.get_mess_recv_via "msys.policyeditor.get_mess_recv_via") *(deprecated)* – Returns the IP:port combination on which the message was received | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_rcptto](lua.ref.msys.policyeditor.get_rcptto "msys.policyeditor.get_rcptto") *(deprecated)* – Returns the recipient | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.get_variable](lua.ref.msys.policyeditor.get_variable "msys.policyeditor.get_variable") *(deprecated)* – Return the value of a script variable | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.pcre_match](lua.ref.msys.policyeditor.pcre_match "msys.policyeditor.pcre_match") *(deprecated)* – Perform a PCRE regex match operation | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.send_email](lua.ref.msys.policyeditor.send_email "msys.policyeditor.send_email") *(deprecated)* – Sends a simple email message | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.send_trap](lua.ref.msys.policyeditor.send_trap "msys.policyeditor.send_trap") *(deprecated)* – Send an SNMP trap | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.set_binding](lua.ref.msys.policyeditor.set_binding "msys.policyeditor.set_binding") *(deprecated)* – Assign the message to a named binding | ctx, vars, params | msys.policyeditor | 3.0 | set_binding |
| [msys.policyeditor.set_binding_group](lua.ref.msys.policyeditor.set_binding_group "msys.policyeditor.set_binding_group") *(deprecated)* – Assign the message to a named binding group | ctx, vars, params | msys.policyeditor | 3.0 | set_binding |
| [msys.policyeditor.set_variable](lua.ref.msys.policyeditor.set_variable "msys.policyeditor.set_variable") *(deprecated)* – Set the value of a script variable | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.vctx_conn_get](lua.ref.msys.policyeditor.vctx_conn_get "msys.policyeditor.vctx_conn_get") *(deprecated)* – Returns a connection validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.vctx_conn_set](lua.ref.msys.policyeditor.vctx_conn_set "msys.policyeditor.vctx_conn_set") *(deprecated)* – Set a connection validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.vctx_mess_get](lua.ref.msys.policyeditor.vctx_mess_get "msys.policyeditor.vctx_mess_get") *(deprecated)* – Returns a message validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.vctx_mess_set](lua.ref.msys.policyeditor.vctx_mess_set "msys.policyeditor.vctx_mess_set") *(deprecated)* – Sets a message validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.qp.decode](lua.ref.msys.qp.decode "msys.qp.decode") – Decode a quoted-printable message | encoded_txt, [charset] | msys.qp | 3.1 | any |
| [msys.qp.encode](lua.ref.msys.qp.encode "msys.qp.encode") – Quoted-printable encode a string | original, [charset] | msys.qp | 3.1 | any |
| [msys.readfile](lua.ref.msys.readfile "msys.readfile") – Read the entire contents of the specified file or URI | filename_or_uri | msys | 3.1 | any |
| [msys.registerAuth](lua.ref.msys.registerAuth "msys.registerAuth") – Register an authentication/authorization scheme that can be used for SMTP or control channel authentication | schemename, authtable | msys | 3.1 | init |
| [msys.registerControl](lua.ref.msys.registerControl "msys.registerControl") – Register a command with the control channel subsystem | prefix, closure | msys | 3.1 | init |
| [msys.registerModule](lua.ref.msys.registerModule "msys.registerModule") – Registers a Lua module with the system | name, functable | msys | 3.0 | any |
| [msys.rfc3464.compute_delivery_status](lua.ref.msys.rfc3464.compute_delivery_status "msys.rfc3464.compute_delivery_status") – Generate RFC3464 compliant delivery status headers | msg, action | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.compute_delivery_status_string](lua.ref.msys.rfc3464.compute_delivery_status_string "msys.rfc3464.compute_delivery_status_string") – Generate RFC3464 compliant delivery status headers | response_text | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.create_mdn](lua.ref.msys.rfc3464.create_mdn "msys.rfc3464.create_mdn") – Generate an MDN from a message | msg, action | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.extract_delivery_status](lua.ref.msys.rfc3464.extract_delivery_status "msys.rfc3464.extract_delivery_status") – Return a table of parsed email headers | msg | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.send_mdn](lua.ref.msys.rfc3464.send_mdn "msys.rfc3464.send_mdn") – Generate and enqueue an MDN | msg, action | msys.rfc3464 | 3.1 | any |
| [msys.runInPool](lua.ref.msys.runinpool "msys.runInPool") – Run a function in a separate threadpool | pool, closure, [...] | msys | 3.2 | any |
| [msys.runSieveScript](lua.ref.msys.runSieveScript "msys.runSieveScript") – Run the Sieve script in the specified phase | scriptfilename, phase, capabilities | msys | 3.1 | any |
| [msys.shareGet](lua.ref.msys.shareGet "msys.shareGet") *(deprecated)* – Retrieve the value associated with keystring set by an earlier call to msys.shareSet | keystring | msys | 3.1 | any |
| [msys.shareSet](lua.ref.msys.shareSet "msys.shareSet") *(deprecated)* – Associate a value with a keystring in the global share space | keystring, value | msys | 3.1 | any |
| [msys.shareUnset](lua.ref.msys.shareUnset "msys.shareUnset") *(deprecated)* – Remove the association with keystring from the global share space | keystring | msys | 3.1 | any |
| [msys.sleep](lua.ref.msys.sleep "msys.sleep") – When called in the scheduler thread, suspend the current session for the specified duration | duration_in_seconds | msys | 3.1 | any |
| [msys.snmpTrap](lua.ref.msys.snmpTrap "msys.snmpTrap") – Issue an SNMP trap | traptable | msys | 3.1 | any |
| [msys.symantec_beik.scan](lua.ref.msys.symantec_beik.scan "msys.symantec_beik.scan") – Scan using BEIK | msg, vctx | msys.symantec_beik | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.threadpool.count](lua.ref.msys.threadpool.count "msys.threadpool.count") – Returns the current number of thread pools |   | msys.threadpool | 3.2 | any |
| [msys.threadpool.find](lua.ref.msys.threadpool.find "msys.threadpool.find") – Finds a thread pool name from a job class ID or a job class ID from a thread pool name | [threadpoolname], [jobclassID] | msys.threadpool | 3.2 | any |
| [msys.threadpool.stat](lua.ref.msys.threadpool.stat "msys.threadpool.stat") – Return stats regarding a threadpool | [threadpoolname], [jobclassID] | msys.threadpool | 3.2 | any |
| [msys.timer.after](lua.ref.msys.timer.after "msys.timer.after") – Execute closure after a given length of time | delta, closure, [name] | msys.timer | 3.3 | any |
| [msys.timer.at](lua.ref.msys.timer.at "msys.timer.at") – Execute closure at a given time | number, closure, [name] | msys.timer | 3.3 | any |
| [msys.timer.every](lua.ref.msys.timer.every "msys.timer.every") – Execute closure every interval | interval, closure, [name] | msys.timer | 3.3 | any |
| [msys.type](lua.ref.msys.type "msys.type") – Return the type name of the supplied parameter | parameter | msys | 3.1 | any |
| [msys.unlock](lua.ref.msys.unlock "msys.unlock") – Releases a lock obtained via msys.lock | mutexname | msys | 3.1 | any |
| [msys.validate.dk.get_responsible_domain](lua.ref.msys.validate.dk.get_responsible_domain "msys.validate.dk.get_responsible_domain") – This function requires module "dk_validate". "msg" is a mail message. "ctx" is the validation context. It returns the responsible domain for the current message | msg, ctx | msys.validate.dk | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dk.sign](lua.ref.msys.validate.dk.sign "msys.validate.dk.sign") – Sign a message using a Domain Key | msg, ctx, options | msys.validate.dk | 3.1 | core_data_validation |
| [msys.validate.dkim.get_domains](lua.ref.msys.validate.dkim.get_domains "msys.validate.dkim.get_domains") – This function requires module "dkim_validate". "msg" is a mail message. "ctx" is the validation context. It returns a list of valid signing domains | msg, ctx | msys.validate.dkim | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.get_responsible_domain](lua.ref.msys.validate.dkim.get_responsible_domain "msys.validate.dkim.get_responsible_domain") – This function requires module "dkim_validate". "msg" is a mail message. "ctx" is the validation context. It returns the responsible domain for the current message | msg, ctx | msys.validate.dkim | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.reflect](lua.ref.msys.validate.dkim.reflect "msys.validate.dkim.reflect") – Should be used before data_validate phase to instruct system to send an email to "receiver_addrs" regarding the validation result of the current message | msg, ctx, sender_addrs, receiver_addrs, [subj], [note] | msys.validate.dkim | 3.1 | before data_validate |
| [msys.validate.dkim.sign](lua.ref.msys.validate.dkim.sign "msys.validate.dkim.sign") – Sign a message using a DKIM signature | msg, vctx, [options] | msys.validate.dkim | 3.1 | core_final_validation |
| [msys.validate.dkim.verify_results_get_count](lua.ref.msys.validate.dkim.verify_results_get_count "msys.validate.dkim.verify_results_get_count") – Return a count of DKIM verification results | results | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.verify_results_get_item](lua.ref.msys.validate.dkim.verify_results_get_item "msys.validate.dkim.verify_results_get_item") – Return the DKIM signature result at the specified index | results, index_value | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.verify_status_to_string](lua.ref.msys.validate.dkim.verify_status_to_string "msys.validate.dkim.verify_status_to_string") – Return a status string of DKIM verification | status | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.get_verify_results](lua.ref.msys.validate.dkim.get_verify_results "msys.validate.dkim.get_verify_results") – Return the number of DKIM signature results | [vctx] | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_num_sigs](lua.ref.msys.validate.opendkim.get_num_sigs "msys.validate.opendkim.get_num_sigs") – Return the number of DKIM signatures | dkim | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig](lua.ref.msys.validate.opendkim.get_sig "msys.validate.opendkim.get_sig") – Get a signature from a DKIM object | dkim, [num] | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_canons](lua.ref.msys.validate.opendkim.get_sig_canons "msys.validate.opendkim.get_sig_canons") – Fetch the canonicalizers used for a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_domain](lua.ref.msys.validate.opendkim.get_sig_domain "msys.validate.opendkim.get_sig_domain") – Fetch the signing domain from a DKIM_SIGINFO object | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_errorstr](lua.ref.msys.validate.opendkim.get_sig_errorstr "msys.validate.opendkim.get_sig_errorstr") – Fetch the error associated with a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_flags](lua.ref.msys.validate.opendkim.get_sig_flags "msys.validate.opendkim.get_sig_flags") – Fetch the flags associated with a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_hdrsigned](lua.ref.msys.validate.opendkim.get_sig_hdrsigned "msys.validate.opendkim.get_sig_hdrsigned") – Determine whether a given header was signed | dkim_sig, header_name | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_identity](lua.ref.msys.validate.opendkim.get_sig_identity "msys.validate.opendkim.get_sig_identity") – Fetch the identity associated with a DKIM signature | dkim, dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_keysize](lua.ref.msys.validate.opendkim.get_sig_keysize "msys.validate.opendkim.get_sig_keysize") – Fetch the size of the key used to generate a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_selector](lua.ref.msys.validate.opendkim.get_sig_selector "msys.validate.opendkim.get_sig_selector") – Fetch the selector associated with a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_signalg](lua.ref.msys.validate.opendkim.get_sig_signalg "msys.validate.opendkim.get_sig_signalg") – Return the signing algorithm as a string | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.sign](lua.ref.msys.validate.opendkim.sign "msys.validate.opendkim.sign") – Sign a message using OpenDKIM | msg, vctx, [options] | msys.validate.opendkim | 3.6 | core_final_validation |
| [msys.validate.opendkim.verify](lua.ref.msys.validate.opendkim.verify "msys.validate.opendkim.verify") – Verify an DKIM signature | m | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [sess:request_add_header](lua.ref.sess_request_add_header "sess:request_add_header") – Set the header of an HTTP session | header, value, replace | msys.httpclnt | 3.6 | http_request_eval |
| [sess:request_delete_header](lua.ref.sess_request_delete_header "sess:request_delete_header") – Delete a header from an HTTP session | header | msys.httpclnt | 3.6 | http_request_eval |
| [sess:request_finalize](lua.ref.sess_request_finalize "sess:request_finalize") – Finalize changes to an HTTP request | update | msys.httpclnt | 3.6 | http_request_eval |
| [sess:request_set_body](lua.ref.sess_request_set_body "sess:request_set_body") – Set the body of an HTTP session | request | msys.httpclnt | 3.6 | http_request_eval |
| [thread.mutex](lua.ref.thread.mutex "thread.mutex") – Create a new mutex | [type] | thread | 3.2 | any |
| [vctx:add_recipient](lua.ref.vctx_add_recipient "vctx:add_recipient") – Adds address (which may be a table representing multiple addresses) to the recipient list for the inbound session | address | msys.extended.vctx | 3.1 | data, data_spool, data_spool_each_rcpt, rcptto |
| [vctx:disconnect](lua.ref.vctx_disconnect "vctx:disconnect") – Disconnect the current session | [code], [message] | msys.core | 3.1 | any |
| [vctx:get](lua.ref.vctx_get "vctx:get") – Get the value of a context variable | type, key | msys.core | 3.5 | any |
| [vctx:recipient_list](lua.ref.vctx_recipient_list "vctx:recipient_list") – Return or set the current recipient list | [addresses] | msys.extended.vctx | 3.1 |   |
| [vctx:remove_recipient](lua.ref.vctx_remove_recipient "vctx:remove_recipient") – Removes an address (which may be a table representing multiple addresses) from the recipient list | address | msys.extended.vctx | 3.1 | data, data_spool, data_spool_each_rcpt, mailfrom, rcptto |
| [vctx:set](lua.ref.vctx_set "vctx:set") – Set the value of a context variable | type, key, value | msys.core | 3.5 | any |
| [vctx:set_code](lua.ref.vctx_set_code "vctx:set_code") – Sets the inbound disposition and response message | codenum, message | msys.core | 3.1 | any |
| [vctx:tarpit](lua.ref.vctx_tarpit "vctx:tarpit") – Issues a time cost on the inbound session, if supported by the listener (currently only SMTP supports this) | interval | msys.extended.vctx | 3.1 | connect |

<a name="lua_functions-accept"></a>

**Table 15.2. Lua functions – accept**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [ac:esmtp_capability_add](lua.ref.ac_esmtp_capability_add "ac:esmtp_capability_add") – Add a capability to the EHLO response | name | msys.extended.ac | 3.1 | connect, ehlo |
| [ac:esmtp_capability_remove](lua.ref.ac_esmtp_capability_remove "ac:esmtp_capability_remove") – Removes a capability string from the EHLO response | name | msys.extended.ac | 3.1 | connect, ehlo |
| [ac:inbound_session_count](lua.ref.ac_inbound_session_count "ac:inbound_session_count") – If called with no arguments, returns the current inbound session count to this listener for the connecting IP | [cidr], [service_type] | msys.extended.ac | 3.1 | any |

<a name="lua_functions-adaptive"></a>

**Table 15.3. Lua functions – adaptive**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.adaptive.registerRules](https://support.messagesystems.com/docs/web-ad/ad.custom.rules) – Register adaptive rules | rules, [type] | msys.adaptive | 3.2 | adaptive |

<a name="lua_functions-antivirus"></a>

**Table 15.4. Lua functions – antivirus**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.av.engines](lua.ref.msys.av.engines "msys.av.engines") – Returns a list of configured engine names in a table |   | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.av.scan](lua.ref.msys.av.scan "msys.av.scan") – This function performs a virus scan | [av_engine_name], [msg], [validate_context] | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.av.scan_part](lua.ref.msys.av.scan_part "msys.av.scan_part") – This function takes an optional msg (msys.core:_ec_message), an optional engine name and performs a virus scan on a specific part | msg_part, [av_engine_name], [validate_context] | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.brightmail.scan](lua.ref.msys.brightmail.scan "msys.brightmail.scan") – Use Brightmail to scan messages | msg, accept, vctx | msys.brightmail | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze "msys.cloudmark.analyze") – Analyze a message using Cloudmark | hdr, [msg], [vctx] | msys.cloudmark | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.cloudmark.score](lua.ref.msys.cloudmark.score "msys.cloudmark.score") – Scan messages using Cloudmark | [msg], [accept], [vctx] | msys.cloudmark | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.commtouch.diagnose](lua.ref.msys.commtouch.diagnose "msys.commtouch.diagnose") – Scan message using Commtouch | [msg], [accept], [vctx] | msys.commtouch | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.expurgate.scan](lua.ref.msys.expurgate.scan "msys.expurgate.scan") – Scan using the Eleven antivirus engine | msg, accept, vctx | msys.expurgate | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.symantec_beik.scan](lua.ref.msys.symantec_beik.scan "msys.symantec_beik.scan") – Scan using BEIK | msg, vctx | msys.symantec_beik | 3.1 | data, data_spool, data_spool_each_rcpt |

<a name="lua_functions-apn"></a>

**Table 15.5. Lua functions – apn**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.apn.apn_status_classifier](lua.ref.msys.apn.apn_status_classifier "msys.apn.apn_status_classifier") – Determine whether the status code indicates a permanent or temporary failure | status | msys.apn | 3.5.5 | apn_response_eval, msg_dispose |

<a name="lua_functions-bounce"></a>

**Table 15.6. Lua functions – bounce**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.bounce.classify](lua.ref.msys.bounce.classify "msys.bounce.classify") – Create a bounce classification for a message | msg | msys.bounce | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.bounce.classify_smtp_response](lua.ref.msys.bounce.classify_smtp_response "msys.bounce.classify_smtp_response") – Create a bounce classification from SMTP response text and domain name | response_text, domain | msys.bounce | 3.1 | any |

<a name="lua_functions-counter"></a>

**Table 15.7. Lua functions – counter**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.counter.add](lua.ref.msys.counter.add "msys.counter.add") – Add to the current value of the specified counter | object_or_path, delta | msys.counter | 3.1 | any |
| [msys.counter.inc](lua.ref.msys.counter.inc "msys.counter.inc") – Increment a counter | object_or_path | msys.counter | 3.1 | any |
| [msys.counter.open](lua.ref.msys.counter.open "msys.counter.open") – Create a counter object | counter_path, [semantics] | msys.counter | 3.1 | any |
| [msys.counter.read](lua.ref.msys.counter.read "msys.counter.read") – Read the specified counter | object_or_path | msys.counter | 3.1 | any |
| [msys.counter.reset](lua.ref.msys.counter.reset "msys.counter.reset") – Reset a counter | object_or_path | msys.counter | 3.1 | any |
| [msys.counter.unlink](lua.ref.msys.counter.unlink "msys.counter.unlink") – Unlink a counter | counter_path | msys.counter | 3.1 | any |

<a name="lua_functions-db"></a>

**Table 15.8. Lua functions – db**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.db.execute](lua.ref.msys.db.execute "msys.db.execute") – Executes a query that is not expected to return data (such as an insert or an update query) | cachename, query, [queryparams], [options] | msys.db | 3.1 | any |
| [msys.db.fetch_row](lua.ref.msys.db.fetch_row "msys.db.fetch_row") – If successful, return the first row of the query result as a table | cachename, query, [queryparams], [options] | msys.db | 3.1 | any |
| [msys.db.query](lua.ref.msys.db.query "msys.db.query") – Query a datasource | cachename, query, [queryparams], [options] | msys.db | 3.0 | any |

<a name="lua_functions-dk"></a>

**Table 15.9. Lua functions – dk**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.validate.dk.get_responsible_domain](lua.ref.msys.validate.dk.get_responsible_domain "msys.validate.dk.get_responsible_domain") – This function requires module "dk_validate". "msg" is a mail message. "ctx" is the validation context. It returns the responsible domain for the current message | msg, ctx | msys.validate.dk | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dk.sign](lua.ref.msys.validate.dk.sign "msys.validate.dk.sign") – Sign a message using a Domain Key | msg, ctx, options | msys.validate.dk | 3.1 | core_data_validation |

<a name="lua_functions-dkim"></a>

**Table 15.10. Lua functions – dkim**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.validate.dkim.get_domains](lua.ref.msys.validate.dkim.get_domains "msys.validate.dkim.get_domains") – This function requires module "dkim_validate". "msg" is a mail message. "ctx" is the validation context. It returns a list of valid signing domains | msg, ctx | msys.validate.dkim | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.get_responsible_domain](lua.ref.msys.validate.dkim.get_responsible_domain "msys.validate.dkim.get_responsible_domain") – This function requires module "dkim_validate". "msg" is a mail message. "ctx" is the validation context. It returns the responsible domain for the current message | msg, ctx | msys.validate.dkim | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.reflect](lua.ref.msys.validate.dkim.reflect "msys.validate.dkim.reflect") – Should be used before data_validate phase to instruct system to send an email to "receiver_addrs" regarding the validation result of the current message | msg, ctx, sender_addrs, receiver_addrs, [subj], [note] | msys.validate.dkim | 3.1 | before data_validate |
| [msys.validate.dkim.sign](lua.ref.msys.validate.dkim.sign "msys.validate.dkim.sign") – Sign a message using a DKIM signature | msg, vctx, [options] | msys.validate.dkim | 3.1 | core_final_validation |
| [msys.validate.dkim.verify_results_get_count](lua.ref.msys.validate.dkim.verify_results_get_count "msys.validate.dkim.verify_results_get_count") – Return a count of DKIM verification results | results | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.verify_results_get_item](lua.ref.msys.validate.dkim.verify_results_get_item "msys.validate.dkim.verify_results_get_item") – Return the DKIM signature result at the specified index | results, index_value | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.verify_status_to_string](lua.ref.msys.validate.dkim.verify_status_to_string "msys.validate.dkim.verify_status_to_string") – Return a status string of DKIM verification | status | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.get_verify_results](lua.ref.msys.validate.dkim.get_verify_results "msys.validate.dkim.get_verify_results") – Return the number of DKIM signature results | [vctx] | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_num_sigs](lua.ref.msys.validate.opendkim.get_num_sigs "msys.validate.opendkim.get_num_sigs") – Return the number of DKIM signatures | dkim | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig](lua.ref.msys.validate.opendkim.get_sig "msys.validate.opendkim.get_sig") – Get a signature from a DKIM object | dkim, [num] | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_canons](lua.ref.msys.validate.opendkim.get_sig_canons "msys.validate.opendkim.get_sig_canons") – Fetch the canonicalizers used for a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_domain](lua.ref.msys.validate.opendkim.get_sig_domain "msys.validate.opendkim.get_sig_domain") – Fetch the signing domain from a DKIM_SIGINFO object | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_errorstr](lua.ref.msys.validate.opendkim.get_sig_errorstr "msys.validate.opendkim.get_sig_errorstr") – Fetch the error associated with a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_flags](lua.ref.msys.validate.opendkim.get_sig_flags "msys.validate.opendkim.get_sig_flags") – Fetch the flags associated with a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_hdrsigned](lua.ref.msys.validate.opendkim.get_sig_hdrsigned "msys.validate.opendkim.get_sig_hdrsigned") – Determine whether a given header was signed | dkim_sig, header_name | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_identity](lua.ref.msys.validate.opendkim.get_sig_identity "msys.validate.opendkim.get_sig_identity") – Fetch the identity associated with a DKIM signature | dkim, dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_keysize](lua.ref.msys.validate.opendkim.get_sig_keysize "msys.validate.opendkim.get_sig_keysize") – Fetch the size of the key used to generate a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_selector](lua.ref.msys.validate.opendkim.get_sig_selector "msys.validate.opendkim.get_sig_selector") – Fetch the selector associated with a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_signalg](lua.ref.msys.validate.opendkim.get_sig_signalg "msys.validate.opendkim.get_sig_signalg") – Return the signing algorithm as a string | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.sign](lua.ref.msys.validate.opendkim.sign "msys.validate.opendkim.sign") – Sign a message using OpenDKIM | msg, vctx, [options] | msys.validate.opendkim | 3.6 | core_final_validation |
| [msys.validate.opendkim.verify](lua.ref.msys.validate.opendkim.verify "msys.validate.opendkim.verify") – Verify an DKIM signature | m | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |

<a name="lua_functions-gcm"></a>

**Table 15.11. Lua functions – gcm**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.gcm.gcm_classify_error](lua.ref.msys.gcm.gcm_classify_error "msys.gcm.gcm_classify_error") – Determine the delivery status of the "DLV_Response_Status" variable | status | msys.gcm | 3.5.5 | gcm_response_eval, http_response_eval, msg_dispose |
| [msys.gcm.gcm_get_result_error_code](lua.ref.msys.gcm.gcm_get_result_error_code "msys.gcm.gcm_get_result_error_code") – Get the error code from the response results error | error | msys.gcm | 3.5.5 | gcm_response_eval, http_response_eval, msg_dispose |

<a name="lua_functions-http"></a>

**Table 15.12. Lua functions – http**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [client:do_request](lua.ref.client_do_request "client:do_request") – Perform an HTTP request | type, url, [data] | msys.http.client | 3.5 | any |
| [client:get_body](lua.ref.client_get_body "client:get_body") – Get the body of a web page |   | msys.http.client | 3.5 | any |
| [client:get_headers](lua.ref.client_get_headers "client:get_headers") – Get a client's headers |   | msys.http.client | 3.5 | any |
| [client:get_status](lua.ref.client_get_status "client:get_status") – Return the status of an HTTP request |   | msys.http.client | 3.5 | any |
| [client:parse_headers](lua.ref.client_parse_headers "client:parse_headers") – Parse the headers of an HTTP response | headers | msys.http.client | 3.5 | any |
| [client:set_header](lua.ref.client_set_header "client:set_header") – Set a client's header | [header] | msys.http.client | 3.5 | any |
| [client:set_timeout](lua.ref.client_set_timeout "client:set_timeout") – Set the timeout for an HTTP client | [number] | msys.http.client | 3.5 | any |
| [msys.http.client.new](lua.ref.msys.http.client.new "msys.http.client.new") – Create an HTTP client |   | msys.http.client | 3.5 | any |

<a name="lua_functions-HTTP_client"></a>

**Table 15.13. Lua functions – HTTP_client**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.httpclnt.http_status_classifier](lua.ref.msys.httpclnt.http_status_classifier "msys.httpclnt.http_status_classifier") – Determine the delivery status of the "DLV_Response_Status" variable | status | msys.httpclnt | 3.6 | http_response_eval |
| [sess:request_add_header](lua.ref.sess_request_add_header "sess:request_add_header") – Set the header of an HTTP session | header, value, replace | msys.httpclnt | 3.6 | http_request_eval |
| [sess:request_delete_header](lua.ref.sess_request_delete_header "sess:request_delete_header") – Delete a header from an HTTP session | header | msys.httpclnt | 3.6 | http_request_eval |
| [sess:request_finalize](lua.ref.sess_request_finalize "sess:request_finalize") – Finalize changes to an HTTP request | update | msys.httpclnt | 3.6 | http_request_eval |
| [sess:request_set_body](lua.ref.sess_request_set_body "sess:request_set_body") – Set the body of an HTTP session | request | msys.httpclnt | 3.6 | http_request_eval |

<a name="lua_functions-idn"></a>

**Table 15.14. Lua functions – idn**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.idn.to_idn](lua.ref.msys.idn "msys.idn.to_idn") – Attempts to convert the domain to the IDN format | name | msys.idn | 3.6.12 | any |
| [msys.idn.to_utf8](lua.ref.msys.idn_utf8 "msys.idn.to_utf8") – Converts an IDN formatted string to unicode | name | msys.idn | 3.6.12 | any |

<a name="lua_functions-json"></a>

**Table 15.15. Lua functions – json**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [json.decode](lua.ref.json.decode "json.decode") – Create a JSON object from a JSON string | str | json | 3.1 | any |
| [json.encode](lua.ref.json.encode "json.encode") – Convert a Lua variable or expression so that it can be added to a JSON object | obj | json | 3.1 | any |
| [json.new](lua.ref.json.new "json.new") – Create an empty JSON object |   | json | 3.1 | any |
| [json.strerror](lua.ref.json.strerror "json.strerror") – Return the description of a JSON error code | code | json | 3.1 | any |

<a name="lua_functions-message"></a>

**Table 15.16. Lua functions – message**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msg.batch_id](lua.ref.msg.batch_id "msg.batch_id") – Returns the human-readable ec_message.batch_id |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg.conn_id](lua.ref.msg.conn_id "msg.conn_id") – Returns the human-readable ec_message.conn_id |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg.id](lua.ref.msg.id "msg.id") – Returns the human-readable ec_message.id |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:binding](lua.ref.msg_binding "msg:binding") – Sets the binding to the named binding, if one is provided | [value] | msys.extended.message | 3.0 | set_binding |
| [msg:binding_group](lua.ref.msg_binding_group "msg:binding_group") – Sets the binding_group to the named binding, if one is provided | [value] | msys.extended.message | 3.0 | set_binding |
| [msg:body](lua.ref.msg_body "msg:body") – Set or get the message body (minus headers) | [...] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:body_match](lua.ref.msg_body_match "msg:body_match") – Streaming interface to a PCRE search of a message body (minus headers) | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:body_replace](lua.ref.msg_body_replace "msg:body_replace") – Streaming interface to a PCRE replacement of a message body (minus headers) | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:build](lua.ref.msg_build "msg:build") – Create a message | headers, parts, attachments | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:code](lua.ref.msg_code "msg:code") – Get or set the message code | [number], [string] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:context_delete](lua.ref.msg_context_delete "msg:context_delete") – Delete a context variable | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_exists](lua.ref.msg_context_exists "msg:context_exists") – Check if a context variable exists | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_exists_and_get](lua.ref.msg_context_exists_and_get "msg:context_exists_and_get") – Check if a context variable exists and get it | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_get](lua.ref.msg_context_get "msg:context_get") – Get a context variable | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_set](lua.ref.msg_context_set "msg:context_set") – Set a context variable | type, key, value | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:discard](lua.ref.msg_discard "msg:discard") – Silently discard a message | [reason] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:forward](lua.ref.msg_forward "msg:forward") – Forward current message to recipients other than the original recipients. A new message is created and the original message is attached to it | sender, rcptto, text, [subject], [charset] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msg:get_delivery_method](lua.ref.msg_get_delivery_method "msg:get_delivery_method") – Return the delivery method for a message |   | msys.core | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:get_envelope2](lua.ref.msg_get_envelope2 "msg:get_envelope2") – Get envelope values | flags, localpart_str, domain_str | msys.extended.message | 3.0.9 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:get_message_size](lua.ref.msg_get_message_size "msg:get_message_size") – Get the size of a message |   | msys.core | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:header](lua.ref.header "msg:header") – Manipulate message headers | hdr, [value], [mode] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:inject](lua.ref.msg_inject "msg:inject") – Use this function to send mail | mailfrom, rcptto | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:listener_addr](lua.ref.msg_listener_addr "msg:listener_addr") – Gets the recv_via IP and/or PORT | [flag] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:mailfrom](lua.ref.msg_mailfrom "msg:mailfrom") – Sets the 'MAIL FROM' email address if one is provided. Returns the current/new value | [value] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msg:makeBoundary](lua.ref.msg_makeBoundary "msg:makeBoundary") – Generates a unique boundary string | ... | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:makeContainer](lua.ref.msg_makeContainer "msg:makeContainer") – Creates a new, unlinked, container message part | mimetype, [boundary], [add_terminator] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:makePart](lua.ref.msg_makePart "msg:makePart") – Creates a new, unlinked, singleton (or leaf) message part | mimetype, [body], [encoding] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:mime](lua.ref.msg_mime "msg:mime") – Returns the top of the MIME tree for the message, a message part | [readonly] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:raw](lua.ref.msg_raw "msg:raw") – Sets the message content if value is provided | [value] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:raw_match](lua.ref.msg_raw_match "msg:raw_match") – Streaming interface to PCRE search message content | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:raw_replace](lua.ref.msg_raw_replace "msg:raw_replace") – Streaming interface to a PCRE replacement of message content | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:rcptto](lua.ref.msg_rcptto "msg:rcptto") – Sets the 'RCPT TO' email address if one is provided. Returns the current/new value | [value] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msg:reception_peer](lua.ref.msg_reception_peer "msg:reception_peer") – Returns the IP and/or PORT of the remote injection source | [flag] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:routing_domain](lua.ref.msg_routing_domain "msg:routing_domain") – Returns the routing domain for the message | [...] | msys.extended.message_routing | 3.0 | data_spool_each_rcpt, rcptto |
| [msg:text](lua.ref.msg_text "msg:text") – Returns the transfer decoded text for the body | ... | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:text](lua.ref.msg_text1 "msg:text") – The entire message body is replaced by the supplied text | value, [type], [charset] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:text_match](lua.ref.msg_text_match "msg:text_match") – Streaming PCRE search across the transfer-decoded, UTF-8 text version of the message body | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:text_replace](lua.ref.msg_text_replace "msg:text_replace") – Streaming interface to PCRE replacement of textual content from the message body | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msys.delivery.ob_get_current_message](lua.ref.msys.delivery.ob_get_current_message "msys.delivery.ob_get_current_message") – Get the current message from the session context | sess | msys.delivery | 3.5.5 | http_response_eval |

<a name="lua_functions-message_part"></a>

**Table 15.17. Lua functions – message_part**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msgpart:addFirstChild](lua.ref.msgpart_addFirstChild "msgpart:addFirstChild") – Adds a child as the first child on this part | child | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:addLastChild](lua.ref.msgpart_addLastChild "msgpart:addLastChild") – Adds a child as the last child on this part | child | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:address_header](lua.ref.msgpart_address_header "msgpart:address_header") – Parse each instance of the named header for RFC2822 addresses | headername, [component] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:body_match](lua.ref.msgpart_body_match "msgpart:body_match") – Streaming interface to PCRE search a message body part (minus headers) | pattern | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:body_replace](lua.ref.msgpart_body_replace "msgpart:body_replace") – Streaming interface to a PCRE replacement of a message body part (minus headers) | pattern, replacement | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:content_type](lua.ref.msgpart_content_type "msgpart:content_type") – Returns a table of content type related information |   | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:header](lua.ref.msgpart_header "msgpart:header") – Returns an array of headers values for the given name | name | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:header](lua.ref.msgpart_header "msgpart:header") – Unset the header name of the current message part | name, nil | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:header](lua.ref.msgpart_header "msgpart:header") – If mode is replace (or unspecified): first deletes all other headers of that name before appending the new value to the message headers | name, value, [mode] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:insertAfter](lua.ref.msgpart_insertAfter "msgpart:insertAfter") – Insert this part into the MIME tree after the given parameter | after | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:insertBefore](lua.ref.msgpart_insertBefore "msgpart:insertBefore") – Insert this part into the MIME tree before the given parameter | before | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:raw_match](lua.ref.msgpart_raw_match "msgpart:raw_match") – Streaming interface to PCRE search of the current message part | pattern | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:raw_replace](lua.ref.msgpart_raw_replace "msgpart:raw_replace") – Streaming interface to PCRE replacement of message part content | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text](lua.ref.msgpart_text "msgpart:text") – Returns the transfer decoded text for the message part, in UTF-8 | ... | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text](lua.ref.msgpart_text "msgpart:text") – The entire message body part is replaced by the supplied text | value, [type], [charset] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text_match](lua.ref.msgpart_text_match "msgpart:text_match") – Streaming PCRE search across the transfer-decoded UTF-8 text version of the message body part | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text_replace](lua.ref.msgpart_text_replace "msgpart:text_replace") – Streaming interface to a PCRE replacement of textual content from the message body parts. Only parts that have a 'text' mime type will be included in the search | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:unlink](lua.ref.msgpart_unlink "msgpart:unlink") – Removes the part (and its children) from the MIME tree |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |

<a name="lua_functions-misc"></a>

**Table 15.18. Lua functions – misc**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.asyncOk](lua.ref.msys.asyncOk "msys.asyncOk") – Returns true if the current execution environment is suitable for suspend/resume operation |   | msys | 3.1 | any |
| [msys.cast](lua.ref.msys.cast "msys.cast") – Cast an object to the specified class | object, classnamestring | msys | 3.1 | any |
| [msys.config](lua.ref.msys.config "msys.config") – Set or get configuration values | action, parameters | msys | 3.1 | any |
| [msys.core.dns_get_domain](lua.ref.msys.core.dns_get_domain "msys.core.dns_get_domain") – Get a domain record | domain | msys.core | 3.1 | any |
| [msys.core.mail_queue_delay_domain](lua.ref.msys.core.mail_queue_delay_domain "msys.core.mail_queue_delay_domain") – Add a domain record to the delayed queue | dr, note | msys.core | 3.1 | any |
| [msys.dnsLookup](lua.ref.msys.dnslookup "msys.dnsLookup") – Perform a DNS lookup | name, [recordtype], [options] | msys | 3.0 | any |
| [msys.dumper.Dumper](lua.ref.msys.dumper.Dumper "msys.dumper.Dumper") – Dump information about an object | res | msys.dumper | 3.0 | any |
| [msys.expandMacro](lua.ref.msys.expandMacro "msys.expandMacro") – Expand macros (such as sieve, spf and custom_logger macros) | string | msys | 3.0 | any |
| [msys.getClassMetaTable](lua.ref.msys.getClassMetaTable "msys.getClassMetaTable") – Returns the metatable for the named class | classnamestring | msys | 3.1 | any |
| [msys.parseRFC2822Addresses](lua.ref.msys.parseRFC2822Addresses "msys.parseRFC2822Addresses") – Parse the address string per the address parsing rules defined in RFC2822 | addressstring, component | msys | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msys.readfile](lua.ref.msys.readfile "msys.readfile") – Read the entire contents of the specified file or URI | filename_or_uri | msys | 3.1 | any |
| [msys.registerAuth](lua.ref.msys.registerAuth "msys.registerAuth") – Register an authentication/authorization scheme that can be used for SMTP or control channel authentication | schemename, authtable | msys | 3.1 | init |
| [msys.registerControl](lua.ref.msys.registerControl "msys.registerControl") – Register a command with the control channel subsystem | prefix, closure | msys | 3.1 | init |
| [msys.registerModule](lua.ref.msys.registerModule "msys.registerModule") – Registers a Lua module with the system | name, functable | msys | 3.0 | any |
| [msys.runSieveScript](lua.ref.msys.runSieveScript "msys.runSieveScript") – Run the Sieve script in the specified phase | scriptfilename, phase, capabilities | msys | 3.1 | any |
| [msys.shareGet](lua.ref.msys.shareGet "msys.shareGet") *(deprecated)* – Retrieve the value associated with keystring set by an earlier call to msys.shareSet | keystring | msys | 3.1 | any |
| [msys.shareSet](lua.ref.msys.shareSet "msys.shareSet") *(deprecated)* – Associate a value with a keystring in the global share space | keystring, value | msys | 3.1 | any |
| [msys.shareUnset](lua.ref.msys.shareUnset "msys.shareUnset") *(deprecated)* – Remove the association with keystring from the global share space | keystring | msys | 3.1 | any |
| [msys.snmpTrap](lua.ref.msys.snmpTrap "msys.snmpTrap") – Issue an SNMP trap | traptable | msys | 3.1 | any |
| [msys.type](lua.ref.msys.type "msys.type") – Return the type name of the supplied parameter | parameter | msys | 3.1 | any |

<a name="lua_functions-mobility"></a>

**Table 15.19. Lua functions – mobility**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.mstore.load](https://support.messagesystems.com/docs/web-mobility/mobility.message.retry) – Retrieve a message from Riak data storage | bucket_id, msgid | msys.mstore | 3.3 | SMPP |

<a name="lua_functions-os"></a>

**Table 15.20. Lua functions – os**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.os.statvfs_read](lua.ref.msys.os.statvfs_read "msys.os.statvfs_read") – Request a snapshot of the stream | path | msys.os | 3.2 | any |
| [msys.os.statvfs_subscribe](lua.ref.msys.os.statvfs_subscribe "msys.os.statvfs_subscribe") – Provide a "stream" for statvfs updates | path, interval | msys.os | 3.2 | any |

<a name="lua_functions-policy"></a>

**Table 15.21. Lua functions – policy**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.policyeditor.del_header](lua.ref.msys.policyeditor.del_header "msys.policyeditor.del_header") *(deprecated)* – Removes a header from the message | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_binding_domain_failure_rate](lua.ref.msys.policyeditor.get_binding_domain_failure_rate "msys.policyeditor.get_binding_domain_failure_rate") *(deprecated)* – Get the failure rate for a particular domain and binding combination | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.get_header](lua.ref.msys.policyeditor.get_header "msys.policyeditor.get_header") *(deprecated)* – Returns the value of a header field | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_mailfrom](lua.ref.msys.policyeditor.get_mailfrom "msys.policyeditor.get_mailfrom") *(deprecated)* – Returns the envelope sender | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.get_mess_recv_from](lua.ref.msys.policyeditor.get_mess_recv_from "msys.policyeditor.get_mess_recv_from") *(deprecated)* – Returns the IP:port combination from which the message was received | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_mess_recv_via](lua.ref.msys.policyeditor.get_mess_recv_via "msys.policyeditor.get_mess_recv_via") *(deprecated)* – Returns the IP:port combination on which the message was received | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_rcptto](lua.ref.msys.policyeditor.get_rcptto "msys.policyeditor.get_rcptto") *(deprecated)* – Returns the recipient | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.get_variable](lua.ref.msys.policyeditor.get_variable "msys.policyeditor.get_variable") *(deprecated)* – Return the value of a script variable | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.pcre_match](lua.ref.msys.policyeditor.pcre_match "msys.policyeditor.pcre_match") *(deprecated)* – Perform a PCRE regex match operation | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.send_email](lua.ref.msys.policyeditor.send_email "msys.policyeditor.send_email") *(deprecated)* – Sends a simple email message | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.send_trap](lua.ref.msys.policyeditor.send_trap "msys.policyeditor.send_trap") *(deprecated)* – Send an SNMP trap | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.set_binding](lua.ref.msys.policyeditor.set_binding "msys.policyeditor.set_binding") *(deprecated)* – Assign the message to a named binding | ctx, vars, params | msys.policyeditor | 3.0 | set_binding |
| [msys.policyeditor.set_binding_group](lua.ref.msys.policyeditor.set_binding_group "msys.policyeditor.set_binding_group") *(deprecated)* – Assign the message to a named binding group | ctx, vars, params | msys.policyeditor | 3.0 | set_binding |
| [msys.policyeditor.set_variable](lua.ref.msys.policyeditor.set_variable "msys.policyeditor.set_variable") *(deprecated)* – Set the value of a script variable | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.vctx_conn_get](lua.ref.msys.policyeditor.vctx_conn_get "msys.policyeditor.vctx_conn_get") *(deprecated)* – Returns a connection validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.vctx_conn_set](lua.ref.msys.policyeditor.vctx_conn_set "msys.policyeditor.vctx_conn_set") *(deprecated)* – Set a connection validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.vctx_mess_get](lua.ref.msys.policyeditor.vctx_mess_get "msys.policyeditor.vctx_mess_get") *(deprecated)* – Returns a message validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.vctx_mess_set](lua.ref.msys.policyeditor.vctx_mess_set "msys.policyeditor.vctx_mess_set") *(deprecated)* – Sets a message validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |

<a name="lua_functions-resource"></a>

**Table 15.22. Lua functions – resource**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.core.get_now_ts](lua.ref.msys.core.get_now_ts "msys.core.get_now_ts") – Get the current time |   | msys.core | 3.1 | any |
| [msys.core.io_wrapper_open](lua.ref.msys.core.io_wrapper_open "msys.core.io_wrapper_open") – Open a handle to a resource | filename, [options], [mode] | msys.core | 3.3 | any |

<a name="lua_functions-rfc3464"></a>

**Table 15.23. Lua functions – rfc3464**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.rfc3464.compute_delivery_status](lua.ref.msys.rfc3464.compute_delivery_status "msys.rfc3464.compute_delivery_status") – Generate RFC3464 compliant delivery status headers | msg, action | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.compute_delivery_status_string](lua.ref.msys.rfc3464.compute_delivery_status_string "msys.rfc3464.compute_delivery_status_string") – Generate RFC3464 compliant delivery status headers | response_text | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.create_mdn](lua.ref.msys.rfc3464.create_mdn "msys.rfc3464.create_mdn") – Generate an MDN from a message | msg, action | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.extract_delivery_status](lua.ref.msys.rfc3464.extract_delivery_status "msys.rfc3464.extract_delivery_status") – Return a table of parsed email headers | msg | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.send_mdn](lua.ref.msys.rfc3464.send_mdn "msys.rfc3464.send_mdn") – Generate and enqueue an MDN | msg, action | msys.rfc3464 | 3.1 | any |

<a name="lua_functions-shaping"></a>

**Table 15.24. Lua functions – shaping**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.audit.connections](lua.ref.msys.audit.connections "msys.audit.connections") – Returns the number of connections that have occurred for a CIDR block within a configured time window | monitor, [options] | msys.audit | 3.1 | any |
| [msys.audit.inbound_session_count](lua.ref.msys.audit.inbound_session_count "msys.audit.inbound_session_count") – Counts connections currently established from the specified cidr to the specified service | cidr, servicename | msys.audit | 3.1 | any |
| [msys.audit.receptions](lua.ref.msys.audit.receptions "msys.audit.receptions") – Returns the number of receptions that have occurred for a CIDR block within a configured time window | monitor, [options] | msys.audit | 3.1 | any |
| [msys.audit.rejections](lua.ref.msys.audit.rejections "msys.audit.rejections") – Returns the number of rejections that have occurred for a CIDR block within a configured time window | monitor, [options] | msys.audit | 3.1 | any |
| [msys.audit_series.add](lua.ref.msys.audit_series.add "msys.audit_series.add") – Adjusts the counter for the current time window of a named series | name, [options] | msys.audit_series | 3.1 | any |
| [msys.audit_series.count](lua.ref.msys.audit_series.count "msys.audit_series.count") – Returns the total associated with the named series | name, [options] | msys.audit_series | 3.1 | any |
| [msys.audit_series.define](lua.ref.msys.audit_series.define "msys.audit_series.define") – Define an audit series | name, type, interval, num_windows, [options] | msys.audit_series | 3.1 | init |
| [msys.audit_series.remove_item](lua.ref.msys.audit_series.remove_item "msys.audit_series.remove_item") – Removes a counter from a named series | name, [key] | msys.audit_series | 3.1 | any |
| [msys.cidr.define](lua.ref.msys.cidr.define "msys.cidr.define") – Define a named CIDR object | name, options | msys.cidr | 3.1 | init |
| [msys.cidr.query](lua.ref.msys.cidr.query "msys.cidr.query") – Look up address against the named CIDR | name, [address] | msys.cidr | 3.1 | any |
| [msys.cidr.reload](lua.ref.msys.cidr.reload "msys.cidr.reload") – Refreshes CIDRs of type 'datasource' and 'rbldnsd' | name | msys.cidr | 3.0 | any |
| [msys.gauge_cache.dec](lua.ref.msys.gauge_cache.dec "msys.gauge_cache.dec") – Decrements the value associated with keystring in the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.define](lua.ref.msys.gauge_cache.define "msys.gauge_cache.define") – Create a cache that can be used to maintain a set of counters | name, maxelems, ttl, [replicated] | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.get](lua.ref.msys.gauge_cache.get "msys.gauge_cache.get") – Looks up the value associated with keystring in the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.inc](lua.ref.msys.gauge_cache.inc "msys.gauge_cache.inc") – Increments the value associated with keystring in the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.remove_item](lua.ref.msys.gauge_cache.remove_item "msys.gauge_cache.remove_item") – Removes the value associated with keystring from the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |

<a name="lua_functions-string"></a>

**Table 15.25. Lua functions – string**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.base64.decode](lua.ref.msys.base64.decode "msys.base64.decode") – Decode a base64 encoded string | encoded_text, [charset] | msys.base64 | 3.1 | any |
| [msys.base64.encode](lua.ref.msys.base64.encode "msys.base64.encode") – Base64-encode a string | original, [fold], [charset] | msys.base64 | 3.1 | any |
| [msys.core.string_new](lua.ref.msys.core.string_new "msys.core.string_new") – Create an ec_string data type |   | msys.core | 3.0 | any |
| [msys.pcre.match](lua.ref.msys.pcre.match "msys.pcre.match") – Perform a PCRE regex match operation | str, pattern | msys.pcre | 3.0 | any |
| [msys.pcre.replace](lua.ref.msys.pcre.replace "msys.pcre.replace") – Perform a PCRE replace operation | subject, pattern, replacement | msys.pcre | 3.0 | any |
| [msys.pcre.split](lua.ref.msys.pcre.split "msys.pcre.split") – Perform a PCRE split operation | subject, pattern | msys.pcre | 3.0 | any |
| [msys.qp.decode](lua.ref.msys.qp.decode "msys.qp.decode") – Decode a quoted-printable message | encoded_txt, [charset] | msys.qp | 3.1 | any |
| [msys.qp.encode](lua.ref.msys.qp.encode "msys.qp.encode") – Quoted-printable encode a string | original, [charset] | msys.qp | 3.1 | any |

<a name="lua_functions-thread"></a>

**Table 15.26. Lua functions – thread**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.lock](lua.ref.msys.lock "msys.lock") – The current running OS level thread obtains a lock on the named mutex | mutexname | msys | 3.1 | any |
| [msys.runInPool](lua.ref.msys.runinpool "msys.runInPool") – Run a function in a separate threadpool | pool, closure, [...] | msys | 3.2 | any |
| [msys.sleep](lua.ref.msys.sleep "msys.sleep") – When called in the scheduler thread, suspend the current session for the specified duration | duration_in_seconds | msys | 3.1 | any |
| [msys.threadpool.count](lua.ref.msys.threadpool.count "msys.threadpool.count") – Returns the current number of thread pools |   | msys.threadpool | 3.2 | any |
| [msys.threadpool.find](lua.ref.msys.threadpool.find "msys.threadpool.find") – Finds a thread pool name from a job class ID or a job class ID from a thread pool name | [threadpoolname], [jobclassID] | msys.threadpool | 3.2 | any |
| [msys.threadpool.stat](lua.ref.msys.threadpool.stat "msys.threadpool.stat") – Return stats regarding a threadpool | [threadpoolname], [jobclassID] | msys.threadpool | 3.2 | any |
| [msys.unlock](lua.ref.msys.unlock "msys.unlock") – Releases a lock obtained via msys.lock | mutexname | msys | 3.1 | any |
| [thread.mutex](lua.ref.thread.mutex "thread.mutex") – Create a new mutex | [type] | thread | 3.2 | any |

<a name="lua_functions-timer"></a>

**Table 15.27. Lua functions – timer**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.timer.after](lua.ref.msys.timer.after "msys.timer.after") – Execute closure after a given length of time | delta, closure, [name] | msys.timer | 3.3 | any |
| [msys.timer.at](lua.ref.msys.timer.at "msys.timer.at") – Execute closure at a given time | number, closure, [name] | msys.timer | 3.3 | any |
| [msys.timer.every](lua.ref.msys.timer.every "msys.timer.every") – Execute closure every interval | interval, closure, [name] | msys.timer | 3.3 | any |

<a name="lua_functions-validation"></a>

**Table 15.28. Lua functions – validation**

| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [vctx:add_recipient](lua.ref.vctx_add_recipient "vctx:add_recipient") – Adds address (which may be a table representing multiple addresses) to the recipient list for the inbound session | address | msys.extended.vctx | 3.1 | data, data_spool, data_spool_each_rcpt, rcptto |
| [vctx:disconnect](lua.ref.vctx_disconnect "vctx:disconnect") – Disconnect the current session | [code], [message] | msys.core | 3.1 | any |
| [vctx:get](lua.ref.vctx_get "vctx:get") – Get the value of a context variable | type, key | msys.core | 3.5 | any |
| [vctx:recipient_list](lua.ref.vctx_recipient_list "vctx:recipient_list") – Return or set the current recipient list | [addresses] | msys.extended.vctx | 3.1 |   |
| [vctx:remove_recipient](lua.ref.vctx_remove_recipient "vctx:remove_recipient") – Removes an address (which may be a table representing multiple addresses) from the recipient list | address | msys.extended.vctx | 3.1 | data, data_spool, data_spool_each_rcpt, mailfrom, rcptto |
| [vctx:set](lua.ref.vctx_set "vctx:set") – Set the value of a context variable | type, key, value | msys.core | 3.5 | any |
| [vctx:set_code](lua.ref.vctx_set_code "vctx:set_code") – Sets the inbound disposition and response message | codenum, message | msys.core | 3.1 | any |
| [vctx:tarpit](lua.ref.vctx_tarpit "vctx:tarpit") – Issues a time cost on the inbound session, if supported by the listener (currently only SMTP supports this) | interval | msys.extended.vctx | 3.1 | connect |

|     |     |     |
| --- | --- | --- |
| [Prev](lua)  | [Up](lua.php) |  [Next](lua.function.details.php) |
| Chapter 15. Lua Function Reference  | [Table of Contents](index) |  15.2. Lua Functions |
