| [Prev](sieve.ref.cloudmark_score)  | 16.2. Sieve Function Details |  [Next](sieve.ref.disable_esmtp_capability) |

<a name="sieve.ref.commtouch_scan"></a>
## Name

commtouch_scan — email virus scan

## Synopsis

`commtouch_scan`

<a name="idp28917040"></a>
## Description

Use commtouch_scan in a data phase Sieve script and then read the message context variable commtouch-virus-threat. The possible return values are:

*   non-virus

*   unknown

*   medium

*   high

*   virus

Sieve scripts using `commtouch_scan` can be used in the data phase.

<a name="example.commtouch_scan"></a>

**Example 16.15. commtouch_scan example**

```
commtouch_scan;

if vctx_mess :is :comparator "i;ascii-casemap"  "commtouch-virus-threat" ["high", "virus"]
{
        ec_action 550 "Virus detected" "virus:Viruses rejected";
        stop;
}
```

Use of this function requires that the commtouch module be loaded.

<a name="idp28927408"></a>
## See Also

[Section 14.19, “commtouch_ctasd – Commtouch_ctasd Module”](modules.commtouch "14.19. commtouch_ctasd – Commtouch_ctasd Module")

| [Prev](sieve.ref.cloudmark_score)  | [Up](sieve.ref.files) |  [Next](sieve.ref.disable_esmtp_capability) |
| cloudmark_score  | [Table of Contents](index) |  disable_esmtp_capability |
