| [Prev](sieve.enhancements)  | Chapter 8. Sieve++ |  [Next](p.command.ref) |

## 8.4. Sieve++, Momentum-specific extensions

For greater flexibility, Momentum allows Sieve scripts to execute inline during the various phases of an SMTP session, and provides additional actions (such as terminating the connected TCP session) that don't make sense in traditional Sieve. This phased execution of Sieve scripts places certain restrictions on the tests and actions that can be performed during a given phase; for example, testing headers during the EHLO phase of the session doesn't make sense, since there is no email message available. According to the Sieve RFC, implementations **must** support the `header` test; while Momentum supports it, it is important to realize that it can only do so in phases where an email message is actually present.

More information on configuring the sieve module can be found in [Section 14.64, “sieve – The Sieve Module”](modules.sieve "14.64. sieve – The Sieve Module").

The default Sieve implementation does not provide variables or variable interpolation. As such, there is no mechanism for testing one string against another (as in standard Sieve those strings are static). In Momentum's Sieve++, variable assignment is possible as well as variable interpolation (such as performing a DNS lookup).

### 8.4.1. Macros

Momentum's Sieve++ exposes a simple macro language that allows convenient string construction containing context values and variables.

The values in the context of the current connection (SMTP session) and message (SMTP transaction) can be interpolated using the `vctx_conn:key` macro and the `vctx_mess:key` macro, respectively.

```
if vctx_conn :contains "auth_user" "" {
  # The auth_user key is set in the connection context
  # so place it in a header: X-Authed-Username
  ec_header_add "X-Authed-Username" "%{vctx_conn:auth_user}";
}
```

For a list of the predefined context variables see [Chapter 6, *Validation Context Variables*](policy.context.variables "Chapter 6. Validation Context Variables") .

**RFC822 Macros**

<dl className="variablelist">

<dt>

"%{rfc822:date}"

</dt>

<dd>

returns a string that can be used as the value of a `Date` header. The date would be the time that this macro is expanded.

</dd>

</dl>

**RFC2822 Macros**

The following macros return a portion of a RFC2822 compliant message. Each expanded macro ends with `\r\n`.

<dl className="variablelist">

<dt>

"%{rfc2822:message}"

</dt>

<dd>

returns the whole message including headers and body.

</dd>

<dt>

"%{rfc2822:message,*`n`*}"

</dt>

<dd>

returns the first `n` lines of the message, including headers. n needs to be a non-negative integer.

</dd>

<dt>

"%{rfc2822:message,*`n`*b}"

</dt>

<dd>

returns the first `n` bytes of the message, including headers. n needs to be a non-negative integer.

</dd>

<dt>

"%{rfc2822:headers}"

</dt>

<dd>

returns the headers of the message.

</dd>

<dt>

"%{rfc2822:body}"

</dt>

<dd>

returns the message body.

</dd>

<dt>

"%{rfc2822:body,*`n`*}"

</dt>

<dd>

returns the first `n` lines of the message body. n needs to be a non-negative integer.

</dd>

<dt>

"%{rfc2822:body,*`n`*b}"

</dt>

<dd>

returns the first `n` bytes of the message body. n needs to be a non-negative integer.

</dd>

<dt>

"%{rfc2822:text}"

</dt>

<dd>

returns the body of the first text part of a message if the message is a MIME message or the message body if the message is not a MIME message and contains only plain text. The returned string will always be UTF-8 encoded.

</dd>

<dt>

"%{rfc2822:part,*`n`*}"

</dt>

<dd>

returns the `nth` part of a MIME message, including the headers of that part. The returned string is in its original charset. No charset conversion will be performed. If there is no `nth` part, this macro returns an empty string. If a message is not a MIME message, it is viewed as a MIME message with only one part by this macro.

</dd>

<dt>

"%{rfc2822:text,*`n`*}"

</dt>

<dd>

returns the `nth text` part of a message, including the headers of that part. The returned string is in its original charset. No charset conversion will be performed. If there is no `nth text`part, this macro returns an empty string. If a message is not a MIME message, it is viewed as a MIME message with only one part by this macro.

</dd>

<dt>

"%{rfc2822:text,*`n`*,*`m`*}"

</dt>

<dd>

returns the first `m` lines of the `nth text` part of a message The returned string will always be UTF-8 encoded. If there is no `nth text`part, this macro returns an empty string. If a message is not a MIME message, it is viewed as a MIME message with only one part by this macro.

</dd>

</dl>

**SPF Macros**
```
spf_macros {
}
```

In version 3.0, the spf_macros module is loaded automatically as required. You can access the SPF macros from Sieve using the `spfv1` prefix.

For more information about the spf modules see [Section 14.69, “spf Modules – spf_macros, spf_v1 and senderid (SPF v2)”](modules.spf "14.69. spf Modules – spf_macros, spf_v1 and senderid (SPF v2)").

The following expansion possibilities are provided by the spf_macros module:

