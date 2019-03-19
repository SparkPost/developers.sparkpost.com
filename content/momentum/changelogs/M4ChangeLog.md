<div id="changelog">
<h1>Momentum 4.x Change Log</h1>

<table class="sidebar">
	<tr><th>Quick Links</th></tr>
  <tr><td><a href="#4.3.0">Momentum 4.3.0 released on 2019-03-31</a></td></tr>
  <tr><td><a href="#4.2.38">Momentum 4.2.38 released on 2018-01-05</a></td></tr>
  <tr><td><a href="#4.2.31">Momentum 4.2.31 released on 2017-06-29</a></td></tr>
  <tr><td><a href="#4.2.28">Momentum 4.2.28 released on 2017-01-20</a></td></tr>
  <tr><td><a href="#4.2 HF14">Momentum 4.2 Hotfix 14 released on 2016-09-27</a></td></tr>
  <tr><td><a href="#4.2 HF12">Momentum 4.2 Hotfix 12 released on 2016-06-01</a></td></tr>
  <tr><td><a href="#4.2 HF11">Momentum 4.2 Hotfix 11 released on 2016-01-06</a></td></tr>
  <tr><td><a href="#4.2 HF5">Momentum 4.2 Hotfix 5 released on 2015-10-07</a></td></tr>
  <tr><td><a href="#4.2 HF4">Momentum 4.2 Hotfix 4 released on 2015-10-02</a></td></tr>
  <tr><td><a href="#4.2">Momentum 4.2 released on 2015-08-03</a></td></tr>
  <tr><td><a href="#4.1.0 HF4">Momentum 4.1.0 Hotfix4 released on 2015-01-20</a></td></tr>
  <tr><td><a href="#4.1.0 HF2">Momentum 4.1.0 Hotfix2 released on 2014-11-07</a></td></tr>
  <tr><td><a href="#4.1.0">Momentum 4.1.0 released on 2014-10-03</a></td></tr>
  <tr><td><a href="#4.0.0">Momentum 4.0.0 released on 2014-04-30</a></td></tr>
</table>

