|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_valid_mime)  | 16.2. Sieve Function Details |  [Next](sieve.ref.envelope) |

<a name="sieve.ref.eleven_scan"></a>
## Name

eleven_scan — email virus scan

## Synopsis

`eleven_scan`

<a name="idp30811712"></a>
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.1.

Use of this function requires that the eleven module be loaded. The `eleven` module implements the spam filter and e-mail categorization service available from [http://www.eleven.de/](http://www.eleven.de/) .

Use eleven_scan in a data phase Sieve script and then read the context variable `eleven-result`. The possible values are:

*   non-virus

*   unknown

*   medium

*   high

*   virus

Other message context variables are:

*   eleven-majorscore – the numeric classification of the scan

*   eleven-minorscore – the numeric minor classification

*   eleven-result-subtype – the string representation corresponding to the eleven-minorscore number

For a description of the possible values for these variables see [Section 14.32.2, “Runtime Usage”](modules.eleven#modules.eleven.runtime "14.32.2. Runtime Usage").

Sieve scripts using `eleven_scan` should be used in the data phase.

<a name="idp30828816"></a>

**Example 16.105. eleven_scan example**

```
eleven_scan;

if vctx :contains "eleven-majorscore" "error" {
 ec_action 451 "AV system offline" "virus:check error";
 stop;
}

if vctx :is :comparator "i;ascii-casemap"  "eleven-result" ["spam", "dangerous"]
{
 ec_action 550 "Virus detected" "virus:Viruses rejected";
 stop;
}
```

<a name="idp30831504"></a>
## See Also

[Section 14.32, “eleven – Module”](modules.eleven "14.32. eleven – Module")


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_valid_mime)  | [Up](sieve.ref.files) |  [Next](sieve.ref.envelope) |
| ec_valid_mime  | [Table of Contents](index) |  envelope |