```
# If the envelope sender is strong-bad@email.example.com,
# and the IPv4 SMTP client IP is 192.0.2.3,
# and the PTR domain name of the client IP is mx.example.org,
# then the following strings have the following commented expansions:

"%{spfv1:s}"        # strong-bad@email.example.com
"%{spfv1:o}"        #            email.example.com
"%{spfv1:d}"        #            email.example.com
"%{spfv1:d4}"       #            email.example.com
"%{spfv1:d3}"       #            email.example.com
"%{spfv1:d2}"       #                  example.com
"%{spfv1:d1}"       #                          com
"%{spfv1:dr}"       #            com.example.email
"%{spfv1:d2r}"      #                example.email
"%{spfv1:l}"        #                   strong-bad
"%{spfv1:l-}"       #                   strong.bad
"%{spfv1:lr}"       #                   strong-bad
"%{spfv1:lr-}"      #                   bad.strong
"%{spfv1:l1r-}"     #                       strong
"%{spfv1:i}"        #                    192.0.2.3

"%{spfv1:ir}.%{spfv1:v}._spf.%{spfv1:d2}"
#               3.2.0.192.in-addr._spf.example.com

"%{spfv1:lr-}.lp._spf.%{spfv1:d2}"
#                   bad.strong.lp._spf.example.com

"%{spfv1:lr-}.lp.%{spfv1:ir}.%{spfv1:v}._spf.%{spfv1:d2}"
# bad.strong.lp.3.2.0.192.in-addr._spf.example.com

"%{spfv1:ir}.%{spfv1:v}.%{spfv1:l1r-}.lp._spf.%{spfv1:d2}"
#     3.2.0.192.in-addr.strong.lp._spf.example.com

"%{spfv1:d2}.trusted-domains.example.net"
#          example.com.trusted-domains.example.net
```

Variables (a Momentum Sieve++ extension to the language) can be interpolated in strings by enclosing the variable name in `${}`. For example:

```
$ip = ec_dns_lookup "%{spfv1:ir}.dnsbl.org" "a";
if not ec_test :is "${ip}" "127.0.0.2" {
  $explanation = ec_dns_lookup "%{spfv1:ir}.dnsbl.org" "txt";
  ec_action 550 "5.7.1 ${explanation}";
}
```

A number of non-standard tests and actions are made available for you in Sieve++; a complete reference can be found in [Chapter 16, *Sieve++ Function Reference*](sieve.ref3 "Chapter 16. Sieve++ Function Reference") .

### 8.4.2. Sieve++ General-purpose Data Types

Momentum's Sieve implementation includes general-purpose functions for working with counters, hash tables, and IP-address based time series.

**Counters (Gauges)**

A simple type of counter is available using [ec_inc_counter](sieve.ref.ec_inc_counter "ec_inc_counter"). This type of counter is useful for reporting but not for conditional logic. The counter value can be viewed or reset using the Momentum console or viewed graphically in the web console. A Sieve script can only increment the counter; thus it cannot be used in a conditional test.

A more general counter mechanism supporting increment, decrement and get operations is provided by the [ec_gauge_cache](sieve.ref.ec_gauge_cache "ec_gauge_cache") commands. Since the counter value is available in Sieve, the value can be used in an "if" conditional.

**Hash tables**

Hash tables can be created and manipulated in Sieve using the `ec_hash` family of functions, most notably [hash_create](sieve.ref.hash_create "hash_create") and [hash_set](sieve.ref.hash_set "hash_set"). A hash lookup is expressed using bracket syntax (e.g., `$hash["key"]`).

The hash keys must be strings or expressions that resolve to strings. A hash value can be any valid Sieve value (string, number, stringlist or hashes).

**Audit series**

Audit series enable IP-address based events to be tracked over a rolling set of time windows. This makes it possible to implement policy decisions based on recent activity from IP addresses or CIDR blocks.

For example, an audit series can be configured with six windows of 5 minutes each. This stores data for a half-hour leading up to the present; (every 5 minutes, the oldest window is discarded, the remaining windows shift, and a new window representing the present is created). In each window, a CIDR tree efficiently stores the IP addresses that were added and their respective counts.

A Sieve script can add an IP address into an audit series using [audit_series_add](sieve.ref.audit_series_add "audit_series_add"). The script can query how many times an IP address (or aggregate total for a CIDR block) appears in the audit series using [audit_series](sieve.ref.audit_series "audit_series").

The use of numerous small windows is usually preferable to a few large windows. For example, aggregating over six 5-minute windows provides less drastic fluctuations than would two 15-minute windows. This is due to the discarding of the oldest data when the windows shift. (For example, at the moment the windows are shifted, the former series would retain the most recent 25 minutes of data, while the latter would retain only the most recent 15 minutes).

**Cluster replicated types**

Users of the cluster module may benefit from special replicated data types. As described in , [Section 7.7.1, “Replication Configurations”](cluster.config.replication#cluster.replication.features "7.7.1. Replication Configurations") a number of functions have special support for replicating their values across all nodes of a cluster.

| [Prev](sieve.enhancements)  | [Up](sieve) |  [Next](p.command.ref) |
| 8.3. RFC Standard Sieve Enhancements  | [Table of Contents](index) |  Part II. Command Reference |