<h2> <a name="4.3.0">Momentum 4.3.0 released on 2019-03-31 (Depending on installation type, all changes may not be applicable)</a></h2>
<ul>
<li>Feature: MO-7806 - Added support for DSN for outbound messages.</li>
<li>Feature: SD-258  - Updated the "hot domains" configuration to the current top 20 domains.</li>
<li>Feature: SD-13   - Upgraded sqlite to address vulnerability cve-2018-8740.</li>
<li>Feature: TR-738  - Added X-MSYS-ASYNC-GEN header field to enable async message generation for single-recipient messages.</li>
<li>Feature: SD-598  - Modified OpenDKIM to enable signing of messages with long (>1024 characters) lines in their message bodies.</li>
<li>Feature: SD-171  - Updated third party packages (gmp, nettle, and gnutls) to latest versions for performance and security fixes.</li>
<li>Feature: SD-179  - Updated third party package (jemalloc) to latest version for performance and security fixes.</li>
<li>Feature: TR-3    - Added sending of DSN delivery notifications for delivery "SUCCESS" and temporary fails "DELAY" options.</li>
<li>Feature: MO-7502 - Updated Rollup MX cache when DNS changes.</li>
<li>Feature: SD-338  - Patched OpenDKIM to fix a parsing bug that resulted in failed DKIM validation of some messages.</li>
<li>Feature: SD-373  - Fixed OpenDKIM canonicalization bug that resulted in faulty header signature calculations for some messages.</li>
<li>Feature: SD-445  - Corrected ILF logger message count to ignore messages transferred with mmove.</li>
<li>Feature: SD-626  - Changed SPF validation to support multiple or recursive redirects.</li>
<li>Enhancement: MO-5874 - Added msys-role-mta-versioned meta rpm for rpm install/upgrade not using yum.</li>
<li>Enhancement: MO-5407 - Removed support for the Momentum 4.0 APIs (v0 APIs).</li>
<li>Enhancement: MO-7690 - Added tls_fallback_always_new_connection config option to force a new connection when remote server rejects the STARTTLS request (default = true).</li>
<li>Enhancement: MO-6913 - Added Milestone entries to the Paniclog for system start, stop, and configuration reload.</li>
<li>Enhancement: MO-7721 - Added logging of console command executions (CONSOLE type, INFO level, off by default).</li>
<li>Enhancement: SD-217  - Set TLS connection context variables unconditionally.</li>
<li>Enhancement: SD-237  - Improved memory allocation tracking for fixed size allocations.</li>
<li>Enhancement: SD-252  - Added details of thread to logging of event state errors.</li>
<li>Enhancement: SD-209  - Changed adaptive log outputs to reduce confusion.</li>
<li>Enhancement: SD-299  - Moved adaptive delivery periodic check off of the master scheduler thread.</li>
<li>Enhancement: SD-315  - Made HTTP Client resistant to missing HTTP response string.</li>
<li>Enhancement: TR-775  - Added thread name to trace file entries.</li>
<li>Enhancement: TR-146  - Added ability to tune the frequency of spare Lua thread cleanup.</li>
<li>Enhancement: TR-299  - Added trace block_mutators statistics logging and added a new ec_console "scriptlet threads stats" section.</li>
<li>Enhancement: TR-323  - Disabled unnecessary Lua garbage collection to improve API latency.</li>
<li>Enhancement: TR-102  - Fix incorrect 500 error code in case of transmissions API input not formatted as a json object.</li>
<li>Enhancement: TR-287  - Ensured that all caches have names and appear in the "cache list all" console command's output.</li>
<li>Enhancement: TR-96   - Removed the obsolete pre_gen_sched configuration setting in favor of the msg_gen scheduled_send setting.</li>
<li>Enhancement: TR-222  - Improved efficiency of mail queue hooks in Lua by allowing reuse of Lua threads.</li>
<li>Enhancement: TR-603  - Defered creation of Lua threads until job start.</li>
<li>Enhancement: TR-700  - Limited time spent cleaning up Lua Interned variables.</li>
<li>Enhancement: TR-701  - Removed some unused distributed message generation code.</li>
<li>Enhancement: TR-834  - Added inclusion of dns-cache statistics in Gimli traces.</li>
<li>Enhancement: TR-957  - Added configuration option (templates list_limit) to Limit the number of returns from the Templates API list operation.</li>
<li>Enhancement: SD-138  - Added console command to reset threadpool statistics.</li>
<li>Enhancement: SD-147  - Renamed is_scheduler_thread() to is_master_scheduler() and is_a_scheduler_thread() to is_event_loop() to limit confusion. The is_scheduler_thread function is maintained for backward compatibility, but will generate a compiler warning when used.</li>
<li>Enhancement: SD-155  - Changed log messages to distinguish between message expiration and message exceeded max retries.</li>
<li>Enhancement: SD-2    - Added callback thread name to the output of the "threads cpu queue" ec_console command.</li>
<li>Enhancement: SD-56   - Added configuration option (Max_Resident_Messages_Per_Binding) as a default limit setting for all bindings.</li>
<li>Enhancement: SD-591  - Added logging of the MX in delivery events.</li>
<li>Enhancement: SD-66   - Added an API to the DSN module to enable custom code rewrite/add/get/remove of recipient addresses and to enable copying of DSN recipient options to another message.</li>
<li>Enhancement: TR-121  - Added "threads busy" and "threads &lt;pool&gt; stats" commands to ec_console.</li>
<li>Enhancement: TR-147  - Added additional information to the output of the "scriptlet threads stats" command in ec_console.</li>
<li>Enhancement: TR-151  - Added "warn_on_long_gc_msec" option to the scriptlet module to enable logging to the paniclog when Lua garbage collection takes too long.</li>
<li>Enhancement: TR-153  - Enhanced gstack script to show threadpool and event loop names.</li>
<li>Enhancement: TR-161  - Moved Lua thread destruction into a separate threadpool to reduce master thread lock contention.</li>
<li>Enhancement: TR-162  - Changed Lua thread destruction to move inherited objects into separate threads, rather than the master thread to limit garbage collection lock time.</li>
<li>Enhancement: TR-166  - Added ability to suppress inclusion of a list of idle or uninteresting callstack signatures in gstack_ecelerity.</li>
<li>Enhancement: TR-168  - Changed Lua thread management to force thread destruction in msg_gen.</li>
<li>Enhancement: TR-205  - Improve efficiency of synchronous message generation to reduce API latency.</li>
<li>Enhancement: TR-210  - Improve efficiency of asynchronous message generation to reduce API latency.</li>
<li>Enhancement: TR-211  - Share template content lua function handles between transmissions and msg_gen to increase efficiency.</li>
<li>Enhancement: TR-229  - Included ecelerity version in Milestone: Startup beginning log statement.</li>
<li>Enhancement: TR-280  - Improved efficiency of link rendering.</li>
<li>Enhancement: TR-301  - Optimize Lua String Interning to only act on short strings.</li>
<li>Enhancement: TR-59   - Shut down listeners earlier in shutdown process to prevent accepting new connections during shutdown.</li>
<li>Enhancement: TR-203  - Transmission API latency improvements.</li>
<li>Enhancement: SD-114  - Include the msys-opendkim-devel package in release bundles.</li>
<li>Fix: MO-6817 - Convert bare &lt;CR&gt; to &lt;CR&gt;&lt;LF&gt; in text and html contexts prior to DKIM signing.</li>
<li>Fix: MO-7474 - Corrected initial_open HTML content to address spacing and pre-header issues.</li>
<li>Fix: MO-7159 - Fixed display of the Ecelerity version in ec_console.</li>
<li>Fix: MO-7575 - Removed use of non-existent "validate_accept" hook that resulted in paniclog messages.</li>
<li>Fix: MO-7567 - Fixed memory leak when using the 'msys.dnsLookup' Lua API with Momentum.</li>
<li>Fix: MO-7741 - Fixed incorrect rejection logging when sender keeps connection open after sending, but sends no more messages.</li>
<li>Fix: MO-7827 - Add config option for message generation's maximum reuse of a Lua thread, default == 400.</li>
<li>Fix: MO-7779 - Corrected logging of negative time values for the time the message spent enqueued.</li>
<li>Fix: MO-7885 - Removed trailing NULL byte from SMTP PLAIN Auth.</li>
<li>Fix: SD-197  - Fixed unbound DNS crash when processing long domain names.</li>
<li>Fix: SD-233  - Fixed bug that caused messages to be put into delay queue when auth changes on an outbound connection.</li>
<li>Fix: SD-169  - Corrected issue where adaptive delivery could attempt an expired message.</li>
<li>Fix: SD-126  - Corrected a bug which could cause a suspended message being retried before suspension expiration time.</li>
<li>Fix: SD-194  - Corrected bug where bounce_pattern was being ignored when bounce_domains matched.</li>
<li>Fix: SD-310  - Corrected race condition in SPF parser.</li>
<li>Fix: SD-318  - Fixed infinite loop in adaptive delivery.</li>
<li>Fix: SD-328  - Fixed memory leak in event handling.</li>
<li>Fix: SD-342  - Corrected handling of boolean options in X-MSYS-API header.</li>
<li>Fix: SD-308  - Fixed a Lua error that resulted in crashes when calling into Lua core_log_rejection hooks.</li>
<li>Fix: SD-463  - Fixed issue with "config reload" when tls_session_reuse module is loaded.</li>
<li>Fix: SD-589  - Fixed an issue resulting in some messages being retried multiple times at expiration time.</li>
<li>Fix: SD-595  - Changed "milestone" logging in the panic log to "Notice" rather than "Error" level.</li>
<li>Fix: TR-273  - Prevent scenario where ecelerity Lua garbage collection can deadlock.</li>
<li>Fix: TR-353  - Prevented global trace from beginning before a previous garbage collection has completed.</li>
<li>Fix: MO-7255 - Make rerouting an enqueued message in smpp module supercharger compatible.</li>
<li>Fix: SD-356  - Fixed a potential crash when email gets rerouted.</li>
<li>Fix: MO-7189 - Fixed a bug that could result in an attempt to close a connection twice.</li>
<li>Fix: SD-134  - Fixed a bug where adaptive delivery wasn't respecting adaptive_positive_adjustment_interval.</li>
<li>Fix: SD-160  - Fixed SMTP Outbound AUTH for PLAIN type on connection re-use.</li>
<li>Fix: SD-20   - Unconditionally reset the connection context variables when re-using a TLS session.</li>
<li>Fix: SD-21   - Fixed adaptive delivery handling of the outbound_throttle_messages setting.</li>
<li>Fix: SD-212  - Fixed buffer overflow crash caused by very long from domain name in feedback loop messages.</li>
<li>Fix: SD-63   - Fixed a bug that could result in re-using connections for messages with differing credentials.</li>
<li>Fix: SD-65   - Fixed adaptive rule override so that custom "augment" mode doesn't override system rules.</li>
<li>Fix: SD-75   - Fixed unintentional "flooring" of queue time in mainlog entries that resulted in decimal fraction always being "00".</li>
<li>Fix: SD-93   - Added setting of correct error code when an Out Of Band message is blackholed.</li>
<li>Fix: TR-1014 - Fixed Gimli "unable to read 8 bytes at &lt;address&gt;" errors.</li>
<li>Fix: TR-1022 - Changed Glider thread numbering to start at 1.</li>
<li>Fix: TR-163  - Fixed threadpool annotation in gstack_ecelerity to deal with 4 digit PIDs.</li>
<li>Fix: TR-181  - Fixed ectop thread sorting so that CPU usage is shown in the correct order.</li>
</ul>

