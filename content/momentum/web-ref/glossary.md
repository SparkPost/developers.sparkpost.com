| [Prev](acronyms)  |   |   |

## Glossary

<dl>

<dt><a name="gloss-arf"></a>Abuse Reporting Format (ARF)</dt>

<dd class="glossdef">

A standard format for communicating feedback reports about email abuse. See also [Section 14.34, “fbl – Feedback Loop Module”](modules.fbl "14.34. fbl – Feedback Loop Module").

</dd>

<dt><a name="gloss-acl"></a>Access Control List (ACL)</dt>

<dd class="glossdef">

A list of permissions associated with an object. Such a list usually specifies who is allowed to access which object(s) and the kinds of operations that are allowed. ACLs are used by Momentum's listeners.

</dd>

<dt><a name="gloss-arp"></a>Address Resolution Protocol (ARP)</dt>

<dd class="glossdef">

A networking protocol for determining a network host's link layer or hardware address when only its Internet (IP) or Network address is known. The console command **cluster arp show**          displays the MAC and IP addresses of the nodes in a cluster. See also [Media Access Control Address](glossary#gloss-mac "Media Access Control Address").

</dd>

<dt><a name="gloss-aaa"></a>Authentication, Authorization and Accounting (AAA)</dt>

<dd class="glossdef">

A network security acronym for authentication, authorization and accounting. A AAA process authenticates a user, authorizes a user to perform certain tasks and also logs activity for auditing purposes.

</dd>

<dt><a name="gloss-adsp"></a>Author Domain Signing Practises (ADSP)</dt>

<dd class="glossdef">

ADSP is an optional part of DKIM authentication that involves publishing a domain's signing practices. See also [Domain Keys Identified Mail](glossary#gloss-dkim "Domain Keys Identified Mail").

</dd>

<dt>Banner</dt>

<dd class="glossdef">

The initial message sent by a host MTA to a client upon connection, includes information such as MTA hostname, software name and version and the current server timestamp.

</dd>

<dt><a name="gloss-bind"></a>Berkeley Internet Name Domain (BIND)</dt>

<dd class="glossdef">

BIND is the most commonly used DNS server. BIND 9 is the newer version of this server.

</dd>

<dt>Binding</dt>

<dd class="glossdef">

A "virtual MTA" with its own separate sending IP address, EHLO hostname, queues and configuration.

</dd>

<dt>Binding Group</dt>

<dd class="glossdef">

A collection of bindings. When a message is assigned to the group it is assigned to a specific binding in round-robin order. Configuration can be done on the binding group level.

</dd>

<dt><a name="gloss-bounce"></a>Bounce</dt>

<dd class="glossdef">

