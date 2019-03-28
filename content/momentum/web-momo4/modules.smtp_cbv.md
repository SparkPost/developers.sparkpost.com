|     |     |     |
| --- | --- | --- |
| [Prev](modules.smtp_auth_proxy)  | Chapter 71. Modules Reference |  [Next](modules.smtp_rcptto_proxy) |

## 71.65. smtp_cbv – SMTP Callback Verification

<a class="indexterm" name="idp22983232"></a>

The smtp_cbv module allows Momentum to perform SMTP Callback Verification (CBV) in its validation process. If this module is loaded, for every inbound message, Momentum will attempt to connect back to the sender domain to determine if the sender address is valid.

### 71.65.1. Configuration

The following is an example configuration:

<a name="example.smtp_cbv.3"></a>

**Example 71.90. smtp_cbv Configuration**

```
smtp_cbv "smtp_cbv1" {
  phase = "mailfrom"
  mailfrom = ""
  map = [
    yahoo.net = "yahoo.com"
  ]
}
```

### Note

This module is not currently supported in a multiple event loop configuration. Future support is planned.

The following configuration options are available:

<dl className="variablelist">

<dt>mailfrom</dt>

<dd>

Specifies the mailfrom address to use in the SMTP Callback Verification. If not specified, a null sender address will be used.

</dd>

<dt>map</dt>

<dd>

If the sending domain matches the value listed on the left hand side, Momentum will attempt SMTP CBV with the domain listed on the right hand side.T his option supports both `mailfrom` and `rcptto`.

</dd>

<dt>phase</dt>

<dd>

Specifies the SMTP phase to start SMTP Callback Verification. Valid values are `mailfrom` or `rcptto`.

</dd>

</dl>

### 71.65.2. Message Context Variables

The smtp_cbv module sets the following message context variable:

<dl className="variablelist">

<dt>smtp_cbv_result</dt>

<dd>

If the address was verified, that is, if the remote MTA did not permanently reject the CBV attempt, the `smtp_cbv_result` variable will be set to the string `pass`. Other possible values are `error` and `transient`, reflecting permanent and transient errors during the CBV attempt.

You may act on the context variable from a script or from other validation modules as part of your site policy.

</dd>

</dl>

### 71.65.3. Abuse Issues With CBV

Using SMTP CBV can abuse a remote MTA if a large number of inbound messages are forged to look like they have been sent from a third party's domain. Exercise caution before deploying this module.

|     |     |     |
| --- | --- | --- |
| [Prev](modules.smtp_auth_proxy)  | [Up](modules) |  [Next](modules.smtp_rcptto_proxy) |
| 71.64. smtp_auth_proxy - SMTP Authentication Proxy  | [Table of Contents](index) |  71.66. smtp_rcptto_proxy - SMTP Recipient-To Proxy |

