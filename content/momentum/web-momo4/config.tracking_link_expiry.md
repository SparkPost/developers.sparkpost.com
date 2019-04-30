|     |     |     |
| --- | --- | --- |
| [Prev](config.tracking_domain)  | Chapter 72. Configuration Options Reference |  [Next](conf.ref.transfail_drain_rate) |

<a name="config.tracking_link_expiry"></a>
## Name

tracking_link_expiry — set the expiration time for engagement tracking for SMTP injections

## Synopsis

`Tracking_Link_Expiry = 31536000`

<a name="idp27195200"></a>
## Description

**Configuration Change. ** This option is available as of version 4.1-HF4.

If open or click tracking is enabled, this option determines the amount of time, in seconds, that Momentum will wait for an engagement event in SMTP-injected messages.

This option can be set to any integer value.

The default value is `31536000` seconds (365 days).

The corresponding context variable is `smtpapi_tracking_link_expiry`. There is no corresponding X-MSYS-API header field.

<a name="idp27201248"></a>
## Scope

`tracking_link_expiry` is valid in the esmtp_listener, listen, pathway, pathway_group, and peer scope.

|     |     |     |
| --- | --- | --- |
| [Prev](config.tracking_domain)  | [Up](config.options.ref) |  [Next](conf.ref.transfail_drain_rate) |
| tracking_domain  | [Table of Contents](index) |  transfail_drain_rate |