<h2><a name="4.2.38">Momentum 4.2.38 released on 2018-01-05 (Depending on installation type, all changes may not be applicable)</a></h2>
<ul>
<li>Feature Epic: PGM-797: Allow Event Webhooks to be sent with custom headers.</li>
<li>Feature: MO-6342: Log transmission generated events (internally only, no webhooks) for asynchronous transmissions.</li>
<li>Feature: MO-6679: Include recipient list ID in transmission events in a "rcpt_list_id" field.</li>
<li>Feature: MO-6864: Momentum RPMs are now signed. Available key allows confirmation.</li>
<li>Feature: MO-6324: Log stack backtrace for Lua errors in REST APIs.</li>
<li>Feature: MO-7050: Support DKIM signature expiration in Lua (DKIM module).</li>
<li>Feature: MO-6107: Provide legacy APN event logger to produce same logs when using APNs HTTP/2 module.</li>
<li>Feature: MO-7277/7349: Include the latest published Adaptive Delivery and Bounce rules.</li>
<li>Feature: MO-5874: Ooptional msys-role-mta-versioned RPM has exact versions of all dependent RPMs.</li>
<li>Enhancement: MO-7161: Include number of rejected and successful recipients in transmission generation event (internally only, no webhooks).</li>
<li>Enhancement: REI-324: Vertica version is updated from 7.1 to 7.2 (full-feature only).</li>
<li>Enhancement: MO-6636: Reduce grace period on deleted/expired transmissions by campaign from 10d to 2d.</li>
<li>Enhancement: MO-6645: Clarify the temp fail log message when domain's mail servers cannot be reached.<br/>
Before: 4.4.0 [internal] no MXs for this domain could be reached at this time.<br/>  
After:  4.4.0 [internal] no mail servers for this domain could be reached at this time.</li>
<li>Enhancement: MO-6712: Improve paniclog messages for cluster peer node communication problems (msgc_server).</li>
<li>Enhancement: MO-6788: Improve SMPP paniclog messages.</li>
<li>Fix: MO-6192: Fixed most cases of holding onto the old MX when 'mx rollup' used to change a domain's MX (some edge cases remain).</li>
<li>Fix: MO-7057: Fix a potential crash scenario (OOB bounce message with empty MIME part).</li>
<li>Fix: MO-7086: Fix a potential crash scenario (writing past allocation in HTML/XML save code).</li>
<li>Fix: MO-6879: Add config option to abort ecelerity startup if listeners fail to initialize, which would result in nodes taking traffic without clustering on.</li>
<li>Fix: MO-6938: Reduce delay time between scheduled message expiration and actual permfail action to seconds.</li>
<li>Fix: MO-6237: Consider combined length of header name and header value before folding.</li>
<li>Fix: MO-6740: Fix support for RFC 7505 (Null MX).</li>
<li>Fix: MO-6744: Fix false "throttle was exceeded" when outbound_throttle_connections is in both binding and domain scopes.</li>
<li>Fix: MO-6791/6944: Don't change SMTP body content only for non-ASCII characters present: change only as needed for tracking/unsub links.</li>
<li>Fix: MO-6863: Replace the SMTP username in Authentication-Results with "xxxx" to hide sensitive info.</li>
<li>Fix: MO-6926: Close vulnerability hole where ecelerity could be forced to crash via a crafted template.</li>
<li>Fix: MO-7096: Fix a potential crash scenario (endless retries of odbc_error function returning no info).</li>
<li>Fix: MO-7154: Ensure stale/expired AD rules get cleared from the database so can't cause incorrect suspensions.</li>
<li>Fix: MO-7162: Fix a potential crash scenario when Idle_Timeout = 0 in Supercharger mode.</li>
<li>Fix: MO-7274: Fix a potential crash scenario in the http2clnt module during heavy load.</li>
<li>Fix: MO-7316: Fix segment assembly of long SMS messages with 16bit data coding (e.g. UCS2).</li>
<li>Fix: MO-5800: REST JSON validation optimization to improve performance and avoid watchdog traces.</li>
<li>Fix: MO-6121: Prevent possibility of orphaned templates that can't be used or deleted.</li>
<li>Fix: MO-6241: Lua's AD msg:binding_group supports no args to return binding group for the message's binding.</li>
<li>Fix: MO-6706: Enable Connection ID to appear in custom rejection logs, same as in the Momentum rejectlog.</li>
<li>Fix: MO-6737: Fix potential for race condition in SMPP and SMTP module loading.</li>
<li>Fix: MO-6823: Prevent messages retrying even when a domain has no mx and no a records.</li>
<li>Fix: MO-7243: Fix a potential crash scenario when reusing an unassigned connection.</li>
<li>Fix: MO-4594: Ensure unique message IDs are assigned for each of multiple recipients of an email.</li>
<li>Fix: MO-5372: Optimize the Transmissions List All query method.</li>
<li>Fix: MO-6647: Fix a potential race condition in Lua scriptlet message.lua.</li>
<li>Fix: MO-6716: Improve error messages when rejecting substitution key names with unsupported characters.</li>
<li>Fix: MO-6783: Fix ec_logger leaking importlog files and file descriptors during log rotation.</li>
<li>Fix: MO-7192: The run.ecelerity script (foreground) will load any node-specific config, i.e. cluster.boot and environment files.</li>
<li>Fix: MO-7263: Fix crash scenario during DKIM validation on a signature with an empty algorithm field, "a=;".</li>
<li>Fix: MO-5288: Correct the BEIK reload_pool stack size at creation.</li>
<li>Fix: MO-5401: Fix crash behavior of Lua vctx:get on an object with a nil key.</li>
<li>Fix: MO-6953: Fix support for RFC 6376:3.4.3 (relaxed canonicalization) in DKIM module.</li>
<li>Fix: MO-7055: Fix a potential crash scenario (null pointer not checked before dereferencing).</li>
<li>Fix: MO-7171: Provide performance-enhancing config option to disable Lua usage stats collection by default.</li>
</ul>

