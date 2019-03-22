| [Prev](modules.smtp_rcptto_proxy)  | Chapter 14. Modules Reference |  [Next](modules.static_routes) |

## 14.69. spf Modules – spf_macros, spf_v1 and senderid (SPF v2)

<a class="indexterm" name="idp21406736"></a><a class="indexterm" name="idp21408336"></a>

Sender Policy Framework (SPF) is an emerging standard for sender-based authentication which provides a framework for administrators, through DNS TXT records, to specify authorized senders for the domains they control. SPFv1 performs validation on the domain found in the envelope sender (sometimes defined as the MAIL FROM header). SPFv2 (also known as Sender ID) supports MAIL FROM validation, but adds the concept of Purported Responsible Address (PRA), which defines an algorithm for selecting among a set of RFC2822 headers. The domain for validation is extracted from the appropriate header as defined by the PRA header selection algorithm. For a more detailed description of the differences between spf_v1 and senderid see [SPF_vs_Sender_ID](http://www.openspf.org/SPF_vs_Sender_ID).

SPF consists of two basic components:

*   DNS records published by senders which describe their policies.

*   A parsing engine for receivers which looks up the published policies for inbound mail and takes actions based on it.

A full description of SPF is available at [http://spf.pobox.com](http://spf.pobox.com).

### 14.69.1. Basic Configuration

The basic configuration for the SPF modules is as follows:

<a name="example.spf_v1.3"></a>

**Example 14.99. spf modules**

```
spf_macros {
}
spf_v1 "spf_v1" {
  default_rule = "?all"
  add_headers = true
  add_authentication_results = true
  context_variable = "spf_status"
  fail_fallback_string = "SPF validation failure"
  softfail_fallback_string = "SPF validation soft failure"
  nxdomain_override_string = "Could not resolve sender's domain"
  temperror_override_string = "Temporary SPF failure"
}

senderid "senderid" {
  default_rule = "?all"
  default_pra_rule = "?all"
  add_headers = true
  add_authentication_results = true
  context_variable = "senderid_status"
  context_pra_variable = "senderid_pra_status"
  fail_fallback_string = "SPF validation failure"
  softfail_fallback_string = "SPF validation soft failure"
  nxdomain_override_string = "Could not resolve sender's domain"
}
```

### Note

These modules no longer alter the SMTP session disposition; use scripts to implement policy based on the results of SPF or SenderID validation. For more information about the scriptlet module see [Section 14.60, “scriptlet – Module”](modules.scriptlet "14.60. scriptlet – Module").

In the default configuration, the SPF modules have the following settings:

<dl className="variablelist">

<dt>`add_headers = true`</dt>

<dd>

Add a `Received-SPF` header to the message for Mail User Agent based categorization.

</dd>

<dt>`context_pra_variable = "senderid_pra_status"`</dt>

<dd>

What message context variable to store the SenderID PRA status in, so that its status may be acted on in another module.

</dd>

<dt>`context_variable = "spf_status"`</dt>

<dd>

What message context variable to store the SPF status in, so that its status may be acted on in another module.

</dd>

<dt>`default_pra_rule = "?all"`</dt>

<dd>

Set the default rule for a domain not implementing SenderID. The default behavior is to use `?all`, as indicated by the SenderID specification.

</dd>

<dt>`default_rule = "?all"`</dt>

<dd>

Set the default rule for a domain not implementing SPF. The default behavior is to use `?all`, as indicated by the SPF specification.

</dd>

<dt>`fail_code = 250`</dt>

<dd>

The SMTP code to return in the event of a hard failure (i.e. ‘`-`’). The default is 250 (success).

### Warning

As of version 3.0 this option is not configurable and always defaults to 250\. To override this value use a policy script.

</dd>

<dt>`fail_fallback_string = "SPF validation failure"`</dt>

<dd>

The text DSN to return to the client in the event of a failure.

</dd>

<dt>`nxdomain_code = 550`</dt>

<dd>

The SMTP code to return in the event that the sender's domain is nonexistent. The default is 550 (rejection).

### Warning

As of version 3.0 this option is not configurable and always defaults to 250\. To override this value use a policy script.

</dd>

<dt>`nxdomain_override_string = "Could not resolve sender's domain"`</dt>

<dd>

The text DSN to return to the client in the event of a non-existent sending domain.

</dd>

<dt>`pass_code = 250`</dt>

<dd>

The SMTP code to return in the event of a successful validation. The default is 250 (success).

### Warning

As of version 3.0 this option is not configurable and always defaults to 250\. To override this value use a policy script.

</dd>

<dt>`permerror_code = 250`</dt>

<dd>

The SMTP code to return in the event of an unexpected error. The default is 250 (success).

### Warning

As of version 3.0 this option is not configurable and always defaults to 250\. To override this value use a policy script.

</dd>

<dt>`softfail_code = 250`</dt>

<dd>

The SMTP code to return in the event of a soft failure (i.e. `~`). The default is 250 (success).

### Warning

As of version 3.0 this option is not configurable and always defaults to 250\. To override this value use a policy script.

</dd>

<dt>`softfail_fallback_string = "SPF validation soft failure"`</dt>

<dd>

The text DSN to return to the client in the event of a soft failure.

</dd>

<dt>`unknown_code = 250`</dt>

<dd>

The SMTP code to return in the event an 'unknown' (i.e. ‘`?`’) result. For a description of the SPF mechanism syntax see [SPF Record Syntax](http://www.openspf.org/SPF_Record_Syntax). The default is 250 (success). As of version 3.0 this option is not configurable and always defaults to 250\. To override this value use a policy script.

</dd>

</dl>

### 14.69.2. Passive Detection

The default action of the SPF module is to accept everything (except for non-existent sender domains) and set a context variable for taking adminstrative action in other modules.

SPF is an authentication technology, and as such a positive authentication does not necessarily represent that the message is 'good' or 'wanted', but simply that the sender is who they claim to be. Furthermore, since it is IP-based, SPF does not work with forwarders, and thus `-all` (the indicator that the domain sends no mail at all) should only be used for domains that absolutely never send any mail. Unfortunately, there is poor understanding of the ramifications of `-all` even within the SPF community and thus it is widely regarded as irresponsible to reject on negative results. This does not mean that SPF is useless, only that to be effective it needs to be combined with some sort of authorization setup, for example a reputation, accreditation, or domain-based whitelist/blacklist solution. SPF is only part of a comprehensive anti-spam strategy.

### 14.69.3. spf_macros

The following macro letters are expanded:

<dl className="variablelist">

<dt>s = ```&lt;sender>```</dt>

<dd>

The "s" macro expands to the ```&lt;sender>``` argument. It is an e-mail address with a localpart, an "@" character, and a domain.

</dd>

<dt>l = localpart of ```&lt;sender>```</dt>

<dd>

The "l" macro expands to just the localpart of the sender. Note also that if the original ```&lt;sender>``` had no localpart, the localpart is set to "postmaster" in initial processing.

</dd>

<dt>o = domain of ```&lt;sender>```</dt>

<dd>

The "o" macro expands to just the domain part of the sender.

</dd>

<dt>d = ```&lt;domain>```</dt>

<dd>

The "d" macro expands to the current domain on which an SPF lookup is being performed.

</dd>

<dt>i = remote connecting &lt;ip></dt>

<dd>

For IPv4 addresses, this macro expands to the standard dotted-quad format.

For IPv6 addresses, the "i" macro expands to a dot-format address; it is intended for use in %{ir}.

</dd>

<dt>p = the validated domain name of &lt;ip></dt>

<dd>

The "p" macro expands to the validated domain name of &lt;ip>. The procedure for finding the validated domain name is defined in Section 5.5 of the SPF specification. If the ```&lt;domain>``` is present in the list of validated domains, it SHOULD be used. Otherwise, if a subdomain of the ```&lt;domain>``` is present, it SHOULD be used. Otherwise, any name from the list may be used. If there are no validated domain names or if a DNS error occurs, the string "unknown" is used.

</dd>

<dt>v = the string "in-addr" for &lt;ip></dt>

<dd>

The "v" macro expands the in-addr.arpa form of the &lt;ip> that would typically be used for a PTR lookup.

</dd>

<dt>h = HELO/EHLO domain</dt>

<dd>

This is the argument passed to the HELO/EHLO command that started the current SMTP session.

</dd>

<dt>c = SMTP client IP (easily readable format)</dt>

<dd>

The "c" macro expands similarly to the "i" macro with the noted exception that IPv6 addresses are printed in hex, not dotted decimal.

</dd>

<dt>t = current timestamp</dt>

<dd>

The "t" macro expands to the decimal representation of the approximate number of seconds since the Epoch (Midnight, January 1st, 1970, UTC). This is the same value as is returned by the POSIX time() function.

</dd>

<dt>&lt;number> = zero or more digits</dt>

<dd>

The number transformer indicates the number of right-hand parts to use, after optional reversal. If a number is specified, the value MUST be nonzero. If no numbers are specified, or if the value specifies more parts than are available, all the available parts are used.

</dd>

<dt>'r' = reverse value, splitting on dots by default</dt>

<dd>

The 'r' transformer indicates a reversal operation. The original string is tokenized on the given delimiter, the tokens are reassembled in reverse order with the given delimiter.

</dd>

</dl>

Within the SPF system, macros may be expanded as the SPF specification dictates by enclosing the desired macro arguments within `%{macro}`. The `spf_macros` module also exports these macros as a general macro language that can be used within other modules. When SPF macros are used in that context, they must be name-spaced as `%{spfv1:macro}` so as not to conflict with other macro languages.

SPF macros may be followed immediately by the following transformation operations. If transformers or delimiters are provided, the replacement value for a macro letter is split into parts. After performing any reversal operation and/or removal of left-hand parts, the parts are rejoined using "." and not the original splitting characters.

By default, strings are split on "." (dots). Note that no special treatment is given to leading, trailing or consecutive delimiters, and so the list of parts may contain empty strings. Macros may specify delimiter characters which are used instead of ".".

### 14.69.4. SPF Macro Examples

These macro examples are taken directly from the SPF specification. Note that for use in Sieve, macros should be prefixed with the spfv1: namespace.

```
The ```<sender>``` is strong-bad@email.example.com.
      The IPv4 SMTP client IP is 192.0.2.3.
      The IPv6 SMTP client IP is 2001:DB8::CB01.
      The PTR domain name of the client IP is mx.example.org.

   macro                       expansion
   -------  ----------------------------
   %{s}     strong-bad@email.example.com
   %{o}                email.example.com
   %{d}                email.example.com
   %{d4}               email.example.com
   %{d3}               email.example.com
   %{d2}                     example.com
   %{d1}                             com
   %{dr}               com.example.email
   %{d2r}                  example.email
   %{l}                       strong-bad
   %{l-}                      strong.bad
   %{lr}                      strong-bad
   %{lr-}                     bad.strong
   %{l1r-}                        strong

   macro-string                                               expansion
   --------------------------------------------------------------------
   %{ir}.%{v}._spf.%{d2}             3.2.0.192.in-addr._spf.example.com
   %{lr-}.lp._spf.%{d2}                  bad.strong.lp._spf.example.com

   %{lr-}.lp.%{ir}.%{v}._spf.%{d2}
                       bad.strong.lp.3.2.0.192.in-addr._spf.example.com

   %{ir}.%{v}.%{l1r-}.lp._spf.%{d2}
                           3.2.0.192.in-addr.strong.lp._spf.example.com

   %{d2}.trusted-domains.example.net
                                example.com.trusted-domains.example.net

   IPv6:
   %{ir}.%{v}._spf.%{d2}                               1.0.B.C.0.0.0.0.
   0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.0.8.B.D.0.1.0.0.2.ip6._spf.example.com
```

| [Prev](modules.smtp_rcptto_proxy)  | [Up](modules) |  [Next](modules.static_routes) |
| 14.68. smtp_rcptto_proxy - SMTP Recipient-To Proxy  | [Table of Contents](index) |  14.70. static-routes - Static Routes |
