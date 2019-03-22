| [Prev](sieve.ref.cidrdb)  | 16.2. Sieve Function Details |  [Next](sieve.ref.commtouch_scan) |

<a name="sieve.ref.cloudmark_score"></a>
## Name

cloudmark_score — Analyze a message with Cloudmark Authority

## Synopsis

`cloudmark_score`

<a name="idp28899072"></a>
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.23.

`cloudmark_score` returns a string containing the numeric score assigned to the active message by the Cloudmark Authority Engine. Additionally, all of the validation context variables set by the Cloudmark module will be set. For a list of these variables see [Section 14.18.3, “Cloudmark Runtime Usage”](modules.cloudmark#modules.cloudmark.runtime.usage "14.18.3. Cloudmark Runtime Usage").

<a name="example.cloudmark_score"></a>

**Example 16.14. cloudmark_score example**

```
$score = cloudmark_score;
if ec_test :value "gt" :comparator "i;ascii-numeric" "${score}" "80" {
  ec_tarpit 10 "tarpit before reject";
  ec_action 554 "5.7.1 your mail has been rejected by policy";
}
```

| [Prev](sieve.ref.cidrdb)  | [Up](sieve.ref.files) |  [Next](sieve.ref.commtouch_scan) |
| cidrdb  | [Table of Contents](index) |  commtouch_scan |
