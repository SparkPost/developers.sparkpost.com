| [Prev](sieve.ref.address)  | 16.2. Sieve Function Details |  [Next](sieve.ref.antivirus) |

<a name="sieve.ref.advertize_esmtp_capability"></a>
## Name

advertize_esmtp_capability — add a string to the EHLO response

## Synopsis

`advertize_esmtp_capability` { *`string`* }

<a name="idp28547040"></a>
## Description

Use this function to add a string to the EHLO response. This function is typically used in the connect phase. To remove a string use `disable_esmtp_capability`.

<a name="example.advertize_esmtp_capability"></a>

**Example 16.3. advertize_esmtp_capability example**

`advertize_esmtp_capability "8bitmime"`
<a name="idp28551952"></a>
## See Also

[disable_esmtp_capability](sieve.ref.disable_esmtp_capability "disable_esmtp_capability")

| [Prev](sieve.ref.address)  | [Up](sieve.ref.files) |  [Next](sieve.ref.antivirus) |
| address  | [Table of Contents](index) |  antivirus |
