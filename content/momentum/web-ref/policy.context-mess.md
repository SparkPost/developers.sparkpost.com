| [Prev](policy.predefined-context-conn)  | Chapter 6. Validation Context Variables |  [Next](cluster) |

## 6.2. Message Context Variables

<a class="indexterm" name="idp3495168"></a>

Message context variables yield information about the current message. These variables are predefined, either in a global context or within a module. The global variables are discussed in the next section and the module-specific variables follow.

It is also possible to define context variables using configuration options. These variables are discussed in [Section 6.2.3, “Message Context Variables Defined Within a Module”](policy.context-mess#policy.context-mess.module.defined "6.2.3. Message Context Variables Defined Within a Module").

### 6.2.1. Predefined Global Message Context Variables

The following message context variables are predefined:

<dl className="variablelist">

<dt>#8bitmime</dt>

<dd>

This variable is set during message parsing if the message contains 8-bit content, and it is used at send time to determine whether to negotiate 8-bit MIME support with the recipient, or to transform the message as per the Send_8BitMime and Transform_8BitMime configuration options. For more information about these options see [send_8bitmime](conf.ref.send_8bitmime "send_8bitmime") and [transform_8bitmime_content](conf.ref.transform_8bitmime_content.php "transform_8bitmime_content"). *Note*: All context variables with a "#" prefix are for internal use.

</dd>

<dt>#batch_ids</dt>

<dd>

The sibling message-ids in a batch. This is not determined until after reception is complete. This variable is for internal use only.

</dd>

<dt>mailfrom_domain</dt>

<dd>

Domain part of mailfrom address.

</dd>

<dt>mailfrom_localpart</dt>

<dd>

Local part of mailfrom address.

</dd>

<dt>mailfrom_string</dt>

<dd>

The entire mailfrom line.

</dd>

<dt>rcptto_domain</dt>

<dd>

Domain part of the rcptto address.

</dd>

<dt>rcptto_localpart</dt>

<dd>

Local part of the rcptto address.

</dd>

<dt>rcptto_string</dt>

<dd>

The entire rcptto line.

</dd>

<dt>rfc2822_date_missing</dt>

<dd>

Set to "true" if the date is missing.

</dd>

</dl>

### 6.2.2. Predefined Module-Specific Message Context Variables

The section concerns the predefined module-specific message context variables.

**6.2.2.1. The brightmail Module**

The one variable is as follows:

*   *`brightmail`*::error – Error information

For more information see [Section 14.14.2, “Brightmail Runtime Usage”](modules.brightmail#modules.brightmail.runtime.usage "14.14.2. Brightmail Runtime Usage")

**6.2.2.2. The commtouch Module**

The variables are as follows:

*   `commtouch-class` – The classification of the email

*   `commtouch-virus-threat` – The level of the threat

*   `commtouch-ref-id` – The Commtouch reference ID

For more information see [Section 14.19.2, “commtouch Runtime Usage”](modules.commtouch#modules.commtouch.runtime.usage "14.19.2. commtouch Runtime Usage")

**6.2.2.3. The domainkeys Module**

The one variable is as follows:

*   `dk_status` – This variable returns the domain key status

For more information see [Section 14.29.5, “domainkeys Runtime Usage”](modules.domainkeys#modules.domainkeys.runtime.usage "14.29.5. domainkeys Runtime Usage")

**6.2.2.4. The seedlist Module**

*   `#seedlist-orig-from` – The original MAIL FROM address

For more information see [Section 14.62.2, “Runtime Usage”](modules.seedlist#modules.seedlist.runtime.usage "14.62.2. Runtime Usage")

**6.2.2.5. The smtp_cbv Module**

The one variable is as follows:

*   `smtp_cbv_result` – The result of CBV

For more information see [Section 14.67.2, “smtp_cbv Runtime Usage”](modules.smtp_cbv#modules.smtp_cbv.runtime.usage "14.67.2. smtp_cbv Runtime Usage")

### 6.2.3. Message Context Variables Defined Within a Module

**6.2.3.1. The antivirus Modules**

In antivirus modules it is possible to define context variables using configuration options. The variables you may define are shown below with typical default values:

*   `context_variable` = "virus_info"

    If this variable is not set, its default value is "*`virus_engine_name`*_status".

*   `skip_context_variable` = "skip_virus_check"

For more information see [Section 14.5, “antivirus – Antivirus Modules”](modules.antivirus "14.5. antivirus – Antivirus Modules").

**6.2.3.2. The spf Modules**

In the spf modules it is possible to define context variables using configuration options. These are shown below with typical default values:

*   `context_variable` = "spf_status"

*   `context_pra_variable` = "senderid_pra_status"

For more information see [Section 14.69, “spf Modules – spf_macros, spf_v1 and senderid (SPF v2)”](modules.spf "14.69. spf Modules – spf_macros, spf_v1 and senderid (SPF v2)").

| [Prev](policy.predefined-context-conn)  | [Up](policy.context.variables) |  [Next](cluster) |
| 6.1. Connection Context Variables  | [Table of Contents](index) |  Chapter 7. Clustering |