A bounce is a Delivery Status Notification message that informs the sender of a problem with an email message or simply a message which is rejected by the receiving MTA. Bounces can occur for a number of reasons including poor sender reputation, spam filtering, invalid recipient, inactive account, etc. Messages can be bounced during delivery or after delivery through the use of DSN messages. A bounce that occurs during delivery is an in-band bounce and one that occurs after delivery is an out-of-band bounce. See also [Hard Bounce](glossary#gloss-hard-bounce "Hard Bounce") and [Soft Bounce](glossary.php#gloss-soft-bounce "Soft Bounce").

</dd>

<dt><a name="gloss-cbv"></a>Callback Verification</dt>

<dd class="glossdef">

See [SMTP Callback Verification](glossary#gloss-smtp-cbv "SMTP Callback Verification").

</dd>

<dt><a name="gloss-c14n"></a>Canonicalization (C14N)</dt>

<dd class="glossdef">

Within the context of email delivery, canonicalization describes the process of completing Mail-From addresses. Usually this takes the form of adding a domain name to a username to create a legitimate email address. "C14N" is used as a short form because there are 14 letters between the initial 'C' and the final 'N'. Within Momentum you can canonicalize bounce reasons using the **ec_rt_stats** `-c` option. In this case the bounce reasons are normalized for the purpose of aggregation. In version 3.0 the **ec_rt_stats2** command automatically normalizes bounce reasons.

</dd>

<dt><a name="gloss-cidr"></a>Classless Inter-Domain Routing (CIDR)</dt>

<dd class="glossdef">

This is a refinement to the way IP addresses are interpreted replacing the previous "classful" network paradigm.

</dd>

<dt><a name="gloss-csapi"></a>Content Scanning Application Programming Interface (CSAPI)</dt>

<dd class="glossdef">

Momentum's csapi module provides integration to Symantec's suite of content scanners.

</dd>

<dt><a name="gloss-ddl"></a>Data Definition Language (DDL)</dt>

<dd class="glossdef">

An SQL statement that defines a database object, a `CREATE TABLE` statement for example.

</dd>

<dt><a name="gloss-dml"></a>Data Manipulation Language (DML)</dt>

<dd class="glossdef">

An SQL statement used to INSERT, DELETE, UPDATE or SELECT. The **ec_rt_stats** command can output information in this format. In version 3.0, the cluster option `dml` has been made obsolete by the new stats gathering methods.

</dd>

<dt><a name="gloss-dsn"></a>Delivery Status Notification (DSN)</dt>

<dd class="glossdef">

A notification email sent to the original sender to inform them that their message has been bounced. This is also known as an out-of-band or asynchronous bounce and a Non-Delivery Report/Receipt (NDR). See also [Bounce](glossary#gloss-bounce "Bounce") and [Non-Delivery Receipt](glossary.php#gloss-ndr "Non-Delivery Receipt").

</dd>

<dt><a name="gloss-dha"></a>Directory Harvest Attack (DHA)</dt>

<dd class="glossdef">

Harvest email addresses by searching domains for valid recipients. This is done by sending randomly addressed messages to an email server.

</dd>

<dt><a name="gloss-dnsbl"></a>DNS Block List (DNSBL)</dt>

<dd class="glossdef">

Typically a list of IP addresses associated with spamming.

</dd>

<dt><a name="gloss-dkim"></a>Domain Keys Identified Mail (DKIM)</dt>

<dd class="glossdef">

An extension of the DK standard first introduced by Yahoo! Implemented using the same basic principle as DK but with greater granularity and potential for industry-wide adoption.

</dd>

<dt>ECStream</dt>

<dd class="glossdef">

A proprietary protocol for injecting messages into Momentum. Configuration files may include an ECStream Listener.

</dd>

<dt>EHLO</dt>

<dd class="glossdef">

An SMTP transaction (or conversation) begins with the connecting machine identifying itself to the host machine with EHLO, followed by the hostname of the connecting machine. Typically the connecting machine will compare the hostname provided with the RDNS entry for the connecting machine's IP address and may reject messages if it does not match.

</dd>

<dt><a name="gloss-esp"></a>Email Service Provider (ESP)</dt>

<dd class="glossdef">

A company that provides email services.

</dd>

<dt>Envelope</dt>

<dd class="glossdef">

Each message is actually composed of two parts, the Envelope and the message itself. The envelope contains the actual recipient of the message and the return path of the message. The sender and receiver in the envelope do not have to match the To: and From: headers in the message itself.

</dd>

<dt><a name="gloss.ext2"></a>ext2 or Second Extended File System</dt>

<dd class="glossdef">

This is a Linux file system. It gives better performance than ext3\. See also [ext4 or Fourth Extended File System](glossary#gloss.ext4 "ext4 or Fourth Extended File System")

</dd>

<dt><a name="gloss.ext4"></a>ext4 or Fourth Extended File System</dt>

<dd class="glossdef">

This is the Linux file system that succeeds ext3\. Because this file system uses journal checksumming, it is considered more reliable that ext2 and is the preferred file system for spooling.

</dd>

<dt><a name="gloss-fbl"></a>Feedback Loop (FBL)</dt>

<dd class="glossdef">

Feedback loop services are offered by many ISPs. Providers like Yahoo and others offer this service to qualified senders. The ISP sends a notification email to the sender every time that one of their users clicks on a “This is Spam” or “Report Abuse” type button. Qualified senders are required to maintain specific receiving addresses such as `abuse@domain.com`. Feedback loops are handled by the Momentum fbl module.

</dd>

<dt><a name="gloss-fcrdns"></a>Forward Confirmed Reverse DNS (FCrDNS)</dt>

<dd class="glossdef">

FCrDNS is a technique for matching a domain name against an IP address and then checking that IP address against the domain name. If the IP address returned resolves to the same domain name then the forward-reverse lookup is confirmed. FCrDNS can be used to perform a weak verification useful for creating a white list. See also [Pointer Records](glossary#gloss-ptr "Pointer Records").

</dd>

<dt><a name="gloss-fqdn"></a>Fully Qualified Domain Name (FQDN)</dt>

<dd class="glossdef">

A domain name that specifies the exact location of a device in the Domain Name System, one that uniquely identifies the host. When identifying nodes in the `mbus.conf` file you must not use the FQDN but the hostname, `node-1` rather than `node-1.lan`, for example.

As of version 3.4, the `mbusd.conf` file is no longer used. For more information see [Section 14.47, “msgc – Modules”](modules.msgc "14.47. msgc – Modules").

</dd>

<dt><a name="gloss-hard-bounce"></a>Hard Bounce</dt>

<dd class="glossdef">

This describes an email that has bounced back to the sender undelivered because it was not accepted by the recipient's mail server. See also [Soft Bounce](glossary#gloss-soft-bounce "Soft Bounce"), [Bounce](glossary.php#gloss-bounce "Bounce") and [Non-Delivery Receipt](glossary.php#gloss-ndr "Non-Delivery Receipt").

</dd>

<dt>Header</dt>

<dd class="glossdef">

First part of a message, contains metadata such as sender, recipient, subject, date and other deliver information.

</dd>

<dt>Inbound (or Outbound) Concurrency</dt>

<dd class="glossdef">

The number of concurrent (or parallel) connections either on an inbound or outbound MTA. The console command **summary** displays the current status of inbound and outbound concurrency.

</dd>

<dt><a name="gloss-ipc"></a>Inter-process Communication Sockets (IPC)</dt>

<dd class="glossdef">

IPC sockets provide two-way communication between different processes. Momentum cluster nodes communicate in this fashion.

</dd>

<dt><a name="gloss-icu"></a>International Component for Unicode (ICU)</dt>

<dd class="glossdef">

International Component for Unicode is a mature, portable set of C/C++ alibraries for Unicode support, software internationalization (I18N) and globalization.

</dd>

<dt><a name="gloss-ipv4"></a>Internet Protocol version 4 (IPv4)</dt>

<dd class="glossdef">

The most widely deployed protocol on the Internet. IPv4 addresses in dot-decimal notation are written in the following way `192.168.0.1`. IPv6 uses a much larger address and is the designated successor to IPv4.

</dd>

<dt><a name="gloss-ip-warmup"></a>IP Warmup</dt>

<dd class="glossdef">

The concept behind "IP Warmup" is that new IPs need to build a reputation with ISPs. For example, if you send 100,000 emails from a newly acquired IP address that has no history, most large ISPs will block email from this address. IP Warmup slowly increases the send rate on new IPs so that ISPs have time to gauge customer feedback. If there are minimal spam/abuse reports then the ISP will allow an increased send rate.

Sometimes an IP with a good reputation will accidentally send bad content and damage its own reputation. In such cases, it may be necessary to re-establish a good reputation by temporarily suspending sending, reducing the send rate, or by "re-warming" the IP address. With Momentum 3.0 this is achieved using the adaptive module. The adaptive module automatically sets any new bindings to "zero days old" and then slowly increase the send rate unless it starts seeing negative feedback. Should this happen, the adaptive module then throttles or temporarily suspends the IP address according to internal rules. For more information about the adaptive module see [Section 14.2, “adaptive – Adaptive Delivery”](modules.adaptive "14.2. adaptive – Adaptive Delivery").

</dd>

<dt><a name="gloss-ldap"></a>Lightweight Directory Access Protocol (LDAP)</dt>

<dd class="glossdef">

LDAP is an Internet protocol used by email and other programs for looking up information on a server. It is especially useful where fast lookups are required and where infrequent updates are the norm.

</dd>

<dt>Listener</dt>

<dd class="glossdef">

Entity that defines an IP/port combination that the MTA will respond to incoming requests across, along with configuration regarding server behavior specific to sessions across the listener and with regard to specific incoming clients.

</dd>

<dt><a name="gloss-lmtp"></a>Local Mail Transfer Protocol (LMTP)</dt>

<dd class="glossdef">

Local Mail Transfer Protocol is derived from SMTP and designed for situations where the receiving side does not have a mail queue. LMTP is an Internet protocol that uses TCP but must not use the well known SMTP port, 25.

</dd>

<dt><a name="gloss-lua"></a>Lua</dt>

<dd class="glossdef">

[Lua](http://www.lua.org/) is an embeddable scripting language used by Momentum as a replacement for Sieve. For a description of its advantages see [Section 5.2, “Implementing Policy Using Scriptlets”](implementing.policy.scriptlets "5.2. Implementing Policy Using Scriptlets").

</dd>

<dt><a name="gloss-mda"></a>Mail Delivery Agent (MDA)</dt>

<dd class="glossdef">

A server application that receives messages (typically via SMTP) and then delivers messages to end-user client applications using a protocol such as POP or IMAP.

</dd>

<dt><a name="gloss-mta"></a>Mail Transfer Agent (MTA)</dt>

<dd class="glossdef">

A server application that communicates using SMTP to receive and deliver messages via SMTP. An MTA accepts messages from end-user email clients and campaign management applications for delivery to external hosts but does not deliver messages to the end user.

</dd>

<dt><a name="gloss-mua"></a>Mail User Agent (MUA)</dt>

<dd class="glossdef">

An email client such as Thunderbird or Outlook.

</dd>

<dt><a name="gloss-mib"></a>Management Information Base (MIB)</dt>

<dd class="glossdef">

A MIB file is associated with Simple Network Management Protocol (SNMP) and is used for managing entities in a network. Momentum SNMP trap definitions are contained in the MIB file `OMNITI-SNMP-MIB.txt` found in the `docs` directory. See also [Simple Network Management Protocol](glossary#gloss-snmp "Simple Network Management Protocol").

</dd>

<dt><a name="gloss-mac"></a>Media Access Control Address (MAC)</dt>

<dd class="glossdef">

A MAC address is a unique identifier assigned to a network device such as a Network Interface card (NIC). Momentum software licenses are usually keyed to the MAC addresses of ethernet cards.

</dd>

<dt><a name="gloss-mdn"></a>Message Disposition Notification (MDN)</dt>

<dd class="glossdef">

A form of return receipt for email, typically an out-of-band notification of delivery failure. See also [Bounce](glossary#gloss-bounce "Bounce").

</dd>

<dt>Message Systems</dt>

<dd class="glossdef">

The producer of Momentum and provider of related support and services.

</dd>

<dt>Momentum for Sending</dt>

<dd class="glossdef">

A high performance MTA produced by Message Systems. Capable of high throughput and extensible with modules for tasks such as authentication, reputation and bounce processing. Customizable through the use of internal scripting languages and APIs/SDKs.

</dd>

<dt><a name="gloss-mime"></a>Multipurpose Internet Mail Extensions (MIME)</dt>

<dd class="glossdef">

The standard that specifies the format of messages so that they can be exchanged between different MTAs.

</dd>

<dt>MultiVIP© Interfaces</dt>

<dd class="glossdef">

MultiVIP© technology allows Momentum to transparently deliver different messages from different IP addresses. This is most commonly used when two or more customers are sending mail through a single Momentum instance and it is desirable (for quality of service reasons) for messages from each client to originate from unique IP addresses that have been assigned to them. See also [Network Address Translation](glossary#gloss-nat "Network Address Translation").

</dd>

<dt>MX Record</dt>

<dd class="glossdef">

A Mail exchanger record. A record in the DNS that determines how an email should be sent.

</dd>

<dt><a name="gloss-nat"></a>Network Address Translation (NAT)</dt>

<dd class="glossdef">

A networking technique for mapping multiple IP addresses to a single address. Momentum's MultiVIP© Interface uses a variant of this technique.

</dd>

<dt><a name="gloss-nas"></a>Network-Attached Storage (NAS)</dt>

<dd class="glossdef">

Networked file storage that can be accessed by network clients.

</dd>

<dt>Node</dt>

<dd class="glossdef">

Any machine used in a cluster configuration. This includes the manager and the MTAs. When installing a cluster configuration be sure to include the manager when asked to identify the nodes in the cluster.

</dd>

<dt><a name="gloss-ndr"></a>Non-Delivery Receipt (NDR)</dt>

<dd class="glossdef">

If an invalid email address is encountered, an NDR is sent to the sender. See also [Hard Bounce](glossary#gloss-hard-bounce "Hard Bounce").

</dd>

<dt>OmniTI</dt>

<dd class="glossdef">

Original creators of Message Systems Deliver Manager, Message Systems was originally a product division of OmniTI and became a separate company in 2008.

</dd>

<dt><a name="gloss-odbc"></a>Open Database Connectivity (ODBC)</dt>

<dd class="glossdef">

A standard API for accessing relational databases. Momentum ships with support for ODBC and unixODBC.

</dd>

<dt>Passive Mode</dt>

<dd class="glossdef">

Modules may be loaded in "passive" mode by setting `enabled` to false as shown in the following example:

```
antivirus "av" {
  enabled = false
...
}
```

This option is principally used with Validation modules. Modules loaded in passive mode will **not** have their validation hooks called automatically. Rather, the calls will be driven by a scriptlet associated with the module. For example, the `msys.expurgate.scan` function will drive the eleven module.

</dd>

<dt><a name="gloss-p0f"></a>Passive operating system (OS) fingerprinting (p0f)</dt>

<dd class="glossdef">

During network communication, passively collect information about the remote device with the intent of inferring the OS. Doing this makes improved TCP/IP communication possible. You must install the Policy Tools suite to enable p0f.

</dd>

<dt><a name="gloss-prce"></a>Perl Compatible Regular Expressions (PCRE)</dt>

<dd class="glossdef">

A C regular expression library modelled on the Perl regular expression library. This library is incorporated into a number of open-source projects.

</dd>

<dt><a name="gloss-ptr"></a>Pointer Records (PTR)</dt>

<dd class="glossdef">

A Pointer Record is used to map an IP address to a domain name. Using **dig -x *`ip_address`***                   will return the pointer record associated with the IP address. The pointer record is used in Forward Confirmed Reverse DNS. For more information see [Forward Confirmed Reverse DNS](glossary#gloss-fcrdns "Forward Confirmed Reverse DNS").

</dd>

<dt><a name="gloss-posix"></a>Portable Operating System Interface (POSIX)</dt>

<dd class="glossdef">

Portable Operating System Interface is the name of the group of standards for user and software interfaces. POSIX support ensures the portability of code across different operating systems.

</dd>

<dt>Postfix</dt>

<dd class="glossdef">

Open Source MTA often present on base OS installations. For example, it is included with SuSE distributions. It should be removed or disabled to prevent conflicts with Momentum. See also [Sendmail](glossary#gloss-sendmail "Sendmail").

</dd>

<dt><a name="gloss-pem"></a>Privacy Enhanced Mail (PEM)</dt>

<dd class="glossdef">

An Internet Engineering task Force proposal for securing email using public key encryption. PEM format keys are supported by OpenSSL. The file extension `pem` is used for PEM public key certificates.

</dd>

<dt>Process</dt>

<dd class="glossdef">

A single application running on a computer. Processes do not share resources (i.e. system memory) with other processes.

</dd>

<dt><a name="gloss-pra"></a>Purported Responsible Address (PRA)</dt>

<dd class="glossdef">

A PRA is determined by applying an algorithm to the `From, Sender, Resent-From` and `Resent-Sender` headers of an email.

</dd>

<dt>Queue</dt>

<dd class="glossdef">

A structured collection of messages awaiting delivery. All messages wind up in queues specific to a binding/ISP combination. Active queue holds messages that will deliver as soon as they reach the front of the queue, Delayed queue holds messages that are awaiting the end of their retry interval.

</dd>

<dt>rbldnsd</dt>

<dd class="glossdef">

`rbldnsd` is a small and fast DNS daemon designed specifically to serve DNS black list (DNSBL) zones. See also [Realtime Block List](glossary#gloss-rbl "Realtime Block List") .

</dd>

<dt><a name="gloss-rbl"></a>Realtime Block List (RBL)</dt>

<dd class="glossdef">

A list that can be checked in real time in order to detect email originating from spam hosts. The Spamhaus Project maintains one such list. See also [DNS Block List](glossary#gloss-dnsbl "DNS Block List").

</dd>

<dt><a name="gloss-rpm"></a>Redhat Package Manager (RPM)</dt>

<dd class="glossdef">

Used to manage the installation of components and applications on Red Hat Linux distributions and other Linux distributions that have adopted the system, for example CentOS. RPM files can be identified as files ending in `.rpm`. RPM files are found under the `packages` directory where you extracted the application tarball. These files take the following form: msys-ecelerity-ldap-*`TYPE.version.os.arch`*.rpm.

`version` indicates the version number and `type` can be one of `RECV`, `SEND` or `MOBI` for `Mobile Momentum`. Prior to version 3.0.23, the version indicator is always `1`. `os` indicates the operating system and `arch` the system architecture.

</dd>

<dt><a name="gloss-raid"></a>Redundant Array of Inexpensive (or Independent) Disks (RAID)</dt>

<dd class="glossdef">

Create a high level of reliability in storage using inexpensive drives arranged into arrays for redundancy.

</dd>

<dt><a name="gloss-radius"></a>Remote Authentication Dial In User Service (RADIUS)</dt>

<dd class="glossdef">

RADIUS authentication is a AAA network protocol used for managing access to networks or to the Internet. Typically, access is no longer dial-in. See also [Authentication, Authorization and Accounting](glossary#gloss-aaa "Authentication, Authorization and Accounting").

</dd>

<dt><a name="gloss-rfc"></a>Request For Comment (RFC)</dt>

<dd class="glossdef">

New standards and protocols are released to their relative engineering groups as RFCs. These RFCs are evolved and ratified to become the standards using for communications across the Internet.

</dd>

<dt><a name="gloss-rss"></a>Resident Set Size (RSS)</dt>

<dd class="glossdef">

The protion of memory held in RAM. RSS describes how much memory an application is consuming.

</dd>

<dt><a name="gloss-rhsbl"></a>Right Hand Side Block List (RHSBL)</dt>

<dd class="glossdef">

Similar to a DNSBL but uses domain names rather than IP addresss. See also [DNS Block List](glossary#gloss-dnsbl "DNS Block List").

</dd>

<dt><a name="gloss-rrd"></a>Round Robin Database (RRD)</dt>

<dd class="glossdef">

A round-robin database usually stores time-series data. In Momentum version 2.2, graphs are created from this data using RRDTool.

</dd>

<dt>Scheduler</dt>

<dd class="glossdef">

A thread which runs within Momentum, responding to all events and pushing work to modules and thread pools.

</dd>

<dt>Scope</dt>

<dd class="glossdef">

The context within which a configuration option may be referenced. The various scopes are global, binding group, domain, binding, host, listener, pathway_group and pathway. Bindings may be defined globally or within a binding group creating a binding-group::binding scope. Also, since domains and hosts may appear within bindings, there are also binding::domain and binding::host scopes along with the permutations that apply, for example, when a domain is within a binding that is in turn a member of a binding group. If an option is defined in more than one scope, the most specific scope applies. The scoping rules for resolving configuration settings are discussed in [Section 2.6, “Configuration Scopes and Fallback”](ecelerity.conf.fallback "2.6. Configuration Scopes and Fallback").

</dd>

<dt>Security Enhanced Linux (SELinux)</dt>

<dd class="glossdef">

A set of modifications used by distributions such as Red Hat, that can be applied to the Linux kernel to enhance security. Momentum requires that SELinux be disabled.

</dd>

<dt><a name="gloss-spf"></a>Sender Policy Framework (SPF)</dt>

<dd class="glossdef">

Sender Policy Framework (SPF) is an emerging standard for sender-based authentication which provides a framework for administrators, through DNS TXT records, to specify authorized senders for the domains they control.

</dd>

<dt><a name="gloss-sendmail"></a>Sendmail</dt>

<dd class="glossdef">

Open Source MTA often present on base OS installations, should be removed or disabled to prevent conflicts with Momentum.

</dd>

<dt>Sieve++</dt>

<dd class="glossdef">

Internal scripting language usable within Momentum for implementing policy. Can be used for things such as delivery restrictions, binding assignment, header manipulations and event handling. Includes data source connectivity for database and LDAP-powered policy.

</dd>

<dt><a name="gloss-smtp"></a>Simple Message Transfer Protocol (SMTP)</dt>

<dd class="glossdef">

The standard protocol used for the delivery of email.

</dd>

<dt><a name="gloss-snmp"></a>Simple Network Management Protocol (SNMP)</dt>

<dd class="glossdef">

A network protocol used to monitor network-attached devices. Momentum contains an embedded SNMPv2 agent primarily used to provide statistical data to Momentum utilities such as **ec_stat_watcher**. The agent may be queried by third-party SNMP Managers. See also [Management Information Base](glossary#gloss-mib "Management Information Base").

</dd>

<dt><a name="gloss-smtp-cbv"></a>SMTP Callback Verification (CBV)</dt>

<dd class="glossdef">

An SMTP technique for validating email addresses. Typically, verification is made by attempting to make an SMTP connection to the `mail from` address of an email receipt. See also [Section 14.67, “smtp_cbv – SMTP Callback Verification”](modules.smtp_cbv "14.67. smtp_cbv – SMTP Callback Verification").

</dd>

<dt><a name="gloss-soft-bounce"></a>Soft Bounce</dt>

<dd class="glossdef">

A soft bounce is an e-mail message that reaches the recipient's mail server but is bounced back undelivered before getting to the intended recipient. This may occur if a recipient's inbox is full. See also [Hard Bounce](glossary#gloss-hard-bounce "Hard Bounce").

</dd>

<dt><a name="gloss-surbl"></a>Spam URI Realtime Block Lists (SURBL)</dt>

<dd class="glossdef">

A list of hosts that appear in unsolicited messages. Unlike DNSBLs, these lists are used to detect spam based on comparison to URIs found in the email body. See also [DNS Block List](glossary#gloss-dnsbl "DNS Block List").

</dd>

<dt>Spool</dt>

<dd class="glossdef">

Physical location on disk where messages are stored while present on the system. By default the spool is located at `/var/spool/ecelerity`.

</dd>

<dt>Spread</dt>

<dd class="glossdef">

Momentum's clustering solution relies heavily on the use of a group communication messaging bus called "Spread". Spread provides a mechanism for distributing data to various nodes in a networked configuration. Without this messaging bus, the nodes and the cluster manager cannot communicate and all cluster tasks such as DuraVIP™ binding, logging and replication will cease. For more information see [http://www.spread.org](http://www.spread.org) .

</dd>

<dt><a name="gloss-table"></a>Table (Lua)</dt>

<dd class="glossdef">

In Lua a table is an object. Like objects, tables have a state and an identity that is independent of their values. For example, two tables with the same value are different objects, whereas an object can have different values at different times but is always the same object. For more information see [Programming in Lua](http://www.lua.org/pil/16.html).

</dd>

<dt>Thread</dt>

<dd class="glossdef">

A single chain of commands within a process. Multiple threads can run simultaneously on multi-core/multi-processor systems by executing one thread per processor in parallel. Multiple threads within the same process share certain resources.

</dd>

<dt><a name="gloss-ttl"></a>Time-to-Live (TTL)</dt>

<dd class="glossdef">

The length of time that a IP packet can exist in a system before being discarded.

</dd>

<dt>Traffic Shaping</dt>

<dd class="glossdef">

The adjusting of sending parameters in order to conform with the sending requirements of receiving ISPs. Includes the adjustment of sending volume, connection count, time outs and messages per session.

</dd>

<dt><a name="gloss-tls"></a>Transport Layer Security (TLS)</dt>

<dd class="glossdef">

A cryptographic protocol for providing secure communication over the Internet.

</dd>

<dt><a name="gloss-udp"></a>User Datagram Protocol (UDP)</dt>

<dd class="glossdef">

UDP is an alternative to TCP that lets applications send messages to other hosts on an Internet Protocol (IP) network. Unlike TCP, UDP does not divide a message into packets (datagrams) and reassemble it at the other end.

</dd>

<dt><a name="pe2-verp"></a>Variable Envelope Return Path (VERP)</dt>

<dd class="glossdef">

This technique specifies a different return path for every email making it possible to associate bounced email with a specific sender.

</dd>

<dt>XCLIENT</dt>

<dd class="glossdef">

XCLIENT allows information regarding the original sending host (such as the connecting IP address) to be communicated with the next hop and is useful when Momentum is deployed as a gateway device in a configuration where the internal hosts will benefit from knowing the original connecting IP address.

</dd>

<dt><a name="gloss-dk"></a>Yahoo! Domain Keys (DK)</dt>

<dd class="glossdef">

An authentication mechanism where a public key is placed in a sender's DNS record. A matching private key on the server is used to sign each message sent, with the signature placed in the message's headers. When an ISP receives the message it checks the signature against the public key to ensure that the message came from the domain in question.

</dd>

</dl>

| [Prev](acronyms)  |   |   |
| Appendix J. Acronyms  | [Table of Contents](index) |   |
