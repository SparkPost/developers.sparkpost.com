| [Prev](modules.smtp_rcptto_proxy)  | Chapter 71. Modules Reference |  [Next](modules.spf) |

## 71.67. smtpapi – SMTP Engagement Tracking

**Configuration Change. ** Engagement tracking for SMTP injections is available as of version 4.1-HF4.

The smtpapi module implements engagement tracking for SMTP injections and provides for open-tracked images and click-tracked links to be included in the message bodies.

### Note

Message Generation is a licensed feature that must be configured in order to use SMTP Engagement Tracking. For more information, see [Section 71.48, “msg_gen – Message Generation”](modules.msg_gen "71.48. msg_gen – Message Generation").

### 71.67.1. Configuration

To track engagement in SMTP messages, the smtpapi module must be included in the `ecelerity.conf` file, as follows:

`smtpapi { }`

The smtpapi module has the following dependencies:

*   cassandra_client – Used for tag storage (automatically loaded)

*   engagement_tracker – Handles the creation of open-tracked and click-tracked links and the corresponding parsing of the links when an open or click event occurs and determines if metadata is included in click tracking (automatically loaded)

    For additional information, see [Section 71.32, “engagement_tracker – HTTP Engagement Tracking”](modules.engage_tracker "71.32. engagement_tracker – HTTP Engagement Tracking").

*   msys.rest.templates.lua – Provides functionality to render the tracking links into the message

*   substitution_engine – Required to substitute the rendered links into the message (automatically loaded)

*   httpsrv – Required for http server lua bindings

### 71.67.2. Hookpoint

The smtpapi module implements the `post_validate_data_spool_each_rcpt` hook to perform its message examination and transformations.

### 71.67.3. Enabling Engagement Tracking

In the default configuration, engagement tracking for SMTP injections is disabled and the associated configuration options are set to default values. To globally enable engagement tracking, change the default configuration. See [Section 71.67.4, “Configuration Options for Engagement Tracking”](modules.smtpapi#modules.smtpapi.config.options "71.67.4. Configuration Options for Engagement Tracking").

You can override the configuration for a specific message by specifying the attributes in an optional X-MSYS-API header or through policy by specifying the corresponding context variables. In these cases, the behavior is determined by the following order of precedence, from highest to lowest:

*   Associated context variables in Lua Policy – See [Section 41.3, “Using Policy for Engagement Tracking”](engagement_tracking_smtp.policy "41.3. Using Policy for Engagement Tracking").

*   X-MSYS-API header in the SMTP message – See [Section 41.2, “Using the X-MSYS-API Header for Engagement Tracking”](x-msys-api_header "41.2. Using the X-MSYS-API Header for Engagement Tracking").

*   Configuration options in the `ecelerity.conf` file – See [Section 71.67.4, “Configuration Options for Engagement Tracking”](modules.smtpapi#modules.smtpapi.config.options "71.67.4. Configuration Options for Engagement Tracking").

For example, if the `smtpapi_open_tracking` context variable is not specified, the `open_tracking` attribute in the X-MSYS-API header is used. If this attribute is also not specified, the value of the `open_tracking_enabled` configuration option is used.

While the configuration options for engagement tracking are not required when using the X-MSYS-API header or Lua Policy, the value of the configuration option will be used if the corresponding X-MSYS-API header field or context variable is not specified. This is especially important for `tracking_domain`, as the default value of `"localhost:8080"` is not appropriate for production environments.

### 71.67.4. Configuration Options for Engagement Tracking

When tracking engagement in SMTP messages, configure the following options or ensure that the default values meet your needs. For details about each option, including the associated context variables in Lua Policy and X-MSYS-API header fields, follow each link:

*   [click_tracking_enabled](config.click_tracking_enabled "click_tracking_enabled")

*   [click_tracking_scheme](config.click_tracking_scheme "click_tracking_scheme")

*   [open_tracking_enabled](config.open_tracking_enabled "open_tracking_enabled")

*   [open_tracking_scheme](config.open_tracking_scheme "open_tracking_scheme")

*   [tracking_domain](config.tracking_domain "tracking_domain")

*   [tracking_link_expiry](config.tracking_link_expiry "tracking_link_expiry")

These options are valid in the esmtp_listener, listen, pathway, pathway_group, and peer scope.

### Note

The smtpapi does **NOT** fallback to the msg_gen level configuration, and there are **NO** X-MSYS-API header fallbacks for `click_tracking_scheme`, `open_tracking_scheme`, `tracking_domain`, and `tracking_link_expiry`. Be sure to configure these options when using the X-MSYS-API header.

The following is an example configuration in the esmtp_listener scope:

<a name="example.smtpapi.esmtp_listener"></a>

**Example 71.92. ESMTP Listener**

```
ESMTP_Listener {
        SMTP_Extensions = (XREMOTEIP XDUMPCONTEXT XCLIENT XSETCONTEXT)
        Listen "127.0.0.1:8650" {
        }
        Listen "[::1]:8650" {}
        open_tracking_enabled = "false"
        click_tracking_enabled = "true"
}
```

| [Prev](modules.smtp_rcptto_proxy)  | [Up](modules) |  [Next](modules.spf) |
| 71.66. smtp_rcptto_proxy - SMTP Recipient-To Proxy  | [Table of Contents](index) |  71.68. spf Modules – spf_macros, spf_v1, and senderid (SPF v2) |

