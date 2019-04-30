|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.add_recipient)  | 16.2. Sieve Function Details |  [Next](sieve.ref.advertize_esmtp_capability) |

<a name="sieve.ref.address"></a>
## Name

address — return the address from a header

## Synopsis

`address` { header_element } { *`string`* }

<a name="idp28527664"></a>
## Description

This function implements the standard "address" Sieve test; it parses addresses out of the header you request and tests against them. For more information see [Section 8.2, “Sieve's Basic Syntax”](sieve.syntax.basic "8.2. Sieve's Basic Syntax").

<a name="example.address"></a>

**Example 16.2. address example**

```
if address ["From", "To"] "lemon@test.messagesystems.com" {
    ec_log "lemon";
} else {
    ec_log "not-lemon";
}
```

This function returns the first matching address as a string value. When using the `test` form of address, with a comparator or regex, it will match against all addresses. See also [Section 8.2, “Sieve's Basic Syntax”](sieve.syntax.basic "8.2. Sieve's Basic Syntax").

<a name="idp28534272"></a>
## See Also

[envelope](sieve.ref.envelope "envelope")


|     |     |     |
| --- | --- | --- |
| [Prev](sieve.ref.add_recipient)  | [Up](sieve.ref.files) |  [Next](sieve.ref.advertize_esmtp_capability) |
| add_recipient  | [Table of Contents](index) |  advertize_esmtp_capability |
