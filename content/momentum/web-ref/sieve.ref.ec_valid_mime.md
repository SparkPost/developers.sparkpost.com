|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_valid_binding)  | 16.2. Sieve Function Details |  [Next](sieve.ref.eleven_scan) |

<a name="sieve.ref.ec_valid_mime"></a>
## Name

ec_valid_mime — determine if the message is valid MIME

## Synopsis

`ec_valid_mime`

<a name="idp30798768"></a>
## Description

As a part of a conditional test, ec_valid_mime evaluates true if Momentum's internal MIME parser did not find any MIME errors (improper headers or encapsulation). Note that Momentum's MIME parser follows the RFC mantra, "be lenient on what you accept." We are lenient when parsing MIME headers to attempt to find the MIME parts that certain MUAs (like Outlook) would find to aid virus detection and other processes based on content analysis.

<a name="example.ec_vaklid_mime"></a>

**Example 16.104. ec_valid_mime example**

```
if not ec_valid_mime {
  ec_header_add "X-MIME-Analysis" "Broken";
}
```


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.ec_valid_binding)  | [Up](sieve.ref.files) |  [Next](sieve.ref.eleven_scan) |
| ec_valid_binding  | [Table of Contents](index) |  eleven_scan |