<h2><a name="4.2.31">Momentum 4.2.31 released on 2017-06-29 (Depending on installation type, all changes may not be applicable)</a></h2>
<ul>
<li>Feature Epic: PGM-778 (part 1): Support Inline Generation, Engagement Tracking, SMTPAPI and Webhooks on RHEL7.</li>
<li>Feature Epic: PGM-778 (part 2): Support Inline Generation, Engagement Tracking, SMTPAPI and Webhooks without the Cassandra DB (with a reduced feature set).</li>
<li>Feature Epic: ENG-42: Remove transient data for immediate transmissions from Cassandra.</li>
<li>Feature: MO-6474: Support deeplinking for GCM.</li>
<li>Fix: MO-6387/MO-6501: Fix memory leaks found in valgrind debug tests.</li>
<li>Fix: MO-6351: Ensure the ILF Logger correctly counts deliveries for push notifications.</li>
<li>Fix: MO-6434: Fix issue in hot domains to prevent potential crashs on ecelerity restarts.</li>
<li>Fix: MO-6473: Prevent potential race condition in cidr_query when the cidrdb is queried while still being loaded.</li>
<li>Fix: MO-5077: Prevent double dot-stuffing in SMTPAPI.</li>
<li>Fix: MO-6386: Fix potential race condition during multi-segment message reassembly.</li>
<li>Fix: MO-6399: Fix reference number incrementing of outgoing long-SMS (segmented) messages.</li>
<li>Fix: MO-6437: Fix transmission API header injection vulnerability (disallow CRLF in recipient.address.name).</li>
<li>Fix: MO-6458: Fixed transmissions error due to nil element in recipient list validation.</li>
<li>Fix: MO-6460: Prevent proxy modules crashes during DNS failures.</li>
<li>Fix: MO-6623: Prevent multi-line rfc2047 header corruption due to breaking up a UTF-8 character.</li>
<li>Fix: MO-4969/MO-6020: Properly rfc2047-encode unquoted non-ascii characters in address headers.</li>
<li>Fix: MO-6455: Fix crash when console command "scriptlet eval" is executed without providing the required parameters.</li>
<li>Fix: MO-6282: Fix crash when events remained on a thread connection that was switched to another thread.</li>
<li>Fix: MO-6609: Fix recently introduced issues flagged by Coverity debug tool.</li>
<li>Fix: MO-6357: Ensure connections get released when message fails to deliver on http2 connection.</li>
<li>Enhancement: MO-6552: Include next_attempt time in logged tempfail event.</li>
<li>Enhancement: MO-6562: Include failure reason in the logged event for messages in the delayed queue.</li>
<li>Enhancement: MO-5439: Standardize DB tables' grace periods to avoid issues with deleted record replicas ("tombstones").</li>
<li>Enhancement: MO-6441: Provide console command for Lua thread creation/reuse statistics.</li>
<li>Enhancement: MO-6322: Tempfail the first delivery attempt of a message suspended by Adaptive Delivery.</li>
<li>Enhancement: MO-6703: Increase default value for SWAPOUT thread pool concurrency from 5 to 20.</li>
<li>Enhancement: MO-6700: Include the latest published Adaptive Delivery and Bounce rules.</li>
<li>Enhancement: MO-6516: Enhance Lua logging during recipient list validation.</li>
<li>Enhancement: MO-6368: Update Cyren AV (née Commtouch) ctasd module to version 5.01.0000.1.</li>
<li>Enhancement: MO-6497: Add external_hostname config variable to allow overriding the hostname on outbound headers.</li>
<li>Enhancement: MO-6444: Destroy Lua threads inline to improve 'garbage collection' threadpool efficiency.</li>
<li>Enhancement: MO-6120: Refactored mobility loggers' timestamp macros to use a single common function.</li>
</ul>

