| [Prev](conf.ref.clear_mail_queue_maintainers)  | Chapter 72. Configuration Options Reference |  [Next](config.click_tracking_scheme) |

<a name="config.click_tracking_enabled"></a>
## Name

click_tracking_enabled — enable or disable click tracking for SMTP injections

## Synopsis

`Click_Tracking_Enabled = "true|false"`

<a name="idp23874992"></a>
## Description

**Configuration Change. ** This option is available as of version 4.1-HF4.

When click tracking is enabled, Momentum converts the target links in the top text/plain and top text/html part of SMTP-injected messages into click-tracked links . When a recipient clicks the link, Momentum reports this engagement event as a click.

This option can be set to the following:

*   `true` – Click tracking event data will be available for SMTP-injected messages.

*   `false` – Click tracking event data will not be available for SMTP-injected messages.

The default value is `false`.

The corresponding context variable is `smtpapi_click_tracking`, and the corresponding X-MSYS-API header field is `options.click_tracking` .

<a name="idp23885264"></a>
## Scope

`click_tracking_enabled` is valid in the esmtp_listener, listen, pathway, pathway_group, and peer scope.

| [Prev](conf.ref.clear_mail_queue_maintainers)  | [Up](config.options.ref) |  [Next](config.click_tracking_scheme) |
| clear_mail_queue_maintainers  | [Table of Contents](index) |  click_tracking_scheme |

