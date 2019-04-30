|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.bounce_domains)  | 9.2. Configuration Files and Option Details |  [Next](conf.ref.bounce_suppress_list.php) |

<a name="conf.ref.bounce_pattern"></a>
## Name

bounce_pattern — configure the pattern that inbound email addresses must match in order to be considered bounces.

## Synopsis

`Bounce_Pattern = "Perl-compatible regular expression"`

<a name="idp8438304"></a>
## Description

When a message passed through the server bounces due to an in-band SMTP failure or is received out-of-band as a notification of failed delivery, this option will qualify the "original sending" email address as suitable for bounce classification and processing. For in-band bounces, the "original sending" email address is the envelope sender. For out-of-band delivery failures the "original sending" address is the envelope recipient. The ultimate behavior of bounce handling is dictated by the the `Bounce_Behavior` configuration setting.

If you leave the `Bounce_Pattern` setting unconfigured, then any mail to any of the `Bounce_Domains` will be considered a bounce, and processed as such.

To treat all mails originally sent from an email address like bounces-####-###@bounces.example.com as eligible for bounce processing, you would specify:

```
Bounce_Domains = ( bounces.example.com )
Bounce_Pattern = "^bounces-\d+-\d+@"
```
<a name="idp8444000"></a>
## Scope

bounce_pattern is valid in the domain and global scopes.

<a name="idp8445648"></a>
## See Also

[bounce_domains](conf.ref.bounce_domains "bounce_domains"), [bounce_behavior](conf.ref.bounce_behavior.php "bounce_behavior"), [bounce_suppress_list](conf.ref.bounce_suppress_list.php "bounce_suppress_list"), [Section 14.13, “bounce_logger – Momentum-Style Bounce Logging”](modules.bounce_logger.php "14.13. bounce_logger – Momentum-Style Bounce Logging")

|     |     |     |
| --- | --- | --- |
| [Prev](conf.ref.bounce_domains)  | [Up](conf.ref.files.php) |  [Next](conf.ref.bounce_suppress_list.php) |
| bounce_domains  | [Table of Contents](index) |  bounce_suppress_list |