<h2><a name="4.2.28">Momentum 4.2.28 released on 2017-01-20 (Depending on installation type, all changes may not be applicable)</a></h2>
<ul>
<li>MR Epic: see MR CL: 4.2.1.14 Maintenance Release: https://support.messagesystems.com/start.php?show=changelog&v=4#4.2%20HF14</li>
<li>MR Epic: see MR CL: 4.2.1.12 Maintenance Release: https://support.messagesystems.com/start.php?show=changelog&v=4#4.2%20HF12</li>
<li>MR Epic: see MR CL: 4.2.1.11 Maintenance Release: https://support.messagesystems.com/start.php?show=changelog&v=4#4.2%20HF11</li>
<li>MR Epic: see MR CL: 4.2.1.5 Maintenance Release: https://support.messagesystems.com/start.php?show=changelog&v=4#4.2%20HF5</li>
<li>MR Epic: see MR CL: 4.2.1.4 Maintenance Release: https://support.messagesystems.com/start.php?show=changelog&v=4#4.2%20HF4</li>
<li>Feature Epic: ENG-27: Switch to DataStax C/C++ Driver for C* for better perfomance and features</li>
<li>Feature Epic: PGM-176: Allow the user to include attachments with a transmission</li>
<li>Feature Epic: PGM-261: Support Momentum 4 on RHEL7 OS; deprecate support for Momentum 4 on RHEL5</li>
<li>Feature Epic: PGM-409: Provide message source traceability</li>
<li>Feature Epic: PGM-457: Support iOS Universal Links</li>
<li>Feature Epic: PGM-473: Major improvements to Mobile Push Code: higher volumes, larger payload size and tokens, etc</li>
<li>Feature Epic: PGM-545: Increase Push payload size</li>
<li>Feature Epic: PGM-554: Fully support Push Notifications through the Transmissions API</li>
<li>Feature Epic: PGM-555: BETA: Support HTTP/2 protocol for sending Mobile Push Notifications via APNs</li>
<li>Feature: MO-3369: Incorporate error-checking for the day of the month passed into a scheduled transmission</li>
<li>Feature: MO-3689: Make click-tracking URL metadata size configurable</li>
<li>Feature: MO-4205: Add the sp-proxy rpm to the platform role</li>
<li>Feature: MO-4327: Implement cluster-wide unique ID per event in the event hose</li>
<li>Feature: MO-4393: Add message subject line to event hose</li>
<li>Feature: MO-4435: Add mo_origination context variable to inbound traffic accordingly to resolve targeted counting issue</li>
<li>Feature: MO-4765: Change username check (rest auth) for smtp injections to be case insensitive</li>
<li>Feature: MO-4843: Provide actionable error message when SMTP AUTH LOGIN is not attempted on port 587 injections</li>
<li>Feature: MO-4853: Add inj_tls flag to SMTP transmission_creation events</li>
<li>Feature: MO-5011: Implement ability for html message content to pass through a css inliner transformation post-generation</li>
<li>Feature: MO-5418: Upgrade to valgrind memory debugging tool version 3.11</li>
<li>Feature: MO-6244: Upgrade DataStax driver and libuv library.</li>
<li>Fix: MO-3213: Fix SMTPAPI qp encoding producing message body lines > 1000 bytes in length</li>
<li>Fix: MO-3764: make invalid UTF-8 bytes be escaped or removed before logging</li>
<li>Fix: MO-3993: Show msg_gen rejection 'reason' string in sync transmission http response 'description' json field</li>
<li>Fix: MO-4022: Engagement Tracking: convert all protocol schemes to lowercase upon reading them from the configuration</li>
<li>Fix: MO-4211: Fix failure to dkim sign an email with rfc2047 encoded From header</li>
<li>Fix: MO-4213: Fix issues with gmail and hotmail on rfc2047 fully encoded From header</li>
<li>Fix: MO-4283: Provide inband event in event log for permanent failure due to malformed recipient email address</li>
<li>Fix: MO-4302: Prevent out-of-band bounces from generating two events, resulting in double counting</li>
<li>Fix: MO-4309: Remove pre-existing DKIM signatures before signing outbound messages</li>
<li>Fix: MO-4315: Fix Transmissions API hitting non-existent table upon deleting failed transmissions from transmission table</li>
<li>Fix: MO-4322: Fix SMTPAPI original and archive messages having different links</li>
<li>Fix: MO-4332: Fix for scenarios where non-UTF-8 data gets transmitted in relay webhooks json</li>
<li>Fix: MO-4337: Fix Engagement Tracker to properly handle tracked links that have been URI-encoded</li>
<li>Fix: MO-4367: Prevent crashes when using "tags: [ null ]"</li>
<li>Fix: MO-4370: Fix failure to opendkim sign an email with rfc2047 encoded From header</li>
<li>Fix: MO-4385: Remove extra '550' code from relay denied reason string</li>
<li>Fix: MO-4387: Include msys-cpan-Devel-GDB, which ec_runtests (in Developer Tools) now requires.</li>
<li>Fix: MO-4404: Fix remaining cases where 404 was being returned for other than when the main resource was unavailable</li>
<li>Fix: MO-4474: Ensure origination flag is provided in case where an OOB message is rejected before it's flagged as an OOB</li>
<li>Fix: MO-4528: Convert APN Push Notification "badge" code from string to number</li>
<li>Fix: MO-4595: Fix stoppage of Event data going into RabbitMQ when RabbitMQ is restarted</li>
<li>Fix: MO-4603: Prevent segfault triggered by oob_extract_orig_headers for a particular syntax in the OOB message</li>
<li>Fix: MO-4607: Fix race condition for Stored Recipient List occuring when user supplies the List ID</li>
<li>Fix: MO-4621: Fix corner-case of Event hydrant writing Invalid JSON when email subject starts with '[2]'</li>
<li>Fix: MO-4702: Allow periods in template names</li>
<li>Fix: MO-4779: Ensure hard tabs in subject field are json-encoded (escaped as "\t") in the events</li>
<li>Fix: MO-4789: Reset curl options for each request from msys.http.client, so a POST after a PUT will succeed.</li>
<li>Fix: MO-4805: Headers such as 'subject', 'from', and 'to' will be RFC2047-decoded and encoded as UTF-8 in event hose.</li>
<li>Fix: MO-4815: Allow SMTP injection with empty body instead of rejecting it</li>
<li>Fix: MO-4941: Include the latest published AD / Bounce rules with Momentum</li>
<li>Fix: MO-5002: Fix ordering of the Transmission Creation, Reception and Delivery events for synchronous transmissions</li>
<li>Fix: MO-5010: Ensure event type consistency for Push messages: permfails for message_events should have a type of 'inband'</li>
<li>Fix: MO-5024: The c-ares resolver for DNS requests will process DNAME records correctly</li>
<li>Fix: MO-5103:  Safely abort momentum startup if a scriptlet module init() function returns 'false'</li>
<li>Fix: MO-5138: Ignore substitution curly braces in SMTP injected message headers</li>
<li>Fix: MO-5169: Do not evaluate single curly braces as substitution expressions in SMTP bodies</li>
<li>Fix: MO-5287: Qualify all UPDATE's in sending-domains with "IF EXISTS" to mitigate race conditions</li>
<li>Fix: MO-5308: Fix remaining cases where 400 was being returned for 'system unavailable' instead of the proper 500</li>
<li>Fix: MO-5384: Prevent segfault during msg_gen recovery during ecelerity startup and a template fails to compile</li>
<li>Fix: MO-5390: Repair memory leak in template compilation when dynamic substitutions fail</li>
<li>Fix: MO-5415: Fix buffer overrun in mo_write_rabbitmq_ext_init while processing the "skip_events" configuration option</li>
<li>Fix: MO-5424: Fix rendering for preview failure when we have  links in the dynamic content</li>
<li>Fix: MO-5448: Make MIME parser case-insensitive for the "boundary" parameter name</li>
<li>Fix: MO-5476: Fix msys.http.client was handling HTTP response headers with case-sensitivity</li>
<li>Fix: MO-5480: Fix cases where 5xx was being returned for template validation errors instead of the proper 4xx code</li>
<li>Fix: MO-5488: Don't rebuild engagement_tracker tags cache when maximum 100 tags is reached; increase TTL to 10 minutes</li>
<li>Fix: MO-5516: Fix Momentum APIs timeouts caused by leaking C* connections in recovery path</li>
<li>Fix: MO-5596: Fix scenarios where event hose was outputting incorrectly formatted JSON</li>
<li>Fix: MO-5656: Fix Memory leak in TLS</li>
<li>Fix: MO-5659: Fix Cloudmark anti-spam filter abort when recipient count exceeded 16</li>
<li>Fix: MO-5665: Permit headers to be defined in Push transmission content, not just for email messages</li>
<li>Fix: MO-5677: Upgrade the shipped Symantec CSAPI version to 10.0.4 HF01 to address security vulnerabilities</li>
<li>Fix: MO-5710: Fix lack of generation failure event when error encountered while compiling URL</li>
<li>Fix: MO-5715: Fix corner-case memory leak potential in the fbl module's error handling path</li>
<li>Fix: MO-5730: Fix cases where 5xx was returned instead of 4xx by previewer when content.from.email had subsitution syntax errors </li>
<li>Fix: MO-5742: Make SNMP compatible with Supercharger (multi-threading) </li>
<li>Fix: MO-5745: Fix pulling of adaptive updates via lu_pull through proxy</li>
<li>Fix: MO-5752: Enable Batching module to work with SuperCharger</li>
<li>Fix: MO-5799: Perform size estimation before JSON validation in order to reject oversize transmissions early</li>
<li>Fix: MO-5827: The msgpart:text function will only dot-stuff lines that are not already stuffed by the qp encoder</li>
<li>Fix: MO-5831: Remove unneccessary ecelerity package dependencies on system development packages</li>
<li>Fix: MO-5861: Raise log level of 'engagement_tracker: et_log_link() called with NULL array' from ERROR to INFO</li>
<li>Fix: MO-5889: Resolve the memory issue sometimes causing ecelerity crashes during shutdown before it can spool out</li>
<li>Fix: MO-5924: Ensure domain purge occurs as expected when DNS lookup fails continously and hits the defined limit</li>
<li>Fix: MO-5955: SMTPAPI does not check for proper character encoding in the X-MSYS-API header</li>
<li>Fix: MO-5960: Make using TCP for DNS the default, as now more common for size of TXT records to exceed the UDP maximum</li>
<li>Fix: MO-5963: Fix race condition between resuming/closing idle connections</li>
<li>Fix: MO-5994: Fix outbound_smtp_auth module configuration broken because ECM file for it was empty</li>
<li>Fix: MO-6023: Fix memory leak when using TLS</li>
<li>Fix: MO-6027: Address security vulnerability by preventing using substitution expressions in headers to inject new headers</li>
<li>Fix: MO-6115: Enforce a maximum size for recipient substitution_data to prevent issues in the event-hose pipeline.</li>
<li>Fix: MO-6179: Repair support for using "*" as a bind_address</li>
<li>Fix: MO-6181: Fix segmented SMPP messages getting discarded if the segments went to different nodes</li>
<li>Fix: MO-6219: Ensure an ecelerity shutdown waits for active threadpool jobs to complete.</li>
<li>Fix: MO-6236: Switch to using GNUTLS for SMPP over TLS instead of OpenSSL</li>
<li>Fix: MO-6249: Provide api_webhooks.conf file in sample-configs/nginx</li>
<li>Fix: MO-6302: Fix invalid event-hydrant JSON from messages with json object subject that mixes single and double quotes</li>
<li>Fix: MO-6312: Fix 1-segment SMS delivery problem when config value is set that also allows long messages</li>
<li>Enhancement: MO-4497: Suppress creation of memory-mapped files for single-recipient, scheduled transmissions until time of generation </li
<li>Enhancement: MO-4503: Process start_time "now" scheduled mailing like an immediate mailing</li>
<li>Enhancement: MO-4551: Provide additional logging for AD when we execute a rule-triggered suspension</li>
<li>Enhancement: MO-4571: Platform REST APIs will return an empty list with code 200 when message generation is not licensed</li>
<li>Enhancement: MO-5153: Treat scheduled start_time values in the past as "now" in the transmisions API</li>
<li>Enhancement: MO-5824: Make control command drb_dump support Supercharger mode</li>
<li>Enhancement: MO-6039: Support formatted timestamp in smpp_logger, gcm_logger and apns_logger</li>
<li>Enhancement: MO-6319: Add queue_time and num_retries to inband bounce events</li>
</ul>

