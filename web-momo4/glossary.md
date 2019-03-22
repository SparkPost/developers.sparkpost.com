| [Prev](libedit.extended)  |   |  [Next](copyrights) |

## Glossary

<dl>

<dt><a name="gloss.amqp"></a>Advanced Message Queuing Protocol (AMQP)</dt>

<dd class="glossdef">

AMQP is an open standard for message-oriented middleware used by Momentum 4\. For more information see [ampq.org](http://www.amqp.org/).

</dd>

<dt><a name="gloss.aggregator"></a>Aggregator</dt>

<dd class="glossdef">

In a Momentum 4 cluster configuration, an aggregator or cluster aggregation node is a node used for cluster log aggregation. If you require log aggregation, you must install Momentum 4 on the aggregator first. An aggregator is referred to as a Platform node but it does not perform any messaging functions.

</dd>

<dt><a name="gloss.campaign"></a>Campaign</dt>

<dd class="glossdef">

All messages based on a single piece of copy. A campaign contains recipients and template information. You may have a campaign group that contains related messages.

</dd>

<dt><a name="gloss.click.tracking"></a>Click Tracking</dt>

<dd class="glossdef">

Tracking of clicks on the links within a message. In order to track clicks set the `click_tracking` field of the transmission object to `true`.

</dd>

<dt><a name="gloss.content"></a>Content</dt>

<dd class="glossdef">

A component of the template that can include: html, text, SMS MMS rich media, push payload, or other recipient-viewable data.

</dd>

<dt><a name="gloss.conversion"></a>Conversion</dt>

<dd class="glossdef">

When the recipient of a message performs the desired action; receiver goes beyond open and click.

</dd>

<dt><a name="gloss.eec"></a>Email Experience Council (EEC)</dt>

<dd class="glossdef">

The EEC is a global organization that strives to enhance the image of email marketing and communications, while actively advocating its importance to business. For more information see [Email Experience Council](http://www.emailexperience.org/).

</dd>

<dt><a name="gloss.injection.metadata"></a>Injection Metadata</dt>

<dd class="glossdef">

Key value pairs associated with an injection which are included in the event stream and are available for filtering or reporting. These key value pairs are also given to the substitution engine as a convenience to the customer (with recipient metadata taking precedence over injection metadata when there are conflicts).

</dd>

<dt><a name="gloss.injection.substitution.data"></a>Injection Substitution Data</dt>

<dd class="glossdef">

Injection-specific JSON data which is supplied to the substitution engine. Recipient substitution data takes precedence over injection substitution data. Unlike metadata, substitution data is not included in any event streams and is not available for filtering or reporting.

</dd>

<dt><a name="gloss-ip-warmup"></a>IP Warmup</dt>

<dd class="glossdef">

The concept behind "IP Warmup" is that new IPs need to build a reputation with ISPs. For example, if you send 100,000 emails from a newly acquired IP address that has no history, most large ISPs will block email from this address. IP Warmup slowly increases the send rate on new IPs so that ISPs have time to gauge customer feedback. If there are minimal spam/abuse reports then the ISP will allow an increased send rate.

Sometimes an IP with a good reputation will accidentally send bad content and damage its own reputation. In such cases, it may be necessary to re-establish a good reputation by temporarily suspending sending, reducing the send rate, or by "re-warming" the IP address. With Momentum, this is achieved using the adaptive module, which automatically sets any new bindings to "zero days old" and then slowly increases the send rate unless it starts seeing negative feedback. If this happens, the adaptive module throttles or temporarily suspends the IP address according to internal rules. For more information about the adaptive module, see [Section 71.3, “adaptive – Adaptive Delivery”](modules.adaptive "71.3. adaptive – Adaptive Delivery").

</dd>

<dt><a name="gloss.json"></a>JavaScript Object Notation (JSON)</dt>

<dd class="glossdef">

JSON is a lightweight data interchange format. It is the input and output format used by the REST API.

</dd>

<dt><a name="gloss.mime"></a>Multipurpose Internet Mail Extensions (MIME)</dt>

<dd class="glossdef">

The standard that specifies the format of email messages so that they can be exchanged between different MTAs.

</dd>

<dt><a name="gloss.open.tracking"></a>Open Tracking</dt>

<dd class="glossdef">

Track the opening of messages.

</dd>

<dt><a name="gloss-p0f"></a>Passive operating system (OS) fingerprinting (p0f)</dt>

<dd class="glossdef">

During network communication, passively collect information about the remote device with the intent of inferring the OS. Doing this makes improved TCP/IP communication possible. You must install the Policy Tools suite to enable p0f.

</dd>

<dt><a name="gloss.quorum"></a>Quorum</dt>

<dd class="glossdef">

In cluster configurations a quorum is the minimum number of active machines that will allow Momentum to continue functioning. Should any nodes go down, you need a quorum within both your Platform servers and within your Analytics servers in order for Momentum to continue functioning. For Momentum, 51% or more active nodes makes up a quorum.

Whenever quorum is lost and regained, the node(s) that lost quorum must inquire whether they have lost the jobs that they were previously working on. This is necessary to minimize the number of duplicate messages that are sent.

What constitutes a quorum has implications for redundancy. For example, you cannot support redundancy with only two Analytics and two Platform nodes. Should any one node go down, you will not have the 51% required for a quorum. Redundancy is only supported with clusters of three or more Analytics *and* Platform nodes.

</dd>

<dt><a name="gloss.raw.clicks"></a>Raw Clicks</dt>

<dd class="glossdef">

Sum of links clicked per recipient, over multiple recipients. For example, Recipient 1 clicks 1 link. Recipient 2 clicks 2 different links. Recipient 3 clicks 5 different links (out of the 20 links in the message). That's a total of 8 Raw Clicks. Raw clicks are also known as "uncooked clicks".

</dd>

<dt><a name="gloss.recipient.metadata"></a>Recipient Metadata</dt>

<dd class="glossdef">

Key value pairs associated with a recipient which are included in the event stream and are available for filtering/reporting. These key value pairs are also given to the substitution engine as a convenience to the customer.

</dd>

<dt><a name="gloss.recipient.substitution.data"></a>Recipient Substitution Data</dt>

<dd class="glossdef">

Recipient-specific JSON data which is supplied to the substitution engine. Unlike metadata, substitution data is not included in any event streams and is not available for filtering or reporting.

</dd>

<dt><a name="gloss.recipients"></a>Recipients</dt>

<dd class="glossdef">

Persons receiving a message. Typically information regarding recipients is extracted from a data store. Recipients are passed to the transmission API as JSON objects.

</dd>

<dt><a name="gloss.rest"></a>Representational State Transfer (REST)</dt>

<dd class="glossdef">

Web services available over HTTP. Using REST you can interact with Momentum 4 programmatically.

</dd>

<dt><a name="gloss.rfc2821"></a>Request for Comments (RFC) 2821</dt>

<dd class="glossdef">

A self-contained specification of the basic protocol for the Internet electronic mail transport.

</dd>

<dt><a name="gloss.rfc2822"></a>Request for Comments (RFC) 2822</dt>

<dd class="glossdef">

Specifies a syntax for text messages that are sent between computer users, within the framework of "electronic mail" messages.

</dd>

<dt><a name="gloss.send"></a>Send (Injection type)</dt>

<dd class="glossdef">

Message components (header, text, HTML, SMS, etc) submitted via API and Momentum will perform substitutions and assemble the multi-part MIME format.

</dd>

<dt><a name="gloss.send.raw"></a>Send Raw (Injection type)</dt>

<dd class="glossdef">

Injecting a fully formed (multi-part MIME) message via an API (still subject to substitutions and tagging).

</dd>

<dt><a name="gloss.send.template"></a>Send Template (Injection type)</dt>

<dd class="glossdef">

Generate messages by using an API that injects structured data to be used with a stored template.

</dd>

<dt><a name="gloss.smtp.injection"></a>SMTP Injection</dt>

<dd class="glossdef">

Injecting a message via SMTP (rather than a template).

</dd>

<dt><a name="gloss.substitution.engine"></a>Substitution Engine</dt>

<dd class="glossdef">

A system component that personalizes each individual message. It takes as input a piece of UTF-8 data which contains substitution syntax such as "Hello {{ name }}", and JSON representing the key/value pairs to be substituted. The engine outputs expanded UTF-8 data.

</dd>

<dt><a name="gloss.tag"></a>Tag</dt>

<dd class="glossdef">

A client-defined label that can be applied to a message. Tags can be inherited from a campaign.

</dd>

<dt><a name="gloss.template"></a>Template</dt>

<dd class="glossdef">

A collection of message components (headers, text, html, SMS and attachments). Each component (with the exception of attachments) is run through the substitution engine prior to construction of the MIME.

</dd>

<dt><a name="gloss.total.clicks"></a>Total Clicks</dt>

<dd class="glossdef">

Every click in a message, including duplicates. You're counting clicks.

</dd>

<dt><a name="gloss.total.clicks.per.link"></a>Total Clicks per Link</dt>

<dd class="glossdef">

Every click on a particular link.

</dd>

<dt><a name="gloss.total.conversions"></a>Total Conversions</dt>

<dd class="glossdef">

All conversions.

</dd>

<dt><a name="gloss.total.opens"></a>Total Opens</dt>

<dd class="glossdef">

All opens that were recorded by open tracking.

</dd>

<dt><a name="gloss.transactional"></a>Transactional Message</dt>

<dd class="glossdef">

A transactional message is a message that has only one recipient. The [gen_transactional_threads](modules.msg_gen#modules.gen_transactional_threads) option ensures that these kinds of messages are handled efficiently by minimizing database access wherever possible.

</dd>

<dt><a name="gloss.transmission"></a>Transmission</dt>

<dd class="glossdef">

A collection of messages belonging to the same organization and the same campaign; also know as a mailing.

</dd>

<dt><a name="gloss.unique.clicks"></a>Unique Clicks</dt>

<dd class="glossdef">

The number of recipients that clicked on any link in the message. You're counting recipients. From the example in [Raw Clicks](glossary#gloss.raw.clicks "Raw Clicks"), that's 3 Unique clicks.

</dd>

<dt><a name="gloss.unique.confirmed.opened"></a>Unique Confirmed Opened</dt>

<dd class="glossdef">

Number of recipients who opened messages. This is recorded using the open tracking pixel *or*, if images are blocked, it is recorded when the user clicks any link including the unsubscribe link. This metric applies to both HTML and plain text emails. (Unique Opens plus Unique Clicks that do not have a corresponding Unique Open.)

</dd>

<dt><a name="gloss.unique.conversions"></a>Unique Conversions</dt>

<dd class="glossdef">

Number of recipients that convert.

</dd>

<dt><a name="gloss.unique.opens"></a>Unique Opens</dt>

<dd class="glossdef">

Number of recipients who opened messages. This is recorded by the open tracking pixel.

</dd>

<dt><a name="gloss.verp"></a>Variable Envelope Return Path (VERP)</dt>

<dd class="glossdef">

This technique specifies a different return path for every message making it possible to associate bounced message with a specific sender so that invalid addresses can be removed from mailing lists. For more information see ["RFC 3464"](http://tools.ietf.org/html/rfc3464).

</dd>

</dl>

| [Prev](libedit.extended)  |   |  [Next](copyrights) |
| D.2. Extended Commands  | [Table of Contents](index) |  Appendix E. Copyright Notices |

