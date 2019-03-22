| [Prev](p.appendix)  | Part XI. Appendix |  [Next](snmp-mib) |
## Message Responses
**Table of Contents**

* [A.1\. Responses Sorted By Codes](message_responses#responses-by-code)

This appendix lists the various responses that may be returned by the MTA when attempting delivery. Where applicable an explanation of the response is provided. If a response is marked "[internal]", this usually indicates that the message did not originate with an external host but from the MTA itself. Messages so marked usually appear in the transient and permanent failure logs. Responses are sorted by SMTP code and then enhanced code.
## A.1. Responses Sorted By Codes
Responses are sorted by SMTP code and then enhanced code.
<a name="table-code"></a>
**Table A.1. Responses sorted by code**
| SMTP Code | Enhanced Code | Message | Comment |
| --- | --- | --- | --- |
|   | 4.3.0 | Resource limitations, please try later | See message. |
|   | 4.3.5 | configuration error, please try later | See message. |
|   | 4.3.5 | message not yet parsed, can't reparse | See message. |
|   | 4.3.5 | message parse and assemble didn't round-trip | See message. |
|   | 4.7.5 | [internal] SSL certificate subject does not match host | See message. |
|   | 4.7.5 | [internal] remote node SSL certificate not signed by a valid CA | See message. |
|   | 4.7.5 | [internal] SSL cert must be signed by a valid CA | See message. |
|   | 4.7.5 | [internal] SSL cert common name does not match host | See message. |
|   | 5.5.0 | error while reading body | See message. |
|   | 5.7.0 | [internal] Message manually purged | Used console command, "fail domain name" |
|   | 5.7.0 | [internal] rejected by policy | See message. |
| 421 |   | This message is being 421'd | Service is unavailable |
| 421 | 4.3.0 | message is too large to process at this time | See message. |
| 421 | 4.3.4 | allocated resources exceeded | System outage |
| 421 | 4.4.0 | [internal] no MXs for this domain could be reached at this time | See message. |
| 421 | 4.4.5 | Service unavailable, concurrency limit reached | System outage |
| 421 | 4.4.5 | Service unavailable | System outage |
| 450 | 4.4.1 | [internal] Connection Timed Out | See message. |
| 451 |   | [internal] memory shortage while determining tls parameters | See message. |
| 451 | 4.3.0 | transaction failed | See message. |
| 451 | 4.4.1 | [internal] No valid hosts (unable to make any connections) | See message. |
| 451 | 4.4.1 | [internal] No valid hosts | See message. |
| 451 | 4.4.2 | [internal] send key failed | Cluster-related error |
| 451 | 4.4.2 | [internal] send metadata failed | Cluster-related error |
| 451 | 4.4.2 | [internal] no METADATA reponse | Cluster-related error |
| 451 | 4.4.2 | [internal] no banner | See message. |
| 451 | 4.4.2 | [internal] send HELO/EHLO failed | See message. |
| 451 | 4.4.2 | [internal] no HELO/EHLO response | See message. |
| 451 | 4.4.2 | [internal] XCLIENT argument hook failed | See message. |
| 451 | 4.4.2 | [internal] send XCLIENT failed | See message. |
| 451 | 4.4.2 | [internal] no XCLIENT response | See message. |
| 451 | 4.4.2 | [internal] MAIL FROM argument hook failed | See message. |
| 451 | 4.4.2 | [internal] MAIL FROM arguments too long | See message. |
| 451 | 4.4.2 | [internal] send MAIL FROM failed | See message. |
| 451 | 4.4.2 | [internal] no MAIL FROM response | See message. |
| 451 | 4.4.2 | [internal] RCPT TO argument hook failed | See message. |
| 451 | 4.4.2 | [internal] RCPT TO arguments too long | See message. |
| 451 | 4.4.2 | [internal] send RCPT TO failed | See message. |
| 451 | 4.4.2 | [internal] no RCPT TO response | See message. |
| 451 | 4.4.2 | [internal] send DATA failed | See message. |
| 451 | 4.4.2 | [internal] no DATA response | See message. |
| 451 | 4.4.2 | [internal] send BODY failed | See message. |
| 451 | 4.4.2 | [internal] no BODY response | See message. |
| 451 | 4.4.2 | [internal] send RSET failed | See message. |
| 451 | 4.4.2 | [internal] no RSET response | See message. |
| 451 | 4.4.2 | [internal] connection closed by remote host | See message. |
| 451 | 4.4.2 | [internal] send metadatadicts failed | Cluster-related error |
| 451 | 4.7.5 | [internal] send XCLUSTERMETADATA failed | Cluster-related error |
| 451 | 4.7.5 | [internal] no clustermetadata go-ahead | Cluster-related error |
| 451 | 4.7.5 | [internal] send STARTTLS failed | See message. |
| 451 | 4.7.5 | [internal] no tls go-ahead | See message. |
| 451 | 4.7.5 | [internal] TLS negotiation failed | See message. |
| 451 | 4.7.6 | [internal] XCLUSTERMETADATA required but not advertised | Cluster-related error |
| 451 | 4.7.6 | [internal] STARTTLS required but not advertised | See message. |
| 451 | 4.7.6 | [internal] XCLIENT required but not advertised | See message. |
| 451 | 4.7.6 | [internal] XCLUSTERMETADATA supported version not advertised | Cluster-related error |
| 452 | 4.5.3 | Service unavailable, batch limit reached | See message. |
| 452 | 4.5.3 | Service unavailable, recipients per connection limit reached | See message. |
| 452 | 4.5.3 | Service unavailable, recipients per message limit reached | See message. |
| 454 |   | certificate not yet valid: possible clock skew | SSL related |
| 454 |   | certificate expired | SSL related |
| 454 | 4.4.4 | [internal] no MX or A for domain | See message. |
| 500 | 5.5.2 | unrecognized command | See message. |
| 501 | 5.5.1 | MAIL FROM already established | See message. |
| 501 | 5.5.2 | RCPT TO syntax error | Triggered by an invalid address |
| 501 | 5.5.2 | MAIL FROM syntax error | Triggered by an invalid address |
| 501 | 5.5.2 | invalid EHLO | See message. |
| 501 | 5.5.2 | invalid HELO | See message. |
| 501 | 5.5.2 | MAIL FROM syntax error | See message. |
| 501 | 5.5.2 | RCPT TO syntax error | See message. |
| 501 | 5.5.4 | invalid arguments to RSET | See message. |
| 501 | 5.5.4 | unexpected argument to DATA | See message. |
| 501 | 5.5.4 | Syntax error (no parameters allowed) | See message. |
| 501 | 5.5.4 | unexpected command | See message. |
| 503 |   | RCPT TO without MAIL FROM | See message. |
| 503 | 5.5.1 | DATA without MAIL FROM | See message. |
| 503 | 5.5.1 | DATA without RCPT TO | See message. |
| 503 | 5.5.1 | bad sequence of commands | See message. |
| 550 | 5.3.0 | [internal] message body missing | See message. |
| 550 | 5.4.4 | [internal] NULL MX domain does not accept mail | See message. |
| 550 | 5.5.1 | RFC2821 HELO/EHLO needed | See message. |
| 550 | 5.6.0 | Lone CR or LF in headers (see RFC2822 section 2.2) | See message. |
| 550 | 5.6.0 | Missing CR LF . CR LF | See message. |
| 550 | 5.6.0 | Required headers not found (see RFC2822 section 3.6) | See message. |
| 550 | 5.6.0 | Header not terminated by CR LF (see RFC2822 section 2.2) | See message. |
| 550 | 5.6.0 | Invalid header found (see RFC2822 section 3.6) | See message. |
| 550 | 5.6.0 | Missing required RFC2822 Date field (see RFC2822 section 3.6) | See message. |
| 550 | 5.6.0 | Lone CR or LF in body (see RFC2822 section 2.3) | See message. |
| 550 | 5.6.0 | Header line too long (see RFC2822 section 3.5) | See message. |
| 550 | 5.6.0 | Body line too long (see RFC2822 section 3.5) | See message. |
| 550 | 5.7.1 | relaying denied | See message. |
| 550 | 5.7.1 | [internal] discarded by policy | See message. |
| 550 | 5.7.1 | [internal] processed as FBL message, and disposition is blackhole | FBL module |
| 550 | 5.7.1 | 550 [internal] [oob] | bounce_logger module |
| 551 | 5.4.6 | [internal] Private/Loopback Address | See message. |
| 551 | 5.7.1 | recipient blackholed | See message. |
| 552 | 5.3.4 | message size limit exceeded | See message. |
| 554 |   | No Valid Domain | See message. |
| 554 | 5.4.4 | [internal] Domain Lookup Failed | See message. |
| 554 | 5.4.5 | [internal] Delivery not attempted (message expired) | See message. |
| 554 | 5.4.7 | [internal] exceeded max retries without delivery | See message. |
| 554 | 5.4.7 | [internal] exceeded max time without delivery | See message. |
| 554 | 5.7.0 | [internal] Blackholed | "Blackhole" option is set to "internal" |
| 554 | 5.7.0 | [internal] Message manually purged | Purged messages from the system console |

| [Prev](p.appendix)  | [Up](p.appendix) |  [Next](snmp-mib) |
| Part XI. Appendix  | [Table of Contents](index) |  Appendix B. MIB Files |