<h2><a name="4.2 HF14">Momentum 4.2 Hotfix 14 released on 2016-09-27</a></h2>
<ul>
<li>Fix: MO-5555: Prevent invalid 'content-type' header longer than 256 bytes from causing Momentum to crash.</li>
<li>Fix: MO-5681: Provide support for 64 bit integers in Lua for Bloom filter calculation for suppression list.</li>
<li>Fix: MO-5673: Prevent static_routes host refresh from incurring undue memory consumption leading to OOM.</li>
<li>Fix: MO-5634: Change the 'No valid from' message in _spf_validate from an ERROR level message to DEBUG.</li>
<li>Fix: MO-5532: Prevent dkim_validate on an invalid domain name from causing Momentum abort.</li>
<li>Fix: MO-5466: Fix hook system to prevent trace files generated during 4.2.1.x regression test.</li>
<li>Fix: MO-5417: Re-order Sieve's and maildir's post-init runs to fix Sieve++ function ec_maildir.</li>
<li>Fix: MO-5341: Fix DKIM signing failure on transmission API injections which require dot stuffing.</li>
<li>Fix: MO-4259: Gracefully close the TCP connection following sending the "QUIT" command.</li>
<li>Fix: MO-4240: Fix transmission failure when stored recipient list has only 1 recipient.</li>
<li>Feature: MO-5636: Provide TLS Support for SMPP outbound connections.</li>
<li>Feature: MO-4890: Enable queuing of small REST transmissions into SQS, with no validation.</li>
<li>Improvement: MO-4553: Enable synchronous transmissions by default.</li>
<li>Improvement: MO-3986: Provide immortal Lua variables that survive config reload.</li>
</ul>

