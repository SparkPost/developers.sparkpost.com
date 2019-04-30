|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.bounce_pattern)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.bounces_inline_original.php) |

<a name="conf.ref.bounce_suppress_list"></a>
## Name

bounce_suppress_list — configure a list of email addresses that may not be considered original recipients.

## Synopsis

`bounce_suppress_list = "comma-separated list of email addresses"`

<a name="idp8455984"></a>
## Description

When a Message Delivery Notification (MDN) is received, this option will suppress certain addresses from being identified as the purported original sender.

An MDN is an out-of-band notification of delivery failure. Momentum's out-of-band bounce processing capability includes an algorithm which attempts to extract the original recipient from the MDN. You can use the `Bounce_Suppress_List` option to improve the accuracy of this algorithm by excluding addresses and/or domains that you know could not have been the original recipient.

To disqualify an email address like `bounces@bounces.example.com` from being considered a potential original recipient, you would specify:

```
bounce_domains = ( bounces.example.com )
bounce_suppress_list = "bounces@bounces.example.com"
```

You can also specify domains that you would like to disqualify, as shown below. Multiple addresses can be specified by using a comma separated list.

```
bounce_domains = ( bounces.example.com )
bounce_suppress_list = "bounces@bounces.example.com,@bounces.example.org"
```
<a name="idp8462096"></a>
## Scope

`bounce_suppress_list` is valid in the global scope.

<a name="idp8464144"></a>
## See Also

[bounce_domains](conf.ref.bounce_domains "bounce_domains"), [bounce_pattern](conf.ref.bounce_pattern.php "bounce_pattern"), [bounce_behavior](conf.ref.bounce_behavior.php "bounce_behavior"), [Section 14.13, “bounce_logger – Momentum-Style Bounce Logging”](modules.bounce_logger.php "14.13. bounce_logger – Momentum-Style Bounce Logging")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.bounce_pattern)  | [Up](conf.ref.files.php) |  [Next](conf.ref.bounces_inline_original.php) |
| bounce_pattern  | [Table of Contents](index) |  bounces_inline_original |
