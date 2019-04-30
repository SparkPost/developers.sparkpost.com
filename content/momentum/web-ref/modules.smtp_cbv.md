|     |     |     |
| --- | --- | --- |
| [Prev](modules.smtp_auth_proxy)  | Chapter 14. Modules Reference |  [Next](modules.smtp_rcptto_proxy) |

## 14.67. smtp_cbv – SMTP Callback Verification

<a class="indexterm" name="idp21365536"></a>

This module allows Momentum to perform SMTP Callback Verification (CBV) in its validation process. If this module is loaded, for every inbound message, Momentum will attempt to connect back to the sender domain to determine if the sender address is valid.

### 14.67.1. Configuration

<a name="example.smtp_cbv.3"></a>

**Example 14.97. smtp_cbv module**

```
smtp_cbv "smtp_cbv1" {
  phase = "mailfrom"
  mailfrom = ""
  map = [
    yahoo.net = "yahoo.com"
  ]
}
```

**Configuration Change. ** This module is not currently supported in a multiple event loop configuration. Future support is planned. For more information about multiple event loops see [Section 2.4, “Configuring for Multiple Event Loops in Momentum 3.6”](conf.multi-core "2.4. Configuring for Multiple Event Loops in Momentum 3.6").

<dl className="variablelist">

<dt>mailfrom</dt>

<dd>

Specifies the mailfrom address to use in the SMTP Callback Verification. If not specified, a null sender address will be used.

</dd>

<dt>map</dt>

<dd>

If the sending domain matches the value listed on the left hand side, Momentum will attempt SMTP CBV with the domain listed on the right hand side.

### Note

This option supports both `mailfrom` and `rcptto` since Momentum 3.1 and Momentum 2.2.3.47\. Prior releases only provide map support for `rcptto`.

</dd>

<dt>phase</dt>

<dd>

Specifies the SMTP phase to start SMTP Callback Verification. It can be either `mailfrom` or `rcptto`.

</dd>

</dl>

The verification result will be stored in a message context variable `smtp_cbv_result`. See below for more information. You may act on the context variable from a script or from other validation modules as part of your site policy.

You can invoke callback verification from Sieve using the `smtp_callback_verify` function. For more information see [smtp_callback_verify](sieve.ref.smtp_callback_verify "smtp_callback_verify").

### 14.67.2. smtp_cbv Runtime Usage

The smtp_cbv module sets the following message context variable:

<dl className="variablelist">

<dt>smtp_cbv_result</dt>

<dd>

If the address was verified, that is, if the remote MTA did not permanently reject the CBV attempt, the `smtp_cbv_result` variable will be set to the string `pass`. Other possible values are `error` and `transient`, reflecting permanent and transient errors during the CBV attempt.

</dd>

</dl>

### 14.67.3. Abuse Issues With CBV

Using SMTP CBV can abuse a remote MTA if a large number of inbound messages are forged to look like they have been sent from a third party's domain. Exercise caution before deploying this module.


|     |     |     |
| --- | --- | --- |
| [Prev](modules.smtp_auth_proxy)  | [Up](modules) |  [Next](modules.smtp_rcptto_proxy) |
| 14.66. smtp_auth_proxy - SMTP Authentication Proxy  | [Table of Contents](index) |  14.68. smtp_rcptto_proxy - SMTP Recipient-To Proxy |
