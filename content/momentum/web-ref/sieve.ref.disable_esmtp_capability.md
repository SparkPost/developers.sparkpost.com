| [Prev](sieve.ref.commtouch_scan)  | 16.2. Sieve Function Details |  [Next](sieve.ref.discard) |

<a name="sieve.ref.disable_esmtp_capability"></a>
## Name

disable_esmtp_capability — remove a string from the EHLO response

## Synopsis

`disable_esmtp_capability` { *`string`* }

<a name="idp28940224"></a>
## Description

Use this function to remove a string from the EHLO response. This function is typically used in the connect phase. To add a string use `advertize_esmtp_capability`.

<a name="example.disable_esmtp_capability"></a>

**Example 16.16. disable_esmtp_capability example**

`disable_esmtp_capability "8bitmime"`
<a name="idp28945072"></a>
## See Also

[advertize_esmtp_capability](sieve.ref.advertize_esmtp_capability "advertize_esmtp_capability")

| [Prev](sieve.ref.commtouch_scan)  | [Up](sieve.ref.files) |  [Next](sieve.ref.discard) |
| commtouch_scan  | [Table of Contents](index) |  discard |