<h2><a name="4.2 HF12">Momentum 4.2 Hotfix 12 released on 2016-06-01</a></h2>
<ul>
<li>Fix: MO-5459: Change default APNS message expiration from 60 seconds to 7 days</li>
<li>Fix: MO-5145: Add %vctx_mess{x} macro support for apn_logger</li>
<li>Fix: MO-5130: Prevent crash due to connection closed during TLS handshake</li>
<li>Fix: MO-4982: Drop adaptive_sweep_rule bounce on bc:24; only action on code 10</li>
<li>Fix: MO-4847: Prevent crash seen in testing due to use-after-free on connection handle</li>
<li>Fix: MO-4845: Prevent crash seen in testing when changing adaptive_cache_size from zero</li>
<li>Fix: MO-4653: Fixed watchdog tracing during BEIK scanning</li>
<li>Fix: MR-1482: Skip DNAME records when resolving DNS lookups</li>
<li>Fix: MR-1470: Fixes issue in cert verification when hostname's first part and the common name differ</li>
<li>Fix: MR-1467: Fix issue of recipient count not being passed to cloudmark</li>
<li>Fix: MR-1366: Fix the "bursty" nature of SMPP throttles</li>
<li>Fix: MR-888:  Limit number of NOOPs processed per message to prevent connection buildup</li>
<li>Fix: MO-5487: Reduce DB tables' gc_grace_seconds from 10 days to 2 days</li>
<li>Fix: MO-5457: Provide missing alternate text attribute on open-tracking pixel</li>
<li>Fix: MO-5452: Correct the error code returned for unsupported methods in Engagement Tracking</li>
<li>Feature: MO-5437: Update the mobility packages versioning to facilitate upgrading across major versions</li>
<li>Fix: MO-5413: Prevent crash when hook for Lua module validate_dealloc returns an error</li>
<li>Feature: MO-5113: Update GCM module to extract the "To" field to get the device ID</li>
<li>Fix: MO-5340: Fix race condition when aggressive AD rules update same optval in two threads at once</li>
<li>Fix: MO-5319: Fix crash-inducing freed memory usage attempts in APN Push</li>
<li>Fix: MO-5175: Update specfile package dependencies for the changed msys-app-webhooks packages</li>
<li>Fix: MO-5161: Fix uninitialized memory access in converter.c (valgrind debug reported)</li>
<li>Fix: MO-5156: Make alerting module run on own threadpool to avoid contention in the CPU threadpool</li>
<li>Fix: MO-5137: Remove global variables in Lua code, some of which were not thread-safe</li>
<li>Feature: MO-5109: BETA: Include auth_pamd as part of the msys-ecelerity-beta module</li>
<li>Fix: MO-5019: Implement proper event hose logging of messages moved to a DuraVIP</li>
<li>Fix: MO-4980: Make alerting module run on own threadpool to avoid contention in the CPU threadpool</li>
<li>Fix: MO-4975: Fix double event hose logging of FBLs injected as OOBs, log only as FBL.</li>
<li>Fix: MO-4881: Ignore substitution curly braces in SMTP injected message bodies</li>
<li>Feature: MO-4567: Improve DB method for inline Template Insertion, to improve performance.</li>
<li>Fix: MR-1476: Fix issue where using leveldb with adaptive could cause DuraVIP loop</li>
<li>Fix: MR-1472: Fix outbound Xclient's peer server return code expectation</li>
<li>Fix: MR-1469: Fix TLS fall back behavior when sending to Microsoft domains</li>
<li>Fix: MO-5461: Include internal-use-only script for 4x uninstall in its own RPM in the repo</li>
<li>Feature: MO-5451: Improved logging from the httpcnt and generic_delivery modules</li>
<li>Fix: MO-5361: Fix potential inbound_audit deadlock cases</li>
<li>Feature: MO-5347: Upgrade gnutls to 3.3.22 to support Application-Layer Protocol Negotiation (ALPN)</li>
<li>Feature: MO-5131: include canonical_ids returned from call to GCM in webhooks</li>
<li>Fix: MO-5146: Fix failure to free json object when APN delivery fails</li>
<li>Feature: MO-5155: Do not set default optional "sound" in APN payload</li>
<li>Fix: MO-5158: Fix invalid memory write upon Push disconnect (valgrind debug reported)</li>
<li>Feature: MO-5104: Increase maximum APN Push payload size from 256 to 2048 bytes</li>
<li>Feature: MO-5167: Enhance static route module to work for Mobile Push</li>
<li>Feature: MO-5093: Add support for XSETCONTEXT2 ESMTP extension</li>
<li>Fix: MR-1453: Fix SMPP in receiver mode to send deliver_sm_resp</li>
<li>Feature: MO-4800: Update console and UI copyright</li>
<li>Fix: MR-1389: Make SMPP protocol ID configurable; confirm proper default value</li>
<li>Fix: MO-4989: Correct the error code returned for unsupported PUT on Transmissions API</li>
<li>Fix: MO-4892: Add NULL usage checks in adaptive_backstore_riak</li>
<li>Fix: MO-4102: Fix High Impact Issues flagged by Coverity debug tool in 4.x: Round 4</li>
<li>Feature: MO-3502: Make LevelDB the default backing store for AD, instead of Riak</li>
<li>Fix: MR-1484: Fix memory leak in TLS Diffie-Hellman parameter association with TLS sessions</li>
<li>Feature: MR-1218: Implement roll-up of domains with common MXs</li>
<li>Feature: PKG-260: Bump jemalloc version</li>
</ul>
<h2><a name="4.2 HF11">Momentum 4.2 Hotfix 11 released on 2016-01-06</a></h2>
<ul>
<li>MR-1376: adds a 'skip_hosts' conf option to allows skipping MX servers</li>
<li>MO-4531: JSON decode errors will no longer return a DB 500 error</li>
<li>MR-1446: Engagement tracker will now understand tracked links that are URI encoded</li>
<li>MR-1443: Makes RabbitMQ reconnect on restart</li>
<li>MO-4608: Removes lua globals</li>
<li>MR-1442: Enables UTF-8 characters in REST API</li>
<li>MO-4574: Adds SMS to event hose</li>
<li>MR-1456: Fixes address_parse_cache memory leak</li>
<li>MR-1457: Backports thrlua and json-c packaging changes</li>
<li>MO-4613: Adds cassandra auth </li>
<li>MO-4627: Adds attachments via transmissions API</li>
<li>MR-1463: Fixes memory corruption in scope logger</li>
<li>MR-1462: Fixes buffer overflow in IDN module</li>
<li>MR-1428: Enhances adaptive cache performance</li>
<li>MR-1433: Optionally enables aggressive adaptive throttling</li>
</ul>
<h2><a name="4.2 HF5">Momentum 4.2 Hotfix 5 released on 2015-10-07</a></h2>
<ul>
<li> Fix: double free in dns cache </li>
</ul>
<h2><a name="4.2 HF4">Momentum 4.2 Hotfix 4 released on 2015-10-02</a></h2>
<ul>
<li> Feature: IPv6 RBLDNSD support </li>
<li> Feature: SMTP server to server authentication </li>
<li> Feature: Lua module to support UTF8/IDN conversions</li>
<li> Feature: IPv6 dns support is no longer beta </li>
<li> Fix: DKIM will no longer break under supercharger</li>
<li> Fix: Lua crash when using curl </li>
<li> Fix: race condition in custom logger </li>
<li> Fix: Event hose is now feeding adaptive events to the web UI </li>
<li> Fix: DNS cache will now NULL pointers to freed cache node memory </li>
<li> Fix: Edge case in cluster throttles causes divide by zero error </li>
<li> Fix: Opportunistic TLS will now work with the outbound_tls_parameters hook </li>
<li> Fix: 'nodata' responses to MX lookups are now handled properly by the built in unbound resolver </li>
<li> Fix: Several memory leaks in the cluster config system and dns cache </li>
<li> Fix: Domain specific bounce classifications now work in supercharger </li>
<li> Fix: dns_cache_lookup_wait will no longer cause memory leaks</li>
<li> Fix: bundled ICU is now version 55_1</li>
<li> Fix: Due to a known conflict with duravips, auto-replumber is now off by default</li>
</ul>
<h2><a name="4.2">Momentum 4.2 released on 2015-08-03</a></h2>
<ul>
<li> Feature: Scheduled Generation - create and delete scheduled transmissions. </li>
<li> Feature: Recipient List Atomic Replacement - replace existing recipient lists by specifying the existing list's list_id </li>
<li> Feature: CC, BCC, and Archive capability added to SMTP API </li>
<li> Feature: Configurable preference to send over IPv6 </li>
<li> Feature: Ability to view, sort and filter details for bounces, rejection, and delay reasons by domain (ISP) </li>
<li> Feature: SMTP Authentication module via API key </li>
<li> Feature: Push (APNS, GCN) notification in webhooks </li>
<li> Feature: Message Generation – per node generation </li>
<li> BETA: Inbound Relay Webhooks - set up an inbound domain that allows inbound replies or email messages coming into that domain via SMTP to be transformed into JSON and relayed to an HTTP endpoint</li>
<li> Fix: Added line number, part, and description to template REST API substitution errors to help aid in debugging templating logic.</li>
<li> Fix: Added support in the REST API for click tracking of URLs (http and https schemes) that exist entirely in recipient substitution data. </li>
<li> Fix: Added support in the REST API for disabling URL encoding of substitution values by using triple curly brace syntax in templates.</li>
<li> Fix: The FBL format has changed in 4.2. Messages generated with an X-MSFBL header now encode an HMAC (hash style message authentication code) as part of the outbound X-MSFBL header.</li>
<li> Fix: Provide a JSON key "ip_address" to click and open events indicating the source IP of the click/open.</li>
<li> Fix: We now include a non-canonicalized bounce reason in events in a JSON key called "raw_reason".</li>
<li> Fix: APNS and GCM message events have been added to the event hose. </li>
<li> Fix: Template rendering gen_fail events now include the template rendering error string in the JSON key called "reason".</li>
<li> Fix: For the inbound relay processing that is included as a Beta Feature, we now have relay_events in the event hose.</li>
</ul>

