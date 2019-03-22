| [Prev](sieve.ref.ec_base64_encode)  | 16.2. Sieve Function Details |  [Next](sieve.ref.ec_ceil) |

<a name="sieve.ref.ec_bounce_classify"></a>
## Name

ec_bounce_classify — perform bounce classification on the message

## Synopsis

`($code, $classification, $orig_rcpt) = ec_bounce_classify`

<a name="idp29217168"></a>
## Description

`ec_bounce_classify` allows you to perform bounce classification on a message from within Sieve++. It returns a string list which contains three members:

*   $code - The numeric bounce classification code. See [Section E.2, “Bounce Classification Codes”](bounce_logger.classification.codes "E.2. Bounce Classification Codes") for information about the built-in classification codes. To create your own classification codes see [Section 14.11, “bounce_classifier – Bounce Classifier”](modules.bounce_classifier "14.11. bounce_classifier – Bounce Classifier").

*   $classification - The text description for the bounce classification.

*   $orig_rcpt - The original recipient of the e-mail message which generated the bounce. If this value is not able to be determined, it will be a blank string.

<a name="example.ec_bounce_classify"></a>

**Example 16.28. ec_bounce_classify example**

```
if envelope :all :regex "to" "^bounces-.+@mydomain.com$") {
  ($code, $classification, $orig_rcpt) = ec_bounce_classify;
  ec_log "Bounce ${classification} code ${code} for address ${orig_rcpt}";
  discard;
}
```

<a name="idp29226144"></a>
### See Also

[Table 9.7, “logging options”](options-summary#logging-options-table "Table 9.7. logging options")

| [Prev](sieve.ref.ec_base64_encode)  | [Up](sieve.ref.files) |  [Next](sieve.ref.ec_ceil) |
| ec_base64_encode  | [Table of Contents](index) |  ec_ceil |