<h2><a name="4.1.0 HF4">Momentum 4.1-HF4 released on 2015-1-20</a></h2>
<ul>
<li> Feature ticket MO-3300 : All message events include recipient detail. </li>
<li> Feature ticket MO-3267 :  The recipient address is included in click and open URLs and, subsequently, will be included in all click/open events. </li>
<li> Feature ticket MO-2957 : Metadata is included, by default, as part of click-tracking (already existed in open 
tracking). This may be turned off in configuration. </li>
<li> Feature ticket MO-3559 : The jemalloc package was upgraded to version 3.6. </li>
<li> BETA Feature ticket MO-3159 : Tags, metadata and campaign IDs may be included in SMTP injections via special headers and, subsequently, available in message events. </li>
<li> BETA Feature ticket MO-3147 : Engagement tracking is available for SMTP injections. </li>
<li> Fix MR-1117 : Fixed a defect associated with substitution data that is contained in a JSON array. </li>
<li> Fix MR-1098 : Fixed a defect associated with invalid recipient data as part of substitution data. </li>
<li> Fix MO-3430 : Fixed Substitution Engine failure when keywords are returned from macros.</li>
<li> Fix MO-3266 : Allow the header_to and name fields of a recipient to have different values (for purposes of a BCC). </li>
<li> Fix MO-3496 : Dates in generate_start_time and generate_end_time now have padded zeros in their values. For example, 'generation_start_time' => '2014-12-21 1:59:11+0000' now appears as 'generation_start_time' => '2014-12-21 01:59:11+0000'. </li>
</ul>


<h2><a name="4.1.0 HF2">Momentum 4.1 Hotfix2 released on 2014-11-07</a></h2>
<ul>
<li> Feature ticket MO-3186 : Add option to disable SSLv3 in OpenSSL to prevent POODLE attack for HTTP and SMTP </li>
<li> Feature ticket MO-3186 : Add DHE ciphers for SMTP TLS</li>
<li> Fix MO-3191:  Fixed tracking of opens and clicks that are older than one day.  Now support up to one year.</li>
<li> Fix MO-3219:  Fixed buffer overflow of links longer than 2083 bytes.  Issue warning about long URLs.</li>
<li> Fix MO-3247:  Fixed problem with the HTTP Generic Client that caused failure of messages over HTTP in certain circumstances.</li>
</ul>

<h2><a name="4.1.0">Momentum 4.1.0 released on 2014-10-03</a></h2>
<ul>
<li> Feature ticket MO-2724 :  Submit Transmissions with Stored Recipient Lists</li>
<li> Feature ticket MA-548:  Webhooks</li>
<li> Feature ticket MO-2747 :  Template API supporting transmissions using templates specifying text/plain and text/html MIME parts</li>
<li> Feature ticket MO-2850 :  TLS encryption for inbound and outbound SMTP using the GNUTLS library.</li>
<li> Feature ticket MO-2900 :  The ability to choose TLS encryption "opportunistically" with fallback to plaintext SMTP on TLS failure.</li>
<li> Feature ticket MA-831 :  FBL events for webhooks and reporting</li>
<li> Feature:  The Metrics API</li>
<li> Feature ticket MO-2789 :  A refactored REST API that includes authentication.</li>
<li> Fix MO-3177 :  Fixed postgres config file pg_hba.conf so that it supports wildcard IPv6 connections.</li>
<li> Fix MO-3148 :  Set the appropriate hostnames for analytics and platform nodes in a configuration file to run certain cronjobs. </li>
<li> Fix MO-3140 :  Fixed installer so that only a log aggregator node will be labeled "Manager". </li>
<li> Fix MO-3129 :  Amend installer to support independent vertica and application roles.</li>
<li> Fix MA-1041 :  Fixed the permissions for the webhooks_batch_status cronjob.</li>
<li> Fix MA-1030 :  Fixed the version in the webui to reflect 4.1 rather than 4.0.</li>
</ul>

<h2><a name="4.0.0">Momentum 4.0.0 released on 2014-04-30</a></h2>
<ul>
<li>Feature ticket MO-1551: Message Generation in Momentum. Generate messages from a Inline/Stored Template with support for substitutions</li>
<li>Feature ticket MO-1327: A new RESTful API allowing for template creation, updating, viewing and listing</li>
<li>Feature ticket MO-1770: A new RESTful injection API allowing for transmission submission</li>
<li>Feature ticket MO-2106: Engagement Measurement. Track and report Opens and Clicks.</li>
<li>Feature ticket MO-1325: Event Hose with enhanced reporting data</li>
<li>Feature ticket MA: Reporting</li>
</ul>
</div>
